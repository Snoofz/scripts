// ==UserScript==
// @name      Bot
// @namespace  http://www.multiplayerpiano.com/
// @notice   This was originally made by electrashave. And furthermore edited by LoganNZL
// @Version 3.0
// @description  Modded Script For Multiplayerpiano.com
// @include http://www.multiplayerpiano.com/*
// @match http://www.multiplayerpiano.com/script.js
// @copyright  2013+
// ==/UserScript==
/* README
| toggles Echo
Backspace toggles Jump
End toggles Rolling on Multi-Octaves (mess around with it and you'll know what I mean)
insert/ins toggles Sustain
delete/del and home messes with recording (mess around with it to figure it out)
+ and - keys on numpad change volume
Up and down arrow keys mess with multi-octaves
left and right mess with echo/jump speed
Spacebar goes lower than capslock in octaves
alt goes higher than shift in octaves
~ goes higher than alt in octaves
Search for "Lcopy" and un comment that if you wish to copy others notes.

Invisible name "ï¿¼ï¿¼"
Names: à¹–Û£ÛœÊŸá´É¢Éªá´‡ à¹–Û£ÛœÊ™á´‡á´€Ê€
Names: à¹–Û£ÛœSnorkel à¹–Û£ÛœWarrior
Names: ãã‚³:å½¡ à¹–Û£ÛœSevant à¹–Squidly  *le slurrpy*
Names: â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ
Names: Íš ÍšÍš ÍšÍšÍš ÍšÍšÍšÍš ÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍšÍš ÍšÍšÍšÍšÍš ÍšÍšÍšÍš ÍšÍšÍš ÍšÍš Íš
Names: à¯µï¼¬ï¼¯ï¼§ï¼¡ï¼®ï¼Ï



List of friends and acquaintances' IDs: ... and beyonce //where does the apostrophe go!? NO ONE WILL EVER KNOW D:



//InfaRaven's ID: 4c7e39b4364a0fad6541e33a
//Ray's ID: 49a756bfb612c19588cf92c9 nom nom nom all your id are belong to me!
//AShortDude's ID:5b96f322a1653813edb24aad
//White Wolf (Formally known as the Swagster)'s ID: 21cd2eb5fb3e271c7f48fa94
//Square Enix's ID: b331e6b9d52cbbd54d0a8af7
//Fallout987's ID: e312b42da7f017a27e07d633
//Fake Oak's ID: 3fd5f256e227cc54f3a4b347
//Real Oak's ID: d7ba46192a01185c3692b9b6
//Flyken's ID: a2a712be5259af673214a7ee
//Slinky's ID: 055d6b2c103788e10e71ad11
//Cool mouse person: 2d3fb75535b9fd3244514bef
//Death's ID: 9a970aff2874f4d09cb616e8
//SuperKiddGaming2014's ID: ff0a8089468839b611979257
//qp's ID: ba1be5a4b713c6afb789d9a8
//Bot/Player1's: ID: 67f491cbc8762305b915e5bd
//Cecilia's ID: 3ea51c0ef9b6efe3a4c19138
//Ms.Bacon's ID: 9ffe4322798b29c0b42d18ae
//Master Piano (Peter)'s ID: 7383d882e9210f58b260ff61
//PVJFU The Bot/Human Beta's ID: 3eda8faee5b69cd757cb74ef
//Mr. Luke's ID: fbd57631778eac9b53b1edb2
//starseed orion's (Purple) ID: ca3d07ec4bc678a35093d61a
//starseed orion's (green) ID: 1d188aea6957bc8395a22dc8
//ste-art's ID: b480fa77bec1564fb2696166
//Brandan's Green ID: 216566dcb68e8c6477be0120
//Brandan's Blue ID:f21df3256d1b086463f6bfcd
//LoganNZL's ID: 3d84c124783d491385cee6bf
//Yoshify's ID: 4e28d8736f8a464ada652896
//electrashave's ID: 59dcad53d48a5ecf2e28bc5c (Blue)
//electrashave's ID: d2440a87cc0af1e33f439f13 (Green)
//Stevy's ID: 67d80d4c51a8ab5f138ac23b
//Unknown Person's ID: c90faf93080c97a3e6b4fe4a (was in here to begin with o_O)
//BEYONCE's ID: 481092855b0c0df062616620
//BEYONCE's NEW ID: 73c71215f664d64f0f7afbf4
//Blue Bears's ID: 27aecd90c67f5a59a9609ccc


//wary: 96f2d3a2a11f76ddff8f53ff

//Idiot who turned chat off: d19059a47b53ef73eb1c1c38

List of Banned players


//Smart cunt Anonymous Brown colour 05, Mar ID: 2d51728f9a4483f791f81873					|Reason: Rude cunt




List of piano sounds:
Bells:  Piano: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/Bells/" + key.note + ".wav", function () {
Soft Piano: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/216104606/" + key.note + ".mp3", function () {
Bright Piano: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/258840068/CustomSounds/Piano2/" + key.note + ".wav", function () {
Deep Piano: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/258840068/CustomSounds/Piano1/" + key.note + ".wav.wav", function () {
test: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/225456033/PianoNotes/" + key.note + ".wav.mp3", function () { //not working






*/

//name stuff


//middle_name = "LoganNZL";															//your name
//refresh_rate = 2100;//default 2100												//delay between 2 name change. Min: 2,1 sec
//defaultafktime = NaN;																// after x ms not moving your mouse you get away tag NaN disables. 600000 = 10 minutes
//notes_played = 0;																	//this should be 0. But feel free to get a head start :P






//end of name stuff

