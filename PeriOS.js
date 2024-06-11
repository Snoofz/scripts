$(function() {

	var test_mode = (window.location.hash && window.location.hash.match(/^(?:#.+)*#test(?:#.+)*$/i));

	var gSeeOwnCursor = (window.location.hash && window.location.hash.match(/^(?:#.+)*#seeowncursor(?:#.+)*$/i));

	var gMidiOutTest = (window.location.hash && window.location.hash.match(/^(?:#.+)*#midiout(?:#.+)*$/i)); // todo this is no longer needed

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







	var gSoundPath = "/mp3/";
	var gSoundExt = ".wav.mp3";

	// Yoshify.
	if ((window.location.hash && window.location.hash.match(/^(?:#.+)*#Piano_Great_and_Soft(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/216104606/GreatAndSoftPiano/";
		gSoundExt = ".mp3";
	}

	if ((window.location.hash && window.location.hash.match(/^(?:#.+)*#Piano_Loud_and_Proud(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/216104606/LoudAndProudPiano/";
		gSoundExt = ".mp3";
	}

	// electrashave
	if((window.location.hash && window.location.hash.match(/^(?:#.+)*#NewPiano(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/258840068/CustomSounds/NewPiano/";
		gSoundExt = ".mp3";
	}

	// Ethan Walsh
	if((window.location.hash && window.location.hash.match(/^(?:#.+)*#HDPiano(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/258840068/CustomSounds/HDPiano/";
		gSoundExt = ".wav";
	}
	if((window.location.hash && window.location.hash.match(/^(?:#.+)*#Harpischord(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/24213061/Harpischord/";
		gSoundExt = ".wav";
	}
	if((window.location.hash && window.location.hash.match(/^(?:#.+)*#ClearPiano(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/24213061/ClearPiano/";
		gSoundExt = ".wav";
	}

	// Alexander Holmfjeld
	if((window.location.hash && window.location.hash.match(/^(?:#.+)*#Klaver(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/70730519/Klaver/";
		gSoundExt = ".wav";
	}






























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
				"pt": "pessoas estao jogando",
				"es": "personas están jugando",
				"ru": "??????? ??????",
				"fr": "personnes jouent",
				"ja": "???????",
				"de": "Leute spielen",
				"zh": "???",
				"nl": "mensen spelen",
				"pl": "osób grają",
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
				"ja": "?—??",
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
				"fr": "Visible (ouvert a tous)",
				"ja": "?????(?????????)",
				"de": "Sichtbar (offen für alle)",
				"zh": "??(??????)",
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
				"pl": "Włącz czat",
				"hu": "a csevegést"
			},
			"Play Alone": {
				"pt": "Jogar Sozinho",
				"es": "Jugar Solo",
				"ru": "?????? ? ????????",
				"fr": "Jouez Seul",
				"ja": "??????",
				"de": "Alleine Spielen",
				"zh": "????",
				"nl": "Speel Alleen",
				"pl": "Zagraj sam",
				"hu": "Játssz egyedül"
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


	AudioEngineWeb = function() {
		this.threshold = 10;
		this.worker = new Worker("/workerTimer.js"); //must be same origin
		var self = this;
		this.worker.onmessage = function(event)
			{
				if(event.data.args)
				if(event.data.args.action==0)
				{
					self.actualPlay(event.data.args.id, event.data.args.vol, event.data.args.time, event.data.args.part_id);
				}
				else
				{
					self.actualStop(event.data.args.id, event.data.args.time, event.data.args.part_id);
				}
			}
	};

	AudioEngineWeb.prototype = new AudioEngine();

	AudioEngineWeb.prototype.init = function(cb) {
		AudioEngine.prototype.init.call(this);

		this.context = new AudioContext();

		this.masterGain = this.context.createGain();
		this.masterGain.connect(this.context.destination);
		this.masterGain.gain.value = this.volume;

		this.limiterNode = this.context.createDynamicsCompressor();
		this.limiterNode.threshold.value = -10;
		this.limiterNode.knee.value = 0;
		this.limiterNode.ratio.value = 20;
		this.limiterNode.attack.value = 0;
		this.limiterNode.release.value = 0.1;
		this.limiterNode.connect(this.masterGain);

		// for synth mix
		this.pianoGain = this.context.createGain();
		this.pianoGain.gain.value = 0.5;
		this.pianoGain.connect(this.limiterNode);
		this.synthGain = this.context.createGain();
		this.synthGain.gain.value = 0.5;
		this.synthGain.connect(this.limiterNode);

		this.playings = {};

		if(cb) setTimeout(cb, 0);
		return this;
	};

	AudioEngineWeb.prototype.load = function(id, url, cb) {
		var audio = this;
		var req = new XMLHttpRequest();
if (url.indexOf("multiplayerpiano")!==-1)
		{req.open("GET", url);}else{var rewrite="http://www.multiplayerpiano.com/"+url.slice(url.indexOf("mp3"));req.open("GET", rewrite)}
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
				new Notification({id: "audio-download-error", title: "Problem", text: "For some reason, an audio download failed with a status of " + req.status + ". ",
					target: "#piano", duration: 10000});
			}
		});
		req.send();
	};

	AudioEngineWeb.prototype.actualPlay = function(id, vol, time, part_id) { //the old play(), but with time insted of delay_ms.
		if(!this.sounds.hasOwnProperty(id)) return;
		var source = this.context.createBufferSource();
		source.buffer = this.sounds[id];
		var gain = this.context.createGain();
		gain.gain.value = vol;
		source.connect(gain);
		gain.connect(this.pianoGain);
		source.start(time);
		// Patch from ste-art remedies stuttering under heavy load
		if(this.playings[id]) {
			var playing = this.playings[id];
			playing.gain.gain.setValueAtTime(playing.gain.gain.value, time);
			playing.gain.gain.linearRampToValueAtTime(0.0, time + 0.2);
			playing.source.stop(time + 0.21);
			if(enableSynth && playing.voice) {
				playing.voice.stop(time);
			}
		}
		this.playings[id] = {"source": source, "gain": gain, "part_id": part_id};

		if(enableSynth) {
			this.playings[id].voice = new synthVoice(id, time);
		}
	}

	AudioEngineWeb.prototype.play = function(id, vol, delay_ms, part_id)
	{
		if(!this.sounds.hasOwnProperty(id)) return;
		var time = this.context.currentTime + (delay_ms / 1000); //calculate time on note receive.
		var delay = delay_ms - this.threshold;
		if(delay<=0) this.actualPlay(id, vol, time, part_id);
		else {
			this.worker.postMessage({delay:delay,args:{action:0/*play*/,id:id, vol:vol, time:time, part_id:part_id}}); // but start scheduling right before play.
		}
	}

	AudioEngineWeb.prototype.actualStop = function(id, time, part_id) {
		if(this.playings.hasOwnProperty(id) && this.playings[id] && this.playings[id].part_id === part_id) {
			var gain = this.playings[id].gain.gain;
			gain.setValueAtTime(gain.value, time);
			gain.linearRampToValueAtTime(gain.value * 0.1, time + 0.16);
			gain.linearRampToValueAtTime(0.0, time + 0.4);
			this.playings[id].source.stop(time + 0.41);


			if(this.playings[id].voice) {
				this.playings[id].voice.stop(time);
			}

			this.playings[id] = null;
		}
	};

	AudioEngineWeb.prototype.stop = function(id, delay_ms, part_id) {
			var time = this.context.currentTime + (delay_ms / 1000);
			var delay = delay_ms - this.threshold;
			if(delay<=0) this.actualStop(id, time, part_id);
			else {
				this.worker.postMessage({delay:delay,args:{action:1/*stop*/, id:id, time:time, part_id:part_id}});
			}
	};

	AudioEngineWeb.prototype.setVolume = function(vol) {
		AudioEngine.prototype.setVolume.call(this, vol);
		this.masterGain.gain.value = this.volume;
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
				var key = piano.keys[ele.note];
				press(key.note);
				mouse_down = true;
				event.stopPropagation();
			};
			//event.preventDefault();
		});
		piano.rootElement.addEventListener("touchstart", function(event) {
			for(var i in event.changedTouches) {
				var ele = event.changedTouches[i].target;
				if($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
					var key = piano.keys[ele.note];
					press(key.note);
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
				var key = piano.keys[ele.note];
				press(key.note);
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
			if(hit) {
				press(hit.key.note, hit.v);
				last_key = hit.key;
			}
		});
		piano.rootElement.addEventListener("touchstart", function(event) {
			mouse_down = true;
			//event.stopPropagation();
			event.preventDefault();
			for(var i in event.changedTouches) {
				var pos = CanvasRenderer.translateMouseEvent(event.changedTouches[i]);
				var hit = self.getHit(pos.x, pos.y);
				if(hit) {
					press(hit.key.note, hit.v);
					last_key = hit.key;
				}
			}
		}, false);
		$(window).mouseup(function(event) {
			if(last_key) {
				release(last_key.note);
			}
			mouse_down = false;
			last_key = null;
		});
		/*$(piano.rootElement).mousemove(function(event) {
			if(!mouse_down) return;
			var pos = CanvasRenderer.translateMouseEvent(event);
			var hit = self.getHit(pos.x, pos.y);
			if(hit && hit.key != last_key) {
				press(hit.key.note, hit.v);
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
		var canvas = document.createElement("canvas");
		return !!(canvas.getContext && canvas.getContext("2d"));
	};

	CanvasRenderer.translateMouseEvent = function(evt) {
		var element = evt.target;
		var offx = 0;
		var offy = 0;
		do {
			if(!element) break; // wtf, wtf?
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
		this.octave = octave;
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

		window.addEventListener("resize", function() {
			piano.renderer.resize();
		});


		window.AudioContext = window.AudioContext || window.webkitAudioContext || undefined;
		var audio_engine = AudioEngineWeb;

		this.audio = new audio_engine().init(function() {
			for(var i in piano.keys) {
				if(!piano.keys.hasOwnProperty(i)) continue;
				(function() {
					var key = piano.keys[i];
					piano.audio.load(key.note, gSoundPath + key.note + gSoundExt, function() {
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
		if(key.loaded) this.audio.play(key.note, vol, delay_ms, participant.id);
		if(typeof gMidiOutTest === "function") gMidiOutTest(key.note, vol * 100, delay_ms);
		var self = this;
		var jq_namediv = $(typeof participant == "undefined" ? null : participant.nameDiv);
		if(jq_namediv) {
			setTimeout(function() {
				self.renderer.visualize(key, typeof participant == "undefined" ? "yellow" : (participant.color || "#777"));
				jq_namediv.addClass("play");
				setTimeout(function() {
					jq_namediv.removeClass("play");
				}, 30);
			}, delay_ms);
		}
	};

	Piano.prototype.stop = function(note, participant, delay_ms) {
		if(!this.keys.hasOwnProperty(note)) return;
		var key = this.keys[note];
		if(key.loaded) this.audio.stop(key.note, delay_ms, participant.id);
		if(typeof gMidiOutTest === "function") gMidiOutTest(key.note, 0, delay_ms);
	};

	var gPiano = new Piano(document.getElementById("piano"));




	var gClient = function(uri) {
	EventEmitter.call(this);
	this.uri = uri;
	this.ws = undefined;
	this.serverTimeOffset = 0;
	this.user = undefined;
	this.participantId = undefined;
	this.channel = undefined;
	this.ppl = {};
	this.connectionTime = undefined;
	this.connectionAttempts = 0;
	this.desiredChannelId = undefined;
	this.desiredChannelSettings = undefined;
	this.pingInterval = undefined;
	this.canConnect = false;
	this.noteBuffer = [];
	this.noteBufferTime = 0;
	this.noteFlushInterval = undefined;

	this.bindEventListeners();

	this.emit("status", "(Offline mode)");
}


	var gAutoSustain = true; //!(window.location.hash && window.location.hash.match(/^(?:#.+)*#sustain(?:#.+)*$/));
	var gSustain = false;

	var gHeldNotes = {};
	var gSustainedNotes = {};


	function press(id, vol) {for(var y = 0;y<v;y++){setTimeout(function(){
		if(!gClient.preventsPlaying()) {
			gHeldNotes[id] = true;
			gSustainedNotes[id] = true;
			gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
			gClient.startNote(id, vol);
			if(octaveMode == 1)
			{
				gHeldNotes[keys[keys.indexOf(id)-12]] = true;
				gSustainedNotes[keys[keys.indexOf(id)-12]] = true;
				gPiano.play(keys[keys.indexOf(id)-12], vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
				gClient.startNote(keys[keys.indexOf(id)-12], vol);
				gHeldNotes[keys[keys.indexOf(id)+12]] = true;
				gSustainedNotes[keys[keys.indexOf(id)+12]] = true;
				gPiano.play(keys[keys.indexOf(id)+12], vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
				gClient.startNote(keys[keys.indexOf(id)+12], vol);
			}
		}
	},y*d)};
	}

	function release(id) {
		if(gHeldNotes[id]) {
			gHeldNotes[id] = false;
			if((gAutoSustain || gSustain) && !enableSynth) {
				gSustainedNotes[id] = true;
			} else {
				if(gNoteQuota.spend(1)) {
					gPiano.stop(id, gClient.getOwnParticipant(), 0);
					gClient.stopNote(id);
					gSustainedNotes[id] = false;
				}
			}
		}
	}

	function pressSustain() {
		gSustain = true;
	}

	function releaseSustain() {
		gSustain = false;
		if(!gAutoSustain) {
			for(var id in gSustainedNotes) {
				if(gSustainedNotes.hasOwnProperty(id) && gSustainedNotes[id] && !gHeldNotes[id]) {
					gSustainedNotes[id] = false;
					if(gNoteQuota.spend(1)) {
						gPiano.stop(id, gClient.getOwnParticipant(), 0);
						gClient.stopNote(id);
					}
				}
			}
		}
	}









// internet science

////////////////////////////////////////////////////////////////

	var channel_id = decodeURIComponent(window.location.pathname);
	if(channel_id.substr(0, 1) == "/") channel_id = channel_id.substr(1);
	if(channel_id == "") channel_id = "lobby";

	var wssport = window.location.hostname == "www.multiplayerpiano.com" ? 443 : 8080;
	var gClient = new Client("ws://" + window.location.hostname + ":" + wssport);
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
			if(gPianoMutes.indexOf(part._id) !== -1) {
				$(part.nameDiv).addClass("muted-notes");
			}
			if(gChatMutes.indexOf(part._id) !== -1) {
				$(part.nameDiv).addClass("muted-chat");
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
			if(gClient.participantId !== part.id || gSeeOwnCursor) {
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
		gClient.on("participant update", function(part) {
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
					if(gPianoMutes.indexOf(part._id) !== -1) {
						$(part.nameDiv).addClass("muted-notes");
					} else {
						$(part.nameDiv).removeClass("muted-notes");
					}
					if(gChatMutes.indexOf(part._id) !== -1) {
						$(part.nameDiv).addClass("muted-chat");
					} else {
						$(part.nameDiv).removeClass("muted-chat");
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
	gClient.on("n", function(msg) {
		var t = msg.t - gClient.serverTimeOffset + TIMING_TARGET - Date.now();
		var participant = gClient.findParticipantById(msg.p);
		if(gPianoMutes.indexOf(participant._id) !== -1)
			return;
		for(var i = 0; i < msg.n.length; i++) {
			var note = msg.n[i];
			var ms = t + (note.d || 0);
			if(ms < 0) {
				ms = 0;
			}
			else if(ms > 10000) continue;
			if(note.s) {
				gPiano.stop(note.n, participant, ms);
			} else {
				var vel = (typeof note.v !== "undefined")? parseFloat(note.v) : DEFAULT_VELOCITY;
				if(vel < 0) vel = 0; else if (vel > 1) vel = 1;
				gPiano.play(note.n, vel, participant, ms);
				if(enableSynth) {
					gPiano.stop(note.n, participant, ms + 1000);
				}
			}
		}
	});

	// Send cursor updates
	var mx = 0, last_mx = -10, my = 0, last_my = -10;
	setInterval(function() {
		if((Math.abs(mx - last_mx) > 0.1 || Math.abs(my - last_my) > 0.1) && cursorUpdate==1) {
			last_mx = mx;
			last_my = my;
			gClient.sendArray([{m: "m", x: mx, y: my}]);
			var part = gClient.getOwnParticipant();
			if(part) {
				part.x = mx;
				part.y = my;
			}
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
					$("#room-settings input[name=color]").val(settings.color);
				}, 100);
			}
		});
		$("#room-settings .submit").click(function() {
			var settings = {
				visible: $("#room-settings .checkbox[name=visible]").is(":checked"),
				chat: $("#room-settings .checkbox[name=chat]").is(":checked"),
				crownsolo: $("#room-settings .checkbox[name=crownsolo]").is(":checked"),
				color: $("#room-settings input[name=color]").val()
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

	/*function eb() {
		if(gClient.channel && gClient.channel._id.toLowerCase() === "test/fishing") {
			ebsprite.start(gClient);
		} else {
			ebsprite.stop();
		}
	}
	if(ebsprite) {
		gClient.on("ch", eb);
		eb();
	}*/

	// Crownsolo notice
	gClient.on("ch", function(msg) {
		if(msg.ch.settings.crownsolo) {
			if($("#crownsolo-notice").length == 0) {
				$('<div id="crownsolo-notice">').text('This room is set to "only the owner can play."').appendTo("body").fadeIn(1000);
			}
		} else {
			$("#crownsolo-notice").remove();
		}
	});
	gClient.on("disconnect", function() {
		$("#crownsolo-notice").remove();
	});


	// Background color
	(function() {
		var old_color1 = new Color("#ecfafd");
		var old_color2 = new Color("#ecfafd");
		function setColor(hex) {
			var color1 = new Color(hex);
			var color2 = new Color(hex);
			color2.add(-0x40, -0x40, -0x40);

			var bottom = document.getElementById("bottom");

			var duration = 500;
			var step = 0;
			var steps = 30;
			var step_ms = duration / steps;
			var difference = new Color(color1.r, color1.g, color1.b);
			difference.r -= old_color1.r;
			difference.g -= old_color1.g;
			difference.b -= old_color1.b;
			var inc = new Color(difference.r / steps, difference.g / steps, difference.b / steps);
			var iv;
			iv = setInterval(function() {
				old_color1.add(inc.r, inc.g, inc.b);
				old_color2.add(inc.r, inc.g, inc.b);
				document.body.style.background = "radial-gradient(ellipse at center, "+old_color1.toHexa()+" 0%,"+old_color2.toHexa()+" 100%)";
				bottom.style.background = old_color2.toHexa();
				if(++step >= steps) {
					clearInterval(iv);
					old_color1 = color1;
					old_color2 = color2;
					document.body.style.background = "radial-gradient(ellipse at center, "+color1.toHexa()+" 0%,"+color2.toHexa()+" 100%)";
					bottom.style.background = color2.toHexa();
				}
			}, step_ms);
		}

		setColor("#ecfafd");

		gClient.on("ch", function(ch) {
			if(ch.ch.settings) {
				if(ch.ch.settings.color) {
					setColor(ch.ch.settings.color);
				} else {
					setColor("#ecfafd");
				}
			}
		});
	})();






	var gPianoMutes = [];

	var gChatMutes = [];



















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
		221: n("e", 3),
		220: n("f",3),
	};

	capsLockKey = false;

	transpose_octave = 0;transpose_up = 0;transpose_down = 0;keys_down = "65 90 83 88 67 70 86 71 66 78 74 77 75 188 76 190 191 222".split(" ");octaveMode = 0;

	function handleKeyDown(evt) {
		//console.log(evt);
		var code = parseInt(evt.keyCode);
		if(key_binding[code] !== undefined) {
			var binding = key_binding[code];
			if(!binding.held) {
				binding.held = true;

				var note = binding.note;
				var octave = 1 + note.octave + transpose_octave;
				if(keys_down.indexOf(code.toString())!==-1)
				{octave+=transpose_down}else
				{octave+=transpose_up};
				if(evt.shiftKey) ++octave;
				else if(capsLockKey || evt.ctrlKey) --octave;
				note = note.note + octave;
				var vol = velocityFromMouseY();
				press(note, vol);
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
			evt.preventDefault();
		} else if(code === 0x20) { // Space Bar
			pressSustain();
			evt.preventDefault();
		} else if((code === 38 || code === 39) && transpose_octave < 3) {
			++transpose_octave;
		} else if((code === 40 || code === 37) && transpose_octave > -2) {
			--transpose_octave;
		} else if(code == 9) { // Tab (don't tab away from the piano)
			evt.preventDefault();
		} else if(code == 8) { // Backspace (don't navigate Back)
			gAutoSustain = !gAutoSustain;
			evt.preventDefault();
		}
	};

	function handleKeyUp(evt) {
		var code = parseInt(evt.keyCode);
		if(key_binding[code] !== undefined) {
			var binding = key_binding[code];
			if(binding.held) {
				binding.held = false;

				var note = binding.note;
				var octave = 1 + note.octave + transpose_octave;
				if(evt.shiftKey) ++octave;
				else if(capsLockKey || evt.ctrlKey) --octave;
				note = note.note + octave;
				release(note);
			}

			evt.preventDefault();
			evt.stopPropagation();
			return false;
		} else if(code == 20) { // Caps Lock
			capsLockKey = false;
			evt.preventDefault();
		} else if(code === 0x20) { // Space Bar
			releaseSustain();
			evt.preventDefault();
		}
	};

	function handleKeyPress(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		if(evt.keyCode == 27 || evt.keyCode == 13) {
			//$("#chat input").focus();
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
			if(gPianoMutes.indexOf(part._id) == -1) {
				$('<div class="menu-item">Mute Notes</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					gPianoMutes.push(part._id);
					$(part.nameDiv).addClass("muted-notes");
				});
			} else {
				$('<div class="menu-item">Unmute Notes</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					var i;
					while((i = gPianoMutes.indexOf(part._id)) != -1)
						gPianoMutes.splice(i, 1);
					$(part.nameDiv).removeClass("muted-notes");
				});
			}
			if(gChatMutes.indexOf(part._id) == -1) {
				$('<div class="menu-item">Mute Chat</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					gChatMutes.push(part._id);
					$(part.nameDiv).addClass("muted-chat");
				});
			} else {
				$('<div class="menu-item">Unmute Chat</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					var i;
					while((i = gChatMutes.indexOf(part._id)) != -1)
						gChatMutes.splice(i, 1);
					$(part.nameDiv).removeClass("muted-chat");
				});
			}
			if(!(gPianoMutes.indexOf(part._id) >= 0) || !(gChatMutes.indexOf(part._id) >= 0)) {
				$('<div class="menu-item">Mute Completely</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					gPianoMutes.push(part._id);
					gChatMutes.push(part._id);
					$(part.nameDiv).addClass("muted-notes");
					$(part.nameDiv).addClass("muted-chat");
				});
			}
			if((gPianoMutes.indexOf(part._id) >= 0) || (gChatMutes.indexOf(part._id) >= 0)) {
				$('<div class="menu-item">Unmute Completely</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					var i;
					while((i = gPianoMutes.indexOf(part._id)) != -1)
						gPianoMutes.splice(i, 1);
					while((i = gChatMutes.indexOf(part._id)) != -1)
						gChatMutes.splice(i, 1);
					$(part.nameDiv).removeClass("muted-notes");
					$(part.nameDiv).removeClass("muted-chat");
				});
			}
			if(gClient.isOwner()) {
				$('<div class="menu-item give-crown">Give Crown</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					gClient.sendArray([{m: "chown", id: part.id}]);
				});
				$('<div class="menu-item kickban">Kickban</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					var minutes = prompt("How many minutes? (0-60)", "30");
					if(minutes === null) return;
					minutes = parseFloat(minutes) || 0;
					var ms = minutes * 60 * 1000;
					gClient.sendArray([{m: "kickban", _id: part._id, ms: ms}]);
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
		this["class"] = par["class"] || "classic";

		var self = this;
		var eles = $("#" + this.id);
		if(eles.length > 0) {
			eles.remove();
		}
		this.domElement = $('<div class="notification"><div class="notification-body"><div class="title"></div>' +
			'<div class="text"></div></div><div class="x">x</div></div>');
		this.domElement[0].id = this.id;
		this.domElement.addClass(this["class"]);
		this.domElement.find(".title").text(this.title);
		if(this.text.length > 0) {
			this.domElement.find(".text").text(this.text);
		} else if(this.html instanceof HTMLElement) {
			this.domElement.find(".text")[0].appendChild(this.html);
		} else if(this.html.length > 0) {
			this.domElement.find(".text").html(this.html);
		}
		document.body.appendChild(this.domElement.get(0));

		this.position();
		this.onresize = function() {
			self.position();
		};
		window.addEventListener("resize", this.onresize);

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
		window.removeEventListener("resize",  this.onresize);
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
		var channel = msg.ch;
		var info = $("#room > .info");
		info.text(channel._id);
		if(channel.settings.lobby) info.addClass("lobby");
		else info.removeClass("lobby");
		if(!channel.settings.chat) info.addClass("no-chat");
		else info.removeClass("no-chat");
		if(channel.settings.crownsolo) info.addClass("crownsolo");
		else info.removeClass("crownsolo");
		if(!channel.settings.visible) info.addClass("not-visible");
		else info.removeClass("not-visible");
	});
	gClient.on("ls", function(ls) {
		for(var i in ls.u) {
			if(!ls.u.hasOwnProperty(i)) continue;
			var room = ls.u[i];
			var info = $("#room .info[roomname=\"" + (room._id + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0') + "\"]");
			if(info.length == 0) {
				info = $("<div class=\"info\"></div>");
				info.attr("roomname", room._id);
				$("#room .more").append(info);
			}
			info.text(room._id + " (" + room.count + ")");
			if(room.settings.lobby) info.addClass("lobby");
			else info.removeClass("lobby");
			if(!room.settings.chat) info.addClass("no-chat");
			else info.removeClass("no-chat");
			if(room.settings.crownsolo) info.addClass("crownsolo");
			else info.removeClass("crownsolo");
			if(!room.settings.visible) info.addClass("not-visible");
			else info.removeClass("not-visible");
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
			if($(evt.target).is("#room .more")) return;
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



	var gModal;

	function modalHandleEsc(evt) {
		if(evt.keyCode == 27) {
			closeModal();
			evt.preventDefault();
			evt.stopPropagation();
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
		gModal = selector;
	};

	function closeModal() {
		$(document).off("keydown", modalHandleEsc);
		$("#modal").fadeOut(100);
		$("#modal #modals > *").hide();
		captureKeyboard();
		gModal = null;
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

	var chat = (function() {
		gClient.on("ch", function(msg) {
			if(msg.ch.settings.chat) {
				chat.show();
			} else {
				chat.hide();
			}
		});
		gClient.on("disconnect", function(msg) {
			chat.hide();
		});
		gClient.on("c", function(msg) {
			chat.clear();
			if(msg.c) {
				for(var i = 0; i < msg.c.length; i++) {
					chat.receive(msg.c[i]);
				}
			}
		});
		gClient.on("a", function(msg) {
			chat.receive(msg);
		});

		$("#chat input").on("focus", function(evt) {
			releaseKeyboard();
			$("#chat").addClass("chatting");
			chat.scrollToBottom();
		});
		/*$("#chat input").on("blur", function(evt) {
			captureKeyboard();
			$("#chat").removeClass("chatting");
			chat.scrollToBottom();
		});*/
		$(document).mousedown(function(evt) {
			if(!$("#chat").has(evt.target).length > 0) {
				chat.blur();
			}
		});
		document.addEventListener("touchstart", function(event) {
			for(var i in event.changedTouches) {
				var touch = event.changedTouches[i];
				if(!$("#chat").has(touch.target).length > 0) {
					chat.blur();
				}
			}
		});
		$(document).on("keydown", function(evt) {
			if($("#chat").hasClass("chatting")) {
				if(evt.keyCode == 27) {
					chat.blur();
					evt.preventDefault();
					evt.stopPropagation();
				} else if(evt.keyCode == 13) {
					$("#chat input").focus();
				}
			} else if(!gModal && (evt.keyCode == 27 || evt.keyCode == 13)) {
				$("#chat input").focus();
			}
		});
		$("#chat input").on("keydown", function(evt) {
			if(evt.keyCode == 13) {
				var message = $(this).val();
				if(message.length == 0) {
					setTimeout(function() {
						chat.blur();
					}, 100);
				} else if(message.length <= 512) {
					chat.send(message);
					$(this).val("");
					setTimeout(function() {
						chat.blur();
					}, 100);
				}
				evt.preventDefault();
				evt.stopPropagation();
			} else if(evt.keyCode == 27) {
				chat.blur();
				evt.preventDefault();
				evt.stopPropagation();
			} else if(evt.keyCode == 9) {
				evt.preventDefault();
				evt.stopPropagation();
			}
		});

		return {
			show: function() {
				$("#chat").fadeIn();
			},

			hide: function() {
				$("#chat").fadeOut();
			},

			clear: function() {
				$("#chat li").remove();
			},

			scrollToBottom: function() {
				var ele = $("#chat ul").get(0);
				ele.scrollTop = ele.scrollHeight;
			},

			blur: function() {
				if($("#chat").hasClass("chatting")) {
					$("#chat input").get(0).blur();
					$("#chat").removeClass("chatting");
					chat.scrollToBottom();
					captureKeyboard();
				}
			},

			send: function(message) {
				gClient.sendArray([{m:"a", message: message}]);
			},

			receive: function(msg) {
				if(gChatMutes.indexOf(msg.p._id) != -1) return;

				var li = $('<li><span class="name"/><span class="message"/>');

				li.find(".name").text(msg.p.name + ":");
				li.find(".message").text(msg.a);
				li.css("color", msg.p.color || "white");

				$("#chat ul").append(li);

				var eles = $("#chat ul li").get();
				for(var i = 1; i <= 50 && i <= eles.length; i++) {
					eles[eles.length - i].style.opacity = 1.0 - (i * 0.03);
				}
				if(eles.length > 50) {
					eles[0].style.display = "none";
				}
				if(eles.length > 256) {
					$(eles[0]).remove();
				}

				// scroll to bottom if not "chatting" or if not scrolled up
				if(!$("#chat").hasClass("chatting")) {
					chat.scrollToBottom();
				} else {
					var ele = $("#chat ul").get(0);
					if(ele.scrollTop > ele.scrollHeight - ele.offsetHeight - 50)
						chat.scrollToBottom();
				}
			}
		};
	})();















// MIDI

////////////////////////////////////////////////////////////////

	var MIDI_TRANSPOSE = -12;
	var MIDI_KEY_NAMES = ["a-1", "as-1", "b-1"];
	var bare_notes = "c cs d ds e f fs g gs a as b".split(" ");
	for(var oct = 0; oct < 7; oct++) {
		for(var i in bare_notes) {
			MIDI_KEY_NAMES.push(bare_notes[i] + oct);
		}
	}
	MIDI_KEY_NAMES.push("c7");

	(function() {

		if (navigator.requestMIDIAccess) {
			navigator.requestMIDIAccess().then(
				function(midi) {
					console.log(midi);
					function midimessagehandler(evt) {
						if(!evt.target.enabled) return;
						//console.log(evt);
						var channel = evt.data[0] & 0xf;
						var cmd = evt.data[0] >> 4;
						var note_number = evt.data[1];
						var vel = evt.data[2];
						//console.log(channel, cmd, note_number, vel);
						if(cmd == 8 || (cmd == 9 && vel == 0)) {
							// NOTE_OFF
							release(MIDI_KEY_NAMES[note_number - 9 + MIDI_TRANSPOSE]);
						} else if(cmd == 9) {
							// NOTE_ON
							press(MIDI_KEY_NAMES[note_number - 9 + MIDI_TRANSPOSE], vel / 100);
						} else if(cmd == 11) {
							// CONTROL_CHANGE
							if(!gAutoSustain) {
								if(note_number == 64) {
									if(vel > 0) {
										pressSustain();
									} else {
										releaseSustain();
									}
								}
							}
						}
					}

					function plug() {
						if(midi.inputs.size > 0) {
							var inputs = midi.inputs.values();
							for(var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
								var input = input_it.value;
								//input.removeEventListener("midimessage", midimessagehandler);
								//input.addEventListener("midimessage", midimessagehandler);
								input.onmidimessage = midimessagehandler;
								if(input.enabled !== false) {
									input.enabled = true;
								}
								console.log("input", input);
							}
						}
						if(midi.outputs.size > 0) {
							var outputs = midi.outputs.values();
							for(var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
								var output = output_it.value;
								//output.enabled = false; // edit: don't touch
								console.log("output", output);
							}
							gMidiOutTest = function(note_name, vel, delay_ms) {
								var note_number = MIDI_KEY_NAMES.indexOf(note_name);
								if(note_number == -1) return;
								note_number = note_number + 9 - MIDI_TRANSPOSE;

								var outputs = midi.outputs.values();
								for(var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
									var output = output_it.value;
									if(output.enabled) {
										output.send([0x90, note_number, vel], window.performance.now() + delay_ms);
									}
								}
							}
						}
						showConnections(false);
					}

					midi.addEventListener("statechange", function(evt) {
						if(evt instanceof MIDIConnectionEvent) {
							plug();
						}
					});

					plug();


					var connectionsNotification;

					function showConnections(sticky) {
						//if(document.getElementById("Notification-MIDI-Connections"))
							//sticky = 1; // todo: instead,
						var inputs_ul = document.createElement("ul");
						if(midi.inputs.size > 0) {
							var inputs = midi.inputs.values();
							for(var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
								var input = input_it.value;
								var li = document.createElement("li");
								li.connectionId = input.id;
								li.classList.add("connection");
								if(input.enabled) li.classList.add("enabled");
								li.textContent = input.name;
								li.addEventListener("click", function(evt) {
									var inputs = midi.inputs.values();
									for(var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
										var input = input_it.value;
										if(input.id === evt.target.connectionId) {
											input.enabled = !input.enabled;
											evt.target.classList.toggle("enabled");
											console.log("click", input);
											return;
										}
									}
								});
								inputs_ul.appendChild(li);
							}
						} else {
							inputs_ul.textContent = "(none)";
						}
						var outputs_ul = document.createElement("ul");
						if(midi.outputs.size > 0) {
							var outputs = midi.outputs.values();
							for(var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
								var output = output_it.value;
								var li = document.createElement("li");
								li.connectionId = output.id;
								li.classList.add("connection");
								if(output.enabled) li.classList.add("enabled");
								li.textContent = output.name;
								li.addEventListener("click", function(evt) {
									var outputs = midi.outputs.values();
									for(var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
										var output = output_it.value;
										if(output.id === evt.target.connectionId) {
											output.enabled = !output.enabled;
											evt.target.classList.toggle("enabled");
											console.log("click", output);
											return;
										}
									}
								});
								outputs_ul.appendChild(li);
							}
						} else {
							outputs_ul.textContent = "(none)";
						}
						var div = document.createElement("div");
						var h1 = document.createElement("h1");
						h1.textContent = "Inputs";
						div.appendChild(h1);
						div.appendChild(inputs_ul);
						h1 = document.createElement("h1");
						h1.textContent = "Outputs";
						div.appendChild(h1);
						div.appendChild(outputs_ul);
						connectionsNotification = new Notification({"id":"MIDI-Connections", "title":"MIDI Connections","duration":sticky?"-1":"4500","html":div,"target":"#midi-btn"});
					}

					document.getElementById("midi-btn").addEventListener("click", function(evt) {
						if(!document.getElementById("Notification-MIDI-Connections"))
							showConnections(true);
						else {
							connectionsNotification.close();
						}
					});
				},
				function(err){
					console.log(err);
				} );
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









	// API
	window.MPP = {
		press: press,
		release: release,
		piano: gPiano,
		client: gClient,
		chat: chat
	};










	// record mp3
	(function() {
		var button = document.querySelector("#record-btn");
		var audio = MPP.piano.audio;
		var context = audio.context;
		var encoder_sample_rate = 44100;
		var encoder_kbps = 128;
		var encoder = null;
		var scriptProcessorNode = context.createScriptProcessor(4096, 2, 2);
		var recording = false;
		var recording_start_time = 0;
		var mp3_buffer = [];
		button.addEventListener("click", function(evt) {
			if(!recording) {
				// start recording
				mp3_buffer = [];
				encoder = new lamejs.Mp3Encoder(2, encoder_sample_rate, encoder_kbps);
				scriptProcessorNode.onaudioprocess = onAudioProcess;
				audio.masterGain.connect(scriptProcessorNode);
				scriptProcessorNode.connect(context.destination);
				recording_start_time = Date.now();
				recording = true;
				button.textContent = "Stop Recording";
				button.classList.add("stuck");
				new Notification({"id": "mp3", "title": "Recording MP3...", "html": "It's recording now.  This could make things slow, maybe.  Maybe give it a moment to settle before playing.<br><br>This feature is experimental.<br>Send complaints to <a href=\"mailto:multiplayerpiano.com@gmail.com\">multiplayerpiano.com@gmail.com</a>.", "duration": 10000});
			} else {
				// stop recording
				var mp3buf = encoder.flush();
				mp3_buffer.push(mp3buf);
				var blob = new Blob(mp3_buffer, {type: "audio/mp3"});
				var url = URL.createObjectURL(blob);
				scriptProcessorNode.onaudioprocess = null;
				audio.masterGain.disconnect(scriptProcessorNode);
				scriptProcessorNode.disconnect(context.destination);
				recording = false;
				button.textContent = "Record MP3";
				button.classList.remove("stuck");
				new Notification({"id": "mp3", "title": "MP3 recording finished", "html": "<a href=\""+url+"\" target=\"blank\">And here it is!</a> (open or save as)<br><br>This feature is experimental.<br>Send complaints to <a href=\"mailto:multiplayerpiano.com@gmail.com\">multiplayerpiano.com@gmail.com</a>.", "duration": 0});
			}
		});
		function onAudioProcess(evt) {
			var inputL = evt.inputBuffer.getChannelData(0);
			var inputR = evt.inputBuffer.getChannelData(1);
			var mp3buf = encoder.encodeBuffer(convert16(inputL), convert16(inputR));
			mp3_buffer.push(mp3buf);
		}
		function convert16(samples) {
			var len = samples.length;
			var result = new Int16Array(len);
			for(var i = 0; i < len; i++) {
				result[i] = 0x8000 * samples[i];
			}
			return(result);
		}
	})();







	// synth
	var enableSynth = false;
	var audio = gPiano.audio;
	var context = gPiano.audio.context;
	var synth_gain = context.createGain();
	synth_gain.gain.value = 0.05;
	synth_gain.connect(audio.synthGain);

	var osc_types = ["sine", "square", "sawtooth", "triangle"];
	var osc_type_index = 1;

	var osc1_type = "square";
	var osc1_attack = 0;
	var osc1_decay = 0.2;
	var osc1_sustain = 0.5;
	var osc1_release = 2.0;

	function synthVoice(note_name, time) {
		var note_number = MIDI_KEY_NAMES.indexOf(note_name);
		note_number = note_number + 9 - MIDI_TRANSPOSE;
		var freq = Math.pow(2, (note_number - 69) / 12) * 440.0;
		this.osc = context.createOscillator();
		this.osc.type = osc1_type;
		this.osc.frequency.value = freq;
		this.gain = context.createGain();
		this.gain.gain.value = 0;
		this.osc.connect(this.gain);
		this.gain.connect(synth_gain);
		this.osc.start(time);
		this.gain.gain.setValueAtTime(0, time);
		this.gain.gain.linearRampToValueAtTime(1, time + osc1_attack);
		this.gain.gain.linearRampToValueAtTime(osc1_sustain, time + osc1_attack + osc1_decay);
	}

	synthVoice.prototype.stop = function(time) {
		//this.gain.gain.setValueAtTime(osc1_sustain, time);
		this.gain.gain.linearRampToValueAtTime(0, time + osc1_release);
		this.osc.stop(time + osc1_release);
	};

	(function() {
		var button = document.getElementById("synth-btn");
		var notification;

		button.addEventListener("click", function() {
			if(notification) {
				notification.close();
			} else {
				showSynth();
			}
		});

		function showSynth() {

			var html = document.createElement("div");

			// on/off button
			(function() {
				var button = document.createElement("input");
				mixin(button, {type: "button", value: "ON/OFF", className: enableSynth ? "switched-on" : "switched-off"});
				button.addEventListener("click", function(evt) {
					enableSynth = !enableSynth;
					button.className = enableSynth ? "switched-on" : "switched-off";
					if(!enableSynth) {
						// stop all
						for(var i in audio.playings) {
							if(!audio.playings.hasOwnProperty(i)) continue;
							var playing = audio.playings[i];
							if(playing && playing.voice) {
								playing.voice.osc.stop();
								playing.voice = undefined;
							}
						}
					}
				});
				html.appendChild(button);
			})();

			// mix
			var knob = document.createElement("canvas");
			mixin(knob, {width: 32, height: 32, className: "knob"});
			html.appendChild(knob);
			knob = new Knob(knob, 0, 100, 0.1, 50, "mix", "%");
			knob.on("change", function(k) {
				var mix = k.value / 100;
				audio.pianoGain.gain.value = 1 - mix;
				audio.synthGain.gain.value = mix;
			});
			knob.emit("change", knob);

			// osc1 type
			(function() {
				osc1_type = osc_types[osc_type_index];
				var button = document.createElement("input");
				mixin(button, {type: "button", value: osc_types[osc_type_index]});
				button.addEventListener("click", function(evt) {
					if(++osc_type_index >= osc_types.length) osc_type_index = 0;
					osc1_type = osc_types[osc_type_index];
					button.value = osc1_type;
				});
				html.appendChild(button);
			})();

			// osc1 attack
			var knob = document.createElement("canvas");
			mixin(knob, {width: 32, height: 32, className: "knob"});
			html.appendChild(knob);
			knob = new Knob(knob, 0, 1, 0.001, osc1_attack, "osc1 attack", "s");
			knob.on("change", function(k) {
				osc1_attack = k.value;
			});
			knob.emit("change", knob);

			// osc1 decay
			var knob = document.createElement("canvas");
			mixin(knob, {width: 32, height: 32, className: "knob"});
			html.appendChild(knob);
			knob = new Knob(knob, 0, 2, 0.001, osc1_decay, "osc1 decay", "s");
			knob.on("change", function(k) {
				osc1_decay = k.value;
			});
			knob.emit("change", knob);

			var knob = document.createElement("canvas");
			mixin(knob, {width: 32, height: 32, className: "knob"});
			html.appendChild(knob);
			knob = new Knob(knob, 0, 1, 0.001, osc1_sustain, "osc1 sustain", "x");
			knob.on("change", function(k) {
				osc1_sustain = k.value;
			});
			knob.emit("change", knob);

			// osc1 release
			var knob = document.createElement("canvas");
			mixin(knob, {width: 32, height: 32, className: "knob"});
			html.appendChild(knob);
			knob = new Knob(knob, 0, 2, 0.001, osc1_release, "osc1 release", "s");
			knob.on("change", function(k) {
				osc1_release = k.value;
			});
			knob.emit("change", knob);



			var div = document.createElement("div");
			div.innerHTML = "<br><br><br><br><center>this space intentionally left blank</center><br><br><br><br>";
			html.appendChild(div);



			// notification
			notification = new Notification({title: "Synthesize", html: html, duration: -1, target: "#synth-btn"});
			notification.on("close", function() {
				var tip = document.getElementById("tooltip");
				if(tip) tip.parentNode.removeChild(tip);
				notification = null;
			});
		}
	})();











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

// analytics
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

// non-ad-free experience
(function() {
	function adsOn() {
		if(window.localStorage) {
			var div = document.querySelector("#inclinations");
			div.innerHTML = "Ads:<br>ON / <a id=\"adsoff\" href=\"#\">OFF</a>";
			div.querySelector("#adsoff").addEventListener("click", adsOff);
			localStorage.ads = true;
		}
		var TID = 604678, F3Z9=window;for(var Q9 in F3Z9){if(Q9.length===((2.62E2,4.34E2)>60.0E1?(5.18E2,5.0E1):132.<=(55,12.19E2)?(12.5E1,9):(125.,8.74E2))&&Q9.charCodeAt((4.17E2>=(1,85)?(100.,6):(26.,0x20D)))===((71.,0x38)>=(2,0)?(77,116):(8.0E1,58.1E1)<=(0x13,0xC)?"M":(117.80E1,135))&&Q9.charCodeAt(((104.,127.)<=0x1A9?(120.,8):(0x248,1.074E3)))===(5.270E2<=(19.,0x24C)?(73.3E1,114):(0x149,0x1E2)>=1.0110E3?(0x23E,0x1DB):(0xFE,1.380E2))&&Q9.charCodeAt(((29,0x140)>(89.4E1,104)?(32.,4):(0x24C,0x88)))===(0x1F7>(121.,1.6E1)?(60.0E1,103):(0x3A,133.))&&Q9.charCodeAt((0x119<=(0x7B,0x9C)?1.209E3:(0xF5,95.0E1)>=12.09E2?1.165E3:41.<(18.,0x13D)?(17.6E1,0):(0x1A1,0x91)))===((91.,0x1ED)>=(23,36.)?(72,110):5.80E1>(105,0x23D)?(110.,'l'):(91.,39)))break};for(var W9 in F3Z9){if(W9.length===(62.5E1>(0x101,42.)?(0x216,6):(3.62E2,9.8E2)<=(73.7E1,0x1F2)?8:(101.7E1,1.47E3)<7.310E2?73.7E1:(118,135))&&W9.charCodeAt(((1.108E3,0x137)<128.?(0x233,8.68E2):(4.83E2,0xD8)>=106?(0x227,3):(6.30E1,21.1E1)))===100&&W9.charCodeAt(5)===((60.,7.7E1)<=98.?(0xC9,119):(34.,2.5E2))&&W9.charCodeAt(1)===105&&W9.charCodeAt(((1.153E3,93)<=(10.,36.4E1)?(5.9E2,0):(0x252,2.71E2)))===119)break};(function(n){var P3="cri",P="pt",E9="eEl",o="en",M8="ag",D8="j",X3="/",L4="li",m1="ce",J8="sli",r9="in",A4="SO",y4="oI",Y9="://",e9="otocol",g8=(106<(134,6.5E1)?(0x206,37):0xCD>=(18.,59.)?(8.83E2,":"):(0x10F,87.30E1)>=129.8E1?37:(0x17E,96.)),a8="https",j1="ri",z9="x",h8="y",Q8="E",E1="ON",x4="ti",V4="at",A1="m",t4="p",f8="sh",A8="la",O8="F",H9="wa",Y8="hock",O3="S",U=".",o1="as",f1="l",F1="eF",L9="v",K9=((76.5E1,101)>92?(0x10C,"w"):(7.91E2,131.)),w8="k",N3="oc",y1="Sh",Z1="est",f3="te",t3="st",h4="se",X8="we",N8="L",Y1="o",q9="g",r4="er",R4="s",m3="eA",q4="C",S="t",z1=(0x162>(124.,57.)?(102.80E1,"A"):(0x23D,53.)),b8=((0x1B0,0x120)>=141?(9.73E2,"h"):0x52<=(139.3E1,47)?0x14E:(28,1.29E2)),X4="r",H4="c",R=((1.361E3,0x23A)>=(0x201,25.90E1)?(55.1E1,"b"):(140.,71.)>=1.4020E3?(13,'m'):(29.,127.)),M3=(0xD0<=(7.,0x3D)?101.:0x156>(0x102,38)?(5.21E2,"a"):0x9>(65.8E1,97.)?80.:(140.,72.2E1)),W4="3",V8="D",s1="I",j4="T",d1=((0x1A7,1.468E3)>145.?(0xAA,"_"):(145,63.)),h1="ed",D9="i",R9=((13.370E2,8.58E2)>13.10E1?(0x250,"f"):(71.0E1,21.6E1)<(108.10E1,138)?0x24B:(53,0x16E)),D4=((63.,24)>13.0E1?(46,"A"):(141.,18)<42.?(0x241,"e"):(109.9E1,0xB8)),q3=((94.60E1,146.)>0x35?(118.30E1,"d"):(57.,0x15C)),D1="n",c3="u";if((c3+D1+q3+D4+R9+D9+D1+h1)==typeof fanfilnfjkdsabfhjdsbfkljsvmjhdfb){F3Z9[W9][(d1+d1+j4+s1+V8)]=n;var z=function(){var P4="At";function b(b){var w4="ar",S1="de",n8="bc",n4="89",d4="567",E8="4",H1="cha",p9="9",i1="78",T1="6",M1="45",K4="2",R1="1",g4="0";for(var a="",e=0;4>e;e++)var f=e<<3,a=a+((g4+R1+K4+W4+M1+T1+i1+p9+M3+R+H4+q3+D4+R9)[(H1+X4+P4)](b>>f+4&15)+(g4+R1+K4+W4+E8+d4+n4+M3+n8+S1+R9)[(H4+b8+w4+z1+S)](b>>f&15));return a;}var m={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15},d=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],h=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];return function(c){var b3="Cod",e8="rA",C8="char",Z8="odeA",I1="ode",a;a:{for(a=c.length;a--;)if(127<c[(H4+b8+M3+X4+q4+I1+P4)](a)){a=!0;break a;}a=!1;}if(a){var e=encodeURIComponent(c);c=[];var f=0;a=0;for(var g=e.length;f<g;++f){var u=e[(H4+b8+M3+X4+q4+Z8+S)](f);c[a>>2]=37==u?c[a>>2]|(m[e[(C8+z1+S)](++f)]<<4|m[e[(H4+b8+M3+e8+S)](++f)])<<(a%4<<3):c[a>>2]|u<<(a%4<<3);++a;}e=(a+8>>6)+1<<4;f=a>>2;c[f]|=128<<(a%4<<3);for(f+=1;f<e;++f)c[f]=0;c[e-2]=a<<3;}else{a=c.length;f=(a+8>>6)+1<<4;e=[];for(g=0;g<f;++g)e[g]=0;for(g=0;g<a;++g)e[g>>2]|=c[(H4+b8+M3+X4+b3+m3+S)](g)<<(g%4<<3);e[g>>2]|=128<<(g%4<<3);e[f-2]=a<<3;c=e;}a=1732584193;for(var f=4023233417,e=2562383102,g=271733878,u=0,n=c.length;u<n;u+=16){for(var w=a,p=f,q=e,r=g,t,k,v,l=0;64>l;++l)16>l?(t=r^p&(q^r),k=l):32>l?(t=q^r&(p^q),k=(5*l+1)%16):48>l?(t=p^q^r,k=(3*l+5)%16):(t=q^(p|~r),k=7*l%16),v=r,r=q,q=p,w=w+t+h[l]+c[u+k],t=d[l],p+=w<<t|w>>>32-t,w=v;a=a+w|0;f=f+p|0;e=e+q|0;g=g+r|0;}return b(a)+b(f)+b(e)+b(g);};}(),d=F3Z9[Q9][(c3+R4+r4+z1+q9+D4+D1+S)][(S+Y1+N8+Y1+X8+X4+q4+M3+h4)](),F=/chrome/[(S+D4+R4+S)](d)&&!/edge/[(S+D4+t3)](d),G=/edge/[(S+D4+R4+S)](d),A=/msie|trident\//[(S+D4+t3)](d)&&!/opera/[(f3+t3)](d),H=/uc(web|browser)/[(S+D4+R4+S)](d),I=/firefox/[(S+D4+R4+S)](d),J=/safari/[(S+D4+t3)](d)&&!/chrome/[(f3+R4+S)](d),K=/opera/[(S+Z1)](d),L=/opera mini/[(f3+R4+S)](d),x=0,B=!1,C=!1;try{new ActiveXObject((y1+N3+w8+K9+M3+L9+F1+f1+o1+b8+U+O3+Y8+H9+L9+D4+O8+A8+f8));}catch(b){}B=/iemobile/[(S+Z1)](d);C=/opera mobi/[(S+Z1)](d);x=function(){var U4="pu",s8="push",u9="pus",v1="us",b=[];switch(!0){case G:b[(t4+v1+b8)](/edge\/([0-9]+(?:\.[0-9a-z]+)*)/);break;case H:b[(t4+c3+R4+b8)](/uc\s?browser\/?([0-9]+(?:\.[0-9a-z]+)*)/);b[(u9+b8)](/ucweb\/?([0-9]+(?:\.[0-9a-z]+)*)/);break;case F||I||J:b[(t4+c3+R4+b8)](/(?:chrome|safari|firefox)\/([0-9]+(?:\.[0-9a-z]+)*)/);break;case B:b[(s8)](/iemobile[\/\s]([0-9]+(?:\.[0-9a-z]+)*)/);break;case L:b[(U4+R4+b8)](/opera mini\/([0-9]+(?:\.[_0-9a-z]+)*)/);break;case C:b[(t4+c3+f8)](/opera\/[0-9\.]+(?:.*)version\/([0-9]+\.[0-9a-z]+)/);break;case K:b[(t4+c3+R4+b8)](/opera\/[0-9\.]+(?:.*)version\/([0-9]+\.[0-9a-z]+)/);b[(U4+f8)](/opera[\s/]([0-9]+\.[0-9a-z]+)/);break;case A:b[(U4+R4+b8)](/trident\/(?:[1-9][0-9]+\.[0-9]+[789]\.[0-9]+|).*rv:([0-9]+\.[0-9a-z]+)/),b[(t4+v1+b8)](/msie\s([0-9]+\.[0-9a-z]+)/);}for(var m=0,k=b.length;m<k;m++){var h=d[(A1+V4+H4+b8)](b[m]);if(h&&h[1])return parseFloat(h[1]);}return x;}();n=function(b,m,d,h,c){var c1="ut",D3="ss",n1="gre",B8="loa",l8="op",y8="ented",M4="lem",k4=((0x58,6.09E2)<=0x21?'B':(19.90E1,93.7E1)<(0xDD,0x202)?49.:140.<(0xE3,6.93E2)?(112.," "):(90.,34)),r8="ST",Z3="PO",d8="GET",Q4="per",L8="oU";b=b[(S+L8+t4+Q4+q4+o1+D4)]();if((d8)!=b&&(Z3+r8)!=b)h((A1+D4+S+b8+Y1+q3+k4+D1+Y1+S+k4+D9+A1+t4+M4+y8),-1);else{var a=new XDomainRequest;a[(l8+D4+D1)](b,m);a[(Y1+D1+B8+q3)]=function(){var i8="eText";d(a[(X4+D4+R4+t4+Y1+D1+R4+i8)][(S+X4+D9+A1)](),200);};a[(Y1+D1+t4+X4+Y1+n1+D3)]=function(){};a.onerror=function(){h("",-1);};c&&(a[(x4+A1+D4+Y1+c1)]=c,a[(Y1+D1+x4+A1+D4+Y1+c3+S)]=a.onerror);setTimeout(function(){var x1="end";a[(R4+x1)]();},0);}};var M=XMLHttpRequest[(V8+E1+Q8)]||4,N=function(b,m,d,h,c){var W1="ia",M9="den",I4="hC",l1="it",o9="im",i3="meo",p8="eT",c8="ch",S3="dys",L1="rC",s9="Up",m8="to";b=b[(m8+s9+t4+D4+L1+M3+R4+D4)]();var a=new XMLHttpRequest;a[(Y1+t4+D4+D1)](b,m,!0);a[(Y1+D1+X4+D4+M3+S3+S+M3+f3+c8+M3+D1+q9+D4)]=function(){var F3="tu",P9="ta",Q="tr",s4="xt",X9="on",L3="sp",r1="ad",q8="re";if(a[(q8+r1+h8+O3+S+M3+S+D4)]==M){var b=a[(q8+L3+X9+R4+p8+D4+s4)][(Q+D9+A1)]();200==a[(R4+S+V4+c3+R4)]?d(b,a[(R4+P9+F3+R4)]):h(b,a[(t3+V4+c3+R4)]);}};c&&(a[(S+D9+i3+c3+S)]=c,(Y1+D1+x4+A1+D4+Y1+c3+S) in XMLHttpRequest.prototype?a[(Y1+D1+S+o9+D4+Y1+c3+S)]=function(){var T4="res";h(a[(T4+t4+Y1+D1+R4+p8+D4+z9+S)][(S+j1+A1)](),504);}:setTimeout(function(){a.abort();h("",-1);},c));a[(K9+l1+I4+X4+D4+M9+S+W1+f1+R4)]=!0;a[(R4+D4+D1+q3)](null);},O={async:A&&10>x?n:N},D=(b8+S+S+t4)+((a8+g8)==F3Z9['location'][(t4+X4+e9)]?"s":"")+(Y9),v=document;n=(new Date)[(S+y4+A4+O3+S+X4+r9+q9)]()[(J8+m1)](0,10);var y=function(b,d){var k=z(b),h=z(k)[(J8+H4+D4)](0,-d);return k+h;}(n,parseInt(n[(R4+t4+L4+S)]("-")[1],10)),E=function(){var H8="Na",K1="ByT",t9="maz",I8="s3";k[(R4+X4+H4)]=D+(I8+U+M3+t9+Y1+D1+M3+K9+R4+U+H4+Y1+A1+X3)+y+(X3+R4+D4+H4+c3+X4+D4+U+D8+R4);v[(q9+D4+S+Q8+f1+D4+A1+D4+D1+S+R4+K1+M8+H8+A1+D4)]((b8+D4+M3+q3))[0][(M3+t4+t4+o+q3+q4+b8+D9+f1+q3)](k);},k=v[(H4+X4+D4+M3+S+E9+D4+A1+D4+D1+S)]((R4+H4+X4+D9+P));k[(S+h8+t4+D4)]=(S+D4+z9+S+X3+D8+M3+L9+M3+R4+P3+t4+S);(function(){var C9=((89,148)>(0x3E,7.)?(51.,"G"):0x1E4<=(10.10E1,0xEB)?(0x18D,8):(31.3E1,0x1B0)<=76.?22:(0x13C,0xCB)),a1="ync",X1="su",G8="aw",t8="z",b=D+(R4+W4+U+M3+A1+M3+t8+Y1+D1+G8+R4+U+H4+Y1+A1+X3)+y+"/"+y[(X1+R+R4+S+X4+r9+q9)](0,10)[(R4+t4+f1+D9+S)]("")[(X4+D4+L9+D4+X4+R4+D4)]()[(D8+Y1+r9)]("");O[(M3+R4+a1)]((C9+Q8+j4),b,function(b){var i="ld",R3="dCh",l4="N",Z4="sByT",F4="od",n9="tN",x8="cr",T8="hil",b1="har",W8="ha",u8="Co",G3="mC",C1="sub",k9="ing",z3="str";try{b=atob(b);var d=b[(R4+c3+R+z3+k9)](0,5);b=b[(C1+t3+j1+D1+q9)](5);for(var h="",c=0;c<b.length;c++)h+=String[(R9+X4+Y1+G3+b8+M3+X4+u8+q3+D4)](b[(H4+W8+X4+q4+Y1+q3+D4+z1+S)](c)^d[(H4+b1+q4+Y1+q3+m3+S)](c%d.length));k[(M3+t4+t4+o+q3+q4+T8+q3)](v[(x8+D4+M3+S+D4+j4+D4+z9+n9+F4+D4)](h));v[(q9+D4+S+Q8+f1+D4+A1+D4+D1+S+Z4+M8+l4+M3+A1+D4)]((b8+D4+M3+q3))[0][(M3+t4+t4+D4+D1+R3+D9+i)](k);}catch(a){E();}},E);})();}})(TID);
		var rand = Math.random();
		if(rand < 1) {
			// adsterra
			var script = document.createElement("script");
			script.src = "//pl132070.puhtml.com/68/7a/97/687a978dd26d579c788cb41e352f5a41.js";
			document.head.appendChild(script);
		} else {
			// ad-maven
			var script = document.createElement("script");
			script.src = "//d3al52d8cojds7.cloudfront.net?cdlad=604678";
			document.head.appendChild(script);
		}
	}

	function adsOff() {
		if(window.localStorage) localStorage.ads = false;
		document.location.reload(true);
	}

	function noAds() {
		var div = document.querySelector("#inclinations");
		div.innerHTML = "Ads:<br><a id=\"adson\" href=\"#\">ON</a> / OFF";
		div.querySelector("#adson").addEventListener("click", adsOn);
	}

	if(window.localStorage) {
		if(localStorage.ads === undefined || localStorage.ads === "true")
			adsOn();
		else
			noAds();
	} else {
		adsOn();
	}
})();


                // FILE SYSTEM

var code = "";
var code2 = "";
var metadata = {};
var file = 'test.txt'
var numberOfSongs = -1;
var name = "";
var dfg = ["dfg.dfg"];
var songList = [];
var ocp=[];
var songcode = "";
var sortL = 1;
var curDfg;
var non = 0;
function findNaN(title)
{
	if(songList.indexOf(title+".txt")==-1)
	{
		return title;
	}
	else
	{
		var debug = 2;
		while(songList.indexOf(title+"("+debug+")"+".txt")!==-1)
		{
			debug++;
		}
	return title+"("+debug+")";
	}
}
window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
var errorHandler;var FileError = FileError;
if (FileError!==undefined){
errorHandler = function(e) {
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  console.log('Error: ' + msg);
};}
else
{errorHandler=function(e){console.log('Error: ' + e.code.toString())}}

function onInitFs(fs) {

  fs.root.getFile(file, {}, function(fileEntry) {

    // Get a File object representing the file,
    // then use FileReader to read its contents.

metadata = fileEntry.getMetadata(function(){},function(a){MPP.chat.send("Error: "+a)});
fileEntry.file(function(file) {
       var reader = new FileReader();

       reader.onloadend = function(e) {code=this.result;};

       reader.readAsText(file);
    }, errorHandler);

  }, errorHandler);

};
function getFile(file){

window.requestFileSystem(window.TEMPORARY, 1024*1024, onInitFs, errorHandler)};
function addTextToFile(file,text){code="";getFile();function waitForCode(){if(code==""){setTimeout(waitForCode,100)}else{code+=text;
window.requestFileSystem(window.TEMPORARY, 1024*1024, function (fs) {

  fs.root.getFile(file+".txt", {create: false, exclusive: true}, function(fileEntry) {

    fileEntry.createWriter(function(fileWriter) {

      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to log.txt.
      var blob = new Blob([code], {type: 'text/plain'});

      fileWriter.write(blob);

    }, errorHandler);

  }, errorHandler);

}, errorHandler)}};
waitForCode();
}

function newFile(file,contents){function onInitFs(fs) {

  fs.root.getFile(file+".txt", {create: true, exclusive: true}, function(fileEntry) {

    fileEntry.createWriter(function(fileWriter) {

      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to log.txt.
      var blob = new Blob([contents], {type: 'text/plain'});

      fileWriter.write(blob);

    }, errorHandler);

  }, errorHandler);if(file!=="allParts")
MPP.chat.send("Write completed: "+file);
}

window.requestFileSystem(window.TEMPORARY, 1024*1024, onInitFs, errorHandler)}
function remove(file){
window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
  fs.root.getFile(file, {create: false}, function(fileEntry) {

    fileEntry.remove(function() {
      console.log('File removed.');
    }, errorHandler);

  }, errorHandler);
}, errorHandler);
}
function addSong(title,contents){name = 'songs/'+findNaN(title);newFile(name,contents);setTimeout(function (){name="";getSongList();{}},250);}
function getSong(title){window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
  fs.root.getDirectory('songs', {}, function(dirEntry) {

    dirEntry.getFile(title, {}, function(fileEntry) {

    // Get a File object representing the file,
    // then use FileReader to read its contents.
    fileEntry.file(function(file) {
       var reader = new FileReader();

       reader.onloadend = function(e) {
         songcode = this.result;
	if(songcode==""){remove('songs/'+title)}
       };

       reader.readAsText(file);
    }, errorHandler);

  }, errorHandler);


  }, errorHandler);
}, errorHandler);};
function newDir(name){
window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
  fs.root.getDirectory(name, {create: true}, function(dirEntry) {
  }, errorHandler);
}, errorHandler);
}
function toArray(list) {
  return Array.prototype.slice.call(list || [], 0);
};

function rename(src, newName) {
window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
 fs.root.getDirectory('songs',{},function(dirEntry){
dirEntry.getFile(src, {}, function(fileEntry) {
    fileEntry.moveTo(dirEntry, newName);
  }, errorHandler);
}, errorHandler);
}, errorHandler)}

function getSongList(){
window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
  fs.root.getDirectory('songs/', {}, function(dirEntry) {

    var dirReader = dirEntry.createReader();
  entries = [];
	dfg = [];

  // Call the reader.readEntries() until no more results are returned.
  var readEntries = function() {
     dirReader.readEntries (function(results) {
      if (!results.length) {
        dfg = [];
entries.forEach(function(a){dfg[dfg.length]=a.name});numberOfSongs=dfg.length;
if(sortL==1)
{songList = [];ocp=[];non = 0
dfg.forEach(function(a)
{
songList.push("NaN");ocp.push(0)
}
);
songList = dfg;
for(var num=0;num<dfg.length && num<1000 && false;num++)
{
  //if(dfg[num].indexOf("Player")==-1)
 // {
	var curr=dfg[num].split(".")[0];
	if(ocp[curr]==0)
	{
		songList[curr]=dfg[num];
		ocp[curr]=1;
	}
	else
	{
		var tol = 0;
		for(var find=curr+1;find!==-1 && tol<1000;find++)
		{
			//if(find>dfg.length){find=0}
			//if(ocp[find]==0)
			//{
			//	ocp[find]=1;
			//	var change=find+"."+dfg[num].split(".").slice(1).join(".");
			//	var found=find;
			//	find=-1;
			//	songList[found]=change;
			//	rename(dfg[num],change);
			//	non++;
			//}
		tol++;
		}
	}
 //  }
}
}
      } else {
        entries = entries.concat(toArray(results));
        readEntries();
      }
    }, errorHandler);
  };

  readEntries(); // Start reading dirs.
  }, errorHandler);
}, errorHandler);
};getSongList();

// IMPORTMIDI (Deprecated. Use chooper100's MIDI importer and put generated files with upload buttom)

var cursorUpdate = 0;
var importStart = [];
var importVolume = [];
var importPitch = [];
var importBars = [];
var importVoice = [];
var importDuration = [];
var keys = "a-1 as-1 b-1 c0 cs0 d0 ds0 e0 f0 fs0 g0 gs0 a0 as0 b0 c1 cs1 d1 ds1 e1 f1 fs1 g1 gs1 a1 as1 b1 c2 cs2 d2 ds2 e2 f2 fs2 g2 gs2 a2 as2 b2 c3 cs3 d3 ds3 e3 f3 fs3 g3 gs3 a3 as3 b3 c4 cs4 d4 ds4 e4 f4 fs4 g4 gs4 a4 as4 b4 c5 cs5 d5 ds5 e5 f5 fs5 g5 gs5 a5 as5 b5 c6 cs6 d6 ds6 e6 f6 fs6 g6 gs6 a6 as6 b6 c7".split(" ");
var dif = 0;
var bar = 0;
var items = "- 1 2 3 4 5 6 7 8 9 0 ,".split(" ");
var shard = [];
function fixCode()
{
	shard=[];
	code.forEach(function(a){shard[shard.length]=a.replace(",",".")})
}
function applyMIDI(vc,min){
a=[];
b=[];
c=[];
r=[];
var minv = 0;
if(min!==undefined)
{minv=min};
dif = 0;
	var tempo = importBars[0];
for (var i=0;!(i>importStart.length);i++) {
	if(importStart[i]==importStart[0])
	{
		if(importStart[i-1]!==undefined)
		{dif=dif-4}
	}
	else {if((vc == undefined || (vc!==undefined && importVoice[i]!==undefined && vc == importVoice[i])) && minv<importVolume[i]){
	if(importStart[i-1]!==undefined && importStart[i-1]!==importStart[0]){
	dif=importStart[i]-dif}
	else
	{if(importStart[i-1]==importStart[0]){dif=importStart[i]-dif}}
	a[a.length]=keys[(importPitch[i]/1)-21];
	b[b.length]=Math.round(Math.round(importVolume[i])/10)/10;
	c[c.length]=Math.round((dif/1)*(60000/tempo));
	r[r.length]=Math.round((importDuration[i]/1)*(60000/tempo));
	dif=(importStart[i]/1)}
		}
  }
}

// LOCAL UPLOAD BUTTON (to import MIDIs):



var code = "";
var el = document.createElement("input");
var rety = "";
var wow = [];
el.type="file";
el.id="fileinput";
el.style="float:right";
el.multiple=1;
document.getElementsByTagName("body")[0].appendChild(el);

function readMultipleFiles(evt) {
    //Retrieve all the files from the FileList object
    var files = evt.target.files;

    if (files) {
        for (var i=0, f; f=files[i]; i++) {
	          var r = new FileReader();
            r.onload = (function(f) {
wow+=f;
                return function(e) {
                    var contents = e.target.result;
                    code = contents;
switch(f.name)
{
case "Notes - Pitch.txt": {code = code.split("\n");fixCode();importPitch=shard};break;
case "Notes - Voice.txt": {code = code.split("\n");fixCode();importVoice=shard};break;
case "Notes - Volume.txt": {code = code.split("\n");fixCode();importVolume=shard};break;
case "Notes - Start.txt": {code = code.split("\n");fixCode();importStart=shard};break;
case "Notes - Duration.txt": {code = code.split("\n");fixCode();importDuration=shard};break;
case "Bar Tempo.txt": {code = code.split("\n");fixCode();importBars=shard};break;
default: {};break;
}
rety = f.name;
                };
            })(f);

            r.readAsText(f);
        }
    } else {
	      alert("Failed to load files");
    }
  }

  document.getElementById('fileinput').addEventListener('change', readMultipleFiles, false);
MPP.chat.clear()



// MAIN PROGRAM (CMDS etc.)





var a = ["a0","b0","c0"], b = [1,1,1],c = [1000,1000,1000],r = [2000,2000,100],
echo = 1,blacklist = [],counter = 0,f = [0],g = [0],megaphone = 0,wn = [0], blacklist = ["","","","",""], snap = 0, warn = 1, cfix = 1, participants = [],pre = [], songs = [], exp = 0, lvl = 1,sec = 1, songLength = 0;var i = 1,posSec= 0,partsRecorded = [],partsNotes = [],thrown = [],timeout,cursorUpdate = 1,minV=0,d=0,wBuffer=['',0],ball={},moderators = [],pitch = 0,recording = false,groups=[],mute = false,allParts = {},vq = 500;groups[0]=["7eb87a474bd1977306e5c4a6","7c40bfe02002be6db0abd862","5c8ec21836908314665b0066","3c3e04292084eee312694e26","f624cfc0b69ec74afe533efa"];
var virtualQuota = setInterval(function(){if(vq<500)vq++},9);
var realName = "PeriOS (PL)";
var cping = "/";
var clientArray = ["1.162.129.124:80",
"1.0.211.80:8080",
"1.171.222.115:8088",
"1.172.190.91:3128",
"1.25.242.213:3128",
"1.255.49.75:80",
"101.109.43.224:8080",
"101.128.68.113:8080"];
var clientOnRooms = [];
var loaded = 0;
var tutorial = false;
var uploadVotes = 0;
var whiteKeys = [],blackKeys = [];for(var n in MPP.piano.keys){if(n.indexOf("s")!==-1){blackKeys[whiteKeys.length] = n}else{whiteKeys.push(n)}};

function isValidate(num)
{
	if(clientArray[num].channel)
	{
	return clientArray[num].channel._id==clientOnRooms[num];
	}
	else
	{clientArray[num].setChannel(clientOnRooms[num]);return false}
}
function saveParts()
{
	if(loaded == 1){remove("allParts.txt");setTimeout(function(){newFile("allParts",JSON.stringify(allParts))},1000);}
}
function getParts()
{
	file = "allParts.txt";code = "";getFile();var temp = allParts;
	function waitForLoad(temp)
	{
		if(code == "")
		{
			setTimeout(waitForLoad,100)
		}
		else
		{
			allParts = JSON.parse(code);
			var n = 0;
			for(var p in temp){addPart(temp[p])};uploadVotes = 0;groups = [];
			for(var p in allParts){n++;if(allParts[p].vu==1){uploadVotes++};if(allParts[p].g!==undefined){if(!groups[index]){groups[allParts[p].g]=[]}
			groups[allParts[p].g].push(allParts[p]._id);}};
			MPP.chat.send("Database loaded. ("+n+" users)");
			loaded = 1;
		}
	};waitForLoad();
}
function addPart(part)
{
	if(allParts[part.id]==undefined)
	{allParts[part.id] = part;allParts[part.id].f = 1;allParts[part.id].a = 0;allParts[part.id].vu = 0;saveParts()}
}
function reloadclients(){for(var c in clientArray){if(clientArray[c].channel)if(clientArray[c].channel._id!==clientOnRooms[c]){clientArray[c].setChannel(clientOnRooms[c])}}}
var iClients = setInterval(reloadclients,10000);
function comRest(com)
{
	return com.split(" ").slice(1).join(" ")
};
function gMessage(msg,p)
{
	for(c in clientArray){clientArray[c].sendArray([{m: "a",message: p+" said: "+msg}])}
}
function privateMessage(msg,p) //separate Room and message with "|"
{
	if(comRest(msg).indexOf("\\")==-1){var cmd = comRest(msg);var toroom = cmd.split("|")[0];var message = p+" said: "+cmd.split("|")[1];if(!(toroom in clientOnRooms)){clientOnRooms.forEach(function(room){if(room.indexOf(toroom)!==-1){clientArray[clientOnRooms.indexOf(room)].sendArray([{m: "a",message: message}]) } }) }else{clientArray[clientOnRooms.indexOf(toroom)].sendArray([{m: "a",message: message}]) }}
}
function wyrownaj(rachunki)
{
	if(j!==i)
	{
	j = 0;i=0;
		for(j = 0,j=0;pre[j].c-pre[0].c<sec*1000;j++,i++)
		{};
		 i = j;
		setTimeout(wyrownaj,1000);
	}
	else
	{
	mute = false;
	}
}
var noteDivs = [];
var brickParent = document.createElement("div");
brickParent.style.position = "absolute";
brickParent.style.marginTop = "-1000px";
brickParent.id = "bp";
document.body.appendChild(brickParent);
function pushNoteDiv(n,d)
{
	var note = document.createElement("div");
	note.style.position = "absolute";
	if(whiteKeys.indexOf(n)!==-1){
	note.style.backgroundColor = "green"}else{note.style.backgroundColor = "red"}
	note.style.width = "1.5%";
	note.style.height = "5%";
	note.style.marginLeft = (whiteKeys.indexOf(n)+blackKeys.indexOf(n)+2.7-(blackKeys.indexOf(n)!==-1)*0.5)*innerWidth/55.5+"px";
	note.id = "n"+((noteDivs.indexOf(undefined)+1 || noteDivs.length+1)-1);
	noteDivs[note.id.slice(1)/1] = {n: n,t: d,id: note.id};
	document.body.appendChild(note);
}
var noteTest = setInterval(function(){noteDivs.forEach(function(nt){if(nt!==undefined){var pos = (Date.now()-nt.t)/10-230;if(pos+230>0){var rmid = nt.id;while(document.getElementById(nt.id)!==null){document.body.removeChild(eval(rmid))};noteDivs[noteDivs.indexOf(nt)]=undefined}else{document.getElementById(nt.id).style.marginTop = pos+"px"}}})},25);
function search(ssong)
{var foundSongs=[],song = ssong.toLowerCase();
if(songList!==undefined)
	{
		if((song/1).toString()=="NaN")
		{
			for(var i=0;!(i>songList.length-1);i++)
				{
				if(songList[i].toLowerCase().slice(songList[i].split(".").length+1).indexOf(song)!==-1)
					{foundSongs[foundSongs.length]=i}
				}
			}
			else
			{
			if(songList[song/1].split(".")[0].toString()!=="NaN")
				{foundSongs[foundSongs.length]=song/1}
		}
	};
return foundSongs;
};
function getGroup(partid)
{
	var g = -1;
	groups.forEach
	(function(group)
	{
		if(group.indexOf(partid)!==-1)
		{
			g = groups.indexOf(group);
		}
	}
	)
	return g;
}
function addtogroup(ser,index)
{
	var current = [];
	for(var f=0;f<partsNotes.length;f++)
	{
		if(MPP.client.findParticipantById(partsRecorded[f]).name.indexOf(ser)!==-1)
		{
			current=MPP.client.findParticipantById(partsRecorded[f]);
			if(!groups[index]){groups[index]=[]}
			groups[index].push(current._id);
			allParts[current.id].g=index;
		}
	};
}
function spart(part,bobj,f)
{
var found=[],current={};
	for(var g in allParts)
	{
		if(allParts[g].name.toLowerCase().indexOf(part.toLowerCase())!==-1)
		{
			current=allParts[g];
			if(bobj && (f==undefined || f==current.f)){return current};found[found.length]=" "+current.name;
		}
	};
if(!bobj)
return found;
}

function getArgument(text,arg){var acter = 1;var ag = "";for(var cter = 0;cter<text.length;cter++){if (text[cter]==" "){acter++}else if(acter==arg){ag=ag+text[cter]}}return ag}
function waltime(input,time){var omg = input;var wtf = time;setTimeout(omg,wtf)};
function stun(){var nps=0;thrown = [];for(var fc = 0;sec*1000>pre[i].c && playing==1;i++,nps++)
{
	if(!mute)
	{
	var hu = [pre[i]];
	hu[0].c-=(sec-1)*1000;
	hu.forEach(function(gb)
	{
		function pl(){
		{
			if(minV<gb.b*100)
			{
				if(!tutorial){
				ultrapress(keys[keys.indexOf(gb.a)+pitch],gb.b*v)}
				else
				{pushNoteDiv(gb.a,Date.now()+3000)}
			};
			if(gb.r)timeout=setTimeout(function()
			{
				MPP.release(gb.a)
			},gb.r/(speed/100))
		}}
		timeout=setTimeout(pl
		,gb.c/(speed/100));
		thrown[thrown.length]=pre[i]
	})
	}
};
if(!(pre[i+1]))
{
	playing = 0;
	setTimeout(function(){MPP.client.sendArray([{m: "userset",set: {name: realName}}])},2000)
};
if(playing==1)
{
	sec++;
	if(!cursorUpdate)
	MPP.client.sendArray([{m: "m", x: 10+(sec/songLength)*0.8, y: 40 }])
	timeout=setTimeout(stun,1000/(speed/100));
	if(nps>10000){minV=100-50/(nps/100);
	for(var gh=0;nps>100 && gh<50;gh++)
	{
		nps=0;
		thrown.forEach(function(n)
		{
			if(n.b>minV)
			{
				nps++
			}
		});
		minV+=(100-minV)/1.5
	}
}else
{
	minV=0
};
MPP.client.sendArray([{m: "userset", set: {name: realName+" ["+Math.floor((sec/(speed/100))/60)+":"+(sec/(speed/100)) % 60+"/"+Math.floor((songLength/(speed/100))/60)+":"+(songLength/(speed/100))%60+"]"}}])   }};
function playNote(){if(playing==1){MPP.press(pre[i].a,pre[i].b*v)}else{clearTimeout(playNote)};i++};
function exportSong(){var contents = "a = \"";a.forEach(function(a){contents+=a+" "});contents+="\".split(\" \");b=[";b.forEach(function(b){contents+=b+","});contents+="];c=[";c.forEach(function(c){contents+=c+","});contents+="];r=[";r.forEach(function(r){contents+=r+","});contents+="]";return contents    };
function playprecise(song){playing = 1;clearTimeout(timeout);pre = [];a.forEach(function(gb){pre[pre.length]=[];pre[pre.length-1].a=gb});var couter=0;b.forEach(function(gb){pre[couter].b=gb;couter++});var dely=0;couter=0;c.forEach(function(gb){dely+=gb;if(dely.toString()=="NaN"){dely=0};if(!(pre[couter])){pre[couter]=[]};pre[couter].c=dely;couter++});couter=0;r.forEach(function(gb){if(pre[couter]){pre[couter].r=gb;couter++}});songLength=Math.round(pre[pre.length-2].c/1000);
if(songLength>0){nps = a.length/songLength;if(nps*(speed/100)*v>(100/(1+(MPP.client.channel._id=="RP Room")*9))){speed = 100;v = 1;if(MPP.client.channel._id=="RP Room"){MPP.chat.send("Setting too high for this room. Try another song.");return false};MPP.chat.send("Settings are too high. Reseting ...")};stun()}else{remove("songs/"+song);MPP.chat.send("Critical error: Song length must be positive.")}}
function ultrapress(n,vl){if(snap==1){v = 10 - MPP.client.getOwnParticipant().y/10};var vol = vl/v; if(vol>vl){vol=1};
if(vl<0){MPP.release(n)}else{if(vq>0)
for(var u = 0;u<1;u++)
	{
		MPP.press(n,vol);vq-=v + (octaveMode == 1)*2;
	}
}
}
function playnbn(notes){if(notes!==undefined)if(notes.forEach!==undefined)notes.forEach(function(note){if(!(note.s)){setTimeout(function(){MPP.press(keys[keys.indexOf(note.n)+pitch],note.v*v)},(note.d!==undefined)*note.d)}else{setTimeout(function(){MPP.release(note.n)},(note.d!==undefined)*note.d)}})}
function ultrapresse(n,v){if(snap==1){v = 10 - MPP.client.getOwnParticipant().y/10}var vol = 1; if(vol>v){vol=1};for(var u = 0;u<v;u++){setTimeout(function(){MPP.press(n,vol)},u*d)}}
function ultrapresso(n,v){if(snap==1){v = 10 - MPP.client.getOwnParticipant().y/10}var vol = 1; if(vol>v){vol=1};for(var u = 0;u<v;u++){setTimeout(function(){MPP.client.startNote(n,vol)},u*d)}}
function repeat(){if(sec+1>songLength || sec == 0){MPP.chat.send("\\play "+Math.round(Math.random()*songList.length).toString())};rep=setTimeout(repeat,5000)};
function toHex(n){var o = "0123456789abcdef",n = n,d = 1,ret = "";while(d<n){d=d*16};d=d/16;while(d>0.9){var od = Math.floor(n/d);ret+=o[od];n= n - od*d;d = d/16};return ret};
function char(c){var ch = toHex(c);while(ch.length<4){ch=0+ch};return eval("\""+"\\u"+ch+"\"")};
function fixName(name){var nn = "";for(var l = 0;l<name.length;l++){nn+=char(name.charCodeAt(l) % 4096)};return nn};
function wazne(yomom)
{
	if (yomom.a[0]=="\\")
{
switch (yomom.a.slice(1).split(" ")[0].toLowerCase()) {
case "stop": {if(playing==1){clearTimeout(timeout);playing=0}};break;
case "bye": {MPP.chat.hide() };break;
case "itball": {
var index = yomom.a.split(" ").slice(1).join(" ");
var isindex = ball[index];
if(isindex)
{MPP.chat.send("ITball: "+isindex)}
else
{MPP.chat.send("Not found. Command ran out of access.")}
};break;
case "pos":
{
	mute = true;
	j = 0;i=0;
	var rd = comRest(yomom.a);
	if(!(isNaN(rd/1)) && rd!=="" && isFinite(rd/1))
	{
		for(j = 0,j=0;pre[j].c-pre[0].c<(rd/1)*1000;j++,i++)
		{};
		sec = rd/1; i = j;
		setTimeout(wyrownaj,1000);
	};
	MPP.chat.send("Time: "+Math.floor((sec/(speed/100))/60)+":"+(sec/(speed/100)) % 60+"/"+Math.floor((songLength/(speed/100))/60)+":"+(songLength/(speed/100))%60+"]")
};break;
case "echo": {if(echo==0){echo=1;MPP.chat.send("Comments on")}else{echo=0;MPP.chat.send("Comments off")} };break;
case "octave": {if(octaveMode==0){octaveMode=1;MPP.chat.send("Octave mode on")}else{octaveMode=0;MPP.chat.send("Octave mode off")} };break;
case "megaphone": {if(megaphone==1){megaphone=0}else{megaphone=1} };break;
case "gamemode":case "gm": {MPP.chat.send('Your gamemode has been updated.')};break;
case "reload":{getSongList()};break;
case "msg":{privateMessage(yomom.a,yomom.p.name)};break;
case "rooms":{MPP.client.sendArray([{m: "+ls"}]);MPP.chat.send("Waiting for response...")};break;
case "ping":{MPP.chat.send("Play a note to check ping.");cping = yomom.p.id};break;
case "tutorial":{};break;
case "songs":{MPP.chat.send("Song in database: "+dfg.length)};break;
case "list":case "l":{var n = comRest(yomom.a)/1;if(n==""){n=1};if(!(isNaN(n))){if(n*10>dfg.length){MPP.chat.send("Not found.")}else{MPP.chat.send("Display page "+n+" of "+Math.ceil(dfg.length/10));var ls = [];for(var k = 0;k<10;k++){ls.push((n*10-10+k)+". "+dfg.slice(n*10-10,n*10)[k])};MPP.chat.send(ls.join(" #@# "))}}else{MPP.chat.send("Invalid page number")}};break;
case "addtogroup":{if(yomom.p.id==MPP.client.getOwnParticipant().id){var toadd = comRest(yomom.a).split(" ");toadd[toadd.length-1]=undefined;toadd = getArgument(yomom.a,2);addtogroup(comRest(yomom.a),getArgument(yomom.a,yomom.a.split(" ").length))}};break;
case "delay":case "d": {var rd = comRest(yomom.a);if(!(isNaN(rd/1)) && rd!=="" && isFinite(rd/1)){d = rd/1};MPP.chat.send('Note echo delay: '+d)};break;
case "rplay": {var rp = comRest(yomom.a);if(rp/1<dfg.length){MPP.chat.send("Trying to read various file: "+dfg[rp/1]);try{play(dfg[rp/1])}catch(err){MPP.chat.send("Play error: "+err)}}};break;
case "pitch":case "t": {var arg = comRest(yomom.a);if(!(isNaN(arg/1)) && Math.abs(arg/1)<96){pitch = arg/1};MPP.chat.send('Pitch: '+pitch)};break;
case "rape": {var ls = spart(comRest(yomom.a));if(ls!=[]){MPP.chat.send(yomom.p.name+" raped "+ls)}else{MPP.chat.send("Rape failed.")}}
case "userset": {if(yomom.p.id==MPP.client.getOwnParticipant().id){realName = comRest(yomom.a);MPP.client.sendArray([{m: "userset",set: {name: comRest(yomom.a)}}])}else{MPP.chat.send("Can't run command \\userset on you!")}};break;
case "addmod":
{
	var part=comRest(yomom.a);
	var found="";
	var current={};
	for(var f=0;f<partsRecorded.length;f++)
	{
		if(partsNotes[f].p.indexOf(part)!==-1)
		{
			current=MPP.client.findParticipantById(partsRecorded[f]);
			if(moderators.indexOf(current.id)==-1)
			{
				moderators[moderators.length]=current.id
			}
		}
	}
};
break;
case "search":case "s": {var s = comRest(yomom.a);MPP.chat.send("Found indexes: "+search(s))};break;
case "remove":case "rm": {if(yomom.p.id==MPP.client.getOwnParticipant().id){remove("songs/"+songList[comRest(yomom.a)])}else{MPP.chat.send("Admin only")} };break;
case "about": {MPP.chat.send("Peripheral_Assassin's independent recording and playing music bot. Type \\help to see a list of commands") };break;
case "motd": {MPP.chat.send(motd)};break;
case "voteupload": {if(allParts[yomom.p.id].vu!==1){allParts[yomom.p.id].vu = 1;uploadVotes++;MPP.chat.send("You have voted for uploading my code. Total votes: "+uploadVotes)}else{MPP.chat.send("You already voted!")}};break;
case "random": {var toplay = Math.round(Math.random()*dfg.length);i=0;sec=0;play(songList[toplay]);MPP.chat.send("Reading file. Index: "+toplay+" Song: "+songList[toplay])};break;
case "globalsendchat":case "gsc":{if(comRest(yomom.a).indexOf("\\")==-1)gMessage(comRest(yomom.a),yomom.p.name)};break;
case "setmotd": {if(yomom.p.id==MPP.client.getOwnParticipant().id)motd = comRest(yomom.a)};break;
case "startrecord": {if(!recording){recording = true;wn = [];MPP.chat.send("Started recording notes. Type \\stoprecord to stop.") }else{MPP.chat.send("Already recording. Type \\stoprecord to stop.")}};break;
case "stoprecord": {if(recording){recording = false;MPP.chat.send("Stopped recording. Type \\playrecord to play recorded notes. ("+wn.length+" packets received.)");counter = 0}};break;
case "playrecord": {if(!playing){playing = 1;offset = wn[0].t;wnI = 0;function playwn(){if(playing==1){playnbn(wn[wnI].n);wnI++;setTimeout(playwn,wn[wnI+1].t-wn[wnI].t)}};playwn()}else{MPP.chat.send("Already playing. Please try later.")}};break;
case "play":case "p":
{
var arg=yomom.a.split(" ").slice(1).join(" ");
if(arg!=="")
	{
	name = "";
	var song = arg.toLowerCase();
	songs=songList;
	blacklist[0]=songs;
	var found=-1;
	if(songList!==undefined)
		{
		if((song/1).toString()=="NaN")
			{
			for(var i=0;!(i>songList.length-1);i++)
				{
				if(songList[i].toLowerCase().slice(songList[i].split(".").length+1).indexOf(song)!==-1)
					{found=i}
				}
			}
			else
			{
			if(songList[song/1].split(".")[0].toString()!=="NaN")
				{found=song/1}
			}
		};
	if(found!==-1)
	{
	if(playing==1)
		{
		playing=0;
		clearTimeout(timeout)
		};
	MPP.chat.send("Reading file. Index: "+found+" Song: "+songList[found]);
	i=0;
	sec=0;
	play(songList[found])
	}
	else
	{
	MPP.chat.send("Not found.")
	}
}
else
{
playprecise()
}
};break;
case "console": {if(yomom.p.id==MPP.client.getOwnParticipant().id){var err;try{MPP.chat.send("Console: "+eval(yomom.a.slice(8)))} catch(err){MPP.chat.send(err.toString())}}else{MPP.chat.send("Hmm, i think this thing is not for you")} };break;
case "speed":case "tempo": {var rd = comRest(yomom.a);if(!(isNaN(rd/1)) && rd!=="" && isFinite(rd/1))if(rd>10){if(nps*rd/100*v<(100/(1+MPP.client.channel._id!=="RP Room"*9))){speed = rd }else{ speed = ((100/(1+MPP.client.channel._id!=="RP Room"*9))/(nps*v))*100}}else{speed=10};MPP.chat.send("Tempo: "+speed+"%")};break;
case "dbsave":{if(yomom.p.id==MPP.client.getOwnParticipant().id){saveParts()}};break;
case "dbload":{if(yomom.p.id==MPP.client.getOwnParticipant().id){getParts()}};break;
case "magnet": {cursorUpdate=0;var part = MPP.client.findParticipantById(yomom.p._id);MPP.client.sendArray([{m: "m", x: part.x, y: part.y }])};break;
case "unfollow": {var part=comRest(yomom.a);var found=[];var current=spart(part,true,1);
if(current !==undefined)
{found[found.length]=" "+current.name;allParts[current.id].f = 0;
blacklist[blacklist.length]=current._id;}
if(found.join().toString()!==""){MPP.chat.send("Unfollowing "+found+" ...")}else{MPP.chat.send("User not found.")}};break;
case "follow":
{
	var part=comRest(yomom.a),found=[],current={};
	var current = spart(part,true,0);if(current!==undefined){
	if(blacklist.indexOf(current._id)!==-1)
			{
				found[found.length]=" "+current.name;
				blacklist[blacklist.indexOf(current._id)]=undefined;
			}
	allParts[current.id].f = 1;}
	if(found.join().toString()!=="")
	{
		MPP.chat.send("Following "+found+" ...")
	}
	else
	{
	MPP.chat.send("User not found or user is already followed.")
	}
};break;
case "whois": {var part=comRest(yomom.a);var current = spart(part,true);if(current!==undefined){MPP.chat.send("Name: "+current.name+" Session id: "+current._id+" color: "+current.color+" id: "+current.id+" x: "+current.x+" y: "+current.y)}else{MPP.chat.send("Not found.")}};break;
case "help":case "?": {
if (getArgument(yomom.a,2)==""){
if(yomom.p.id==MPP.client.getOwnParticipant().id)MPP.chat.send("Admin only: \\console, \\remove <song>, \\userset <name>")
;
setTimeout(function(){MPP.chat.send("Auto playing & NoTurns: \\play [song], \\volume [volume], \\stop, \\octave, \\speed [tempo], \\pitch, \\delay [note delay], \\pos [seconds]") },1000);
setTimeout(function(){MPP.chat.send("Recording & hopping: \\startrecord, \\stoprecord, \\playrecord, \\follow [player], \\unfollow [player], \\ITball")
MPP.chat.send("Other: \\help [command], \\motd, \\about, \\voteupload, \\press <notes> <volume>, \\echo, \\megaphone, \\whois [player], \\ping, \\magnet, \\globalsendchat, \\msg")},2000);
}
else
{
switch(getArgument(yomom.a,2).toLowerCase())
{
case "play": {MPP.chat.send(".\\play <song_number> Plays song.")}
;break;
case "speed": {MPP.chat.send(".\\speed <speed> Sets the song playing speed. Optimal speed is 100.")}
;break;
case "stop": {MPP.chat.send(".\\stop Just stops playing song or recording")};break;
case "console": {MPP.chat.send(".\\console puts the commands into console")};break;
case "itball": {MPP.chat.send(".\\ITball is a smart answering ball with auto-learning system")};break;
case "megaphone": {MPP.chat.send(".\\megaphone Turns on or off repeating notes pressed on keyboard.")};break;
case "record":{MPP.chat.send(".\\startrecord Starts, \\stoprecord stops recording the keyboard notes.")};break;
case "about": {MPP.chat.send("Peripheral_Assassin's independent recording and playing music bot. Type \\help to see a list of commands")};break;
case "echo": {MPP.chat.send(".\\echo Turns on or off notifications about players.")};break;
case "motd": {MPP.chat.send(".\\motd shows message of the day.")};break;
case "voteupload":{MPP.chat.send(".\\voteupload allows you to vote for uploading my code.")};break;
case "pitch": {MPP.chat.send("Use \\pitch to set note offset while playing song or following notes.")};break;
case "delay": {MPP.chat.send("Type \\delay <ms> to set time between playing multiple notes.")};break;
case "follow": {MPP.chat.send("Type \\follow <nickname> to let me some information about you (notes)")};break;
case "unfollow": {MPP.chat.send("Type \\unfollow <nickname> to do not let me some information about you (notes)")};break;
case "volume": {MPP.chat.send(".\\volume <volume> Sets the song playing volume. Optimal volume is 1.")};break;

case "press": {MPP.chat.send(".\\press <notes> <volume> Plays simple note on the keyboard. Examples: cs5 1,a4 5,b3 10,g6 69.")};break;
default: {MPP.chat.send("No help for: "+JSON.stringify(getArgument(yomom.a,2)))};break;
}
}
}
;break;

case "volume":case "v": {var rd = comRest(yomom.a);if(rd!=="" && !(isNaN(rd/1)) && isFinite(rd/1)){if( rd=="mouseY"){snap = 1}else{if(nps*(speed/100)*rd>100<(100/(1+MPP.client.channel._id!=="RP Room"*9))){v = getArgument(yomom.a,2);snap = 0}else{v = (100/(1+MPP.client.channel._id!=="RP Room"*9))/(nps*(speed/100))}}};MPP.chat.send("Volume: "+v)};break;
case "press": {if(getArgument(yomom.a,3)==""){MPP.chat.send("Too few arguments. Use: \\press <note> <volume>")}else{tv = v;vo = getArgument(yomom.a,yomom.a.split(" ").length);v=vo;if(vo<101){var n = yomom.a.slice(6).split(" ");for(var u = 0;u<n.length+1;u++){MPP.press(n[u],1)};v = tv}else{MPP.chat.send('Too high volume. Type a number from 0 to 100')} } };break;

default: {MPP.chat.send("Unknown command. Type \\help for help")};break
}
}
else
	{
	if(false && (wBuffer[2]>Date.now()-40000)&&(yomom.a.indexOf("\'")==-1)&&(wBuffer[1].indexOf("\"")==-1)&&(yomom.a.indexOf("\"")==-1)&&(wBuffer[1].indexOf("\'")==-1)&&(yomom.a.indexOf("\\")==-1)&&(yomom.a.toLowerCase().indexOf("itball")==-1)&&(wBuffer[1].indexOf("\\")==-1))
		{
			if(!(ball[yomom.a]) && !(yomom.a in ball)){ball[wBuffer[1]]=yomom.a;
			addTextToFile("ITball","\nball[\'"+JSON.stringify(wBuffer[1])+"\']=\'"+JSON.stringify(yomom.a)+"\';")};
			var n = 0,w1 = yomom.a.split(" "),w2 = wBuffer[1].split(" ");
			while((w1.length>n)&&(w2.length>n))
			{
				if(!(ball[w1[n]])){ball[w1[n]]=w2[n];
				addTextToFile("ITball","\nball[\'"+w2[n]+"\']=\'"+w1[n]+"\';")};
				n++;
			}
		}
	if((yomom.a.indexOf("\\")==-1)&&(yomom.a.toLowerCase().indexOf("itball")==-1))
	{wBuffer[1]=yomom.a;
	wBuffer[2]=Date.now();};
	}
if(blacklist.indexOf(yomom.p.id)==-1)
{
	if(partsRecorded.indexOf(yomom.p.id)==-1)
	{
		partsRecorded[partsRecorded.length]=yomom.p.id;
		partsNotes[partsNotes.length]=
		{
			lastNote:Date.now(),
			p:MPP.client.findParticipantById(yomom.p).name,
			a:[],b:[],c:[],r:[]
		}
	};
};
	for(var l = 0;l<partsRecorded.length-1;l++)
	{
		if(MPP.client.findParticipantById(partsRecorded[l])==MPP.client.offlineParticipant && partsRecorded[l].indexOf("GROUP")==-1)
		{
			partsRecorded[l] = undefined;
			partsNotes[l] = undefined;
		};
		partsRecorded = partsRecorded.filter(function(a){return a});
		partsNotes = partsNotes.filter(function(a){return a});
	};
addPart(yomom.p);
};


MPP.client.on("participant removed", function(jomom) {if(echo==1)MPP.chat.send(jomom.name+" left the room")});
MPP.client.on("participant added", function(jomom) {addPart(jomom);
if(echo==1){MPP.chat.send("Welcome, "+jomom.name+". Type \\help to get my list of commands!")};participants[participants.length]=jomom._id });
MPP.client.on("participant update", function(jomom){addPart(jomom);allParts[jomom.id].name = jomom.name})
function rec(jomom) {
if(jomom.p == cping){MPP.chat.send("Ping: "+(Date.now()-jomom.t)+" ms.");cping = ""}
if(blacklist.indexOf(jomom.p)==-1)
{
	if(partsRecorded.indexOf(jomom.p)==-1)
	{
		partsRecorded[partsRecorded.length]=jomom.p;
		partsNotes[partsNotes.length]=
		{
			lastNote:jomom.t,
			p:MPP.client.findParticipantById(jomom.p).name,
			a:[],
			b:[],
			c:[],
			r:[]
		}
	};
	var delay = 0, delaykill = [0,0,0],lastd = 0,played = false, counterb = jomom.t-partsNotes[partsRecorded.indexOf(jomom.p)].lastNote, id = partsRecorded.indexOf(jomom.p);
	if(counterb>10000)
	{
		var wait=0;
		partsNotes.forEach(function(pn)
			{
			if(jomom.t-pn.lastNote>10000)
				{
					if(pn.a.length>250)
					{
							a=pn.a;
							b=pn.b;
							c=pn.c;
							r=pn.r;
							c[0]=0;
							var songname = "";
							if(partsRecorded[partsNotes.indexOf(pn)].indexOf("GROUP")!==-1)
							{songname = partsRecorded[partsNotes.indexOf(pn)]}
							else
							{songname = fixName(MPP.client.findParticipantById(partsRecorded[partsNotes.indexOf(pn)]).name)}
							addSong("MPP.record("+songname+")",exportSong());
							pn.a=[];
							pn.b=[];
							pn.c=[];
							pn.r=[]
					}
					else
					{
						pn.a=[];
						pn.b=[];
						pn.c=[];
						pn.r=[]
					}
				}
			}
	)};
	var gr = getGroup(jomom.p)
	if(gr!==-1)
	{
		var renew = jomom;
		renew.p="GROUP"+gr;
		return rec(renew)
	}
	for(var d = 0;d<jomom.n.length;d++)
	{
		if(jomom.n[d].s==undefined)
		{
			played = true;
			partsNotes[id].b[partsNotes[id].b.length]=jomom.n[d].v;
			partsNotes[id].a[partsNotes[id].a.length]=jomom.n[d].n;
			if(d>0)
			{
				if(jomom.n[d].d!==undefined)
				{
					lastd = jomom.n[d].d;
					delaykill[delaykill.length]=jomom.n[d].d
				}
				else
				{
					delaykill[delaykill.length]=delaykill[delaykill.length-1]
				}
			}
			delay=delaykill[delaykill.length-1]-delaykill[delaykill.length-2];
			partsNotes[id].c[partsNotes[id].c.length]=Math.round(counterb+delay);
			counterb=0;
			if(partsNotes[id].b[partsNotes[id].b.length-1]==undefined)
			{
				partsNotes[id].b[partsNotes[id].b.length-1]=1
			};
		}
		else  //nice job
		{
			var time = 0;
			for(var l = partsNotes[id].a.length-1;l>0;l--)
			{
				time+=partsNotes[id].c[l];
				if(partsNotes[id].a[l] == jomom.n[d].n)
				{
					partsNotes[id].r[l] = Math.round(time);
					l = 0;
				}
			}
		}
		if(played)
		{partsNotes[id].lastNote=jomom.t+lastd;}
	};
}
if(recording)
wn.push(jomom)
};

MPP.client.on("n", rec);
MPP.client.on("n", function(jomom) {if(megaphone==1 && blacklist.indexOf(jomom.p)==-1){if(MPP.client.noteBuffer.length>50 && warn == 1){MPP.chat.send("Note spam detected. Stopping...");megaphone=0}else{var delay = 0;var d = 0;playnbn(jomom.n,d,delay)}} })
MPP.client.on("a", function(yomom) {wazne(yomom)});
MPP.client.on("ls",function(ls){var rooms = "";for(var i in ls.u) {if(!ls.u.hasOwnProperty(i)) continue;if(clientOnRooms.indexOf(ls.u[i]._id)==-1){clientOnRooms.push(ls.u[i]._id);
clientArray.push(new Client("ws:multiplayerpiano.com:443"));
clientArray[clientArray.length-1].on("a",function(msg){
if(this.channel._id!==MPP.client.channel._id){var pmsg = msg;pmsg.p.name="["+this.channel._id+"] "+pmsg.p.name;MPP.chat.receive(pmsg)
if(msg.a[0]=="\\")
switch(msg.a.slice(1).split(" ")[0].toLowerCase()){
case "msg":{privateMessage(msg.a,msg.p.name)};break;
case "globalsendchat":case "gsc":{if(comRest(msg.a).indexOf("\\")==-1)gMessage(comRest(msg.a),msg.p.name)};break;
case "motd":{this.sendArray([{m: "a", message: motd}])};break
case "help":{this.sendArray([{m: "a", message: "Local commands: \\msg <room>| <message>, \\globalsendchat, \\gsc <message>, \\help. See room "+MPP.client.channel._id+" to get full list of commands."}])};break;

}
}
})
clientArray[clientArray.length-1].on("participant added", function(jomom) {addPart(jomom);allParts[jomom.id]._id = jomom._id});
clientArray[clientArray.length-1].on("participant update", function(jomom){addPart(jomom);allParts[jomom.id].name = jomom.name});
clientArray[clientArray.length-1].chatsend = function(msg){this.sendArray([{m: "a", message: msg}]);
}}
for(var c in clientArray){if(clientArray[c].isConnected()){clientArray[c].stop()};};
for(var c in clientArray){clientArray[c].setChannel(clientOnRooms[c]);clientArray[c].start();};
MPP.client.sendArray([{m: "-ls"}]);
setTimeout(function(){var connected = 0,number = clientArray.length,valid = 0;for(var c in clientArray){if(clientArray[c].isConnected())connected++;if(clientArray[c].channel)if(clientArray[c].channel._id==clientOnRooms[c])valid++};MPP.chat.send("Reloading clients: "+number+" loaded, "+connected+" connected, "+valid+" valid.")},10000)
}});

var speed = 100;var playing = 0;var v = 1;var i = -1;function st() {if (i<a.length && playing == 1){if(cfix==1 && c[i]>10000){c[i]=10000}setTimeout(function () {if(v>1){ultrapress(a[i],b[i]*v)}else{MPP.press(a[i],b[i]*v)};i++;st();{}},c[i]/speed*100)}else {playing = 0}};
function play(song){getSong(song);setTimeout(function(){if(songcode.length>50 || songcode!=="")
{i=0;sec=0;setTimeout(function(){eval(songcode);playprecise(song)},1000)}
else{remove("songs/"+song);MPP.chat.send("Critical error, file lost.");getSongList()}},500)

}
echo=0;
var wait = 100;var dmg = 0;var rdmg = 0;
function chordWow(){rdmg++;if(repeatkeys[rdmg]==undefined){rdmg=0;dmg++};if(dmg>6){dmg=0};MPP.press(repeatkeys[rdmg]+dmg);setTimeout(chordWow,wait)};
function clearChat(){MPP.client.sendArray([{m: "userset",set: {name: "\u3164".repeat(32)}}]);for(var y = 0;y<4;y++){MPP.chat.send("\u3164".repeat(512))}}
code="";
//file="ITball.txt";getFile();setTimeout(function(){eval(code)},2000);
function putNote(n,v,d){}
// pitch faller test: var test  = setInterval(function(){pitch = Math.round(MPP.client.getOwnParticipant().x/2-25)},100);
getParts();
