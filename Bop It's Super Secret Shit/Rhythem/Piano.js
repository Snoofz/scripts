"use strict";
const PianoRhythm_1 = require("./PianoRhythm");
window.PianoRhythm = PianoRhythm_1;
const AudioEngine_1 = require("./AudioEngine");
const PianoRhythmPlayer_1 = require("./PianoRhythmPlayer");
(function(KEYBOARD_LAYOUT) {
    KEYBOARD_LAYOUT[KEYBOARD_LAYOUT["ANY"] = 0] = "ANY";
    KEYBOARD_LAYOUT[KEYBOARD_LAYOUT["VIRTUAL_PIANO"] = 1] = "VIRTUAL_PIANO";
    KEYBOARD_LAYOUT[KEYBOARD_LAYOUT["MPP"] = 2] = "MPP";
    KEYBOARD_LAYOUT[KEYBOARD_LAYOUT["PIANORHYTHM"] = 3] = "PIANORHYTHM";
})(exports.KEYBOARD_LAYOUT || (exports.KEYBOARD_LAYOUT = {}));
var KEYBOARD_LAYOUT = exports.KEYBOARD_LAYOUT;
(function(NOTE_SOURCE) {
    NOTE_SOURCE[NOTE_SOURCE["ANY"] = 0] = "ANY";
    NOTE_SOURCE[NOTE_SOURCE["MIDI"] = 1] = "MIDI";
    NOTE_SOURCE[NOTE_SOURCE["KEYBOARD"] = 2] = "KEYBOARD";
    NOTE_SOURCE[NOTE_SOURCE["MOUSE"] = 3] = "MOUSE";
    NOTE_SOURCE[NOTE_SOURCE["TOUCH"] = 4] = "TOUCH";
})(exports.NOTE_SOURCE || (exports.NOTE_SOURCE = {}));
var NOTE_SOURCE = exports.NOTE_SOURCE;
(function(eAnimationType) {
    eAnimationType[eAnimationType["BASIC"] = 0] = "BASIC";
    eAnimationType[eAnimationType["SQUARES"] = 1] = "SQUARES";
    eAnimationType[eAnimationType["CIRCLES"] = 2] = "CIRCLES";
})(exports.eAnimationType || (exports.eAnimationType = {}));
var eAnimationType = exports.eAnimationType;
 var count = 0;
                var size = 128;
                var rainbow = new Array(size);

                
                
                for (var i = 0; i < size; i++) {
                    var red = sin_to_hex(i, 0 * Math.PI * 2 / 3); // 0   deg
                    var blue = sin_to_hex(i, 1 * Math.PI * 2 / 3); // 120 deg
                    var green = sin_to_hex(i, 2 * Math.PI * 2 / 3); // 240 deg
                
                
                    rainbow[i] = "#" + red + green + blue;
                }
                
                
                function sin_to_hex(i, phase) {
                    var sin = Math.sin(Math.PI / size * 2 * i + phase);
                    var int = Math.floor(sin * 127) + 128;
                    var hex = int.toString(16);
                
                
                    return hex.length === 1 ? "0" + hex : hex;
                }
                                window.rainbow = rainbow;
                                window.count = count;
