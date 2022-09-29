const Client = require("mpp-client-xt");
class MPPBot {
  constructor () {
    this.messages = [];
    this.client = new Client("ws://www.multiplayerpiano.com:443")
    this.client.setChannel("test/chat");
    this.client.start();
    this.messagebuff = setInterval(() => {
      this.flushChat();
    },500)
    this.onMessage();
  }
  sendChat(msg) {    //sendchat func
      let msgs = msg.split("\n");
      for (let msgg of msgs) {
        if (msgg !== '')
       this.messages.push(msgg)
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
    onMessage() {
      this.client.on("a", msg => {
      msg.args = msg.a.split(" ");
      msg.input = n => msg.args.slice(n).join(" ");
      if (msg.p._id === this.client.getOwnParticipant()._id) {
          console.log(msg.a.replace(/[^\x00-\x7F\\]+| /gm, ""))
          let index = this.messages.indexOf(msg.a.replace(/\s\s+/g, ' '));
          console.log(index)
          if (index != -1 && !isNaN(index)) {
            this.messages.splice(index,1);
          } 
        }
        if (msg.a.startsWith("/say ")) {
          this.sendChat(msg.input(1).toString());
        }

    })
    }
}

new MPPBot()