// ==UserScript==
// @name         ＮａＮ－ＮａＮ-ｓｅｎｐａｉ Tamako
// @namespace    http://tampermonkey.net/
// @version      0.17
// @description  try to take over the world!
// @author       ＮａＮ－ＮａＮ-ｓｅｎｐａｉ
// @include      http://www.multiplayerpiano.com/*
// @include      http://multiplayerpiano.com/*
// @include      http://mpp.meowbin.com/*
// @include      http://www.ourworldofpixels.com/piano/*
// @include      http://ourworldofpixels.com/piano/*
// @include      http://www.awakens.me/*
// @include      http://awakens.me/*
// @include      https://www.multiplayerpiano.com/*
// @include      https://multiplayerpiano.com/*
// @include      https://mpp.meowbin.com/*
// @include      https://www.ourworldofpixels.com/piano/*
// @include      https://ourworldofpixels.com/piano/*
// @include      https://www.awakens.me/*
// @include      https://awakens.me/*
// @include      https://www.braains.io/*
// @include      https://braains.io/*
// @include      http://www.braains.io/*
// @include      http://braains.io/*
// @grant        none
// ==/UserScript==

var rn = "ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)"; //YOUR NAME HERE
var change = "off";
var switcher = "off";
var start = "on";
window.doCommand = true; MPP.client.on("a", function (msg) { if (!doCommand) return; var args = msg.a.split(" ");
MPP.piano.renderer.keyMovement=50 ;
var cmd = args[0].toLowerCase();
args = args.slice(1);
var sendChat = function(msg) { MPP.chat.send(msg);};
var name = msg.p.name;
input = msg.a.substring(cmd.length).trim();

// add commands here, they must be in the same format. ex: ["cmd", "yourcommand", "anothercommand"

var commands =("commands, help, hello, say, talk, morning");
var version = "Version 0.20";



//-----------------------|changeables|-----------------------//
var pf = "|";                     //prefix -change it to change your prefix
var bnn = "イคɱคкσ-ςнคห";       //bot  name - change it to cahnge you bot name
var lpp = "Nyan~";             //last prefis - you can just delete it
var sc = "ＮａＮ－ＮａＮ-ｓｅｎｐａｉ "; //script creator - thats the name of the sript creator
var sn = "~|ＮａＮ－ＮａＮ-ｓｅｎｐａｉ Tamako|~ "; //script name - its the script name
var adminid = [MPP.client.getOwnParticipant()._id];
var admad = bn+ "Sorry "+name+" but this is a admin command"+lp;
//-----------------------|changeables|-----------------------//
var lp = ". "+lpp;
var p  = ": ";
var bn = bnn+p;

if(start === "on"){
    start = "off"; //in the next line: prototype for Tamako-chan GIF
    rn = MPP.client.getOwnParticipant().name;
    $(".relative").append('<style> table, th, td { font-size: 100%; border: 1px solid black; } </style> <table style="height:150px; position: fixed;bottom: 470px;right:330px;"> <tr bgcolor="#000"> <td id="table" height="100px" width="100"> <img src="https://lh3.googleusercontent.com/-UvHhOYHYgSM/U-vybjrwTgI/AAAAAAAJA2c/eRJGWXPtYic/w506-h592/wave.chitanda.hyouka.bye.later.morning.hi.hello.gif" width="100" height="130"><p><font size="-2">Concept</font> <u><font style="font-size:8px" color="#00FFFF">'+version+'</font><u></p></td> </tr> </table>');
}


if(cmd === pf+"version"){
    if(input === "tamako"){
    sendChat(bn+sn);
}
}
if(cmd===pf+"namechange"){
if (change === "off" && msg.p._id==adminid){
change = "on";
}else if (change === "on" && msg.p._id==adminid){
change = "off";
}
}
if(cmd === pf+"tamako"){
    if(args.length === 0 && change === "on"){
        let tamako = [bn+ "Yes master" +lp, bn+"Say what ill do"+lp,bn+ "Im here, what i should do? "+lpp];
         sendChat(tamako[Math.floor(tamako.length * Math.random())]);

    }else if(change === "off" && args.length === 0){
        MPP.client.sendArray([{m: "userset",set: {name: bnn}}]);
        let tamako2 = [ "Yes master, try "+pf+"tamako <help>" +lp, "Say what ill do! "+lpp, "Im here, what i should do? "+lpp];
         sendChat(tamako2[Math.floor(tamako2.length * Math.random())]);
        setTimeout(function(){ MPP.client.sendArray([{m: "userset",set: {name: rn}}]);
                             }, 2100);

    }else if(change === "off" && msg.a.includes("help")){
         MPP.client.sendArray([{m: "userset",set: {name: bnn}}]);
let tamakohlp = [ "How i can help you? I think "+pf+"tamako <commands> will help you! "+lpp, "Try use "+pf+"tamako <commands>"+lp, "Maybe "+pf+"tamako <commands> will help you"+lp];
         sendChat(tamakohlp[Math.floor(tamakohlp.length * Math.random())]);
    setTimeout(function(){ MPP.client.sendArray([{m: "userset",set: {name: rn}}]);
}, 2100);

}else if(change === "off" && msg.a.includes("morning")){
    MPP.client.sendArray([{m: "userset",set: {name: bnn}}]);
    let tamakomor= ["Ohaiyo "+name+lp,"Good morning "+name+lp,"Konnichiwa "+name+lp];
         sendChat(tamakomor[Math.floor(tamakomor.length * Math.random())]);
    setTimeout(function(){ MPP.client.sendArray([{m: "userset",set: {name: rn}}]);
                          }, 2100);

}else if(change === "off" && msg.a.includes("commands")){
    MPP.client.sendArray([{m: "userset",set: {name: bnn}}]);
    sendChat("My commands are: "+commands+lp);
    setTimeout(function(){ MPP.client.sendArray([{m: "userset",set: {name: rn}}]);
         }, 2100);

}else if(change === "off" && msg.a.includes("cmds")){
    MPP.client.sendArray([{m: "userset",set: {name: bnn}}]);
    sendChat("My commands are: "+commands+lp);
    setTimeout(function(){ MPP.client.sendArray([{m: "userset",set: {name: rn}}]);
         }, 2100);

}else if(change === "off" && msg.a.includes("say")){
MPP.client.sendArray([{m: "userset",set: {name: bnn}}]);
sendChat(msg.a.substring(11).trim()+lp);
setTimeout(function(){ MPP.client.sendArray([{m: "userset",set: {name: rn}}]);
}, 2100);

}else if(change === "off" && msg.a.includes("talk")){
MPP.client.sendArray([{m: "userset",set: {name: bnn}}]);
sendChat(msg.a.substring(12).trim()+lp);
setTimeout(function(){ MPP.client.sendArray([{m: "userset",set: {name: rn}}]);
}, 2100);

}else if(change === "off" && msg.a.includes("hi")||("hello")||("yo")){
    MPP.client.sendArray([{m: "userset",set: {name: bnn}}]);
    let tamakohi = ["Hello "+name+", i can do something to you? "+lpp,"Hello master "+name+lp,"Yo :v"];
         sendChat(tamakohi[Math.floor(tamakohi.length * Math.random())]);
    setTimeout(function(){ MPP.client.sendArray([{m: "userset",set: {name: rn}}]);
                          }, 2100);

}else{
    if(change ==="on"&& msg.a.includes("say")){
sendChat(bn+msg.a.substring(11).trim()+lp);
}
}
}
/*if(cmd===pf+"tamakosay"){
if(args.length === 0){
sendChat(bn+"That command make me say anything. Use <|tamakosay exemple>"+lp);
}else if(change === "off"){
MPP.client.sendArray([{m: "userset",set: {name: bnn}}]);
sendChat(input+lp);
setTimeout(function(){ MPP.client.sendArray([{m: "userset",set: {name: "ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)"}}]);
}, 2100);
}else if(change ==="on"){
sendChat(bn+input+lp);
}
}*/

if(cmd==="testtamako" && msg.p._id==adminid){
    sendChat(bn+"The "+sn+" script is workin well"+lp);
}

if (cmd == pf+"jstmk") {
                try {   /*jshint -W061 */
                    sendChat(bn+"(tamako) " + eval(input) + lp);
                } catch (err) {
                    sendChat(bn+"(tamako) "+err + lp);
                }
            }

})();