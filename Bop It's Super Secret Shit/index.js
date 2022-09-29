var Bot = require("./src/bot.js");
global.fs = require('fs');
global.Bot = Bot;
Bot.rooms = require("./src/db/rooms.json");
Bot.bots = [];
Bot.frooms = ["lobby", "test/awkward", "hackville"]
//global.BOT = new Bot("lobby");
const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

function getChEvent(room) {
    return new Promise(function(resolve, reject) {
        let bot = new Bot(room);
        Bot.bots.push(bot);
        bot.client.once('ch', () => {
            resolve(bot);
        });
    });
}

async function startBots() {
    for (let room in Bot.rooms) {
        let data = await getChEvent(room);
        console.log("connected bot " + data.room);
        await waitFor(2000 + data.client.serverTimeOffset);
    }
}
startBots().then(() => {
    evalcmd();
})

Bot.startBot = async function (room) {
    let returntype;
    let data = await getChEvent(room);
        console.log("connected bot " + data.room);
        await waitFor(2000 + data.client.serverTimeOffset);
        returntype = {
            "type": "resolve",
            "data": data
        };
    return new Promise(function (resolve, reject) {
        returntype.type == "resolve" ? resolve({
            "connected": true,
            "data": returntype.data
        }) : reject({
            "connected": false,
            "err": returntype.e
        })
    })

}

function getRooms() {
    return new Promise(function (resolve, reject) {
        Bot[0].once("ls", msg => {
            resolve(msg.u);
            Bot[0].sendArray([{
                m: "-ls"
            }]);
        });
        Bot[0].sendArray([{
            m: "+ls"
        }]);
    });
}


global.replaceAt = function (string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

global.request = require('request');

Object.defineProperty(Array.prototype, 'chunk', {
    value: function (n) {
        return Array.from(Array(Math.ceil(this.length / n)), (_, i) => this.slice(i * n, i * n + n));
    }
});

  
function evalcmd() {
    //with all optional parameters set to opposite of default
    const { EntoliPrompt } = require('entoli');
    let EP = new EntoliPrompt('', { enterMessage: false, exitMessage: false, preventExit: false });
    EP().then((a) => {
        console.log(eval(a));
        evalcmd();
    }).catch((e) => {
        console.error(e);
        evalcmd();
    });
}