var octTemp = 1;
var susTemp = 2;
var rollTemp = 1;
var volume = 2;
var echoTemp = 1;
var delayTemp = 1;
var jumpTemp = 1;
var vol2 = undefined;
var brblist = [];						//unused
$(function () {

    var test_mode = (window.location.hash && window.location.hash.match(/^(?:#.+)*#test(?:#.+)*$/i));

    var gSeeOwnCursor = (window.location.hash && window.location.hash.match(/^(?:#.+)*#seeowncursor(?:#.+)*$/i));

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt /*, from*/ ) {
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

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (cb) {
        setTimeout(cb, 1000 / 30);
    };



    var DEFAULT_VELOCITY = 0.5;




    var TIMING_TARGET = 1000;




    // Utility

    ////////////////////////////////////////////////////////////////



    var Rect = function (x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.x2 = x + w;
        this.y2 = y + h;
    };
    Rect.prototype.contains = function (x, y) {
        return (x >= this.x && x <= this.x2 && y >= this.y && y <= this.y2);
    };




    // performing translation

    ////////////////////////////////////////////////////////////////

    var Translation = (function () {
        var strings = {
            "people are playing": {
                "pt": "pessoas estâˆšÂ£o jogando",
                "es": "personas estâˆšÂ°n jugando",
                "ru": "â€”Ã¡â€“Âµâ€“Âªâ€“Ã¦â€“â‰¤â€“Âµâ€“âˆ« â€“âˆâ€“â‰¥â€”Ã„â€“âˆžâ€“Âµâ€”Ã‡",
                "fr": "personnes jouent",
                "ja": "â€°âˆ«âˆ«â€žÃ…Ã¥ÃˆÃ…Ã¤â€žÃ‡Ã¬â€žÃ…ÃŸâ€žÃ…Ã‘â€žÃ‡Ã£",
                "de": "Leute spielen",
                "zh": "â€°âˆ«âˆ«Ã‹Â¢Â´ÃŠÃ¢Ã¬",
                "nl": "mensen spelen",
                "pl": "osâˆšâ‰¥b grajÆ’Ã–",
                "hu": "ember jâˆšÂ°tszik"
            },
            "New Room...": {
                "pt": "Nova Sala ...",
                "es": "Nueva sala de...",
                "ru": "â€“Ã¹â€“Ã¦â€“â‰¤â€”Ã£â€“Ï€ â€“Î©â€“Ã¦â€“Âºâ€“Âµâ€”Ã„...",
                "ja": "ÃŠÃ±âˆžâ€žÃ…Ã³â€žÃ…Ã‘ÃˆÃ‰Â®Ã‚Â±Ã£",
                "zh": "ÃŠÃ±âˆžÃŠÃ Ã¸ÃˆÃ³Â¥",
                "nl": "nieuwe Kamer",
                "hu": "âˆšâˆ«j szoba"
            },
            "room name": {
                "pt": "nome da sala",
                "es": "sala de nombre",
                "ru": "â€“Î©â€“âˆžâ€“âˆ‘â€“â‰¤â€“âˆžâ€“Î©â€“âˆâ€“Âµ â€“âˆ«â€“Ã¦â€“Âºâ€“Î©â€“âˆžâ€”Ã‡â€”Ã£",
                "fr": "nom de la chambre",
                "ja": "â€žÃ‰Â´â€žÃ‰Âºâ€žÃ‰â€ Ã‚ÃªÃ§",
                "de": "Raumnamen",
                "zh": "ÃŠÃ Ã¸ÃˆÃ³Â¥Ã‚ÃªÃ§ÃÃŸâˆž",
                "nl": "kamernaam",
                "pl": "nazwa pokâˆšâ‰¥j",
                "hu": "szoba neve"
            },
            "Visible (open to everyone)": {
                "pt": "Visâˆšâ‰ vel (aberto a todos)",
                "es": "Visible (abierto a todo el mundo)",
                "ru": "Visible (â€“Ã¦â€”Ã‡â€“âˆ«â€”Ã„â€”Ã£â€”Ã‡â€”Ã£â€“Ï€ â€“Â¥â€“Âªâ€”Ã¨ â€“â‰¤â€”Ã…â€“Âµâ€”Ã–)",
                "fr": "Visible (ouvert âˆšâ€  tous)",
                "ja": "ÃÃµÃ†â€žÃ…Â´Ã‹Â¶Ã£â€žÃ…Ã â€žÃ‡Ã£Ã”ÂºÃ Ã‹â„¢âˆžâ€žÃ…Â´â€žÃ…ÃŸâ€žÃ‡Ã‡ÃˆÃ±Ã£â€žÃ…Ã‘â€žÃ…Â¶â€žÃ…Ã‘â€žÃ‡Ã£Ã”ÂºÃ¢",
                "de": "Sichtbar (offen fâˆšÂºr alle)",
                "zh": "Ã‚Ã¨Ã˜Ã‹ÃŸÃ…Ã”ÂºÃ Ã‚ÃªÃ«ÃŠÃ¢Ã„ÃŠÃºÃ¢â€°âˆ«âˆ«Ã‚ÂºÃ„ÃŠÃ®Ã¦Ã”ÂºÃ¢",
                "nl": "Zichtbaar (open voor iedereen)",
                "pl": "Widoczne (otwarte dla wszystkich)",
                "hu": "LâˆšÂ°thatâˆšâ‰¥ (nyitott mindenki szâˆšÂ°mâˆšÂ°ra)"
            },
            "Enable Chat": {
                "pt": "Ativar bate-papo",
                "es": "Habilitar chat",
                "ru": "â€“Ã­â€“âˆ«â€“Âªâ€”Ã©â€”Ã¡â€“âˆâ€”Ã‡â€”Ã¥ â€”Ã¡â€“âˆžâ€”Ã‡",
                "fr": "Activer discuter",
                "ja": "â€žÃ‰Ã…â€žÃ‰Â£â€žÃ‰Ã‰â€žÃ‰Ã â€žÃ‡Ã­ÃŠÃºÃ¢Ã‚Ã¤Ï€â€žÃ…Â´â€žÃ…Ã´â€žÃ‡Ã£",
                "de": "aktivieren Sie chatten",
                "zh": "Ã‚ÃªÃ˜ÃÃ®Â®Ã‹Ã…Ã¤Ã‚Â§Â©",
                "nl": "Chat inschakelen",
                "pl": "Wâ‰ˆÃ‡Æ’Ã–cz czat",
                "hu": "a csevegâˆšÂ©st"
            }
            // todo: it, tr, th, sv, ar, fi, nb, da, sv, he, cs, ko, ro, vi, id, nb, el, sk, bg, lt, sl, hr
            // todo: Connecting, Offline mode, input placeholder, Notifications
        };

        var setLanguage = function (lang) {
            language = lang
        };

        var getLanguage = function () {
            if (window.navigator && navigator.language && navigator.language.length >= 2) {
                return navigator.language.substr(0, 2).toLowerCase();
            } else {
                return "en";
            }
        };

        var get = function (text, lang) {
            if (typeof lang === "undefined") lang = language;
            var row = strings[text];
            if (row == undefined) return text;
            var string = row[lang];
            if (string == undefined) return text;
            return string;
        };

        var perform = function (lang) {
            if (typeof lang === "undefined") lang = language;
            $(".translate").each(function (i, ele) {
                var th = $(this);
                if (ele.tagName && ele.tagName.toLowerCase() == "input") {
                    if (typeof ele.placeholder != "undefined") {
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

    var AudioEngine = function () {};

    AudioEngine.prototype.init = function (cb) {
        this.volume = 0.6;
        this.sounds = {};
        return this;
    };

    AudioEngine.prototype.load = function (id, url, cb) {};

    AudioEngine.prototype.play = function () {};

    AudioEngine.prototype.stop = function () {};

    AudioEngine.prototype.setVolume = function (vol) {
        this.volume = vol;
    };


    AudioEngineSM2 = function () {};

    AudioEngineSM2.prototype = new AudioEngine();

    AudioEngineSM2.prototype.init = function (cb) {
        AudioEngine.prototype.init.call(this);

        window.SM2_DEFER = true;
        var script = document.createElement("script");
        script.src = "/soundmanager2/soundmanager2.js";

        var loaded = false;
        script.onload = function () {
            if (loaded) return;
            if (typeof SoundManager === "undefined") {
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
            if (cb) soundManager.onready(cb);
        };
        setTimeout(script.onload, 4000);

        document.body.appendChild(script);
        return this;
    };

    AudioEngineSM2.prototype.load = function (id, url, cb) {
        this.sounds[id] = soundManager.createSound({
            id: id,
            url: url,
            autoLoad: true,
            volume: this.volume,
            onload: cb
        });
    };

    AudioEngineSM2.prototype.play = function (id, vol, delay_ms) {
        var self = this;
        setTimeout(function () {
            soundManager.play(id, {
                volume: self.volume * 100.0
            });
        }, delay_ms);
    };

    AudioEngineSM2.prototype.setVolume = function (vol) {
        AudioEngine.prototype.setVolume.call(this, vol);
        for (var i in this.sounds) {
            if (this.sounds.hasOwnProperty(i)) {
                this.sounds[i].setVolume(this.volume * 100.0);
            }
        }
    };


    AudioEngineWeb = function () {};

    AudioEngineWeb.prototype = new AudioEngine();

    AudioEngineWeb.prototype.init = function (cb) {
        AudioEngine.prototype.init.call(this);
        this.context = new AudioContext();
        this.gainNode = this.context.createGain();
        this.gainNode.connect(this.context.destination);
        this.gainNode.gain.value = this.volume;
        this.playings = {};
        if (cb) setTimeout(cb, 0);
        return this;
    };

    AudioEngineWeb.prototype.load = function (id, url, cb) {
        var audio = this;
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.responseType = "arraybuffer";
        req.addEventListener("readystatechange", function (evt) {
            if (req.readyState !== 4) return;
            try {
                audio.context.decodeAudioData(req.response, function (buffer) {
                    audio.sounds[id] = buffer;
                    if (cb) cb();
                });
            } catch (e) {
                /*throw new Error(e.message
+ " / id: " + id
+ " / url: " + url
+ " / status: " + req.status
+ " / ArrayBuffer: " + (req.response instanceof ArrayBuffer)
+ " / byteLength: " + (req.response && req.response.byteLength ? req.response.byteLength : "undefined"));*/
                new Notification({
                    id: "audio-download-error",
                    title: "Problem",
                    text: "For some reason, an audio download failed with a status of " + req.status + ". " + " I blame antivirus software.",
                    target: "#piano",
                    duration: 10000
                });
            }
        });
        req.send();
    };

    AudioEngineWeb.prototype.play = function (id, vol, delay_ms, part_id) {
        if (!this.sounds.hasOwnProperty(id)) return;
        var time = this.context.currentTime + (delay_ms / 1000);
        var source = this.context.createBufferSource();
        source.buffer = this.sounds[id];
        var gain = this.context.createGain();
        gain.gain.value = vol;
        source.connect(gain);
        gain.connect(this.gainNode);
        source.start(time);
        // Patch from ste-art remedies stuttering under heavy load
        if (this.playings[id]) {
            var playing = this.playings[id];
            playing.gain.gain.setValueAtTime(playing.gain.gain.value, time);
            playing.gain.gain.linearRampToValueAtTime(0.0, time + 0.5);
            playing.source.stop(time + 0.6);
        }
        this.playings[id] = {
            "source": source,
            "gain": gain,
            "part_id": part_id
        };
    };

    AudioEngineWeb.prototype.stop = function (id, delay_ms, part_id) {
        if (this.playings.hasOwnProperty(id) && this.playings[id] && this.playings[id].part_id === part_id) {
            var time = this.context.currentTime + (delay_ms / 1000);
            var gain = this.playings[id].gain.gain;
            gain.setValueAtTime(gain.value, time);
            gain.linearRampToValueAtTime(gain.value * 0.1, time + 0.16);
            gain.linearRampToValueAtTime(0.0, time + 1.9);
            this.playings[id].source.stop(time + 2.0);
            this.playings[id] = null;
        }
    };

    AudioEngineWeb.prototype.setVolume = function (vol) {
        AudioEngine.prototype.setVolume.call(this, vol);
        this.gainNode.gain.value = this.volume;
    };




    // VolumeSlider inst

    ////////////////////////////////////////////////////////////////

    var VolumeSlider = function (ele, cb) {
        this.rootElement = ele;
        this.cb = cb;
        var range = document.createElement("input");
        try {
            range.type = "range";
        } catch (e) {
            // hello, IE9
        }
        if (range.min !== undefined) {
            this.range = range;
            this.rootElement.appendChild(range);
            range.className = "volume-slider";
            range.min = "0.0";
            range.max = "1.0";
            range.step = "0.01";
            $(range).on("change", function (evt) {
                cb(range.value);
            });
        } else {
            if (window.console) console.log("warn: no slider");
            // todo
        }
    };

    VolumeSlider.prototype.set = function (v) {
        if (this.range !== undefined) {
            this.range.value = v;
        } else {
            // todo
        }
    };




    // Renderer classes

    ////////////////////////////////////////////////////////////////

    var Renderer = function () {};

    Renderer.prototype.init = function (piano) {
        this.piano = piano;
        this.resize();
        return this;
    };

    Renderer.prototype.resize = function (width, height) {
        if (typeof width == "undefined") width = $(this.piano.rootElement).width();
        if (typeof height == "undefined") height = Math.floor(width * 0.2);
        $(this.piano.rootElement).css({
            "height": height + "px",
            marginTop: Math.floor($(window).height() / 2 - height / 2) + "px"
        });
        this.width = width;
        this.height = height;
    };

    Renderer.prototype.visualize = function (key, color) {};




    var DOMRenderer = function () {
        Renderer.call(this);
    };

    DOMRenderer.prototype = new Renderer();

    DOMRenderer.prototype.init = function (piano) {
        // create keys in dom
        for (var i in piano.keys) {
            if (!piano.keys.hasOwnProperty(i)) continue;
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
        $(piano.rootElement).mousedown(function (event) {
            // todo: IE10 doesn't support the pointer-events css rule on the "blips"
            var ele = event.target;
            if ($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
                var key = piano.keys[ele.note];
                press(key.note);
                mouse_down = true;
                event.stopPropagation();
            };
            //event.preventDefault();
        });
        piano.rootElement.addEventListener("touchstart", function (event) {
            for (var i in event.changedTouches) {
                var ele = event.changedTouches[i].target;
                if ($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
                    var key = piano.keys[ele.note];
                    press(key.note);
                    mouse_down = true;
                    event.stopPropagation();
                }
            }
            //event.preventDefault();
        }, false);
        $(window).mouseup(function (event) {
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

    DOMRenderer.prototype.resize = function (width, height) {
        Renderer.prototype.resize.call(this, width, height);
    };

    DOMRenderer.prototype.visualize = function (key, color) {
        var k = $(key.domElement);
        k.addClass("play");
        setTimeout(function () {
            k.removeClass("play");
        }, 100);
        // "blips"
        var d = $('<div style="width:100%;height:10%;margin:0;padding:0">&nbsp;</div>');
        d.css("background", color);
        k.find("td").append(d);
        d.fadeOut(1000, function () {
            d.remove();
        });
    };




    var CanvasRenderer = function () {
        Renderer.call(this);
    };

    CanvasRenderer.prototype = new Renderer();

    CanvasRenderer.prototype.init = function (piano) {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        piano.rootElement.appendChild(this.canvas);

        Renderer.prototype.init.call(this, piano); // calls resize()

        // create render loop
        var self = this;
        var render = function () {
            self.redraw();
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);

        // add event listeners
        var mouse_down = false;
        var last_key = null;
        $(piano.rootElement).mousedown(function (event) {
            mouse_down = true;
            //event.stopPropagation();
            event.preventDefault();

            var pos = CanvasRenderer.translateMouseEvent(event);
            var hit = self.getHit(pos.x, pos.y);
            if (hit) {
                if (octTemp == 2 && rollTemp == 1) {
                    press(hit.key.baseNote + hit.key.octave, volume);
                    press(hit.key.baseNote + (hit.key.octave - 1), volume);
                } else if (octTemp == 3 && rollTemp == 1) {
                    press(hit.key.baseNote + hit.key.octave, volume);
                    press(hit.key.baseNote + (hit.key.octave - 1), volume);
                    press(hit.key.baseNote + (hit.key.octave + 1), volume);
                } else if (octTemp == 4 && rollTemp == 1) {
                    press(hit.key.baseNote + hit.key.octave, volume);
                    press(hit.key.baseNote + (hit.key.octave - 1), volume);
                    press(hit.key.baseNote + (hit.key.octave - 2), volume);
                    press(hit.key.baseNote + (hit.key.octave + 1), volume);
                } else if (octTemp == 5 && rollTemp == 1) {
                    press(hit.key.baseNote + hit.key.octave, volume);
                    press(hit.key.baseNote + (hit.key.octave - 1), volume);
                    press(hit.key.baseNote + (hit.key.octave - 2), volume);
                    press(hit.key.baseNote + (hit.key.octave + 1), volume);
                    press(hit.key.baseNote + (hit.key.octave + 2), volume);
                } else if (octTemp == 6 && rollTemp == 1) {
                    press(hit.key.baseNote + hit.key.octave, volume);
                    press(hit.key.baseNote + (hit.key.octave - 1), volume);
                    press(hit.key.baseNote + (hit.key.octave - 2), volume);
                    press(hit.key.baseNote + (hit.key.octave + 1), volume);
                    press(hit.key.baseNote + (hit.key.octave + 2), volume);
                    press(hit.key.baseNote + (hit.key.octave + 3), volume);
                } else if (octTemp == 2) {
                    setTimeout(function () {
                        press(hit.key.baseNote + hit.key.octave, volume);
                    }, 50);
                    press(hit.key.baseNote + (hit.key.octave - 1), volume);
                } else if (octTemp == 3) {
                    setTimeout(function () {
                        press(hit.key.baseNote + hit.key.octave, volume);
                    }, 50);
                    press(hit.key.baseNote + (hit.key.octave - 1), volume);
                    setTimeout(function () {
                        press(hit.key.baseNote + (hit.key.octave + 1), volume);
                    }, 100);
                } else if (octTemp == 4) {
                    setTimeout(function () {
                        press(hit.key.baseNote + hit.key.octave, volume);
                    }, 100);
                    setTimeout(function () {
                        press(hit.key.baseNote + (hit.key.octave - 1), volume);
                    }, 50);
                    press(hit.key.baseNote + (hit.key.octave - 2), volume);
                    setTimeout(function () {
                        press(hit.key.baseNote + (hit.key.octave + 1), volume);
                    }, 150);
                } else if (octTemp == 5) {
                    setTimeout(function () {
                        press(hit.key.baseNote + hit.key.octave, volume);
                    }, 100);
                    setTimeout(function () {
                        press(hit.key.baseNote + (hit.key.octave - 1), volume);
                    }, 50);
                    press(hit.key.baseNote + (hit.key.octave - 2), volume);
                    setTimeout(function () {
                        press(hit.key.baseNote + (hit.key.octave + 1), volume);
                    }, 150);
                    setTimeout(function () {
                        press(hit.key.baseNote + (hit.key.octave + 2), volume);
                    }, 200);
                } else if (octTemp == 1) {
                    press(hit.key.baseNote + hit.key.octave, volume);
                }
                last_key = hit.key;
            }
        });
        piano.rootElement.addEventListener("touchstart", function (event) {
            mouse_down = true;
            //event.stopPropagation();
            event.preventDefault();
            for (var i in event.changedTouches) {
                var pos = CanvasRenderer.translateMouseEvent(event);
                var hit = self.getHit(pos.x, pos.y);
                if (hit) {
                    last_key = hit.key;
                }
            }
        }, false);
        $(window).mouseup(function (event) {
            if (last_key) {
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

    CanvasRenderer.prototype.resize = function (width, height) {
        Renderer.prototype.resize.call(this, width, height);
        if (this.width < 52 * 2) this.width = 52 * 2;
        if (this.height < this.width * 0.2) this.height = Math.floor(this.width * 0.2);
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
        if (ctx.createLinearGradient) {
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
        if (ctx.createLinearGradient) {
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
        for (var j = 0; j < 2; j++) {
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
            if (sharp) {
                ctx.shadowOffsetX = this.keyMovement;
            } else {
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = -y + this.keyMovement;
            }
            for (var i in this.piano.keys) {
                if (!this.piano.keys.hasOwnProperty(i)) continue;
                var key = this.piano.keys[i];
                if (key.sharp != sharp) continue;

                if (key.sharp) {
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
        for (var i in this.piano.keys) {
            if (!this.piano.keys.hasOwnProperty(i)) continue;
            var key = this.piano.keys[i];
            if (key.sharp) {
                key.rect = new Rect(this.blackKeyOffset + this.whiteKeyWidth * key.spatial, 0,
                    this.blackKeyWidth, this.blackKeyHeight);
            } else {
                key.rect = new Rect(this.whiteKeyWidth * key.spatial, 0,
                    this.whiteKeyWidth, this.whiteKeyHeight);
            }
        }
    };

    CanvasRenderer.prototype.visualize = function (key, color) {
        key.timePlayed = Date.now();
        key.blips.push({
            "time": key.timePlayed,
            "color": color
        });
    };

    CanvasRenderer.prototype.redraw = function () {
        var now = Date.now();
        var timeLoadedEnd = now - 1000;
        var timePlayedEnd = now - 100;
        var timeBlipEnd = now - 1000;

        this.ctx.save();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // draw all keys
        for (var j = 0; j < 2; j++) {
            this.ctx.globalAlpha = 1.0;
            this.ctx.drawImage(this.shadowRender[j], 0, 0);
            var sharp = j ? true : false;
            for (var i in this.piano.keys) {
                if (!this.piano.keys.hasOwnProperty(i)) continue;
                var key = this.piano.keys[i];
                if (key.sharp != sharp) continue;

                if (!key.loaded) {
                    this.ctx.globalAlpha = 0.2;
                } else if (key.timeLoaded > timeLoadedEnd) {
                    this.ctx.globalAlpha = ((now - key.timeLoaded) / 1000) * 0.8 + 0.2;
                } else {
                    this.ctx.globalAlpha = 1.0;
                }
                var y = 0;
                if (key.timePlayed > timePlayedEnd) {
                    y = Math.floor(this.keyMovement - (((now - key.timePlayed) / 100) * this.keyMovement));
                }
                var x = Math.floor(key.sharp ? this.blackKeyOffset + this.whiteKeyWidth * key.spatial : this.whiteKeyWidth * key.spatial);
                var image = key.sharp ? this.blackKeyRender : this.whiteKeyRender;
                this.ctx.drawImage(image, x, y);

                // render blips
                if (key.blips.length) {
                    var alpha = this.ctx.globalAlpha;
                    var w, h;
                    if (key.sharp) {
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
                    for (var b = 0; b < key.blips.length; b++) {
                        var blip = key.blips[b];
                        if (blip.time > timeBlipEnd) {
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

    CanvasRenderer.prototype.getHit = function (x, y) {
        for (var j = 0; j < 2; j++) {
            var sharp = j ? false : true; // black keys first
            for (var i in this.piano.keys) {
                if (!this.piano.keys.hasOwnProperty(i)) continue;
                var key = this.piano.keys[i];
                if (key.sharp != sharp) continue;
                if (key.rect.contains(x, y)) {
                    var v = y / (key.sharp ? this.blackKeyHeight : this.whiteKeyHeight);
                    v += 0.25;
                    v *= DEFAULT_VELOCITY;
                    if (v > 1.0) v = 1.0;
                    return {
                        "key": key,
                        "v": v
                    };
                }
            }
        }
        return null;
    };


    CanvasRenderer.isSupported = function () {
        var canvas = document.createElement("canvas");
        return !!(canvas.getContext && canvas.getContext("2d"));
    };

    CanvasRenderer.translateMouseEvent = function (evt) {
        var element = evt.target;
        var offx = 0;
        var offy = 0;
        do {
            offx += element.offsetLeft;
            offy += element.offsetTop;
        } while (element = element.offsetParent);
        return {
            x: evt.pageX - offx,
            y: evt.pageY - offy
        }
    };




    // Pianoctor

    ////////////////////////////////////////////////////////////////

    var PianoKey = function (note, octave) {
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

    var Piano = function (rootElement) {

        var piano = this;
        piano.rootElement = rootElement;
        piano.keys = {};

        var white_spatial = 0;
        var black_spatial = 0;
        var black_it = 0;
        var black_lut = [2, 1, 2, 1, 1];
        var addKey = function (note, octave) {
            var key = new PianoKey(note, octave);
            piano.keys[key.note] = key;
            if (key.sharp) {
                key.spatial = black_spatial;
                black_spatial += black_lut[black_it % 5];
                ++black_it;
            } else {
                key.spatial = white_spatial;
                ++white_spatial;
            }
        }
        if (test_mode) {
            addKey("c", 2);
        } else {
            addKey("a", -1);
            addKey("as", -1);
            addKey("b", -1);
            var notes = "c cs d ds e f fs g gs a as b".split(" ");
            for (var oct = 0; oct < 7; oct++) {
                for (var i in notes) {
                    addKey(notes[i], oct);
                }
            }
            addKey("c", 7);
        }


        var render_engine = CanvasRenderer.isSupported() ? CanvasRenderer : DOMRenderer;
        this.renderer = new render_engine().init(this);

        $(window).resize(function () {
            piano.renderer.resize();
        });


        window.AudioContext = window.AudioContext || window.webkitAudioContext || undefined;
        var audio_engine = (window.AudioContext === undefined) ? AudioEngineSM2 : AudioEngineWeb;

        // Firefox 25 supports WebAudio, but a decodeAudioData issue is blocking until 26
        // https://bugzilla.mozilla.org/show_bug.cgi?id=865553
        var search_str = " Firefox/";
        var idx = navigator.userAgent.indexOf(search_str);
        if (idx !== -1) {
            var version = parseFloat(navigator.userAgent.substring(idx + search_str.length));
            if (isNaN(version) || version < 26.0) {
                audio_engine = AudioEngineSM2;
            }
        }

        this.audio = new audio_engine().init(function () {
            for (var i in piano.keys) {
                if (!piano.keys.hasOwnProperty(i)) continue;
                (function () {
                    var key = piano.keys[i];
                    piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/258840068/CustomSounds/Piano2/" + key.note + ".wav", function () {			//Lsounds
                        key.loaded = true;
                        key.timeLoaded = Date.now();
                        if (key.domElement) // todo: move this to renderer somehow
                            $(key.domElement).removeClass("loading");
                    });
                })();
            }
        });
    };

    Piano.prototype.play = function (note, vol, participant, delay_ms) {
        if (!this.keys.hasOwnProperty(note)) return;
        var key = this.keys[note];
        /*if(gMidiLoaded) {
var n_n = midiBridge.getNoteNumber("c", 2);
midiBridge.sendMidiEvent(midiBridge.NOTE_ON, 1, n_n, 100);
midiBridge.sendMidiEvent(midiBridge.NOTE_OFF, 1, n_n, 100);
}*/
        if (key.loaded) this.audio.play(key.note, vol, delay_ms, participant.id);
        var self = this;
        var jq_namediv = $(typeof participant == "undefined" ? null : participant.nameDiv);
        if (jq_namediv) {
            setTimeout(function () {
                self.renderer.visualize(key, typeof participant == "undefined" ? "yellow" : (participant.color || "#777"));
                jq_namediv.addClass("play");
                setTimeout(function () {
                    jq_namediv.removeClass("play");
                }, 30);
            }, delay_ms);
        }
    };

    Piano.prototype.stop = function (note, participant, delay_ms) {
        if (!this.keys.hasOwnProperty(note)) return;
        var key = this.keys[note];
        if (key.loaded) this.audio.stop(key.note, delay_ms, participant.id);
    };

    var gPiano = new Piano(document.getElementById("piano"));




    var gAutoSustain = true; //!(window.location.hash && window.location.hash.match(/^(?:#.+)*#sustain(?:#.+)*$/));
    var gSustain = false;

    var gHeldNotes = {};
    var gSustainedNotes = {};


    function press(id, vol) {
        if (!gClient.preventsPlaying()) {
            if (recordingTime != 0) {
                recording[recordIndex] = id;
                recordingVolume[recordIndex] = 1;
                times[recordIndex++] = new Date().getTime() - recordingTime;
            }
            if (echo) {
                setTimeout(function () {																		//Add extra echos here
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos);
                setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 2);
                setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 3);																						//4 echos
				/*setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 4);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 5);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 6);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 7);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 8);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					////notes_played+=1;
                }, echos * 9);																						//10 echos
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 10);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 11);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 12);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 13);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 14);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 15);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 16);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 17);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 18);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 19);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 20);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 21);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 22);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 23);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 24);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 25);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 26);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 27);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 28);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 29);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 30);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 31);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 32);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 33);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 34);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 35);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 36);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 37);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 38);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 39);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 40);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 41);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 42);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 43);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 44);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 45);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 46);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 47);

			setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 48);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 49);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 50);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 51);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 52);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 53);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 54);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 55);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 56);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 57);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 58);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 59);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 60);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 61);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 62);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 63);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 64);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 65);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 66);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 67);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 68);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 69);
				setTimeout(function () {
                    vol /= 0;
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					//notes_played+=1;
                }, echos * 70);
            } else if (jump) {
                setTimeout(function () {
                    var reg = /\d+/;

                    var notes = id.replace(reg, "");
                    id = notes + (parseInt(id.substring(notes.length)) + 1);
                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
                    gClient.startNote(id, vol);
					////notes_played+=1;
                }, echos);*/
            }
            gHeldNotes[id] = true;
            gSustainedNotes[id] = true;
            gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
            gClient.startNote(id, vol);
			////notes_played+=1;
        }
    }

    function release(id) {
        if (gHeldNotes[id]) {
            gHeldNotes[id] = false;
            if (gAutoSustain || gSustain) {
                gSustainedNotes[id] = true;
            } else {
                if (gNoteQuota.spend(0)) {
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
        if (!gAutoSustain) {
            for (var id in gSustainedNotes) {
                if (gSustainedNotes.hasOwnProperty(id) && gSustainedNotes[id] && !gHeldNotes[id]) {
                    if (gNoteQuota.spend(0)) {
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
    if (channel_id.substr(0, 1) == "/") channel_id = channel_id.substr(1);
    if (channel_id == "") channel_id = "lobby";

    var gClient = new Client("ws://" + window.location.host);
    gClient.setChannel(channel_id);
    gClient.start();


    // Setting status
    (function () {
        gClient.on("status", function (status) {
            $("#status").text(status);
        });
        gClient.on("count", function (count) {
            if (count > 0) {
                $("#status").html('<span class="number">' + count + '</span> ' + (count == 1 ? 'person is' : 'people are') + ' playing');
                document.title = "Piano (" + count + ")";
            } else {
                document.title = "Multiplayer Piano";
            }
        });
    })();

    // Handle changes to participants
    (function () {
        gClient.on("participant added", function (part) {

            part.displayX = 150;
            part.displayY = 50;

            // add nameDiv
            var div = document.createElement("div");
            div.className = "name";
            div.participantId = part.id;
            div.textContent = part.name || "";
            div.style.backgroundColor = part.color || "#777";
            if (gClient.participantId === part.id) {
                $(div).addClass("me");
            }
            if (gClient.channel && gClient.channel.crown && gClient.channel.crown.participantId === part.id) {
                $(div).addClass("owner");
            }
            if (gPianoMutes.indexOf(part._id) !== -1) {
                $(part.nameDiv).addClass("muted-notes");
            }
            if (gChatMutes.indexOf(part._id) !== -1) {
                $(part.nameDiv).addClass("muted-chat");
            }
            div.style.display = "none";
            part.nameDiv = $("#names")[0].appendChild(div);
            $(part.nameDiv).fadeIn(2000);

            // sort names
            var arr = $("#names .name");
            arr.sort(function (a, b) {
                a = a.style.backgroundColor; // todo: sort based on user id instead
                b = b.style.backgroundColor;
                if (a > b) return 1;
                else if (a < b) return -1;
                else return 0;
            });
            $("#names").html(arr);

            // add cursorDiv
            if (gClient.participantId !== part.id || gSeeOwnCursor) {
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
        gClient.on("participant removed", function (part) {
            // remove nameDiv
            var nd = $(part.nameDiv);
            var cd = $(part.cursorDiv);
            cd.fadeOut(2000);
            nd.fadeOut(2000, function () {
                nd.remove();
                cd.remove();
                part.nameDiv = undefined;
                part.cursorDiv = undefined;
            });
        });
        gClient.on("participant update", function (part) {
            var name = part.name || "";
            var color = part.color || "#777";
            part.nameDiv.style.backgroundColor = color;
            part.nameDiv.textContent = name;
            $(part.cursorDiv)
                .find(".name")
                .text(name)
                .css("background-color", color);
        });
        gClient.on("ch", function (msg) {
            for (var id in gClient.ppl) {
                if (gClient.ppl.hasOwnProperty(id)) {
                    var part = gClient.ppl[id];
                    if (part.id === gClient.participantId) {
                        $(part.nameDiv).addClass("me");
                    } else {
                        $(part.nameDiv).removeClass("me");
                    }
                    if (msg.ch.crown && msg.ch.crown.participantId === part.id) {
                        $(part.nameDiv).addClass("owner");
                        $(part.cursorDiv).addClass("owner");
                    } else {
                        $(part.nameDiv).removeClass("owner");
                        $(part.cursorDiv).removeClass("owner");
                    }
                    if (gPianoMutes.indexOf(part._id) !== -1) {
                        $(part.nameDiv).addClass("muted-notes");
                    } else {
                        $(part.nameDiv).removeClass("muted-notes");
                    }
                    if (gChatMutes.indexOf(part._id) !== -1) {
                        $(part.nameDiv).addClass("muted-chat");
                    } else {
                        $(part.nameDiv).removeClass("muted-chat");
                    }
                }
            }
        });
    })();


    // Handle changes to crown
    (function () {
        var jqcrown = $('<div id="crown"></div>').appendTo(document.body).hide();
        var jqcountdown = $('<span></span>').appendTo(jqcrown);
        var countdown_interval;
        jqcrown.click(function () {
            gClient.sendArray([{
                m: "chown",
                id: gClient.participantId
            }]);
        });
        gClient.on("ch", function (msg) {
            if (msg.ch.crown) {
                var crown = msg.ch.crown;
                if (!crown.participantId || !gClient.ppl[crown.participantId]) {
                    var land_time = crown.time + 2000 - gClient.serverTimeOffset;
                    var avail_time = crown.time + 15000 - gClient.serverTimeOffset;
                    jqcountdown.text("");
                    jqcrown.show();
                    if (land_time - Date.now() <= 0) {
                        jqcrown.css({
                            "left": crown.endPos.x + "%",
                            "top": crown.endPos.y + "%"
                        });
                    } else {
                        jqcrown.css({
                            "left": crown.startPos.x + "%",
                            "top": crown.startPos.y + "%"
                        });
                        jqcrown.addClass("spin");
                        jqcrown.animate({
                            "left": crown.endPos.x + "%",
                            "top": crown.endPos.y + "%"
                        }, 2000, "linear", function () {
                            jqcrown.removeClass("spin");
                        });
                    }
                    clearInterval(countdown_interval);
                    countdown_interval = setInterval(function () {
                        var time = Date.now();
                        if (time >= land_time) {
                            var ms = avail_time - time;
                            if (ms > 0) {
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
        gClient.on("disconnect", function () {
            jqcrown.fadeOut(2000);
        });
    })();


    // Copying notes								//Lcopy																//check this out
    /*gClient.on("n", function(msg) {
var t = msg.t - gClient.serverTimeOffset + TIMING_TARGET - Date.now();
		var participant = gClient.findParticipantById(msg.p);
		for(var i = 0; i < msg.n.length; i++) {
			var note = msg.n[i];
            var octave = parseInt(note.n.replace( /[^\d.]/, '').replace('s', ''));
			var note1 = note.n.replace(/[0-9]/g, '').replace("-", "");
			var ms = t + (note.d || 0);
			if(ms < 0) {
				ms = 0;
			}
			else if(ms > 10000) continue;
			if(note.s) {
				//gPiano.stop(note.n, participant, ms);
			} else {
				var vel = (typeof note.v !== "undefined")? parseFloat(note.v) : 0.4;
				if(vel < 0) vel = 0; else if (vel > 1) vel = 1;
				gPiano.play(note.n, vel, participant, ms);								//sends other's notes
                press(note1 + (octave +1), vel);
			}
		}
        });*/

	//playing notes
	gClient.on("n", function (msg) {
        var t = msg.t - gClient.serverTimeOffset + TIMING_TARGET - Date.now();
        var participant = gClient.findParticipantById(msg.p);
        if (gPianoMutes.indexOf(participant._id) !== -1)
            return;
        for (var i = 0; i < msg.n.length; i++) {
            var note = msg.n[i];
            var ms = t + (note.d || 0);
            if (ms < 0) {
                ms = 0;
            } else if (ms > 10000) continue;
            if (note.s) {
                gPiano.stop(note.n, participant, ms);
            } else {																					//much 1337, such skill
                var vel = (typeof note.v !== "undefined") ? parseFloat(note.v) : DEFAULT_VELOCITY;
                if (vel < 0) vel = 0;
                else if (vel > 1) vel = 1;
                gPiano.play(note.n, vel, participant, ms);
            }
        }
    });

    // Send cursor updates
    var mx = 0, last_mx = -10, my = 0, last_my = -10;
    	currentafktime = 0;
	setInterval(function() {
        currentafktime+=50;
		if(Math.abs(mx - last_mx) > 0.1 || Math.abs(my - last_my) > 0.1) {
			last_mx = mx;
			last_my = my;
			gClient.sendArray([{m: "m", x: mx, y: my}]);
            /*afk = 0;
			currentafktime = 0;
		}
        		if (currentafktime>defaultafktime) {			//timer and counter
			afk = 1;*/
		}
	}, 50);
	$(document).mousemove(function(event) {
		mx = ((event.pageX / $(window).width()) * 100).toFixed(2);
		my = ((event.pageY / $(window).height()) * 100).toFixed(2);
	});

    // Animate cursors
    setInterval(function () {
        for (var id in gClient.ppl) {
            if (!gClient.ppl.hasOwnProperty(id)) continue;
            var part = gClient.ppl[id];
            if (part.cursorDiv && (Math.abs(part.x - part.displayX) > 0.1 || Math.abs(part.y - part.displayY) > 0.1)) {
                part.displayX += (part.x - part.displayX) * 0.75;
                part.displayY += (part.y - part.displayY) * 0.75;
                part.cursorDiv.style.left = part.displayX + "%";
                part.cursorDiv.style.top = part.displayY + "%";
            }
        }
    }, 50);


    // Room settings button
    (function () {
        gClient.on("ch", function (msg) {
            if (gClient.isOwner()) {
                $("#room-settings-btn").show();
            } else {
                $("#room-settings-btn").hide();
            }
        });
        $("#room-settings-btn").click(function (evt) {												//room settings button
            if (gClient.channel && gClient.isOwner()) {
                var settings = gClient.channel.settings;
                openModal("#room-settings");
                setTimeout(function () {
                    $("#room-settings .checkbox[name=visible]").prop("checked", settings.visible);
                    $("#room-settings .checkbox[name=chat]").prop("checked", settings.chat);
                    $("#room-settings .checkbox[name=crownsolo]").prop("checked", settings.crownsolo);
                }, 100);
            }
        });
        $("#room-settings .submit").click(function () {
            var settings = {
                visible: $("#room-settings .checkbox[name=visible]").is(":checked"),
                chat: $("#room-settings .checkbox[name=chat]").is(":checked"),
                crownsolo: $("#room-settings .checkbox[name=crownsolo]").is(":checked")
            };
            gClient.sendArray([{
                m: "chset",
                set: settings
            }]);
            closeModal();
        });
        $("#room-settings .drop-crown").click(function () {
            gClient.sendArray([{
                m: "chown"
            }]);
            closeModal();
        });
    })();

    // Handle notifications
    gClient.on("notification", function (msg) {
        new Notification(msg);
    });

    // Don't foget spin
    gClient.on("ch", function (msg) {
        var chidlo = msg.ch._id.toLowerCase();
        if (chidlo === "spin" || chidlo.substr(-5) === "/spin") {
            $("#piano").addClass("spin");
        } else {
            $("#piano").removeClass("spin");
        }
    });

    // Test channel for stopNote
    /*gClient.on("ch", function(msg) {
if(msg.ch._id.match(/^test\/sustain(?:\/.*)?$/)) {
gAutoSustain = false;
} else {
gAutoSustain = !(window.location.hash && window.location.hash.match(/^(?:#.+)*#sustain(?:#.+)*$/))
}
});*/

    // Crownsolo notice
    gClient.on("ch", function (msg) {
        if (msg.ch.settings.crownsolo) {
            if ($("#crownsolo-notice").length == 0) {
                $('<div id="crownsolo-notice">').text('This room is set to "only the owner can play."').appendTo("body").fadeIn(1000);
            }
        } else {
            $("#crownsolo-notice").remove();
        }
    });
    gClient.on("disconnect", function () {
        $("#crownsolo-notice").remove();
    });



    var gPianoMutes = [];

    var gChatMutes = [];


																														//name and note trackers
		/*setTimeout(function() {
        //$("#chat ul").css("text-shadow","-1.2px 0 black, 0 1.2px black, 1.2px 0 black, 0 -1.2px black"); //adds black outline
        //document.body.style.background = '#DBFFDE';			//background colour, Logan
        afk = 0;
        		var sec = 0;
            	function submit(newname) {
			var set = {name: newname,color: "nouse"};
			gClient.sendArray([{m: "userset", set: set}]);
				};
        sec = 0;
        	setInterval(function() {


		nowafktime = Math.round(currentafktime - defaultafktime)/1000;
                var a_min = Math.floor(nowafktime/60);
                var a_g_szek = Math.round(nowafktime-a_min*60);
                var a_szek = (a_g_szek>=10)?a_g_szek:"0"+a_g_szek;
                var a_kiir = (a_min>0)?a_min+"m"+a_szek+"s":a_szek+"s";



                var min = Math.floor(sec/60);
                var g_szek = Math.round(sec-min*60);
                var szek = (g_szek>=10)?g_szek:"0"+g_szek;
                var kiir = (min>0)?min+"m"+szek+"s":szek+"s";


                var out_afk = (afk==1)?"AFK:"+a_kiir+"":"";
               submit("â™‚ "+kiir+" â™¥ "+out_afk+" "+middle_name+" â™¥ "+notes_played+" notes" + " â™‚");
                sec+=Math.max((refresh_rate/1000),2.1);
                }, Math.max(refresh_rate,2100));

    }, 2500);	*/																										//name and note trackers




    var volume_slider = new VolumeSlider(document.getElementById("volume"), function (v) {
        gPiano.audio.setVolume(v);
        if (window.localStorage) localStorage.volume = v;
    });
    volume_slider.set(gPiano.audio.volume);

    var Note = function (note, octave) {
        this.note = note;
        this.octave = octave || 0;
    };



    var n = function (a, b) {
        return {
            note: new Note(a, b),
            held: false
        };
    };
    var key_binding = {									//Logan, these are the keys on the piano
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

    var capsLockKey = false;							//here are some settings, Logan
    var gSustain = false;
    var keys = [];
    var volTemp = 1;
    var echos = 200;									//amount of echos
    var echo = false;
    var jump = false;

    var recordingTime = 0;
    var playbackTaskID = 0;
    var playbackLength = 1000;
    var recording = [];
    var recordingVolume = [];
    var times = [];
    var recordIndex = 0;
    var playing = false;
    var playTaskIDs = [];

    function handleKeyDown(evt) {


        var key = evt.keyCode;
        keys[key] = true;


        // volume changing
        if (keys[107]) {
            if (volTemp > 9) {
                volTemp = 10;
            } else {
                volTemp = volTemp + 1;
            }
        } else if (keys[109]) {
            if (volTemp < -9) {
                voltemp = 10;
            } else {
                volTemp = volTemp - 1;
            }
        }
        if (keys[107]) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Note Volume",
                    text: "Volume: " + volTemp,
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            if (volume > 1.9) {
                volume = 2;
            } else {
                volume = volume + 0.1;
            }
        } else if (keys[109]) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Note Volume",
                    text: "Volume: " + volTemp,
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            if (volume < 0.2) {
                volume = 0.1;
            } else {
                volume = volume - 0.1;
            }
        }
        // multi-octave toggling
        if (keys[38]) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Level",
                    text: "You are on level " + octTemp + " of the multi-note",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            if (octTemp > 4) {
                octTemp = 5;
            } else
                octTemp = octTemp + 1;
        } else if (keys[40]) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Level",
                    text: "You are on level " + octTemp + " of the multi-note",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            if (octTemp < 2) {
                octTemp = 1;
            } else
                octTemp = octTemp - 1;;
        }
        // roll toggling
        if (keys[35] && rollTemp == 2) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Roll",
                    text: "Roll is OFF",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            rollTemp = 1;
        } else if (keys[35] && rollTemp == 1) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Roll",
                    text: "Roll is ON",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            rollTemp = 2;
        }
        // sustain toggling
        if (keys[45] && susTemp == 2) {
			susSet = "OFF";
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Sustain",
                    text: "Sustain is ON",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            susTemp = 1;
        } else if (keys[45] && susTemp == 1) {
		susSet = "ON";
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Sustain",
                    text: "Sustain is OFF",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            susTemp = 2;
        }
		if (susTemp == 2) {
            gAutoSustain = false;
        } else if (susTemp == 1) {
            gAutoSustain = true;
        }
        // piano moddifications
        var code = parseInt(evt.keyCode);
        if (echoTemp == 2 && code == 220) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Echo",
                    text: "Echo is OFF",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            echoTemp = 1;
        } else if (echoTemp == 1 && code == 220) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Echo",
                    text: "Echo is ON",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            echoTemp = 2;
        }
        if (jumpTemp == 2 && code == 8) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Jump",
                    text: "Jump is OFF",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            jumpTemp = 1;
        } else if (jumpTemp == 1 && code == 8) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Jump",
                    text: "Jump is ON",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            jumpTemp = 2;
        }
        if (volume > 5) {
            volume = 5;
        }
        if (code == 220) {
            echo = !echo;
        } else if (code == 8) {
            jump = !jump;
        } else if (code == 39) {
            if (delayTemp > 6) {
                delayTemp == 7;
            } else {
                delayTemp = delayTemp + 1;
            }
            if (echos > 0) {		//300
                echos = 0;		//350
            } else {
                echos = echos + 0;		//50
            }
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Echo/Jump Level",
                    text: "Echo/Jump delay level: " + delayTemp,
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
        } else if (code == 37) {
            if (delayTemp < 2) {
                delayTemp == 1;
            } else {
                delayTemp = delayTemp - 1;
            }
            echos = Math.max(50, echos - 50);
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Echo/Jump Level",
                    text: "Echo/Jump delay level: " + delayTemp,
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
        }
        if (code == 46) {
            playing = false;
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Recording",
                    text: "Now Recording",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            if (recordingTime == 0) {
                recording = [];
                recordingVolume = [];
                times = [];
                recordIndex = 0;
                recordingTime = new Date().getTime();
            } else {
                playbackLength = new Date().getTime() - recordingTime;
                recordingTime = 0;
            }
        } else if (code == 36) {
            playing = !playing;
            recordingTime = 0;
            clearInterval(playbackTaskID);
            //console.log(playTaskIDs);				//comment out if spamming
            for (var i = 0; i < playTaskIDs.length; i++) {
                clearTimeout(playTaskIDs[i]);
                //console.log(i);					//commented out because it's spamming
                window.gTest = setTimeout(function () {
                    window.gTest = new Notification({
                        title: "Playback",
                        text: "Starting/Stopping",
                        target: "#midi-btn",
                        duration: 1000
                    });
                }, 1);
            }
            playTaskIDs = [];
            if (playing) {
                anonFunc = function (i) {
                    press(recording[i], recordingVolume[i]);
                }
                for (var i = 0; i < recording.length; i++) {
                    playTaskIDs[i] = setTimeout(anonFunc, times[i], i);
                    window.gTest = setTimeout(function () {
                        window.gTest = new Notification({
                            title: "Playback",
                            text: "Starting/Stopping",
                            target: "#midi-btn",
                            duration: 1000
                        });
                    }, 1);
                }

            }
        }
        if (key_binding[code] !== undefined) {
            var binding = key_binding[code];
            if (!binding.held) {
                binding.held = true;
                if (gNoteQuota.spend(0)) {
                    var note = binding.note;
                    var octave = 1 + note.octave;
                    // extra octaves
                    if (keys[16])++octave;
                    else if (keys[32])--octave == --octave + -octave;
                    else if (keys[18])++octave == ++octave + +octave;
                    else if (keys[192])++octave == ++octave + ++octave;
                    else if (capsLockKey)--octave;
                    var note = note.note;
                    var vol = volume;
                    // octave adding
                    if (volume > 5) {
                        volume = 5;
                    }
                    if (octTemp == 2 && rollTemp == 1) {
                        press(note + octave, vol);
                        press(note + (octave - 1), vol);
                    } else if (octTemp == 3 && rollTemp == 1) {
                        press(note + octave, vol);
                        press(note + (octave - 1), vol);
                        press(note + (octave + 1), vol);
                    } else if (octTemp == 4 && rollTemp == 1) {
                        press(note + octave, vol);
                        press(note + (octave - 1), vol);
                        press(note + (octave - 2), vol);
                        press(note + (octave + 1), vol);
                    } else if (octTemp == 5 && rollTemp == 1) {
                        press(note + octave, vol);
                        press(note + (octave - 1), vol);
                        press(note + (octave - 2), vol);
                        press(note + (octave + 1), vol);
                        press(note + (octave + 2), vol);
                    } else if (octTemp == 6 && rollTemp == 1) {
                        press(note + octave, vol);
                        press(note + (octave - 1), vol);
                        press(note + (octave - 2), vol);
                        press(note + (octave + 1), vol);
                        press(note + (octave + 2), vol);
                        press(note + (octave + 3), vol);
                    } else if (octTemp == 2) {
                        setTimeout(function () {
                            press(note + octave, vol);
                        }, 50);
                        press(note + (octave - 1), vol);
                    } else if (octTemp == 3) {
                        setTimeout(function () {
                            press(note + octave, vol);
                        }, 50);
                        press(note + (octave - 1), vol);
                        setTimeout(function () {
                            press(note + (octave + 1), vol);
                        }, 100);
                    } else if (octTemp == 4) {
                        setTimeout(function () {
                            press(note + octave, vol);
                        }, 100);
                        setTimeout(function () {
                            press(note + (octave - 1), vol);
                        }, 50);
                        press(note + (octave - 2), vol);
                        setTimeout(function () {
                            press(note + (octave + 1), vol);
                        }, 150);
                    } else if (octTemp == 5) {
                        setTimeout(function () {
                            press(note + octave, vol);
                        }, 100);
                        setTimeout(function () {
                            press(note + (octave - 1), vol);
                        }, 50);
                        press(note + (octave - 2), vol);
                        setTimeout(function () {
                            press(note + (octave + 1), vol);
                        }, 150);
                        setTimeout(function () {
                            press(note + (octave + 2), vol);
                        }, 200);
                    } else if (octTemp == 1) {
                        press(note + octave, vol);
                    }

                }
            }

            if (++gKeyboardSeq == 3) {
                gKnowsYouCanUseKeyboard = true;
                if (window.gKnowsYouCanUseKeyboardTimeout) clearTimeout(gKnowsYouCanUseKeyboardTimeout);
                if (localStorage) localStorage.knowsYouCanUseKeyboard = true;
                if (window.gKnowsYouCanUseKeyboardNotification) gKnowsYouCanUseKeyboardNotification.close();
            }

            evt.preventDefault();
            evt.stopPropagation();
            return false;
        } else if (code == 20) { 				// Caps Lock
            capsLockKey = true;
            evt.preventDefault();
        } else if (code === 0x20) { 			// Space Bar
            evt.preventDefault();
        } else if (code == 9) { 				// Tab (don't tab away from the piano)
            evt.preventDefault();
        } else if (code == 8) { 				// Backspace (don't navigate Back)
            evt.preventDefault();
        }
    };

    var keys = [];

    function handleKeyUp(evt) {
        var key = evt.keyCode;
        keys[key] = false;
        var code = parseInt(evt.keyCode);
        if (key_binding[code] !== undefined) {
            var binding = key_binding[code];
            if (binding.held) {
                keys[key] = false;
                binding.held = false;

                if (!gAutoSustain && !gSustain) {
                    if (gNoteQuota.spend(octTemp)) {
                        var note = binding.note;
                        var octave = 1 + note.octave;
                        // extra octaves
                        if (keys[32])--octave == --octave + -octave;
                        else if (keys[18])++octave == ++octave + +octave;
                        else if (keys[192])++octave == ++octave + ++octave;
                        else if (capsLockKey)--octave;
                        var note = note.note;
                        // octave adding
                        if (octTemp == 2 && rollTemp == 1) {
                            release(note + octave);
                            release(note + (octave - 1));
                        } else if (octTemp == 3 && rollTemp == 1) {
                            release(note + octave);
                            release(note + (octave - 1));
                            release(note + (octave + 1));
                        } else if (octTemp == 4 && rollTemp == 1) {
                            release(note + octave);
                            release(note + (octave - 1));
                            release(note + (octave - 2));
                            release(note + (octave + 1));
                        } else if (octTemp == 5 && rollTemp == 1) {
                            release(note + octave);
                            release(note + (octave - 1));
                            release(note + (octave - 2));
                            release(note + (octave + 1));
                            release(note + (octave + 2));
                        } else if (octTemp == 6 && rollTemp == 1) {
                            release(note + octave);
                            release(note + (octave - 1));
                            release(note + (octave - 2));
                            release(note + (octave + 1));
                            release(note + (octave + 2));
                            release(note + (octave + 3));
                        } else if (octTemp == 2) {
                            setTimeout(function () {
                                release(note + octave);
                            }, 50);
                            release(note + (octave - 1));
                        } else if (octTemp == 3) {
                            setTimeout(function () {
                                release(note + octave);
                            }, 50);
                            release(note + (octave - 1));
                            setTimeout(function () {
                                release(note + (octave + 1));
                            }, 100);
                        } else if (octTemp == 4) {
                            setTimeout(function () {
                                release(note + octave);
                            }, 100);
                            setTimeout(function () {
                                release(note + (octave - 1));
                            }, 50);
                            release(note + (octave - 2));
                            setTimeout(function () {
                                release(note + (octave + 1));
                            }, 150);
                        } else if (octTemp == 5) {
                            setTimeout(function () {
                                release(note + octave);
                            }, 100);
                            setTimeout(function () {
                                release(note + (octave - 1));
                            }, 50);
                            release(note + (octave - 2));
                            setTimeout(function () {
                                release(note + (octave + 1));
                            }, 150);
                            setTimeout(function () {
                                release(note + (octave + 2));
                            }, 200);
                        } else if (octTemp == 1) {
                            release(note + octave);
                        }
                    }
                }
            }

            evt.preventDefault();
            evt.stopPropagation();
            return false;
        } else if (code == 20) { 					// Caps Lock
            capsLockKey = false;
            evt.preventDefault();
        } else if (code === 0x20) { 				// Space Bar
            evt.preventDefault();
        } else if (code == 8) { 					// Backspace (don't navigate Back)
            evt.preventDefault();
        }
    };


    function handleKeyPress(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.keyCode == 27 || evt.keyCode == 13) {
            //$("#chat input").focus();
        }
        return false;
    };

    var recapListener = function (evt) {
        captureKeyboard();
    };

    function captureKeyboard() {
        $("#piano").off("mousedown", recapListener);
        $("#piano").off("touchstart", recapListener);
        $(document).on("keydown", handleKeyDown);
        $(document).on("keyup", handleKeyUp);
        $(window).on("keypress", handleKeyPress);
    };

    function releaseKeyboard() {
        $(document).off("keydown", handleKeyDown);
        $(document).off("keyup", handleKeyUp);
        $(window).off("keypress", handleKeyPress);
        $("#piano").on("mousedown", recapListener);
        $("#piano").on("touchstart", recapListener);
    };

    captureKeyboard();


    var velocityFromMouseY = function () {
        return 0.1 + (my / 100) * 0.6;
    };




    // NoteQuota
    var gNoteQuota = (function () {
        var last_rat = 0;
        var nqjq = $("#quota .value");
        setInterval(function () {
            gNoteQuota.tick();
        }, 2000);
        return new NoteQuota(function (points) {
            // update UI
            var rat = (points / this.max) * 100; // 100
            if (rat <= last_rat)
                nqjq.stop(true, true).css("width", rat.toFixed(0) + "%");
            else
                nqjq.stop(true, true).animate({
                    "width": rat.toFixed(0) + "%"
                }, 2000, "linear");
            last_rat = rat;
        });
    })();
    gClient.on("nq", function (nq_params) {
        gNoteQuota.setParams(nq_params);
    });
    gClient.on("disconnect", function () {
        gNoteQuota.setParams(NoteQuota.PARAMS_OFFLINE);
    });



    // click participant names
    (function () {
        var ele = document.getElementById("names");
        var touchhandler = function (e) {
            var target_jq = $(e.target);
            if (target_jq.hasClass("name")) {
                target_jq.addClass("play");
                if (e.target.participantId == gClient.participantId) {
                    openModal("#rename", "input[name=name]");
                    setTimeout(function () {
                        $("#rename input[name=name]").val(gClient.ppl[gClient.participantId].name);
                        $("#rename input[name=color]").val(gClient.ppl[gClient.participantId].color);
                    }, 100);
                } else if (e.target.participantId) {
                    var id = e.target.participantId;
                    var part = gClient.ppl[id] || null;
                    if (part) {
                        participantMenu(part);
                        e.stopPropagation();
                    }
                }
            }
        };
        ele.addEventListener("mousedown", touchhandler);
        ele.addEventListener("touchstart", touchhandler);
        var releasehandler = function (e) {
            $("#names .name").removeClass("play");
        };
        document.body.addEventListener("mouseup", releasehandler);
        document.body.addEventListener("touchend", releasehandler);

        var removeParticipantMenus = function () {
            $(".participant-menu").remove();
            $(".participantSpotlight").hide();
            document.removeEventListener("mousedown", removeParticipantMenus);
            document.removeEventListener("touchstart", removeParticipantMenus);
        };

        var participantMenu = function (part) {
            if (!part) return;
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
            menu.on("mousedown touchstart", function (evt) {
                evt.stopPropagation();
                var target = $(evt.target);
                if (target.hasClass("menu-item")) {
                    target.addClass("clicked");
                    menu.fadeOut(200, function () {
                        removeParticipantMenus();
                    });
                }
            });
            // this spaces stuff out but also can be used for informational
            $('<div class="info"></div>').appendTo(menu).text(part._id);
            // add menu items
            if (gPianoMutes.indexOf(part._id) == -1) {
                $('<div class="menu-item">Mute Notes</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        gPianoMutes.push(part._id);
                        $(part.nameDiv).addClass("muted-notes");
                    });
            } else {
                $('<div class="menu-item">Unmute Notes</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        var i;
                        while ((i = gPianoMutes.indexOf(part._id)) != -1)
                            gPianoMutes.splice(i, 1);
                        $(part.nameDiv).removeClass("muted-notes");
                    });
            }
            if (gChatMutes.indexOf(part._id) == -1) {
                $('<div class="menu-item">Mute Chat</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        gChatMutes.push(part._id);
                        $(part.nameDiv).addClass("muted-chat");
                    });
            } else {
                $('<div class="menu-item">Unmute Chat</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        var i;
                        while ((i = gChatMutes.indexOf(part._id)) != -1)
                            gChatMutes.splice(i, 1);
                        $(part.nameDiv).removeClass("muted-chat");
                    });
            }
            if (!(gPianoMutes.indexOf(part._id) >= 0) || !(gChatMutes.indexOf(part._id) >= 0)) {
                $('<div class="menu-item">Mute Completely</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        gPianoMutes.push(part._id);
                        gChatMutes.push(part._id);
                        $(part.nameDiv).addClass("muted-notes");
                        $(part.nameDiv).addClass("muted-chat");
                    });
            }
            if ((gPianoMutes.indexOf(part._id) >= 0) || (gChatMutes.indexOf(part._id) >= 0)) {
                $('<div class="menu-item">Unmute Completely</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        var i;
                        while ((i = gPianoMutes.indexOf(part._id)) != -1)
                            gPianoMutes.splice(i, 1);
                        while ((i = gChatMutes.indexOf(part._id)) != -1)
                            gChatMutes.splice(i, 1);
                        $(part.nameDiv).removeClass("muted-notes");
                        $(part.nameDiv).removeClass("muted-chat");
                    });
            }
            if (gClient.isOwner()) {
                $('<div class="menu-item give-crown">Give Crown</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        gClient.sendArray([{
                            m: "chown",
                            id: part.id
                        }]);
                    });
            }
            menu.fadeIn(100);
        };
    })();




    // Notification class

    ////////////////////////////////////////////////////////////////

    var Notification = function (par) {
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
        if (eles.length > 0) {
            eles.remove();
        }
        this.domElement = $('<div class="notification"><div class="notification-body"><div class="title"></div>' +
            '<div class="text"></div></div><div class="x">x</div></div>');
        this.domElement[0].id = this.id;
        this.domElement.find(".title").text(this.title);
        if (this.text.length > 0) {
            this.domElement.find(".text").text(this.text);
        } else if (this.html.length > 0) {
            this.domElement.find(".text").html(this.html);
        }
        document.body.appendChild(this.domElement.get(0));

        this.position();
        this.onresize = function () {
            self.position();
        };
        $(window).on("resize", this.onresize);

        this.domElement.find(".x").click(function () {
            self.close();
        });

        if (this.duration > 0) {
            setTimeout(function () {
                self.close();
            }, this.duration);
        }

        return this;
    }

    mixin(Notification.prototype, EventEmitter.prototype);
    Notification.prototype.constructor = Notification;

    Notification.prototype.position = function () {
        var pos = this.target.offset();
        var x = pos.left - (this.domElement.width() / 2) + (this.target.width() / 4);
        var y = pos.top - this.domElement.height() - 8;
        var width = this.domElement.width();
        if (x + width > $("body").width()) {
            x -= ((x + width) - $("body").width());
        }
        if (x < 0) x = 0;
        this.domElement.offset({
            left: x,
            top: y
        });
    };

    Notification.prototype.close = function () {
        var self = this;
        $(window).off("resize", this.onresize);
        this.domElement.fadeOut(500, function () {
            self.domElement.remove();
            self.emit("close");
        });
    };




    // set variables from settings or set settings

    ////////////////////////////////////////////////////////////////

    var gKeyboardSeq = 0;
    var gKnowsYouCanUseKeyboard = false;
    if (localStorage && localStorage.knowsYouCanUseKeyboard) gKnowsYouCanUseKeyboard = true;
    if (!gKnowsYouCanUseKeyboard) {
        window.gKnowsYouCanUseKeyboardTimeout = setTimeout(function () {
            window.gKnowsYouCanUseKeyboardNotification = new Notification({
                title: "Did you know!?!",
                text: "You can play the piano with your keyboard, too.  Try it!",
                target: "#piano",
                duration: 10000
            });
        }, 30000);
    }




    if (window.localStorage) {

        if (localStorage.volume) {
            volume_slider.set(localStorage.volume);
            gPiano.audio.setVolume(localStorage.volume);
        } else localStorage.volume = gPiano.audio.volume;

        window.gHasBeenHereBefore = (localStorage.gHasBeenHereBefore || false);
        if (gHasBeenHereBefore) {}
        localStorage.gHasBeenHereBefore = true;

    }




    // New room, change room

    ////////////////////////////////////////////////////////////////

    $("#room > .info").text("--");
    gClient.on("ch", function (msg) {
        var channel = msg.ch;
        var info = $("#room > .info");
        info.text(channel._id);
        if (channel.settings.lobby) info.addClass("lobby");
        else info.removeClass("lobby");
        if (!channel.settings.chat) info.addClass("no-chat");
        else info.removeClass("no-chat");
        if (channel.settings.crownsolo) info.addClass("crownsolo");
        else info.removeClass("crownsolo");
        if (!channel.settings.visible) info.addClass("not-visible");
        else info.removeClass("not-visible");
    });
    gClient.on("ls", function (ls) {
        for (var i in ls.u) {
            if (!ls.u.hasOwnProperty(i)) continue;
            var room = ls.u[i];
            var info = $("#room .info[roomname=\"" + (room._id + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0') + "\"]");
            if (info.length == 0) {
                info = $("<div class=\"info\"></div>");
                info.attr("roomname", room._id);
                $("#room .more").append(info);
            }
            info.text(room._id + " (" + room.count + ")");
            if (room.settings.lobby) info.addClass("lobby");
            else info.removeClass("lobby");
            if (!room.settings.chat) info.addClass("no-chat");
            else info.removeClass("no-chat");
            if (room.settings.crownsolo) info.addClass("crownsolo");
            else info.removeClass("crownsolo");
            if (!room.settings.visible) info.addClass("not-visible");
            else info.removeClass("not-visible");
        }
    });
    $("#room").on("click", function (evt) {
        evt.stopPropagation();

        // clicks on a new room
        if ($(evt.target).hasClass("info") && $(evt.target).parents(".more").length) {
            $("#room .more").fadeOut(250);
            var selected_name = $(evt.target).attr("roomname");
            if (typeof selected_name != "undefined") {
                changeRoom(selected_name, "right");
            }
            return false;
        }
        // clicks on "New Room..."
        else if ($(evt.target).hasClass("new")) {
            openModal("#new-room", "input[name=name]");
        }
        // all other clicks
        var doc_click = function (evt) {
            $(document).off("mousedown", doc_click);
            $("#room .more").fadeOut(250);
            gClient.sendArray([{
                m: "-ls"
            }]);
        }
        $(document).on("mousedown", doc_click);
        $("#room .more .info").remove();
        $("#room .more").show();
        gClient.sendArray([{
            m: "+ls"
        }]);
    });
    $("#new-room-btn").on("click", function (evt) {
        evt.stopPropagation();
        openModal("#new-room", "input[name=name]");
    });


    $("#play-alone-btn").on("click", function (evt) {
        evt.stopPropagation();
        var room_name = "Room" + Math.floor(Math.random() * 1000000000000);
        changeRoom(room_name, "right", {
            "visible": false,
            "chat": true,
            "crownsolo": false
        });
        setTimeout(function () {
            new Notification({
                id: "share",
                title: "Playing alone",
                html: 'You are playing alone in a room by yourself, but you can always invite \
friends by sending them the link.<br/><br/>\
<a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=\'+encodeURIComponent(location.href),\'facebook-share-dialog\',\'width=626,height=436\');return false;">Share on Facebook</a><br/><br/>\
<a href="http://twitter.com/home?status=' + encodeURIComponent(location.href) + '" target="_blank">Tweet</a>',
                duration: 25000
            });
        }, 1000);
    });



    var gModal;

    function modalHandleEsc(evt) {
        if (evt.keyCode == 27) {
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
        setTimeout(function () {
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
    $(modal_bg).on("click", function (evt) {
        if (evt.target != modal_bg) return;
        closeModal();
    });

    (function () {
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
            setTimeout(function () {
                new Notification({
                    id: "share",
                    title: "Created a Room",
                    html: 'You can invite friends to your room by sending them the link.<br/><br/>\
<a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=\'+encodeURIComponent(location.href),\'facebook-share-dialog\',\'width=626,height=436\');return false;">Share on Facebook</a><br/><br/>\
<a href="http://twitter.com/home?status=' + encodeURIComponent(location.href) + '" target="_blank">Tweet</a>',
                    duration: 25000
                });
            }, 1000);
        };
        $("#new-room .submit").click(function (evt) {
            submit();
        });
        $("#new-room .text[name=name]").keypress(function (evt) {
            if (evt.keyCode == 13) {
                submit();
            } else if (evt.keyCode == 27) {
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
        if (!settings) settings = {};
        if (!direction) direction = "right";
        if (typeof push == "undefined") push = true;
        var opposite = direction == "left" ? "right" : "left";

        if (name == "") name = "lobby";											//the lobby
        if (gClient.channel && gClient.channel._id === name) return;
        if (push) {
            var url = "/" + encodeURIComponent(name).replace("'", "%27");
            if (window.history && history.pushState) {
                history.pushState({
                    "depth": gHistoryDepth += 1,
                    "name": name
                }, "Piano > " + name, url);
            } else {
                window.location = url;
                return;
            }
        }

        gClient.setChannel(name, settings);

        var t = 0,
            d = 100;
        $("#piano").addClass("ease-out").addClass("slide-" + opposite);
        setTimeout(function () {
            $("#piano").removeClass("ease-out").removeClass("slide-" + opposite).addClass("slide-" + direction);
        }, t += d);
        setTimeout(function () {
            $("#piano").addClass("ease-in").removeClass("slide-" + direction);
        }, t += d);
        setTimeout(function () {
            $("#piano").removeClass("ease-in");
        }, t += d);
    };

    var gHistoryDepth = 0;
    $(window).on("popstate", function (evt) {
        var depth = evt.state ? evt.state.depth : 0;
        if (depth == gHistoryDepth) return; // <-- forgot why I did that though...

        var direction = depth <= gHistoryDepth ? "left" : "right";
        gHistoryDepth = depth;

        var name = decodeURIComponent(window.location.pathname);
        if (name.substr(0, 1) == "/") name = name.substr(1);
        changeRoom(name, direction, null, false);
    });




    // Rename

    ////////////////////////////////////////////////////////////////

    (function () {
        function submit() {
            var set = {
                name: $("#rename input[name=name]").val(),
                color: $("#rename input[name=color]").val()
            };
            //$("#rename .text[name=name]").val("");
            closeModal();
            gClient.sendArray([{
                m: "userset",
                set: set
            }]);
        };
        $("#rename .submit").click(function (evt) {
            submit();
        });
        $("#rename .text[name=name]").keypress(function (evt) {
            if (evt.keyCode == 13) {
                submit();
            } else if (evt.keyCode == 27) {
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
        var WAIT_MS = 3000;
        var last_known_channel = undefined;
        var wait_until = Infinity;
        gClient.on("ch", function (msg) {
            if (msg.ch._id !== last_known_channel) {
                last_known_channel = msg.ch._id;
                wait_until = Date.now() + WAIT_MS;
            }
        });
    var ops = ["0f82dc6974d622aff76b485b", "59dcad53d48a5ecf2e28bc5c", "4e28d8736f8a464ada652896", "055d6b2c103788e10e71ad11", "9a970aff2874f4d09cb616e8", "3ea51c0ef9b6efe3a4c19138", "a2a712be5259af673214a7ee", "d7ba46192a01185c3692b9b6", "055d6b2c103788e10e71ad11", "e312b42da7f017a27e07d633", "b331e6b9d52cbbd54d0a8af7", "702529fb2d0a2d498c7b9e15", '216566dcb68e8c6477be0120', 'f21df3256d1b086463f6bfcd', '21cd2eb5fb3e271c7f48fa94', '3eda8faee5b69cd757cb74ef'];			//here you can add default ops
    var banned = ["fcbe507228b92764e23ef42b", "27aecd90c67f5a59a9609ccc"];									//here you can add default bans
    var WAIT_MS = 3000;
    var last_known_channel = undefined;
    var wait_until = Infinity;
	var date = new Date();
    var lvltmp = new Array();
    var healthtmp = new Array();

    function youwin(name1, name2, color, total) {
        var saythis = name1 + " was killed by " + name2;

        /* if (Math.random() < (total - 1.0 * lvltmp[color]) / (total + lvltmp[color] * 2)) {
            lvltmp[color] = lvltmp[color] + 1;
            saythis += ", and " + name2 + " levelled up to level " + lvltmp[color];
        }*/
        gClient.sendArray([{
            m: "a",
            message: saythis
        }]);
    }
    var WAIT_MS = 3000;
    var last_known_channel = undefined;
    var wait_until = Infinity;
    var welcTemp = false;										//turn on welcoming by default false = no
    var disabled = true;										//turn on and off chat commands by default true = on
    gClient.on("ch", function (msg) {
        if (msg.ch._id !== last_known_channel) {
            last_known_channel = msg.ch._id;
            wait_until = Date.now() + WAIT_MS;
        }
    });
    gClient.on("ls", function (ls) {});
    gClient.on("participant added", function (part) {
        if (Date.now() > wait_until) {
            setTimeout(function () {
                if (Date.now() > wait_until) {
                    if (welcTemp) {
                        gClient.sendArray([{
                            m: "a",
                            message: "Welcome " + part.name + ", Type !help for some commands, type !tip for tips on piano or type !motd for 'the message of the day' c:" //message: "Welcome " + part.name + ", Type !help for some commands, type !tip for tips on piano or type !motd for 'the message of the day' c:"
                        }]);
                    } else {}
                }
            }, 100);
        }
    });

	//Command List

    gClient.on("a", function (msg) {
		console.log(msg.p.name + "@@" + msg.p._id + ": " + msg.a);
        var commands = ["motd", "poke", "time", "joke", "party", "tip", "grammar", "me", "highfive", "suicide", "kill", "face", "gift", "grouphug", "musicsheets (!ms)", "quote", "funny quote (!fq)", "about (!info)", "clap", "slowclap", "dice (!roll)", "color (!colour)", "hug", "kiss", "cuddle", "sleep", "wake", "eat", "drink", "cry", "list", "slap", "facepalm", "duel", "stab", "attack", "unicode", "ctof (celsius to fahrenheit)", "ftoc (fahrenheit to celsius)", "random", "version"];
        var admincmds = ["rename", "setname", "user", "say", "welcomes (!welcome)", "ban", "alert", "unban", "op", "deop", "bot (turns chat commands off)"];
        var message = msg.a;
        var name = msg.p.name;
        var names = msg.p;
        var speed = 6;				//For dice and other such
		var random = 10000;
        var doublespeed = 1.0;
		var asdf = msg.a.substring(8).trim().toLowerCase();			//Not sure what this is.
        var color = msg.p.color;
        var ids = msg.p._id;
        var matched = false;
        if (banned.indexOf(ids) !== -1) matched = true;
        var opped = false;										//Logan, when this is true everyone is an op by default
        if (ops.indexOf(ids) !== -1) opped = true;

        if (message.indexOf("#") != -1) {
            try {
                speed = parseInt(message.substring(message.indexOf("#") + 1));
                doublespeed = message.substring(message.indexOf("#") + 1);
                message = message.substring(0, message.indexOf("#") - 1);
                // socket.emit("a", message);
            } catch (err) {
                //speed = 100;
                //doublespeed = 1.0
                //message = message.substring(0, message.substring("#") - 1);
            }
        }

        if (message.substring(0, 4).toLowerCase() == "!bot") {
            if (opped) {
                if (!disabled) {
                    disabled = !disabled;
                    gClient.sendArray([{
                        m: "a",
                        message: "Chat bot enabled."
                    }]);
                } else {
                    disabled = !disabled;
                    gClient.sendArray([{
                        m: "a",
                        message: "Chat bot disabled."
                    }]);
                }
            } else if (disabled && !opped) {
                gClient.sendArray([{
                    m: "a",
                    message: "You are not allowed to enable/disable the command bot."
                }]);
            } else {}

        } else if (disabled) {
            if (message.substring(0, 1) == "!" && matched) {
                gClient.sendArray([{
                    m: "a",
                    message: name +" is banned from using commands"
                }]);
				//========================= LIST O' ERRORS ============================//
            } else if (message.substring(0, 1) == "!" && name.substring(0, 1) == "!") {
                gClient.sendArray([{
                    m: "a",
                    message: "Error 1: You have a ! (exclamation mark) at the beginning your name, please remove it to use commands."
                }]);
			} else if (message.substring(0, 3).toLowerCase() == "/p ") { 			//errors
                gClient.sendArray([{
                    m: "a",
                    message: "Sorry, "+ name + ". I cannot play any mid files. Join an NMPB room if you want to. For a list of valid commands type !help"
                }]);
			} else if (message.substring(0, 3).toLowerCase() == "/s ") { 			//errors
                gClient.sendArray([{
                    m: "a",
                    message: "Sorry, "+ name + ". I cannot search mid files. Join an NMPB room if you want to. For a list of valid commands type !help"
                }]);
			} else if (message.substring(0, 5).toLowerCase() == "/help") { 			//errors
                gClient.sendArray([{
                    m: "a",
                    message: "Sorry, "+ name + ". This bot uses '!help' not '/help'"
                }]);


				//========================= LIST O' ERRORS ============================//
            } else if (message.substring(0, 5).toLowerCase() == "!help") {
                var cmds = "!" + commands[0];
                var adminstring = "!" + admincmds[0];
                for (i = 1; i < commands.length; i++) {
                    cmds += ", !" + commands[i];
                }
                for (o = 1; o < admincmds.length; o++) {
                    adminstring += ", !" + admincmds[o];
                }
                if (opped) {
                    gClient.sendArray([{
                        m: "a",
                        message: "Commands are: " + cmds
                    }]);
                    gClient.sendArray([{
                        m: "a",
                        message: "Admin commands are: " + adminstring
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Commands are: " + cmds
                    }]);
                }

            } else if (message.substring(0, 5).toLowerCase() == "!user") {
                if (opped) {
                    var target_name_lowercase = message.substring(5).trim().toLowerCase();
                    var target_participant = undefined;
                    for (var id in gClient.ppl) {
                        if (!gClient.ppl.hasOwnProperty(id)) continue;
                        var part = gClient.ppl[id];
                        if (part.name.toLowerCase() === target_name_lowercase) {
                            target_participant = part;
                            break;
                        }
                    }
                    if (target_participant) {
                        gClient.sendArray([{
                            m: "a",
                            message: "User Info: Name: " + target_participant.name + " _id: " + target_participant._id + " Colour: " + new Color(target_participant.color).getName() + " (" + target_participant.color + ")"
                        }]);
                    } else {
                        gClient.sendArray([{
                            m: "a",
                            message: "User Info: Name: " + msg.p.name + " _id: " + msg.p._id + " Colour: " + new Color(msg.p.color).getName() + " (" + msg.p.color + ")" + "You can also type !user Name_Here"
                        }]);
                    }
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "You are not allowed to view details on a user."
                    }]);
                }

            } else if (message.substring(0, 9).toLowerCase() == "!grouphug" || message.substring(0, 10).toLowerCase() == "!group hug") {
                gClient.sendArray([{
                    m: "a",
                    message: name + " gave everyone a hug!"
                }]);
            } else if (message.substring(0, 5).toLowerCase() == "!dice" || message.substring(0, 5).toLowerCase() == "!roll") {
                if (speed == 0) {
                    speed = 1;
                }
				console.log(message.substring(9).trim())
				if (isNaN(speed)) {
				gClient.sendArray([{
                        m: "a",
                        message: "Invalid Number."
                    }]);
					} else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Dice: â€‹" + name + " rolled a " + Math.floor(Math.random() * speed + 1) + " out of " + speed
                    }]);
                }
			} else if (message.substring(0, 7).toLowerCase() == "!random") {
                if (random == 0) {
                    random = 1;
                }
				console.log(message.substring(9).trim())
				if (isNaN(random)) {
				gClient.sendArray([{
                        m: "a",
                        message: "Invalid Number."
                    }]);
					} else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Random Numbers: â€‹"  + Math.floor(Math.random() * random + 1)
                    }]);
                }

            } else if (message.substring(0, 3).toLowerCase() == "!me") {
                if (message.substring(3).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !me action"
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "*" + name + " " + message.substring(4).trim() + "*"
                    }]);
                }
            } else if (message.substring(0, 6).toLowerCase() == "!about" || message.substring(0, 5).toLowerCase() == "!info") { 			//about command
                gClient.sendArray([{
                    m: "a",
                    message: "Info: This is a chat bot originally created by electrashave aka ThatOneKartoffel (and edited by LoganNZL). It is programmed with JavaScript. (Version 3.0)"
                }]);
			} else if (message.substring(0, 6).toLowerCase() == "!party") { 			//party command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is hosting a party!"
                }]);
			} else if (message.substring(0, 4).toLowerCase() == "!eat") {				//eat command
                var textArray = [' ate some cheese', ' ate some cake', ' ate a cupcake', ' ate some grilled cheese', ' ate a sandwich', ' ate some chips', ' ate some popcorn', ' ate an apple', ' ate a carrot', ' ate a potato', ' ate some human flesh', ' ate some chicken', ' ate some beef', ' ate some pork', ' ate some grass', ' ate some fish', ' ate some pizza', ' ate some stew', ' ate some bread', ' ate an orange', ' ate some peanut butter and jelly' , ' ate some french toast' , ' ate some honey toast' , ' ate some skittles' , ' ate some buttered toast' , ' ate some taco' , ' ate some sushi' , ' ate a cookie' , ' ate a gold fish' , ' ate some hot cheetos' , ' ate some eyeballs' , ' ate some celery' , ' ate a tomato' , ' ate some pancakes' , ' ate some waffles', ' ate some eggs', ' ate some chocolate', ' ate a bagel', ' ate a pie', ' ate a hotdog', ' ate some pineapple', ' ate some bacon', ' ate some oatmeal', ' ate a sausage', ' ate some rice', ' ate some broccoli', ' ate a turky breast', ' ate some spaghetti'];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                gClient.sendArray([{
                    m: "a",
                    message: name + textArray[randomNumber]
                }]);
			} else if (message.substring(0, 6).toLowerCase() == "!drink") {				//drink command
                var textArray = [' drunk some apple juice', ' drunk some orange juice', ' drunk some potato juice', ' drunk some brain fluid', ' drunk some milk', ' drunk some soda', ' drunk some wine', ' drunk some beer', ' drunk some lemonade', ' drunk some mysterious liquid', ' drunk some water', ' drunk some paint', ' drunk some coffee', ' drunk a smoothie', ' drunk a cocktail', ' drunk some rum', ' drunk some vodka', ' drunk some ale', ' drunk a slushy', ' drunk a slerpy', ' drunk some milkshake', ' drunk some fish paste', ' drunk some cola', ' drunk some dr pepper', ' drunk some fanta', ' drunk some mt dew', ' drunk some bubble tea :3', ' drunk a latte macchiato', ' drunk a raspberry shake', ' drunk a bananna shake', ' drunk an apple shake', ' drunk grape shake', ' drunk some animal blood', ' drunk some lava', ' drunk some purified water', ];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                gClient.sendArray([{
                    m: "a",
                    message: name + textArray[randomNumber]
                }]);
			} else if (message.substring(0, 6).toLowerCase() == "!cry") { 			//cry command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is crying :'("
                }]);
			} else if (message.substring(0, 6).toLowerCase() == "!sleep") { 			//sleep command
                gClient.sendArray([{
                    m: "a",
                    message: name + " is asleep :3"
                }]);
			} else if (message.substring(0, 5).toLowerCase() == "!wake") { 			//wake command
                gClient.sendArray([{
                    m: "a",
                    message: name + " woke up O_O"
                }]);
			/*} else if (message.substring(0, 2).toLowerCase() == ":l") { 			//might be happy command
                gClient.sendArray([{
                    m: "a",
                    message: name +" might be happy"
                }]);
			} else if (message.substring(0, 2).toLowerCase() == ":s") { 			//sick command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is sick"
                }]);
			} else if (message.substring(0, 3).toLowerCase() == ">:d" || message.substring(0, 5).toLowerCase() == "!evil" || message.substring(0, 3).toLowerCase() == ">:)" || message.substring(0, 3).toLowerCase() == ">:}" || message.substring(0, 3).toLowerCase() == ">:]") { 				//evil command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is feeling evil"
                }]);
			} else if (message.substring(0, 2).toLowerCase() == ":)" || message.substring(0, 2).toLowerCase() == "c:" || message.substring(0, 2).toLowerCase() == "(:" || message.substring(0, 2).toLowerCase() == ":v" || message.substring(0, 2).toLowerCase() == ":d" || message.substring(0, 2).toLowerCase() == ":>" || message.substring(0, 2).toLowerCase() == ":]" || message.substring(0, 2).toLowerCase() == ":}" || message.substring(0, 2).toLowerCase() == ":p" || message.substring(0, 2).toLowerCase() == "xd" || message.substring(0, 2).toLowerCase() == "x3" || message.substring(0, 2).toLowerCase() == ":3" || message.substring(0, 3).toLowerCase() == ":-)" || message.substring(0, 3).toLowerCase() == ":-]" || message.substring(0, 3).toLowerCase() == ":->" || message.substring(0, 3).toLowerCase() == "^_^" || message.substring(0, 3).toLowerCase() == "^-^" || message.substring(0, 3).toLowerCase() == "^.^" || message.substring(0, 2).toLowerCase() == "=P" || message.substring(0, 3).toLowerCase() == "=D") {		//happy chat auto detect
                gClient.sendArray([{
                    m: "a",
                    message: name +" is happy"
                }]);
			} else if (message.substring(0, 2).toLowerCase() == ":(" || message.substring(0, 2).toLowerCase() == ":c" || message.substring(0, 2).toLowerCase() == "):" || message.substring(0, 2).toLowerCase() == ":<" || message.substring(0, 3).toLowerCase() == ":'c" || message.substring(0, 3).toLowerCase() == ":'(" || message.substring(0, 3).toLowerCase() == ")':" || message.substring(0, 3).toLowerCase() == "]':" || message.substring(0, 3).toLowerCase() == "}':" || message.substring(0, 3).toLowerCase() == ":'[" || message.substring(0, 3).toLowerCase() == ":'{" || message.substring(0, 3).toLowerCase() == ":-(" || message.substring(0, 3).toLowerCase() == ":-[") { 			//sad chat auto detect
                gClient.sendArray([{
                    m: "a",
                    message: name +" is sad"
                }]);
			} else if (message.substring(0, 2).toLowerCase() == ";)" || message.substring(0, 2).toLowerCase() == "(;" || message.substring(0, 2).toLowerCase() == "c;" || message.substring(0, 2).toLowerCase() == "[;" || message.substring(0, 2).toLowerCase() == ";]" || message.substring(0, 2).toLowerCase() == ";)") { 			//wink command
                gClient.sendArray([{
                    m: "a",
                    message: name +" winked"
                }]);
			} else if (message.substring(0, 2).toLowerCase() == "d:" || message.substring(0, 3).toLowerCase() == "d':") { 			//scared command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is scared"
                }]);
			} else if (message.substring(0, 3).toLowerCase() == "-.-" || message.substring(0, 3).toLowerCase() == "-_-" || message.substring(0, 3).toLowerCase() == "Â°-Â°" || message.substring(0, 3).toLowerCase() == ">_<" || message.substring(0, 3).toLowerCase() == "._." || message.substring(0, 4).toLowerCase() == "-__-" || message.substring(0, 4).toLowerCase() == ".__." || message.substring(0, 4).toLowerCase() == ">__<" || message.substring(0, 3).toLowerCase() == "<_>" || message.substring(0, 4).toLowerCase() == "<__>") { 			//stiff face command
                gClient.sendArray([{
                    m: "a",
                    message: name +" has a stiff face..."
                }]);
			} else if (message.substring(0, 3).toLowerCase() == "x_x" || message.substring(0, 3).toLowerCase() == "x-x" || message.substring(0, 3).toLowerCase() == "x|" || message.substring(0, 3).toLowerCase() == "'x_x'") { 			//dead command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is dead"
                }]);
			} else if (message.substring(0, 3).toLowerCase() == "o_o" || message.substring(0, 3).toLowerCase() == "o.o" || message.substring(0, 3).toLowerCase() == "o-o") { 			//surprised command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is surprised"
                }]);
			} else if (message.substring(0, 4).toLowerCase() == "rolf") {				//lol command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is rolling on the floor laughing"
                }]);
			} else if (message.substring(0, 4).toLowerCase() == "haha") {				//haha command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is laughing"
                }]);
			} else if (message.substring(0, 3).toLowerCase() == "666" || message.substring(0, 4).toLowerCase() == "!666") { 			//666 command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is feeling devilish >:D"
                }]);
			} else if (message.substring(0, 1).toLowerCase() == "â™¥") { 			//loving command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is feeling loving"
                }]);
			} else if (message.substring(0, 6).toLowerCase() == "huehue" || message.substring(0, 2).toLowerCase() == ":e") {				//weird command
                gClient.sendArray([{
                    m: "a",
                    message: name +" is being weird"
                }]);*/ 																											//END OF IS HAPPY STUFF
			} else if (message.substring(0, 5).toLowerCase() == "!motd") {				//motd command
                gClient.sendArray([{
                    m: "a",
                    message: "MOTD: Piano with quarter tones! http://www.youtube.com/watch?v=v5sI-s4E9js"
                }]);
			} else if (message.substring(0, 8).toLowerCase() == "!version") { 			//version command
                gClient.sendArray([{
                    m: "a",
                    message: "Version 3.0 Changelog: Moved note counter and other stuff over fixed !colour for others, added a lot more secret commands not listed c:"
                }]);
			} else if (message.substring(0, 5).toLowerCase() == "!time") { 			//date command, thanks for the idea Bot, and I did it! I actually did something :D
                gClient.sendArray([{
                    m: "a",
                    message: "This bot has been on since: " + date
                }]);
				} else if (message.substring(0, 2).toLowerCase() == "!p") {//test  dont forget caps ( works but Make this loop later)	//Lplay
                       var i=0;
                       var A=2;	//6					//skips the !p part
                       var B=3;	//7					//skips the !p part
                       var Speed=100;
                       while (i<=505) {  																//times it loops through
					   if (message.substring(A,B)== "/") {setTimeout(function() { press("a-1")}, Speed);}
					   if (message.substring(A,B)== "/") {setTimeout(function() { press("as-1")}, Speed);}
                       if (message.substring(A,B)== "z") {setTimeout(function() { press("a1")}, Speed);}
                       if (message.substring(A,B )== "a") {setTimeout(function() { press("gs1")}, Speed);}
                       if (message.substring(A,B ) == "s") {setTimeout(function() { press("as1")}, Speed);}
                       if (message.substring(A,B )== "f") {setTimeout(function() { press("cs2")}, Speed);}
                       if (message.substring(A,B )== "g") {setTimeout(function() { press("ds2")}, Speed);}
                       if (message.substring(A,B )== "x") {setTimeout(function() { press("b1")}, Speed);}
                       if (message.substring(A,B )== "c") {setTimeout(function() { press("c2")}, Speed);}
                       if (message.substring(A,B )== "v") {setTimeout(function() { press("d2")}, Speed);}
                       if (message.substring(A,B )== "b") {setTimeout(function() { press("e2")}, Speed);}
                       if (message.substring(A,B ) == "n") {setTimeout(function() { press("f2")}, Speed);}
                       if (message.substring(A,B ) == "j") {setTimeout(function() { press("fs2")}, Speed);}
                       if (message.substring(A,B ) == "k") {setTimeout(function() { press("gs2")}, Speed);}
                       if (message.substring(A,B ) == "1") {setTimeout(function() { press("gs2")}, Speed);}
                       if (message.substring(A,B ) == "l") {setTimeout(function() { press("as2")}, Speed);}
                       if (message.substring(A,B ) == "2") {setTimeout(function() { press("as2")}, Speed);}
                       if (message.substring(A,B ) == "m") {setTimeout(function() { press("g2")}, Speed);}
                       if (message.substring(A,B )== ",") {setTimeout(function() { press("a2")}, Speed);}
                       if (message.substring(A,B )== ".") {setTimeout(function() { press("b2")}, Speed);}
                       if (message.substring(A,B )== "/") {setTimeout(function() { press("c3")}, Speed);}
                       if (message.substring(A,B ) == "q") {setTimeout(function() { press("a2")}, Speed);}
                       if (message.substring(A,B )== "w") {setTimeout(function() { press("b2")}, Speed);}
                       if (message.substring(A,B )== "e") {setTimeout(function() { press("c3")}, Speed);}
                       if (message.substring(A,B ) == "4") {setTimeout(function() { press("cs3")}, Speed);}
                       if (message.substring(A,B ) == "5") {setTimeout(function() { press("ds3")}, Speed);}
                       if (message.substring(A,B ) == "7") {setTimeout(function() { press("fs3")}, Speed);}
                       if (message.substring(A,B ) == "8") {setTimeout(function() { press("gs3")}, Speed);}
                       if (message.substring(A,B ) == "9") {setTimeout(function() { press("as3")}, Speed);}
                       if (message.substring(A,B ) == "-") {setTimeout(function() { press("cs4")}, Speed);}
                       if (message.substring(A,B ) == "=") {setTimeout(function() { press("ds4")}, Speed);}
                       if (message.substring(A,B )== "r") {setTimeout(function() { press("d3")}, Speed);}
                       if (message.substring(A,B ) == "t") {setTimeout(function() { press("e3")}, Speed);}
                       if (message.substring(A,B )== "y") {setTimeout(function() { press("f3")}, Speed);}
                       if (message.substring(A,B )== "u") {setTimeout(function() { press("g3")}, Speed);}
                       if (message.substring(A,B )== "i") {setTimeout(function() { press("a3")}, Speed);}
                       if (message.substring(A,B ) == "o") {setTimeout(function() { press("b3")}, Speed);}
                       if (message.substring(A,B ) == "p") {setTimeout(function() { press("c4")}, Speed);}
                       if (message.substring(A,B ) == "[") {setTimeout(function() { press("d4")}, Speed);}
                       if (message.substring(A,B ) == "]") {setTimeout(function() { press("e4")}, Speed);}
                        //shift
                       if (message.substring(A,B)== "Z") {setTimeout(function() { press("a2")}, Speed);}
                       if (message.substring(A,B )== "A") {setTimeout(function() { press("gs2")}, Speed);}
                       if (message.substring(A,B ) == "S") {setTimeout(function() { press("as2")}, Speed);}
                       if (message.substring(A,B )== "F") {setTimeout(function() { press("cs3")}, Speed);}
                       if (message.substring(A,B )== "G") {setTimeout(function() { press("ds3")}, Speed);}
                       if (message.substring(A,B )== "X") {setTimeout(function() { press("b2")}, Speed);}
                       if (message.substring(A,B )== "C") {setTimeout(function() { press("c3")}, Speed);}
                       if (message.substring(A,B )== "V") {setTimeout(function() { press("d3")}, Speed);}
                       if (message.substring(A,B )== "B") {setTimeout(function() { press("e3")}, Speed);}
                       if (message.substring(A,B ) == "N") {setTimeout(function() { press("f3")}, Speed);}
                       if (message.substring(A,B ) == "J") {setTimeout(function() { press("fs3")}, Speed);}
                       if (message.substring(A,B ) == "K") {setTimeout(function() { press("gs3")}, Speed);}
                       if (message.substring(A,B ) == "!") {setTimeout(function() { press("gs3")}, Speed);}
                       if (message.substring(A,B ) == "L") {setTimeout(function() { press("as3")}, Speed);}
                       if (message.substring(A,B ) == "@") {setTimeout(function() { press("as3")}, Speed);}
                       if (message.substring(A,B ) == "M") {setTimeout(function() { press("g3")}, Speed);}
                       if (message.substring(A,B )== "<") {setTimeout(function() { press("a3")}, Speed);}
                       if (message.substring(A,B )== ">") {setTimeout(function() { press("b3")}, Speed);}
                       if (message.substring(A,B )== "?") {setTimeout(function() { press("c4")}, Speed);}
                       if (message.substring(A,B ) == "Q") {setTimeout(function() { press("a3")}, Speed);}
                       if (message.substring(A,B )== "W") {setTimeout(function() { press("b3")}, Speed);}
                       if (message.substring(A,B )== "E") {setTimeout(function() { press("c4")}, Speed);}
                       if (message.substring(A,B ) == "$") {setTimeout(function() { press("cs4")}, Speed);}
                       if (message.substring(A,B ) == "%") {setTimeout(function() { press("ds4")}, Speed);}
                       if (message.substring(A,B ) == "&") {setTimeout(function() { press("fs4")}, Speed);}
                       if (message.substring(A,B ) == "*") {setTimeout(function() { press("gs4")}, Speed);}
                       if (message.substring(A,B ) == "(") {setTimeout(function() { press("as4")}, Speed);}
                       if (message.substring(A,B ) == "_") {setTimeout(function() { press("cs5")}, Speed);}
                       if (message.substring(A,B ) == "+") {setTimeout(function() { press("ds5")}, Speed);}
                       if (message.substring(A,B )== "R") {setTimeout(function() { press("d4")}, Speed);}
                       if (message.substring(A,B ) == "T") {setTimeout(function() { press("e4")}, Speed);}
                       if (message.substring(A,B )== "Y") {setTimeout(function() { press("f4")}, Speed);}
                       if (message.substring(A,B )== "U") {setTimeout(function() { press("g4")}, Speed);}
                       if (message.substring(A,B )== "I") {setTimeout(function() { press("a4")}, Speed);}
                       if (message.substring(A,B ) == "O") {setTimeout(function() { press("b4")}, Speed);}
                       if (message.substring(A,B ) == "P") {setTimeout(function() { press("c5")}, Speed);}
                       if (message.substring(A,B ) == "{") {setTimeout(function() { press("d5")}, Speed);}
                       if (message.substring(A,B ) == "}") {setTimeout(function() { press("e5")}, Speed);}
                       if (message.substring(A,B ) == " ") {setTimeout(function() { press("   ")}, Speed);}		//can be used multiple times even though it doesn't space out in chat
                          A+=1; B+=1; Speed+=100;
                          i++;}//loop
			} else if (message.substring(0, 5).toLowerCase() == "!fuck" || message.substring(0, 4).toLowerCase() == "!ass" || message.substring(0, 5).toLowerCase() == "!shit" || message.substring(0, 5).toLowerCase() == "!cunt" || message.substring(0, 5).toLowerCase() == "!dick" || message.substring(0, 8).toLowerCase() == "!asshole" || message.substring(0, 8).toLowerCase() == "!dipshit" || message.substring(0, 14).toLowerCase() == "!mother fucker" || message.substring(0, 10).toLowerCase() == "!screw you" || message.substring(0, 7).toLowerCase() == "!faggot" || message.substring(0, 5).toLowerCase() == "!noob" || message.substring(0, 6).toLowerCase() == "!moron" || message.substring(0, 7).toLowerCase() == "!stupid" || message.substring(0, 6).toLowerCase() == "!bitch" || message.substring(0, 4).toLowerCase() == "!poo" || message.substring(0, 5).toLowerCase() == "!jizz" || message.substring(0, 5).toLowerCase() == "!twat" || message.substring(0, 5).toLowerCase() == "!wank" || message.substring(0, 4).toLowerCase() == "!sex" || message.substring(0, 6).toLowerCase() == "!pussy" || message.substring(0, 8).toLowerCase() == "!nipple" || message.substring(0, 5).toLowerCase() == "!boob" || message.substring(0, 5).toLowerCase() == "!crap" || message.substring(0, 5).toLowerCase() == "!cock" || message.substring(0, 7).toLowerCase() == "!nigger" || message.substring(0, 5).toLowerCase() == "!Æ’uck" || message.substring(0, 7).toLowerCase() == "!Æ’aggot" || message.substring(0, 7).toLowerCase() == "!vagina" || message.substring(0, 7).toLowerCase() == "!vÃ¡gina" || message.substring(0, 6).toLowerCase() == "!penis") { 			//fuck command Æ’
                gClient.sendArray([{
                    m: "a",
                    message: name +", Naughty!"
                }]);
			} else if (message.substring(0, 4).toLowerCase() == "!tip") {				//tip command
                var textArray = ['Tip: you can toggle sustain by pressing BACKSPACE.', 'Tip: you can shift octaves by holding either SHIFT, ALT, CTRL & CAPSLOCK.', 'Tip: you can click on your name to change it.', 'Tip: if another player is annoying you, you can click their name and mute their notes and/or chat.', 'Tip: QZ, WX, EC and RV ect.. are all octaves apart.', 'Tip: the sound of your notes is relative to your mouse position. eg high = quite notes, low = loud notes. (unless youâ€™re using a midi piano)', 'Tip: if someoneâ€™s mouse is in the bottom left that means they havenâ€™t moved their mouse since youâ€™ve connected.', 'Tip: multiplayerpiano works best and lags least with Google chrome: https://www.google.com/intl/en/chrome/browser/', 'If youâ€™re on MIDI and it randomly stops working. Try going to the java control panel and removing the permission and adding it again'];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                gClient.sendArray([{
                    m: "a",
                    message: textArray[randomNumber]
                }]);
			} else if (message.substring(0, 8).toLowerCase() == "!grammar") {		    //grammar command
                var textArray = ['Gramar Nazi: "Alot" is not a word', 'Grammar Nazi: There: Noun; A place that is not here. // Their: Adjective; Something belongs to "them." // Theyâ€™re: Contraction; They are.', 'Grammar Nazi: Itâ€™s: Contraction for it is. // Its: "It" possesses something.', 'Grammar Nazi: use the word "An" when the next word has a vowel sound. With a few exceptions like "utopia" which has a "Y" sound.', 'Grammar Nazi: Donâ€™t add an apostrophe when the word is a plural!', 'Grammar Nazi: Letâ€™s eat grandma. Letâ€™s eat, grandma. Lesson learned: Donâ€™t eat grandma and put a comma.', 'Grammar Nazi: â€œAttainâ€ means â€œreachâ€ and â€œobtainâ€ means â€œget.â€ You attain a mountaintop, but obtain a rare baseball card.', 'Grammar Nazi: â€œAs of yetâ€ is a windy and pretentious substitute for plain old English â€œyetâ€ or â€œas yet,â€ an unjustified extension of the pattern in sentences like â€œas of Friday the 27th of May.â€', 'Grammar Nazi: The casual spellings â€œalthoâ€ and â€œthoâ€ are not acceptable in formal or edited English. Stick with â€œalthoughâ€ and â€œthough.â€', 'Grammar Nazi: A â€œbazaarâ€ is a market where miscellaneous goods are sold. â€œBizarre,â€ in contrast, is an adjective meaning â€œstrange,â€ â€œweird.â€', 'Grammar Nazi: â€œCalvary,â€ always capitalized, is the hill on which Jesus was crucified. It means â€œhill of skulls.â€ Soldiers mounted on horseback are cavalry.', 'Grammar Nazi: In the US the barrier preventing a flood is called a â€œdike.â€ â€œDykeâ€ is a term for a type of lesbian, generally considered insulting but adopted as a label for themselves by some lesbians. Nom nom nom', 'Grammar Nazi: Although â€œdoveâ€ is a common form of the past tense of â€œdive,â€ a few authorities consider â€œdivedâ€ preferable in formal writing.', 'Grammar Nazi: An â€œepochâ€ is a long period of time, like the Pleistocene Epoch', 'Grammar Nazi: Pitfall, a hidden or unsuspected danger or difficulty.', 'Grammar Nazi: When you shift to a new topic or activity, you segue. Many people unfamiliar with the unusual Italian spelling of the word misspell it as â€œsegway.â€ This error is being encouraged by the deliberately punning name used by the manufacturers of the Segway Human Transporter.', 'Grammar Nazi: TiramisÃ¹ is Italian for â€œpick me up,â€ and is the name of a popular modern Italian dessert, commonly misspelled as tirimisÃ¹, which gives it a slightly Japanese air. The Japanese love tiramisÃ¹, but although they sometimes make it with green tea rather than coffee this misspelling isnâ€™t their fault.', 'Grammar Nazi: In formal fencing matches, when someone is hit by an opponentâ€™s sword it is traditional for the person hit to cry out touchÃ© (French for â€œtouchedâ€) to acknowledge that fact. In other contexts, we may say touchÃ© when somebody scores a point against us in an argument, or otherwise skewers us verbally.', 'Grammar Nazi: â€œXmasâ€ is not originally an attempt to exclude Christ from Christmas, but uses an abbreviation of the Greek spelling of the word â€œChristâ€ with the â€œXâ€ representing the Greek letter chi. However, so few people know this that it is probably better not to use this popular abbreviation in religious contexts. So quit your bitching!', 'Grammar Nazi: In some dialects itâ€™s common to say â€œyouâ€™ve got a ways to go before youâ€™ve saved enough to buy a Miata,â€ but in standard English itâ€™s â€œa way to go.â€', 'Grammar Nazi: Than is a comparision. Then is time based.']; //â€™ (apostrophe) //add these: http://public.wsu.edu/~brians/errors/errors.html
                var randomNumber = Math.floor(Math.random() * textArray.length);
                gClient.sendArray([{
                    m: "a",
                    message: textArray[randomNumber]
                }]);
			} else if (message.substring(0, 8).toLowerCase() == "!grammer") {		    //grammer command for idiots
                var textArray = ['Close, but no cigar!', 'Nice going...', 'You moronic fool!', 'Even slurp the squid can spell grammar!', 'Grammar* You idiot!', 'You, sir are not educated!']; //â€™ (apostrophe) //add these: http://public.wsu.edu/~brians/errors/errors.html
                var randomNumber = Math.floor(Math.random() * textArray.length);
                gClient.sendArray([{
                    m: "a",
                    message: textArray[randomNumber]
                }]);
			} else if (message.substring(0, 5).toLowerCase() == "!joke") {		    //joke command
                var textArray = ['You can tune a piano but you canâ€™t tuna fish!', 'What sounds does a Bee make? A B#!', 'What do you get when you drop a piano on an army base? A flat major!', 'A note left for a pianist from his wife: â€œGone Chopin, (have Liszt), Bach in a Minuet.â€', 'What did a piano player say to a tightrope walker? You better C sharp or youâ€™ll B flat!', 'What do you call a fish musician? A piano tuna!', 'Why was the piano player arrested?  Because he got into treble.', 'Whatâ€™s the difference between a piano and an onion?  No one cries when you chop up a piano.', 'Did you hear about the circus fire? It was in tents! (Intense)', 'Two guys walk into a bar... the 3rd guy ducked!', 'A blonde gets her haircut while wearing a pair of headphones. The hairdresser asks her to take them off, but she protests that sheâ€™ll die without them. The hairdresser sighs, and starts cutting the hair around the headphones. Soon, the blonde falls asleep, and the hairdresser removes the headphones. A few minutes later, the blonde collapses, dead on the floor. Alarmed, the hairdresser puts the headphones to his ear and hears, "Breathe in. Breathe out."', 'Yo Mamaâ€™s so fat, it takes 2 trains and a bus to get to her good side.']; //â€™ (apostrophe) //Thanks to various people giving me some awesome jokes on MPP!
                var randomNumber = Math.floor(Math.random() * textArray.length);
                gClient.sendArray([{
                    m: "a",
                    message: textArray[randomNumber]
                }]);
            } else if (message.substring(0, 5).toLowerCase() == "!ctof") {					//temp
                var fTemp = message.substring(6).trim() * (9 / 5) + 32;
                var outcome = fTemp.toString();
                if (message.substring(6).trim() == "" || isNaN(fTemp)) {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !ctof temperature eg: 32"
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: outcome.substring(0, 100)
                    }]);
                }
            } else if (message.substring(0, 5).toLowerCase() == "!ftoc") {					//temp
                var cTemp = (message.substring(6).trim() - 32) * (5 / 9);
                var outcome = cTemp.toString();
                if (message.substring(6).trim() == "" || isNaN(cTemp)) {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !ftoc temperature here eg: 74"
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: outcome.substring(0, 100)
                    }]);
                }
            } else if (message.substring(0, 5).toLowerCase() == "!poke") {					//poke
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !poke Name_Here"
                    }]);
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You cannot poke yourself!"
                    }]);
                } else if (target_participant) {
                    gClient.sendArray([{
                        m: "a",
                        message: name + " poked " + target_participant.name
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to poke by the name of " + msg.a.substring(5).trim()
                    }]);
                }
            } else if (message.substring(0, 5).toLowerCase() == "!stab") {							//stab command
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !stab Name_Here"
                    }]);
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You cannot stab yourself... unless you wanted to do that D:"
                    }]);
                } else if (target_participant) {
                    gClient.sendArray([{
                        m: "a",
                        message: name + " stabbed " + target_participant.name +", " + target_participant.name + " lays on their side... then staby stab stab stab!"
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to stab by the name of " + msg.a.substring(5).trim()
                    }]);
                }
            } else if (message.substring(0, 9).toLowerCase() == "!highfive") {									//highfive command
                var target_name_lowercase = msg.a.substring(10).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(10).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !highfive Name_Here"
                    }]);
                } else if (message.substring(10).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You cannot highfive yourself!"
                    }]);
                } else if (target_participant) {
                    gClient.sendArray([{
                        m: "a",
                        message: name + " highfived " + target_participant.name
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to highfive by the name of " + msg.a.substring(10).trim()
                    }]);
                }

            } else if (message.substring(0, 5).toLowerCase() == "!kiss") {										//kiss command
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !kiss Name_Here"
                    }]);
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You cannot kiss yourself, lonely much..."
                    }]);
                } else if (target_participant) {
                    gClient.sendArray([{
                        m: "a",		//PERSON kissed PERSON, PERSON blushes
                        message: name + " kissed " + target_participant.name +", " + target_participant.name + " blushes"
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to kiss by the name of " + msg.a.substring(5).trim()
                    }]);
                }

            } else if (message.substring(0, 5).toLowerCase() == "!duel") {											//duel command
                var target_name_lowercase = msg.a.substring(6).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !duel Name_Here"
                    }]);
                } else if (message.substring(6).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You cannot duel yourself! use !suicide"
                    }]);
                } else if (target_participant) {
                    if (lvltmp[target_participant.color] == undefined) lvltmp[target_participant.color] = 1;
                    if (lvltmp[names.color] == undefined) lvltmp[names.color] = 1;
                    if (healthtmp[target_participant.color] == undefined) healthtmp[target_participant.color] = 100;
                    if (healthtmp[names.color] == undefined) healthtmp[names.color] = 100;
                    var total = lvltmp[target_participant.color] + lvltmp[names.color];
                    gClient.sendArray([{
                        m: "a",
                        message: target_participant.name + " was challenged to a duel by " + names.name
                    }]);
                    if (Math.random() < 1.0 * lvltmp[names.color] / total) {
                        setTimeout(function () {
                            youwin(target_participant.name, names.name, name.color, total);
                        }, 4000);

                    } else {
                        setTimeout(function () {
                            youwin(names.name, target_participant.name, target_participant.color, total);
                        }, 4000);

                    }
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to duel by the name of " + msg.a.substring(5).trim()
                    }]);
                }

            } else if (message.substring(0, 5).toLowerCase() == "!slap") {							//slap command
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !slap Name_Here"
                    }]);
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You cannot slap yourself, that would be weird."
                    }]);
                } else if (target_participant) {
                    gClient.sendArray([{
                        m: "a",
                        message: name + " Slapped " + target_participant.name + ", " + target_participant.name +" is sad :c" //message: name + " slapped " + target_participant.name +", " + target_participant.name + " has a stiff face Â°-Â°"
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to slap by the name of " + msg.a.substring(5).trim()
                    }]);
                }

            } else if (message.substring(0, 7).toLowerCase() == "!cuddle") {									//cuddle command
                var target_name_lowercase = msg.a.substring(7).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(7).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !cuddle Name_Here"
                    }]);
                } else if (message.substring(7).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You cannot cuddle yourself, you lonely fuck."
                    }]);
                } else if (target_participant) {
                    gClient.sendArray([{
                        m: "a",
                        message: name + " cuddled with " + target_participant.name
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to cuddle by the name of " + msg.a.substring(7).trim()
                    }]);
                }

            } else if (message.substring(0, 4).toLowerCase() == "!hug") {				//hug command
                var target_name_lowercase = msg.a.substring(4).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !hug Name_Here"
                    }]);
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You cannot hug yourself!"
                    }]);
                } else if (target_participant) {
                    gClient.sendArray([{
                        m: "a",
                        message: name + " gave " + target_participant.name + " a hug!"
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to hug by the name of " + msg.a.substring(5).trim()
                    }]);
                }
			} else if (message.substring(0, 5).toLowerCase() == "!rape") {							//rape command... lol
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(6).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !rape Name_Here"
                    }]);
                } else if (message.substring(6).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You cannot rape yourself! Rape the Anonymous people!!!"
                    }]);
                } else if (target_participant) {
                    gClient.sendArray([{
                        m: "a",
                        message: name + " raped " + target_participant.name + " á¶˜ áµ’á´¥áµ’á¶…"
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to rape by the name of " + msg.a.substring(5).trim()
                    }]);
                }

            } else if (message.substring(0, 5).toLowerCase() == "!gift") {						//gift command
                var giftArray = ['a cute kitten!', 'a cute puppy!', 'a potato!', 'a pikachu!', 'a brand new Xbox One!', 'a brand new PS4!', '1 million cows!', 'a slice of bacon!', 'a boating license!', 'a bunch of money!', 'some cake!', 'a box inside of a... BOX!', 'a new phone!', 'a new piano!', 'some chicken nuggets!', 'a brand new Wii U!', 'an evil gerbil!', 'a captains ship!', 'some sfoof! (Semolina Turmeric Cake)', 'some pizza!', 'a new laptop!', 'a piece of cotton', 'a spoon', 'a dribbling cat']; //add more... like 100 :D

                var randomNumber = Math.floor(Math.random() * giftArray.length);
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !gift Name_Here"
                    }]);
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You cannot gift yourself! That would be greedy"
                    }]);
                } else if (target_participant) {
                    gClient.sendArray([{
                        m: "a",
                        message: name + " gave " + target_participant.name + " " + giftArray[randomNumber]
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to gift by the name of " + msg.a.substring(5).trim()
                    }]);
                }
			} else if (message.substring(0, 7).toLowerCase() == "!attack") {			//attack command
                var attackArray = ['Fondue sticks,', 'Piece of bread', 'Rubber chicken', 'Piano', 'Turtle shell', 'Lamp', 'Knitting needle', 'Brake cable', 'Totally non-harmful piece of string c:', 'Rake', 'Shovel', 'Birds nest', 'Bit of help from gravity', 'Sharp stick', 'Stick covered in poop Â°-Â°', 'Can of softdrink (isnâ€™t too soft)', 'Disembodied arm', 'Candle stick', 'Wet iguana', 'Duck', 'Spoon', 'Boat oar', 'Large rock', 'Sharp triangle', 'Trumpet', 'Toy car', 'Buzz saw', 'Computer keyboard', 'Ed and Meganâ€™s love', 'Cd', 'Shoe Lace', 'M4', 'Mini-Uzi'];

                var randomNumber = Math.floor(Math.random() * attackArray.length);
                var target_name_lowercase = msg.a.substring(7).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(7).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !attack Name_Here"
                    }]);
                } else if (message.substring(7).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You cannot attack yourself! Attack Anonymous people"
                    }]);
                } else if (target_participant) {
                    gClient.sendArray([{
                        m: "a",
                        message: name + " attacked " + target_participant.name + " with a " + attackArray[randomNumber]
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to attack by the name of " + msg.a.substring(7).trim()
                    }]);
                }

            } else if (message.substring(0, 7).toLowerCase() == "!colour" || message.substring(0, 6).toLowerCase() == "!color") {			//colour command
                var target_name_lowercase = msg.a.substring(7).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (target_participant) {
                    gClient.sendArray([{
                        m: "a",
                        message: target_participant.name + "'s colour is: " + new Color(target_participant.color).getName() + " (" + target_participant.color + ") You can't change colours they're bases on IP"
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Your colour is: " + new Color(msg.p.color).getName() + " (" + msg.p.color + ") You can't change colours, they're based on IP" + " You can also type !colour Name_Here"
                    }]);
                }
            } else if (message.substring(0, 8).toLowerCase() == "!unicode") {			//unicode command
                gClient.sendArray([{
                    m: "a",
                    message: "Put some of these in your name: á´¥â˜…â˜†â˜Žâ˜â˜œâ˜žâ˜ºâ˜»â˜¼â™€â™‚â™ â™¡â™£â™¤â™¥â™¦â™§â™¨â™©â™ªâ™«â™¬â™­â™¯âˆ‘â‰¤Î©âˆâˆ«ÂºÎ©âˆžâˆšâˆ†Â¬ â–„â– â™ªâ™« â–ˆ â–„ â–º â—„ â–„ à¹–Û£Ûœ"
                }]);
            } else if (message.substring(0, 8).toLowerCase() == "!applaud" || message.substring(0, 5).toLowerCase() == "!clap") {			//clap command
                gClient.sendArray([{
                    m: "a",
                    message: name + " applauds!"
                }]);
			} else if (message.substring(0, 9).toLowerCase() == "!slowclap") {			//slow clap command
                gClient.sendArray([{
                    m: "a",
                    message: name + " claps slowly in approval"
                }]);

            } else if (message.substring(0, 6).toLowerCase() == "!quote") {				//quote command
                var textArray = ['Life is like riding a bicycle. To keep your balance, you must keep moving.', 'Excuses are only attempts to explain failure.', 'Sometimes people are beautiful. Not in looks. Not in what they say. Just in what they are.', 'If you dont know where you are going, any road will take you there', 'It is better to get hurt by the truth than comforted with a lie.', 'Where there is love there is life.', 'Of all sad words of tongue or pen, the saddest are these; It might have been.', 'Its impossible said Pride. Its risky said Experience. Its pointless said Reason. Give it a try... whispered The Heart', 'Someday everything will make perfect sense. So for now, laugh at the confusion, smile through the tears, and keep reminding yourself everything happens for a reason', 'The secret to happiness is not to do what makes you happy, its to be happy doing what youre already doing.', 'It is sad when someone you know becomes someone you knew.', 'The best and most beautiful things in the world cannot be seen or even touched / they must be felt with the heart.', 'I do believe that if you havent learnt about sadness, you cannot appreciate happiness.', 'Crying is cleansing. There is a reason for tears, happiness or sadness.', 'It is during our darkest moments that we must focus to see the light.', 'There are two things to keep in mind when you are an old man: always take advantage of a hard-on, and never trust a fart Â°-Â°', 'Donâ€™t wish what you can do!', 'People say nothing rhymes with Orange, this is false. Nothing and Orange do not rhyme. (English word ordering and syntax is funny :D', 'If you try to fail, but succed, which one have you done?', 'I do believe that if you havenâ€™t learnt about sadness, you cannot appreciate happiness.'];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                gClient.sendArray([{
                    m: "a",
                    message: textArray[randomNumber]
                }]);
			} else if (message.substring(0, 12).toLowerCase() == "!funny quote" || message.substring(0, 3).toLowerCase() == "!fq") {	//funny quote command
                var textArray = ['Someone got hit by a can on the head. They were lucky, as it was a SoftDrink.', 'Welcome the weirdness, itâ€™s yours, use it', 'I wanna make a jigsaw puzzle thats 40,000 pieces. And when you finish it, it says go outside.', 'I havent spoken to my wife in years. I didnt want to interrupt her.', 'Always remember that you are absolutely unique. Just like everyone else.', 'All right everyone, line up alphabetically according to your height.', 'A lot of people are afraid of heights. Not me, Im afraid of widths.', 'My fake plants died because I did not pretend to water them.', 'My grandmother started walking five miles a day when she was sixty. Shes ninety-seven now, and we dont know where the hell she is.', 'A day without sunshine is like, you know, night.', 'A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man', 'Iâ€™m super lazy today!!! Which is like normal lazy but Iâ€™m also wearing a cape...', 'Lasagna is basically spaghetti flavored cake.', 'My wife told me the other day that I donâ€™t take her to expensive places any more, so I took her to the gas station.', 'Chuck Norris can blow bubbles with chewing tobacco']; //â€™
                var randomNumber = Math.floor(Math.random() * textArray.length);
                gClient.sendArray([{
                    m: "a",
                    message: textArray[randomNumber]
                }]);

            } else if (message.substring(0, 5).toLowerCase() == "!list") {				//list command
                var list = "  Connected users";
                for (var id in gClient.ppl) {
                    if (gClient.ppl.hasOwnProperty(id)) {
                        list += ", " + gClient.ppl[id].name;
                    }
                }
                list = list.substr(2);
                gClient.sendArray([{
                    m: "a",
                    message: list
                }]);
                return;

            } else if (message.substring(0, 9).toLowerCase() == "!facepalm") {			//facepalm command
                gClient.sendArray([{
                    m: "a",
                    message: name + " facepalmed, and has a sore head"
                }]);

            } else if (message.substring(0, 12).toLowerCase() == "!musicsheets" || message.substring(0, 3).toLowerCase() == "!ms") {		//musicsheets command
                gClient.sendArray([{
                    m: "a",
                    message: "Here are some music sheets " + name + ", Link: http://pastebin.com/dfyjCunb"		//update when you update link, Logan
                }]);

            } else if (message.substring(0, 8).toLowerCase() == "!suicide") {
                gClient.sendArray([{
                    m: "a",
                    message: name + " has taken a sword to their stomach"
                }]);

			} else if (message.substring(0, 5).toLowerCase() == "!kill") {					//kill command
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    gClient.sendArray([{
                        m: "a",
                        message: "Usage: !kill Name_Here"
                    }]);
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    gClient.sendArray([{
                        m: "a",
                        message: name + " drives a massive sword through their rib cage splitting them in half slowly"
                    }]);
                } else if (target_participant) {
                    gClient.sendArray([{
                        m: "a",		//PERSON killed PERSON, PERSON lays dead x_x
                        message: name + " killed " + target_participant.name
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "Could not find anyone to kill by the name of " + msg.a.substring(5).trim()
                    }]);
                }

            } else if (message.substring(0, 5).toLowerCase() == "!face") {					//face command
                var textArray = ['â•¥ï¹â•¥', '(â—•á´¥â—•ã—)', 'Ê•â€¢á´¥â€¢Ê”', '(â—¡â€¿â—¡âœ¿)', 'ãƒ½à¼¼ à² ç›Šà²  à¼½ï¾‰', 'ï¼¾â€¿ï¼¾', 'á¶˜ áµ’á´¥áµ’á¶…', 'à¹Ì¯Í¡à¹', '^ã…‚^', ' à² _à²°à³ƒ', '(ï¾‰â—•ãƒ®â—•)ï¾‰*:ï½¥ï¾Ÿâœ§', 'â—•â—¡â—•', 'à² â–ƒà² ', 'à² â•­â•®à² ', 'à² âŒ£à² ', 'à² â—¡à² ', 'áƒš(à² ç›Šà² áƒš)', 'áƒš(â—‰â—žà±ªâ—Ÿâ—‰â€µáƒš)', 'âŠ™Ï‰âŠ™', 'âŠ™â–‚âŠ™', 'â•¯â€µÐ”â€²)â•¯å½¡â”»â”â”»', 'â—•Ï‰â—•', 'âŒ’â–½âŒ’', 'â™¥â—¡â™¥', 'ï½¡â—•â€¿â€¿â—•ï½¡', 'ï½¡â—• â€¿ â—•ï½¡', '(Â´â—‰â—žà±ªâ—Ÿâ—‰)', 'Ô¾â€¸ Ô¾', '(áµ”á´¥áµ”)', 'â€¢ Îµ â€¢', '(âŒâ– _â– )', '(â”›â—‰Ð”â—‰)â”›â”»â”â”»', '(â•¯Â°â–¡Â°ï¼‰â•¯ï¸µ â”»â”â”» ', 'â—• ^ â—•', '(â˜žï¾Ÿ âˆ€ï¾Ÿ )â˜ž', '(ã¥ï½¡â—•â€¿â€¿â—•ï½¡)ã¥', '(ãƒŽà² ç›Šà² )ãƒŽå½¡â”»â”â”»', 'ï¼›ä¸€_ä¸€', '\(â—• â—¡ â—•\)', 'Â°-Â°', 'Â¶_Â¶', '( Í¡Â° ÍœÊ– Í¡Â°)', '|)^_^(|'];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                gClient.sendArray([{
                    m: "a",
                    message: textArray[randomNumber]
                }]);


            } else if (message.substring(0, 4).toLowerCase() == "!say") {					//say command
                if (opped) {
                    gClient.sendArray([{
                        m: "a",
                        message: message.substring(5).trim()
                    }]);
                } else if (!opped) {
                    gClient.sendArray([{
                        m: "a",
                        message: "You are not allowed to use the !say command."
                    }]);
                }
            } else if (message.substring(0, 7).toLowerCase() == "!rename") {				//rename command
                if (opped) {
                    gClient.sendArray([{
                        "m": "userset",
                        "set": {
                            "name": msg.a.substring(7).trim()
                        }
                    }]);
					gClient.sendArray([{
                        m: "a",
                        message: "R.I.P " + name
                    }]);
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "You are not allowed to rename LoganNZL. To change your own name click on your name up top and enter a new one."
                    }]);
                }

            } else if (message.substring(0, 9).toLowerCase() == "!welcomes" || message.substring(0, 8).toLowerCase() == "!welcome") {			//welcome command
                if (opped) {
                    if (!welcTemp) {
                        welcTemp = !welcTemp;
                        gClient.sendArray([{
                            m: "a",
                            message: "Welcoming message ON"
                        }]);
                    } else {
                        welcTemp = !welcTemp;
                        gClient.sendArray([{
                            m: "a",
                            message: "Welcoming message OFF"
                        }]);
                    }
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "You are not allowed to turn on/off the welcoming message."
                    }]);
                }
			} else if (message.substring(0,6).toLowerCase() == "!alert") 						//alert command
				{ if (opped)
					{ var WAIT_M = 1; alert(names.name + " has summoned you!");
					wait_until = Date.now() + WAIT_M; }							//alert command (thanks StarSeed Onion!)

            } else if (message.substring(0, 4).toLowerCase() == "!ban") {						//ban command
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                if (opped) {
                    for (var id in gClient.ppl) {
                        if (!gClient.ppl.hasOwnProperty(id)) continue;
                        var part = gClient.ppl[id];
                        if (part.name.toLowerCase() === target_name_lowercase) {
                            target_participant = part;
                            break;
                        }
                    }
                    if (target_participant) {
                        if (target_participant._id == "3d84c124783d491385cee6bf") {
                            gClient.sendArray([{
                                m: "a",
                                message: "._."
                            }]);
                        } else if (target_participant._id == "4e28d8736f8a464ada652896") {
                            gClient.sendArray([{
                                m: "a",
                                message: "You cannot ban LoganNZL's friend " + target_participant.name
                            }]);
                        } else {
                            banned.push(target_participant._id);
                        }
                    } else {
                        gClient.sendArray([{
                            m: "a",
                            message: "Could not find anyone to ban by the name of " + msg.a.substring(5).trim()
                        }]);
                    }
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "You are not allowed to ban players!"
                    }]);
                }

            } else if (message.substring(0, 6).toLowerCase() == "!unban") {						//unban command
                var target_name_lowercase = msg.a.substring(7).trim().toLowerCase();
                var target_participant = undefined;
                if (opped) {
                    for (var id in gClient.ppl) {
                        if (!gClient.ppl.hasOwnProperty(id)) continue;
                        var part = gClient.ppl[id];
                        if (part.name.toLowerCase() === target_name_lowercase) {
                            target_participant = part;
                            break;
                        }
                    }
                    if (target_participant) {
                        while (banned.indexOf(target_participant._id) !== -1) {
                            banned.splice(banned.indexOf(target_participant._id), 1);
                        }

                        while (banned.indexOf(target_participant._id) !== -1) {
                            delete banned[banned.indexOf(target_participant._id)];
                        }
                    } else {
                        gClient.sendArray([{
                            m: "a",
                            message: "Could not find anyone to unban by the name of " + msg.a.substring(7).trim()
                        }]);
                    }
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "You are not allowed to unban a player!"
                    }]);
                }

            } else if (message.substring(0, 6).toLowerCase() == "!unban") {
                var target_name_lowercase = msg.a.substring(7).trim().toLowerCase();
                var target_participant = undefined;
                if (opped) {
                    for (var id in gClient.ppl) {
                        if (!gClient.ppl.hasOwnProperty(id)) continue;
                        var part = gClient.ppl[id];
                        if (part.name.toLowerCase() === target_name_lowercase) {
                            target_participant = part;
                            break;
                        }
                    }
                    if (target_participant) {
                        while (banned.indexOf(target_participant._id) !== -1) {
                            banned.splice(banned.indexOf(target_participant._id), 1);
                        }

                        while (banned.indexOf(target_participant._id) !== -1) {
                            delete banned[banned.indexOf(target_participant._id)];
                        }
                    } else {
                        gClient.sendArray([{
                            m: "a",
                            message: "Could not find anyone to unban by the name of " + msg.a.substring(7).trim()
                        }]);
                    }
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "You are not allowed to unban a player!"
                    }]);
                }

            } else if (message.substring(0, 3).toLowerCase() == "!op") {				//op command
                var target_name_lowercase = msg.a.substring(3).trim().toLowerCase();
                var target_participant = undefined;
                if (opped) {
                    for (var id in gClient.ppl) {
                        if (!gClient.ppl.hasOwnProperty(id)) continue;
                        var part = gClient.ppl[id];
                        if (part.name.toLowerCase() === target_name_lowercase) {
                            target_participant = part;
                            break;
                        }
                    }
                    if (target_participant) {
                        gClient.sendArray([{
                            m: "a",
                            message: "Opped " + target_participant.name
                        }]);
                        ops.push(target_participant._id);

                    } else {
                        gClient.sendArray([{
                            m: "a",
                            message: "Could not find anyone to op by the name of " + msg.a.substring(4).trim()
                        }]);
                    }
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "You are not allowed to op a player!"
                    }]);
                }

            } else if (message.substring(0, 5).toLowerCase() == "!deop") {							//deop command
                var target_name_lowercase = msg.a.substring(6).trim().toLowerCase();
                var target_participant = undefined;
                if (opped) {
                    for (var id in gClient.ppl) {
                        if (!gClient.ppl.hasOwnProperty(id)) continue;
                        var part = gClient.ppl[id];
                        if (part.name.toLowerCase() === target_name_lowercase) {
                            target_participant = part;
                            break;
                        }
                    }
                    if (target_participant) {
                        if (target_participant._id == "3d84c124783d491385cee6bf") {
                            gClient.sendArray([{
                                m: "a",
                                message: "You cannot deop LoganNZL!"
                            }]);
                        } else {
                            while (ops.indexOf(target_participant._id) !== -1) {
                                ops.splice(banned.indexOf(target_participant._id), 1);
                            }

                            while (ops.indexOf(target_participant._id) !== -1) {
                                delete ops[ops.indexOf(target_participant._id)];
                            }
                        }
                    } else {
                        gClient.sendArray([{
                            m: "a",
                            message: "Could not find anyone to deop by the name of " + msg.a.substring(6).trim()
                        }]);
                    }
                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "You are not allowed to deop a player!"
                    }]);
                }
            } else if (message.substring(0, 1) == "!") {		//alternative error messages
                if (message.substring(2).trim() == "") {

                } else {
                    gClient.sendArray([{
                        m: "a",
                        message: "I donâ€™t know that command, use !help for a list of valid commands."
                    }]);
                }
            }
        }
    });

