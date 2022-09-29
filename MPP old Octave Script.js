// ==UserScript==
// @name         mpp script old transpose
// @namespace    http://www.multiplayerpiano.com/
// @version      1
// @description
// @author       electrashave 2015 and Antifreez 2018 add some options ty
// @match        www.multiplayerpiano.com/*
// @match        mpp.terrium.net/*
// @grant        none
// ==/UserScript==

var transLvl = 0;
var octave = 0;
var msgs = 0;
var keys = [];

//Mouse octave
var mouseOctOn = false;
var mouseOct = -1;

function msgBox(about, info, duration, target){
	MPP.client._events.notification[0]({
		title: about,
        html: info,
        target: target,
        duration: duration
	});
}

keyDown = function(evt) {
    var code = parseInt(evt.keyCode);
    if (code == 39) {
        transLvl++;
        msgBox('Transposing', 'Transpose level: ' + transLvl, 1500, '#midi-btn');
    }
    if (code == 37) {
        transLvl--;
        msgBox('Transposing', 'Transpose level: ' + transLvl, 1500, '#midi-btn');
    }
	if(code == 35 || code == 45){
		mouseOctOn = !mouseOctOn;
		msgBox('Mouse octave', 'Mouse octave mode: ' + (mouseOctOn ? "enabled" : "disabled") + ".", 1500, '#midi-btn');
	}
    if (!keys[code]) {
        octave = 0;
        keys[code] = true;
        if (keys[32]) --octave == --octave + -octave;
        else if (keys[18]) ++octave == ++octave + +octave;
        else if (keys[192]) ++octave == ++octave + ++octave;
    }
};
keyUp = function(evt) {
    var code = parseInt(evt.keyCode);
    if (keys[code]) {
        octave = 0;
        keys[code] = false;
        if (keys[32]) --octave == --octave + -octave;
        else if (keys[18]) ++octave == ++octave + +octave;
        else if (keys[192]) ++octave == ++octave + ++octave;
    }
}
$(document).on("keydown", keyDown);
$(document).on("keyup", keyUp);
MPP.client.startNote = function(note, vel) {
    note = MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(note) + transLvl]].note;
    var octaves = parseInt(note.replace(/[^\d.]/, '').replace('s', ''));
    var note = note.replace(/[0-9]/g, '').replace("-", "");
    note = note + (octaves + octave);
    if (this.isConnected()) {
        var vel = typeof vel === "undefined" ? undefined : +vel.toFixed(3);
        if (!this.noteBufferTime) {
            this.noteBufferTime = Date.now();
            this.noteBuffer.push({
                n: note,
                v: vel
            });
        } else {
            this.noteBuffer.push({
                d: Date.now() - this.noteBufferTime,
                n: note,
                v: vel
            });
        }
    }
console.log("note to start " + note);
}
MPP.client.stopNote = function(note) {
    note = MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(note) + transLvl]].note;
    var octaves = parseInt(note.replace(/[^\d.]/, '').replace('s', ''));
    var note = note.replace(/[0-9]/g, '').replace("-", "");
    note = note + (octaves + octave);
    if (this.isConnected()) {
        //var vel = typeof vel === "undefined" ? undefined : +vel.toFixed(3);
        MPP.release(note);
        if (!this.noteBufferTime) {
            this.noteBufferTime = Date.now();
            this.noteBuffer.push({
                n: note,
                s: 1
            });
        } else {
            this.noteBuffer.push({
                d: Date.now() - this.noteBufferTime,
                n: note,
                s: 1
            });
        }
    }
console.log("note to stop " + note);
}
MPP.piano.play = function(note, vol, participant, delay_ms) {
    if (participant._id == MPP.client.getOwnParticipant()._id) {
        note = MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(note) + transLvl]].note;
        var octaves = parseInt(note.replace(/[^\d.]/, '').replace('s', ''));
        var note = note.replace(/[0-9]/g, '').replace("-", "");
        note = note + (octaves + octave);
    }
    if (!this.keys.hasOwnProperty(note)) return;
    var key = this.keys[note];
    if (key.loaded) this.audio.play(key.note, vol, delay_ms, participant.id);
    var self = this;
    var jq_namediv = $(typeof participant == "undefined" ? null : participant.nameDiv);
    if (jq_namediv) {
        setTimeout(function() {
            self.renderer.visualize(key, typeof participant == "undefined" ? "yellow" : (participant.color || "#777"));
            jq_namediv.addClass("play");
            setTimeout(function() {
                jq_namediv.removeClass("play");
            }, 30);
        }, delay_ms);
    }
console.log("note to play " + note);
};
$("#volume-label").text("Volume: " + Math.floor(MPP.piano.audio.volume * 100) + "%");
$(".volume-slider").on("mousemove", function(evt) {
    var v = evt.srcElement.value;
    MPP.piano.audio.setVolume(v);
    if (window.localStorage) localStorage.volume = v;
    $("#volume-label").text("Volume: " + Math.floor(v * 100) + "%");
});

//Mouse octave
var mouse_down = false;
var last_key = null;

var translateMouseEvent = function(evt) {
	var element = evt.target;
	var offx = 0;
	var offy = 0;
	do {
		offx += element.offsetLeft;
		offy += element.offsetTop;
	} while(element = element.offsetParent);
	return {
		x: evt.pageX - offx,
		y: evt.pageY - offy
	}
};

$(MPP.piano.rootElement).mousedown(function(event) {
	if(!mouseOctOn) return;
	mouse_down = true;
	//event.stopPropagation();
	event.preventDefault();

	var pos = translateMouseEvent(event);
	var hit = MPP.piano.renderer.getHit(pos.x, pos.y);
	if(hit) {
		var note = hit.key.baseNote + (hit.key.octave + mouseOct);
		MPP.press(note, hit.v);
		last_key = MPP.piano.keys[note];
        console.log("last key  " + note);
	}
});
$(window).mouseup(function(event) {
	if(last_key) {
		MPP.release(last_key.note);
        console.log(last_key.note);
	}
	mouse_down = false;
	last_key = null;
});