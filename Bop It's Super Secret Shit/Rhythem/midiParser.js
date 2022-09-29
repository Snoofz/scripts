class Buffer {
	constructor(buffer) {
		this.buffer = buffer;
		this.dv = new DataView(this.buffer);
		this.index = 0;
		this.done = false;
	}

	get byteLength() {
		return this.dv.byteLength;
	}

	readUInt8() {
		return this.dv.getUint8(this.index++);
	}

	readUInt16BE() {
		let value = this.dv.getUint16(this.index, false);
		this.index += 2;
		return value;
	}
	readUInt16LE() {
		let value = this.dv.getUint16(this.index, true);
		this.index += 2;
		return value;
	}

	readUInt24BE() {
		let value = this.readUInt8() << 16;
		value |= this.readUInt8() << 8;
		value |= this.readUInt8() << 0;
		return value;
	}

	readUInt32BE() {
		let value = this.dv.getUint32(this.index, false);
		this.index += 4;
		return value;
	}
	readUInt32LE() {
		let value = this.dv.getUint32(this.index, true);
		this.index += 4;
		return value;
	}

	readVarInt() {
		let value = 0;
		let shift = 0;

		let byte;

		do {
			byte = this.readUInt8();
			value = (value << shift) | (byte & 0x7F);
			shift += 7;
		} while ((byte & 0x80) !== 0);

		return value;
	}

	readString(length) {
		let string = "";
		for (let i=0; i<length; i++) {
			string += String.fromCharCode(this.readUInt8());
		}
		return string;
	}
	readZString() {
		let string = "";
		
		while (true) {
			let byte = this.readUInt8();
			if (byte === 0) break;
			
			string += String.fromCharCode(byte);
		}
		return string;
	}

	readBuffer(length) {
		if (this.index + length > this.byteLength) {
			console.warn("Buffer is out of bounds");
		}
		let buffer = new Buffer(this.buffer.slice(this.index, this.index + length));
		this.index += length;
		return buffer;
	}
}

class MidiChunk {
	constructor(type, buffer) {
		this.type = type;
		this.buffer = buffer;
	}
}

class MidiHeaderChunk extends MidiChunk {
	constructor(buffer) {
		super("MThd", buffer);

		this.format = this.buffer.readUInt16BE();
		this.tracks = this.buffer.readUInt16BE();
		this.division = this.buffer.readUInt16BE();
	}
}

class MidiEvent {
	constructor(deltaTime) {
		this.deltaTime = deltaTime;
	}
}

class MidiVoiceEvent extends MidiEvent {
	constructor(deltaTime, channel) {
		super(deltaTime);
		this.channel = channel;
	}
}

class MidiNoteOffEvent extends MidiVoiceEvent {
	constructor(deltaTime, channel, key, velocity) {
		super(deltaTime, channel);
		this.key = key;
		this.velocity = velocity;
	}
}
class MidiNoteOnEvent extends MidiVoiceEvent {
	constructor(deltaTime, channel, key, velocity) {
		super(deltaTime, channel);
		this.key = key;
		this.velocity = velocity;
	}
}
class MidiAftertouchEvent extends MidiVoiceEvent {
	constructor(deltaTime, channel, key, pressure) {
		super(deltaTime, channel);
		this.key = key;
		this.pressure = pressure;
	}
}
class MidiControllerChangeEvent extends MidiVoiceEvent {
	constructor(deltaTime, channel, controller, value) {
		super(deltaTime, channel);
		this.controller = controller;
		this.value = value;
	}
}
class MidiProgramChangeEvent extends MidiVoiceEvent {
	constructor(deltaTime, channel, program) {
		super(deltaTime, channel);
		this.program = program;
	}
}
class MidiChannelKeyPressureEvent extends MidiVoiceEvent {
	constructor(deltaTime, channel, pressure) {
		super(deltaTime, channel);
		this.pressure = pressure;
	}
}
class MidiPitchBendEvent extends MidiVoiceEvent {
	constructor(deltaTime, channel, value) {
		super(deltaTime, channel);
		this.value = value;
	}
}

class MidiSysexEvent extends MidiEvent {
	constructor(deltaTime) {
		super(deltaTime);
	}
}

class MidiMetaEvent extends MidiEvent {
	constructor(deltaTime, data) {
		super(deltaTime);
		this.data = data;
	}
}

