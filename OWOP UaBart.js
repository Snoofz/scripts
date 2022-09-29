// ==UserScript==
// @name        OWOP uaBArt's script
// @namespace   https://github.com/BondarenkoArtur
// @description Custom scripts for OWOP
// @version     1.0.4
// @author      uaBArt
// @include     http://ourworldofpixels.com/*
// @include     http://wire.ddns.net:9001/*
// @run-at      document-idle
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];

const set = (x, y, color) => {
    protocol.lastSentX = x*16;
    protocol.lastSentY = y*16;
    _sendmsg(
        new Int32Array([protocol.lastSentX, protocol.lastSentY, 0]).buffer);
    return OWOP.world.setPixel(x, y, color);
};

const stoi = (string, max) => {
    var ints = [];
    var fstring = "";
    string = string.toLowerCase();
    for (var i = 0; i < string.length && i < max; i++) {
        var charCode = string.charCodeAt(i);
        if (charCode < 123 && charCode > 96 || charCode < 58 && charCode > 47 || charCode == 95 || charCode == 46) {
            fstring += String.fromCharCode(charCode);
            ints.push(charCode);
        }
    }
    return [ints, fstring];
}

const SITEKEY = "6LcgvScUAAAAAARUXtwrM8MP0A0N70z4DHNJh-KI";
const worldVerification = 4321;
const chatVerification = String.fromCharCode(10);
const tokenVerification = 'CaptchA';

