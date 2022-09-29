const Client = require("mpp-client");
const proxies = [
"ws://mpp-proxy-server--bopit.repl.co",
"ws://mpp-proxy-server-1--bopit.repl.co",
"ws://mpp-proxy-server-3--bopit.repl.co"
]

const names = [
  "Player 1",
  "Player 2",
  "⚽"
];

let peeps = [];

Client.prototype.setName = function(name) {
  this.sendArray([{m: "userset", set: {name: name}}])
}

for (var i in proxies) {
peeps[i] = new Client(proxies[i]);
peeps[i].setChannel("e");
peeps[i].start();
peeps[i].setName(names[i]);
}
