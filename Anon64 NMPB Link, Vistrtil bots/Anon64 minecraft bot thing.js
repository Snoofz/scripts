mineflayer = require('mineflayer');
var options =
{
  host: "mc.jpdld.com",
  port: 25566,
  username: "OfoBot",
}
bot = mineflayer.createBot(options);


bindEvents(bot);
var range = 30;

var lmaoof = -21

var tp = 0;

var log = false

var notesplayed = 0;

var vad = 0;

var wat = 0;

var nowPlay = [];

var time = "00:00";

var elapse = 0;

var playing = false;

var signs = false;

var display = "1 2 3 4 5 6 7 8 9 0 a b c d e f".split(" ");



/////////// M P P ///////////
//function startmpp() {
String.prototype.replaceAll = function (match, replace) {
  return this.split(match).join(replace)
}
var Client = require('./Client2.js')
var nmpbchar = ">"
var MPPKeys = ["a-1", "as-1", "b-1", "c0", "cs0", "d0", "ds0", "e0", "f0", "fs0", "g0", "gs0", "a0", "as0", "b0", "c1", "cs1", "d1", "ds1", "e1", "f1", "fs1", "g1", "gs1", "a1", "as1", "b1", "c2", "cs2", "d2", "ds2", "e2", "f2", "fs2", "g2", "gs2", "a2", "as2", "b2", "c3", "cs3", "d3", "ds3", "e3", "f3", "fs3", "g3", "gs3", "a3", "as3", "b3", "c4", "cs4", "d4", "ds4", "e4", "f4", "fs4", "g4", "gs4", "a4", "as4", "b4", "c5", "cs5", "d5", "ds5", "e5", "f5", "fs5", "g5", "gs5", "a5", "as5", "b5", "c6", "cs6", "d6", "ds6", "e6", "f6", "fs6", "g6", "gs6", "a6", "as6", "b6", "c7"];
var channel_id = "NMPBlink23";
if (channel_id.substr(0, 1) == "/") channel_id = channel_id.substr(1);
if (channel_id === "") channel_id = "lobby";
var gClient = new Client("wss://ts.terrium.net:8443");
//var gClient = new Client("ws://www.multiplayerpiano.com:443");
mppsend = function (message) {
  gClient.sendArray([{
    m: "a",
    message: message
  }]);
}
// module.exports.client = gClient;
gClient.setChannel(channel_id);
gClient.start();
gClient.on("hi", function () {
  gClient.sendArray([{
    m: "userset",
    set: {
      name: "oofbot"
    }
  }]);
})
gClient.on("a", function (m) {
  if (m.a.startsWith("/")) {
    return;
  }
  if (m.a.startsWith("Reading file")) {
    //nowPlay = (m.a).split("");
    nowPlay = (m.a.split("Name:")[1].split("[")[m.a.split("Name:")[1].split("[").length - 2] + "---").split("");
    time = /\[\d{2,}:\d{0,2}\]/.exec(m.a)[0].slice(1, /\[\d{2,}:\d{0,2}\]/.exec(m.a)[0].length - 1)
    playing = true;
    elapse = 0;
  }
  botchat(m.a.replaceAll("/", nmpbchar))
})

gClient.on("n", function (msg) {
  for (i = 0; i < msg.n.length; i++) {
    var note = msg.n[i];
    var delay = note.d === undefined ? 0 : note.d;
    var vel = note.v;
    var index = MPPKeys.indexOf(note.n) + 21 + tp;
    delay ? (function (nt, v, d) { setTimeout(() => { play(nt, (v / 2) * 127) }, d) })(index, vel, delay) : play(index, (vel / 2) * 127);
    //play(index);
  }
})

MidiPlayer = require('midi-player-js');
Player = new MidiPlayer.Player(function (event) {
  if (event.name == "Note off" || (event.name == "Note on" && event.velocity === 0)) {

  } else if (event.name == "Note on") {
    play(event.noteNumber, event.velocity);
    notesplayed++;
  } else if (event.name == "Set Tempo") {
    Player.setTempo(event.data);
  }
});
Player.sampleRate = 0;
var rotate = "POTATO.EXE\nOTATO.EXE P\nTATO.EXE PO\nATO.EXE POT\nTO.EXE POTA\nO.EXE POTAT\n.EXE POTATO\nEXE POTATO.\nXE POTATO.E\nE POTATO.EX".split("\n");
var ani = [
  "⧹        /".split(""),
  "[]⧹    /[]".split(""),
  "[][]⧹/[][]".split("")
];
var blocks = [
  "/replaceitem entity @p armor.head minecraft:red_stained_glass",
  "/replaceitem entity @p armor.head minecraft:orange_stained_glass",
  "/replaceitem entity @p armor.head minecraft:yellow_stained_glass",
  "/replaceitem entity @p armor.head minecraft:green_stained_glass",
  "/replaceitem entity @p armor.head minecraft:blue_stained_glass",
  "/replaceitem entity @p armor.head minecraft:purple_stained_glass"
];
function sectoform(sec) {
  var totalSeconds = sec;
  var years = Math.floor(totalSeconds / 31556926);
  totalSeconds %= 31556926;
  var months = Math.floor(totalSeconds / Math.round(2629743.83));
  totalSeconds %= Math.round(2629743.83);
  var days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  var hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  //console.log(years, months, days, hours, minutes, seconds);
  if (parseInt(years) <= 9) years = "0" + years;
  if (parseInt(months) <= 9) months = "0" + months;
  if (parseInt(days) <= 9) days = "0" + days;
  if (parseInt(hours) <= 9) hours = "0" + hours;
  if (parseInt(minutes) <= 9) minutes = "0" + minutes;
  if (parseInt(seconds) <= 9) seconds = "0" + seconds;

  years = years + ":";
  months = months + ":";
  days = days + ":";
  hours = hours + ":";
  minutes = minutes + ":";

  if (years == "00:" && months == "00:") years = "";
  if (months == "00:" && days == "00:") months = "";
  if (days == "00:" && hours == "00:") days = "";
  if (hours == "00:" && minutes == "00:") hours = "";

  var out = years + months + days + hours + minutes + seconds;
  if (out.startsWith("00:") && out.length > 5) out = out.substring(3, out.length)
  return out;
}
function getTime(time) {
  var m = parseInt(time.split(":")[0]);
  var s = parseInt(time.split(":")[1]);
  var sec = 0;
  sec += s;
  sec += m * 60;
  return sec
}

