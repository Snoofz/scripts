class MidiTrack {
	constructor(player, chunk) {
		this.player = player;
		this.events = chunk.events;

		this.length = 0;
		for (let i=0; i< this.events.length; i++) {
			this.length += this.events[i].deltaTime;
		}

		this.index = 0;
		this.lastTime = 0;
	}

	parseEvent(event) {
		if (event instanceof MidiVoiceEvent) {
			this.player.parseEvent(event);
		} else if (event instanceof MidiSetTempoEvent) {
			this.player.bpm = 60000000 / event.tempo;
		}
	}

	tick(delta) {
		while(true) {
			if (this.index >= this.events.length) {
				break;
			}

			let event = this.events[this.index];

			if (this.lastTime + event.deltaTime - this.player.time <= 0) {
				this.lastTime += event.deltaTime;
				this.parseEvent(event);
				this.index++;
			} else {
				break;
			}
		}
	}
}

class MidiPlayer {
	constructor() {
		this.tracks = [];

		this.playing = false;
		this.speed = 1;
		this.bpm = 120;
		this.time = 0;
	}

	loadMidi(midi) {
		this.tracks = [];
		this.time = 0;
		this.length = 0;
		this.bpm = 120;
		this.octave = 0;
		this.sustain = false;
		this.delay = 75;
		this.echo = 0;
		this.midi = midi;

		if (!(this.midi.chunks[0] instanceof MidiHeaderChunk)) {
			throw "No header chunk";
		}

		let header = this.midi.chunks[0];

		this.format = header.format;

		if ((header.division & 0x0800) === 1) {
			throw "SMPTA time format not yet supported";
		} else {
			this.ticksPerQuarterNote = header.division;
		}

		for (let i=1; i<this.midi.chunks.length; i++) {
			let chunk = this.midi.chunks[i];
			if (chunk instanceof MidiTrackChunk) {
				let track = new MidiTrack(this, chunk);
				this.length = Math.max(track.length, this.length);
				this.tracks.push(track);
			}
		}
	}

	parseEvent(event) {
		if (event instanceof MidiNoteOnEvent) {
			if (event.channel === 9) {
				return;
			}

			if (event.velocity === 0) {
				if (!this.sustain) {
				Piano_1.Piano.release({
                            note: Piano_1.Piano.noteToKey[event.key],
                            channel: event.channel,
                            emit: true,
                            instrumentName:Piano_1.Piano.ACTIVE_INSTRUMENT,
                            socketID: PianoRhythm.PianoRhythm.CLIENT.socketID,
                        }, true);
				}
			} else {
				    if (this.octave >= 4) {
				    Piano_1.Piano.press({
                        velocity: event.velocity,
                        channel: event.channel,
                        emit: true,
                        source: Piano_1.NOTE_SOURCE.MIDI,
                        note: Piano_1.Piano.noteToKey[event.key - 24],
                        socketID: PianoRhythm.PianoRhythm.CLIENT.socketID,
                    });
				    }
				    if (this.octave >= 3) {
				    Piano_1.Piano.press({
                        velocity: event.velocity,
                        channel: event.channel,
                        emit: true,
                        source: Piano_1.NOTE_SOURCE.MIDI,
                        note: Piano_1.Piano.noteToKey[event.key + 24],
                        socketID: PianoRhythm.PianoRhythm.CLIENT.socketID,
                    });
				    }
				    if (this.octave >= 2) {
				    Piano_1.Piano.press({
                        velocity: event.velocity,
                        channel: event.channel,
                        emit: true,
                        source: Piano_1.NOTE_SOURCE.MIDI,
                        note: Piano_1.Piano.noteToKey[event.key - 12],
                        socketID: PianoRhythm.PianoRhythm.CLIENT.socketID,
                    });
				    }
				    if (this.octave >= 1) {
				    Piano_1.Piano.press({
                        velocity: event.velocity,
                        channel: event.channel,
                        emit: true,
                        source: Piano_1.NOTE_SOURCE.MIDI,
                        note: Piano_1.Piano.noteToKey[event.key + 12],
                        socketID: PianoRhythm.PianoRhythm.CLIENT.socketID,
                    });
				    }
				    if (this.octave >= 0) {
				    Piano_1.Piano.press({
                        velocity: event.velocity,
                        channel: event.channel,
                        emit: true,
                        source: Piano_1.NOTE_SOURCE.MIDI,
                        note: Piano_1.Piano.noteToKey[event.key],
                        socketID: PianoRhythm.PianoRhythm.CLIENT.socketID,
                    });
				    }
					for (var i = 0; i< this.echo; i++) {
					    setTimeout(async function() {
						Piano_1.Piano.press({
                        velocity: event.velocity,
                        channel: event.channel,
                        emit: true,
                        source: Piano_1.NOTE_SOURCE.MIDI,
                        note: Piano_1.Piano.noteToKey[event.key],
                        socketID: PianoRhythm.PianoRhythm.CLIENT.socketID,
                    });	
						},this.delay)					
				  }
				
               
			}
		} else if (event instanceof MidiNoteOffEvent) {
			if (event.channel === 9) {
				return;
			}
				if(!this.sustain) {
				Piano_1.Piano.release({
                            note: Piano_1.Piano.noteToKey[event.key],
                            channel: event.channel,
                            emit: true,
                            instrumentName:Piano_1.Piano.ACTIVE_INSTRUMENT,
                            socketID: PianoRhythm.PianoRhythm.CLIENT.socketID,
                        }, false);
				}
		}
	}

	tick(delta) {
		let deltaTicks = delta / 1000 * (this.bpm / 60) * this.ticksPerQuarterNote;
		this.time += deltaTicks;

		switch(this.format) {
			case 0:
				this.tracks[0].tick(deltaTicks);
				break;
			case 1:
				for (let i=0; i<this.tracks.length; i++) {
					this.tracks[i].tick(deltaTicks);
				}
				break;
			case 2:
				// Todo
				break;
		}

		if (this.time >= this.length) {
			this.time = this.length;
			this.pause();
		}
	}

	setTime(time) {
		// TODO skip notes
		this.time = time;
	}

	play() {
		if (this.playing) return;

		this.playing = true;

		let lastTime = Date.now();
		this.interval = setInterval(() => {
			let delta = Date.now() - lastTime;
			lastTime = Date.now();
			this.tick(delta * this.speed);
		}, 1000 / 60);
	}

	pause() {
		this.playing = false;
		clearInterval(this.interval);
	}
}

let midiPlayer = new MidiPlayer();

function uploadMidi() {
	let input = document.createElement("input");
	input.type = "file";
	input.accept = "audio/midi";
	input.addEventListener("change", function() {
		let reader = new FileReader();
		reader.addEventListener("load", function() {
			let midiFile = new MidiFile(reader.result);
			midiPlayer.loadMidi(midiFile);
			console.log(midiFile);
		});
		reader.readAsArrayBuffer(input.files[0]);
	});
	input.click();
}