var Color = function () {
    var r, g, b;
    if (arguments.length === 1) {
        var hexa = arguments[0].toLowerCase();
        if (hexa.match(/^#[0-9a-f]{6}$/i)) {
            hexa = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hexa);
            if (hexa && hexa.length === 4) {
                r = parseInt(hexa[1], 16);
                g = parseInt(hexa[2], 16);
                b = parseInt(hexa[3], 16);
            }
        }
    } else if (arguments.length === 3) {
        r = arguments[0];
        g = arguments[1];
        b = arguments[2];
    }
    this.r = ~~r || 0;
    this.g = ~~g || 0;
    this.b = ~~b || 0;
};

Color.prototype.distance = function (color) {
    var d = 0;
    d += Math.pow(this.r - color.r, 2);
    d += Math.pow(this.g - color.g, 2);
    d += Math.pow(this.b - color.b, 2);
    return Math.abs(Math.sqrt(d));
};

Color.prototype.toHexa = function () {
    var r = this.r.toString(16),
        g = this.g.toString(16),
        b = this.b.toString(16);
    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
    return "#" + r + g + b;
};

Color.prototype.getName = function () {
    var hexa = this.toHexa();
    var low = 256;
    var name;
    for (var n in Color.map) {
        if (!Color.map.hasOwnProperty(n)) continue;
        var color = Color.map[n];
        if (color.r === this.r && color.g === this.g && color.b === this.b) {
            return n;
        }
        var dist = this.distance(color);
        if (dist < low) {
            low = dist;
            name = n;
        }
    }
    if (!name) name = this.toHexa();
    else name = "A shade of " + name;
    return name;
};

