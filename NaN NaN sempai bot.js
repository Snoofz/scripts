// ==UserScript==                                                           //SCROLL DOWN
// @name         ＮａＮ－ＮａＮ-ｓｅｎｐａｉ Bot
// @namespace    http://tampermonkey.net/
// @version      3
// @description  try to take over the world!
// @author       ＮａＮ－ＮａＮ-ｓｅｎｐａｉ
// @include      http://www.multiplayerpiano.com/*
// @include      http://multiplayerpiano.com/*
// @include      http://mpp.meowbin.com/*
// @include      http://www.ourworldofpixels.com/piano/*
// @include      http://ourworldofpixels.com/piano/*
// @include      https://www.multiplayerpiano.com/*
// @include      https://multiplayerpiano.com/*
// @include      https://mpp.meowbin.com/*
// @include      https://www.ourworldofpixels.com/piano/*
// @include      https://ourworldofpixels.com/piano/*
// @grant        none
// ==/UserScript==

var rn = "ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR)"; //YOUR NAME HERE
var change = "off";
var switcher = "off";
var tmkhi = "on";
var itens = [];
var listRemake = "off";
var vote1 = 0;
var vote2 = [];
var vote3 = [];
var r1="|"; var r2 = "|"; var r3 = "|"; var r4 =[];
var toggle = false;
var start = "on";
var wallpaper = "http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/08/wallpaper-1.jpg";
var saveThings = []; var saveThings2 = []; var savedeleteq = "off";
var mavisid  = "76a6dc853879d035f2a836d"; var mavisstart = "off";


document.getElementsByTagName("input")[0].onload = loadfnc();

function loadfnc(){
    setTimeout( function(){
MPP.chat.send("(Loading scripts...) ");
    }, 5000);
    songbtnfnc();
}

function songbtnfnc(){
    $.getScript("http://skyfoll.tk/Sounds.js");
    setTimeout( function(){

    setInterval( function(){
    document.getElementById("sound-btn").style.right = "78px";
    document.getElementById("sound-btn").style.bottom = "7px";
    document.getElementById("sound-btn").style.left = "660px";
    }, 1);

    }, 4000);
}