class MidiSequenceNumberEvent extends MidiMetaEvent {
	constructor(deltaTime, data, number) {
		super(deltaTime, data);
		this.number = number;
	}
}
class MidiTextEvent extends MidiMetaEvent {
	constructor(deltaTime, data, text) {
		super(deltaTime, data);
		this.text = text;
	}
}
class MidiCopyrightNoticeEvent extends MidiMetaEvent {
	constructor(deltaTime, data, text) {
		super(deltaTime, data);
		this.text = text;
	}
}
class MidiTrackNameEvent extends MidiMetaEvent {
	constructor(deltaTime, data, text) {
		super(deltaTime, data);
		this.text = text;
	}
}
class MidiInstrumentNameEvent extends MidiMetaEvent {
	constructor(deltaTime, data, text) {
		super(deltaTime, data);
		this.text = text;
	}
}
class MidiLyricEvent extends MidiMetaEvent {
	constructor(deltaTime, data, text) {
		super(deltaTime, data);
		this.text = text;
	}
}
class MidiMarkerEvent extends MidiMetaEvent {
	constructor(deltaTime, data, text) {
		super(deltaTime, data);
		this.text = text;
	}
}
class MidiCuePointEvent extends MidiMetaEvent {
	constructor(deltaTime, data, text) {
		super(deltaTime, data);
		this.text = text;
	}
}
class MidiChannelPrefixEvent extends MidiMetaEvent {
	constructor(deltaTime, data, channel) {
		super(deltaTime, data);
		this.channel = channel;
	}
}
class MidiPortPrefixEvent extends MidiMetaEvent {
	constructor(deltaTime, data, port) {
		super(deltaTime, data);
		this.port = port;
	}
}
class MidiEndOfTrackEvent extends MidiMetaEvent {
	constructor(deltaTime, data) {
		super(deltaTime, data);
	}
}
class MidiSetTempoEvent extends MidiMetaEvent {
	constructor(deltaTime, data, tempo) {
		super(deltaTime, data);
		this.tempo = tempo;
	}
}
class MidiSetSMTPEOffsetEvent extends MidiMetaEvent {
	constructor(deltaTime, data, hours, minutes, seconds, frames, frameFractions) {
		super(deltaTime, data);
		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds;
		this.frames = frames;
		this.frameFractions = frameFractions;
	}
}
class MidiTimeSignatureEvent extends MidiMetaEvent {
	constructor(deltaTime, data, numerator, denominator, clocks, notes) {
		super(deltaTime, data);
		this.numerator = numerator;
		this.denominator = denominator;
		this.clocks = clocks;
		this.notes = notes;
	}
}
class MidiKeySignatureEvent extends MidiMetaEvent {
	constructor(deltaTime, data, halfNotes, major) {
		super(deltaTime, data);
		this.halfNotes = halfNotes;
		this.major = major;
	}
}
class MidiSequencerEvent extends MidiMetaEvent {
	constructor(deltaTime, data, id, event) {
		super(deltaTime, data);
		this.id = id;
		this.event = event;
	}
}
class MidiUnknkownMetaEvent extends MidiMetaEvent {
	constructor(deltaTime, data) {
		super(deltaTime, data);
	}
}