Color.map = {};

Color.addToMap = function (hexa, name) {
    Color.map[name] = new Color(hexa);
};

Color.addToMap("#7CB9E8", "Aero");
Color.addToMap("#C9FFE5", "Aero blue");
Color.addToMap("#B284BE", "African purple");
Color.addToMap("#5D8AA8", "Air Force blue (RAF)");
Color.addToMap("#00308F", "Air Force blue (USAF)");
Color.addToMap("#72A0C1", "Air superiority blue");
Color.addToMap("#AF002A", "Alabama Crimson");
Color.addToMap("#F0F8FF", "Alice blue");
Color.addToMap("#E32636", "Alizarin crimson");
Color.addToMap("#C46210", "Alloy orange");
Color.addToMap("#EFDECD", "Almond");
Color.addToMap("#E52B50", "Amaranth");
Color.addToMap("#F19CBB", "Amaranth pink");
Color.addToMap("#AB274F", "Dark amaranth");
Color.addToMap("#3B7A57", "Amazon");
Color.addToMap("#FF7E00", "Amber");
Color.addToMap("#FF033E", "American rose");
Color.addToMap("#9966CC", "Amethyst");
Color.addToMap("#A4C639", "Android green");
Color.addToMap("#F2F3F4", "Anti-flash white");
Color.addToMap("#CD9575", "Antique brass");
Color.addToMap("#665D1E", "Antique bronze");
Color.addToMap("#915C83", "Antique fuchsia");
Color.addToMap("#841B2D", "Antique ruby");
Color.addToMap("#FAEBD7", "Antique white");
Color.addToMap("#8DB600", "Apple green");
Color.addToMap("#FBCEB1", "Apricot");
Color.addToMap("#00FFFF", "Aqua");
Color.addToMap("#7FFFD4", "Aquamarine");
Color.addToMap("#4B5320", "Army green");
Color.addToMap("#3B444B", "Arsenic");
Color.addToMap("#8F9779", "Artichoke");
Color.addToMap("#B2BEB5", "Ash grey");
Color.addToMap("#87A96B", "Asparagus");
Color.addToMap("#FDEE00", "Aureolin");
Color.addToMap("#6E7F80", "AuroMetalSaurus");
Color.addToMap("#568203", "Avocado");
Color.addToMap("#007FFF", "Azure");
Color.addToMap("#F0FFFF", "Azure mist/web");
Color.addToMap("#89CFF0", "Baby blue");
Color.addToMap("#A1CAF1", "Baby blue eyes");
Color.addToMap("#FEFEFA", "Baby powder");
Color.addToMap("#FF91AF", "Baker-Miller pink");
Color.addToMap("#21ABCD", "Ball blue");
Color.addToMap("#FAE7B5", "Banana Mania");
Color.addToMap("#FFE135", "Banana yellow");
Color.addToMap("#E0218A", "Barbie pink");
Color.addToMap("#7C0A02", "Barn red");
Color.addToMap("#848482", "Battleship grey");
Color.addToMap("#98777B", "Bazaar");
Color.addToMap("#9F8170", "Beaver");
Color.addToMap("#F5F5DC", "Beige");
Color.addToMap("#2E5894", "B'dazzled blue");
Color.addToMap("#9C2542", "Big dip oâ€™ruby");
Color.addToMap("#FFE4C4", "Bisque");
Color.addToMap("#3D2B1F", "Bistre");
Color.addToMap("#967117", "Bistre brown");
Color.addToMap("#CAE00D", "Bitter lemon");
Color.addToMap("#648C11", "Bitter lime");
Color.addToMap("#FE6F5E", "Bittersweet");
Color.addToMap("#BF4F51", "Bittersweet shimmer");
Color.addToMap("#000000", "Black with no soul!");
Color.addToMap("#3D0C02", "Black bean");
Color.addToMap("#253529", "Black leather jacket");
Color.addToMap("#3B3C36", "Black olive");
Color.addToMap("#FFEBCD", "Blanched almond");
Color.addToMap("#A57164", "Blast-off bronze");
Color.addToMap("#318CE7", "Bleu de France");
Color.addToMap("#ACE5EE", "Blizzard Blue");
Color.addToMap("#FAF0BE", "Blond");
Color.addToMap("#0000FF", "Blue");
Color.addToMap("#1F75FE", "Blue (Crayola)");
Color.addToMap("#0093AF", "Blue (Munsell)");
Color.addToMap("#0087BD", "Blue (NCS)");
Color.addToMap("#333399", "Blue (pigment)");
Color.addToMap("#0247FE", "Blue (RYB)");
Color.addToMap("#A2A2D0", "Blue Bell");
Color.addToMap("#6699CC", "Blue-gray");
Color.addToMap("#0D98BA", "Blue-green");
Color.addToMap("#126180", "Blue sapphire");
Color.addToMap("#8A2BE2", "Blue-violet");
Color.addToMap("#5072A7", "Blue yonder");
Color.addToMap("#4F86F7", "Blueberry");
Color.addToMap("#1C1CF0", "Bluebonnet");
Color.addToMap("#DE5D83", "Blush");
Color.addToMap("#79443B", "Bole Brown");
Color.addToMap("#0095B6", "Bondi blue");
Color.addToMap("#E3DAC9", "Bone");
Color.addToMap("#CC0000", "Boston University Red");
Color.addToMap("#006A4E", "Bottle green");
Color.addToMap("#873260", "Boysenberry");
Color.addToMap("#0070FF", "Brandeis blue");
Color.addToMap("#B5A642", "Brass");
Color.addToMap("#CB4154", "Brick red");
Color.addToMap("#1DACD6", "Bright cerulean");
Color.addToMap("#66FF00", "Bright green");
Color.addToMap("#BF94E4", "Bright lavender");
Color.addToMap("#D891EF", "Bright lilac");
Color.addToMap("#C32148", "Bright maroon");
Color.addToMap("#1974D2", "Bright navy blue");
Color.addToMap("#FF007F", "Bright pink");
Color.addToMap("#08E8DE", "Bright turquoise");
Color.addToMap("#D19FE8", "Bright ube");
Color.addToMap("#F4BBFF", "Brilliant lavender");
Color.addToMap("#FF55A3", "Brilliant rose");
Color.addToMap("#FB607F", "Brink pink");
Color.addToMap("#004225", "British racing green");
Color.addToMap("#CD7F32", "Bronze");
Color.addToMap("#737000", "Bronze Yellow");
Color.addToMap("#964B00", "Brown");
Color.addToMap("#6B4423", "Brown-nose");
Color.addToMap("#FFC1CC", "Bubble gum");
Color.addToMap("#E7FEFF", "Bubbles");
Color.addToMap("#F0DC82", "Buff");
Color.addToMap("#7BB661", "Bud green");
Color.addToMap("#480607", "Bulgarian rose");
Color.addToMap("#800020", "Burgundy");
Color.addToMap("#DEB887", "Burlywood");
Color.addToMap("#CC5500", "Burnt orange");
Color.addToMap("#8A3324", "Burnt umber");
Color.addToMap("#BD33A4", "Byzantine");
Color.addToMap("#702963", "Byzantium");
Color.addToMap("#536872", "Cadet");
Color.addToMap("#5F9EA0", "Cadet blue");
Color.addToMap("#91A3B0", "Cadet grey");
Color.addToMap("#006B3C", "Cadmium green");
Color.addToMap("#ED872D", "Cadmium orange");
Color.addToMap("#E30022", "Cadmium red");
Color.addToMap("#FFF600", "Cadmium yellow");
Color.addToMap("#A67B5B", "Cafe au lait");
Color.addToMap("#4B3621", "Cafe noir");
Color.addToMap("#1E4D2B", "Cal Poly green");
Color.addToMap("#A3C1AD", "Cambridge Blue");
Color.addToMap("#EFBBCC", "Cameo pink");
Color.addToMap("#78866B", "Camouflage green");
Color.addToMap("#FFEF00", "Canary yellow");
Color.addToMap("#FF0800", "Candy apple red");
Color.addToMap("#E4717A", "Candy pink");
Color.addToMap("#592720", "Caput mortuum");
Color.addToMap("#C41E3A", "Cardinal");
Color.addToMap("#00CC99", "Caribbean green");
Color.addToMap("#960018", "Carmine");
Color.addToMap("#EB4C42", "Carmine pink");
Color.addToMap("#FF0038", "Carmine red");
Color.addToMap("#FFA6C9", "Carnation pink");
Color.addToMap("#99BADD", "Carolina blue");
Color.addToMap("#ED9121", "Carrot orange");
Color.addToMap("#00563F", "Castleton green");
Color.addToMap("#062A78", "Catalina blue");
Color.addToMap("#703642", "Catawba");
Color.addToMap("#C95A49", "Cedar Chest");
Color.addToMap("#92A1CF", "Ceil");
Color.addToMap("#ACE1AF", "Celadon");
Color.addToMap("#007BA7", "Celadon blue");
Color.addToMap("#2F847C", "Celadon green");
Color.addToMap("#4997D0", "Celestial blue");
Color.addToMap("#EC3B83", "Cerise pink");
Color.addToMap("#2A52BE", "Cerulean blue");
Color.addToMap("#6D9BC3", "Cerulean frost");
Color.addToMap("#007AA5", "CG Blue");
Color.addToMap("#E03C31", "CG Red");
Color.addToMap("#A0785A", "Chamoisee");
Color.addToMap("#F7E7CE", "Champagne");
Color.addToMap("#36454F", "Charcoal");
Color.addToMap("#232B2B", "Charleston green");
Color.addToMap("#E68FAC", "Charm pink");
Color.addToMap("#DFFF00", "Chartreuse");
Color.addToMap("#7FFF00", "Chartreuse (web)");
Color.addToMap("#DE3163", "Cherry");
Color.addToMap("#FFB7C5", "Cherry blossom pink");
Color.addToMap("#954535", "Chestnut");
Color.addToMap("#A8516E", "China rose");
Color.addToMap("#AA381E", "Chinese red");
Color.addToMap("#856088", "Chinese violet");
Color.addToMap("#7B3F00", "Chocolate");
Color.addToMap("#FFA700", "Chrome yellow");
Color.addToMap("#98817B", "Cinereous");
Color.addToMap("#E4D00A", "Citrine");
Color.addToMap("#9FA91F", "Citron");
Color.addToMap("#7F1734", "Claret");
Color.addToMap("#FBCCE7", "Classic rose");
Color.addToMap("#0047AB", "Cobalt");
Color.addToMap("#D2691E", "Cocoa brown");
Color.addToMap("#965A3E", "Coconut");
Color.addToMap("#6F4E37", "Coffee Brown");
Color.addToMap("#9BDDFF", "Columbia blue");
Color.addToMap("#002E63", "Cool black");
Color.addToMap("#8C92AC", "Cool grey");
Color.addToMap("#B87333", "Copper");
Color.addToMap("#AD6F69", "Copper penny");
Color.addToMap("#CB6D51", "Copper red");
Color.addToMap("#996666", "Copper rose");
Color.addToMap("#FF3800", "Coquelicot");
Color.addToMap("#FF7F50", "Coral");
Color.addToMap("#F88379", "Coral pink");
Color.addToMap("#FF4040", "Coral red");
Color.addToMap("#893F45", "Cordovan");
Color.addToMap("#FBEC5D", "Corn Yellow");
Color.addToMap("#B31B1B", "Cornell Red");
Color.addToMap("#6495ED", "Cornflower blue");
Color.addToMap("#FFF8DC", "Cornsilk");
Color.addToMap("#FFF8E7", "Cosmic latte");
Color.addToMap("#FFBCD9", "Cotton candy");
Color.addToMap("#FFFDD0", "Cream");
Color.addToMap("#DC143C", "Crimson");
Color.addToMap("#BE0032", "Crimson glory");
Color.addToMap("#00B7EB", "Cyan");
Color.addToMap("#58427C", "Cyber grape");
Color.addToMap("#FFD300", "Cyber yellow");
Color.addToMap("#FFFF31", "Daffodil");
Color.addToMap("#F0E130", "Dandelion");
Color.addToMap("#00008B", "Dark blue");
Color.addToMap("#666699", "Dark blue-gray");
Color.addToMap("#654321", "Dark brown");
Color.addToMap("#5D3954", "Dark byzantium");
Color.addToMap("#A40000", "Dark candy apple red");
Color.addToMap("#08457E", "Dark cerulean");
Color.addToMap("#986960", "Dark chestnut");
Color.addToMap("#CD5B45", "Dark coral");
Color.addToMap("#008B8B", "Dark cyan");
Color.addToMap("#536878", "Dark electric blue");
Color.addToMap("#B8860B", "Dark goldenrod");
Color.addToMap("#A9A9A9", "Dark gray");
Color.addToMap("#013220", "Dark green");
Color.addToMap("#00416A", "Dark imperial blue");
Color.addToMap("#1A2421", "Dark jungle green");
Color.addToMap("#BDB76B", "Dark khaki");
Color.addToMap("#734F96", "Dark lavender");
Color.addToMap("#534B4F", "Dark liver");
Color.addToMap("#543D37", "Dark liver (horses)");
Color.addToMap("#8B008B", "Dark magenta");
Color.addToMap("#003366", "Dark midnight blue");
Color.addToMap("#4A5D23", "Dark moss green");
Color.addToMap("#556B2F", "Dark olive green");
Color.addToMap("#FF8C00", "Dark orange");
Color.addToMap("#9932CC", "Dark orchid");
Color.addToMap("#779ECB", "Dark pastel blue");
Color.addToMap("#03C03C", "Dark pastel green");
Color.addToMap("#966FD6", "Dark pastel purple");
Color.addToMap("#C23B22", "Dark pastel red");
Color.addToMap("#E75480", "Dark pink");
Color.addToMap("#003399", "Dark powder blue");
Color.addToMap("#4F3A3C", "Dark puce");
Color.addToMap("#872657", "Dark raspberry");
Color.addToMap("#8B0000", "Dark red");
Color.addToMap("#E9967A", "Dark salmon");
Color.addToMap("#560319", "Dark scarlet");
Color.addToMap("#8FBC8F", "Dark sea green");
Color.addToMap("#3C1414", "Dark sienna");
Color.addToMap("#8CBED6", "Dark sky blue");
Color.addToMap("#483D8B", "Dark slate blue");
Color.addToMap("#2F4F4F", "Dark slate gray");
Color.addToMap("#177245", "Dark spring green");
Color.addToMap("#918151", "Dark tan");
Color.addToMap("#FFA812", "Dark tangerine");
Color.addToMap("#CC4E5C", "Dark terra cotta");
Color.addToMap("#00CED1", "Dark turquoise");
Color.addToMap("#D1BEA8", "Dark vanilla");
Color.addToMap("#9400D3", "Dark violet");
Color.addToMap("#9B870C", "Dark yellow");
Color.addToMap("#00703C", "Dartmouth green");
Color.addToMap("#555555", "Davy's grey");
Color.addToMap("#D70A53", "Debian red");
Color.addToMap("#A9203E", "Deep carmine");
Color.addToMap("#EF3038", "Deep carmine pink");
Color.addToMap("#E9692C", "Deep carrot orange");
Color.addToMap("#DA3287", "Deep cerise");
Color.addToMap("#B94E48", "Deep chestnut");
Color.addToMap("#C154C1", "Deep fuchsia");
Color.addToMap("#004B49", "Deep jungle green");
Color.addToMap("#F5C71A", "Deep lemon");
Color.addToMap("#9955BB", "Deep lilac");
Color.addToMap("#CC00CC", "Deep magenta");
Color.addToMap("#D473D4", "Deep mauve");
Color.addToMap("#355E3B", "Deep moss green");
Color.addToMap("#FFCBA4", "Deep peach");
Color.addToMap("#A95C68", "Deep puce");
Color.addToMap("#843F5B", "Deep ruby");
Color.addToMap("#FF9933", "Deep saffron");
Color.addToMap("#00BFFF", "Deep sky blue");
Color.addToMap("#4A646C", "Deep Space Sparkle");
Color.addToMap("#7E5E60", "Deep Taupe");
Color.addToMap("#66424D", "Deep Tuscan red");
Color.addToMap("#BA8759", "Deer");
Color.addToMap("#1560BD", "Denim");
Color.addToMap("#EDC9AF", "Desert sand");
Color.addToMap("#EA3C53", "Desire");
Color.addToMap("#B9F2FF", "Diamond");
Color.addToMap("#696969", "Dim gray");
Color.addToMap("#9B7653", "Dirt");
Color.addToMap("#1E90FF", "Dodger blue");
Color.addToMap("#D71868", "Dogwood rose");
Color.addToMap("#85BB65", "Dollar bill");
Color.addToMap("#664C28", "Donkey Brown");
Color.addToMap("#00009C", "Duke blue");
Color.addToMap("#E5CCC9", "Dust storm");
Color.addToMap("#EFDFBB", "Dutch white");
Color.addToMap("#E1A95F", "Earth yellow");
Color.addToMap("#555D50", "Ebony");
Color.addToMap("#1B1B1B", "Moronic Black");				//LoganNZL's Colour
Color.addToMap("#614051", "Eggplant");
Color.addToMap("#F0EAD6", "Eggshell");
Color.addToMap("#1034A6", "Egyptian blue");
Color.addToMap("#7DF9FF", "Electric blue");
Color.addToMap("#FF003F", "Electric crimson");
Color.addToMap("#00FF00", "Electric green");
Color.addToMap("#6F00FF", "Electric indigo");
Color.addToMap("#CCFF00", "Electric lime");
Color.addToMap("#BF00FF", "Electric purple");
Color.addToMap("#3F00FF", "Electric ultramarine");
Color.addToMap("#FFFF00", "Electric yellow");
Color.addToMap("#50C878", "Emerald");
Color.addToMap("#6C3082", "Eminence");
Color.addToMap("#1B4D3E", "English green");
Color.addToMap("#B48395", "English lavender");
Color.addToMap("#AB4B52", "English red");
Color.addToMap("#563C5C", "English violet");
Color.addToMap("#96C8A2", "Eton blue");
Color.addToMap("#44D7A8", "Eucalyptus");
Color.addToMap("#801818", "Falu red");
Color.addToMap("#B53389", "Fandango");
Color.addToMap("#DE5285", "Fandango pink");
Color.addToMap("#F400A1", "Fashion fuchsia");
Color.addToMap("#E5AA70", "Fawn");
Color.addToMap("#4D5D53", "Feldgrau");
Color.addToMap("#4F7942", "Fern green");
Color.addToMap("#FF2800", "Ferrari Red");
Color.addToMap("#6C541E", "Field drab");
Color.addToMap("#B22222", "Firebrick");
Color.addToMap("#CE2029", "Fire engine red");
Color.addToMap("#E25822", "Flame");
Color.addToMap("#FC8EAC", "Flamingo pink");
Color.addToMap("#F7E98E", "Flavescent");
Color.addToMap("#EEDC82", "Flax");
Color.addToMap("#A2006D", "Flirt");
Color.addToMap("#FFFAF0", "Floral white");
Color.addToMap("#FFBF00", "Fluorescent orange");
Color.addToMap("#FF1493", "Fluorescent pink");
Color.addToMap("#FF004F", "Folly");
Color.addToMap("#014421", "Forest green");
Color.addToMap("#228B22", "Forest green (web)");
Color.addToMap("#856D4D", "French bistre");
Color.addToMap("#0072BB", "French blue");
Color.addToMap("#FD3F92", "French fuchsia");
Color.addToMap("#86608E", "French lilac");
Color.addToMap("#9EFD38", "French lime");
Color.addToMap("#FD6C9E", "French pink");
Color.addToMap("#4E1609", "French puce");
Color.addToMap("#C72C48", "French raspberry");
Color.addToMap("#F64A8A", "French rose");
Color.addToMap("#77B5FE", "French sky blue");
Color.addToMap("#8806CE", "French violet");
Color.addToMap("#AC1E44", "French wine");
Color.addToMap("#A6E7FF", "Fresh Air");
Color.addToMap("#FF77FF", "Fuchsia pink");
Color.addToMap("#CC397B", "Fuchsia purple");
Color.addToMap("#C74375", "Fuchsia rose");
Color.addToMap("#E48400", "Fulvous");
Color.addToMap("#CC6666", "Fuzzy Wuzzy");
Color.addToMap("#DCDCDC", "Gainsboro");
Color.addToMap("#E49B0F", "Gamboge");
Color.addToMap("#007F66", "Generic viridian");
Color.addToMap("#F8F8FF", "Ghost white");
Color.addToMap("#FE5A1D", "Giants orange");
Color.addToMap("#B06500", "Ginger");
Color.addToMap("#6082B6", "Glaucous");
Color.addToMap("#E6E8FA", "Glitter");
Color.addToMap("#00AB66", "GO green");
Color.addToMap("#D4AF37", "Gold (metallic)");
Color.addToMap("#FFD700", "Gold (web) (Golden)");
Color.addToMap("#85754E", "Gold Fusion");
Color.addToMap("#996515", "Golden brown");
Color.addToMap("#FCC200", "Golden poppy");
Color.addToMap("#FFDF00", "Golden yellow");
Color.addToMap("#DAA520", "Goldenrod");
Color.addToMap("#A8E4A0", "Granny Smith Apple");
Color.addToMap("#6F2DA8", "Grape");
Color.addToMap("#808080", "Gray");
Color.addToMap("#BEBEBE", "Gray (X11 gray)");
Color.addToMap("#465945", "Gray-asparagus");
Color.addToMap("#1CAC78", "Green (Crayola)");
Color.addToMap("#008000", "Green");
Color.addToMap("#00A877", "Green (Munsell)");
Color.addToMap("#009F6B", "Green (NCS)");
Color.addToMap("#00A550", "Green (pigment)");
Color.addToMap("#66B032", "Green (RYB)");
Color.addToMap("#ADFF2F", "Green-yellow");
Color.addToMap("#A99A86", "Grullo");
Color.addToMap("#663854", "Halaya ube");
Color.addToMap("#446CCF", "Han blue");
Color.addToMap("#5218FA", "Han purple");
Color.addToMap("#E9D66B", "Hansa yellow");
Color.addToMap("#3FFF00", "Harlequin");
Color.addToMap("#C90016", "Harvard crimson");
Color.addToMap("#DA9100", "Harvest gold");
Color.addToMap("#DF73FF", "Heliotrope");
Color.addToMap("#AA98A9", "Heliotrope gray");
Color.addToMap("#F0FFF0", "Honeydew");
Color.addToMap("#006DB0", "Honolulu blue");
Color.addToMap("#49796B", "Chloe's green");
Color.addToMap("#FF1DCE", "Hot magenta");
Color.addToMap("#FF69B4", "Hot pink");
Color.addToMap("#71A6D2", "Iceberg");
Color.addToMap("#FCF75E", "Icterine");
Color.addToMap("#319177", "Illuminating Emerald");
Color.addToMap("#602F6B", "Imperial");
Color.addToMap("#002395", "Imperial blue");
Color.addToMap("#66023C", "Imperial purple");
Color.addToMap("#ED2939", "Imperial red");
Color.addToMap("#B2EC5D", "Inchworm");
Color.addToMap("#4C516D", "Independence");
Color.addToMap("#138808", "India green");
Color.addToMap("#CD5C5C", "Indian red");
Color.addToMap("#E3A857", "Indian yellow");
Color.addToMap("#4B0082", "Indigo");
Color.addToMap("#002FA7", "International Klein Blue");
Color.addToMap("#FF4F00", "International orange (aerospace)");
Color.addToMap("#BA160C", "International orange (engineering)");
Color.addToMap("#C0362C", "International orange (Golden Gate Bridge)");
Color.addToMap("#5A4FCF", "Iris");
Color.addToMap("#F4F0EC", "Isabelline");
Color.addToMap("#009000", "Islamic green");
Color.addToMap("#B2FFFF", "Italian sky blue");
Color.addToMap("#FFFFF0", "Ivory");
Color.addToMap("#00A86B", "Jade");
Color.addToMap("#9D2933", "Japanese carmine");
Color.addToMap("#264348", "Japanese indigo");
Color.addToMap("#5B3256", "Japanese violet");
Color.addToMap("#D73B3E", "Jasper");
Color.addToMap("#A50B5E", "Jazzberry jam");
Color.addToMap("#DA614E", "Jelly Bean");
Color.addToMap("#343434", "Jet");
Color.addToMap("#F4CA16", "Jonquil");
Color.addToMap("#8AB9F1", "Jordy blue");
Color.addToMap("#BDDA57", "June bud");
Color.addToMap("#29AB87", "Jungle green");
Color.addToMap("#4CBB17", "Kelly green");
Color.addToMap("#7C1C05", "Kenyan copper");
Color.addToMap("#3AB09E", "Keppel");
Color.addToMap("#C3B091", "Khaki");
Color.addToMap("#E79FC4", "Kobi");
Color.addToMap("#354230", "Kombu green");
Color.addToMap("#E8000D", "KU Crimson");
Color.addToMap("#087830", "La Salle Green");
Color.addToMap("#D6CADD", "Languid lavender");
Color.addToMap("#26619C", "Lapis lazuli");
Color.addToMap("#A9BA9D", "Laurel green");
Color.addToMap("#CF1020", "Lava");
Color.addToMap("#B57EDC", "Lavender (floral)");
Color.addToMap("#CCCCFF", "Lavender blue");
Color.addToMap("#FFF0F5", "Lavender blush");
Color.addToMap("#C4C3D0", "Lavender gray");
Color.addToMap("#9457EB", "Lavender indigo");
Color.addToMap("#EE82EE", "Lavender magenta");
Color.addToMap("#E6E6FA", "Lavender mist");
Color.addToMap("#FBAED2", "Lavender pink");
Color.addToMap("#967BB6", "Lavender purple");
Color.addToMap("#FBA0E3", "Lavender rose");
Color.addToMap("#7CFC00", "Lawn green");
Color.addToMap("#FFF700", "Lemon");
Color.addToMap("#FFFACD", "Lemon chiffon");
Color.addToMap("#CCA01D", "Lemon curry");
Color.addToMap("#FDFF00", "Lemon glacier");
Color.addToMap("#E3FF00", "Lemon lime");
Color.addToMap("#F6EABE", "Lemon meringue");
Color.addToMap("#FFF44F", "Lemon yellow");
Color.addToMap("#1A1110", "Licorice");
Color.addToMap("#545AA7", "Liberty");
Color.addToMap("#FDD5B1", "Light apricot");
Color.addToMap("#ADD8E6", "Light blue");
Color.addToMap("#B5651D", "Light brown");
Color.addToMap("#E66771", "Light carmine pink");
Color.addToMap("#F08080", "Light coral");
Color.addToMap("#93CCEA", "Light cornflower blue");
Color.addToMap("#F56991", "Light crimson");
Color.addToMap("#E0FFFF", "Light cyan");
Color.addToMap("#FF5CCD", "Light deep pink");
Color.addToMap("#C8AD7F", "Light French beige");
Color.addToMap("#F984EF", "Light fuchsia pink");
Color.addToMap("#FAFAD2", "Light goldenrod yellow");
Color.addToMap("#D3D3D3", "Light gray");
Color.addToMap("#90EE90", "Light green");
Color.addToMap("#FFB3DE", "Light hot pink");
Color.addToMap("#F0E68C", "Light khaki");
Color.addToMap("#D39BCB", "Light medium orchid");
Color.addToMap("#ADDFAD", "Light moss green");
Color.addToMap("#E6A8D7", "Light orchid");
Color.addToMap("#B19CD9", "Light pastel purple");
Color.addToMap("#FFB6C1", "Light pink");
Color.addToMap("#E97451", "Light red ochre");
Color.addToMap("#FFA07A", "Light salmon");
Color.addToMap("#FF9999", "Light salmon pink");
Color.addToMap("#20B2AA", "Light sea green");
Color.addToMap("#87CEFA", "Light sky blue");
Color.addToMap("#778899", "Light slate gray");
Color.addToMap("#B0C4DE", "Light steel blue");
Color.addToMap("#B38B6D", "Light taupe");
Color.addToMap("#FFFFE0", "Light yellow");
Color.addToMap("#C8A2C8", "Lilac");
Color.addToMap("#BFFF00", "Lime");
Color.addToMap("#32CD32", "Lime green");
Color.addToMap("#9DC209", "Limerick");
Color.addToMap("#195905", "Prostitute green");
Color.addToMap("#FAF0E6", "Linen");
Color.addToMap("#6CA0DC", "Little boy blue");
Color.addToMap("#B86D29", "Liver (dogs)");
Color.addToMap("#6C2E1F", "Liver");
Color.addToMap("#987456", "Liver chestnut");
Color.addToMap("#FFE4CD", "Lumber");
Color.addToMap("#E62020", "Lust");
Color.addToMap("#FF00FF", "Magenta");
Color.addToMap("#CA1F7B", "Magenta (dye)");
Color.addToMap("#D0417E", "Magenta (Pantone)");
Color.addToMap("#FF0090", "Magenta (process)");
Color.addToMap("#9F4576", "Magenta haze");
Color.addToMap("#AAF0D1", "Magic mint");
Color.addToMap("#F8F4FF", "Magnolia");
Color.addToMap("#C04000", "Mahogany");
Color.addToMap("#6050DC", "Majorelle Blue");
Color.addToMap("#0BDA51", "Malachite");
Color.addToMap("#979AAA", "Manatee");
Color.addToMap("#FF8243", "Mango Tango");
Color.addToMap("#74C365", "Mantis");
Color.addToMap("#880085", "Mardi Gras");
Color.addToMap("#800000", "Maroon");
Color.addToMap("#E0B0FF", "Mauve");
Color.addToMap("#915F6D", "Mauve taupe");
Color.addToMap("#EF98AA", "Mauvelous");
Color.addToMap("#4C9141", "May green");
Color.addToMap("#73C2FB", "Maya blue");
Color.addToMap("#E5B73B", "Golden");
Color.addToMap("#66DDAA", "Medium aquamarine");
Color.addToMap("#0000CD", "Medium blue");
Color.addToMap("#E2062C", "Medium candy apple red");
Color.addToMap("#AF4035", "Medium carmine");
Color.addToMap("#035096", "Medium electric blue");
Color.addToMap("#1C352D", "Medium jungle green");
Color.addToMap("#BA55D3", "Medium orchid");
Color.addToMap("#9370DB", "Medium purple");
Color.addToMap("#BB3385", "Medium red-violet");
Color.addToMap("#AA4069", "Medium ruby");
Color.addToMap("#3CB371", "Medium sea green");
Color.addToMap("#80DAEB", "Medium sky blue");
Color.addToMap("#7B68EE", "Medium slate blue");
Color.addToMap("#C9DC87", "Medium spring bud");
Color.addToMap("#00FA9A", "Medium spring green");
Color.addToMap("#674C47", "Medium taupe");
Color.addToMap("#48D1CC", "Medium turquoise");
Color.addToMap("#D9603B", "Pale vermilion");
Color.addToMap("#F8B878", "Mellow apricot");
Color.addToMap("#F8DE7E", "Mellow yellow");
Color.addToMap("#FDBCB4", "Melon");
Color.addToMap("#0A7E8C", "Metallic Seaweed");
Color.addToMap("#9C7C38", "Metallic Sunburst");
Color.addToMap("#E4007C", "Mexican pink");
Color.addToMap("#191970", "Midnight blue");
Color.addToMap("#004953", "Midnight green (eagle green)");
Color.addToMap("#FFC40C", "Mikado yellow");
Color.addToMap("#E3F988", "Mindaro");
Color.addToMap("#3EB489", "Mint");
Color.addToMap("#F5FFFA", "Mint cream");
Color.addToMap("#98FF98", "Mint green");
Color.addToMap("#FFE4E1", "Misty rose");
Color.addToMap("#73A9C2", "Moonstone blue");
Color.addToMap("#AE0C00", "Mordant red 19");
Color.addToMap("#8A9A5B", "Moss green");
Color.addToMap("#30BA8F", "Mountain Meadow");
Color.addToMap("#997A8D", "Mountbatten pink");
Color.addToMap("#18453B", "MSU Green");
Color.addToMap("#306030", "Mughal green");
Color.addToMap("#C54B8C", "Mulberry");
Color.addToMap("#FFDB58", "Mustard");
Color.addToMap("#317873", "Myrtle green");
Color.addToMap("#F6ADC6", "Nadeshiko pink");
Color.addToMap("#2A8000", "Napier green");
Color.addToMap("#FFDEAD", "Navajo white");
Color.addToMap("#000080", "Navy");
Color.addToMap("#FFA343", "Neon Carrot");
Color.addToMap("#FE4164", "Neon fuchsia");
Color.addToMap("#39FF14", "Neon green");
Color.addToMap("#214FC6", "New Car");
Color.addToMap("#D7837F", "New York pink");
Color.addToMap("#A4DDED", "Non-photo blue");
Color.addToMap("#059033", "North Texas Green");
Color.addToMap("#E9FFDB", "Nyanza");
Color.addToMap("#0077BE", "Ocean Boat Blue");
Color.addToMap("#CC7722", "Ochre");
Color.addToMap("#43302E", "Old burgundy");
Color.addToMap("#CFB53B", "Old gold");
Color.addToMap("#FDF5E6", "Old lace");
Color.addToMap("#796878", "Old lavender");
Color.addToMap("#673147", "Old mauve");
Color.addToMap("#867E36", "Old moss green");
Color.addToMap("#C08081", "Old rose");
Color.addToMap("#808000", "Olive");
Color.addToMap("#6B8E23", "Olive Drab #3");
Color.addToMap("#3C341F", "Olive Drab #7");
Color.addToMap("#9AB973", "Olivine");
Color.addToMap("#353839", "Onyx");
Color.addToMap("#B784A7", "Opera mauve");
Color.addToMap("#FF7F00", "Orange");
Color.addToMap("#FF7538", "Orange (Crayola)");
Color.addToMap("#FF5800", "Orange (Pantone)");
Color.addToMap("#FB9902", "Orange (RYB)");
Color.addToMap("#FFA500", "Orange (web)");
Color.addToMap("#FF9F00", "Orange peel");
Color.addToMap("#FF4500", "Orange-red");
Color.addToMap("#DA70D6", "Orchid");
Color.addToMap("#F2BDCD", "Orchid pink");
Color.addToMap("#FB4F14", "Orioles orange");
Color.addToMap("#414A4C", "Outer Space");
Color.addToMap("#FF6E4A", "Outrageous Orange");
Color.addToMap("#002147", "Oxford Blue");
Color.addToMap("#990000", "Crimson Red");
Color.addToMap("#006600", "Pakistan green");
Color.addToMap("#273BE2", "Palatinate blue");
Color.addToMap("#682860", "Palatinate purple");
Color.addToMap("#BCD4E6", "Pale aqua");
Color.addToMap("#AFEEEE", "Pale blue");
Color.addToMap("#987654", "Pale brown");
Color.addToMap("#9BC4E2", "Pale cerulean");
Color.addToMap("#DDADAF", "Pale chestnut");
Color.addToMap("#DA8A67", "Pale copper");
Color.addToMap("#ABCDEF", "Pale cornflower blue");
Color.addToMap("#E6BE8A", "Pale gold");
Color.addToMap("#EEE8AA", "Pale goldenrod");
Color.addToMap("#98FB98", "Pale green");
Color.addToMap("#DCD0FF", "Pale lavender");
Color.addToMap("#F984E5", "Pale magenta");
Color.addToMap("#FADADD", "Pale pink");
Color.addToMap("#DDA0DD", "Pale plum");
Color.addToMap("#DB7093", "Nipple");
Color.addToMap("#96DED1", "Pale robin egg blue");
Color.addToMap("#C9C0BB", "Pale silver");
Color.addToMap("#ECEBBD", "Pale spring bud");
Color.addToMap("#BC987E", "Pale taupe");
Color.addToMap("#78184A", "Pansy purple");
Color.addToMap("#009B7D", "Paolo Veronese green");
Color.addToMap("#FFEFD5", "Papaya whip");
Color.addToMap("#E63E62", "Paradise pink");
Color.addToMap("#AEC6CF", "Pastel blue");
Color.addToMap("#836953", "Pastel brown");
Color.addToMap("#CFCFC4", "Pastel gray");
Color.addToMap("#77DD77", "Pastel green");
Color.addToMap("#F49AC2", "Pastel magenta");
Color.addToMap("#FFB347", "Pastel orange");
Color.addToMap("#DEA5A4", "Pastel pink");
Color.addToMap("#B39EB5", "Pastel purple");
Color.addToMap("#FF6961", "Pastel red");
Color.addToMap("#CB99C9", "Pastel violet");
Color.addToMap("#FDFD96", "Pastel yellow");
Color.addToMap("#FFE5B4", "Peach");
Color.addToMap("#FFCC99", "Peach-orange");
Color.addToMap("#FFDAB9", "Peach puff");
Color.addToMap("#FADFAD", "Peach-yellow");
Color.addToMap("#D1E231", "Pear");
Color.addToMap("#EAE0C8", "Pearl");
Color.addToMap("#88D8C0", "Pearl Aqua");
Color.addToMap("#B768A2", "Pearly purple");
Color.addToMap("#E6E200", "Peridot");
Color.addToMap("#1C39BB", "Persian blue");
Color.addToMap("#00A693", "Persian green");
Color.addToMap("#32127A", "Persian indigo");
Color.addToMap("#D99058", "Persian orange");
Color.addToMap("#F77FBE", "Persian pink");
Color.addToMap("#701C1C", "Persian plum");
Color.addToMap("#CC3333", "Persian red");
Color.addToMap("#FE28A2", "Persian rose");
Color.addToMap("#EC5800", "Persimmon");
Color.addToMap("#CD853F", "Peru");
Color.addToMap("#000F89", "Phthalo blue");
Color.addToMap("#123524", "Phthalo green");
Color.addToMap("#45B1E8", "Picton blue");
Color.addToMap("#C30B4E", "Pictorial carmine");
Color.addToMap("#FDDDE6", "Piggy pink");
Color.addToMap("#01796F", "Pine green");
Color.addToMap("#FFC0CB", "Pink");
Color.addToMap("#D74894", "Pink (Pantone)");
Color.addToMap("#FFDDF4", "Pink lace");
Color.addToMap("#D8B2D1", "Pink lavender");
Color.addToMap("#FF9966", "Pink-orange");
Color.addToMap("#E7ACCF", "Pink pearl");
Color.addToMap("#F78FA7", "Pink Sherbet");
Color.addToMap("#93C572", "Pistachio");
Color.addToMap("#E5E4E2", "Platinum");
Color.addToMap("#8E4585", "Plum");
Color.addToMap("#BE4F62", "Popstar");
Color.addToMap("#FF5A36", "Portland Orange");
Color.addToMap("#B0E0E6", "Powder blue");
Color.addToMap("#FF8F00", "Princeton orange");
Color.addToMap("#003153", "Prussian blue");
Color.addToMap("#DF00FF", "Psychedelic purple");
Color.addToMap("#CC8899", "Puce");
Color.addToMap("#644117", "Pullman Brown (UPS Brown)");
Color.addToMap("#FF7518", "Pumpkin");
Color.addToMap("#800080", "Purple");
Color.addToMap("#9F00C5", "Purple (Munsell)");
Color.addToMap("#A020F0", "Purple");
Color.addToMap("#69359C", "Purple Heart");
Color.addToMap("#9678B6", "Purple mountain majesty");
Color.addToMap("#4E5180", "Purple navy");
Color.addToMap("#FE4EDA", "Purple pizzazz");
Color.addToMap("#50404D", "Purple taupe");
Color.addToMap("#9A4EAE", "Purpureus");
Color.addToMap("#51484F", "Quartz");
Color.addToMap("#436B95", "Queen blue");
Color.addToMap("#E8CCD7", "Queen pink");
Color.addToMap("#8E3A59", "Quinacridone magenta");
Color.addToMap("#FF355E", "Radical Red");
Color.addToMap("#FBAB60", "Rajah");
Color.addToMap("#E30B5D", "Raspberry");
Color.addToMap("#E25098", "Raspberry pink");
Color.addToMap("#B3446C", "Raspberry rose");
Color.addToMap("#826644", "Raw umber");
Color.addToMap("#FF33CC", "Razzle dazzle rose");
Color.addToMap("#E3256B", "Razzmatazz");
Color.addToMap("#8D4E85", "Razzmic Berry");
Color.addToMap("#FF0000", "Red");
Color.addToMap("#EE204D", "Red (Crayola)");
Color.addToMap("#F2003C", "Red (Munsell)");
Color.addToMap("#C40233", "Red (NCS)");
Color.addToMap("#ED1C24", "Red (pigment)");
Color.addToMap("#FE2712", "Red (RYB)");
Color.addToMap("#A52A2A", "Red-brown");
Color.addToMap("#860111", "Red devil");
Color.addToMap("#FF5349", "Red-orange");
Color.addToMap("#E40078", "Red-purple");
Color.addToMap("#C71585", "Red-violet");
Color.addToMap("#A45A52", "Redwood");
Color.addToMap("#522D80", "Regalia");
Color.addToMap("#002387", "Resolution blue");
Color.addToMap("#777696", "Rhythm");
Color.addToMap("#004040", "Rich black");
Color.addToMap("#F1A7FE", "Rich brilliant lavender");
Color.addToMap("#D70040", "Rich carmine");
Color.addToMap("#0892D0", "Rich electric blue");
Color.addToMap("#A76BCF", "Rich lavender");
Color.addToMap("#B666D2", "Rich lilac");
Color.addToMap("#B03060", "Rich maroon");
Color.addToMap("#444C38", "Rifle green");
Color.addToMap("#704241", "Deep Roast coffee");
Color.addToMap("#00CCCC", "Robin egg blue");
Color.addToMap("#8A7F80", "Rocket metallic");
Color.addToMap("#838996", "Roman silver");
Color.addToMap("#F9429E", "Rose bonbon");
Color.addToMap("#674846", "Rose ebony");
Color.addToMap("#B76E79", "Rose gold");
Color.addToMap("#FF66CC", "Rose pink");
Color.addToMap("#C21E56", "Rose red");
Color.addToMap("#905D5D", "Rose taupe");
Color.addToMap("#AB4E52", "Rose vale");
Color.addToMap("#65000B", "Rosewood");
Color.addToMap("#D40000", "Rosso corsa");
Color.addToMap("#BC8F8F", "Rosy brown");
Color.addToMap("#0038A8", "Royal azure");
Color.addToMap("#002366", "Royal blue");
Color.addToMap("#4169E1", "Royal light blue");
Color.addToMap("#CA2C92", "Royal fuchsia");
Color.addToMap("#7851A9", "Royal purple");
Color.addToMap("#FADA5E", "Royal yellow");
Color.addToMap("#CE4676", "Ruber");
Color.addToMap("#D10056", "Rubine red");
Color.addToMap("#E0115F", "Ruby");
Color.addToMap("#9B111E", "Ruby red");
Color.addToMap("#FF0028", "Ruddy");
Color.addToMap("#BB6528", "Ruddy brown");
Color.addToMap("#E18E96", "Ruddy pink");
Color.addToMap("#A81C07", "Rufous");
Color.addToMap("#80461B", "Russet");
Color.addToMap("#679267", "Russian green");
Color.addToMap("#32174D", "Russian violet");
Color.addToMap("#B7410E", "Rust");
Color.addToMap("#DA2C43", "Rusty red");
Color.addToMap("#8B4513", "Saddle brown");
Color.addToMap("#FF6700", "Safety orange (blaze orange)");
Color.addToMap("#EED202", "Safety yellow");
Color.addToMap("#F4C430", "Saffron");
Color.addToMap("#BCB88A", "Sage");
Color.addToMap("#23297A", "St. Patrick's blue");
Color.addToMap("#FA8072", "Salmon");
Color.addToMap("#FF91A4", "Salmon pink");
Color.addToMap("#C2B280", "Sand");
Color.addToMap("#ECD540", "Sandstorm");
Color.addToMap("#F4A460", "Sandy brown");
Color.addToMap("#92000A", "Sangria");
Color.addToMap("#507D2A", "Sap green");
Color.addToMap("#0F52BA", "Sapphire");
Color.addToMap("#0067A5", "Sapphire blue");
Color.addToMap("#CBA135", "Satin sheen gold");
Color.addToMap("#FF2400", "Scarlet");
Color.addToMap("#FFD800", "School bus yellow");
Color.addToMap("#76FF7A", "Screamin' Green");
Color.addToMap("#006994", "Sea blue");
Color.addToMap("#2E8B57", "Sea green");
Color.addToMap("#321414", "Seal brown");
Color.addToMap("#FFF5EE", "Seashell");
Color.addToMap("#FFBA00", "Selective yellow");
Color.addToMap("#704214", "Sepia");
Color.addToMap("#8A795D", "Shadow");
Color.addToMap("#778BA5", "Shadow blue");
Color.addToMap("#FFCFF1", "Shampoo");
Color.addToMap("#009E60", "Shamrock green");
Color.addToMap("#8FD400", "Sheen Green");
Color.addToMap("#D98695", "Shimmering Blush");
Color.addToMap("#FC0FC0", "Shocking pink");
Color.addToMap("#882D17", "Sienna");
Color.addToMap("#C0C0C0", "Silver");
Color.addToMap("#ACACAC", "Silver chalice");
Color.addToMap("#5D89BA", "Silver Lake blue");
Color.addToMap("#C4AEAD", "Silver pink");
Color.addToMap("#BFC1C2", "Silver sand");
Color.addToMap("#CB410B", "Sinopia");
Color.addToMap("#007474", "Skobeloff");
Color.addToMap("#87CEEB", "Sky blue");
Color.addToMap("#CF71AF", "Sky magenta");
Color.addToMap("#6A5ACD", "Slate blue");
Color.addToMap("#708090", "Slate gray");
Color.addToMap("#C84186", "Smitten");
Color.addToMap("#738276", "Smoke");
Color.addToMap("#933D41", "Smokey topaz");
Color.addToMap("#100C08", "Smoky black");
Color.addToMap("#FFFAFA", "Snow");
Color.addToMap("#CEC8EF", "Soap");
Color.addToMap("#893843", "Solid pink");
Color.addToMap("#757575", "Sonic silver");
Color.addToMap("#9E1316", "Spartan Crimson");
Color.addToMap("#1D2951", "Space cadet");
Color.addToMap("#807532", "Spanish bistre");
Color.addToMap("#0070B8", "Spanish blue");
Color.addToMap("#D10047", "Spanish carmine");
Color.addToMap("#E51A4C", "Spanish crimson");
Color.addToMap("#989898", "Spanish gray");
Color.addToMap("#009150", "Spanish green");
Color.addToMap("#E86100", "Spanish orange");
Color.addToMap("#F7BFBE", "Spanish pink");
Color.addToMap("#E60026", "Spanish red");
Color.addToMap("#4C2882", "Spanish violet");
Color.addToMap("#007F5C", "Spanish viridian");
Color.addToMap("#0FC0FC", "Spiro Disco Ball");
Color.addToMap("#A7FC00", "Spring bud");
Color.addToMap("#00FF7F", "Spring green");
Color.addToMap("#007BB8", "Star command blue");
Color.addToMap("#4682B4", "Steel blue");
Color.addToMap("#CC33CC", "Steel pink");
Color.addToMap("#4F666A", "Stormcloud");
Color.addToMap("#E4D96F", "Straw");
Color.addToMap("#FC5A8D", "Strawberry");
Color.addToMap("#FFCC33", "Sunglow");
Color.addToMap("#E3AB57", "Sunray");
Color.addToMap("#FAD6A5", "Sunset");
Color.addToMap("#FD5E53", "Sunset orange");
Color.addToMap("#CF6BA9", "Super pink");
Color.addToMap("#D2B48C", "Tan");
Color.addToMap("#F94D00", "Tangelo");
Color.addToMap("#F28500", "Tangerine");
Color.addToMap("#FFCC00", "Tangerine yellow");
Color.addToMap("#483C32", "Dark Grayish Brown");
Color.addToMap("#8B8589", "Taupe gray");
Color.addToMap("#D0F0C0", "Tea green");
Color.addToMap("#F4C2C2", "Tea rose");
Color.addToMap("#008080", "Teal");
Color.addToMap("#367588", "Teal blue");
Color.addToMap("#99E6B3", "Teal deer");
Color.addToMap("#00827F", "Teal green");
Color.addToMap("#CF3476", "Telemagenta");
Color.addToMap("#CD5700", "Tenne");
Color.addToMap("#E2725B", "Terra cotta");
Color.addToMap("#D8BFD8", "Thistle");
Color.addToMap("#DE6FA1", "Thulian pink");
Color.addToMap("#FC89AC", "Tickle Me Pink");
Color.addToMap("#0ABAB5", "Tiffany Blue");
Color.addToMap("#E08D3C", "Tiger's eye");
Color.addToMap("#DBD7D2", "Timberwolf");
Color.addToMap("#EEE600", "Titanium yellow");
Color.addToMap("#FF6347", "Tomato");
Color.addToMap("#746CC0", "Toolbox");
Color.addToMap("#FFC87C", "Topaz");
Color.addToMap("#FD0E35", "Tractor red");
Color.addToMap("#00755E", "Tropical rain forest");
Color.addToMap("#0073CF", "True Blue");
Color.addToMap("#417DC1", "Tufts Blue");
Color.addToMap("#FF878D", "Tulip");
Color.addToMap("#DEAA88", "Tumbleweed");
Color.addToMap("#B57281", "Turkish rose");
Color.addToMap("#40E0D0", "Turquoise");
Color.addToMap("#00FFEF", "Turquoise blue");
Color.addToMap("#A0D6B4", "Turquoise green");
Color.addToMap("#7C4848", "Tuscan red");
Color.addToMap("#C09999", "Tuscany");
Color.addToMap("#8A496B", "Twilight lavender");
Color.addToMap("#0033AA", "UA blue");
Color.addToMap("#D9004C", "UA red");
Color.addToMap("#8878C3", "Ube");
Color.addToMap("#536895", "UCLA Blue");
Color.addToMap("#FFB300", "UCLA Gold");
Color.addToMap("#3CD070", "UFO Green");
Color.addToMap("#120A8F", "Ultramarine");
Color.addToMap("#4166F5", "Ultramarine blue");
Color.addToMap("#FF6FFF", "Ultra pink");
Color.addToMap("#635147", "Umber");
Color.addToMap("#FFDDCA", "Unbleached silk");
Color.addToMap("#5B92E5", "United Nations blue");
Color.addToMap("#B78727", "University of California Gold");
Color.addToMap("#FFFF66", "Unmellow yellow");
Color.addToMap("#7B1113", "UP Maroon");
Color.addToMap("#AE2029", "Upsdell red");
Color.addToMap("#E1AD21", "Urobilin");
Color.addToMap("#004F98", "USAFA blue");
Color.addToMap("#F77F00", "University of Tennessee Orange");
Color.addToMap("#D3003F", "Utah Crimson");
Color.addToMap("#F3E5AB", "Vanilla");
Color.addToMap("#F38FA9", "Vanilla ice");
Color.addToMap("#C5B358", "Vegas gold");
Color.addToMap("#C80815", "Venetian red");
Color.addToMap("#43B3AE", "Verdigris");
Color.addToMap("#E34234", "Medium vermilion");
Color.addToMap("#D9381E", "Vermilion");
Color.addToMap("#8F00FF", "Violet");
Color.addToMap("#7F00FF", "Violet (color wheel)");
Color.addToMap("#8601AF", "Violet (RYB)");
Color.addToMap("#324AB2", "Violet-blue");
Color.addToMap("#F75394", "Violet-red");
Color.addToMap("#40826D", "Viridian");
Color.addToMap("#009698", "Viridian green");
Color.addToMap("#922724", "Vivid auburn");
Color.addToMap("#9F1D35", "Vivid burgundy");
Color.addToMap("#DA1D81", "Vivid cerise");
Color.addToMap("#CC00FF", "Vivid orchid");
Color.addToMap("#00CCFF", "Vivid sky blue");
Color.addToMap("#FFA089", "Vivid tangerine");
Color.addToMap("#9F00FF", "Vivid violet");
Color.addToMap("#004242", "Warm black");
Color.addToMap("#A4F4F9", "Waterspout");
Color.addToMap("#645452", "Wenge");
Color.addToMap("#F5DEB3", "Wheat");
Color.addToMap("#FFFFFF", "White");
Color.addToMap("#F5F5F5", "White smoke");
Color.addToMap("#A2ADD0", "Wild blue yonder");
Color.addToMap("#D470A2", "Wild orchid");
Color.addToMap("#FF43A4", "Wild Strawberry");
Color.addToMap("#FC6C85", "Wild watermelon");
Color.addToMap("#FD5800", "Willpower orange");
Color.addToMap("#A75502", "Windsor tan");
Color.addToMap("#722F37", "Wine");
Color.addToMap("#C9A0DC", "Wisteria");
Color.addToMap("#C19A6B", "Wood brown");
Color.addToMap("#738678", "Xanadu");
Color.addToMap("#0F4D92", "Yale Blue");
Color.addToMap("#1C2841", "Yankees blue");
Color.addToMap("#FCE883", "Yellow (Crayola)");
Color.addToMap("#EFCC00", "Yellow (Munsell)");
Color.addToMap("#FEDF00", "Yellow (Pantone)");
Color.addToMap("#FEFE33", "Yellow");
Color.addToMap("#9ACD32", "Yellow Green");
Color.addToMap("#FFAE42", "Yellow Orange");
Color.addToMap("#FFF000", "Yellow rose");
Color.addToMap("#0014A8", "Zaffre");
Color.addToMap("#2C1608", "Zinnwaldite brown");
Color.addToMap("#39A78E", "Zomp");
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
            } else if (!gModal && (evt.keyCode == 27 || evt.keyCode == 13)) {
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
                } else if (message.substring(0, 5).toLowerCase() == "!name") {
                    gClient.sendArray([{
                        "m": "userset",
                        "set": {
                            "name": message.substring(5).trim()
                        }
                    }]);
                    $(this).val("");
                    setTimeout(function () {
                        chat.blur();
                    }, 100);
				} else if (message.substring(0,6).toLowerCase() == "!clear") {
                         chat.clear();
                         msgBox("Chat", "Chat cleared", 1500, "#midi-btn");
                         $(this).val("");
                         setTimeout(function () {
                             chat.blur();
                         }, 100);
                } else if (message.substring(0,5).toLowerCase() == "!test") { 				//test command
                    console.log(gPianoMutes);
                    chat.send(message);
                    chat.send(gPianoMutes);
                    $(this).val("");
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
                gClient.sendArray([{
                    m: "a",
                    message: message
                }]);
            },

            receive: function (msg) {
                if (gChatMutes.indexOf(msg.p._id) != -1) return;

                var li = $('<li><span class="name"/><span class="message"/>');

                li.find(".name").text(msg.p.name + "");
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
    (function () {
        var devices = [];

        $("#midi-btn").on("click", function (evt) {
            evt.preventDefault();
            $("#midi-btn").off("click");
            $("#midi-btn").addClass("stuck");
            var notif_loading = new Notification({
                id: "midi",
                title: "MIDI",
                text: "Loading the Java applet...",
                target: "#midi-btn",
                duration: 30000
            });
            midiBridge.init({
                ready: function () {
                    gMidiLoaded = true;
                    notif_loading.close();
                    devices = midiBridge.getDevices();
                    var auto_id = auto("input");
                    if (auto_id !== undefined) {
                        inputs[seq] = auto_id;
                        seq++;
                        makeConnections();
                    }
                    showConnections();
                    $("#midi-btn").on("click", showConnections);
                },
                error: function (e) {
                    notif_loading.close();
                    new Notification({
                        id: "midi",
                        title: "MIDI",
                        text: "Error: " + e,
                        target: "#midi-btn",
                        duration: 25000
                    });
                },
                data: function (evt) {
                    console.log("MIDI", evt);		//uncomment to show MIDI info
                    if (evt.status == midiBridge.NOTE_ON) {
                        var note = evt.noteName.toLowerCase(); //replace("#", "s");
                        var letter = note.charAt(0);
                        var sharp = note.charAt(1) == "#";
                        var ix = sharp ? 2 : 1;
                        var number = note.substr(ix, 1);
                        number--;
                        note = letter + (sharp ? "s" : "") + number;
                        var vol = evt.data2 / 127;

                        press(note, vol);

                    } else if (evt.status == midiBridge.NOTE_OFF) {
                        var note = evt.noteName.toLowerCase(); //replace("#", "s");
                        var letter = note.charAt(0);
                        var sharp = note.charAt(1) == "#";
                        var ix = sharp ? 2 : 1;
                        var number = note.substr(ix, 1);
                        number--;
                        note = letter + (sharp ? "s" : "") + number;

                        release(note);

                    } else if (evt.status == midiBridge.CONTROL_CHANGE) {
                        if (!gAutoSustain) {
                            if (evt.data1 == 64) {
                                if (evt.data2 > 0) {
                                    pressSustain();
                                } else {
                                    releaseSustain();
                                }
                            }
                        }
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
            for (var i = 0; i < len; i++) {
                if (devices[i].type == device_type) {
                    id = devices[i].id;
                    if (!isConnected(id)) break;
                }
            }
            return id;
        };

        function isConnected(device_id) {
            for (var i in inputs) {
                if (!inputs.hasOwnProperty(i)) continue;
                if (inputs[i] == device_id) return true;
            }
            for (var i in outputs) {
                if (!outputs.hasOwnProperty(i)) continue;
                if (outputs[i] == device_id) return true;
            }
            return false;
        };

        function makeConnections() {
            midiBridge.disconnectAll();
            var used_inputs = [];
            for (var i in inputs) {
                if (!inputs.hasOwnProperty(i)) continue;
                if (used_inputs.indexOf(inputs[i]) != -1) continue;
                midiBridge.addConnection(inputs[i], "-1");
                used_inputs.push(inputs[i]);
            };
            var used_outputs = [];
            for (var i in outputs) {
                if (!outputs.hasOwnProperty(i)) continue;
                if (used_outputs.indexOf(outputs[i]) != -1) continue;
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
            if (notif_conn) return;

            notif_conn = new Notification({
                id: "midi",
                title: "MIDI Connections",
                html: '\
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
',
                target: "#midi-btn"
            });

            notif_conn.on("close", function () {
                if (!knows_conn) {
                    knows_conn = true;
                    new Notification({
                        title: "Okay, Logan c:",
                        text: "If you want to edit connections again, click the MIDI button again.",
                        target: "#midi-btn",
                        duration: 10000
                    });
                }
                notif_conn = undefined;
            });

            var j = $("#midi-connections");
            if (!j.length) return;

            function Item(device_type, seq, sel_id, store) {
                var sel = $("<select/>");
                var len = devices.length;
                for (var i = 0; i < len; i++) {
                    var dev = devices[i];
                    if (dev.type !== device_type) continue;
                    var opt = $("<option/>");
                    opt.attr("value", dev.id);
                    opt.text(dev.id + ": " + dev.name);
                    if (sel_id == dev.id) opt.attr("selected", true);
                    sel.append(opt);
                }
                var btn = $('<button class="remove">x</button>');
                var itm = $("<div/>");
                itm.append(sel);
                itm.append(btn);
                itm.attr("seq", seq);
                sel.on("change", function () {
                    var val = itm.find("option:selected").attr("value");
                    var seq = itm.attr("seq");
                    store[seq] = val;
                    makeConnections();
                });
                btn.on("click", function () {
                    var seq = itm.attr("seq");
                    delete store[seq];
                    itm.remove();
                    notif_conn.position(); // fix this...
                    makeConnections();
                });
                return itm;
            };

            var ji = j.find(".left.half .list");
            for (var i in inputs) {
                if (!inputs.hasOwnProperty(i)) continue;
                ji.append(Item("input", i, inputs[i], inputs));
            };
            j.find(".left.half .add").on("click", function () {
                var auto_id = auto("input");
                if (auto_id !== undefined) {
                    inputs[seq] = auto_id;
                    ji.append(Item("input", seq, auto_id, inputs));
                    notif_conn.position(); // fix this...
                    seq++;
                    makeConnections();
                }
            });

            var jo = j.find(".right.half .list");
            for (var i in outputs) {
                if (!outputs.hasOwnProperty(i)) continue;
                jo.append(Item("output", i, outputs[i], outputs));
            };
            j.find(".right.half .add").on("click", function () {
                var auto_id = auto("output");
                if (auto_id !== undefined) {
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




    // more button
    (function () {
        var loaded = false;
        setTimeout(function () {
            $("#social").fadeIn(250);
            $("#more-button").click(function () {
                openModal("#more");
                if (loaded === false) {
                    $.get("/more.html").success(function (data) {			//the cat in the corner and the info
                        loaded = true;
                        var items = $(data).find(".item");
                        if (items.length > 0) {
                            $("#more .items").append(items);
                        }
                        try {
                            var ele = document.getElementById("email");
                            var email = ele.getAttribute("obscured").replace(/[a-zA-Z]/g, function (c) {
                                return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
                            });
                            ele.href = "mailto:" + email;
                            ele.textContent = email;
                        } catch (e) {}
                    });
                }
            });
        }, 5000);
    })();




    // LOL API
    window.MPP = {
        press: press,
        release: release,
        piano: gPiano,
        client: gClient,
        chat: chat
    };


});