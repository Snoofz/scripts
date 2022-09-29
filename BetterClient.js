// ==UserScript==
// @name       Better Client
// @namespace  http://www.multiplayerpiano.com/
// @updateURL  https://dl.dropboxusercontent.com/u/62490156/script.js
// @downloadURL  https://dl.dropboxusercontent.com/u/62490156/script.js
// @version    2.0003
// @description  A better client for MPP. Includes private encrypted messaging client!
// @match      http://www.multiplayerpiano.com/*
// @copyright  2014+, Boss
// ==/UserScript==

/*
 * Controls:
 *
 * You can private-message other users of the client by typing in chat: /m their name message
 *
 * Space + capslock or shift: widens the note range so you can play any note. Try it! hold down space as you play shift + a note.
 * ` + capslock or shift: widens it even further.
 *
 * Esc: Lock/unlock the controls so they are not changed as you play.
 * Up/down/left/right arrow keys: Change octave
 *
 * \: toggle echo. takes precedence over jump.
 * delete: toggle jump.
 * numpad +: toggle tremelo. Also takes precedence over jump.
 *
 * tab: toggle sustain
 * backspace: reset octaves
 *
 * home: increase echo/jump delay
 * end: decrease echo/jump delay
 *
 * 6: increase volume mode
 * h: decrease volume mode
 *
 * Page up/Page down: Recording and playback. But recording is beta. So, maybe, don't use it :D. Or go ahead and try.
 *
 */

var recordingTime = 0;
	var allRecordingTime = 0;
	var playbackTaskID = 0;
	var playbackLength = 1000;
	var recording = [];
	var recordingVolume = [];
	var times = [];
	var recordIndex = 0;
	var playing = false;
	var playTaskIDs = [];
	var disableFunctionKeys = false;
	var tremelo = false;
	var tremeloTaskIDs = [];
	var sustainFix = [];
var multinote = false;

