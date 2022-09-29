class BotOnMessage {
    constructor(bot) {
        this.bot = bot;
        this.temparr = [];
        this.initListeners();
    }
    initListeners() {
    this.bot.client.on("a", (msg) => {
        msg.p.rank = this.bot.getRankById(msg.p._id);
        msg.data = this.bot.cmode.data;
        msg.args = msg.a.split(" ");
        msg.input = n => msg.args.slice(n).join(" ");
        msg.command = msg.args[0].split(this.bot.getCmdChar()).slice(1).join(this.bot.getCmdChar());
        this.bot.time = msg.t;
        if (msg.p._id === this.bot.client.getOwnParticipant()._id) {
          /*this.bot.messages.forEach((msG, num) => {
              this.temparr = [];
              this.temparr.push(msG.replace(/[^\x00-\x7F\\]+| /gm, ""))
            })*/
            this.bot.messages = this.bot.messages.filter(item => item.replace(/[^\x00-\x7F\\]+| /gm, "") !== msg.a.replace(/[^\x00-\x7F\\]+| /gm, ""))
            /*
              let index = this.temparr.indexOf(msg.a.replace(/[^\x00-\x7F\\]+| /gm, ""));
              console.log(index)
            if (index !== -1) {
                console.log("a")
              this.bot.messages.splice(index,1);
            }    */
        }
        //msg.p._id === this.client.getOwnParticipant()._id ? this.messages = this.messages.filter(item => item.trim() !== msg.a) : {};
        this.bot.commands.forEach((commandobj) => {
          switch (msg.command) {
            case commandobj.cmd: {
              if (msg.p.rank.id >= commandobj.minrank) {
                if (msg.args.length - 1 < commandobj.minargs) {
                  this.bot.sendChat(this.bot.getUsage(commandobj.cmd))
                } else {
                  if (!(commandobj.secondfunc != null && this.bot.cmode.mode != "cmd")) {
                    if (commandobj.highscore) {
                      if (!this.bot.highscores[commandobj.cmd]) {
                        this.bot.highscores[commandobj.cmd] = {
                          user: { _id: "", name: "Anonymous", color: "#777" },
                          highscore: "999",
                        }
                        this.bot.updatedb();
                      }
                    }
                    if (msg.p._id == this.bot.client.getOwnParticipant()._id) return;
                    if (!msg.a.startsWith(this.bot.getCmdChar())) return;
                    commandobj.func(msg);
                  } else {
                    this.bot.sendChat("Bot is busy!");
                  }
                }
              } else {
                if (msg.p.rank.name == "Banned") {
                  this.bot.sendChat(this.bot.banmsg);
                } else {
                  switch (this.bot.getRankNameByRankid(commandobj.minrank)) {
                    case "Owner": {
                      this.bot.sendChat(`Sorry, you must be the owner to use this command.`);
                      break;
                    }
                    default: {
                      this.bot.sendChat(`Sorry, you must be a ${this.bot.getRankNameByRankid(commandobj.minrank)} or higher to use this command.`);
                    }
                  }
                }
              }
              break;
            }
          }
        })
        if (this.bot.cmode.mode != "cmd" && !msg.a.startsWith(this.bot.getCmdChar())) {
          if (this.bot.cmode.user._id == msg.p._id || this.bot.cmode.type == "all")
            this.bot.getCommandObj(this.bot.cmode.cmd).secondfunc(msg);
        }
      })
    }
}

module.exports = (bot) => {
    return new BotOnMessage(bot)
}