class Piano {
    static get SHOW_PIANO() {
        return this._SHOW_PIANO;
    }
    static set SHOW_PIANO(value) {
        if (PianoRhythm_1.PianoRhythm.CANVAS_PARENT)
            PianoRhythm_1.PianoRhythm.CANVAS_PARENT.style.visibility = (value) ? "visible" : "hidden";
        if (PianoRhythm_1.PianoRhythm.CANVAS_BG)
            PianoRhythm_1.PianoRhythm.CANVAS_BG.style.visibility = (value) ? "visible" : "hidden";
        if (PianoRhythm_1.PianoRhythm.CANVAS_INPUT)
            PianoRhythm_1.PianoRhythm.CANVAS_INPUT.style.visibility = (value) ? "visible" : "hidden";
        if (Piano.BOXSHADOW)
            Piano.BOXSHADOW[0].style.visibility = (value) ? "visible" : "hidden";
    }
    static get ACTIVE_INSTRUMENT() {
        return this._ACTIVE_INSTRUMENT;
    }
    static set ACTIVE_INSTRUMENT(value) {
        if (PianoRhythm_1.PianoRhythm.mouseChannel)
            PianoRhythm_1.PianoRhythm.mouseChannel.publish({
                instrument: value,
                type: "instrument",
                socketID: PianoRhythm_1.PianoRhythm.SOCKET.id,
            });
        this._ACTIVE_INSTRUMENT = value;
    }
    static initialize() {
        Piano.initNoteBuffering();
        Piano.NOTE_QUOTA = new NoteQuota();
        AudioEngine_1.AudioEngine.initialize();
        (function() {
            let A0 = 0x15;
            let C8 = 0x6C;
            let number2key = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
            for (let n = A0; n <= C8; n++) {
                let octave = (n - 12) / 12 >> 0;
                let name = number2key[n % 12] + octave;
                Piano.keyToNote[name] = n;
                Piano.noteToKey[n] = name;
            }
        })();
        let mouse_down = false;
        let last_key = null;
        $(PianoRhythm_1.PianoRhythm.CANVAS_INPUT).mousedown(function(event) {
            if (PianoRhythm_1.PianoRhythm.CLIENT) {
                if (PianoRhythm_1.PianoRhythm.CLIENT_FOCUS !== PianoRhythm_1.CLIENT_FOCUS.PIANO)
                    PianoRhythm_1.PianoRhythm.FOCUS_PIANO();
            }
            if (PianoRhythm_1.PianoRhythm.ROOM_SETTINGS.ALLOWED_TOOL != NOTE_SOURCE.ANY && PianoRhythm_1.PianoRhythm.ROOM_SETTINGS.ALLOWED_TOOL != NOTE_SOURCE.MOUSE)
                return false;
            mouse_down = true;
            event.preventDefault();
            if (PianoRhythm_1.PianoRhythm.onlyHostCanPlay())
                return false;
            let pos = PianoRhythm_1.PianoRhythm.translateMouseEvent(event);
            let hit = Piano.KeyGetHit(pos.x, pos.y);
            if (hit && PianoRhythm_1.PianoRhythm.CLIENT) {
                Piano.press({
                    color: rainbow[count],//(PianoRhythm_1.PianoRhythm.CLIENT && PianoRhythm_1.PianoRhythm.CLIENT.color) ? PianoRhythm_1.PianoRhythm.CLIENT.color : PianoRhythm_1.PianoRhythm.COLORS.base4,
                    velocity: Math.round(hit.v * 100) / 100,
                    channel: 0,
                    emit: true,
                    source: NOTE_SOURCE.MOUSE,
                    instrumentName: Piano.ACTIVE_INSTRUMENT,
                    note: hit.key.id,
                    socketID: PianoRhythm_1.PianoRhythm.CLIENT.socketID
                });
                
                last_key = hit.key;
            }
        });
        $(window).mouseup(function() {
            if (last_key) {
                Piano.release({
                    channel: 0,
                    emit: true,
                    source: NOTE_SOURCE.MOUSE,
                    instrumentName: Piano.ACTIVE_INSTRUMENT,
                    note: last_key.id,
                    socketID: PianoRhythm_1.PianoRhythm.CLIENT.socketID
                });
            }
            mouse_down = false;
            last_key = null;
        });
        Piano.INITIALIZED = true;
        Piano.startTimer();
        if (PianoRhythm_1.PianoRhythm.SETTINGS["animationStyle"])
            switch (PianoRhythm_1.PianoRhythm.SETTINGS["animationStyle"].toLowerCase()) {
                case "style 1":
                    Piano.BLIP_ANIMATE_TIME_TYPE = 0;
                    break;
                case "style 2":
                    Piano.BLIP_ANIMATE_TIME_TYPE = 1;
                    break;
            }
        if (PianoRhythm_1.PianoRhythm.SETTINGS["shapeStyle"])
            switch (PianoRhythm_1.PianoRhythm.SETTINGS["shapeStyle"]) {
                case "SQUARES":
                    Piano.ANIMATION_TYPE = eAnimationType.SQUARES;
                    break;
                case "CIRCLES":
                    Piano.ANIMATION_TYPE = eAnimationType.CIRCLES;
                    break;
            }
        if (PianoRhythm_1.PianoRhythm.SETTINGS["effectStyle"])
            switch (PianoRhythm_1.PianoRhythm.SETTINGS["effectStyle"].toLowerCase()) {
                case "none":
                    Piano.BLIP_EFFECT = 0;
                    break;
                case "effect 1":
                    Piano.BLIP_EFFECT = 1;
                    break;
                case "effect 2":
                    Piano.BLIP_EFFECT = 2;
                    break;
            }
        if (PianoRhythm_1.PianoRhythm.SETTINGS["enableColorContrast"])
            Piano.PUSHER_COLORIZE = PianoRhythm_1.PianoRhythm.SETTINGS["enableColorContrast"];
        if (PianoRhythm_1.PianoRhythm.SETTINGS["enableGlow"])
            Piano.GLOW = PianoRhythm_1.PianoRhythm.SETTINGS["enableGlow"];
        if (PianoRhythm_1.PianoRhythm.SETTINGS["enableParticles"])
            Piano.PLAYER_USE_PARTICLES = PianoRhythm_1.PianoRhythm.SETTINGS["enableParticles"];
        if (PianoRhythm_1.PianoRhythm.SETTINGS["enableParticles2"])
            Piano.USE_PARTICLES = PianoRhythm_1.PianoRhythm.SETTINGS["enableParticles2"];
        if (PianoRhythm_1.PianoRhythm.SETTINGS["showPiano"])
            Piano.SHOW_PIANO = PianoRhythm_1.PianoRhythm.SETTINGS["showPiano"];
    }
    static KeyGetHit(x, y) {
        for (let j = 0; j < 2; j++) {
            let sharp = j ? "white" : "black";
            for (let i = 0; i < 88; i++) {
                let key = Piano.KEYS[Piano._keys[i]];
                if (key.type != sharp)
                    continue;
                if (key.contains(x, y)) {
                    let v = y / ((key.type === "black" ? Piano.BLACK_KEY_HEIGHT : Piano.WHITE_KEY_HEIGHT) - 8);
                    if (v > 1.0)
                        v = 1.0;
                    v = PianoRhythm_1.PianoRhythm.map(v, 0, 1, 60, 127);
                    return {
                        "key": key,
                        "v": v
                    };
                }
            }
        }
        return null;
    }
    static startAnimating(fps = 60) {
        Piano.fpsInterval = 1000 / fps;
        Piano.then = Date.now();
        Piano.startTime = Piano.then;
        Piano.render2();
    }
    static render() {
        Piano.redraw();
        window.requestAnimationFrame(Piano.render);
    }
    static render2() {
        requestAnimationFrame(Piano.render2);
        Piano.now = Date.now();
        Piano.elapsed = Piano.now - Piano.then;
        if (Piano.elapsed > Piano.fpsInterval) {
            Piano.then = Piano.now - (Piano.elapsed % Piano.fpsInterval);
            Piano.redraw();
        }
    }
    static redraw() {
        if (!Piano.lastCalledTime) {
            Piano.lastCalledTime = Date.now();
            return;
        }
        if (Piano.REDRAW_ALL_CANVAS)
            PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.clearRect(0, 0, PianoRhythm_1.PianoRhythm.CANVAS_2D.width, PianoRhythm_1.PianoRhythm.CANVAS_2D.height);
        Piano._now = Date.now();
        switch (Piano.ANIMATION_TYPE) {
            case eAnimationType.BASIC:
                Piano._time = 250;
                break;
            case eAnimationType.SQUARES:
                Piano._time = 350;
                break;
            case eAnimationType.CIRCLES:
                Piano._time = 400;
                break;
        }
        let timeBlipEnd = Piano._now - Piano._time;
        for (Piano._i = 0; Piano._i < 88; Piano._i++) {
            Piano._key = Piano.KEYS[Piano._keys[Piano._i]];
            Piano._key.y = (0.5 + Piano._key.y) | 0;
            if (!Piano.REDRAW_ALL_CANVAS) {
                if (Piano._key.lastY === Piano._key.y)
                    PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.drawImage(Piano._key.render, Piano._key.x, Piano._key.y);
                else
                    PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.clearRect(Piano._key.x, Piano._key.y, Piano._key.width, Piano._key.height + (Piano._key.type == "white" ? 10 : 0));
                Piano._key.lastY = Piano._key.y;
            } else {
                PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.drawImage(Piano._key.render, Piano._key.x, Piano._key.y);
            }
            if (Piano._key.blips.length) {
                for (let b = 0; b < Piano._key.blips.length; b++) {
                    let blip = Piano._key.blips[b];
                    if (Piano.BLIP_ANIMATE_TIME_TYPE) {
                        if (Piano._key.keyDown) {
                            blip.time += 35;
                            blip.keyUp = false;
                        } else {
                            if (!blip.keyUp) {
                                blip.time = timeBlipEnd + (Piano._time * 0.75);
                                blip.velY = (Math.random() * 5) + 1;
                            }
                            blip.keyUp = true;
                        }
                    }
                    if (blip.time > timeBlipEnd) {
                        if (Piano.GLOW) {
                            PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.shadowBlur = 10;
                            PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.shadowColor = "#fff";
                        }
                        PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.fillStyle = blip.color;
                        PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.globalAlpha = blip.alpha - ((Piano._now - blip.time) / Piano._time);
                        if (Piano.KEY_ANIMATION_BACKGROUND)
                            PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.fillRect(Piano._key.x, Piano._key.y, Piano._key.width, Piano._key.height);
                        PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.fillStyle = Piano.PUSHER_COLORIZE ?
                            (Piano._key.type === "white" ? pusher.color(blip.color).shade(0.25).hex6() : pusher.color(blip.color).tint(0.25).hex6()) : blip.color;
                        switch (Piano.ANIMATION_TYPE) {
                            case eAnimationType.CIRCLES:
                                PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.beginPath();
                                PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.arc((Piano._key.x + Piano._key.width / 2), blip.y, blip.h, 0, Math.PI * 2, true);
                                PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.fill();
                                PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.closePath();
                                switch (Piano.BLIP_EFFECT) {
                                    case 1:
                                        if (Piano.BLIP_ANIMATE_TIME_TYPE !== 1)
                                            blip.h += 0.5;
                                        break;
                                }
                                break;
                            case eAnimationType.SQUARES:
                                PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.fillRect(Piano._key.x + 5, blip.y, Piano._key.width - 10, blip.h);
                                switch (Piano.BLIP_EFFECT) {
                                    case 1:
                                        blip.h += 0.5;
                                        break;
                                }
                                break;
                        }
                    } else {
                        Piano._key.blips.splice(b, 1);
                        --b;
                    }
                    switch (Piano.BLIP_ANIMATE_TIME_TYPE) {
                        case 0:
                            blip.y -= Math.floor(blip.h * 0.08 + ((Piano._now - blip.time) / Piano._time));
                            break;
                        case 1:
                            blip.velY += Piano.BLIP_GRAVITY;
                            blip.y -= blip.velY;
                            let heightLimit = (Piano._key.type == "white") ? (Piano._key.height / 2) : (Piano._key.height / 4);
                            if (!blip.keyUp) {
                                if (blip.y < heightLimit) {
                                    blip.velY = (Math.random() * -15) - 5;
                                }
                                if (blip.y + blip.h > (Piano._key.height)) {
                                    blip.velY = (Math.random() * -15) - 5;
                                    blip.y = (Piano._key.height - blip.h) + blip.velY;
                                }
                            }
                            break;
                    }
                }
            }
            PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.globalAlpha = 1;
            if (Piano.GLOW)
                PianoRhythm_1.PianoRhythm.CANVAS_2D_CTX.shadowBlur = 0;
        }
        if (PianoRhythmPlayer_1.PianoRhythmPlayer.isPLAYING) {
            PianoRhythmPlayer_1.PianoRhythmPlayer.CTX.clearRect(0, 0, PianoRhythmPlayer_1.PianoRhythmPlayer.CANVAS.width, PianoRhythmPlayer_1.PianoRhythmPlayer.CANVAS.height);
            let speed = (PianoRhythm_1.PianoRhythm.PLAYER.bpm / 60) * Piano.delta * (MIDI.Player.getMSperBeat() / Piano.NOTE_SPEED);
            if (PianoRhythmPlayer_1.PianoRhythmPlayer.PROGRESS_BAR) {
                let progress = PianoRhythm_1.PianoRhythm.map(Piano.currentTime, 0, PianoRhythmPlayer_1.PianoRhythmPlayer.MIDI_2D_ENDPOINT, 0, 100);
                let finalValue = (progress) / 100.00;
                if (finalValue >= 1)
                    finalValue = 1;
                if (finalValue < 1) {
                    PianoRhythmPlayer_1.PianoRhythmPlayer.PROGRESS_BAR.set(finalValue);
                    PianoRhythmPlayer_1.PianoRhythmPlayer.PROGRESS_BAR.setText("Time: " + PianoRhythmPlayer_1.PianoRhythmPlayer.msToTime(Piano.currentTime) + " / " + PianoRhythmPlayer_1.PianoRhythmPlayer.msToTime(MIDI.Player.endTime));
                    if (PianoRhythmPlayer_1.PianoRhythmPlayer.UI_PROGRESS_BAR) {
                        PianoRhythmPlayer_1.PianoRhythmPlayer.UI_PROGRESS_BAR["set"](finalValue);
                    }
                }
            }
            for (let t = 0; t < PianoRhythmPlayer_1.PianoRhythmPlayer.NOTES.length; t++) {
                let note = PianoRhythmPlayer_1.PianoRhythmPlayer.NOTES[t];
                if (note) {
                    if (note.y < PianoRhythmPlayer_1.PianoRhythmPlayer.CANVAS.height)
                        note.y += speed;
                    if (PianoRhythm_1.PianoRhythmDock.CURRENT_SLOT_MODE === PianoRhythm_1.SLOT_MODE.MULTI && PianoRhythm_1.PianoRhythmDock.DOCK_INSTRUMENTS[note.track] && PianoRhythm_1.PianoRhythmDock.DOCK_INSTRUMENTS[note.track].instrument)
                        note.instName = PianoRhythm_1.PianoRhythmDock.DOCK_INSTRUMENTS[note.track].instrument;
                    else
                        note.instName = Piano.ACTIVE_INSTRUMENT;
                    if (note.y + note.height > 0 && note._render)
                        PianoRhythmPlayer_1.PianoRhythmPlayer.CTX.drawImage(note._render, note.x, note.y);
                    if (note.y + note.height >= PianoRhythmPlayer_1.PianoRhythmPlayer.CANVAS.height)
                        if (note.pianoKey && !note.triggered && !note.controller) {
                            note.triggered = true;
                            Piano.press({
                                color: note.color,
                                note: note.note,
                                velocity: note.velocity,
                                channel: note.track,
                                emit: true,
                                source: NOTE_SOURCE.MIDI,
                                socketID: PianoRhythm_1.PianoRhythm.CLIENT.socketID,
                                instrumentName: note.instName,
                                duration: note.duration
                            });
                            console.log("MIDIDIDIDIDIDIIDI")
                        } else if (note.controller && note.controllerType && !note.controllerActive) {
                        switch (note.controllerType) {
                            case 64:
                                if (note.controllerValue < 64)
                                    PianoRhythm_1.PianoRhythm.toggleSustain(false);
                                else
                                    PianoRhythm_1.PianoRhythm.toggleSustain(true);
                                break;
                            case 123:
                                Piano.stopAllNotes();
                                break;
                        }
                        note.controllerActive = true;
                        PianoRhythmPlayer_1.PianoRhythmPlayer.TOTAL_NOTES--;
                        delete PianoRhythmPlayer_1.PianoRhythmPlayer.NOTES[t];
                    }
                    if (note.y >= PianoRhythmPlayer_1.PianoRhythmPlayer.CANVAS.height) {
                        if (note.pianoKey && note.triggered) {
                            note.triggered = false;
                            Piano.release({
                                note: note.note,
                                velocity: note.velocity,
                                channel: note.track,
                                emit: true,
                                source: NOTE_SOURCE.MIDI,
                                socketID: PianoRhythm_1.PianoRhythm.CLIENT.socketID,
                                instrumentName: note.instName
                            });
                        }
                        PianoRhythmPlayer_1.PianoRhythmPlayer.TOTAL_NOTES--;
                        delete PianoRhythmPlayer_1.PianoRhythmPlayer.NOTES[t];
                    }
                }
            }
            if (PianoRhythmPlayer_1.PianoRhythmPlayer.NOTES && PianoRhythmPlayer_1.PianoRhythmPlayer.lastNote && PianoRhythmPlayer_1.PianoRhythmPlayer.lastNote.y >= PianoRhythmPlayer_1.PianoRhythmPlayer.CANVAS.height &&
                (PianoRhythmPlayer_1.PianoRhythmPlayer.TOTAL_NOTES <= 0)) {
                if (!Piano.playerResetTimer)
                    Piano.playerResetTimer = setTimeout(() => {
                        PianoRhythm_1.PianoRhythm.PLAYER.reset();
                        Piano.playerResetTimer = null;
                    }, 700);
            }
        }
        if ((AudioEngine_1.AudioEngine.RECORDING || AudioEngine_1.AudioEngine.PLAYING)) {
            for (let r in AudioEngine_1.AudioEngine.LIST_RECORDED_NOTES) {
                let list = AudioEngine_1.AudioEngine.LIST_RECORDED_NOTES[r];
                if (list && (list.recording || list.playing) && !list.item.looping) {
                    let l_message = list.recording ? "Recording | " : "Playing | ";
                    let l_startTime = list.recording ? list.firstRecordTime : list.firstPlaytime;
                    let l_endTime = list.recording ? AudioEngine_1.AudioEngine.MAX_RECORDING_TIME : list.totalTime;
                    let l_currentTime = Date.now() - l_startTime;
                    list.item.info_element.text(l_message +
                        PianoRhythmPlayer_1.PianoRhythmPlayer.msToTime(l_currentTime || 0) +
                        " / " + PianoRhythmPlayer_1.PianoRhythmPlayer.msToTime(l_endTime || 0));
                }
            }
        }
        Piano.delta = (Date.now() - Piano.lastCalledTime) / 1000;
        Piano.lastCalledTime = Date.now();
        if (PianoRhythmPlayer_1.PianoRhythmPlayer.PARTICLE_SYSTEM && (Piano.PLAYER_USE_PARTICLES && PianoRhythmPlayer_1.PianoRhythmPlayer.isPLAYING || Piano.USE_PARTICLES)) {
            if (!PianoRhythmPlayer_1.PianoRhythmPlayer.isPLAYING)
                PianoRhythmPlayer_1.PianoRhythmPlayer.CTX.clearRect(0, 0, PianoRhythmPlayer_1.PianoRhythmPlayer.CANVAS.width, PianoRhythmPlayer_1.PianoRhythmPlayer.CANVAS.height);
            PianoRhythmPlayer_1.PianoRhythmPlayer.PARTICLE_SYSTEM.render();
        }
    }
    static setDimensions() {
        Piano.WHITE_KEY_HEIGHT = Math.floor(PianoRhythm_1.PianoRhythm.CANVAS_2D.height * (Piano.WHITE_KEY_HEIGHT_PERCENTAGE));
        Piano.WHITE_KEY_WIDTH = Math.floor(PianoRhythm_1.PianoRhythm.CANVAS_2D.width / 52);
        Piano.BLACK_KEY_HEIGHT = Math.floor(PianoRhythm_1.PianoRhythm.CANVAS_2D.height * (Piano.BLACK_KEY_HEIGHT_PERCENTAGE));
        Piano.BLACK_KEY_WIDTH = Math.floor(Piano.WHITE_KEY_WIDTH * (0.75));
        Piano.BLACK_KEY_OFFSET = Math.floor(Piano.WHITE_KEY_WIDTH - (Piano.BLACK_KEY_WIDTH / 2));
    }
    static drawPiano() {
        if (PianoRhythm_1.PianoRhythm.DEBUG_MESSAGING)
            console.info("Rendering the piano.");
        Piano.setDimensions();
        let keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        let keys2 = ['A', 'B', 'D', 'E', 'G'];
        let keyID = 0;
        let noteLoop = 0;
        let whiteKeys = [];
        let blackKeys = [];
        let white_spatial = 0;
        let black_spatial = 0;
        let black_it = 0;
        let black_lut = [2, 1, 2, 1, 1];
        for (let i = 0; i < 52; i++) {
            if (noteLoop > 6)
                noteLoop = 0;
            let note = keys[noteLoop];
            if (note === 'C' || note === 'F') {
                let key = new PianoKey_2D("white", Piano.WhiteKeyRender());
                key.width = Piano.WHITE_KEY_WIDTH;
                key.height = Piano.WHITE_KEY_HEIGHT;
                key.key = i;
                key.id = note + keyID;
                key.spatial = white_spatial;
                ++white_spatial;
                key.x = key.spatial * key.width;
                key.y = 0;
                whiteKeys.push(key);
            } else {
                let key = new PianoKey_2D("white", Piano.WhiteKeyRender());
                key.width = Piano.WHITE_KEY_WIDTH;
                key.height = Piano.WHITE_KEY_HEIGHT;
                key.key = i;
                key.id = note + keyID;
                key.spatial = white_spatial;
                ++white_spatial;
                key.x = key.spatial * key.width;
                key.y = 0;
                whiteKeys.push(key);
                let nv = keys2.indexOf(note) + 1;
                if (nv >= keys2.length)
                    nv = 0;
                let id = keys2[nv] + "b" + keyID;
                if (keys2[nv] === "D")
                    id = keys2[nv] + "b" + (keyID + 1);
                let bkey = new PianoKey_2D("black", Piano.BlackKeyRender());
                bkey.width = Piano.BLACK_KEY_WIDTH;
                bkey.height = Piano.BLACK_KEY_HEIGHT;
                bkey.id = id;
                bkey.key = i;
                bkey.spatial = black_spatial;
                black_spatial += black_lut[black_it % 5];
                ++black_it;
                bkey.y = 0;
                bkey.x = Piano.BLACK_KEY_OFFSET + Piano.WHITE_KEY_WIDTH * bkey.spatial;
                blackKeys.push(bkey);
            }
            noteLoop++;
            if (keys[noteLoop] === 'C')
                keyID++;
        }
        for (let w in whiteKeys) {
            Piano.KEYS[whiteKeys[w].id] = whiteKeys[w];
            Piano.WHITE_KEYS[whiteKeys[w].id] = whiteKeys[w];
        }
        blackKeys.pop();
        for (let b in blackKeys) {
            Piano.KEYS[blackKeys[b].id] = blackKeys[b];
            Piano.BLACK_KEYS[blackKeys[b].id] = blackKeys[b];
        }
        PianoRhythm_1.PianoRhythm.CANVAS_PIANO_DRAWN = true;
        Piano.setRawWidth();
        Piano.checkForDock();
        if (Piano.BOXSHADOW) {
            Piano.BOXSHADOW.fadeIn();
            Piano.setBoxShadowPosition();
        }
        Piano._keys = Object.keys(Piano.KEYS);
    }
    static WhiteKeyRender(text, options = {
        width: null,
        height: null,
        solid: null,
        color: null,
        rounded: null
    }) {
        let whiteKeyRender = document.createElement("canvas");
        whiteKeyRender.width = options.width || Piano.WHITE_KEY_WIDTH;
        whiteKeyRender.height = options.height || Piano.WHITE_KEY_HEIGHT;
        let ctx = whiteKeyRender.getContext("2d");
        let rounded = !!(options && options.rounded);
        let solid = !!(options && options.solid);
        let color = (options && options.color) ? options.color : Piano.DEFAULT_WHITEKEY_COLOR;
        if (!solid) {
            if (ctx.createLinearGradient) {
                let gradient = ctx.createLinearGradient(0, 0, 0, Piano.WHITE_KEY_HEIGHT);
                gradient.addColorStop(0.000, 'rgba(220, 220, 220, 1)');
                gradient.addColorStop(1.000, color);
                ctx.fillStyle = gradient;
            }
        } else {
            ctx.fillStyle = color;
        }
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        if (rounded) {
            let roundedVal = {
                tl: 0,
                tr: 0,
                bl: 5,
                br: 5
            };
            if (options && options["roundVal"])
                roundedVal = options["roundVal"];
            roundRect(ctx, 0, 0, whiteKeyRender.width - 1, whiteKeyRender.height, roundedVal, true, true);
        } else {
            if (!Piano.REDRAW_ALL_CANVAS)
                ctx.lineWidth = 3;
            ctx.fillRect(ctx.lineWidth / 2, ctx.lineWidth / 2, Piano.WHITE_KEY_WIDTH - ctx.lineWidth, whiteKeyRender.height - ctx.lineWidth);
        }
        if (text) {
            ctx.fillStyle = "black";
            ctx.font = "20px Segoe UI";
            ctx.fillText(text, 5, whiteKeyRender.height - 20);
        }
        return whiteKeyRender;
    }
    static WhiteKeyGradient(ctx, color = "white") {
        let gradient = ctx.createLinearGradient(0, 0, 0, Piano.WHITE_KEY_HEIGHT);
        gradient.addColorStop(0.000, 'rgba(225, 225, 225, 0.92)');
        gradient.addColorStop(1.000, color);
        return gradient;
    }
    static BlackKeyGradient(ctx, color = "#3a3e4c") {
        let grd = ctx.createLinearGradient(0, 0, Piano.BLACK_KEY_WIDTH, Piano.BLACK_KEY_HEIGHT);
        grd.addColorStop(0.000, 'rgba(25, 25, 25, 1)');
        grd.addColorStop(1, color);
        return grd;
    }
    static BlackKeyRender(text, options = {
        width: null,
        height: null,
        solid: null,
        color: null,
        rounded: null
    }) {
        let blackKeyRender = document.createElement("canvas");
        blackKeyRender.width = options.width || Piano.BLACK_KEY_WIDTH + 10;
        blackKeyRender.height = (options.height || Piano.BLACK_KEY_HEIGHT) + 1;
        let ctx = blackKeyRender.getContext("2d");
        let rounded = !!(options && options.rounded);
        let solid = !!(options && options.solid);
        let color = (options && options.color) ? options.color : Piano.DEFAULT_BLACKKEY_COLOR;
        if (!solid) {
            let grd = ctx.createLinearGradient(0, 0, Piano.BLACK_KEY_WIDTH, Piano.BLACK_KEY_HEIGHT);
            grd.addColorStop(0, 'rgba(60, 60, 65, 1)');
            grd.addColorStop(0.3, 'rgba(35, 35, 45, 0.95)');
            grd.addColorStop(1, color);
            ctx.fillStyle = grd;
        } else {
            ctx.fillStyle = color;
        }
        if (rounded) {
            let roundedVal = {
                tl: 0,
                tr: 0,
                bl: 5,
                br: 5
            };
            if (options && options["roundVal"])
                roundedVal = options["roundVal"];
            roundRect(ctx, 0, 0, blackKeyRender.width - 1, blackKeyRender.height, roundedVal, true, false);
        } else {
            ctx.fillRect(ctx.lineWidth / 2, (ctx.lineWidth / 2) - 1, Piano.BLACK_KEY_WIDTH - ctx.lineWidth, blackKeyRender.height - ctx.lineWidth);
        }
        if (text) {
            ctx.fillStyle = "white";
            ctx.font = "12px Segoe UI";
            ctx.fillText(text, 2, blackKeyRender.height - 15);
        }
        return blackKeyRender;
    }
    static resizePiano(width, height) {
        PianoRhythm_1.PianoRhythm.CANVAS_2D.width = width;
        PianoRhythm_1.PianoRhythm.CANVAS_2D.height = Math.floor(width * 0.2);
        Piano.setDimensions();
        $(PianoRhythm_1.PianoRhythm.CANVAS_PARENT).css({
            "height": PianoRhythm_1.PianoRhythm.CANVAS_2D.height + "px",
            marginTop: Math.floor(height / 2 - PianoRhythm_1.PianoRhythm.CANVAS_2D.height / 2) + "px"
        });
        let white_spatial = 0;
        let black_spatial = 0;
        let black_it = 0;
        let black_lut = [2, 1, 2, 1, 1];
        for (let k in Piano.KEYS) {
            let key = Piano.KEYS[k];
            if (key.type === "white") {
                key.width = Piano.WHITE_KEY_WIDTH;
                key.height = Piano.WHITE_KEY_HEIGHT;
                key.spatial = white_spatial;
                ++white_spatial;
                key.x = key.spatial * key.width;
                key.y = 0;
                key.render = Piano.WhiteKeyRender();
            } else {
                key.width = Piano.BLACK_KEY_WIDTH;
                key.height = Piano.BLACK_KEY_HEIGHT;
                key.spatial = black_spatial;
                black_spatial += black_lut[black_it % 5];
                ++black_it;
                key.y = 0;
                key.x = Piano.BLACK_KEY_OFFSET + Piano.WHITE_KEY_WIDTH * key.spatial;
                key.render = Piano.BlackKeyRender();
            }
        }
        Piano.setRawWidth();
        Piano.checkForDock();
        Piano.setBoxShadowPosition();
    }
    static checkForDock() {
        if (PianoRhythm_1.PianoRhythmDock.OCTAVE && PianoRhythm_1.PianoRhythm.CANVAS_PARENT && PianoRhythm_1.PianoRhythmDock.DOCK_SLOTS) {
            let collision = PianoRhythm_1.PianoRhythm.collision(PianoRhythm_1.PianoRhythm.CANVAS_PARENT, PianoRhythm_1.PianoRhythmDock.OCTAVE[0]);
            let collision2 = PianoRhythm_1.PianoRhythm.collision(PianoRhythm_1.PianoRhythm.CANVAS_PARENT, PianoRhythm_1.PianoRhythmDock.DOCK_SLOTS[0]);
            let dockHeight = 52;
            let buffer = 10;
            let top_bar_distance = collision.rect1.bottom - collision.rect2.top;
            let slots_distance = collision2.rect1.bottom - collision2.rect2.top;
            let bottomPiano_to_bottomWindow_distance = window.innerHeight - collision.rect1.bottom - (35 * 2 + 10);
            if (top_bar_distance >= 25)
                PianoRhythm_1.PianoRhythmDock.hideTopBar();
            else {
                PianoRhythm_1.PianoRhythmDock.unhideTopBar();
            }
            if (slots_distance >= 40) {
                if (bottomPiano_to_bottomWindow_distance >= dockHeight + buffer) {
                    PianoRhythm_1.PianoRhythmDock.DOCK_SLOTS[0].style.bottom = "55px";
                } else {
                    PianoRhythm_1.PianoRhythmDock.hideSlots();
                }
            } else {
                PianoRhythm_1.PianoRhythmDock.unhideSlots();
                PianoRhythm_1.PianoRhythmDock.DOCK_SLOTS[0].style.bottom = "95px";
            }
        }
    }
    static setRawWidth() {
        if (Piano.KEYS["C8"]) {
            Piano.rawWidth = Piano.KEYS["C8"].x + Piano.KEYS["C8"].width;
        }
        if (Piano.rawWidth) {
            PianoRhythm_1.PianoRhythm.CANVAS_2D.width = Piano.rawWidth;
            let n_height = (Piano.KEYS["C8"]) ? (Piano.KEYS["C8"].height + 2) + "px" : (PianoRhythm_1.PianoRhythm.CANVAS_2D.height + 2) + "px";
            if (PianoRhythm_1.PianoRhythm.CANVAS_PARENT) {
                PianoRhythm_1.PianoRhythm.CANVAS_PARENT.style.width = Piano.rawWidth + "px";
                let left = PianoRhythm_1.PianoRhythm.SIDBAR_HIDDEN ? "50%" : "calc(50% - " + PianoRhythm_1.PianoRhythm.SIDEBAR_OFFSET / 2 + "px)";
                let transform = PianoRhythm_1.PianoRhythm.SIDBAR_HIDDEN ? "translateX(-50%)" : "translateX(calc(-50% + " + PianoRhythm_1.PianoRhythm.SIDEBAR_OFFSET + "px))";
                PianoRhythm_1.PianoRhythm.CANVAS_PARENT.style.left = left;
                PianoRhythm_1.PianoRhythm.CANVAS_PARENT.style.transform = transform;
                PianoRhythm_1.PianoRhythm.CANVAS_PARENT.style.height = n_height;
            }
            if (PianoRhythm_1.PianoRhythm.CANVAS_INPUT && PianoRhythm_1.PianoRhythm.CANVAS_BG) {
                PianoRhythm_1.PianoRhythm.CANVAS_INPUT.style.width = PianoRhythm_1.PianoRhythm.CANVAS_2D.width + "px";
                PianoRhythm_1.PianoRhythm.CANVAS_INPUT.style.left = PianoRhythm_1.PianoRhythm.CANVAS_PARENT.getBoundingClientRect().left + "px";
                PianoRhythm_1.PianoRhythm.CANVAS_INPUT.style.top = PianoRhythm_1.PianoRhythm.CANVAS_PARENT.getBoundingClientRect().top + "px";
                if (!Piano.LOADING_PIANO) {
                    PianoRhythm_1.PianoRhythm.CANVAS_BG.style.opacity = 1;
                    PianoRhythm_1.PianoRhythm.CANVAS_BG.style.width = (PianoRhythm_1.PianoRhythm.CANVAS_2D.width - 1) + "px";
                }
                PianoRhythm_1.PianoRhythm.CANVAS_BG.style.height = n_height;
                PianoRhythm_1.PianoRhythm.CANVAS_INPUT.style.height = n_height;
                PianoRhythm_1.PianoRhythm.CANVAS_BG.style.left = (PianoRhythm_1.PianoRhythm.CANVAS_PARENT.getBoundingClientRect().left + 1) + "px";
                PianoRhythm_1.PianoRhythm.CANVAS_BG.style.top = (PianoRhythm_1.PianoRhythm.CANVAS_PARENT.getBoundingClientRect().top) + "px";
            }
        }
    }
    static setBoxShadowPosition() {
        if (Piano.KEYS["C8"]) {
            if (Piano.BOXSHADOW) {
                Piano.BOXSHADOW.width(Piano.rawWidth);
                Piano.BOXSHADOW[0].style.top = (PianoRhythm_1.PianoRhythm.CANVAS_BG.getBoundingClientRect().bottom - 3) + "px";
                Piano.BOXSHADOW[0].style.left = PianoRhythm_1.PianoRhythm.CANVAS_BG.style.left;
            }
        }
    }
    static pressSustain() {
        Piano.SUSTAIN = true;
        if (Piano.AUTO_SUSTAIN)
            Piano.SUSTAIN = Piano.AUTO_SUSTAIN;
        if (AudioEngine_1.AudioEngine.RECORDING || Object.keys(AudioEngine_1.AudioEngine.LIST_RECORDED_NOTES).length > 0) {
            let out = {
                sustain: true,
                listName: "main",
                time: (Date.now() - AudioEngine_1.AudioEngine.FIRST_RECORD_TIME) / 1000,
            };
            if (AudioEngine_1.AudioEngine.RECORDING && AudioEngine_1.AudioEngine.RECORDING_ELEMENT)
                AudioEngine_1.AudioEngine.RECORDED_NOTES.push(out);
            else
                for (let r in AudioEngine_1.AudioEngine.LIST_RECORDED_NOTES) {
                    let list = AudioEngine_1.AudioEngine.LIST_RECORDED_NOTES[r];
                    if (list && list.recording && list.list) {
                        out.time = (Date.now() - list.time) / 1000;
                        out.listName = r;
                        list.list.push(out);
                    }
                }
        }
        if (PianoRhythm_1.PianoRhythm.SUSTAIN_DISPLAY)
            PianoRhythm_1.PianoRhythm.SUSTAIN_DISPLAY.text("Sustain: " + (Piano.SUSTAIN ? "ON" : "OFF"));
    }
    static releaseSustain() {
        Piano.SUSTAIN = false;
        if (Piano.AUTO_SUSTAIN)
            Piano.SUSTAIN = Piano.AUTO_SUSTAIN;
        if (!Piano.AUTO_SUSTAIN) {
            for (let id in Piano.SUSTAINED_NOTES) {
                if (Piano.SUSTAINED_NOTES.hasOwnProperty(id) && Piano.SUSTAINED_NOTES[id] && !Piano.HELD_NOTES[id]) {
                    Piano.SUSTAINED_NOTES[id] = false;
                    if (PianoRhythm_1.PianoRhythm.CLIENT.socketID /*&& Piano.NOTE_QUOTA.spendPoint(1)*/) {
                        AudioEngine_1.AudioEngine.preStop(Piano.ACTIVE_INSTRUMENT, id, 0, PianoRhythm_1.PianoRhythm.CLIENT.socketID);
                        Piano.stopNote(id);
                    }
                }
            }
        }
        if (AudioEngine_1.AudioEngine.RECORDING) {
            if (AudioEngine_1.AudioEngine.RECORDING || Object.keys(AudioEngine_1.AudioEngine.LIST_RECORDED_NOTES).length > 0) {
                let out = {
                    sustain: false,
                    listName: "main",
                    time: (Date.now() - AudioEngine_1.AudioEngine.FIRST_RECORD_TIME) / 1000,
                };
                if (AudioEngine_1.AudioEngine.RECORDING && AudioEngine_1.AudioEngine.RECORDING_ELEMENT)
                    AudioEngine_1.AudioEngine.RECORDED_NOTES.push(out);
                else
                    for (let r in AudioEngine_1.AudioEngine.LIST_RECORDED_NOTES) {
                        let list = AudioEngine_1.AudioEngine.LIST_RECORDED_NOTES[r];
                        if (list && list.recording && list.list) {
                            out.time = (Date.now() - list.time) / 1000;
                            out.listName = r;
                            list.list.push(out);
                        }
                    }
            }
        }
        if (PianoRhythm_1.PianoRhythm.SUSTAIN_DISPLAY)
            PianoRhythm_1.PianoRhythm.SUSTAIN_DISPLAY.text("Sustain: " + (Piano.SUSTAIN ? "ON" : "OFF"));
    }
    static stopAllNotes(socketID) {
        for (let id in AudioEngine_1.AudioEngine.playingNotes) {
            if (AudioEngine_1.AudioEngine.playingNotes.hasOwnProperty(id) && AudioEngine_1.AudioEngine.playingNotes[id]) {
                let time = AudioEngine_1.AudioEngine.context.currentTime;
                let gain = AudioEngine_1.AudioEngine.playingNotes[id].gain.gain;
                gain.setValueAtTime(gain.value, time);
                gain.linearRampToValueAtTime(gain.value * 0.1, time + 0.16);
                gain.linearRampToValueAtTime(0.0, time + 0.4);
                AudioEngine_1.AudioEngine.playingNotes[id].source.stop(time + 0.41);
                AudioEngine_1.AudioEngine.playingNotes[id] = null;
                Piano.stopNote(id);
            }
        }
    }
    static press(note, otherPlayer = false, bypass = false) {
        if (!note)
            return;
        Piano._keyPress = Piano.KEYS[note.note];
        if (Piano._keyPress) {
            if (PianoRhythm_1.PianoRhythm.EVENT_EMITTER) {
                PianoRhythm_1.PianoRhythm.EVENT_EMITTER.emit("bot_playerNoteOn", note);
            }
            if (!otherPlayer) {
                Piano.HELD_NOTES[note.note] = true;
                Piano.SUSTAINED_NOTES[note.note] = true;
            }
            let modifier = 1;
            let vol = Math.max((note.instrumentName !== "steinway") ? 0.1 : 0.15, ((note.velocity || Piano.DEFAULT_VELOCITY) / Piano.DEFAULT_VELOCITY));
            if (AudioEngine_1.AudioEngine.volume <= 0)
                vol = 0;
            if (!bypass) {
                //if (Piano.NOTE_QUOTA.spendPoint(1)) {
                    Piano._keyPress.pressDown(note, vol);
                    if (note.emit)
                        Piano.startNote(note.note, note.velocity, note.instrumentName, note.source, note.kb_source);
              //  }
            } else {
                Piano._keyPress.pressDown(note, vol);
            }
            if (PianoRhythm_1.PianoRhythm.RhythmBlobFactory) {}
        }
    }
    static release(note, otherPlayer = false, bypass = false) {
       // bypass = true;
        Piano._keyRelease = Piano.KEYS[note.note];
        if (Piano._keyRelease) {
            if (PianoRhythm_1.PianoRhythm.EVENT_EMITTER) {
                PianoRhythm_1.PianoRhythm.EVENT_EMITTER.emit("bot_playerNoteOff", note);
            }
            if (otherPlayer) {
                Piano._keyRelease.pressUp(note);
            } else {
                if (Piano.HELD_NOTES[note.note]) {
                    Piano.HELD_NOTES[note.note] = false;
                    if (Piano.AUTO_SUSTAIN || Piano.SUSTAIN) {
                        Piano.SUSTAINED_NOTES[note.note] = true;
                        if (Piano.BLIP_ANIMATE_TIME_TYPE)
                            Piano._keyRelease.animateUp();
                    } else {
                        if ((bypass /*|| Piano.NOTE_QUOTA.spendPoint(1)*/)) {
                            Piano._keyRelease.pressUp(note);
                            Piano.stopNote(note.note, note.instrumentName, note.source, note.kb_source);
                            Piano.SUSTAINED_NOTES[note.note] = false;
                        }
                    }
                }
            }
            if (PianoRhythm_1.PianoRhythm.RhythmBlobFactory) {}
        }
    }
    