$(function() {
    // some encryption stuff to be compatible with my other client. merge 'em.
    function isPrime(n) { // this one is pretty fast.
        if (isNaN(n) || !isFinite(n)) return false;
        if (n == 0) return false;
        if (n % 1 || n * n < 2) return false;
        if (n % 2 == 0) return n == 2;
        if (n % 3 == 0) return n == 3;
        if (n % 5 == 0) return n == 5;
        var m = Math.floor(Math.sqrt(n)) + 1;
        for (var i = 7; i < m; i += 30) {
            if (n % i == 0) return false;
            if (n % (i + 4) == 0) return false;
            if (n % (i + 6) == 0) return false;
            if (n % (i + 10) == 0) return false;
            if (n % (i + 12) == 0) return false;
            if (n % (i + 16) == 0) return false;
            if (n % (i + 22) == 0) return false;
            if (n % (i + 24) == 0) return false;
        }
        return true;
    }

    var rsa_n = 0;
    var rsa_e = 10007; // due to technical reasons this is not 65537.
    var rsa_d = 0;

    function generateRSA() {
        while (true) {
            // multiply by 2, add an odd number: Starts odd.
            var start1 = Math.floor(Math.random() * 155) * 2 + 100 + 1; // 100 is approximately
            var start2 = Math.floor(Math.random() * 155) * 2 + 100 + 1; // sqrt(10007)
            // 155 is the least number n for (100+n)^2 < 65536, max single width unicode value
            // chance of two people getting the same two starting values: about 1/12013 (or is it 1/25000 due to unique rsa_d?). This chance is
            // acceptable because not many people use the site, and it doesn't need maximum security.
            while (!isPrime(start1)) start1 += 2; // well, we sure do value efficiency.
            while (!isPrime(start2)) start2 += 2;
            // each unicode value will map to a different unicode value. Yes, it will be
            // 1-1, but due to these technical limitations, it works and is secure-ish.
            // Could fix the security problem by calling this function each time a
            // message is sent. Might do that if it doesn't introduce other problems.

            // to combat a bit of a problem, haha
            while (start1 * start2 > 65535) {
                if (start1 > 255) {
                    start1 -= 2;
                    while (!isPrime(start1)) start1 -= 2;
                } else {
                    start2 -= 2;
                    while (!isPrime(start2)) start2 -= 2;
                }
            }

            // now we can calculate some cool things.
            rsa_n = start1 * start2;
            // already got e. That'll stay the same. For both technical reasons. It's as secure as people on this site are willing to go, I bet.
            // now for the fun part. What is d?

            // thanks, wikipedia.
            var t = 0;
            var newt = 1;
            var r = (start1 - 1) * (start2 - 1);
            var newr = rsa_e;
            while (newr != 0) {
                var quotient = Math.floor(r / newr);
                var tmp = t;
                t = newt;
                newt = tmp - quotient * newt;
                tmp = r;
                r = newr;
                newr = tmp - quotient * newr;
            }
            if (r > 1) continue;
            if (t < 0) t += (start1 - 1) * (start2 - 1);
            rsa_d = t;
            break;
        } // so. All of the things are generated. We can do cool things now!
    }

// sure, if you're even midly determined, you can break the encryption quite easily. But it's more work than I think most people will do :P
    function encrypt(message, rsaN) {
        var encrypted = "";
        for (var i = 0; i < message.length; i++) {
            var str = message.charCodeAt(i);
            var modulused = 1;
            for (var e = rsa_e - 1; e >= 0; e--) { // everyone has same rsa_e
                modulused = modulused * str % rsaN;
            }
            encrypted += String.fromCharCode((modulused + i * i * 0) % 65536); // + i*i helps combat the security flaw (slightly)
        }
        return encrypted; // again, it's character-for-character encryption. Terrible
        // idea but it is necessary due to character limit!
    }

    function decrypt(message) {
        var decrypted = "";
        for (var i = 0; i < message.length; i++) {
            var str = message.charCodeAt(i) - i * i * 0; // same thing going on here. Combats flaw (slightly)
            if (str < 0)
                str += 65536; // could be that it drops below 0. Not so good :P
            var modulused = 1;
            for (var e = rsa_d - 1; e >= 0; e--) { // all rsa_d are unique. Well, the 156ish values. But with rsa_n, 12000 combinations. Or 25000.
                modulused = modulused * str % rsa_n;
            }
            decrypted += String.fromCharCode(modulused);
        }
        return decrypted; // not much changes. same flaw.
    }

    // cool. Now it will work nicely :D. Just send rsa_n periodically as a negative volume.
    var rsa_nUsers = new Array();


	var test_mode = (window.location.hash && window.location.hash == "#test");
	//var canvas_override = (window.location.hash && window.location.hash == "#canvas");

	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(elt /*, from*/) {
			var len = this.length >>> 0;
			var from = Number(arguments[1]) || 0;
			from = (from < 0) ? Math.ceil(from) : Math.floor(from);
			if (from < 0) from += len;
			for (; from < len; from++) {
				if (from in this && this[from] === elt) return from;
			}
			return -1;
		};
	}

	window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame
		|| window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
		|| function (cb) { setTimeout(cb, 1000 / 30); };






































	var DEFAULT_VELOCITY = 0.5;












































	var TIMING_TARGET = 1000;



















// Utility

////////////////////////////////////////////////////////////////



var Rect = function(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.x2 = x + w;
	this.y2 = y + h;
};
Rect.prototype.contains = function(x, y) {
	return (x >= this.x && x <= this.x2 && y >= this.y && y <= this.y2);
};
















// performing translation

////////////////////////////////////////////////////////////////

	var Translation = (function() {
		var strings = {
			"people are playing": {
				"pt": "pessoas estão jogando",
				"es": "personas están jugando",
				"ru": "??????? ??????",
				"fr": "personnes jouent",
				"ja": "???????",
				"de": "Leute spielen",
				"zh": "???",
				"nl": "mensen spelen",
				"pl": "osób graj?",
				"hu": "ember játszik"
			},
			"New Room...": {
				"pt": "Nova Sala ...",
				"es": "Nueva sala de...",
				"ru": "????? ?????...",
				"ja": "?????",
				"zh": "???",
				"nl": "nieuwe Kamer",
				"hu": "új szoba"
			},
			"room name": {
				"pt": "nome da sala",
				"es": "sala de nombre",
				"ru": "???????? ???????",
				"fr": "nom de la chambre",
				"ja": "????",
				"de": "Raumnamen",
				"zh": "????",
				"nl": "kamernaam",
				"pl": "nazwa pokój",
				"hu": "szoba neve"
			},
			"Visible (open to everyone)": {
				"pt": "Visível (aberto a todos)",
				"es": "Visible (abierto a todo el mundo)",
				"ru": "Visible (???????? ??? ????)",
				"fr": "Visible (ouvert à tous)",
				"ja": "????????????????",
				"de": "Sichtbar (offen für alle)",
				"zh": "??????????",
				"nl": "Zichtbaar (open voor iedereen)",
				"pl": "Widoczne (otwarte dla wszystkich)",
				"hu": "Látható (nyitott mindenki számára)"
			},
			"Enable Chat": {
				"pt": "Ativar bate-papo",
				"es": "Habilitar chat",
				"ru": "???????? ???",
				"fr": "Activer discuter",
				"ja": "??????????",
				"de": "aktivieren Sie chatten",
				"zh": "????",
				"nl": "Chat inschakelen",
				"pl": "W??cz czat",
				"hu": "a csevegést"
			}
			// todo: it, tr, th, sv, ar, fi, nb, da, sv, he, cs, ko, ro, vi, id, nb, el, sk, bg, lt, sl, hr
			// todo: Connecting, Offline mode, input placeholder, Notifications
		};

		var setLanguage = function(lang) {
			language = lang
		};

		var getLanguage = function() {
			if(window.navigator && navigator.language && navigator.language.length >= 2) {
				return navigator.language.substr(0, 2).toLowerCase();
			} else {
				return "en";
			}
		};

		var get = function(text, lang) {
			if(typeof lang === "undefined") lang = language;
			var row = strings[text];
			if(row == undefined) return text;
			var string = row[lang];
			if(string == undefined) return text;
			return string;
		};

		var perform = function(lang) {
			if(typeof lang === "undefined") lang = language;
			$(".translate").each(function(i, ele) {
				var th = $(this);
				if(ele.tagName && ele.tagName.toLowerCase() == "input") {
					if(typeof ele.placeholder != "undefined") {
						th.attr("placeholder", get(th.attr("placeholder"), lang))
					}
				} else {
					th.text(get(th.text(), lang));
				}
			});
		};

		var language = getLanguage();

		return {
			setLanguage: setLanguage,
			getLanguage: getLanguage,
			get: get,
			perform: perform
		};
	})();

	Translation.perform();















// AudioEngine classes

////////////////////////////////////////////////////////////////

	var AudioEngine = function() {
	};

	AudioEngine.prototype.init = function(cb) {
		this.volume = 0.6;
		this.sounds = {};
		return this;
	};

	AudioEngine.prototype.load = function(id, url, cb) {
	};

	AudioEngine.prototype.play = function() {
	};

	AudioEngine.prototype.stop = function() {
	};

	AudioEngine.prototype.setVolume = function(vol) {
		this.volume = vol;
	};


	AudioEngineSM2 = function() {
	};

	AudioEngineSM2.prototype = new AudioEngine();

	AudioEngineSM2.prototype.init = function(cb) {
		AudioEngine.prototype.init.call(this);

		window.SM2_DEFER = true;
		var script = document.createElement("script");
		script.src = "/soundmanager2/soundmanager2.js";

		var loaded = false;
		script.onload = function() {
			if(loaded) return;
			if(typeof SoundManager === "undefined") {
				setTimeout(script.onload, 4000);
				return;
			}
			loaded = true;

			window.soundManager = new SoundManager();
			soundManager.url = "/soundmanager2/";
			soundManager.debugMode = test_mode ? true : false;
			soundManager.useHTML5Audio = false;
			soundManager.flashVersion = 9;
			soundManager.multiShot = true;
			soundManager.useHighPerformance = true;
			soundManager.beginDelayedInit();
			if(cb) soundManager.onready(cb);
		};
		setTimeout(script.onload, 4000);

		document.body.appendChild(script);
		return this;
	};

	AudioEngineSM2.prototype.load = function(id, url, cb) {
		this.sounds[id] = soundManager.createSound({
			id: id,
			url: url,
			autoLoad: true,
			volume: this.volume,
			onload: cb
		});
	};

	AudioEngineSM2.prototype.play = function(id, vol, delay_ms) {
		var self = this;
		setTimeout(function() {
			soundManager.play(id, {volume: self.volume * 100.0});
		}, delay_ms);
	};

	AudioEngineSM2.prototype.setVolume = function(vol) {
		AudioEngine.prototype.setVolume.call(this, vol);
		for(var i in this.sounds) {
			if(this.sounds.hasOwnProperty(i)) {
				this.sounds[i].setVolume(this.volume * 100.0);
			}
		}
	};


	AudioEngineWeb = function() {
	};

	AudioEngineWeb.prototype = new AudioEngine();

	AudioEngineWeb.prototype.init = function(cb) {
		AudioEngine.prototype.init.call(this);
		this.context = new AudioContext();
		this.gainNode = this.context.createGain();
		this.gainNode.connect(this.context.destination);
		this.gainNode.gain.value = this.volume;
		this.playings = {};
		if(cb) setTimeout(cb, 0);
		return this;
	};

	AudioEngineWeb.prototype.load = function(id, url, cb) {
		var audio = this;
		var req = new XMLHttpRequest();
		req.open("GET", url);
		req.responseType = "arraybuffer";
		req.addEventListener("readystatechange", function(evt) {
			if(req.readyState !== 4) return;
			try {
				audio.context.decodeAudioData(req.response, function(buffer) {
					audio.sounds[id] = buffer;
					if(cb) cb();
				});
			} catch(e) {
				/*throw new Error(e.message
					+ " / id: " + id
					+ " / url: " + url
					+ " / status: " + req.status
					+ " / ArrayBuffer: " + (req.response instanceof ArrayBuffer)
					+ " / byteLength: " + (req.response && req.response.byteLength ? req.response.byteLength : "undefined"));*/
				new Notification({id: "audio-download-error", title: "Problem", text: "For some reason, an audio download failed with a status of " + req.status + ". "
					+ " I blame antivirus software.", target: "#piano", duration: 10000});
			}
		});
		req.send();
	};

	AudioEngineWeb.prototype.play = function(id, vol, delay_ms, part_id) {
		if(!this.sounds.hasOwnProperty(id)) return;
		var time = this.context.currentTime + (delay_ms / 1000);
		var source = this.context.createBufferSource();
		source.buffer = this.sounds[id];
		var gain = this.context.createGain();
		gain.gain.value = vol;
		source.connect(gain);
		gain.connect(this.gainNode);
		source.start(time);
		// Patch from ste-art remedies stuttering under heavy load
		if(this.playings[id]) {
			var playing = this.playings[id];
			playing.gain.gain.setValueAtTime(playing.gain.gain.value, time);
			playing.gain.gain.linearRampToValueAtTime(0.0, time + 0.5);
			playing.source.stop(time + 0.6);
		}
		this.playings[id] = {"source": source, "gain": gain, "part_id": part_id};
	};

	AudioEngineWeb.prototype.stop = function(id, delay_ms, part_id) {
		if(this.playings.hasOwnProperty(id) && this.playings[id] && this.playings[id].part_id === part_id) {
			var time = this.context.currentTime + (delay_ms / 1000);
			var gain = this.playings[id].gain.gain;
			gain.setValueAtTime(gain.value, time);
			gain.linearRampToValueAtTime(gain.value * 0.15, time + 0.2);
			this.playings[id].source.stop(time + 1.0);
			this.playings[id] = null;
		}
	};

	AudioEngineWeb.prototype.setVolume = function(vol) {
		AudioEngine.prototype.setVolume.call(this, vol);
		this.gainNode.gain.value = this.volume;
	};















// VolumeSlider inst

////////////////////////////////////////////////////////////////

	var VolumeSlider = function(ele, cb) {
		this.rootElement = ele;
		this.cb = cb;
		var range = document.createElement("input");
		try {
			range.type = "range";
		} catch(e) {
			// hello, IE9
		}
		if(range.min !== undefined) {
			this.range = range;
			this.rootElement.appendChild(range);
			range.className = "volume-slider";
			range.min = "0.0";
			range.max = "1.0";
			range.step = "0.01";
			$(range).on("change", function(evt) {
				cb(range.value);
			});
		} else {
			if(window.console) console.log("warn: no slider");
			// todo
		}
	};

	VolumeSlider.prototype.set = function(v) {
		if(this.range !== undefined) {
			this.range.value = v;
		} else {
			// todo
		}
	};



















// Renderer classes

////////////////////////////////////////////////////////////////

	var Renderer = function() {
	};

	Renderer.prototype.init = function(piano) {
		this.piano = piano;
		this.resize();
		return this;
	};

	Renderer.prototype.resize = function(width, height) {
		if(typeof width == "undefined") width = $(this.piano.rootElement).width();
		if(typeof height == "undefined") height = Math.floor(width * 0.2);
		$(this.piano.rootElement).css({"height": height + "px", marginTop: Math.floor($(window).height() / 2 - height / 2) + "px"});
		this.width = width;
		this.height = height;
	};

	Renderer.prototype.visualize = function(key, color) {
	};




	var DOMRenderer = function() {
		Renderer.call(this);
	};

	DOMRenderer.prototype = new Renderer();

	DOMRenderer.prototype.init = function(piano) {
		// create keys in dom
		for(var i in piano.keys) {
			if(!piano.keys.hasOwnProperty(i)) continue;
			var key = piano.keys[i];
			var ele = document.createElement("div");
			key.domElement = ele;
			piano.rootElement.appendChild(ele);
			// "key sharp cs cs2"
			ele.note = key.note;
			ele.id = key.note;
			ele.className = "key " + (key.sharp ? "sharp " : " ") + key.baseNote + " " + key.note + " loading";
			var table = $('<table width="100%" height="100%" style="pointer-events:none"></table>');
			var td = $('<td valign="bottom"></td>');
			table.append(td);
			td.valign = "bottom";
			$(ele).append(table);
		}
		// add event listeners
		var mouse_down = false;
		$(piano.rootElement).mousedown(function(event) {
			// todo: IE10 doesn't support the pointer-events css rule on the "blips"
			var ele = event.target;
			if($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
				if(gNoteQuota.spend(1) && !tremelo) {
					var key = piano.keys[ele.note];
					play(key.note);
				}
				mouse_down = true;
				event.stopPropagation();
			};
			//event.preventDefault();
		});
		piano.rootElement.addEventListener("touchstart", function(event) {
			for(var i in event.changedTouches) {
				var ele = event.changedTouches[i].target;
				if($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
					if(gNoteQuota.spend(1) && !tremelo) {
						var key = piano.keys[ele.note];
						play(key.note);
					}
					mouse_down = true;
					event.stopPropagation();
				}
			}
			//event.preventDefault();
		}, false);
		$(window).mouseup(function(event) {
			mouse_down = false;
		});
		/*$(piano.rootElement).mouseover(function(event) {
			if(!mouse_down) return;
			var ele = event.target;
			if($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
				if(gNoteQuota.spend(1)) {
					var key = piano.keys[ele.note];
					play(key.note);
				}
			}
		});*/

		Renderer.prototype.init.call(this, piano);
		return this;
	};

	DOMRenderer.prototype.resize = function(width, height) {
		Renderer.prototype.resize.call(this, width, height);
	};

	DOMRenderer.prototype.visualize = function(key, color) {
		var k = $(key.domElement);
		k.addClass("play");
		setTimeout(function(){
			k.removeClass("play");
		}, 100);
		// "blips"
		var d = $('<div style="width:100%;height:10%;margin:0;padding:0">&nbsp;</div>');
		d.css("background", color);
		k.find("td").append(d);
		d.fadeOut(1000, function(){
			d.remove();
		});
	};




	var CanvasRenderer = function() {
		Renderer.call(this);
	};

	CanvasRenderer.prototype = new Renderer();

	CanvasRenderer.prototype.init = function(piano) {
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		piano.rootElement.appendChild(this.canvas);

		Renderer.prototype.init.call(this, piano); // calls resize()

		// create render loop
		var self = this;
		var render = function() {
			self.redraw();
			requestAnimationFrame(render);
		};
		requestAnimationFrame(render);

		// add event listeners
		var mouse_down = false;
		var last_key = null;
		$(piano.rootElement).mousedown(function(event) {
			mouse_down = true;
			//event.stopPropagation();
			event.preventDefault();

			var pos = CanvasRenderer.translateMouseEvent(event);
			var hit = self.getHit(pos.x, pos.y);
			if(hit && gNoteQuota.spend(1) && !tremelo) {
				play(hit.key.note, hit.v);
				last_key = hit.key;
			}
		});
		piano.rootElement.addEventListener("touchstart", function(event) {
			mouse_down = true;
			//event.stopPropagation();
			event.preventDefault();
			for(var i in event.changedTouches) {
				var pos = CanvasRenderer.translateMouseEvent(event);
				var hit = self.getHit(pos.x, pos.y);
				if(hit && gNoteQuota.spend(1) && !tremelo) {
					play(hit.key.note, hit.v);
					last_key = hit.key;
				}
			}
		}, false);
		$(window).mouseup(function(event) {
			if(last_key && !gAutoSustain && !gSustain && gNoteQuota.spend(1)) {
				stop(last_key.note);
			}
			mouse_down = false;
			last_key = null;
		});
		/*$(piano.rootElement).mousemove(function(event) {
			if(!mouse_down) return;
			var pos = CanvasRenderer.translateMouseEvent(event);
			var hit = self.getHit(pos.x, pos.y);
			if(hit && hit.key != last_key && gNoteQuota.spend(1)) {
				play(hit.key.note, hit.v);
				last_key = hit.key;
			}
		});*/

		return this;
	};

	CanvasRenderer.prototype.resize = function(width, height) {
		Renderer.prototype.resize.call(this, width, height);
		if(this.width < 52 * 2) this.width = 52 * 2;
		if(this.height < this.width * 0.2) this.height = Math.floor(this.width * 0.2);
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		// calculate key sizes
		this.whiteKeyWidth = Math.floor(this.width / 52);
		this.whiteKeyHeight = Math.floor(this.height * 0.9);
		this.blackKeyWidth = Math.floor(this.whiteKeyWidth * 0.75);
		this.blackKeyHeight = Math.floor(this.height * 0.5);

		this.blackKeyOffset = Math.floor(this.whiteKeyWidth - (this.blackKeyWidth / 2));
		this.keyMovement = Math.floor(this.whiteKeyHeight * 0.015);

		this.whiteBlipWidth = Math.floor(this.whiteKeyWidth * 0.7);
		this.whiteBlipHeight = Math.floor(this.whiteBlipWidth * 0.8);
		this.whiteBlipX = Math.floor((this.whiteKeyWidth - this.whiteBlipWidth) / 2);
		this.whiteBlipY = Math.floor(this.whiteKeyHeight - this.whiteBlipHeight * 1.2);
		this.blackBlipWidth = Math.floor(this.blackKeyWidth * 0.7);
		this.blackBlipHeight = Math.floor(this.blackBlipWidth * 0.8);
		this.blackBlipY = Math.floor(this.blackKeyHeight - this.blackBlipHeight * 1.2);
		this.blackBlipX = Math.floor((this.blackKeyWidth - this.blackBlipWidth) / 2);

		// prerender white key
		this.whiteKeyRender = document.createElement("canvas");
		this.whiteKeyRender.width = this.whiteKeyWidth;
		this.whiteKeyRender.height = this.height + 10;
		var ctx = this.whiteKeyRender.getContext("2d");
		if(ctx.createLinearGradient) {
			var gradient = ctx.createLinearGradient(0, 0, 0, this.whiteKeyHeight);
			gradient.addColorStop(0, "#eee");
			gradient.addColorStop(0.75, "#fff");
			gradient.addColorStop(1, "#dad4d4");
			ctx.fillStyle = gradient;
		} else {
			ctx.fillStyle = "#fff";
		}
		ctx.strokeStyle = "#000";
		ctx.lineJoin = "round";
		ctx.lineCap = "round";
		ctx.lineWidth = 10;
		ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);
		ctx.lineWidth = 4;
		ctx.fillRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);

		// prerender black key
		this.blackKeyRender = document.createElement("canvas");
		this.blackKeyRender.width = this.blackKeyWidth + 10;
		this.blackKeyRender.height = this.blackKeyHeight + 10;
		var ctx = this.blackKeyRender.getContext("2d");
		if(ctx.createLinearGradient) {
			var gradient = ctx.createLinearGradient(0, 0, 0, this.blackKeyHeight);
			gradient.addColorStop(0, "#000");
			gradient.addColorStop(1, "#444");
			ctx.fillStyle = gradient;
		} else {
			ctx.fillStyle = "#000";
		}
		ctx.strokeStyle = "#222";
		ctx.lineJoin = "round";
		ctx.lineCap = "round";
		ctx.lineWidth = 8;
		ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);
		ctx.lineWidth = 4;
		ctx.fillRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);

		// prerender shadows
		this.shadowRender = [];
		var y = -this.canvas.height * 2;
		for(var j = 0; j < 2; j++) {
			var canvas = document.createElement("canvas");
			this.shadowRender[j] = canvas;
			canvas.width = this.canvas.width;
			canvas.height = this.canvas.height;
			var ctx = canvas.getContext("2d");
			var sharp = j ? true : false;
			ctx.lineJoin = "round";
			ctx.lineCap = "round";
			ctx.lineWidth = 1;
			ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
			ctx.shadowBlur = this.keyMovement * 3;
			ctx.shadowOffsetY = -y + this.keyMovement;
			if(sharp) {
				ctx.shadowOffsetX = this.keyMovement;
			} else {
				ctx.shadowOffsetX = 0;
				ctx.shadowOffsetY = -y + this.keyMovement;
			}
			for(var i in this.piano.keys) {
				if(!this.piano.keys.hasOwnProperty(i)) continue;
				var key = this.piano.keys[i];
				if(key.sharp != sharp) continue;

				if(key.sharp) {
					ctx.fillRect(this.blackKeyOffset + this.whiteKeyWidth * key.spatial + ctx.lineWidth / 2,
						y + ctx.lineWidth / 2,
						this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);
				} else {
					ctx.fillRect(this.whiteKeyWidth * key.spatial + ctx.lineWidth / 2,
						y + ctx.lineWidth / 2,
						this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);
				}
			}
		}

		// update key rects
		for(var i in this.piano.keys) {
			if(!this.piano.keys.hasOwnProperty(i)) continue;
			var key = this.piano.keys[i];
			if(key.sharp) {
				key.rect = new Rect(this.blackKeyOffset + this.whiteKeyWidth * key.spatial, 0,
					this.blackKeyWidth, this.blackKeyHeight);
			} else {
				key.rect = new Rect(this.whiteKeyWidth * key.spatial, 0,
					this.whiteKeyWidth, this.whiteKeyHeight);
			}
		}
	};

	CanvasRenderer.prototype.visualize = function(key, color) {
		key.timePlayed = Date.now();
		key.blips.push({"time": key.timePlayed, "color": color});
	};

	CanvasRenderer.prototype.redraw = function() {
		var now = Date.now();
		var timeLoadedEnd = now - 1000;
		var timePlayedEnd = now - 100;
		var timeBlipEnd = now - 1000;

		this.ctx.save();
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		// draw all keys
		for(var j = 0; j < 2; j++) {
			this.ctx.globalAlpha = 1.0;
			this.ctx.drawImage(this.shadowRender[j], 0, 0);
			var sharp = j ? true : false;
			for(var i in this.piano.keys) {
				if(!this.piano.keys.hasOwnProperty(i)) continue;
				var key = this.piano.keys[i];
				if(key.sharp != sharp) continue;

				if(!key.loaded) {
					this.ctx.globalAlpha = 0.2;
				} else if(key.timeLoaded > timeLoadedEnd) {
					this.ctx.globalAlpha = ((now - key.timeLoaded) / 1000) * 0.8 + 0.2;
				} else {
					this.ctx.globalAlpha = 1.0;
				}
				var y = 0;
				if(key.timePlayed > timePlayedEnd) {
					y = Math.floor(this.keyMovement - (((now - key.timePlayed) / 100) * this.keyMovement));
				}
				var x = Math.floor(key.sharp ? this.blackKeyOffset + this.whiteKeyWidth * key.spatial
					: this.whiteKeyWidth * key.spatial);
				var image = key.sharp ? this.blackKeyRender : this.whiteKeyRender;
				this.ctx.drawImage(image, x, y);

				// render blips
				if(key.blips.length) {
					var alpha = this.ctx.globalAlpha;
					var w, h;
					if(key.sharp) {
						x += this.blackBlipX;
						y = this.blackBlipY;
						w = this.blackBlipWidth;
						h = this.blackBlipHeight;
					} else {
						x += this.whiteBlipX;
						y = this.whiteBlipY;
						w = this.whiteBlipWidth;
						h = this.whiteBlipHeight;
					}
					for(var b = 0; b < key.blips.length; b++) {
						var blip = key.blips[b];
						if(blip.time > timeBlipEnd) {
							this.ctx.fillStyle = blip.color;
							this.ctx.globalAlpha = alpha - ((now - blip.time) / 1000);
							this.ctx.fillRect(x, y, w, h);
						} else {
							key.blips.splice(b, 1);
							--b;
						}
						y -= Math.floor(h * 1.1);
					}
				}
			}
		}
		this.ctx.restore();
	};

	CanvasRenderer.prototype.getHit = function(x, y) {
		for(var j = 0; j < 2; j++) {
			var sharp = j ? false : true; // black keys first
			for(var i in this.piano.keys) {
				if(!this.piano.keys.hasOwnProperty(i)) continue;
				var key = this.piano.keys[i];
				if(key.sharp != sharp) continue;
				if(key.rect.contains(x, y)) {
					var v = y / (key.sharp ? this.blackKeyHeight : this.whiteKeyHeight);
					v += 0.25;
					v *= DEFAULT_VELOCITY;
					if(v > 1.0) v = 1.0;
					return {"key": key, "v": v};
				}
			}
		}
		return null;
	};


	CanvasRenderer.isSupported = function() {
		//return canvas_override;
		var canvas = document.createElement("canvas");
		return !!(canvas.getContext && canvas.getContext("2d"));
	};

	CanvasRenderer.translateMouseEvent = function(evt) {
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












// Pianoctor

////////////////////////////////////////////////////////////////

	var PianoKey = function(note, octave) {
		this.note = note + octave;
		this.baseNote = note;
		this.sharp = note.indexOf("s") != -1;
		this.loaded = false;
		this.timeLoaded = 0;
		this.domElement = null;
		this.timePlayed = 0;
		this.blips = [];
	};

	var Piano = function(rootElement) {

		var piano = this;
		piano.rootElement = rootElement;
		piano.keys = {};

		var white_spatial = 0;
		var black_spatial = 0;
		var black_it = 0;
		var black_lut = [2, 1, 2, 1, 1];
		var addKey = function(note, octave) {
			var key = new PianoKey(note, octave);
			piano.keys[key.note] = key;
			if(key.sharp) {
				key.spatial = black_spatial;
				black_spatial += black_lut[black_it % 5];
				++black_it;
			} else {
				key.spatial = white_spatial;
				++white_spatial;
			}
		}
		if(test_mode) {
			addKey("c", 2);
		} else {
			addKey("a", -1);
			addKey("as", -1);
			addKey("b", -1);
			var notes = "c cs d ds e f fs g gs a as b".split(" ");
			for(var oct = 0; oct < 7; oct++) {
				for(var i in notes) {
					addKey(notes[i], oct);
				}
			}
			addKey("c", 7);
		}


		var render_engine = CanvasRenderer.isSupported() ? CanvasRenderer : DOMRenderer;
		this.renderer = new render_engine().init(this);

		$(window).resize(function() {
			piano.renderer.resize();
		});


		window.AudioContext = window.AudioContext || window.webkitAudioContext || undefined;
		var audio_engine = (window.AudioContext === undefined) ? AudioEngineSM2 : AudioEngineWeb;

		// Firefox 25 supports WebAudio, but a decodeAudioData issue is blocking until 26
		// https://bugzilla.mozilla.org/show_bug.cgi?id=865553
		var search_str = " Firefox/";
		var idx = navigator.userAgent.indexOf(search_str);
		if(idx !== -1) {
			var version = parseFloat(navigator.userAgent.substring(idx + search_str.length));
			if(isNaN(version) || version < 26.0) {
				audio_engine = AudioEngineSM2;
			}
		}

		this.audio = new audio_engine().init(function() {
			for(var i in piano.keys) {
				if(!piano.keys.hasOwnProperty(i)) continue;
				(function() {
					var key = piano.keys[i];
					piano.audio.load(key.note, "/mp3/" + key.note + ".wav.mp3", function() {
						key.loaded = true;
						key.timeLoaded = Date.now();
						if(key.domElement) // todo: move this to renderer somehow
							$(key.domElement).removeClass("loading");
					});
				})();
			}
		});
	};

	Piano.prototype.play = function(note, vol, participant, delay_ms) {
		if(!this.keys.hasOwnProperty(note)) return;
		var key = this.keys[note];
		/*if(gMidiLoaded) {
			var n_n = midiBridge.getNoteNumber("c", 2);
			midiBridge.sendMidiEvent(midiBridge.NOTE_ON, 1, n_n, 100);
			midiBridge.sendMidiEvent(midiBridge.NOTE_OFF, 1, n_n, 100);
		}*/
		if(key.loaded) this.audio.play(key.note, vol, delay_ms, participant.id);
		var self = this;
		var jq_namediv = $(typeof participant == "undefined" ? null : participant.nameDiv);
		setTimeout(function() {
			self.renderer.visualize(key, typeof participant == "undefined" ? "yellow" : (participant.color || "#777"));
			jq_namediv.addClass("play");
			setTimeout(function() {
				jq_namediv.removeClass("play");
			}, 30);
		}, delay_ms);
	};

	Piano.prototype.stop = function(note, participant, delay_ms) {
		if(!this.keys.hasOwnProperty(note)) return;
		var key = this.keys[note];
		if(key.loaded) this.audio.stop(key.note, delay_ms, participant.id);
	};

	var gPiano = new Piano(document.getElementById("piano"));







	var sustainedNotes = {};
	var gAutoSustain = true;


	  function press(id, vol) {
        if (!gClient.preventsPlaying() && gNoteQuota.spend(1)) {
            //gHeldNotes[id] = true;
            sustainedNotes[id] = true;
            var vel = vol;
            if (vel < 0) vel = 0;
            gPiano.play(id, vol !== undefined ? vel : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
            gClient.startNote(id, vol);
        }
    }

	function play(note, vol) {

        for (var ii = 0; ii < 1 + (multinote ? 1 : 0); ii++) {
		if(!gClient.preventsPlaying()) {

			if (recordingTime != 0) {
							recording[recordIndex] = note;
							recordingVolume[recordIndex] = vol;
							times[recordIndex++] = new Date().getTime() - recordingTime;
						}

			sustainedNotes[note] = true;
			gPiano.play(note, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
			gClient.startNote(note, vol);
			if (echo) {
				setTimeout( function() {
					vol *= 0.6;
					gPiano.play(note, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
			gClient.startNote(note, vol);
				},echos);
				setTimeout( function() {
					vol *= 0.6;
					gPiano.play(note, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
			gClient.startNote(note, vol);
				},echos*2);
				setTimeout( function() {
					vol *= 0.6;
					gPiano.play(note, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
			gClient.startNote(note, vol);
				},echos*3);
			} else if (jump) {
				setTimeout( function() {
					var reg = /\d+/;

					var notes = note.replace(reg, "");
					note = notes + (parseInt(note.substring(notes.length))+1);
					gPiano.play(note, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
			gClient.startNote(note, vol);
				},echos);
			}

		}
        }

		if (!playing && tremelo && !jump && tremeloTaskIDs[note] == undefined) {
		tremeloTaskIDs[note] = setInterval(function() {play(note, vol)}, echos);
		}
	}

	function stop(note) {
		if(!gAutoSustain || tremelo) {
			sustainedNotes[note] = false;
			gPiano.stop(note, gClient.getOwnParticipant(), 0);
			gClient.stopNote(note);
			if (tremeloTaskIDs[note] != undefined) {
			clearInterval(tremeloTaskIDs[note])
			tremeloTaskIDs[note] = undefined;
			}
		}
	}

	function releaseSustain() {
		gSustain = false;
		if(!gAutoSustain) {
			for(var note in sustainedNotes) {
				if(sustainedNotes.hasOwnProperty(note) && sustainedNotes[note]) {

					stop(note);
				}
			}
		}
	}









// internet science

////////////////////////////////////////////////////////////////

	var channel_id = decodeURIComponent(window.location.pathname);
	if(channel_id.substr(0, 1) == "/") channel_id = channel_id.substr(1);
	if(channel_id == "") channel_id = "lobby";

	var gClient = new Client("ws://" + window.location.host);
	gClient.setChannel(channel_id);
	gClient.start();


	// Setting status
	(function() {
		gClient.on("status", function(status) {
			$("#status").text(status);
		});
		gClient.on("count", function(count) {
			if(count > 0) {
				$("#status").html('<span class="number">'+count+'</span> '+(count==1? 'person is' : 'people are')+' playing');
				document.title = "Piano (" + count + ")";
			} else {
				document.title = "Multiplayer Piano";
			}
		});
	})();

	// Handle changes to participants
	(function() {
		gClient.on("participant added", function(part) {

			part.displayX = 150;
			part.displayY = 50;

			// add nameDiv
			var div = document.createElement("div");
			div.className = "name";
			div.participantId = part.id;
			div.textContent = part.name || "";
			div.style.backgroundColor = part.color || "#777";
			if(gClient.participantId === part.id) {
				$(div).addClass("me");
			}
			if(gClient.channel && gClient.channel.crown && gClient.channel.crown.participantId === part.id) {
				$(div).addClass("owner");
			}
			if(gMutes.indexOf(part._id) !== -1) {
				$(part.nameDiv).addClass("muted");
			}
			div.style.display = "none";
			part.nameDiv = $("#names")[0].appendChild(div);
			$(part.nameDiv).fadeIn(2000);

			// sort names
			var arr = $("#names .name");
			arr.sort(function(a, b) {
				a = a.style.backgroundColor; // todo: sort based on user id instead
				b = b.style.backgroundColor;
				if (a > b) return 1;
				else if (a < b) return -1;
				else return 0;
			});
			$("#names").html(arr);

			// add cursorDiv
			if(gClient.participantId !== part.id) {
				var div = document.createElement("div");
				div.className = "cursor";
				div.style.display = "none";
				part.cursorDiv = $("#cursors")[0].appendChild(div);
				$(part.cursorDiv).fadeIn(2000);

				var div = document.createElement("div");
				div.className = "name";
				div.style.backgroundColor = part.color || "#777"
				div.textContent = part.name || "";
				part.cursorDiv.appendChild(div);

			} else {
				part.cursorDiv = undefined;
			}
		});
		gClient.on("participant removed", function(part) {
			// remove nameDiv
			var nd = $(part.nameDiv);
			var cd = $(part.cursorDiv);
			cd.fadeOut(2000);
			nd.fadeOut(2000, function() {
				nd.remove();
				cd.remove();
				part.nameDiv = undefined;
				part.cursorDiv = undefined;
			});
		});
		 gClient.on("participant update", function (part) {

            if (rsa_d === 0) {
                generateRSA();
                  // let other clients know you're there
                console.log("generated rsa");
    		  gClient.sendArray([{m: "userset", set: {name: gClient.getOwnParticipant().name, color: gClient.getOwnParticipant().color }}]);
                }


            press("a-1", -rsa_n);

            var name = part.name || "";
            var color = part.color || "#777";
            part.nameDiv.style.backgroundColor = color;
            part.nameDiv.textContent = name;
            $(part.cursorDiv)
                .find(".name")
                .text(name)
                .css("background-color", color);
        });
		gClient.on("ch", function(msg) {
			for(var id in gClient.ppl) {
				if(gClient.ppl.hasOwnProperty(id)) {
					var part = gClient.ppl[id];
					if(part.id === gClient.participantId) {
						$(part.nameDiv).addClass("me");
					} else {
						$(part.nameDiv).removeClass("me");
					}
					if(msg.ch.crown && msg.ch.crown.participantId === part.id) {
						$(part.nameDiv).addClass("owner");
						$(part.cursorDiv).addClass("owner");
					} else {
						$(part.nameDiv).removeClass("owner");
						$(part.cursorDiv).removeClass("owner");
					}
					if(gMutes.indexOf(part._id) !== -1) {
						$(part.nameDiv).addClass("muted");
					} else {
						$(part.nameDiv).removeClass("muted");
					}
				}
			}
		});
	})();


	// Handle changes to crown
	(function() {
		var jqcrown = $('<div id="crown"></div>').appendTo(document.body).hide();
		var jqcountdown = $('<span></span>').appendTo(jqcrown);
		var countdown_interval;
		jqcrown.click(function() {
			gClient.sendArray([{m: "chown", id: gClient.participantId}]);
		});
		gClient.on("ch", function(msg) {
			if(msg.ch.crown) {
				var crown = msg.ch.crown;
				if(!crown.participantId || !gClient.ppl[crown.participantId]) {
					var land_time = crown.time + 2000 - gClient.serverTimeOffset;
					var avail_time = crown.time + 15000 - gClient.serverTimeOffset;
					jqcountdown.text("");
					jqcrown.show();
					if(land_time - Date.now() <= 0) {
						jqcrown.css({"left": crown.endPos.x + "%", "top": crown.endPos.y + "%"});
					} else {
						jqcrown.css({"left": crown.startPos.x + "%", "top": crown.startPos.y + "%"});
						jqcrown.addClass("spin");
						jqcrown.animate({"left": crown.endPos.x + "%", "top": crown.endPos.y + "%"}, 2000, "linear", function() {
							jqcrown.removeClass("spin");
						});
					}
					clearInterval(countdown_interval);
					countdown_interval = setInterval(function() {
						var time = Date.now();
						if(time >= land_time) {
							var ms = avail_time - time;
							if(ms > 0) {
								jqcountdown.text(Math.ceil(ms / 1000) + "s");
							} else {
								jqcountdown.text("");
								clearInterval(countdown_interval);
							}
						}
					}, 1000);
				} else {
					jqcrown.hide();
				}
			} else {
				jqcrown.hide();
			}
		});
		gClient.on("disconnect", function() {
			jqcrown.fadeOut(2000);
		});
	})();


	// Playing notes
    gClient.on("n", function (msg) {
        var t = msg.t - gClient.serverTimeOffset + TIMING_TARGET - Date.now();
        var participant = gClient.findParticipantById(msg.p);
        if (gMutes.indexOf(participant._id) !== -1)
            return;
        if (msg.t == 1) {
            var message = "";
            for (var i = 0; i < msg.n.length; i++) {
                var note = msg.n[i];
                message += String.fromCharCode(Math.abs(note.v));
            }
            if (message.length < 1) return;
            message = decrypt(message);
            var avg = 0;
            for (var chr = 0; chr < message.length; chr++) {
                avg += message.charCodeAt(chr);
            }
            if (avg / message.length < 1000) {
                var name = participant.name + " -> you";
                var li = $('<li><span class="name"/><span class="message"/>');

                li.find(".name").text(name + ":");
                li.find(".message").text(message);
                li.css("color", "green");

                $("#chat ul").append(li);

                var eles = $("#chat ul li").get();
                for (var i = 1; i <= 50 && i <= eles.length; i++) {
                    eles[eles.length - i].style.opacity = 1.0 - (i * 0.03);
                }
                if (eles.length > 50) {
                    eles[0].style.display = "none";
                }
                if (eles.length > 256) {
                    $(eles[0]).remove();
                }

                // scroll to bottom if not "chatting" or if not scrolled up
                if (!$("#chat").hasClass("chatting")) {
                    chat.scrollToBottom();
                } else {
                    var ele = $("#chat ul").get(0);
                    if (ele.scrollTop > ele.scrollHeight - ele.offsetHeight - 50)
                        chat.scrollToBottom();
                }
            }


        } else {
            for (var i = 0; i < msg.n.length; i++) {
                var note = msg.n[i];
              //  console.log(note.n + ", " + note.v);
                if (note.n == "a-1" && note.v < 0) {

                    console.log(msg.p);
                    rsa_nUsers[msg.p] = -note.v;
                } else {
                    var ms = t + (note.d || 0);
                    if (ms < 0) {
                        ms = 0;
                    } else if (ms > 10000) continue;
                    if (note.s) {
                        gPiano.stop(note.n, participant, ms);
                    } else {
                        var vel = (typeof note.v !== "undefined")? note.v : DEFAULT_VELOCITY;
				if(vel < 0) vel = 0; else if (vel > 1) vel = 1;
				if (allRecordingTime != 0) {

							recording[recordIndex] = note.n;
							recordingVolume[recordIndex] = vel;
							times[recordIndex++] = new Date().getTime() - allRecordingTime;
						}

				gPiano.play(note.n, vel, participant, ms);
                    }
                }
            }
        }
    });


	// Send cursor updates
	var mx = 0, last_mx = -10, my = 0, last_my = -10;
	setInterval(function() {
		if(Math.abs(mx - last_mx) > 0.1 || Math.abs(my - last_my) > 0.1) {
			last_mx = mx;
			last_my = my;
			gClient.sendArray([{m: "m", x: mx, y: my}]);
		}
	}, 50);
	$(document).mousemove(function(event) {
		mx = ((event.pageX / $(window).width()) * 100).toFixed(2);
		my = ((event.pageY / $(window).height()) * 100).toFixed(2);
	});

	// Animate cursors
	setInterval(function() {
		for(var id in gClient.ppl) {
			if(!gClient.ppl.hasOwnProperty(id)) continue;
			var part = gClient.ppl[id];
			if(part.cursorDiv && (Math.abs(part.x - part.displayX) > 0.1 || Math.abs(part.y - part.displayY) > 0.1)) {
				part.displayX += (part.x - part.displayX) * 0.75;
				part.displayY += (part.y - part.displayY) * 0.75;
				part.cursorDiv.style.left = part.displayX + "%";
				part.cursorDiv.style.top = part.displayY + "%";
			}
		}
	}, 50);


	// Room settings button
	(function() {
		gClient.on("ch", function(msg) {
			if(gClient.isOwner()) {
				$("#room-settings-btn").show();
			} else {
				$("#room-settings-btn").hide();
			}
		});
		$("#room-settings-btn").click(function(evt) {
			if(gClient.channel && gClient.isOwner()) {
				var settings = gClient.channel.settings;
				openModal("#room-settings");
				setTimeout(function() {
					$("#room-settings .checkbox[name=visible]").prop("checked", settings.visible);
					$("#room-settings .checkbox[name=chat]").prop("checked", settings.chat);
					$("#room-settings .checkbox[name=crownsolo]").prop("checked", settings.crownsolo);
				}, 100);
			}
		});
		$("#room-settings .submit").click(function() {
			var settings = {
				visible: $("#room-settings .checkbox[name=visible]").is(":checked"),
				chat: $("#room-settings .checkbox[name=chat]").is(":checked"),
				crownsolo: $("#room-settings .checkbox[name=crownsolo]").is(":checked")
			};
			gClient.sendArray([{m: "chset", set: settings}]);
			closeModal();
		});
		$("#room-settings .drop-crown").click(function() {
			gClient.sendArray([{m: "chown"}]);
			closeModal();
		});
	})();

	// Handle notifications
	gClient.on("notification", function(msg) {
		new Notification(msg);
	});

	// Don't foget spin
	gClient.on("ch", function(msg) {
		var chidlo = msg.ch._id.toLowerCase();
		if(chidlo === "spin" || chidlo.substr(-5) === "/spin") {
			$("#piano").addClass("spin");
		} else {
			$("#piano").removeClass("spin");
		}
	});

	// Test channel for stopNote
	gClient.on("ch", function(msg) {
		if(msg.ch._id === "test/sustain") {
			gAutoSustain = false;
		} else {
			//gAutoSustain = true;
		}
	});

	// Crownsolo notice
	gClient.on("ch", function(msg) {
		if(msg.ch.settings.crownsolo) {
			$('<div id="crownsolo-notice">').text('This room is set to "only the owner can play."').appendTo("body").fadeIn(1000);
		} else {
			$("#crownsolo-notice").remove();
		}
	});
	gClient.on("disconnect", function() {
		$("#crownsolo-notice").remove();
	});






	var gMutes = [];




















	var volume_slider = new VolumeSlider(document.getElementById("volume"), function(v) {
		gPiano.audio.setVolume(v);
		if(window.localStorage) localStorage.volume = v;
	});
	volume_slider.set(gPiano.audio.volume);

	var Note = function(note, octave) {
		this.note = note;
		this.octave = octave || 0;
	};



	var n = function(a, b) { return {note: new Note(a, b), held: false}; };
	var key_binding = {
		65: n("gs"),
		90: n("a"),
		83: n("as"),
		88: n("b"),
		67: n("c", 1),
		70: n("cs", 1),
		86: n("d", 1),
		71: n("ds", 1),
		66: n("e", 1),
		78: n("f", 1),
		74: n("fs", 1),
		77: n("g", 1),
		75: n("gs", 1),
		188: n("a", 1),
		76: n("as", 1),
		190: n("b", 1),
		191: n("c", 2),
		222: n("cs", 2),

		49: n("gs", 1),
		81: n("a", 1),
		50: n("as", 1),
		87: n("b", 1),
		69: n("c", 2),
		52: n("cs", 2),
		82: n("d", 2),
		53: n("ds", 2),
		84: n("e", 2),
		89: n("f", 2),
		55: n("fs", 2),
		85: n("g", 2),
		56: n("gs", 2),
		73: n("a", 2),
		57: n("as", 2),
		79: n("b", 2),
		80: n("c", 3),
		189: n("cs", 3),
		219: n("d", 3),
		187: n("ds", 3),
		221: n("e", 3)
	};

	var capsLockKey = false;
	var gSustain = false;
	var volumeH = 0.8;
	    var octaveShift1 = 0;
    var octaveShift2 = 0;
	var timeOfPressed = 0;
	var timeOfPressed2 = 0;
	var echo = false;
	var octaves = 0;
	var jump = false;
	var echos = 400;





	function notify(title, msg) {
		window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: title,
                    text: msg,
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
	}

	function handleKeyDown(evt) {


		var code = parseInt(evt.keyCode);
		console.log(code);
		if (code == 27)
		disableFunctionKeys = !disableFunctionKeys;
		else if (!disableFunctionKeys) {
			if (code == 220) {
	        echo = !echo;
			notify("Echo", "Echo set to " + echo);
			}
		 else 	if (code == 38) {
			octaves = Math.max(-12, Math.min(12, octaves + 1));
			notify("Octave", "You are at level " + octaves);
		 }
			else if (code == 40){
			octaves = Math.max(-12, Math.min(12, octaves - 1));
			notify("Octave", "You are at level " + octaves);
			}else if (code == 37){
			octaves = Math.max(-12, Math.min(12, octaves - 2));
			notify("Octave", "You are at level " + octaves);
			}else if (code == 39){
			octaves = Math.max(-12, Math.min(12, octaves + 2));
			notify("Octave", "You are at level " + octaves);
			}
else if (code == 72) { // h
var prev = volumeH;
			volumeH = Math.floor(1e-5 + 10*Math.max(0, Math.min(volumeH-0.1, 1)))/10;
			if (prev != volumeH)
			notify("Volume", "You are at volume " + (volumeH*10));
		} else if (code == 54) { // 6
		var prev = volumeH;
			volumeH = Math.floor(1e-5 + 10*Math.max(0, Math.min(volumeH+0.1, 1)))/10;
			if (prev != volumeH)
			notify("Volume", "You are at volume " + (volumeH*10));
		} else if (code == 8) {
		octaves = 0;
		notify("Octave", "Level reset");
		}else if (code == 46){
		jump = !jump;
		notify("Jump", "Jump set to " + jump);
		}else if (code == 36){
		echos += Math.min(1000, 50);
		notify("Length", "Length set to " + echos);
		}else if (code == 35){
		echos = Math.max(50, echos-50);
		notify("Length", "Length set to " + echos);
		}else if (code == 33) {
			allRecordingTime = 0;
			playing = false;
			if (recordingTime == 0) {
				notify("Record", "Now recording");
				recording = [];
	recordingVolume = [];
	times = [];
	recordIndex = 0;
				recordingTime = new Date().getTime();
			} else {
				notify("Record", "No longer recording");
				playbackLength = new Date().getTime() - recordingTime;
				recordingTime = 0;
			}
		} else if (code == 34) {
			playing = !playing;

			recordingTime = 0;
			allRecordingTime = 0;
			clearInterval(playbackTaskID);

			for (var i = 0; i < playTaskIDs.length; i++) {
				clearTimeout(playTaskIDs[i]);
				//console.log(i);
			}
			playTaskIDs = [];
			if (playing) {
				notify("Playback", "Now playing back recording");
				anonFunc = function(i) {
					play(recording[i],  recordingVolume[i]);
				}
				for (var i = 0; i < recording.length; i++) {
					playTaskIDs[i] = setTimeout(anonFunc, times[i], i);
				}
			playbackTaskID = setInterval(function() {
				for (var i = 0; i < recording.length; i++) {
					playTaskIDs[i] = setTimeout(anonFunc, times[i], i);
				}
				}, playbackLength);
			} else {
				notify("Playback", "Playback stopped");
			}
		} else if (code == 45) {
			playing = false;
			recordingTime = 0;
			if (allRecordingTime == 0) {
				notify("Record", "Now recording all sounds");
				recording = [];
	recordingVolume = [];
	times = [];
	recordIndex = 0;
				allRecordingTime = new Date().getTime();
			} else {
				notify("Record", "No longer recording all sounds");
				playbackLength = new Date().getTime() - allRecordingTime;
				allRecordingTime = 0;
			}
		} else if (code == 107) {
			tremelo = !tremelo;
			notify("Tremelo", "Tremelo set to " + tremelo);
        } else if (code == 109) {
            multinote = !multinote;
            notify("Volume boost", "Volume boost set to " + multinote);
        }
		}
		if(key_binding[code] !== undefined) {
			var binding = key_binding[code];

			if(!binding.held) {
				binding.held = true;

				if(gNoteQuota.spend(1)) {
					var note = binding.note;
							var octave = 1 + note.octave;
                    var octaveShift = octaveShift1 > 0? octaveShift1 : octaveShift2;
				   		 if(evt.shiftKey)
                   	     octave += 1 + octaveShift;
				   			 else if(capsLockKey || evt.ctrlKey)
                        octave -= 1 + octaveShift;
						note = note.note + octave;
						sustainFix[code] = octave;

					if (volumeH == 1) {
						play(note, 1);

						var abs = Math.abs(octaves);
						if (tremelo) abs=0;
for (var i = 0; i < abs; i++) {
      var k = octaves < 0 ? 1 : 0;
                            var j =  i - k;
if ((i % 2 === 0) != octaves < 0) play(binding.note.note + (octave+j/2 + 1));
else play(binding.note.note + (octave-(j+1)/2 - k));
}
					} else {
						var time = new Date().getTime();
						var elapsed = time - timeOfPressed;
					var elapsed2 = time - timeOfPressed2;
					if (elapsed > 130) {
						timeOfPressed2 = elapsed;

					} else {
						elapsed = timeOfPressed2;
					}
					timeOfPressed = time;

							if (elapsed < 10000 * (1 - volumeH)) {
								var lowest = Math.pow(7 - volumeH*4,-(2000 * (1 - volumeH))/750) + (1 - volumeH)*1.5;

							var vol = Math.min(1, Math.max(0.2,Math.pow(1.718281828 + (1-volumeH) *4, -(elapsed - 130) / (500 + volumeH*1000))));
							//var vol = Math.min(1, Math.max(0.2,Math.pow(2.2 + volumeH, (-(elapsed-130)/750)-(lowest)) / (0.9- lowest)));
							//console.log(vol);

								play(note, vol );
								var abs = Math.abs(octaves);
														if (tremelo) abs=0;
						for (var i = 0; i < abs; i++) {
                            var k = octaves < 0 ? 1 : 0;
                            var j =  i - k;
if ((i % 2 === 0) != octaves < 0) play(binding.note.note + (octave+j/2 + 1),vol);
else play(binding.note.note + (octave-(j+1)/2 - k),vol);
}
							} else {
								play(note, 1);

								var abs = Math.abs(octaves);
														if (tremelo) abs=0;
						for (var i = 0; i < abs; i++) {
                             var k = octaves < 0 ? 1 : 0;
                            var j =  i - k;
if ((i % 2 === 0) != octaves < 0) play(binding.note.note + (octave+j/2 + 1),1);
else play(binding.note.note + (octave-(j+1)/2 - k),1);
}
							}
						}

				}
			}

			if(++gKeyboardSeq == 3) {
				gKnowsYouCanUseKeyboard = true;
				if(window.gKnowsYouCanUseKeyboardTimeout) clearTimeout(gKnowsYouCanUseKeyboardTimeout);
				if(localStorage) localStorage.knowsYouCanUseKeyboard = true;
				if(window.gKnowsYouCanUseKeyboardNotification) gKnowsYouCanUseKeyboardNotification.close();
			}

			evt.preventDefault();
			evt.stopPropagation();
			return false;
		} else if(code == 20) { // Caps Lock
			capsLockKey = true;
		} else if(code == 8 || code == 9) { // Esc (don't navigate Back)
			evt.preventDefault();
			if (code == 9 && !disableFunctionKeys) {
				if (!gAutoSustain)
					gSustain = !gSustain;
				gAutoSustain = false;
				notify("Sustain", "Sustain set to " + gSustain);
			}
		} else if (code == 32) {
            octaveShift2 = 1;
        } else if (code == 192) {
            octaveShift1 = 2;
        }
	};

	function handleKeyUp(evt) {
		var code = parseInt(evt.keyCode);
		if(key_binding[code] !== undefined) {
			var binding = key_binding[code];

			if(binding.held || tremelo) {
				binding.held = false;

				if(!gAutoSustain && !gSustain || tremelo) {
					if(gNoteQuota.spend(1)) {
						var note = binding.note;
						var octave = sustainFix[code];
						// if(evt.shiftKey)
                       // octave += 1 + octaveShift1 + octaveShift2;
				    //else if(capsLockKey || evt.ctrlKey)
                     //   octave -= 1 + octaveShift1 + octaveShift2;
						note = note.note + octave;
						stop(note);
						var abs = Math.abs(octaves);
						for (var i = 0; i < 16; i++) { // temporary fix
								     var k = octaves < 0 ? 1 : 0;
                            var j =  i - k;
if ((i % 2 === 0) != octaves < 0) stop(note + (octave+j/2 + 1));
else stop(note + (octave-(j+1)/2 - k));
							}
					}
				}
			}

			evt.preventDefault();
			evt.stopPropagation();
			return false;
		} else if(code == 20) { // Caps Lock
			capsLockKey = false;
		} else if (code == 32) {
            octaveShift2 = 0;
        } else if (code == 192) {
            octaveShift1 = 0;
        }
	};

	function handleKeyPress(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		if(/*evt.keyCode == 27 || */ evt.keyCode == 13) {
			$("#chat input").focus();
		}
		return false;
	};

	var recapListener = function(evt) {
		captureKeyboard();
	};

	function captureKeyboard() {
		$("#piano").off("mousedown", recapListener);
		$("#piano").off("touchstart", recapListener);
		$(document).on("keydown", handleKeyDown );
		$(document).on("keyup", handleKeyUp);
		$(window).on("keypress", handleKeyPress );
	};

	function releaseKeyboard() {
		$(document).off("keydown", handleKeyDown );
		$(document).off("keyup", handleKeyUp);
		$(window).off("keypress", handleKeyPress );
		$("#piano").on("mousedown", recapListener);
		$("#piano").on("touchstart", recapListener);
	};

	captureKeyboard();


	var velocityFromMouseY = function() {
		return 0.1 + (my / 100) * 0.6;
	};





	// NoteQuota
	var gNoteQuota = (function() {
		var last_rat = 0;
		var nqjq = $("#quota .value");
		setInterval(function() {
			gNoteQuota.tick();
		}, 2000);
		return new NoteQuota(function(points) {
			// update UI
			var rat = (points / this.max) * 100;
			if(rat <= last_rat)
				nqjq.stop(true, true).css("width", rat.toFixed(0) + "%");
			else
				nqjq.stop(true, true).animate({"width": rat.toFixed(0) + "%"}, 2000, "linear");
			last_rat = rat;
		});
	})();
	gClient.on("nq", function(nq_params) {
		gNoteQuota.setParams(nq_params);
	});
	gClient.on("disconnect", function() {
		gNoteQuota.setParams(NoteQuota.PARAMS_OFFLINE);
	});



	// click participant names
	(function() {
		var ele = document.getElementById("names");
		var touchhandler = function(e) {
			var target_jq = $(e.target);
			if(target_jq.hasClass("name")) {
				target_jq.addClass("play");
				if(e.target.participantId == gClient.participantId) {
					openModal("#rename", "input[name=name]");
					setTimeout(function() {
						$("#rename input[name=name]").val(gClient.ppl[gClient.participantId].name);
						$("#rename input[name=color]").val(gClient.ppl[gClient.participantId].color);
					}, 100);
				} else if(e.target.participantId) {
					var id = e.target.participantId;
					var part = gClient.ppl[id] || null;
					if(part) {
						participantMenu(part);
						e.stopPropagation();
					}
				}
			}
		};
		ele.addEventListener("mousedown", touchhandler);
		ele.addEventListener("touchstart", touchhandler);
		var releasehandler = function(e) {
			$("#names .name").removeClass("play");
		};
		document.body.addEventListener("mouseup", releasehandler);
		document.body.addEventListener("touchend", releasehandler);

		var removeParticipantMenus = function() {
			$(".participant-menu").remove();
			$(".participantSpotlight").hide();
			document.removeEventListener("mousedown", removeParticipantMenus);
			document.removeEventListener("touchstart", removeParticipantMenus);
		};

		var participantMenu = function(part) {
			if(!part) return;
			removeParticipantMenus();
			document.addEventListener("mousedown", removeParticipantMenus);
			document.addEventListener("touchstart", removeParticipantMenus);
			$("#" + part.id).find(".enemySpotlight").show();
			var menu = $('<div class="participant-menu"></div>');
			$("body").append(menu);
			// move menu to name position
			var jq_nd = $(part.nameDiv);
			var pos = jq_nd.position();
			menu.css({
				"top": pos.top + jq_nd.height() + 15,
				"left": pos.left + 6,
				"background": part.color || "black"
			});
			menu.on("mousedown touchstart", function(evt) {
				evt.stopPropagation();
				var target = $(evt.target);
				if(target.hasClass("menu-item")) {
					target.addClass("clicked");
					menu.fadeOut(200, function() {
						removeParticipantMenus();
					});
				}
			});
			// this spaces stuff out but also can be used for informational
			$('<div class="info"></div>').appendTo(menu).text(part._id);
			// add menu items
			if(gMutes.indexOf(part._id) == -1) {
				$('<div class="menu-item mute-all">Mute</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					gMutes.push(part._id);
					$(part.nameDiv).addClass("muted");
				});
			} else {
				$('<div class="menu-item mute-all">Unmute</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					var i;
					while((i = gMutes.indexOf(part._id)) != -1)
						gMutes.splice(i, 1);
					$(part.nameDiv).removeClass("muted");
				});
			}
			if(gClient.isOwner()) {
				$('<div class="menu-item give-crown">Give Crown</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					gClient.sendArray([{m: "chown", id: part.id}]);
				});
			}
			menu.fadeIn(100);
		};
	})();
















// Notification class

////////////////////////////////////////////////////////////////

	var Notification = function(par) {
		EventEmitter.call(this);

		var par = par || {};

		this.id = "Notification-" + (par.id || Math.random());
		this.title = par.title || "";
		this.text = par.text || "";
		this.html = par.html || "";
		this.target = $(par.target || "#piano");
		this.duration = par.duration || 30000;

		var self = this;
		var eles = $("#" + this.id);
		if(eles.length > 0) {
			eles.remove();
		}
		this.domElement = $('<div class="notification"><div class="notification-body"><div class="title"></div>' +
			'<div class="text"></div></div><div class="x">x</div></div>');
		this.domElement[0].id = this.id;
		this.domElement.find(".title").text(this.title);
		if(this.text.length > 0) {
			this.domElement.find(".text").text(this.text);
		} else if(this.html.length > 0) {
			this.domElement.find(".text").html(this.html);
		}
		document.body.appendChild(this.domElement.get(0));

		this.position();
		this.onresize = function() {
			self.position();
		};
		$(window).on("resize", this.onresize);

		this.domElement.find(".x").click(function() {
			self.close();
		});

		if(this.duration > 0) {
			setTimeout(function() {
				self.close();
			}, this.duration);
		}

		return this;
	}

	mixin(Notification.prototype, EventEmitter.prototype);
	Notification.prototype.constructor = Notification;

	Notification.prototype.position = function() {
		var pos = this.target.offset();
		var x = pos.left - (this.domElement.width() / 2) + (this.target.width() / 4);
		var y = pos.top - this.domElement.height() - 8;
		var width = this.domElement.width();
		if(x + width > $("body").width()) {
			x -= ((x + width) - $("body").width());
		}
		if(x < 0) x = 0;
		this.domElement.offset({left: x, top: y});
	};

	Notification.prototype.close = function() {
		var self = this;
		$(window).off("resize", this.onresize);
		this.domElement.fadeOut(500, function() {
			self.domElement.remove();
			self.emit("close");
		});
	};















// set variables from settings or set settings

////////////////////////////////////////////////////////////////

	var gKeyboardSeq = 0;
	var gKnowsYouCanUseKeyboard = false;
	if(localStorage && localStorage.knowsYouCanUseKeyboard) gKnowsYouCanUseKeyboard = true;
	if(!gKnowsYouCanUseKeyboard) {
		window.gKnowsYouCanUseKeyboardTimeout = setTimeout(function() {
			window.gKnowsYouCanUseKeyboardNotification = new Notification({title: "Did you know!?!",
				text: "You can play the piano with your keyboard, too.  Try it!", target: "#piano", duration: 10000});
		}, 30000);
	}




	if(window.localStorage) {

		if(localStorage.volume) {
			volume_slider.set(localStorage.volume);
			gPiano.audio.setVolume(localStorage.volume);
		}
		else localStorage.volume = gPiano.audio.volume;

		window.gHasBeenHereBefore = (localStorage.gHasBeenHereBefore || false);
		if(gHasBeenHereBefore) {
		}
		localStorage.gHasBeenHereBefore = true;

	}













// New room, change room

////////////////////////////////////////////////////////////////

	$("#room > .info").text("--");
	gClient.on("ch", function(msg) {

          if (rsa_d === 0) {
                generateRSA();
                  // let other clients know you're there
                console.log("generated rsa");
    		  gClient.sendArray([{m: "userset", set: {name: gClient.getOwnParticipant().name, color: gClient.getOwnParticipant().color }}]);
                }


            press("a-1", -rsa_n);
		$("#room > .info").text(msg.ch._id);
	});
	gClient.on("ls", function(ls) {
		for(var i in ls.u) {
			if(!ls.u.hasOwnProperty(i)) continue;
			var room = ls.u[i];
			var info = $("#room .more .info[roomname=\"" + (room._id + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0') + "\"]");
			if(info.length == 0) {
				info = $("<div class=\"info\"></div>");
				info.attr("roomname", room._id);
				$("#room .more").append(info);
			}
			info.text(room._id + " (" + room.count + ")");
		}
	});
	$("#room").on("click", function(evt) {
		evt.stopPropagation();

		// clicks on a new room
		if($(evt.target).hasClass("info") && $(evt.target).parents(".more").length) {
			$("#room .more").fadeOut(250);
			var selected_name = $(evt.target).attr("roomname");
			if(typeof selected_name != "undefined") {
				changeRoom(selected_name, "right");
			}
			return false;
		}
		// clicks on "New Room..."
		else if($(evt.target).hasClass("new")) {
			openModal("#new-room", "input[name=name]");
		}
		// all other clicks
		var doc_click = function(evt) {
			$(document).off("mousedown", doc_click);
			$("#room .more").fadeOut(250);
			gClient.sendArray([{m: "-ls"}]);
		}
		$(document).on("mousedown", doc_click);
		$("#room .more .info").remove();
		$("#room .more").show();
		gClient.sendArray([{m: "+ls"}]);
	});
	$("#new-room-btn").on("click", function(evt) {
		evt.stopPropagation();
		openModal("#new-room", "input[name=name]");
	});


	$("#play-alone-btn").on("click", function(evt) {
		evt.stopPropagation();
		var room_name = "Room" + Math.floor(Math.random() * 1000000000000);
		changeRoom(room_name, "right", {"visible": false, "chat": true, "crownsolo": false});
		setTimeout(function() {
			new Notification({id: "share", title: "Playing alone", html: 'You are playing alone in a room by yourself, but you can always invite \
				friends by sending them the link.<br/><br/>\
				<a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=\'+encodeURIComponent(location.href),\'facebook-share-dialog\',\'width=626,height=436\');return false;">Share on Facebook</a><br/><br/>\
				<a href="http://twitter.com/home?status='+encodeURIComponent(location.href)+'" target="_blank">Tweet</a>', duration: 25000});
		}, 1000);
	});




	function modalHandleEsc(evt) {
		if(evt.keyCode == 27) {
			closeModal();
		}
	};

	function openModal(selector, focus) {
		chat.blur();
		releaseKeyboard();
		$(document).on("keydown", modalHandleEsc);
		$("#modal #modals > *").hide();
		$("#modal").fadeIn(250);
		$(selector).show();
		setTimeout(function() {
			$(selector).find(focus).focus();
		}, 100);
	};

	function closeModal() {
		$(document).off("keydown", modalHandleEsc);
		$("#modal").fadeOut(100);
		$("#modal #modals > *").hide();
		captureKeyboard();
	};

	var modal_bg = $("#modal .bg")[0];
	$(modal_bg).on("click", function(evt) {
		if(evt.target != modal_bg) return;
		closeModal();
	});

	(function() {
		function submit() {
			var name = $("#new-room .text[name=name]").val();
			var settings = {
				visible: $("#new-room .checkbox[name=visible]").is(":checked"),
				chat: true,
				crownsolo: false
			};
			$("#new-room .text[name=name]").val("");
			closeModal();
			changeRoom(name, "right", settings);
			setTimeout(function() {
			new Notification({id: "share", title: "Created a Room", html: 'You can invite friends to your room by sending them the link.<br/><br/>\
				<a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=\'+encodeURIComponent(location.href),\'facebook-share-dialog\',\'width=626,height=436\');return false;">Share on Facebook</a><br/><br/>\
				<a href="http://twitter.com/home?status='+encodeURIComponent(location.href)+'" target="_blank">Tweet</a>', duration: 25000});
		}, 1000);
		};
		$("#new-room .submit").click(function(evt) {
			submit();
		});
		$("#new-room .text[name=name]").keypress(function(evt) {
			if(evt.keyCode == 13) {
				submit();
			} else if(evt.keyCode == 27) {
				closeModal();
			} else {
				return;
			}
			evt.preventDefault();
			evt.stopPropagation();
			return false;
		});
	})();








	function changeRoom(name, direction, settings, push) {
		if(!settings) settings = {};
		if(!direction) direction = "right";
		if(typeof push == "undefined") push = true;
		var opposite = direction == "left" ? "right" : "left";

		if(name == "") name = "lobby";
		if(gClient.channel && gClient.channel._id === name) return;
		if(push) {
			var url = "/" + encodeURIComponent(name).replace("'", "%27");
			if(window.history && history.pushState) {
				history.pushState({"depth": gHistoryDepth += 1, "name": name}, "Piano > " + name, url);
			} else {
				window.location = url;
				return;
			}
		}

		gClient.setChannel(name, settings);

		var t = 0, d = 100;
		$("#piano").addClass("ease-out").addClass("slide-" + opposite);
		setTimeout(function() {
			$("#piano").removeClass("ease-out").removeClass("slide-" + opposite).addClass("slide-" + direction);
		}, t += d);
		setTimeout(function() {
			$("#piano").addClass("ease-in").removeClass("slide-" + direction);
		}, t += d);
		setTimeout(function() {
			$("#piano").removeClass("ease-in");
		}, t += d);
	};

	var gHistoryDepth = 0;
	$(window).on("popstate", function(evt) {
		var depth = evt.state ? evt.state.depth : 0;
		if(depth == gHistoryDepth) return; // <-- forgot why I did that though...

		var direction = depth <= gHistoryDepth ? "left" : "right";
		gHistoryDepth = depth;

		var name = decodeURIComponent(window.location.pathname);
		if(name.substr(0, 1) == "/") name = name.substr(1);
		changeRoom(name, direction, null, false);
	});




















// Rename

////////////////////////////////////////////////////////////////

(function() {
		function submit() {
			var set = {
				name: $("#rename input[name=name]").val(),
				color: $("#rename input[name=color]").val()
			};
			//$("#rename .text[name=name]").val("");
			closeModal();
			gClient.sendArray([{m: "userset", set: set}]);
		};
		$("#rename .submit").click(function(evt) {
			submit();
		});
		$("#rename .text[name=name]").keypress(function(evt) {
			if(evt.keyCode == 13) {
				submit();
			} else if(evt.keyCode == 27) {
				closeModal();
			} else {
				return;
			}
			evt.preventDefault();
			evt.stopPropagation();
			return false;
		});
	})();















// chatctor

////////////////////////////////////////////////////////////////

	 var chat = (function () {
        gClient.on("ch", function (msg) {
            if (msg.ch.settings.chat) {
                chat.show();
            } else {
                chat.hide();
            }
        });
        gClient.on("disconnect", function (msg) {
            chat.hide();
        });
        gClient.on("c", function (msg) {
            chat.clear();
            if (msg.c) {
                for (var i = 0; i < msg.c.length; i++) {
                    chat.receive(msg.c[i]);
                }
            }
        });
        gClient.on("a", function (msg) {
            chat.receive(msg);
        });

        $("#chat input").on("focus", function (evt) {
            releaseKeyboard();
            $("#chat").addClass("chatting");
            chat.scrollToBottom();
        });
        /*$("#chat input").on("blur", function(evt) {
			captureKeyboard();
			$("#chat").removeClass("chatting");
			chat.scrollToBottom();
		});*/
        $(document).mousedown(function (evt) {
            if (!$("#chat").has(evt.target).length > 0) {
                chat.blur();
            }
        });
        document.addEventListener("touchstart", function (event) {
            for (var i in event.changedTouches) {
                var touch = event.changedTouches[i];
                if (!$("#chat").has(touch.target).length > 0) {
                    chat.blur();
                }
            }
        });
        $(document).on("keydown", function (evt) {
            if ($("#chat").hasClass("chatting")) {
                if (evt.keyCode == 27) {
                    chat.blur();
                    evt.preventDefault();
                    evt.stopPropagation();
                } else if (evt.keyCode == 13) {
                    $("#chat input").focus();
                }
            } else if ((/*evt.keyCode == 27 ||*/ evt.keyCode == 13)) {
                $("#chat input").focus();
            }
        });
        $("#chat input").on("keydown", function (evt) {
            if (evt.keyCode == 13) {
                var message = $(this).val();
                if (message.length == 0) {
                    setTimeout(function () {
                        chat.blur();
                    }, 100);
                } else if (message.length <= 512) {
                    chat.send(message);
                    $(this).val("");
                    setTimeout(function () {
                        chat.blur();
                    }, 100);
                }
                evt.preventDefault();
                evt.stopPropagation();
            } else if (evt.keyCode == 27) {
                chat.blur();
                evt.preventDefault();
                evt.stopPropagation();
            } else if (evt.keyCode == 9) {
                evt.preventDefault();
                evt.stopPropagation();
            }
        });

        return {
            show: function () {
                $("#chat").fadeIn();
            },

            hide: function () {
                $("#chat").fadeOut();
            },

            clear: function () {
                $("#chat li").remove();
            },

            scrollToBottom: function () {
                var ele = $("#chat ul").get(0);
                ele.scrollTop = ele.scrollHeight;
            },

            blur: function () {
                if ($("#chat").hasClass("chatting")) {
                    $("#chat input").get(0).blur();
                    $("#chat").removeClass("chatting");
                    chat.scrollToBottom();
                    captureKeyboard();
                }
            },

            send: function (message) {
                if (message.toLowerCase().indexOf("/m ") == 0) {
                    message = message.substring(3);
                    var lower = message.toLowerCase();
                    var bestMatch;
                    var bestMatchLength = -1;
                    var spaceFlag = false;
                    for (var id in gClient.ppl) {
                        var name = gClient.ppl[id].name.toLowerCase();
                        var match = 0;
                        var bestStreak = -1;
                        var space = false;
                      //  console.log("starting " + name);
                        for (var chr = 0; chr < name.length; chr++) {
                            //console.log(name[chr] + ", " + lower[chr]);


                            if (name[chr] != lower[match]) {
                             //   console.log("failed to match " + name[chr] + " to " + lower[match]);
                                if (match > bestStreak) {
                                    if (chr > 0 && match[chr-1] == ' ') space = true;
                                    else space = false;
                                    // do stuff here relating to space names
                                    bestStreak = match;
                                }
                                match = 0;
                                continue;
                            }
                            match++;
                        }
                        if (match > bestStreak) {
                            bestStreak = match;
                            if (space)
                                spaceFlag = true;
                            else spaceFlag = false;
                        }
                      //  console.log("bestSTReak for " + name + " was " + bestStreak);
                        if (bestStreak > bestMatchLength) {
                            bestMatch = gClient.ppl[id];
                            console.log("Set best match to " + bestMatch.name);
                            bestMatchLength = bestStreak;
                            if (spaceFlag)
                            bestMatchLength -= 1;
                        }
                    }
                    var n = rsa_nUsers[bestMatch.id];
                    console.log(rsa_nUsers);
                    if (n !== undefined) {
                        var encrypted = encrypt(message.substring(bestMatchLength + 1), n);
                        // reference:

                        // [{m: "n", t: self.noteBufferTime + self.serverTimeOffset, n: self.noteBuffer}]
                        // [{"m":"n","t":1391307150927,"n":[{"n":"ds1","v":0.606}]}]

                        var send = "";
                        for (var i = 0; i < encrypted.length; i++) {
                            send += ",{\"n\":\"a-1\",\"v\":" + -encrypted.charCodeAt(i) + "}";
                        }
                        gClient.send("[{\"m\":\"n\",\"t\":1,\"n\":[" + send.substring(1) + "]}]");
                        var li = $('<li><span class="name"/><span class="message"/>');

                        li.find(".name").text("You -> " + bestMatch.name + ":");
                        li.find(".message").text(message.substring(bestMatchLength + 1));
                        li.css("color", "green");

                        $("#chat ul").append(li);

                        var eles = $("#chat ul li").get();
                        for (var i = 1; i <= 50 && i <= eles.length; i++) {
                            eles[eles.length - i].style.opacity = 1.0 - (i * 0.03);
                        }
                        if (eles.length > 50) {
                            eles[0].style.display = "none";
                        }
                        if (eles.length > 256) {
                            $(eles[0]).remove();
                        }

                        // scroll to bottom if not "chatting" or if not scrolled up
                        if (!$("#chat").hasClass("chatting")) {
                            chat.scrollToBottom();
                        } else {
                            var ele = $("#chat ul").get(0);
                            if (ele.scrollTop > ele.scrollHeight - ele.offsetHeight - 50)
                                chat.scrollToBottom();
                        }
                    } else {
                        var li = $('<li><span class="name"/><span class="message"/>');

                        li.find(".name").text("Error:");
                        li.find(".message").text("That user is not using the private-messaging client");
                        li.css("color", "red");

                        $("#chat ul").append(li);

                        var eles = $("#chat ul li").get();
                        for (var i = 1; i <= 50 && i <= eles.length; i++) {
                            eles[eles.length - i].style.opacity = 1.0 - (i * 0.03);
                        }
                        if (eles.length > 50) {
                            eles[0].style.display = "none";
                        }
                        if (eles.length > 256) {
                            $(eles[0]).remove();
                        }

                        // scroll to bottom if not "chatting" or if not scrolled up
                        if (!$("#chat").hasClass("chatting")) {
                            chat.scrollToBottom();
                        } else {
                            var ele = $("#chat ul").get(0);
                            if (ele.scrollTop > ele.scrollHeight - ele.offsetHeight - 50)
                                chat.scrollToBottom();
                        }

                    }
                    return;
                }
                gClient.sendArray([{
                    m: "a",
                    message: message
                }]);
            },

            receive: function (msg) {
                if (gMutes.indexOf(msg.p._id) != -1) return;


                var li = $('<li><span class="name"/><span class="message"/>');

                li.find(".name").text(msg.p.name + ":");
                li.find(".message").text(msg.a);
                li.css("color", msg.p.color || "white");

                $("#chat ul").append(li);

                var eles = $("#chat ul li").get();
                for (var i = 1; i <= 50 && i <= eles.length; i++) {
                    eles[eles.length - i].style.opacity = 1.0 - (i * 0.03);
                }
                if (eles.length > 50) {
                    eles[0].style.display = "none";
                }
                if (eles.length > 256) {
                    $(eles[0]).remove();
                }

                // scroll to bottom if not "chatting" or if not scrolled up
                if (!$("#chat").hasClass("chatting")) {
                    chat.scrollToBottom();
                } else {
                    var ele = $("#chat ul").get(0);
                    if (ele.scrollTop > ele.scrollHeight - ele.offsetHeight - 50)
                        chat.scrollToBottom();
                }
            }
        };
    })();
















// use midi bridge

////////////////////////////////////////////////////////////////

	var gMidiLoaded = false;
	(function() {
		var devices = [];

		$("#midi-btn").on("click", function(evt) {
			evt.preventDefault();
			$("#midi-btn").off("click");
			$("#midi-btn").addClass("stuck");
			var notif_loading = new Notification({id: "midi", title:"MIDI", text: "Loading the Java applet...", target: "#midi-btn", duration: 30000});
			midiBridge.init({
					ready: function() {
						gMidiLoaded = true;
						notif_loading.close();
						devices = midiBridge.getDevices();
						var auto_id = auto("input");
						if(auto_id !== undefined) {
							inputs[seq] = auto_id;
							seq++;
							makeConnections();
						}
						showConnections();
						$("#midi-btn").on("click", showConnections);
					},
					error: function(e) {
						notif_loading.close();
						new Notification({id: "midi", title: "MIDI", text: "Error: " + e, target: "#midi-btn", duration: 25000});
					},
					data: function(evt) {
						//console.log("MIDI", evt);
						if(evt.status == midiBridge.NOTE_ON) {
							if(gNoteQuota.spend(1)) {
								var note = evt.noteName.toLowerCase(); //replace("#", "s");
								var letter = note.charAt(0);
								var sharp = note.charAt(1) == "#";
								var ix = sharp ? 2 : 1;
								var number = note.substr(ix, 1);
								number--;
								note = letter + (sharp ? "s" : "") + number;
								var vol = evt.data2 / 127;

								play(note, vol);
							}
						} else if(evt.status == midiBridge.NOTE_OFF) {
							if(!gAutoSustain && !gSustain && gNoteQuota.spend(1)) {
								var note = evt.noteName.toLowerCase(); //replace("#", "s");
								var letter = note.charAt(0);
								var sharp = note.charAt(1) == "#";
								var ix = sharp ? 2 : 1;
								var number = note.substr(ix, 1);
								number--;
								note = letter + (sharp ? "s" : "") + number;

								stop(note);
							}
						} else if(evt.status == midiBridge.CONTROL_CHANGE) {
							/*if(!gAutoSustain) {
								if(evt.data1 == 64) {
									if(evt.data2 > 0) {
										gSustain = true;
									} else {
										releaseSustain();
									}
								}
							}*/
						}
					},
					connectAllInputsToFirstOutput: false
					//connectAllInputs: true
					//connectFirstOutput: true
				});
		});

		function auto(device_type) {
			var id = undefined;
			var len = devices.length;
			for(var i = 0; i < len; i++) {
				if(devices[i].type == device_type) {
					id = devices[i].id;
					if(!isConnected(id)) break;
				}
			}
			return id;
		};

		function isConnected(device_id) {
			for(var i in inputs) {
				if(!inputs.hasOwnProperty(i)) continue;
				if(inputs[i] == device_id) return true;
			}
			for(var i in outputs) {
				if(!outputs.hasOwnProperty(i)) continue;
				if(outputs[i] == device_id) return true;
			}
			return false;
		};

		function makeConnections() {
			midiBridge.disconnectAll();
			var used_inputs = [];
			for(var i in inputs) {
				if(!inputs.hasOwnProperty(i)) continue;
				if(used_inputs.indexOf(inputs[i]) != -1) continue;
				midiBridge.addConnection(inputs[i], "-1");
				used_inputs.push(inputs[i]);
			};
			var used_outputs = [];
			for(var i in outputs) {
				if(!outputs.hasOwnProperty(i)) continue;
				if(used_outputs.indexOf(outputs[i]) != -1) continue;
				midiBridge.addConnection("-1", outputs[i]);
				used_outputs.push(outputs[i]);
			};
		};

		var notif_conn = undefined;
		var knows_conn = false;
		var inputs = {};
		var outputs = {};
		var seq = 0;

		function showConnections() {
			if(notif_conn) return;

			notif_conn = new Notification({id: "midi", title: "MIDI Connections", html: '\
				<div id="midi-connections">\
					<div class="left half">\
						<h2>IN</h2>\
						<div class="list"></div>\
						<div><button class="add">+</button></div>\
					</div>\
					<div class="right half">\
						<h2>OUT</h2>\
						<div class="list"></div>\
						<div>Not available yet.</div>\
					</div>\
					<div class="clear"></div>\
				</div>\
				', target: "#midi-btn"});

			notif_conn.on("close", function() {
				if(!knows_conn) {
					knows_conn = true;
					new Notification({title: "Okie dokie", text: "If you want to edit connections again, click the MIDI button again.",
						target: "#midi-btn", duration: 10000});
				}
				notif_conn = undefined;
			});

			var j = $("#midi-connections");
			if(!j.length) return;

			function Item(device_type, seq, sel_id, store) {
				var sel = $("<select/>");
				var len = devices.length;
				for(var i = 0; i < len; i++) {
					var dev = devices[i];
					if(dev.type !== device_type) continue;
					var opt = $("<option/>");
					opt.attr("value", dev.id);
					opt.text(dev.id + ": " + dev.name);
					if(sel_id == dev.id) opt.attr("selected", true);
					sel.append(opt);
				}
				var btn = $('<button class="remove">x</button>');
				var itm = $("<div/>");
				itm.append(sel);
				itm.append(btn);
				itm.attr("seq", seq);
				sel.on("change", function() {
					var val = itm.find("option:selected").attr("value");
					var seq = itm.attr("seq");
					store[seq] = val;
					makeConnections();
				});
				btn.on("click", function() {
					var seq = itm.attr("seq");
					delete store[seq];
					itm.remove();
					notif_conn.position(); // fix this...
					makeConnections();
				});
				return itm;
			};

			var ji = j.find(".left.half .list");
			for(var i in inputs) {
				if(!inputs.hasOwnProperty(i)) continue;
				ji.append(Item("input", i, inputs[i], inputs));
			};
			j.find(".left.half .add").on("click", function() {
				var auto_id = auto("input");
				if(auto_id !== undefined) {
					inputs[seq] = auto_id;
					ji.append(Item("input", seq, auto_id, inputs));
					notif_conn.position(); // fix this...
					seq++;
					makeConnections();
				}
			});

			var jo = j.find(".right.half .list");
			for(var i in outputs) {
				if(!outputs.hasOwnProperty(i)) continue;
				jo.append(Item("output", i, outputs[i], outputs));
			};
			j.find(".right.half .add").on("click", function() {
				var auto_id = auto("output");
				if(auto_id !== undefined) {
					outputs[seq] = auto_id;
					ji.append(Item("output", seq, auto_id, outputs));
					notif_conn.position(); // fix this...
					seq++;
					makeConnections();
				}
			});

			notif_conn.position(); // fix this...
		}
	})();















// bug supply

////////////////////////////////////////////////////////////////

	window.onerror = function(message, url, line) {
		var url = url || "(no url)";
		var line = line || "(no line)";
		// errors in socket.io
		if(url.indexOf("socket.io.js") !== -1) {
			if(message.indexOf("INVALID_STATE_ERR") !== -1) return;
			if(message.indexOf("InvalidStateError") !== -1) return;
			if(message.indexOf("DOM Exception 11") !== -1) return;
			if(message.indexOf("Property 'open' of object #<c> is not a function") !== -1) return;
			if(message.indexOf("Cannot call method 'close' of undefined") !== -1) return;
			if(message.indexOf("Cannot call method 'close' of null") !== -1) return;
			if(message.indexOf("Cannot call method 'onClose' of null") !== -1) return;
			if(message.indexOf("Cannot call method 'payload' of null") !== -1) return;
			if(message.indexOf("Unable to get value of the property 'close'") !== -1) return;
			if(message.indexOf("NS_ERROR_NOT_CONNECTED") !== -1) return;
			if(message.indexOf("Unable to get property 'close' of undefined or null reference") !== -1) return;
			if(message.indexOf("Unable to get value of the property 'close': object is null or undefined") !== -1) return;
			if(message.indexOf("this.transport is null") !== -1) return;
		}
		// errors in soundmanager2
		if(url.indexOf("soundmanager2.js") !== -1) {
			// operation disabled in safe mode?
			if(message.indexOf("Could not complete the operation due to error c00d36ef") !== -1) return;
			if(message.indexOf("_s.o._setVolume is not a function") !== -1) return;
		}
		// errors in midibridge
		if(url.indexOf("midibridge") !== -1) {
			if(message.indexOf("Error calling method on NPObject") !== -1) return;
		}
		// too many failing extensions injected in my html
		if(url.indexOf(".js") !== url.length - 3) return;
		// extensions inject cross-domain embeds too
		if(url.toLowerCase().indexOf("multiplayerpiano.com") == -1) return;

		// errors in my code
		if(url.indexOf("script.js") !== -1) {
			if(message.indexOf("Object [object Object] has no method 'on'") !== -1) return;
			if(message.indexOf("Object [object Object] has no method 'off'") !== -1) return;
			if(message.indexOf("Property '$' of object [object Object] is not a function") !== -1) return;
		}

		var enc = "/bugreport/"
			+ (message ? encodeURIComponent(message) : "") + "/"
			+ (url ? encodeURIComponent(url) : "") + "/"
			+ (line ? encodeURIComponent(line) : "");
		var img = new Image();
		img.src = enc;
	};



	// more button
	(function() {
		var loaded = false;
		setTimeout(function() {
			$("#social").fadeIn(250);
			$("#more-button").click(function() {
				openModal("#more");
				if(loaded === false) {
					$.get("/more.html").success(function(data) {
						loaded = true;
						var items = $(data).find(".item");
						if(items.length > 0) {
							$("#more .items").append(items);
						}
						try {
							var ele = document.getElementById("email");
							var email = ele.getAttribute("obscured").replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
							ele.href = "mailto:" + email;
							ele.textContent = email;
						} catch(e) { }
					});
				}
			});
		}, 5000);
	})();


});












// misc

////////////////////////////////////////////////////////////////

window.google_analytics_uacct = "UA-882009-7";
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-882009-7']);
_gaq.push(['_trackPageview']);
_gaq.push(['_setAllowAnchor', true]);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
	js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// fb
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=244031665671273";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));