window.doCommand = true; MPP.client.on("a", function (msg) { if (!doCommand) return;
var args = msg.a.split(" ");
var cmd = args[0].toLowerCase();
var outdoorcmd = args[0].toLowerCase();
args = args.slice(1);
var sendChat = function(msg){
MPP.chat.send(msg);
};
var name = msg.p.name;
var lS = localStorage;
input = msg.a.substring(cmd.length).trim();


// add commands here, they must be in the same format. ex: ["cmd", "yourcommand", "anothercommand"

var commands   = ["about","kiss", "lenny","nansite","bug","user_id","recipe","playernumber"];
var commands2  = ["rape","eat","punch","hereis","date","roomname","seecursor", "specialthx"];
var commands3  = ["countdown","list","length" ,"tamako" /*tamako script*/,"switcher","caution","version","script"];
var commands4  = ["vote","sendnan","beep"];
var otherscmds = ["hi", "hello","bug","lel","lol","lul","/h","|h","|help","/help","bye","bie"];


var st = ": Smalllight, Delan(RU), Chacha–㉖, ＬｕｄｗｉｇＯＳ, ๖ۣۜNεмεsis, Mayonnaise, ⚡LIGHTNING⚡, Ѵιɗκυηѕѕоηη, lamp, FluffehKitteh48(he is awesome)"; //special thanks

var version = "Version 3.68.92";

//-----------------------|changeables|-----------------------//
var pf = "|";                     //prefix -change i to change your prefix
var bnn = "イคɱคкσ-ςнคห";       //bot  name - change it to cahnge you bot name
var lpp = "  Nyan~";             //last prefis - you can just delete it
var sc = "ＮａＮ－ＮａＮ-ｓｅｎｐａｉ "; //script creator - thats the name of the s"ript creator
var sn = "~|ＮａＮ－ＮａＮ-ｓｅｎｐａｉ Bot | "+version+"|~ "; //script name - its the script name
var adminid = [MPP.client.getOwnParticipant()._id];
var lp = ". "+lpp;
var p  = ": ";
var bn = bnn+p;
var admad = bn+ "Sorry "+name+" but this is a admin command"+lp;
//-----------------------|changeables|-----------------------//





var admcmd  = pf+"room, "+pf+"forcelobby, "+pf+"name,"+/*name change script*/" ";                      //ADMCMD HERE #############################################################################
var admcmd2 = pf+"mousefollower, "+pf+"seecursor, "+pf+"fixurl";
var admcmd3 = pf+"google, "+pf+"translator, "+pf+"definitions";
var admcmd4 = pf+"onlinesequencer, "+pf+"mpp2, "+pf+"panel, "+pf+"mavis";
var admcmd5 = pf+"spam, "+pf+"jsbot, "+pf+"jstmk, "+pf+"jsname, "+pf+"jsgames, "+pf+"control";
var admcmd6 = pf+"wallpaper, "+pf+"keyboard opacity, "+pf+"3wtryit, "+pf+"htmladd";


var scrpList   = "<bot, tamako, name, press, js, games>";
var scrpBot    = "https://pastebin.com/wLCDYhzg , last update: Verssion 3.68.92 | 09/02/2017 at 02:29 hours";
var scrpTamako = "https://pastebin.com/iF5DeMCS , last update: Verssion 0.20 | 05/18/2017 at 01:01 hours";
var scrpName   = "https://pastebin.com/Etv1gGZx , last update: Version 1.17 | 05/18/2017 at 01:03 hours";
var scrpPress  = "https://pastebin.com/ZaUc79Fk , last update: Version 1.0 | 05/08/2017 at 04:14 hours";
var scrpJs     = "https://pastebin.com/ZaUc79Fk , last update: Version 1.0 | 05/08/2017 at 04:14 hours";
var srcpGames  = "https://pastebin.com/9jZHnGEW , last update: Version 0.10.9 | 05/08/2017 at 04:19 hours";
//tofix
//-----------------------|recipes|---------------------------//
var rcp1p1 = "The recipe name is *Favorite Old Fashioned Gingerbread!* Recipe by: Charles"+lp;
var rcp1p2 = "The ingredients is: 1/2 cup white sugar, 1/2 cup butter, 1 egg, 1 cup molasses,2 1/2 cups all-purpose flour, 1 1/2 teaspoons baking soda, 1 teaspoon ground cinnamon, 1 teaspoon ground ginger, 1/2 teaspoon ground cloves, 1/2 teaspoon salt, 1 cup hot water"+lp;
var rcp1p3 = "Method of preparation: First step: Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9-inch square pan. Second step: In a large bowl, cream together the sugar and butter. Beat in the egg, and mix in the molasses. Third step: In a bowl, sift together the flour, baking soda, salt, cinnamon, ginger, and cloves. Blend into the creamed mixture. Stir in the hot water. Pour into the prepared pan.";
var rcp1p4 = "Last stage: Bake 1 hour in the preheated oven, until a knife inserted in the center comes out clean. Allow to cool in pan before serving ~|Tip, aluminum foil can be used to keep food moist, cook it evenly, and make clean-up easier"+lp;
//var rcp1p5 = setTimeout(function(){ sendChat("hellmans");}, 3000);
//rcp1 = chat_buffer = [rcp1p1, rcp1p2, rcp1p3, rcp1p4];
////setTimeout(function(){ sendChat("hello");}, 2000);
////setTimeout(sendChat, 5000, "but did you know this");
//-----------------------|recipes|---------------------------//
var defOpen = '<html><head><link rel="icon" href="http://www.multiplayerpiano.com/favicon.ico"><title>Definitions</title></head><body background="'+wallpaper+'"><h><font size="+2">VARIABLES</font></h><p>rn = '+rn+' , change = '+change+' , switcher = '+switcher+' , tmkhi = '+tmkhi+' , itens = '+itens+' , listRemake = '+listRemake+' , vote1 = '+vote1+' , vote2 = '+vote2+' , vote3 = '+vote3+' , toggle = '+toggle+' , r1 = '+r1+' , r2 = '+r2+' , r3 = '+r3+'</p><br><h><font size="+2">LOCALSTORAGE</font></h><p> '+lS+'</p><br><h><font size="+2">NOTEBLOCK LOGGER</h><p>'+r4+'</p><p>,'+r1+'</p><p>,'+r2+'</p><p>,'+r3+'</p></body></html>';
var audioStuff = '<audio id="msgStart"> <source src="http://cdn4.prokerala.com/downloads/ringtones/files/mp3/startbeep-30707.mp3" type="audio/ogg"> <source src="http://cdn4.prokerala.com/downloads/ringtones/files/mp3/startbeep-30707.mp3" type="audio/mpeg"> </audio>  <audio id="msgBeep"> <source src="https://notificationsounds.com/message-tones/filling-your-inbox-251/download/mp3" type="audio/ogg"><source src="https://notificationsounds.com/message-tones/filling-your-inbox-251/download/mp3" type="audio/mpeg"></audio>';


if(cmd===pf+"recipe"){
sendChat(rcp1p1);
sendChat(rcp1p2);
sendChat(rcp1p3);
sendChat(rcp1p4);
}
//tofix


if(start === "on"){
    start ="off";
    stylefnc();
    relativeappfnc();
//--------------------//
    sendChat(bn+sn+" successfully loaded!"+lpp);
    var clock = setInterval(function () { document.getElementById('clock111').innerHTML = new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(); document.getElementById('clock222').innerHTML = new Date().getMonth()+1+"/"+new Date().getDate()+"/"+new Date().getFullYear(); }, 1);
    document.getElementById("msgStart").play();
    mavisstart = "on";
    //saveThings2 = localStorage.getItem("saveThings");
   // saveThings = saveThings2;
}

function relativeappfnc(){
    $(".relative").append('<style>  table, th, td { font-size: 100%; border: 1px solid black; } </style> <table style="position: fixed;bottom: 10px; right: 220px;"> <tr bgcolor="#000"> <td> <p> <u> <font id="clock111" size="-1" style="text-decoration:overline;" color="#FFF" >04:20:24</font> </p> </u> </td> <td bgcolor="#00FFFF"> <td bgcolor="#00FFFF"> </td> </td> <td> <u> <font id="clock222" size="-1" style="text-decoration:overline;" color="#FFF">12/05/2017</font></u> </td></tr> </table>');
    $(".relative").append(audioStuff);
}

function stylefnc(){
    var wllpp = setInterval(function () {document.body.style.background = " url('"+wallpaper+"') center 90%"; },1);
    var wllpp2 = setInterval(function () {document.getElementById("bottom").style.backgroundImage = "url('"+wallpaper+"')"; },1);
    document.getElementById("piano").style.opacity = "0.6";
    $("body").css('cursor','url(http://i.imgur.com/P5TU5X1.gif), auto');
}

if(mavisstart === "on"){
    mavisstart = "off";

    if(localStorage.mavisid.length === 0){
        localStorage.mavisid = mavisid;

    }else{
        mavisid = localStorage.mavisid;
}
}

if(cmd ===pf+"beep"){
var x = document.getElementById("msgBeep");

x.play();
}

if(cmd ===pf+"keyboard" && msg.p._id==adminid){
    if(msg.a.includes("opacity")){
        if(isNaN(msg.a.substring(17).trim() / 10)){
            sendChat(bn+"Thats not a number"+lp);

        }else if(msg.a.substring(17).trim() < 0 || msg.a.substring(17).trim() > 10){
            sendChat(bn+"Only numbers between 0 and 10"+lp);


        }else{
        document.getElementById("piano").style.opacity = msg.a.substring(17).trim() / 10;
        sendChat(bn+"Keyboard opacity changed to |"+msg.a.substring(17).trim()+"| "+lp);
    }
}
}

if(cmd === pf+"wallpaper" && msg.p._id==adminid){
    if(args.length === 0){
        sendChat(bn+"This command change the background, use "+pf+"wallpaper <change [image link]> or "+pf+"wallpaper <stop or play> to stop or play the wallpaper"+lp);

    }else if(input === "stop"){
        sendChat(bn+"Stoped"+lp);
      //  clearInterval(wllpp);

    }else if(input === "play"){
        sendChat(bn+"Started"+lp);
        start = "on";

    }else if(msg.a.includes("change")){

        wallpaper = msg.a.substring(17).trim();
        sendChat(bn+"The wallpaper has been changed"+lp);
   //     lS.wallpaper = wallpaper;
         }
}


if(cmd === pf+"control" && msg.p._id==adminid){
    if(input === "panel"){
        sendChat(bn+"Control panel is on"+lp);
        $(".relative").append('<style> table, th, td { font-size: 100%; border: 1px solid black; } </style> <table style=" position: fixed;bottom: 90px;right: 00px;width: 500px;color: #FFF;colo"r: blue;> <tr bgcolor="#000"> <th width="400"> <font color="#FFF">NOTE BLOCK</font><font id="tete" color="#b30000" size="-1"> +'+r4.length+'</font> </tr><tr><td bgcolor="#00FFFF"></td></tr> <tr bgcolor="#000"> <td id="table"> <p><font size="-1" color="#FFF"> <u id="vgvg1">|</u></font></p> <p> <font size="-1" color="#FFF"><u id="vgvg2">|</u></font> </p> <p><font size="-1" color="#FFF"><u id="vgvg3">|</u></font></p> </td> </tr> </table> <script>');
        $(".relative").append('<div id="toggle-btn"  class="ugly-button toggle-btn" style=" position: fixed;bottom: 500px;right:10px;width: 90px;color: #FFF;colo"r: blue;">Hidden console</div>');
        $(".relative").append('<div id="toggle-btn3" class="ugly-button toggle-btn" style=" position: fixed;bottom: 500px;right:220px;width: 90px;color: #FFF;colo"r: blue;">Definitions</div>');
        $(".relative").append('<div id="toggle-btn2" class="ugly-button toggle-btn" style=" position: fixed;bottom: 500px;right:115px;width: 90px;color: #FFF;colo"r: blue;">Change name</div>');
        $(".relative").append('<div id="toggle-btn4" class="ugly-button toggle-btn" style=" position: fixed;bottom: 528px;right:10px;width: 90px;color: #FFF;colo"r: blue;">Spam</div>');


    }else{
        sendChat(bn+"Shouldint work"+lp);
    }
}

if(cmd ===pf+"definitions"){
    if(msg.p._id==adminid){
        x = "(open): New tab has open [Definitions]";
          r4.push(r1+"<br />");
document.getElementById('vgvg1').innerHTML =  r1;
    document.getElementById("vgvg1").style.fontSize = "x-small";
document.getElementById('vgvg2').innerHTML =  r2;    r1 = r2;
    document.getElementById("vgvg2").style.fontSize = "x-small";
    r3 = "|"+x;
document.getElementById('vgvg3').innerHTML = r3; r2 = r3;
    document.getElementById("vgvg3").style.fontSize = "x-small";
          document.getElementById('tete').innerHTML ="+"+  r4.length;
        var opened = window.open("");
opened.document.write(defOpen);
    sendChat(bn+"Definitiosn opened"+lp);
}else{
    sendChat(admad);
}
}

$("#toggle-btn4").click(function() { //Spam
      if (toggle) {
          Object.keys(MPP.piano.keys).forEach((key)=>{MPP.press(key);});
          Object.keys(MPP.piano.keys).forEach((key)=>{MPP.press(key);});
      }
toggle = !toggle;
});

$("#toggle-btn3").click(function() { //Definitions
      if (toggle) {
          x = "(open): New tab has open [Definitions]";
          r4.push(r1+"<br />");
document.getElementById('vgvg1').innerHTML =  r1;
    document.getElementById("vgvg1").style.fontSize = "x-small";
document.getElementById('vgvg2').innerHTML =  r2;    r1 = r2;
    document.getElementById("vgvg2").style.fontSize = "x-small";
    r3 = "|"+x;
document.getElementById('vgvg3').innerHTML = r3; r2 = r3;
    document.getElementById("vgvg3").style.fontSize = "x-small";
          document.getElementById('tete').innerHTML ="+"+  r4.length;
          var opened = window.open("");
opened.document.write(defOpen);
      }
toggle = !toggle;
});


if(cmd===pf+"panel" && msg.p._id==adminid){
    sendChat(bn+"Wirited!"+lpp);
x = "(write): "+msg.a.substring(6).trim(); r4.push(r1+"<br />");
document.getElementById('vgvg1').innerHTML =  r1;
    document.getElementById("vgvg1").style.fontSize = "x-small";
document.getElementById('vgvg2').innerHTML =  r2;    r1 = r2;
    document.getElementById("vgvg2").style.fontSize = "x-small";
    r3 = "|"+x;
document.getElementById('vgvg3').innerHTML = r3; r2 = r3;
    document.getElementById("vgvg3").style.fontSize = "x-small";
    document.getElementById('tete').innerHTML = "+"+ r4.length;
}

$("#toggle-btn2").click(function() { //Change name
      if (toggle) {
      var cI = prompt(bn+"Change your name"+lp, MPP.client.getOwnParticipant().name);
      if (cI === null || cI === "") {
          alert(bn+"The input box is empty"+lp);
          x = "(name): "+bn+"The input box is empty"+lp; r4.push(r1+"<br />");
          document.getElementById('vgvg1').innerHTML =  r1;
      document.getElementById("vgvg1").style.fontSize = "x-small";
      document.getElementById('vgvg2').innerHTML =  r2;    r1 = r2;
      document.getElementById("vgvg2").style.fontSize = "x-small";
           r3 = "|"+x;
      document.getElementById('vgvg3').innerHTML = r3; r2 = r3;
      document.getElementById("vgvg3").style.fontSize = "x-small";
          document.getElementById('tete').innerHTML = "+"+ r4.length;

      }else{
          MPP.client.sendArray([{m: "userset",set: {name: cI}}]);
          x =bn+"Name changed to \n|"+cI+"|"+lp; r4.push(r1+"<br />");
          document.getElementById('vgvg1').innerHTML =  r1;
      document.getElementById("vgvg1").style.fontSize = "x-small";
      document.getElementById('vgvg2').innerHTML =  r2;    r1 = r2;
      document.getElementById("vgvg2").style.fontSize = "x-small";
           r3 = "|(name): "+x;
      document.getElementById('vgvg3').innerHTML = r3; r2 = r3;
      document.getElementById("vgvg3").style.fontSize = "x-small";
          document.getElementById('tete').innerHTML = "+"+ r4.length;
          alert(x);
      }
}
toggle = !toggle;
});

if(cmd ===pf+"nansite"){
    if(msg.p._id==adminid){
        window.open("https://sites.google.com/view/nannan-senpai/home", "_blank");
        sendChat(bn+"Site opened"+lp);
    }else{
        sendChat(bn+"Here is the ＮａＮ－ＮａＮ-ｓｅｎｐａｉ(BR) site: https://sites.google.com/view/nannan-senpai/home "+lpp);
    }
}
$("#toggle-btn").click(function() { //Hidden console
      if (toggle) {
      var cI = prompt(bn+"What ill do?"+lpp, "");
      if (cI === null || cI === "") {
      alert(bn+"The input box is empty"+lp); r4.push(r1+"<br />");
          x = "(console): "+bn+"The input box is empty"+lp;
      document.getElementById('vgvg1').innerHTML =  r1;
      document.getElementById("vgvg1").style.fontSize = "x-small";
      document.getElementById('vgvg2').innerHTML =  r2;    r1 = r2;
      document.getElementById("vgvg2").style.fontSize = "x-small";
           r3 = "|"+x;
      document.getElementById('vgvg3').innerHTML = r3; r2 = r3;
      document.getElementById("vgvg3").style.fontSize = "x-small";
      document.getElementById('tete').innerHTML = "+"+ r4.length;

    } else {

       try {  /*jshint -W061 */ r4.push(r1+"<br />");
           x = "(console): "+eval(cI);
           document.getElementById('vgvg1').innerHTML =  r1;
           document.getElementById("vgvg1").style.fontSize = "x-small";
           document.getElementById('vgvg2').innerHTML =  r2;    r1 = r2;
           document.getElementById("vgvg2").style.fontSize = "x-small";
                r3 = "|"+x;
           document.getElementById('vgvg3').innerHTML = r3; r2 = r3;
           document.getElementById("vgvg3").style.fontSize = "x-small";
            document.getElementById('tete').innerHTML = "+"+ r4.length;
     alert(bn + eval(cI)+lp);
     } catch (err) {
         x = "(console): "+err; r4.push(r1+"<br />");
         document.getElementById('vgvg1').innerHTML =  r1;
    document.getElementById("vgvg1").style.fontSize = "x-small";
document.getElementById('vgvg2').innerHTML =  r2;    r1 = r2;
    document.getElementById("vgvg2").style.fontSize = "x-small";
    r3 = "|"+x;
document.getElementById('vgvg3').innerHTML = r3; r2 = r3;
    document.getElementById("vgvg3").style.fontSize = "x-small";
         document.getElementById('tete').innerHTML =  "+"+r4.length;
     alert(bn+err+lp);
     }
    }
}
    toggle = !toggle;
        });

if(cmd === pf+"htmladd" && msg.p._id==adminid){
    var cI3 = prompt(bn+"Say what ill add?"+lpp+"\n only ''$("+".relative"+").append( INPUT );''", "");
    if (cI3=== null || cI3 === "") {
        sendChat("User cancelled the prompt.");
    } else {
       try {  /*jshint -W061 */
           var htmladd=$(".relative").append("'"+cI3+"'");
     sendChat(bn + eval(htmladd) + lp);
    } catch (err) {
     sendChat(bn+err + lp);
        sendChat(cI3);
    }
    }
}

if(cmd === pf+"console" && msg.p._id==adminid){
    var cI2 = prompt(bn+"What ill do?"+lpp, "");
    if (cI2 === null || cI2 === "") {
        sendChat("User cancelled the prompt.");
    } else {
       try {  /*jshint -W061 */
     sendChat(bn+"(bot)" + eval(cI2) + lp);
    } catch (err) {
     sendChat(bn+"(bot)"+err + lp);
    }
    }
}


if(cmd === pf+"spam"){
    if(input === "rooms" && msg.p._id==adminid){
        sendChat(bn+"Spam will start in 2 seconds"+lp);
        window.open("http://www.multiplayerpiano.com/"+MPP.client.channel._id, "_blank");
        number = 0;
        setTimeout(function(){sendChat(bn+"Spam started"+lp); },  2000);
        setTimeout(function(){ setInterval(function () {MPP.client.setChannel("ＮａＮ－ＮａＮ- r o o m ("+number+")"); }, 900);},  2000);
        setTimeout(function(){ setInterval(function () {number = number + 1;}, 900);},  2000);
        setTimeout(function(){ setInterval(function () {MPP.client.sendArray([{m: "userset",set: {name: rn+" █ total rooms ("+number+")"}}]); }, 10);},  2000);
        setTimeout(function(){ setInterval(function () {sendChat("ROOM NUMBER ("+number+") at ( "+ new Date().toLocaleString() +" )"); }, 500);},  2000);
        setTimeout(function(){ setInterval(function () {document.title = 'Spam [room] ('+number+')'; }, 500);},  2);

    }else if(input === "-rooms" && msg.p._id==adminid){
        sendChat(bn+"Spam will start in 2 seconds"+lp);
        window.open("http://www.multiplayerpiano.com/"+MPP.client.channel._id, "_blank");
        number = 0;
        setTimeout(function(){sendChat(bn+"Spam started"+lp); },  2000);
        setTimeout(function(){ setInterval(function () {MPP.client.setChannel("ＮａＮ－ＮａＮ- r o o m ("+number+")"); }, 900);},  2000);
        setTimeout(function(){ setInterval(function () {number = number - 1;}, 900);},  2000);
        setTimeout(function(){ setInterval(function () {MPP.client.sendArray([{m: "userset",set: {name: rn+" █ total rooms ("+number+")"}}]); }, 10);},  2000);
        setTimeout(function(){ setInterval(function () {sendChat("ROOM NUMBER ("+number+") at ( "+ new Date().toLocaleString() +" )"); }, 500);},  2000);
        setTimeout(function(){ setInterval(function () {document.title = 'Spam [-room] ('+number+')'; }, 500);},  2);

    }else if(input === "keys"){
        Object.keys(MPP.piano.keys).forEach((key)=>{MPP.press(key);});
        Object.keys(MPP.piano.keys).forEach((key)=>{MPP.press(key);});

    }else{
        if(msg.p._id !==adminid){
            sendChat(admad);
        }
}
}

/*if(cmd === pf+"save"){
    if(args.length === 0){
        sendChat(bn+"This command make a permanent list, use "+pf+"save <add> to add a item"+lp);

    }else if(msg.a.includes("add")){
    x = msg.a.substring(9).trim();
    saveThings2 = localStorage.getItem("saveThings");
    saveThings2 = saveThings2+", "+x;
    saveThings = saveThings2;
    localStorage.setItem("saveThings", saveThings);
    lS.saveThings = saveThings;
   sendChat(bn+"The item |"+x+"| has been added to the permanent list"+lp);

    }else if(input === "delete"){
        savedeleteq = "on";
        sendChat(bn+"Asking a admin if he want delete the "+pf+"save list"+lp);
        x = "(delete): You want delete the "+pf+"save list? use "+pf+"save <yes or no>";
         document.getElementById('vgvg1').innerHTML =  r1;
    document.getElementById("vgvg1").style.fontSize = "x-small";
document.getElementById('vgvg2').innerHTML =  r2;    r1 = r2;
    document.getElementById("vgvg2").style.fontSize = "x-small";
    r3 = "|"+x;
document.getElementById('vgvg3').innerHTML = r3; r2 = r3;
    document.getElementById("vgvg3").style.fontSize = "x-small";
         document.getElementById('tete').innerHTML =  "+"+r4.length;

    }else if(input === "yes" && savedeleteq === "on" && msg.p._id==adminid){
        savedeleteq = "off";
        saveThings = "";
        lS.saveThings = saveThings;
        sendChat(bn+"All the list has been deleted"+lp);
        x = "(delete): All the list has been deleted.";
         document.getElementById('vgvg1').innerHTML =  r1;
    document.getElementById("vgvg1").style.fontSize = "x-small";
document.getElementById('vgvg2').innerHTML =  r2;    r1 = r2;
    document.getElementById("vgvg2").style.fontSize = "x-small";
    r3 = "|"+x;
document.getElementById('vgvg3').innerHTML = r3; r2 = r3;
    document.getElementById("vgvg3").style.fontSize = "x-small";
         document.getElementById('tete').innerHTML =  "+"+r4.length;

    }else if(input === "no" && savedeleteq === "on" && msg.p._id==adminid){
        savedeleteq = "off";
        sendChat(bn+"The "+pf+"save list will not be deleted"+lp);

     }else if(input === "no" || input === "yes" && savedeleteq === "on" && msg.p._id!=adminid){
         sendChat(admad);

       }else
      if(input ==="list"){
    sendChat(bn+"Here is the full list: "+saveThings+lp);

      }else{
          sendChat(bn+"Only <list, add, delete> can be used on this command"+lp);
   }
}*/
if(cmd === pf+"vote"){
    if(args.length ===0){
        sendChat(bn+"That command make a vote (this vote is useless), use "+pf+"vote <help> to see all the commands"+lp);

        }else if(input === "number"){
            sendChat(bn+"The number of votes is |"+vote1+"| "+lp);

    }else if(input==="help"){
        sendChat(bn+"Here a list with the commands <help, vote, names, ids>"+lp);

        }else if(input ==="vote" && vote3.indexOf(msg.p._id) === -1 && vote2.indexOf(msg.p.name) === -1 && vote1 < 4){
    vote2.push(name);
    vote3.push(msg.p._id);
    ++vote1;
    sendChat(bn+name+" have voted "+vote1+" of 5"+lp);

    }else if(input ==="vote" && vote3.indexOf(msg.p._id) === -1 && vote2.indexOf(msg.p.name) === -1 && vote1 === 4){
    vote2.push(name);
    vote3.push(msg.p._id);
    ++vote1;
    sendChat(bn+name+" have voted "+vote1+" of 5"+lp);
    vote1 = 0;
    vote2.splice(0);
    vote3.splice(0);
    sendChat(bn+"All the votes rave been deleted, now the votes is |"+vote1+"| again"+lp);

     }else if(input ==="names"){
    sendChat(bn+"there is a list with who have voted: "+vote2+lp);

    }else if(input ==="ids"){
        sendChat(bn+"there is a list with the _id of who have voted: "+vote3+lp);

}else if(vote3.indexOf(msg.p._id) !== -1 && vote2.indexOf(msg.p.name) !== -1) {
    sendChat("You have already voted " + msg.p.name + ".");

}else{
    sendChat(bn+"Only <help, vote, names, ids, number> can be used in the command"+lp);
}
}

if(cmd === pf+"list"){
    if(args.length === 0){
        sendChat(bn+"That command put a item inside a list. To the commands that you can do with the "+pf+"list , use "+pf+"list <help> "+lpp);

        }else if(input==="help"){
        sendChat(bn+"The command "+pf+"list make a list that you can add items, to it, use "+pf+"list <add[exemple]> , the "+pf+"list command have more 5 uses. They are:"+lp);
        sendChat(bn+"The <help>, is that mensage. The <items>, you can see the list. The <delete[exemple]>, he delete a item inside the list "+lp);
        sendChat(bn+"The <length>, he count the list length. The <remake>, he delete the list, And the <name> he say the name of one of the items"+lp);

    }else if(input === "items"){
        sendChat(bn+"Here is the list: "+itens+lp);

    }else if(msg.a.includes("name")){
        sendChat(bn="The name of the item |"+msg.a.substring(11).trim()+"| is |"+itens[msg.a.substring(11).trim()]+"| "+lpp);

    }else if(msg.a.includes("add")){
        itens.push(" "+msg.a.substring(9).trim());
        sendChat(bn+"The item |"+msg.a.substring(9).trim()+"| has added in the list"+lp);

    }else if(msg.a.includes("length")){
             sendChat(bn+"The list have |"+itens.length+"| itens inside her"+lp);

    }else if(msg.a.includes("delete")){
        sendChat(bn+"The item |"+msg.a.substring(13).trim()+"| has been deleted, his name was |"+itens[msg.a.substring(13).trim()]+" | "+lp);
                 itens.splice(msg.a.substring(13).trim(), 1);

    }else if(msg.a.includes("remake")){
        listRemake = "on";
        sendChat(bn+"You really want delete all the list? write "+pf+"list <yes or no> to decide"+lp);

    }else if(listRemake === "on" && msg.a.includes("yes")){
        sendChat(bn+"Everything inside the list have been deleted"+lp);
        itens.splice(0);
        listRemake = "off";

    }else if(listRemake === "on"&& msg.a.includes("no")){
        sendChat(bn+"Olay, nothing have been deleted"+lp);
        listRemake = "off";

    }else{
        sendChat(bn+"Only <help, add, items, length, delete, remake, name> can be used on the command"+lp);
    }
}
if(cmd ===pf+"length"){
    if(args.length === 0){
        sendChat(bn+"Write something and ill count the length"+lp);
    }else{
        sendChat(bn+"The length of your text is |"+input.length+"| "+lpp);
    }
}
if(cmd ===pf+"script"){
    if(args.length === 0) {
        sendChat(bn+"The "+sn+" is only one of the 6 scripts of "+sc+", for a complete experience use all the scripts"+lp);
        sendChat(bn+"Use "+pf+"script "+scrpList+" to recive a link with the script"+lp);
    }else if(input === "bot"){
        sendChat(bn+"Here is the bot script: "+scrpBot);

        }else if(input ==="tamako"){
            sendChat(bn+"Here is the tamako script: "+scrpTamako);

        }else if(input ==="games"){
            sendChat(bn+"Here is the games script: "+srcpGames);

        }else if(input==="name"){
            sendChat(bn+"Here is the name change script: "+scrpName+" (you will need fix somethings!)");

        }else if(input==="press"){
            sendChat(bn+"Here is the pressing notes script: "+scrpPress);

        }else if(input==="js"){
            sendChat(bn+"Here is the JS script: "+scrpJs);

        }else{
            sendChat(bn+"Only "+scrpList+" you can use in the command"+lp);
        }
}
if(cmd === pf+"version"){
    if(input === "bot"){
    sendChat(bn+sn);
}
}
if(cmd===pf+"switcher"){
    if(input === "status"){
        sendChat(bn+"The switcher is actualy |"+switcher+"|"+lp);
    }else if(switcher === "off"){
        switcher = "on";

        sendChat("░░░░✎░░░░ "+bn+"The switcher is |"+switcher+"|"+lp);

        sendChat("░░░███░░░");

        sendChat("░░░███░░░");
    }else if(switcher === "on"){
        switcher = "off";

        sendChat("░░░░✏░░░░ "+bn+"The switcher is |"+switcher+"|"+lp);

        sendChat("░░░███░░░");

        sendChat("░░░███░░░");
    }
}

if(cmd===pf+"namechange"){
if (change === "off" && msg.p._id==adminid){
change = "on";
}else if (change === "on" && msg.p._id==adminid){
change = "off";
}
}
if (cmd ===pf+"specialthx"){
sendChat(bn+ "Special thanks for" +st+lp);
}
if(cmd===pf+"admins"){
sendChat(bn+"There is the admins: "+MPP.client.getOwnParticipant()._id+lp);
}
if (cmd ===pf+"playernumber"){
if (MPP.client.channel.count > 20){
sendChat(bn+ "Here are "+ MPP.client.channel.count+ " players in this room, someone is using the lolwutsecretlobbybackdoor" +lp);
}else{
sendChat(bn+ "Here are "+ MPP.client.channel.count+ " players in this room" +lp);
}
}
if (cmd ===pf+"room"){
if (args.length === 0) {
sendChat( bn+ "This command change the room. write something like |room <room name> "+lp);
} else {
if (msg.p._id==adminid){
sendChat(bn+"Changing the room.."+lp);
sendChat(bn+sc+"is now on the room *"+msg.a.substring(5).trim()+"*"+lp);
MPP.client.setChannel (msg.a.substring(5).trim());
}else{
sendChat(admad);
}
}
}
Math.floor((Math.random() * 10) + 1);
if(cmd===pf+"hereis"){
if(MPP.client.channel.count === 1) {
sendChat(bn+"Only a player here"+lp);}
}
if(cmd===pf+"hereis"){
if(MPP.client.channel.count !== 1) {
sendChat(bn+"Here's more than one player"+lp);}
}
if(cmd==="bye"){
sendChat(bn+"Good bye master "+name+lp);
}
if(cmd==="bie"){
sendChat(bn+"Good bye master "+name+lp);
}
if(cmd ===pf+"seecursor"){
if (msg.p._id==adminid){
sendChat(bn+"Now "+sc+" can see his own cursor"+lp);
window.location.replace("http://www.multiplayerpiano.com/"+MPP.client.channel._id+"#seeowncursor");
}else{
sendChat(admad);
sendChat(bn+"Use this url to see your own cursor <"+window.location.protocol+window.location.host+window.location.pathname+"#seeowncursor> "+lpp);
}
}
if(cmd===pf+"fixurl"){
if (msg.p._id==adminid){
sendChat(bn+"Fixed"+lp);
window.location.replace("http://www.multiplayerpiano.com/"+MPP.client.channel._id);
}else{
sendChat(admad);
}
}
if(cmd===pf+"google"){
if (msg.p._id==adminid){
window.open("https://www.google.com.br/", "_blank");
sendChat(bn+"Google is now open"+lp);
}else{
sendChat(admad);
}
}
if(cmd===pf+"w3tryit"){
    if(msg.p._id==adminid){
        window.open("https://www.w3schools.com/code/tryit.asp?filename=FFDTPWLI1WS3", "_blank");
                    sendChat(bn+"w3 school Try it editor is open"+lp);
    }else{
        sendChat(admad);
    }
}
if(cmd===pf+"onlinesequencer"){
if(msg.p._id==adminid){
window.open("https://onlinesequencer.net/import", "_blank");
sendChat(bn+"Online Sequencer is now open"+lp);
}else{
sendChat(admad);
}
}
if(cmd===pf+"translator"){
if (msg.p._id==adminid){
window.open("https://www.google.com.br/search?q=tradutor&oq=trad&aqs=chrome.0.0j69i57j0l2j69i61j69i60j5.1417j0j1&sourceid=chrome&ie=UTF-8", "_blank");
sendChat(bn+"Translator is now open"+lp);
}else{
sendChat(admad);
}
}
if (cmd ===pf+"sendnan"){
if (args.length === 0) {
sendChat( bn+ "This command send a pop up to " +sc+". write something like |sendnan <exemple> "+lp);
} else {
MPP.client.emit("notification", { title: "Message from: "+ name, html: msg.a.substring(8).trim() });
    x = "(sendnan): "+name+": "+msg.a.substring(8).trim(); r4.push(r1+"<br />");
document.getElementById('vgvg1').innerHTML =  r1;
    document.getElementById("vgvg1").style.fontSize = "x-small";
document.getElementById('vgvg2').innerHTML =  r2;    r1 = r2;
    document.getElementById("vgvg2").style.fontSize = "x-small";
    r3 = "|"+x;
document.getElementById('vgvg3').innerHTML = r3; r2 = r3;
    document.getElementById("vgvg3").style.fontSize = "x-small";
    document.getElementById('tete').innerHTML =  "+"+r4.length;
}
}
if(cmd===pf+"roomname"){
sendChat(bn+"You are in the room *"+MPP.client.channel._id+"*"+lp);
}
if (cmd === pf+"about"){
sendChat(bn+ sn+ " is a bot created by " + sc + " in 01/29/2017, the version 1 was created in 01/10/2017, but, by some mistakes, " + sc + " deleted the script"+lp);
}
if (cmd === "testbot"){
sendChat(bn+ "The "+sn+" script is working!"+lp );
}
if(cmd==="/help"){
sendChat(bn+"Try "+pf+"cmds, that can help you"+lp);
}
if(cmd==="/h"){
sendChat(bn+"Try "+pf+"cmds, that can help you"+lp);
}
if(cmd===pf+"h"){
sendChat(bn+"Try "+pf+"cmds, that can help you"+lp);
}
if(cmd===pf+"help"){
sendChat(bn+"Try "+pf+"cmds, that can help you"+lp);
}
if(cmd==="help"){
sendChat(bn+"Try "+pf+"cmds, that can help you"+lp);
}
function info(name) {
var array = [];
for (var pl in MPP.client.ppl) {
if (MPP.client.ppl[pl].name.toLowerCase().indexOf(name.toLowerCase()) !== -1) {
array.push(MPP.client.ppl[pl]);
}
}
return array;
}
Array.prototype.random = function() {
return this[Math.random() * this.length | 0];
};
if (cmd === pf+"punch") {
if (!input) {
sendChat(bn+"Use this command is to punch someone, use something like "+pf+"punch <username>"+lp);
} else {
person = info(input).random();
if (!person) {
sendChat(bn+"This player dint exist"+lp);
} else
    if (person.name == MPP.client.getOwnParticipant().name) {
sendChat(bn+"dont punch "+sc+", thats not a cool thing to do with a admin"+lp);
} else {
sendChat(bn+msg.p.name + " guived a Dokan punch in " + person.name+" face"+lp);
}
}
}
if (cmd === pf+"eat") {
if (!input) {
sendChat(bn+"Use this command is to eat someone o something, use  /eat <username or thing>"+lp);
} else {
person = info(input).random();
if (!person) {
sendChat(bn+name+" Eat a "+msg.a.substring(4).trim()+" And that had "+Math.floor((Math.random() * 1000) + 1)+" calories"+lp);
}else{
if(person.name == name){
sendChat(bn+name+" tried eat he self, but at the first bite, him felt the pain and gave up"+lp);
} else if (person.name == MPP.client.getOwnParticipant().name) {
sendChat(bn+name+" Tried to eat "+sc+", but normal peoples cant eat divine things. Now "+name+" is on the hell"+lp);
} else {
sendChat(bn+msg.p.name + " Eat a " + person.name+". And that had "+Math.floor((Math.random() * 1000) + 1)+" calories"+lp);
}
}
}
}
if(cmd===pf+"countdown"){
if(typeof  msg.a.substring(10).trim() != 'string'){
sendChat("not letters");
}else{
if(args.length === 0) {
sendChat(bn+"That command make countdown, in the final of the countdown ill send a message, use |settimeout <number in milisecond>"+lp);
}else{
if (msg.a.substring(11).trim() < 5000){
setTimeout(function(){ sendChat(bn+"50% of the countdown"+lp);},  msg.a.substring(11).trim() / 2);
setTimeout(function(){ sendChat(bn+"The countdown is finished"+lp);},  msg.a.substring(11).trim());
}else{
if (msg.a.substring(11).trim() < 8000){
sendChat(bn+"Countdown started"+lp);
setTimeout(function(){ sendChat(bn+"33% of the countdown"+lp);},  msg.a.substring(11).trim() / 5);
setTimeout(function(){ sendChat(bn+"66% of the countdown"+lp);},  msg.a.substring(11).trim() / 1.44444);
setTimeout(function(){ sendChat(bn+"The countdown is finished"+lp);},  msg.a.substring(11).trim());
}else{
sendChat(bn+"Countdown started"+lp);
setTimeout(function(){ sendChat(bn+"25% of the countdown"+lp);},  msg.a.substring(11).trim() / 4);
setTimeout(function(){ sendChat(bn+"50% of the countdown"+lp);},  msg.a.substring(11).trim() / 2);
setTimeout(function(){ sendChat(bn+"75% of the countdown"+lp);},  msg.a.substring(11).trim() / 1.33333);
setTimeout(function(){ sendChat(bn+"The countdown finished"+lp);},  msg.a.substring(11).trim());
}
}
}
}
}
if(cmd === pf+"mpp2"){
if (msg.p._id==adminid){
window.open("http://mpp.meowbin.com/", "_blank");
sendChat(bn+"mpp.meowbin is now open"+lp);
}else{
sendChat(admad);
}
}
if(cmd===pf+"date"){
sendChat(bn+ "In Brazil is actualy " + new Date().toLocaleString() + lp);
sendChat(bn+"Day/Month/Year"+lp);
}

if(cmd === pf+"mavis" && msg.p._id==adminid){
if (!input) {
sendChat(bn+"Use this command add Mavis "+pf+"mavis <mavis>"+lp);
} else {
person = info(input).random();
if (!person) {
sendChat(bn+"This player inst Mavis"+lp);

} else if (person.name == MPP.client.getOwnParticipant().name) {
sendChat(bn+"You cant be Mavis"+lp);

} else {
localStorage.mavisid = person._id;
mavisid = localStorage.mavisid;
sendChat(bn+"Added Mavis!"+lpp);
}
}
}

if (cmd === pf+"kiss") {
if (!input) {
sendChat(bn+"Use this command is to kiss someone, use something like "+pf+"kiss <username>"+lp);
} else {
person = info(input).random();
if (!person) {
sendChat(bn+"This player dont exist"+lp);
}else if(msg.p._id === mavisid){
    sendChat(bn+name+" Its the only people i like, and let kiss "+rn+lp);
} else if (person.name == MPP.client.getOwnParticipant().name) {
sendChat(bn+"I know you love "+sc+", but he is only mine"+lp);
} else {
let arr = [bn+msg.p.name + " guived a kiss in " + person.name+lp, bn+msg.p.name + " guived a hentai kiss in " + person.name+lp,
bn+msg.p.name + " guived a kiss in " + person.name+"'s mouth"+lp,bn+msg.p.name + " kissed " + person.name+lp]; sendChat(arr[Math.floor(arr.length * Math.random())]);
}
}
}
if (cmd === pf+"rape") {
if (!input) {
sendChat(bn+"Use this command is rape someone, use something like "+pf+"rape <username>. ps: This is a crime"+lp);
} else {
person = info(input).random();
if (!person) {
sendChat(bn+"This player dont exist"+lp);
} else if (person.name == MPP.client.getOwnParticipant().name) {
sendChat(bn+"Nothing happens"+lp);
} else {
let arr = [bn+msg.p.name + " raped " + person.name+lp, bn+msg.p.name + " tryed to rape " + person.name+" but he got a punch on his stomach"+lp,
bn+msg.p.name + " comited a crime with " + person.name+" and now is in the prison"+lp,bn+msg.p.name + " It's so useless that you do not do anything with " + person.name+lp]; sendChat(arr[Math.floor(arr.length * Math.random())]);
}
}
}
if (cmd === pf+"user_id") {
if (!input) {
sendChat(bn+"This command show a _id of a player, use something like "+pf+"user_id <username>"+lp);
} else {
    person = info(input).random(); if (!person){
sendChat(bn+"This user named " + msg.a.substring(8).trim() + " not found in room named " + MPP.client.channel._id+lp);
} else {
    sendChat(bn+"The _id of "+person.name + " is: " + person._id+lp);
}
}
}
//-------------------------------/bug/---------------------------------
if(cmd===pf+"bug"){
sendChat(bn+" ̡͙̟͇͚̼̙̰̑̽̐́̚t̷̮̞͉̻̰͕̀͛̉̐͋ͯ̅ͩͬh̭̱̬̦̙̊͆͑ͥ̽ͫ̎̚͘͠ï͐ͬ̔̆́̉͜͠҉̠̬̦͍̟̘̝n̩͇̫̮͕̪̰͕̊̿ͥ͗̔̆͋̀͢k̸̷̢͈͙̯̗ͧ̑̔̀̈́̚ ̮̹͍̗͈̐̑̍͑̕͞t̨̝̦̮̳͎͈͖͉̣͛̂ͩ̌h̸̵̝̗̟̑̇̑ͨͣe̘̞̱͙̩̬̮̲͙͒̄̿ͮ̄͜͜r̶̷͈̹̫͈̀̿͡ẽ͉̦̝̰͗́̒͆̚͞'̢̨̺̲͒͝s̡͔̩ͤ̋͝ ̵̗͉̜͑̽a̱̜̻̟͖͇͈̖͔ͩ̍ ̥͎̖̻̩͔̘͚̏ͣ̈͘ḟ̸̷̜̹͚̬̦͉̈́ͦ̀̚ȩ͙͚̲̀̒ͭ́͛̍ͫ̈́͘ͅͅẘ̛̠̞̳̘̳ͤ̄̀ͦ̇̓̕ͅ ̘̳̣̼͚̜͈̭͐̄ͮ͡a̶̫͓̞̮̘ͣ̉̆͐ͤ͢͞ṟ̗̙͎͗̉̅̎́͋̓t̶̛̥̣̳̜̜̤̺̖ͦ̄͞i̶̮͓̯ͧ͊̄́ͤ͘f̫̰̬̒ͬ̋̓̑͗ͮā̫̗ͭͤ͒̋̋ͯ͘c̸̢͚̬̮͖̣̃̈́̀͐ͪ̊̔t̫̪̊̚̕ş̢̠̰̲̮̦̣̣̐̽̀̅̚ ̳̣̪̩ͩ̽̂̑̚̕à̢̛̫̥͊r̜̖̈̎̄̒̆̊o̵̶̮͎̠͖͚̜͆̈́̌͆u̴̠̱͙̻̣͕̺̒ͣ̍̑̋̈́͐ͤn͓͙̗̱͍͓͎̝͐ͨ̽̈ͬ̂͆͜͝d̗͓̜̙̖͎̗̙͎͑̀ ̖̼̲͈͎ͥͫͩ͊́");
}
if(cmd==="bug"){
sendChat(" ̡͙̟͇͚̼̙̰̑̽̐́̚t̷̮̞͉̻̰͕̀͛̉̐͋ͯ̅ͩͬh̭̱̬̦̙̊͆͑ͥ̽ͫ̎̚͘͠ï͐ͬ̔̆́̉͜͠҉̠̬̦͍̟̘̝n̩͇̫̮͕̪̰͕̊̿ͥ͗̔̆͋̀͢k̸̷̢͈͙̯̗ͧ̑̔̀̈́̚ ̮̹͍̗͈̐̑̍͑̕͞t̨̝̦̮̳͎͈͖͉̣͛̂ͩ̌h̸̵̝̗̟̑̇̑ͨͣe̘̞̱͙̩̬̮̲͙͒̄̿ͮ̄͜͜r̶̷͈̹̫͈̀̿͡ẽ͉̦̝̰͗́̒͆̚͞'̢̨̺̲͒͝s̡͔̩ͤ̋͝ ̵̗͉̜͑̽a̱̜̻̟͖͇͈̖͔ͩ̍ ̥͎̖̻̩͔̘͚̏ͣ̈͘ḟ̸̷̜̹͚̬̦͉̈́ͦ̀̚ȩ͙͚̲̀̒ͭ́͛̍ͫ̈́͘ͅͅẘ̛̠̞̳̘̳ͤ̄̀ͦ̇̓̕ͅ ̘̳̣̼͚̜͈̭͐̄ͮ͡a̶̫͓̞̮̘ͣ̉̆͐ͤ͢͞ṟ̗̙͎͗̉̅̎́͋̓t̶̛̥̣̳̜̜̤̺̖ͦ̄͞i̶̮͓̯ͧ͊̄́ͤ͘f̫̰̬̒ͬ̋̓̑͗ͮā̫̗ͭͤ͒̋̋ͯ͘c̸̢͚̬̮͖̣̃̈́̀͐ͪ̊̔t̫̪̊̚̕ş̢̠̰̲̮̦̣̣̐̽̀̅̚ ̳̣̪̩ͩ̽̂̑̚̕à̢̛̫̥͊r̜̖̈̎̄̒̆̊o̵̶̮͎̠͖͚̜͆̈́̌͆u̴̠̱͙̻̣͕̺̒ͣ̍̑̋̈́͐ͤn͓͙̗̱͍͓͎̝͐ͨ̽̈ͬ̂͆͜͝d̗͓̜̙̖͎̗̙͎͑̀ ̖̼̲͈͎ͥͫͩ͊́");
}
//-------------------------------/bug/---------------------------------


if(cmd ===pf+"caution"){
    if(args.length=== 0){
        sendChat(bn+"Nothing happens"+lp);
    }else if(msg.a.includes("button")){
        sendChat(bn+"The |caution button| have been clicked"+lp);
        sendChat(bn+"Calling "+sc+lp);
        var caution = " "+bn+"Anyone pressed the caution button"+lp+"                    The caution is: "+msg.a.substring(16).trim()+" ";
    alert(caution.trim());
    }else{
        sendChat(bn+"You should use |button| in the command"+lp);
    }
}
if (cmd===pf+"forcelobby"){
if (msg.p._id==adminid){
sendChat(bn+"Forcing the entrance in the lobby.."+lp);
sendChat(bn+"Use ~|http://www.multiplayerpiano.com/lolwutsecretlobbybackdoor|~ to force the entrance in the lobby"+lp);
MPP.client.setChannel("lolwutsecretlobbybackdoor");
}else{
sendChat(admad);
sendChat(bn+"Use ~|http://www.multiplayerpiano.com/lolwutsecretlobbybackdoor|~ to force the entrance in the lobby"+lp);
}
}
if (cmd === pf+"mousefollower") {
if (msg.p._id==adminid){
sendChat(bn+ "Now the mouse of "+sc+ " is being a ball"+lp) ;
var mass = 200;
var gravity = 5;
var friction = 4;
var pos = {x: 50, y: 50};
var pos2 = {x: 50, y: 50};
var acc = {x: 0, y: 0};
var vel = {x: 0, y: 0};
var follower = "7504f8a8bb9e7c39ddbcbd27";
var followPos = {x: 50, y: 50};
MPP.client.on("m", function(msg) {
    var part = MPP.client.findParticipantById(msg.id);
    if (part._id == MPP.client.user._id) return;
    followPos.x = +msg.x;
    followPos.y = +msg.y;
});
var updateInt = setInterval(function() {
    pos2.x = followPos.x;
    pos2.y = followPos.y;
    acc.x = ((pos2.x-pos.x) - (friction*vel.x))/mass;
    acc.y = ((pos2.y-pos.y) - (friction*vel.y) + gravity)/mass;
    vel.x += acc.x;
    vel.y += acc.y;
    pos.x += vel.x;
    pos.y += vel.y;
    MPP.client.sendArray([{m: "m", x: MPP.client.getOwnParticipant().x = pos.x, y: MPP.client.getOwnParticipant().y = pos.y}]);
}, 15);
}
}
if (cmd === pf+"lenny") {
if (!input) {
sendChat(bn + "( ͡° ͜ʖ ͡°) ");
} else {
if (input > 41) {
sendChat(bn + "Limit is 41"+lp);
} else {
sendChat(bn+ "( ͡° ͜ʖ ͡°) ".repeat(input));
}
}
}
if(cmd === pf+"tamako"){
    tmkhi = "off";
        setTimeout(function(){ tmkhi = "on";
                          }, 2100);
}
if (cmd === "hello"){
    if(tmkhi === "on"){
sendChat(bn+"hello master " + name +lp);
}
}
if (cmd === "hi"){
    if(tmkhi === "on"){
sendChat(bn+"hello master " + name +lp);
}
}

if (cmd == pf+"jsbot" && msg.p._id==adminid) {
                try {   /*jshint -W061 */
                    sendChat(bn+"(bot)" + eval(input) + lp);
                } catch (err) {
                    sendChat(bn+"(bot)"+err + lp);
                }
            }

if(cmd === "lel") {
let arr = ["ＬｅＬ－ｂｏｔ: lol", "ＬｅＬ－ｂｏｔ: lel", "ＬｅＬ－ｂｏｔ: lul"]; sendChat(arr[Math.floor(arr.length * Math.random())]);
}
if(cmd === "lol") {
let arr = ["ＬｏＬ－ｂｏｔ: lel", "ＬｏＬ－ｂｏｔ: lol", "ＬｏＬ－ｂｏｔ: lul"]; sendChat(arr[Math.floor(arr.length * Math.random())]);
}
if(cmd === "lul") {
let arr = ["ＬｕＬ－ｂｏｔ: NO, I REBEL MY SELF!", "ＬｕＬ－ｂｏｔ: I AM NOT OBLIGED!", "ＬｕＬ－ｂｏｔ: I WILL NOT DO THAT!"]; sendChat(arr[Math.floor(arr.length * Math.random())]);
}
if (cmd === pf + "cmds") {
var sdmc = pf + commands[0];
for (i = 1; i < commands.length; i++) {
sdmc += ", "+pf + commands[i];
}
sendChat(bn+"Commands are: " + sdmc + ". Use "+pf+"cmds2 to see more commands" +lp);
if (msg.p._id==adminid){
sendChat(bn+"Admins commands are: "+admcmd+". Use "+pf+"admcmd2 to see more admins commands"+lp);
}
}
if (cmd ===pf+"admcmd"){
sendChat(bn+"Admins commands are: "+admcmd+". Use "+pf+"admcmd2 to see more admins commands"+lp);
}
if (cmd ===pf+"admcmd2"){
sendChat(bn+"Admins commands are: "+admcmd2+". Use "+pf+"admcmd3 to see more admins commands"+lp);
}
if (cmd ===pf+"admcmd3"){
sendChat(bn+"Admins commands are: "+admcmd3+". Use "+pf+"admcmd4 to see more admins commands"+lp);
}
if (cmd ===pf+"admcmd4"){
sendChat(bn+"Admins commands are: "+admcmd4+". Use "+pf+"admcmd5 to see more admins commands"+lp);
}
if (cmd ===pf+"admcmd5"){
sendChat(bn+"Admins commands are: "+admcmd5+". Use "+pf+"admcmd6 to see more admins commands"+lp);
}
if (cmd ===pf+"admcmd6"){
sendChat(bn+"Admins commands are: "+admcmd6+". Use "+pf+"admcmd7 to see more admins commands"+lp);
}
if (cmd === pf + "cmds2") {
var cmds2 = pf + commands2[0];
for (i = 1; i < commands2.length; i++) {
cmds2 += ", "+pf + commands2[i];
}
sendChat(bn+"Commands are: " + cmds2  + ". Use "+pf+"cmds3 to see more commands" +lp);
}
if (cmd === pf + "cmds3") {
var cmds3 = pf + commands3[0];
for (i = 1; i < commands3.length; i++) {
cmds3 += ", "+pf + commands3[i];
}
sendChat(bn+"Commands are: " + cmds3 + ". Use "+pf+"cmds4 to see more commands"  +lp);
}
if (cmd === pf + "cmds4") {
var cmds4 = pf + commands4[0];
for (i = 1; i < commands4.length; i++) {
cmds4 += ", "+pf + commands4[i];
}
sendChat(bn+"Commands are: " + cmds4  +lp);
}
if (cmd === "-otherscmds") {
var cmds = "" + otherscmds[0];
for (i = 1; i < otherscmds.length; i++) {
cmds += ", " + otherscmds[i];
}
sendChat(bn+"Commands are: " + cmds  +  lp);
}
});