    static initNoteBuffering() {
        Piano.noteBufferSystem.noteBuffer = [];
        Piano.noteBufferSystem.noteBufferTime = 0;
        Piano.noteBufferSystem.serverTimeOffset = 0;
        Piano.noteBufferSystem.noteFlushInterval = setInterval(function() {
            if (count > rainbow.length) count = 0;
            if (Piano.noteBufferSystem.noteBufferTime && Piano.noteBufferSystem.noteBuffer.length > 0) {
                if (PianoRhythm_1.PianoRhythm.midiChannel)
                    PianoRhythm_1.PianoRhythm.midiChannel.publish({
                        t: Piano.noteBufferSystem.noteBufferTime + PianoRhythm_1.PianoRhythm.serverTimeOffset,
                        n: Piano.noteBufferSystem.noteBuffer,
                        id: PianoRhythm_1.PianoRhythm.CLIENT.socketID + "tonqtonq" + Math.random().toString(),
                        uuid: PianoRhythm_1.PianoRhythm.CLIENT.id, //+ "tonqtonq" + Math.random().toString(),
                        color: rainbow[count],
                    });
                Piano.noteBufferSystem.noteBufferTime = 0;
                Piano.noteBufferSystem.noteBuffer = [];
            }
            window.count = count;
            count++;
        }, 200);
    }
    static startNote(note, vel, inst = Piano.DEFAULT_INSTRUMENT, src = NOTE_SOURCE.ANY, kb_src = KEYBOARD_LAYOUT.ANY) {
        if (!Piano.noteBufferSystem.noteBufferTime) {
            Piano.noteBufferSystem.noteBufferTime = Date.now();
            Piano.noteBufferSystem.noteBuffer.push({
                n: note,
                v: vel,
                inst: inst,
                src: src,
                kb_src: kb_src
            });
        } else {
            Piano.noteBufferSystem.noteBuffer.push({
                d: Date.now() - Piano.noteBufferSystem.noteBufferTime,
                n: note,
                v: vel,
                src: src,
                kb_src: kb_src,
                inst: inst
            });
        }
    }
    static stopNote(note, inst = Piano.DEFAULT_INSTRUMENT, src = NOTE_SOURCE.ANY, kb_src = KEYBOARD_LAYOUT.ANY) {
        if (!Piano.noteBufferSystem.noteBufferTime) {
            Piano.noteBufferSystem.noteBufferTime = Date.now();
            Piano.noteBufferSystem.noteBuffer.push({
                n: note,
                s: 1,
                src: src,
                kb_src: kb_src,
                inst: inst
            });
        } else {
            Piano.noteBufferSystem.noteBuffer.push({
                d: Date.now() - Piano.noteBufferSystem.noteBufferTime,
                n: note,
                s: 1,
                inst: inst,
                src: src,
                kb_src: kb_src,
            });
        }
    }
    static startTimer() {
        let interval = 1000 / 60;
        let expected = Date.now() + interval;
        Piano.timer = setTimeout(step, interval);
        function step() {
            if (!PianoRhythmPlayer_1.PianoRhythmPlayer.isPLAYING) {
                Piano.stopTimer();
                return;
            }
            let dt = Date.now() - expected;
            if (dt > interval) {}
            Piano.currentTime += interval;
            expected += interval;
            Piano.timer = setTimeout(step, Math.max(0, interval - dt));
        }
    }
    static stopTimer() {
        clearTimeout(Piano.timer);
    }
}
Piano.KEYS = {};
Piano.BLACK_KEYS = {};
Piano.WHITE_KEYS = {};
Piano.KEYCODES = [];
Piano.INSTRUMENTS = {};
Piano.MAX_CHANNELS = 16;
Piano.keysDown = {};
Piano.GLOBAL_INSTRUMENTS = {};
Piano._ACTIVE_INSTRUMENT = "high_quality_acoustic_grand_piano";
Piano.DEFAULT_INSTRUMENT = "high_quality_acoustic_grand_piano";
Piano.ANIMATION_TYPE = eAnimationType.SQUARES;
Piano.KEY_ANIMATION_BACKGROUND = true;
Piano.PLAYER_USE_PARTICLES = true;
Piano.USE_PARTICLES = false;
Piano.AUTO_SUSTAIN = false;
Piano.SUSTAIN = false;
Piano.HELD_NOTES = {};
Piano.SUSTAINED_NOTES = {};
Piano.DEFAULT_VELOCITY = 127;
Piano.KEYBOARD_VELOCITY = 127;
Piano.LOADING_PIANO = false;
Piano.stop = false;
Piano.frameCount = 0;
Piano._key = null;
Piano._now = 0;
Piano._time = 0;
Piano.currentTime = 0;
Piano.NOTE_SPEED_DEFAULT = 3500;
Piano.NOTE_SPEED = 3500;
Piano.KEYS_LENGTH = 88;
Piano._i = 0;
Piano.REDRAW_ALL_CANVAS = true;
Piano.GLOW = false;
Piano.PUSHER_COLORIZE = true;
Piano.BLIP_GRAVITY = 0.5;
Piano.BLIP_ANIMATE_TIME_TYPE = 0;
Piano.BLIP_EFFECT = 0;
Piano.DEFAULT_WHITE_KEY_HEIGHT_PERCENTAGE = 0.9;
Piano.WHITE_KEY_HEIGHT_PERCENTAGE = 0.9;
Piano._SHOW_PIANO = true;
Piano.DEFAULT_BLACK_KEY_HEIGHT_PERCENTAGE = 0.55;
Piano.BLACK_KEY_HEIGHT_PERCENTAGE = 0.55;
Piano.DEFAULT_WHITEKEY_COLOR = "white";
Piano.DEFAULT_BLACKKEY_COLOR = "#3a3e4c";
Piano.keyToNote = {};
Piano.noteToKey = {};
Piano.INITIALIZED = false;
Piano.noteBufferSystem = {};
Piano.rawWidth = 0;
Piano.getKeyFromNote = function(note, transpose = 0) {
    return Piano.noteToKey[note + 12 + transpose];
};
Piano.getNoteFromKey = function(key) {
    return Piano.keyToNote[key];
};
Piano.keyCode_to_note = function(keyCode, transpose) {
    let note = -1;
    if (typeof transpose === 'undefined')
        transpose = 0;
    if (keyCode === 90) {
        note = 0;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 83) {
        note = 1;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 88) {
        note = 2;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 68) {
        note = 3;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 67) {
        note = 4;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 86) {
        note = 5;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 71) {
        note = 6;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 66) {
        note = 7;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 72) {
        note = 8;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 78) {
        note = 9;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 74) {
        note = 10;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 77) {
        note = 11;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 188 || keyCode === 81) {
        note = 12;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 50 || keyCode === 76) {
        note = 13;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 87 || keyCode === 190) {
        note = 14;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 51 || keyCode === 186) {
        note = 15;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 69 || keyCode === 191) {
        note = 16;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 82) {
        note = 17;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 53) {
        note = 18;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 84) {
        note = 19;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 54) {
        note = 20;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 89) {
        note = 21;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 55) {
        note = 22;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 85) {
        note = 23;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 73) {
        note = 24;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 57) {
        note = 25;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 79) {
        note = 26;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 48) {
        note = 27;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 80) {
        note = 28;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 219) {
        note = 29;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 187) {
        note = 30;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 221) {
        note = 31;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 8) {
        note = 32;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 220) {
        note = 33;
        Piano.KEYCODES[note] = keyCode;
    }
    if (note === -1)
        return "-1";
    else
        return ("_" + (note + 12 + transpose));
};
Piano.keyCode_to_note_mpp = function(keyCode, transpose) {
    if (typeof transpose === 'undefined')
        transpose = 0;
    let note = -1;
    if (keyCode === 65) {
        note = 8;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 90) {
        note = 9;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 83) {
        note = 10;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 88) {
        note = 11;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 67) {
        note = 12;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 70) {
        note = 13;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 86) {
        note = 14;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 71) {
        note = 15;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 66) {
        note = 16;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 78) {
        note = 17;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 74) {
        note = 18;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 77) {
        note = 19;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 75) {
        note = 20;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 188) {
        note = 21;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 76) {
        note = 22;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 190) {
        note = 23;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 191) {
        note = 24;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 222) {
        note = 25;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 49) {
        note = 20;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 81) {
        note = 21;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 50) {
        note = 22;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 87) {
        note = 23;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 69) {
        note = 24;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 52) {
        note = 25;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 82) {
        note = 26;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 53) {
        note = 27;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 84) {
        note = 28;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 89) {
        note = 29;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 55) {
        note = 30;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 85) {
        note = 31;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 56) {
        note = 32;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 57) {
        note = 34;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 189) {
        note = 37;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 187) {
        note = 39;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 73) {
        note = 33;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 79) {
        note = 35;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 80) {
        note = 36;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 219) {
        note = 38;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 221) {
        note = 40;
        Piano.KEYCODES[note] = keyCode;
    }
    if (note === -1)
        return "-1";
    else
        return ("_" + (note + transpose));
};
Piano.keyCode_to_note_vp = function(keyCode, transpose) {
    if (typeof transpose === 'undefined')
        transpose = 0;
    let note = -1;
    if (keyCode === 49) {
        note = 12;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 50) {
        note = 14;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 51) {
        note = 16;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 52) {
        note = 17;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 53) {
        note = 19;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 54) {
        note = 21;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 55) {
        note = 23;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 56) {
        note = 24;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 57) {
        note = 26;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 48) {
        note = 28;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 81) {
        note = 29;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 87) {
        note = 31;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 69) {
        note = 33;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 82) {
        note = 35;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 84) {
        note = 36;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 89) {
        note = 38;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 85) {
        note = 40;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 73) {
        note = 41;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 79) {
        note = 43;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 80) {
        note = 45;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 65) {
        note = 47;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 83) {
        note = 48;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 68) {
        note = 50;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 70) {
        note = 52;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 71) {
        note = 53;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 72) {
        note = 55;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 74) {
        note = 57;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 75) {
        note = 59;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 76) {
        note = 60;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 90) {
        note = 62;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 88) {
        note = 64;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 67) {
        note = 65;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 86) {
        note = 67;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 66) {
        note = 69;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 78) {
        note = 71;
        Piano.KEYCODES[note] = keyCode;
    }
    if (keyCode === 77) {
        note = 72;
        Piano.KEYCODES[note] = keyCode;
    }
    if (note === -1)
        return "-1";
    else
        return ("_" + (note + transpose));
};
Piano.startBlobDancing = false;
Piano.lastKeyPressedTime = 0;
exports.Piano = Piano;
class PianoKey {
    constructor(type) {
        this.spatial = 0;
        this.key = 0;
        this.color = "";
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this.last = {
            x: -1,
            y: -1,
            width: -1,
            height: -1,
        };
        this.keyDown = false;
        this.type = type;
    }
    contains(x, y) {
        let x2 = this.x + this.width,
            y2 = this.y + this.height;
        return (x >= this.x && x <= x2 && y >= this.y && y <= y2);
    };
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
}
class PianoKey_2D extends PianoKey {
    constructor(type, ctx) {
        super(type);
        this.animateDownVal = 3;
        this.blips = [];
        this.instrumentSlot = null;
        this.lastX = 0;
        this.lastY = 0;
        this.particleStart = new Map();
        this.meter = null;
        if (ctx) {
            this.render = ctx;
            this.ctx = ctx.getContext("2d");
        }
    }
    animateDown(vel = 1, color, inote) {
        if (this.keyDown)
            return;
        this.keyDown = true;
        this.y += this.animateDownVal;
        if (this.y > this.animateDownVal)
            this.y = this.animateDownVal;
        let max = 0,
            min = 0;
        switch (Piano.ANIMATION_TYPE) {
            case eAnimationType.CIRCLES:
                min = this.width * 0.15;
                max = this.width * 0.3;
                break;
            case eAnimationType.SQUARES:
                min = this.height * 0.05;
                max = this.height * 0.15;
                break;
        }
        let h = PianoRhythm_1.PianoRhythm.map(vel, 0, 1, min, max);
        this.blips.push({
            alpha: 1,
            keyUp: false,
            time: Date.now(),
            color: color || PianoRhythm_1.PianoRhythm.COLORS.base4,
            y: this.height - h,
            h: h,
            duration: (inote && inote.duration) ? inote.duration : null,
            set: false,
            velY: 10,
            velX: 0
        });
        if (inote && inote.socketID) {
            let particle_count = this.particleStart.get(inote.socketID) || 0;
            if (particle_count != undefined)
                this.particleStart.set(inote.socketID, particle_count++);
            if (PianoRhythmPlayer_1.PianoRhythmPlayer.PARTICLE_SYSTEM && (Piano.PLAYER_USE_PARTICLES && PianoRhythmPlayer_1.PianoRhythmPlayer.isPLAYING || Piano.USE_PARTICLES) && particle_count == 1) {
                PianoRhythmPlayer_1.PianoRhythmPlayer.PARTICLE_SYSTEM.initParticles(this.x + this.width / 2, PianoRhythmPlayer_1.PianoRhythmPlayer.CANVAS.height - 5, color);
            }
        }
        this._timer = setTimeout(() => {
            if (this.keyDown)
                this.animateUp();
        }, (Piano.BLIP_ANIMATE_TIME_TYPE == 0) ? 150 : 3000);
    }
    animateUp(socketID) {
        this.particleStart.delete(socketID);
        if (this._timer)
            clearTimeout(this._timer);
        this.keyDown = false;
        this.y = 0;
    }
    pressDown(note, vol = 0.5) {
        if (!note)
            return;
            if (!note.socketID.includes("tonqtonq")) {
        if (note.socketID === PianoRhythm_1.PianoRhythm.CLIENT.socketID || note.socketID.includes("tonqtonq"))
            switch (PianoRhythm_1.PianoRhythmDock.CURRENT_SLOT_MODE) {
                case PianoRhythm_1.SLOT_MODE.PIANO_2:
                case PianoRhythm_1.SLOT_MODE.PIANO_4:
                case PianoRhythm_1.SLOT_MODE.PIANO_8:
                    if (PianoRhythm_1.PianoRhythmDock.DOCK_INSTRUMENTS && PianoRhythm_1.PianoRhythmDock.DOCK_INSTRUMENTS[this.instrumentSlot])
                        note.instrumentName = PianoRhythm_1.PianoRhythmDock.DOCK_INSTRUMENTS[this.instrumentSlot].instrument || Piano.ACTIVE_INSTRUMENT;
                    break;
            }
        if (!note.delay)
            note.delay = 0;
        AudioEngine_1.AudioEngine.play(note.instrumentName || Piano.ACTIVE_INSTRUMENT, this.id, vol, AudioEngine_1.AudioEngine.context.currentTime + (note.delay / 1000), note.socketID, note.color, note);
    
            }
            }
    pressUp(note) {
        if (!note)
            return;
            if (!note.socketID.includes("tonqtonq")) {
        if (note.socketID === PianoRhythm_1.PianoRhythm.CLIENT.socketID || note.socketID.includes("tonqtonq"))
            switch (PianoRhythm_1.PianoRhythmDock.CURRENT_SLOT_MODE) {
                case PianoRhythm_1.SLOT_MODE.PIANO_2:
                case PianoRhythm_1.SLOT_MODE.PIANO_4:
                case PianoRhythm_1.SLOT_MODE.PIANO_8:
                    if (PianoRhythm_1.PianoRhythmDock.DOCK_INSTRUMENTS && PianoRhythm_1.PianoRhythmDock.DOCK_INSTRUMENTS[this.instrumentSlot])
                        note.instrumentName = PianoRhythm_1.PianoRhythmDock.DOCK_INSTRUMENTS[this.instrumentSlot].instrument || Piano.ACTIVE_INSTRUMENT;
                    break;
            }
        if (!note.delay)
            note.delay = 0;
        AudioEngine_1.AudioEngine.stop(note.instrumentName || Piano.ACTIVE_INSTRUMENT, this.id, AudioEngine_1.AudioEngine.context.currentTime + (note.delay / 1000) || 0, note.socketID);
            }
                
            }
    reset() {
        this.instrumentSlot = null;
        let out = {
            color: null,
            width: null,
            height: null,
            solid: null,
            rounded: null
        };
        this.render = this.type == "white" ? Piano.WhiteKeyRender(null, out) : Piano.BlackKeyRender(null, out);
    }
}
exports.PianoKey_2D = PianoKey_2D;
class NoteQuota {
    constructor() {
        this.maxPoints = 600;
        this.allowance = 200;
        this.points = this.maxPoints;
        this.maxHistory = 3;
        this.pointVal = 0;
        this.history = [this.maxPoints];
        if (PianoRhythm_1.PianoRhythm.SOCKET)
            PianoRhythm_1.PianoRhythm.SOCKET.emit("getNQParams");
        setInterval(() => {
            this.history.unshift(this.points);
            this.history.length = this.maxHistory;
            if (this.points < this.maxPoints) {
                this.points += this.allowance;
                if (this.points > this.maxPoints)
                    this.points = this.maxPoints;
            }
            if (PianoRhythm_1.PianoRhythm.NQ_SLIDER) {
                this.pointVal = PianoRhythm_1.PianoRhythm.map(this.points, 0, this.maxPoints, 0, 1);
                PianoRhythm_1.PianoRhythm.NQ_SLIDER.set(this.pointVal);
            }
        }, 2000);
        if (PianoRhythm_1.PianoRhythm.DEBUG_MESSAGING)
            console.info("Note Quota has started.");
    }
    resetPoints() {
        this.points = this.maxPoints;
        this.history = [];
        for (let i = 0; i < this.history.length; i++)
            this.history.unshift(this.points);
    }
    spendPoint(needed) {
        if (PianoRhythm_1.PianoRhythm.OFFLINE_MODE)
            return true;
        let sum = 0;
        for (let i = 0; i < this.history.length; i++) {
            sum += this.history[i];
        }
        if (sum <= 0)
            needed *= this.allowance;
        if (this.points < needed) {
            return false;
        } else {
            this.points -= needed;
            this.pointVal = PianoRhythm_1.PianoRhythm.map(this.points, 0, this.maxPoints, 0, 1);
            if (PianoRhythm_1.PianoRhythm.NQ_SLIDER)
                PianoRhythm_1.PianoRhythm.NQ_SLIDER.set(this.pointVal);
            return true;
        }
    }
}
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = {
            tl: radius,
            tr: radius,
            br: radius,
            bl: radius
        };
    } else {
        let defaultRadius = {
            tl: 0,
            tr: 0,
            br: 0,
            bl: 0
        };
        for (let side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }
}