function addNewTools() {

    OWOP.camera.teleport = function(x, y) {
        var m = new ArrayBuffer(9);
        var dv = new DataView(m);
        dv.setUint8(0, 3);
        dv.setInt32(1, x, true);
        dv.setInt32(5, y, true);
        var messageEvent = new MessageEvent("message", {
            "data": m,
            "origin": "ws://ourworldofpixels.com:443"
        });
        return OWOP.net.connection.dispatchEvent(messageEvent);
    }

    // erase tool
    OWOP.tool.addToolObject(
        new OWOP.tool.class('coolEraser',
            OWOP.cursors.erase,
            OWOP.fx.player.RECT_SELECT_ALIGNED(16),
            false,
            function(tool){
                var lastX, lastY;
                var color = [255, 255, 255];

                let queue = [];

                function clearChunk(chunkX, chunkY, color){
                    for(let y = 0; y < 16; y++){
                        for(let x = 0; x < 16; x++){
                            let pos = [chunkX*16 + x, chunkY*16 + y];
                            if((!eq(OWOP.world.getPixel(...pos), color)) &&
                                (queue.filter(i => eq(i, pos)).length < 1))
                            {
                                var element = [pos[0], pos[1], color];
                                queue.unshift(element);
                            }
                        }
                    }
                }

                function tick() {
                    for (var painted = 0; painted < 3 && queue.length; painted++) {
                        var current = queue.pop();
                        var c = OWOP.world.getPixel(current[0], current[1]);
                        if (!eq(c,current[2]) && !set(current[0], current[1], current[2]) && 
                                !OWOP.BOTS.tryWithBot(current[0], current[1], current[2])) {
                            queue.push(current);
                            break;
                        } else {
                            tick();
                        }
                    }
                    if (!queue.length) {
                        tool.setEvent('tick', null);
                        return;
                    }
                }

                tool.setEvent('mousedown', function(mouse, event){
                    color = OWOP.mouse.buttons === 1 ? [255, 255, 255] : OWOP.player.selectedColor;

                    switch (mouse.buttons) {
                        case 1:
                        case 2:
                            clearChunk(Math.floor(mouse.tileX/16), Math.floor(mouse.tileY/16), color);
                            break;
                        case 4:
                            if (event.ctrlKey) {
                                var color = OWOP.world.getPixel(mouse.tileX, mouse.tileY);
                                if (color) {
                                    OWOP.player.selectedColor = color;
                                }
                            }
                            break;
                    }
                });

                tool.setEvent('mouseup', function (mouse) {
                    tool.setEvent('tick', tick);
                });

                tool.setEvent('deselect', function (mouse) {
                    queue = [];
                    tool.setEvent('tick', null);
                });
            }));

    // paste tool
    OWOP.tool.addToolObject(
        new OWOP.tool.class('coolPaste',
            OWOP.cursors.paste,
            OWOP.fx.player.NONE,
            false,
            function(tool){

                var offX = null;
                var offY = null;
                var data = null;
                var currentX = null;
                var currentY = null;

                tool.setFxRenderer(function (fx, ctx, time) {
                    if (!fx.extra.isLocalPlayer) return 1;
                    var z = OWOP.camera.zoom;
                    var x = fx.extra.player.x;
                    var y = fx.extra.player.y;
                    var fxx = (Math.floor(x / 16) - OWOP.camera.x) * z;
                    var fxy = (Math.floor(y / 16) - OWOP.camera.y) * z;
                    var oldlinew = ctx.lineWidth;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(0, fxy + 0.5);
                    ctx.lineTo(window.innerWidth, fxy + 0.5);
                    ctx.moveTo(fxx + 0.5, 0);
                    ctx.lineTo(fxx + 0.5, window.innerHeight);

                    ctx.globalAlpha = 1;
                    ctx.strokeStyle = "#FFFFFF";
                    ctx.stroke();
                    ctx.setLineDash([3]);
                    ctx.strokeStyle = "#000000";
                    ctx.stroke();

                    ctx.setLineDash([]);
                    ctx.lineWidth = oldlinew;

                    if (tool.extra.canvas) {
                        ctx.globalAlpha = 0.5 + Math.sin(time / 500) / 4;
                        ctx.strokeStyle = "#000000";
                        ctx.scale(z, z);
                        ctx.drawImage(tool.extra.canvas, fxx / z, fxy / z);
                        ctx.scale(1 / z, 1 / z);
                        ctx.globalAlpha = 0.8;
                        ctx.strokeRect(fxx, fxy, tool.extra.canvas.width * z, tool.extra.canvas.height * z);
                    }

                    if (offX != null && offY != null) {
                        ctx.globalAlpha = 0.125 + Math.sin(time / 50) / 8;
                        ctx.scale(z, z);
                        ctx.drawImage(tool.extra.canvas, offX - OWOP.camera.x, offY - OWOP.camera.y);
                        ctx.scale(1 / z, 1 / z);
                    }

                });

                tool.setEvent('select', function () {
                    var input = document.createElement("input");
                    input.type = "file";
                    input.accept = "image/*";
                    input.onchange = function (event) {
                        if (input.files && input.files[0]) {
                            var reader = new FileReader();
                            reader.onload = function (e) {
                                var image = new Image();
                                image.onload = function () {
                                    tool.extra.canvas = document.createElement("canvas");
                                    tool.extra.canvas.width = image.width;
                                    tool.extra.canvas.height = image.height;
                                    var ctx = tool.extra.canvas.getContext("2d");
                                    ctx.drawImage(image, 0, 0);
                                    offX = null;
                                    offY = null;
                                    var currentX = null;
                                    var currentY = null;
                                    data = ctx.getImageData(0, 0, tool.extra.canvas.width, tool.extra.canvas.height);
                                    console.log('Loaded image');
                                };
                                image.src = e.target.result;
                            };
                            reader.readAsDataURL(input.files[0]);
                        }
                    };
                    input.click();
                });

                function tick() {
                    if (data != null && currentX != null && currentY != null){
                        for (var painted = 0; painted < 3; painted++) {
                            var index = (currentY * data.width + currentX) * 4;

                            var alpha = data.data[index + 3] / 255;

                            if (alpha != 0){
                                var c = OWOP.world.getPixel(offX + currentX, offY + currentY);
                                var newPixel = [
                                (1 - alpha) * c[0] + alpha * data.data[index    ],
                                (1 - alpha) * c[1] + alpha * data.data[index + 1],
                                (1 - alpha) * c[2] + alpha * data.data[index + 2]
                                ];
                                if (eq(c,newPixel) || set(offX + currentX, offY + currentY, newPixel) || 
                                        OWOP.BOTS.tryWithBot(offX + currentX, offY + currentY, newPixel)) {
                                    moveForward();
                                    tick();
                                    break;
                                }
                            } else {
                                moveForward();
                                tick();
                                break;
                            }

                        }
                    } else
                    {
                        tool.setEvent('tick', null);
                    }
                }

                function moveForward() {
                    currentX++;
                    if (currentX >= data.width) {
                        currentX = 0;
                        currentY++;
                    }
                    if (currentY >= data.height) {
                        currentX = 0;
                        currentY = 0;
                        tool.setEvent('tick', null);
                    }
                }

                tool.setEvent('mousedown', function(mouse, event){
                    switch (mouse.buttons) {
                        case 1:
                            offX = mouse.tileX;
                            offY = mouse.tileY;
                            currentX = 0;
                            currentY = 0;
                            break;
                        case 2:
                            if (data != null && offX != null && offY != null){
                                var tmpX = mouse.tileX - offX;
                                var tmpY = mouse.tileY - offY;
                                if (tmpX >= 0 && tmpY >= 0 && tmpX <= data.width && tmpY <= data.height) {
                                    currentX = tmpX;
                                    currentY = tmpY;
                                }
                            }
                            break;
                        case 4:
                        // if (event.ctrlKey) {
                        //     var color = OWOP.world.getPixel(mouse.tileX, mouse.tileY);
                        //     if (color) {
                        //         OWOP.player.selectedColor = color;
                        //     }
                        // }
                            break;
                    }
                });

                tool.setEvent('mouseup', function (mouse) {
                    tool.setEvent('tick', tick);
                });

                tool.setEvent('deselect', function (mouse) {
                    data = null;
                    tool.setEvent('tick', null);
                });

            }));

    // teleport tool
    OWOP.tool.addToolObject(
        new OWOP.tool.class('coolTeleport',
            OWOP.cursors.kick,
            OWOP.fx.player.NONE,
            false,
            function(tool){
                var lastX, lastY;

                tool.setEvent('mousedown', function(mouse, event){

                    switch (mouse.buttons) {
                        case 1:
                        case 2:
                            var x = prompt("Enter X Value", lastX);
                            var y = prompt("Enter Y Value", lastY);

                            var tempX = parseInt(x);
                            var tempY = parseInt(y);

                            if (tempX != NaN && tempY != NaN){
                                lastX = tempX;
                                lastY = tempY;
                            }
                            OWOP.camera.teleport(lastX, lastY)
                            break;
                    }
                });
            }));


        // bot tool
    OWOP.tool.addToolObject(
        new OWOP.tool.class('coolBot',
            OWOP.cursors.ban,
            OWOP.fx.player.NONE,
            false,
            function(tool){
                tool.setEvent('mousedown', function(mouse, event){

                    switch (mouse.buttons) {
                        case 1:
                        case 2:
                            OWOP.BOTS.requestNewBot()
                            break;
                    }
                });

                function tick() {
                    for (var i = OWOP.BOTS.bots_array.length - 1; i >= 0; i--) {
                        var array = new ArrayBuffer(12);
                        var dv = new DataView(array);
                        var currentTime = Date.now() / 10;
                        var currentAngleMove = currentTime % 360;
                        var botX = OWOP.mouse.worldX + (Math.cos(((360.0 / OWOP.BOTS.bots_array.length * i) + currentAngleMove) * Math.PI / 180.0) * 256.0);
                        var botY = OWOP.mouse.worldY + (Math.sin(((360.0 / OWOP.BOTS.bots_array.length * i) + currentAngleMove) * Math.PI / 180.0) * 256.0);
                        dv.setInt32(0, botX, true);
                        dv.setInt32(4, botY, true);
                        dv.setInt32(8, 0, true);
                        OWOP.BOTS.bots_array[i].send(array)
                    }
                }
                tool.setEvent('tick', tick);
                tool.setEvent('mousemove', tick);
            }));

    /* wm = WindowManager object
    * initfunc = function where all the windows objects should be added,
    *            first function argument is the guiwindow object itself
    */
    function GUIWindow(title, options, initfunc) {
        var _this = this;

        options = options || {};
        this.wm = WorldOfPixels.windowsys;
        this.opt = options;
        this.title = title;
        this.frame = document.createElement("div");
        this.container = document.createElement("div");
        this.container.className = 'wincontainer';

        if (title) {
            this.titlespan = document.createElement("span");
            this.titlespan.innerHTML = title;

            this.frame.appendChild(this.titlespan);
        }

        this.frame.appendChild(this.container);

        if (options.centered) {
            options.immobile = true;
            this.frame.className = "centered";
        }

        Object.defineProperty(this, "realw", {
            get: function () {
                return this.frame.offsetWidth;
            }.bind(this)
        });
        Object.defineProperty(this, "realh", {
            get: function () {
                return this.frame.offsetHeight;
            }.bind(this)
        });

        this.elements = [];

        this.creationtime = Date.now();
        this.currentaction = null; /* Func to call every mousemove evt */

        if (initfunc) {
            initfunc(this);
        }

        this.mdownfunc = function (e) {
            var offx = e.clientX - this.x;
            var offy = e.clientY - this.y;
            if (e.target === this.frame && !this.opt.immobile) {
                this.currentaction = function (x, y) {
                    x = x <= 0 ? 0 : x > window.innerWidth ? window.innerWidth : x;
                    y = y <= 0 ? 0 : y > window.innerHeight ? window.innerHeight : y;
                    this.move(x - offx, y - offy);
                };
            }
        }.bind(this);

        if (options.centerOnce) {
            /* Ugly solution to wait for offset(Height, Width) values to be available */
            this.move(window.innerWidth, window.innerHeight); /* Hide the window */
            (0, OWOP.util.waitFrames)(2, function () {
                return OWOP.windowSys.centerWindow(_this);
            });
        }

        this.frame.addEventListener("mousedown", this.mdownfunc);

        this.mupfunc = function (e) {
            this.currentaction = null;
        }.bind(this);

        window.addEventListener("mouseup", this.mupfunc);

        this.mmovefunc = function (e) {
            if (this.currentaction) {
                this.currentaction(e.clientX, e.clientY);
            }
        }.bind(this);

        window.addEventListener("mousemove", this.mmovefunc);

        if (options.closeable) {
            this.frame.appendChild((0, OWOP.util.mkHTML)("button", {
                onclick: function () {
                    this.close();
                }.bind(this),
                className: 'windowCloseButton'
            }));
        }
    }

    GUIWindow.prototype.getWindow = function () {
        return this;
    };

    GUIWindow.prototype.addObj = function (object) {
        this.elements.push(object);
        this.container.appendChild(object);
        return object;
    };

    GUIWindow.prototype.delObj = function (object) {
        var i = this.elements.indexOf(object);
        if (i != -1) {
            this.elements.splice(i, 1);
            this.container.removeChild(object);
        }
    };

    GUIWindow.prototype.move = function (x, y) {
        if (!this.opt.immobile) {
            this.frame.style.transform = "translate(" + x + "px," + y + "px)";
            this.x = x;
            this.y = y;
        }
        return this;
    };

    GUIWindow.prototype.resize = function (w, h) {
        this.w = w;
        this.h = h;
        this.container.style.width = w + "px";
        this.container.style.height = h + "px";
        return this;
    };

    GUIWindow.prototype.close = function () {
        OWOP.windowSys.delWindow(this);
        window.removeEventListener("mousemove", this.mmovefunc);
        window.removeEventListener("mouseup", this.mupfunc);
        this.frame.removeEventListener("mousedown", this.mdownfunc);
        if (this.onclose) {
            this.onclose();
        }
    };

    OWOP.GUIWindow = GUIWindow;

    // var playerListWindow = new OWOP.GUIWindow('Players', { closeable: true }, function (wdow) {
    //     var tableHeader = document.createElement("tr");
    //     tableHeader.innerHTML = "<th>Id</th><th>X</th><th>Y</th>";
    //     //  playerListTable.appendChild(tableHeader);
    //     //  wdow.container.appendChild(playerListTable);
    //     wdow.container.id = "player-list";
    // }).move(window.innerWidth - 240, 32);

    // OWOP.windowSys.addWindow(playerListWindow);

    OWOP.BOTS = function (){};
    OWOP.BOTS.bots_array = [];
    OWOP.BOTS.last_bot_id = 100000;

    OWOP.BOTS.getArray = function () {
        return OWOP.BOTS.bots_array;
    }

    OWOP.BOTS.Listener = function (id, bot) {
        this.onOpen = function () {
            console.log("WS: Opened ", id);
        }
        this.onClose = function () {
            console.log("WS: Closed ", id);
            var index = OWOP.BOTS.bots_array.indexOf(bot);
            OWOP.BOTS.bots_array.splice(index);
        }
        this.onMessage = function (message) {
            message = message.data;
            if (typeof message === "string") {
                console.log("WS: Message ", id);
                console.log(message);
                return;
            }
            var dv = new DataView(message);
            var code = dv.getUint8(0)
            if (code == 0) {
                var _id = dv.getUint32(1, true);
                console.log("Got an Id. Old: ", id, " New: ", _id);
                id = _id;
                bot.setAvailable();
            }
            if (code == 5) {
                var captchaResult = dv.getUint8(1);
                if (captchaResult == 0) {
                    bot.sendCaptcha();
                } else {
                    bot.joinWorld(protocol.worldName);
                }
            }
            if (code == 6) {
                var rate = dv.getUint16(1, true);
                var per = dv.getUint16(3, true);
                bot.setBucket(rate, per);
            }
            if (code != 1) {
                console.log(message);
            }
        }
    }

    OWOP.BOTS.bot = function () {
        this.token = null;
        this.connection = null;
        this.listener = null;
        this.isAvailable = false;
        this.bucket = null;
        this.setToken = function (token) {
            this.token = token;
        }
        this.connect = function () {
            this.connection = new WebSocket(OWOP.options.serverAddress[1].url);
            this.connection.binaryType = "arraybuffer";
            this.listener = new OWOP.BOTS.Listener(++OWOP.BOTS.last_bot_id, this);
            this.connection.addEventListener('message', this.listener.onMessage);
            this.connection.addEventListener('open', this.listener.onOpen);
            this.connection.addEventListener('close', this.listener.onClose);
        }
        this.setAvailable = function () {
            this.isAvailable = true;
        }
        this.setBucket = function () {
            this.bucket = new OWOP.BOTS.Bucket(32,4);
        }
        this.send = function (message, force) {
            if ((this.isAvailable || force) && this.connection != null){
                this.connection.send(message);
            } else {
                return false;
            }
        }
        this.sendCaptcha = function () {
            if (this.token != null){
                var generated = tokenVerification + this.token;
                this.send(generated, true);
            }
        }
        this.joinWorld = function (name) {
            var nstr = stoi(name, 24);
            var array = new ArrayBuffer(nstr[0].length + 2);
            var dv = new DataView(array);
            for (var i = nstr[0].length; i--;) {
                dv.setUint8(i, nstr[0][i]);
            }
            dv.setUint16(nstr[0].length, worldVerification, true);
            this.send(array, true);
            return nstr[1];
        }
    }

    OWOP.BOTS.tryWithBot = function (x, y, color) {
        var length = OWOP.BOTS.bots_array.length;
        if (length == 0) {
            return false;
        } else {
            for (var i = length - 1; i >= 0; i--) {
                var currentBot = OWOP.BOTS.bots_array[i];
                if (currentBot.bucket.canSpend(1)){
                    var arrayMove = new ArrayBuffer(12);
                    var dvMove = new DataView(arrayMove);
                    dvMove.setInt32(0, x*16, true);
                    dvMove.setInt32(4, y*16, true);
                    dvMove.setInt32(8, 0, true);
                    var array = new ArrayBuffer(11);
                    var dv = new DataView(array);
                    dv.setInt32(0, x, true);
                    dv.setInt32(4, y, true);
                    dv.setUint8(8, color[0]);
                    dv.setUint8(9, color[1]);
                    dv.setUint8(10, color[2]);
                    currentBot.send(arrayMove);
                    currentBot.send(array);
                    return true;
                }
            }
        }
    }

    OWOP.BOTS.requestNewBot = function () {
        OWOP.windowSys.addWindow(new OWOP.GUIWindow("Verification needed", { centered: true, closeable: true}, function (wdow) {
            try {
                var id = grecaptcha.render(wdow.addObj((0, OWOP.util.mkHTML)("div", {
                    style: "margin: -4px;" /* NOTE: not setting cssText */
                })), {
                    theme: "dark",
                    sitekey: SITEKEY,
                    callback: function callback(token) {
                        console.log("Captcha callback");
                        console.log(token);
                        var bot = new OWOP.BOTS.bot();
                        bot.setToken(token);
                        bot.connect();
                        OWOP.BOTS.bots_array.push(bot);
                        wdow.close();
                    }
                });
                wdow.frame.style.cssText = "";
                wdow.container.style.cssText = "overflow: hidden; background-color: #F9F9F9";
            } catch (err) {
                var bot = new OWOP.BOTS.bot();
                bot.connect();
                OWOP.BOTS.bots_array.push(bot);
                wdow.close();
            }

        }));
    }


    OWOP.BOTS.Bucket = function (rate, time) {
        this.lastCheck = Date.now();
        this.allowance = rate;
        this.rate = rate;
        this.time = time;
        this.infinite = false;

        this.canSpend = function (count) {
            if (this.infinite) {
                return true;
            }

            this.allowance += (Date.now() - this.lastCheck) / 1000 * (this.rate / this.time);
            this.lastCheck = Date.now();
            if (this.allowance > this.rate) {
                this.allowance = this.rate;
            }
            if (this.allowance < count + 1) {
                return false;
            }
            this.allowance -= count;
            return true;
            
        }
    }

}

setTimeout(addNewTools, 5000);
