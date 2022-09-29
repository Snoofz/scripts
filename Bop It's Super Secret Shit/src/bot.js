const Client = require("./Client.js");

module.exports = class Bot {

    constructor(room) {
      this.room = room || "lobby";
      this.desiredbotName = "JAMB";
      this.client = new Client("ws://websocketproxy1.herokuapp.com?target=ws://www.multiplayerpiano.com:443&origin=http://www.multiplayerpiano.com")//("ws://websocket-proxy--anon64.repl.co?target=ws://104.237.150.24:8512");
      this.client.setChannel(this.room);
      this.client.start();
      this.client.roomsetinterval = setInterval(() => {
        if ((this.client.isConnected() && !this.client.channel) || (this.client.channel && this.client.channel._id != this.room)) {
            this.client.setChannel(this.room);
        }
      },1000);
      this.ranks = require("./db/ranks.json");
      this.commands = [];
      //require("./addCommands.js").bind(this)();
      this.banmsg = "lol no."
      this.cmdChar = "?"
      this.cmode = {
        user: { _id: "", name: "", color: "#777" },
        mode: "cmd",
        type: "1person",
        cmd: null
      }
      this.Cursor = require("./Cursor.js")(this);
      this.Economy = require("./Economy.js")(this);
      this.BotOnMessage = require("./BotOnMessage.js")(this);
      this.time = 0;
      this.piano = {
        keys: Bot.getKeys()
      }
      this.messages = [];
      this.Color = require("./Color.js");
      this.messagebuff = setInterval(() => {
        this.flushChat();
      },250)
      this.roomms = 1000 * 60 * 5;  //5 min
      this.roomtimeout;
      this.highscores = require("./db/highscores.json");
      this.doStuff();
      //this.Command = require("./command.js");
      require("./temp.js").bind(this)();
    }
    
    sendChat(msg) {    //sendchat func
      if (typeof msg === 'string') {
        let msgs = msg.split("\n");
        for (let msgg of msgs) {
          if (msgg !== '')
        this.messages.push(msgg)
        //this.client.sendArray([{m: "a", message: msgg}]);
        }
      } else {
        throw `sendChat function requires string. not ${typeof msg}`
      }
    }

    flushChat() {
      if (this.messages.length != 0) {
      for (let mSg of this.messages) {
        this.messages.indexOf(mSg) !== -1 ? this.client.sendArray([{m: "a", message: mSg}]) : {};
      }
      console.log(this.messages)
    }
    }

    getRankById(_id) {
      if (this.ranks.owner._id == _id) {
        return { id: 3, name: "Owner" };
      } else if (this.ranks.banned.hasOwnProperty(_id)) { //banned after owner so owner no ban.
        return { id: -1, name: "Banned" }
      } else if (this.ranks.admins.hasOwnProperty(_id)) {
        return { id: 2, name: "Admin" };
      } else if (this.ranks.helpers.hasOwnProperty(_id)) {
        return { id: 1, name: "Helper" };
      } else {
        return { id: 0, name: "User" };
      }
    }

    getRankNameByRankid(id) {
      switch (id) {
        case 3: return "Owner";
          break;
        case -1: return "Banned"; //same thing here
          break;
        case 2: return "Admin";
          break;
        case 1: return "Helper";
          break;
        default: return "User";
          break;
      }
    }

    getRankIdByRankName(id) {
      switch (id) {
        case "Owner": return 3;
          break;
        case "Banned": return -1; //same thing here
          break;
        case "Admin": return 2;
          break;
        case "Helper": return 1;
          break;
        default: return 0;
          break;
      }
    }

    getUsage(cmd) {
      let foundcmd = this.commands.find((command) => cmd == command.cmd)
      if (foundcmd) 
        return foundcmd.usage.replace("CMDCHAR",this.cmdChar);
        else 
        return `There is no help for the command '${cmd}'`;
    }

    getCmdChar() {
      return this.cmdChar;
    }

    getCommandObj(cmd) {
      return this.commands.find((command) => cmd == command.cmd);
    }

    getUsersByNameOrId(user) {
      return Object.values(this.client.ppl).filter((prsn) => prsn.name.toLowerCase().includes(user.toLowerCase()) || prsn._id == user);
    }

    async changeRank(_id,rank) {
      //db.push("./ranks.json", {rank: {_id: _id} })
      for (let rankname of Object.keys(this.ranks)) {
        //remove _id from all ranks.
        if (this.ranks[rankname].hasOwnProperty(_id)) {
          delete this.ranks[rankname][_id]
          this.updatedb()
          console.log(this.ranks);
        }
      }
      if (rank == "users") {
        this.updatedb();
        return this.getRankById(_id).name;

      } else {
        //give new rank
        if (!this.ranks[rank].hasOwnProperty(_id)) {
          this.ranks[rank][_id] = _id
          this.updatedb();
        } else {
          console.log("Nope!");
        }
        return this.getRankById(_id).name;
      }
    }

    async updateBan(_id, ban) {
      if (!this.ranks["banned"].hasOwnProperty(_id) && ban == true) {
        this.ranks["banned"][_id] = _id
        this.updatedb();
      } else if (this.ranks["banned"].hasOwnProperty(_id) && ban == false) {
        delete this.ranks["banned"][_id];
        this.updatedb();
      }
    }

    async updateHighscores(user, cmd, highscore) {
      let commandobj = this.getCommandObj(cmd);
      if (commandobj.highscore) {
        if (!this.highscores[commandobj.cmd]) { //this will probably never be true
          this.highscores[commandobj.cmd] = {
            user: { _id: "", name: "Anonymous", color: "#777" },
            highscore: "999",
          }
        } else {
          this.highscores[commandobj.cmd] = {
            user: user,
            highscore: highscore
          };
        }
      }
      this.updatedb();
    }

    resetHighscore(cmd) {
      let commandobj = this.getCommandObj(cmd);
      if (commandobj.highscore) {
        this.highscores[commandobj.cmd] = {
          user: { _id: "", name: "Anonymous", color: "#777" },
          highscore: "999",
        };
        this.updatedb();
      } else {
        console.error("This cmd doesn't use highscores.");
      }
    }

    resetAllHighscores() {
      this.highscores = {};
      this.updatedb();
    }

    updatedb() {
      fs.writeFile('../&^#%(&^#%\'//src/db/ranks.json', JSON.stringify(this.ranks), (err) =>
      { 
        if(err) {
          throw err;
        }
      });
      fs.writeFile('../&^#%(&^#%\'//src/db/highscores.json', JSON.stringify(this.highscores), (err) => {
        if(err) {
          throw err;
        }
        console.log('File Saved!');
      });
    }

    changeMode(mode, user, cmd, type, data, ms, msg) {
      if (mode == "cmd") {
        this.cmode = {
          user: { _id: "", name: "", color: "#777" },
          mode: "cmd",
          cmd: null,
          data: null,
          msg: null
        }
      } else {
        this.cmode = {
          user: user,
          mode: "sfunc",
          type: type,
          cmd: cmd,
          data: data,
          ms: ms,
          msg: msg
        }
        this.gameTimer(ms,data,cmd);
      }
    }

    gameTimer(ms,data,cmd) {
      setTimeout(() => {
        if (this.cmode.mode != "cmd" && data == this.cmode.data && cmd == this.cmode.cmd) {
          this.sendChat(this.cmode.msg)
          this.changeMode("cmd");
        }
      },ms)
    }

    roomTimer(ms) {
      this.roomtimeout = setTimeout(() => {
        if (Object.keys(this.client.ppl).length == 1 && !Bot.frooms.includes(this.room)) {
          this.destroy();
        }
      },ms)
    }

    destroy() {
      console.log("Destroied bot " + this.room)
      !Bot.frooms.includes(this.room) ? delete Bot.rooms[this.room] : console.error("Cannot delete froom");
      Bot.updateroomdb();
      clearInterval(this.messagebuff);
      Bot.bots = Bot.bots.filter((somebot) => somebot.room !== this.room);
      this.client.stop();
      return;
    }

    doStuff() {
    //set owner in database
    //TODO add event handlers in own file
    var that = this;
    this.client.on("p", (msg) => {
      msg._id === this.client.getOwnParticipant()._id ? this.client.sendArray([{m:'userset', set: {name: this.desiredbotName}}]) : {};
      //Object.values(msg.ppl).find((prsn) => prsn._id === this.client.getOwnParticipant()._id && prsn.name != this.desiredbotName) ? this.client.sendArray([{m:'userset', set: {name: this.desiredbotName}}]) : {};	  
    });

    this.client.on("hi", (msg) => {
      this.client.sendArray([{m:'userset', set: {name: this.desiredbotName}}]);
    });  
    
    this.client.on('notification', async msg => {//copied from lamp
      // handle bans
      if (msg.text && (msg.text.startsWith('Banned from') || msg.text.startsWith('Currently banned from'))) {
              // Banned from "{room}" for {n} minutes.
              // Currently banned from "{room}" for {n} minutes.
        let arr = msg.text.split(' ');
        arr.pop();
        let minutes = arr.pop();
  
        if (Bot.frooms.includes(this.room)) {
          console.log(`Bot ${this.room} was banned for ${minutes} minutes. Attempting to rejoin then.`);
          this.client.stop();
          setTimeout(()=>{
            this.client.setChannel(this.room);
            this.client.start();
          }, minutes*60*1000+3000);
        } else {
          this.destroy();
        }  
      }
    });
  
    
    this.client.on("ch", (msg) => { 
      //room timer
      Bot.rooms[this.room] = {
        "ppl": {}
      }
      clearTimeout(this.roomtimeout);
      this.roomTimer(this.roomms);
    }); 
    } 

    static updateroomdb() {
      fs.writeFile('../&^#%(&^#%\'//src/db/rooms.json', JSON.stringify(Bot.rooms), (err) => {
        if(err) {
          throw err;
        }
        console.log('File Saved!');
       });
    }
    
    static getKeys() {
      var MIDI_TRANSPOSE = -12;
      var MIDI_KEY_NAMES = ["a-1", "as-1", "b-1"];
      var bare_notes = "c cs d ds e f fs g gs a as b".split(" ");
        for (var oct = 0; oct < 7; oct++) {
          for (var i in bare_notes) {
            MIDI_KEY_NAMES.push(bare_notes[i] + oct);
          }
        }
      MIDI_KEY_NAMES.push("c7");
      return MIDI_KEY_NAMES;
    }

}