class MidiTrackChunk extends MidiChunk {
	constructor(buffer) {
		super("MTtr", buffer);

		this.events = [];

		let lastStatus;

		while(this.buffer.index < this.buffer.byteLength) {
			let deltaTime = this.buffer.readVarInt();
			let status = this.buffer.readUInt8();
			if ((status & 0x80) === 0) {
				if (!lastStatus) {
					throw "First event in track cannot ommit status";
				}

				status = lastStatus;
				this.buffer.index--; // kinf of ugly
			} else {
				lastStatus = status;
			}
			let eventId = status >> 4;
			let channel = status & 0x0F;

			let event;

			switch(eventId) {
				case 0x8: { // Note off
					let key = this.buffer.readUInt8();
					let velocity = this.buffer.readUInt8();
					event = new MidiNoteOffEvent(deltaTime, channel, key, velocity);
					break;
				}
				case 0x9: { // Note on
					let key = this.buffer.readUInt8();
					let velocity = this.buffer.readUInt8();
					event = new MidiNoteOnEvent(deltaTime, channel, key, velocity);
					break;
				}
				case 0xA: { // Aftertouch
					let key = this.buffer.readUInt8();
					let pressure = this.buffer.readUInt8();
					event = new MidiAftertouchEvent(deltaTime, channel, key, pressure);
					break;
				}
				case 0xB: { // Controller change
					let controller = this.buffer.readUInt8();
					let value = this.buffer.readUInt8();
					event = new MidiControllerChangeEvent(deltaTime, channel, controller, value);
					break;
				}
				case 0xC: { // Program change
					let program = this.buffer.readUInt8();
					event = new MidiProgramChangeEvent(deltaTime, channel, program);
					break;
				}
				case 0xD: { // Channel key pressure
					let pressure = this.buffer.readUInt8();
					event = new MidiChannelKeyPressureEvent(deltaTime, channel, pressure);
					break;
				}
				case 0xE: { // Pitch bend
					let lsb = this.buffer.readUInt8();
					let msb = this.buffer.readUInt8();

					let value = (msb << 7) | lsb;
					event = new MidiPitchBendEvent(deltaTime, channel, value);
					break;
				}
				case 0xF: { // Sysex & meta event
					if (channel === 0x0 || channel === 0x7) { // Sysex
						let length = this.buffer.readVarInt();
						let data = this.buffer.readBuffer(length);
						event = new MidiSysexEvent(deltaTime, data);
					} else if (channel === 0xF) { // Meta
						let metaEvent = this.buffer.readUInt8();
						let length = this.buffer.readVarInt();
						let data = this.buffer.readBuffer(length);
						switch(metaEvent) {
							case 0x00: { // Sequence number
								let sequence = data.readUInt16BE();
								event = new MidiSequenceNumberEvent(deltaTime, data, sequence);
								break;
							}
							case 0x01: { // Text
								let text = data.readString(length);
								event = new MidiTextEvent(deltaTime, data, text);
								break;
							}
							case 0x02: { // Copyright notice
								let text = data.readString(length);
								event = new MidiCopyrightNoticeEvent(deltaTime, data, text);
								break;
							}
							case 0x03: { // Sequence / track name
								let text = data.readString(length);
								event = new MidiTrackNameEvent(deltaTime, data, text);
								break;
							}
							case 0x04: { // Instrument name
								let text = data.readString(length);
								event = new MidiInstrumentNameEvent(deltaTime, data, text);
								break;
							}
							case 0x05: { // Lyric
								let text = data.readString(length);
								event = new MidiLyricEvent(deltaTime, data, text);
								break;
							}
							case 0x06: { // Marker
								let text = data.readString(length);
								event = new MidiMarkerEvent(deltaTime, data, text);
								break;
							}
							case 0x07: { // Cue point
								let text = data.readString(length);
								event = new MidiCuePointEvent(deltaTime, data, text);
								break;
							}
							case 0x20: { // Channel prefix
								let channel = data.readUInt8();
								event = new MidiChannelPrefixEvent(deltaTime, data, channel);
								break;
							}
							case 0x2F: { // End of track
								event = new MidiEndOfTrackEvent(deltaTime, data);
								break;
							}
							case 0x51: { // Set tempo
								let value = data.readUInt24BE();
								event = new MidiSetTempoEvent(deltaTime, data, value);
								break;
							}
							case 0x54: { // SMTPE offset
								let hours = data.readUInt8();
								let minutes = data.readUInt8();
								let seconds = data.readUInt8();
								let frames = data.readUInt8();

								let frameFractions = data.readUInt8();
								event = new MidiSetSMTPEOffsetEvent(deltaTime, data, hours, minutes, seconds, frames, frameFractions);
								break;
							}
							case 0x58: { // Time signature
								let numerator = data.readUInt8();
								let denominator = Math.pow(2, data.readUInt8());
								let clocks = data.readUInt8();
								let notes = data.readUInt8();
								event = new MidiTimeSignatureEvent(deltaTime, data, numerator, denominator, clocks, notes);
								break;
							}
							case 0x59: { // Key signature
								let halfNotes = data.readUInt8();
								let major = !!data.readUInt8();
								event = new MidiKeySignatureEvent(deltaTime, data, halfNotes, major);
								break;
							}
							case 0x7F: { // Sequencer event
								let id = data.readUInt8();
								let seqEvent = data.readBuffer(length - 1);
								event = new MidiSequencerEvent(deltaTime, data, id, seqEvent);
								break;
							}
							default: {
								event = new MidiUnknkownMetaEvent(deltaTime, data);
								break;
							}
						}
					} else {
						throw "Invalid event type";
					}
				}
			}

			this.events.push(event);
		}
	}
}

class MidiFile {
	constructor(buffer) {
		this.buffer = new Buffer(buffer);

		this.format;


		this.chunks = [];

		while(this.buffer.index + 8 < this.buffer.byteLength) {
			let type = this.buffer.readString(4);
			let length = this.buffer.readUInt32BE();
			let buffer = this.buffer.readBuffer(length);

			let chunk;
			switch(type) {
				case "MThd":
					chunk = new MidiHeaderChunk(buffer);
					break;
				case "MTrk":
					chunk = new MidiTrackChunk(buffer);
					break;
			}

			this.chunks.push(chunk);
		}
	}
}