function bindEvents(bot) {

botchat = function(m) {
  bot.chat(m);
}

  bot.on('chat', (username, message) => {
    //console.log(message);
    if (message.length === 0) return;
    if (username === bot.username) return;
    var cmd = message.split(' ')[0].toLowerCase();
    var input = message.substring(cmd.length).trim();
    var target = bot.players[username];

    if (message.startsWith(nmpbchar)) {
      if (message.startsWith(`${nmpbchar}stop`)) playing = false;
      if (message.startsWith(`${nmpbchar}p`) || message.startsWith(`${nmpbchar}play`)) playing = true;
      mppsend(message.replaceAll(nmpbchar, "/"))
    }
    if (message.indexOf("oof") > -1 || message.indexOf("ofo") > -1 || message.indexOf("foo") > -1) bot.chat("oof")
    switch (cmd) {
      case '!js':
        if (username === 'Anon64B') {
          try {
            bot.chat("result: " + eval(input))
          } catch (e) {
            bot.chat("error: " + e)
            console.log(e)
          }
        }
        break;
    }
  });

// list of key pitches Fb1 - Fb2
pitches = [0.5];
for (let i = -11; i <= -1; i++)
  pitches.push(Math.pow(2, i / 12));
pitches.push(1);
for (let i = 1; i <= 11; i++)
  pitches.push(Math.pow(2, i / 12));
pitches.push(2);

var channel = ["bass", "harp", "bell"];

play = function (noteNumber, vel = 0) {
  //let cmd = `/playsound minecraft:block.note_block.harp record @a ~ ~ ~ 1 ${(event.noteNumber - 21) / 44}`
  let npos = noteNumber - 21; // note position from 0 to 88
  let opos; // octave start position
  let inst;
  while (npos < 8 || npos > 80) {
    if (npos < 8) npos += 12
    if (npos > 80) npos -= 12
  }
  let offset = npos + lmaoof;
  if (npos > (opos = 8) && npos <= 32) {
    inst = `minecraft:block.note_block.${channel[0]}`;
  }
  else if (npos > (opos = 32) && npos <= 56) {
    inst = `minecraft:block.note_block.${channel[1]}`;
  }
  else if (npos > (opos = 56) && npos <= 80) {
    inst = `minecraft:block.note_block.${channel[2]}`;
  } else return;
  //console.log(npos - opos - 1);
  let pitch = pitches[npos - opos - 1];
  if (!pitch) return;
  let cmd = `/execute at @a[distance=..${range}] run playsound ${inst} record @p ~ ~ ~ ${(vel / 127) + vad} ${pitch} 1`
  //console.log(cmd);
  let ofo = `/execute at @e[type=minecraft:armor_stand,name=PianoBotOffset,limit=1] run setblock ~-${offset} ~ ~ minecraft:redstone_block`;
  bot.chat(cmd);
  bot.chat(ofo);
  notesplayed++;
}

  bot.on('login', () => {
    console.log("login");
    //bot.chat('/register botpass botpass')
    bot.chat(`/setblock ~-1 ~1 ~ minecraft:wall_sign`);
    bot.chat(`/setblock ~-1 ~ ~ minecraft:wall_sign`);
    bot.chat(`/setblock ~1 ~1 ~ minecraft:wall_sign`);
    bot.chat(`/setblock ~1 ~ ~ minecraft:wall_sign`);
    setInterval(() => {
      if (playing) {
        if (elapse / 4 > getTime(time)) {
          playing = false;
          return;
        }
        elapse += 1;
      }
      if (signs) {
        nowPlay.push(nowPlay.shift());
        signPlaying = nowPlay.slice(0, 13).join("");
        bot.chat(`/data merge block ~-1 ~1 ~ {Text1:"Notes:",Text2:"${notesplayed}",Text3:"Connected:",Text4:"${Math.round(wat / 4)}"}`);
        bot.chat(`/data merge block ~-1 ~ ~ {Text1:"Range: ${range}",Text2:"CH0: ${channel[0]}",Text3:"CH1: ${channel[1]}",Text4:"CH2: ${channel[2]}"}`);
        bot.chat(`/data merge block ~1 ~1 ~ {Text1:"${rotate[wat % rotate.length]}"}`);
        if (log) console.log(signPlaying);
        bot.chat(`/data merge block ~1 ~ ~ {Text1:"<Now Playing>",Text2:"|${signPlaying}|",Text3:"[${sectoform(Math.round(elapse / 4))} | ${time}]"}`)
        bot.chat(`${blocks[wat % blocks.length]}`);
        wat++
      }
    }, 250);
  });
  bot.on('kicked', function (reason) {
    console.log("I got kicked for\"", reason.text,"\"");

    bot = mineflayer.createBot(options);
    bindEvents(bot);
  });
}
