// ==UserScript==
// @name         EpicOS 6
// @namespace    http://tampermonkey.net/
// @version      6
// @description  try to take over the world!
// @author       Infinity/SublimeHawk6/Epictree160
// @match        http://www.multiplayerpiano.com/*
// @grant        none
// ==/UserScript==

/*
	TERMS & CONDITIONS & INFORMATION:

EpicOS, Epic's Chat Entertainment System
(Copyright (©) Sublime Studios 2015)
was created and
is owned by Epictree160, aka SublimeHawk6, aka Infinity~,
now known as Tᕼᕮ ᕼOST. EpicOS Chat Entertainment System
was initially started in 2015 and completed in 2016.
It is part of the 160System, which is a series of bots
created and owned by Tᕼᕮ ᕼOST. This bot includes another
system called NMPBLink, also created by Tᕼᕮ ᕼOST. There were
several different versions of EpicOS before this final one:
Version 1: https://pastebin.com/VJb3yCN9
Version 2: https://pastebin.com/11eCR7ux
Version 3: [Missing.]
Version 4: https://pastebin.com/s9xZ9Wfr
Version 5: https://pastebin.com/pEndJub5
You are now at version: 6
Version 6: https://pastebin.com/0NKMTuWg
Contributors:
Epic/Epictree160/SublimeHawk6/Infinity~/The Host (commands, findUser function, globalSend function, channelSend function, bot names.),
Squid/く8彡/Casio (Automatic command list updates, some command templates, bot suggestions, inspiration to even create this bot),
Vidkunnsonn/Skallagrim (bot suggestions&other),
Electrashave (formatUnicode function),
Logan (JS command),
Chacha (Bot disconnecting message, bot suggestions),
CitronSustain/Vistril (bot suggestions, emojis),
Braden T (Tsunami command),
Ham\'s Music (nmpblink base&idea, bot suggestions),
Anon (bot suggestions),
Chris | Male | Neko (command ideas&bot suggestions),
ＡＴＬＡＳ Ａ.Ｉ™ (assistance&inspiration for the style of EpicOS),
❴❓❵/Ming (assistance/inspiration/ideas),
Foxy (assistance/inspiration/ideas),
Steven/Sven/BN-TK/NinjaFox (assistance/inspiration/ideas),
JPDLD (assistance&inspiration/ideas),
Chloe (assistance&inspiration/ideas),

	USAGE SUMMARY:

download notepad++
download Google Chrome
download Browsec VPN Chrome Extension
open this file in notepad++
find ownerId =
set it to ownerId = 'your _id here'
(get your own _id by going to MPP, opening console by pressing f12, typing in MPP.client.getOwnParticipant()._id,
copying the result it gives you.)
find admins =
delete the list and replace it with admins = ['your _id here'];
you can add more ids like so: admins = ['id1','id2','id3'] and so on.
that's all.
To execute the bot, right click on this text in notepad++, click select all and then copy it,
open the console with f12 on www.multiplayerpiano.com in chrome with your closest server enabled in Browsec VPN
paste the script into the console.
it will take a few seconds to load.
when it does, the bot will detect its first runtime and will provide further instructions.

IMPORTANT:
For the maximum performance out of EpicOS, host it on seperate computer and keep the Google Chrome tab that
EpicOS is running on selected and at the front to prevent crashes.

Save this file now and thank you for choosing EpicOS, Epic's Chat Entertainment System.
Message us on Discord for further assistance: EpicOSAssistance#5042
If you want information on NMPBLink and how proxying works with EpicOS, send "nmpblink info request"
*/



//SCRIPT:




if(localStorage.EOSFIRSTRUNTIME==null){
cmdChar = '/';
botname='Killer Bot"';
localStorage.lastcmdchar='/';
localStorage.lastbotname='Killer Bot';
setTimeout(function(){
localStorage.EOSFIRSTRUNTIME='EpicOS, Epic\'s Chat Entertainment System was executed initially on this system at: '+Date();;
EOS.chat.send('DETECTEDFIRSTRUNTIME: Hello. Welcome to EpicOS. We assume you have read the setup guide at the start of the script.');
EOS.chat.send('Type ^adminhelp for admin commands. Type ^ownerhelp for owner commands. Type ^help for the main command list. Type "EpicOS start nmpblink" without quotes to start NMPBLink.');
EOS.chat.send('Only use NMPBLink if you have got instructions on how to use it by sending "nmpblink info request" without quotes to our Discord: EpicOSAssistance#5042');
setTimeout(function(){
EOS.chat.chat('Remember that you must use ^save to save the botname and prefix if you change it.');
EOS.chat.send('Message us on Discord for further assistance: EpicOSAssistance#5042');
EOS.chat.send('Join the 160System discord server here: https://www.discord.me/160');
EOS.chat.send('Get EpicOS from our pastebin account here: https://pastebin.com/u/160Productions');
}, 10000);
}, 40000);
}
function shutdownALL(){
EOS.chat.send('Shutting down all clients.');
if(nmpb_online){
nmpb_cl.stop();
EOS.chat.send('NMPBLink shutdown.');
}
if(banonline){
banclient.stop();
EOS.chat.send('Ban announcement client shutdown.');
}
if(Object.keys(nmpb_proxy_database).length>0){
killProxyMode();
EOS.chat.send('Proxy system shutdown.');
}
clearInterval(AutoReconnect);
EOS.chat.send('Automatic reconnection interval shutdown.');
batteryenabled=false;
Power2=false;
Power='off';
EOS.chat.send('Battery interval shutdown.');
EOS.chat.send('Commands shutdown.')
botname='Goodbye!';
setTimeout(function(){
botname='EpicOS [Offline]';
EOS.chat.send('Main client shutdown.');
setTimeout(function(){
EOS.client.stop();
}, 8000);
}, 6000);
}
function log(log){ console.log("%c\n"+log, 'font-family: courier; font-size: 15px; color: #0f8da3;');}
AUTOMATICMODERATION=true; //automatic banning and spam detection features
function DAM(){
AUTOMATICMODERATION=false;
EOS.chat.send('> Automatic moderation system disabled.');
}
function EAM(){
AUTOMATICMODERATION=true;
EOS.chat.send('> Automatic moderation system enabled.');
}
//86.87 15
setTimeout(function(){startBanClient();batteryenabled=false;},60000);
//*****************************
//~SUBLIME STUDIOS~
//SublimeHawk6 (Epictree160)
//Do not pretend you own
//or have written this script.
//*****************************
whitelist = [
'a63bbd27020081cf5fe4f060'
];
//2015
//dickheads:
//51ae6a811e43f5c7ecb97bcb
//yay
//TO DO LIST:
//MOAR COMMMANDSSS!!
rooms2 = [];
//EpicOS 6.2: fixed bot spamming error messages at startup.
Power2 = true;
version = '6.5';
//EMOJIS BECAUSE WHY NOT
setInterval(function(){
log('Votedisable votes reset.')
votecount = 0;
voteids = [];
}, 30000);
emojis = { //these might be different depending on which browser/device you use. - oh - too much fucking caffeine was invested in making this

    //INFINITY SYMBOLS START
    cat1: '🐈',
    cat2: '🐱',
    pumpkin: '🎃', //fixed spelling error.
    ghost: '👻',
    moon: '🌙',
    tick: '✔️',
    warning: '⚠️',
    earth: '🌎',
    star: '✨',
    questionmark: '❓',
    car: '🚗',
    truck: '🚚',
    taxi: '🚕',
    traffic: '🚦',
    trademark: '™',
    taco: '🥙',
    boredface: '😑',
    gun: '🔫',
    potato: '🥔',  //xd
    triangle: '🔻',
    cross: '❌',
    action: '🎬',
    //INFINITY SYMBOLS END
    //FACES EMOJI START
    happy_face_big_mouth: '😀',
    happy_face_mouth_with_tongue: '😃',
    happy_face_mouth_tongue_closed_eyes: '😄',
    happy_face_arrow_eyes: '😆',
    happy_face_closed_eyes_sweat: '😅',
    happy_face_fucking_dying: '😂',
    happy_face_rofl: '🤣',//idk
    happy_face_extremely_happy: '☺️',
    happy_face_not_very_extremely: '😊',
    happy_face_angel: '😇',
    happy_face_normal: '🙂',
    happy_face_wtf: '🙃',
    happy_face_wink: '😉',
    happy_face_sleeping: '😌',
    happy_face_heart_eyes: '😍',
    kissface1: '😘',
    kissface2: '😗',
    kissface3: '😙',
    kissface4: '😚',
    happy_face_tongue_out: '😋',
    happy_face_tongue_wink: '😜',
    happy_face_arrow_tongue: '😝',
    happy_face_tongue_open: '😛',
    happy_face_money: '🤑',//mightnotshow
    happy_face_clapping: '🤗',//alsomightnotshow
    happy_face_nerd: '🤓',//alsoalsomightnotshow.
    happy_face_cool: '😎',
    happy_face_clown: '🤡',//mightnotshow,visualstudiosucks
    happy_face_cowboy: '🤠',
    happy_face_seductive: '😏',
    sad_face_irritated: '😒',
    sad_face: '😞',
    sad_face2: '😔',
    sad_face_slightly_worried: '😟',
    sad_face_bummed_out: '',
    sad_face3: '😕',
    sad_face_huge: '☹️',
    pissedoff1: '😣',
    pissedoff2: '😖',
    pissedoff3: '😫',
    auuugh1: '😩',
    auuugh2: '',
    dragon_breath: '😤',
    angry_face1: '😠',
    demon: '😡',
    no_mouth: '😶',
    disappointed1:'😐',
    disappointed2:'😑',
    surprised1:'😯',
    surprised2:'😦',
    surprised3:'😧 ',
    surprised_small_mouth:'😮',
    surprised_huge_fucking_eyes:'😲',
    whirly_eyes:'😵',
    embarrassed:'😳',
    HOLY_SHIT:'😱',
    surprised4:'😨',
    bluesurprised_sweat:'😰',
    cry_single_tear:'😢',
    surprised_sweat:'😥',
    drool:'🤤', //didnt show on VS again >:C
    cry1:'😭',
    sweat_wtf_again:'😓',
    cry_single_tear_2:'😪',
    sleeping2:'😴',
    roll_eyes:'🙄',
    thinking:'🤔',
    thinking_with_foot:'🤥', /*?*/ //i think its this old meme: https://i.pinimg.com/474x/08/43/7b/08437b0d1c44bdb9dfe26a2e8476f64d--hands-on-coffee-cups.jpg
    oh_shit_just_got_real:'😬',
    zipped_lips:'🤐',
    vomit:'🤢',
    sneeze:'🤧',
    cough_mask:'😷',
    fever:'🤒',
    broken_head: '🤕',
    demon2:'😈',
    demon3:'👿',
    monster1:'👹',
    monster2:'👺',
    poo:'💩',
    ghost1:'👻',
    skull:'💀',
    crossbones_skull:'☠️',
    ayylmao:'👽',
    //FACES EMOJI END
    //OTHER FACES AND SYMBOLS START
    alien_monster:'👾', //zerg rush, i think?? wil edit when i find out
    robot_thing:'🤖',
    butterfly_hand:'👐',
    to_the_roof:'🙌',
    //OTHER FACES AND SYMBOLS END
    //HAND GESTURES START
    clap_hand:'👏',
    bless:'🙏',
    handshake:'🤝',
    like:'👍',
    dislike:'👍',
    brofist:'👊',
    clench_fist:'✊',
    brofist_left:'🤛',
    brofist_right:'🤜',
    cross_fingers:'🤞',
    peace:'✌️',
    rock_on:'🤘',
    okay:'👌',
    left_point:'👈',
    right_point:'👉',
    up_point:'👆',
    down_point:'👇',
    up_point_no_thumb:'☝️',
    full_hand_front:'✋',
    full_hand_back:'🤚',
    full_hand_front_spread:'🖐',
    star_trek_thing:'🖖',
    wave_probably:'👋',
    telephone:'👋',
    flex:'👋',
    fuck_you: '🖕',
    pencil_hand:'✍️',
    selfie_hand:'🤳',
    paint_nails_hand: '💅',
    //HAND GESTURES END
    //TRAINS START
    JPDLD_train:'🚂',
    JPDLD_train_light: '🚦',
    JPDLD_train_misc2: '🚧',
    JPDLD_train_misc3: '🚏',
    //TRAINS END
    //SYMBOLS START
    red_heart_small:'❤',
    yellow_heart: '💛',
    green_heart:'💚',
    lightblue_heart:'💙',
    infinity_blue_heart:'💜',
    black_heart: '🖤',
    broken_heart:'💔',
    heart_dot:'❣️',
    heart_x2:'💕',
    circling_heart:'💞'}
//EMOJIS BECAUSE WHY NOT
roomselected=false;
//54.245.170.221 80 //random proxy ip

//MPP.client._events.n.pop();
EOS = MPP;
EOS.chat.send('One moment.');
setTimeout(function(){
EOS.chat.send('Welcome to EpicOS. Starting system. ['+emojis.tick+']');
Power = 'off';
}, 2000);
setTimeout(function(){
log('Spam detection enabled.');
}, 5000);
setTimeout(function(){
log('Battery interval enabled.');
console.log('Loading system settings.')
}, 8000);
setTimeout(function(){
EOS.chat.send('EpicOS, Epic\'s Chat Entertainment System (Copyright (©) Sublime Studios 2015) Version ' + version + ' created by Infinity is now online! (GET EPICOS HERE: https://pastebin.com/0NKMTuWg) ['+emojis.tick+emojis.action+']')
EOS.chat.send('You may type ' + cmdChar + 'help to access my command list, I have over 80 commands available!');
Power = 'on';
}, 20000);
aroomisselected=false;
EOS_runconsolecommand = {
disconnect:function(){EOS.client.stop()},
connect:function(){EOS.client.start()},
sendchat:function(message){MPP.chat.send(message)},
sendchat_nobuffer:function(message){EOS.client.sendArray([{m: "a", message: message }]);},
ban:function(id,reason){if(id.length==24) {if(!reason) {Reason = '..Oops. It looks like a reason hasn\'t been provided by an admin.';} else {Reason = reason;};banned.push(id);EOS.chat.send('Console banned user _id: ' + id + ' Reason: ' + Reason);} else {EOS.chat.send('Couldn\'t ban id, make sure it is an _id. The id should consist of 24 characters ['+emojis.cross+emojis.warning+']');log('Couldn\'t ban id, make sure it is an _id. The id should consist of 24 characters');}}
}

proxyflooddetection = setInterval(function(){if(AUTOMATICMODERATION){if(chat_buffer.length>=spamlimit){chat_buffer = [];EOS.chat.send('Possible proxy flood detected. Please refrain from spamming. Will not be tolerated by administrators. Commands disabled temporarily. ['+emojis.warning+emojis.cross+']');Power='off';setTimeout(function(){EOS_runconsolecommand.sendchat_nobuffer('Commands enabled. Please do not spam. Thank you.');Power = 'on'},20000);}}},0);
EOS.client.on("ls",function(ls){
for(var room in ls.u){
rooms.push(ls.u[room]._id);
uniqueNames = [];
$.each(rooms, function(i, el){
    if($.inArray(el, rooms2) === -1) rooms2.push(el);
});

};
});

setInterval(function(){$('#chat').fadeIn();},2000);
document.dispatchEvent(new MouseEvent("mousedown"));
nmpb_proxy_database={1:"212.237.32.153 3128"};
finding=false;
songcount = 0;
setInterval(function(){
if(EOS.client.channel._id=='lobby'){nmpb_DefaultROOM='lobby';}else{
nmpb_DefaultROOM=EOS.client.channel._id;}
}, 1000);
nmpb_online=false;
nmpb_requests=false;
nmpb_requests_database={};
nmpb_autoplay=false;
nmpb_proxy_amount=1;
function startProxy(){
nmpb_proxy_amount++;
nmpb_proxy_database[nmpb_proxy_amount]={client:new Client('ws://www.multiplayerpiano.com:8080')};
nmpb_proxy_database[nmpb_proxy_amount].client.start();
nmpb_proxy_database[nmpb_proxy_amount].client.setChannel(nmpb_DefaultROOM);
//nmpb_proxy_database["p"]={client:new Client('ws://www.multiplayerpiano.com:8080','http://' + ips[nmpb_proxy_database] + '/')};
//nmpb_proxy_database["p"].client.start();
//nmpb_proxy_database["p"].client.setChannel(nmpb_DefaultROOM);


}
function updateProxyNames(name){
updateproxyname=-1;
updateproxynames=setInterval(function(){
updateproxyname++;
log('updated proxy '+updateproxyname+' name to '+name);
nmpb_proxy_database[updateproxyname].client.sendArray([{ m: "userset", set: { name: name} }]);
if(updateproxyname==Object.keys(nmpb_proxy_database).length-1){
clearInterval(updateproxynames);
log('Complete!')
}
}, 500);
}
function updateProxyRooms(room){
updateproxyroom=-1;
updateproxyrooms=setInterval(function(){
updateproxyroom++;
log('updated proxy '+updateproxyroom+' room to '+room);
nmpb_proxy_database[updateproxyroom].client.setChannel(room);
if(updateproxyroom==Object.keys(nmpb_proxy_database).length-1){
clearInterval(updateproxyrooms);
log('Complete!')
}
}, 500);
}
PROXYFOLLOWEPICOS = setInterval(function(){
if(Object.keys(nmpb_proxy_database).length>0){
if(EOS.client.channel._id=='lobby'){EOS_room = 'lobby';}else{
EOS_room = EOS.client.channel._id;
}
setTimeout(function(){
updateProxyRooms(EOS_room);
}, 500);
}
}, 10000);
function upnd(){
updateProxyNames('EpicOS Proxy Assistant (160SocketSystem)');
}
function killProxyMode(){
killproxycounter=-1;
log('[NMPBLink] ---> killing proxy mode')
killproxy=setInterval(function(){
killproxycounter++;
nmpb_proxy_database[killproxycounter].client.stop();
log('stopped proxy: #'+killproxycounter+' with _id: '+nmpb_proxy_database[killproxycounter].client.getOwnParticipant()._id);
if(killproxycounter==Object.keys(nmpb_proxy_database).length-1){
clearInterval(killproxy);
log('killed all proxies');
log('ended interval killproxy');
nmpb_proxymode=false;
log('set var nmpb_proxymode to false');
console.warn('clearing database');
console.warn('. . . . . .');
nmpb_proxy_database={};
log('Database cleared!');
log('var turn set to 0');
nmpb_proxy_amount=-1;
log('NMPBLink proxy mode successfully disabled.');
DPC();
log('Disabled proxy chat.')
}
}, 500);
}

turn=-1;
function startNMPB(){
if(nmpb_online){EOS.chat.send('NMPBLink is already active! Type '+NMPB_prefix+'help for commands.');}else{
nmpb_online=true;

EOS.client.on("a", function(msg) {
if(Power2){
if(msg.a.toLowerCase().substring(0,NMPB_prefix.length)==NMPB_prefix){
if(msg.a.toLowerCase().split(NMPB_prefix)[1]=='loop'){
if(!nmpb_loop){
EOS.chat.send('Song repeat enabled. Note that autoplay is required to be enabled for this command to work. Autoplay can only be enabled by an administrator.');
nmpb_loop=true;
}else{
EOS.chat.send('Song repeat disabled.');
nmpb_loop=false;
}
}
}
}
});
function nmpb_cl_send(msg){
nmpb_cl.sendArray([{m: "a", message: msg}]);
}
EOS.client.on("a", function(msg) {
console.log('msg received')
if(banned.includes(msg.p._id)||blNames.includes(msg.p.name)) {console.log('banned')} else {
console.log('not banned')
if(msg.a.toLowerCase().substring(0,NMPB_prefix.length)==NMPB_prefix){
console.log('starts with prefix');
if(Power2){
console.log('is enabled');
if(msg.a.toLowerCase().includes(NMPB_prefix+'echo')) {console.log('echo');EOS.chat.send('The echo command has been disabled. Sorry about that.');} else {
if(msg.a.toLowerCase().includes(NMPB_prefix+'help')){
console.log('help');
EOS.chat.send('Modded sequencer commands: '+NMPB_prefix+'loop');
nmpb_cl_send('/help');
}else{
console.log('other');
nmpb_cl_send(msg.a.replace(NMPB_prefix,'/'));}}
}
}
}
});
log('Starting NMPBLink');
NMPB_prefix='-';
nmpb_cl=new Client('ws://www.multiplayerpiano.com:8080');
nmpb_cl.start();
nmpb_cl.setChannel('EOSNMPBLINK2');
log('NMPB prefix set. (NMPB_prefix)');
log('NMPB client connected. (nmpb_cl)');
function nmpb_cl_send(msg){
nmpb_cl.sendArray([{m: "a", message: msg}]);
}
EOS.chat.send('NMPBLink, created by Infinity~, is now active. Type '+NMPB_prefix+'help for commands.');
log('[160] NMPBLink is ACTIVE!');
log('Created by Infinity~');
log('---------------------');
echo = 1;
selectedID = ownerId;
log('Selected ID (_id to be precise) set to ownerId: '+ownerId);
nmpb_cl.on("a", function(msg) {
    if (msg.p._id == selectedID) {
        if (msg.a.substring(0, "Welcome,".length) == "Welcome," || msg.a == "Use /help [command] for command info.") {
            console.warn('Possible issue detected: A new user may have connected to the room "EOSNMPBLINK". It is recommended that you check this user has permission to be in the room and the room is private');return;
        }
	if(msg.a == 'Not found.') {EOS.chat.send('The file was not found! You can use ' + NMPB_prefix + 'list for a list of songs or use ' + NMPB_prefix + 'upload to upload your own MIDI file. Sorry about that!');} else {
	if(msg.a == 'To increase note quota give me the crown.'){EOS.chat.send('NOTEQUOTA WARNING. SYSTEM STRESS DETECTED.');}else{
	if(msg.a.toLowerCase().substring(0,'Now playing: Id:'.length)=='Now playing: Id:'){
	if(GETINFO){
	GETINFO=false;
	T=msg.a.split('Now playing: Id:')[1].split('. Name: ');nmpb_id=T[0].trim();nmpb_name=T[1];
	}
	}else{
        setTimeout(function(){
	EOS.chat.send(msg.a.replace(/\//g, NMPB_prefix));
	}, 1000);
    }}}}
});
nmpb_loop=false;
nmpb_sendmessage=true;
nmpb_cl.on('m', msg => {
if(nmpb_autoplay)
if(msg.x==86.87||msg.x>86.87){
if(msg.y==15||msg.y>15){
if(nmpb_sendmessage){
if(nmpb_loop){
log('END OF SONG DETECTED');
log('LOOP IS ENABLED. REPLAYING SONG.');
nmpb_sendmessage=false;
setTimeout(function(){
function nmpb_cl_send(msg){
nmpb_cl.sendArray([{m:"a", message: msg}]);
};
nmpb_cl_send('/rr');
log('> . . .');
nmpb_sendmessage=true;
}, 1000);}
else{
log('END OF SONG DETECTED. PLAYING NEXT SHORTLY.');
nmpb_sendmessage=false;
function nmpb_cl_send(msg){
nmpb_cl.sendArray([{m:"a", message: msg}]);
};
EOS.chat.send('> NMPBLink Autoplay feature is enabled. Finishing song. Playing next shortly..');
log('10 SECONDS REMAINING.');
nmpb_counter1=10;
nmpb_interval1=setInterval(function(){
nmpb_counter1--;
log(nmpb_counter1+' SECONDS REMAINING.');
if(nmpb_counter1==0){
clearInterval(nmpb_interval1);
log('DONE. PLAYING.');
log('> . . .');
nmpb_cl_send('/r');
nmpb_sendmessage=true;
}
}, 1000);
}
}
}
}
});
nmpb_proxymode=false;
nmpb_cl.on("n", function(msg){
//time = msg.t;
//EOS.client.startNote(msg.n[]);
if('')
turn=0;
var time = msg.t;
	for (var ns = 0; ns<msg.n.length; ns++){
		for (var i = 0; i<echo; i++){
			notes = [];
			notes.push(msg.n[ns]);
			if(!nmpb_proxymode){
			EOS.client.sendArray([{m: "n", t: time+(30*i), n: notes , v: 1}]);
			} else {
			turn++;
			console.warn('(TEST): TURN UPDATED TO: '+turn);
			if(turn==Object.keys(nmpb_proxy_database).length){
			turn=0;
			};
			nmpb_proxy_database[turn].client.sendArray([{m: "n", t: time+(30*i), n: notes , v: 1}]);
			}
			nmpb_playing=true;
			setTimeout(function(){
			nmpb_playing=false;
			}, 30000);
		}
	}
});
}
}
nmpb_proxymode=false;
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

log('Commands: Section 1 Activated.');
//SETTINGS++
roomtime=1.8e+6;
spamlimit = 15;
trustedusers=[];
AutoReconnect = setInterval(function(){if(EOS.client.isConnected()){}else{log('Connection lost. Attempting Auto Reconnect..');EOS.client.start();EOS.chat.send('The connection was temporarily lost.')}}, 1000); //Auto reconnects when the bot loses connection, useful for 24/7 hosting if the site goes down at night
onbeforeunload = () => EOS_runconsolecommand.sendchat_nobuffer("Disconnecting.."); //it says "Disconnecting.." before it disconnects :I
cmdChar = '^'; //the command character/command prefix. for example, if cmdChar = '^'; then you would type ^help to access the command list
battery = 100; //the percentage that the bots battery feature is at
botname = 'EpicOS'; //the bots display name
spying = false; //whether or not the bot is spying with the spy(); function
batterything = true; //batterything
batterything1 = true; //batterything1
batterything2 = true; //batterything2
batterything3 = true; //batterything3
googleavailable = true; //google stuff
googleCooldown = 6000; //google command usage cooldown in milliseconds
googleCommand = true; //this determines whether or not the google command is enabled or disabled
infinitebattery = false; //whether or not the battery is always at 100%. this changes automatically
batteryname = true; //whether or not the bot displays the battery percentage in its name. this changes automatically so you dont have to mess with it
batteryenabled = true; //whether or not the bots battery feature is enabled or not
chargecommand = true; //determines whether or not the charge command is enabled to charge the bots battery feature, this gets disabled automatically when the battery reaches 0%
searchHistory = []; //things that users have searched for with the google command
cmdChar2 = 'EpicOS'; //this means you can say "epicos" in chat and the bot will respond and do things and yeah..
ForbiddenRooms = []; //put any room name in here and when the bot connects to any of the rooms in here it will disable the commands
ECL = ['help']; //unused
Power = 'on'; //determines whether or not the commands are enabled or not off means the commands are off and on means the commands are on (obviously)
banned = [
'af159288cb2368547e7b6c75',
'daf814c2aaf8246f8e8ba8d4',
'1c99752a8e51880d2b414cf2',
'0ec78224511bc128d073e3b2',
'f3c30795921b0f5f0e557a23',
'308819d70ddaf50e50145801']; //users ids who are banned and dont have access to the bot
FCL = [
'help',
'about',
'translatetobinary',
'encode',
'decode',
'google',
'suggest',
'stats',
'shout',
'myinfo',
'bans',
'games',
'yes',
'no',
'navyseals',
'translatefrombinary',
'amiadmin',
'afk',
'ayy-lmao',
'boom',
'reverse',
'underline',
'zalgo',
'denis',
'kiss',
'hug',
'slap',
'lenny',
'fact',
'kill',
'time',
'eat',
'drink',
'generaterpname',
'invent',
'joke',
'sink',
'dare',
'pun',
'double',
'adminhelp',
'suicide',
'wtf',
'meow',
'say',
'gr8']; //main public full command list
MPC = [
'bunny',
'votedisable (vd)',
'levi',
'karma',
'cake',
'improto',
'thischat',
'latest',
'discord',
'join',
'selectroom',
'finduser',
'globalsend',
'dumbass',
'channelsend',
'uptime'
]; //more public commands
AOC = [
'tsunami',
'op',
'deop',
'news',
'news2',
'battery',
'ban',
'power',
'welcome',
'js',
'announce',
'nmpbpower',
'autoplay']; //admin only command list
OOC = [
'text-to-speech',
'restart',
'disconnect',
'shutdown',
'save',
'autoregenerate',
'regenerate',
'hotel',
'transferowner']; //owner only command list
CMDUNFINISHED = '[WIP Command]: Sorry, it looks like this command is still being coded or is a Work In Progress command.'; //the message that's displayed when a commands is work in progress. usually i dont use this
_ = true; //whether or not the bot disables commands when its in a forbidden room
var chat_buffer = []; //messages that are in the "queue" to be sent
SwearingAllowed = true; //if its false then the bot bans users who swear. i just leave this on true though since its just a stupid and annoying feature
msgcount = 0; //how many messages have been sent
speakChat = false; //this determines whether or not text to speech says all messages posted in chat
thing = 'true'; //i have no idea but i think this has something to do with the bots battery feature thing
ownerName = 'Bop It'; //the owners name, this variable is useless i think... i dont even know, i cant understand half of my own code so im not sure what this is even for
cmdChar = localStorage.lastcmdChar; //this just gets the last saved cmdchar from localStorage and sets the var cmdChar to whatever is in localStorage
botname = localStorage.lastbotname; //this just gets the last saved botname from localStorage and sets the var botname to whatever is in localStorage
localStorage.ownerName = ownerName; //useless
suggestioncounter = 0; //how many suggestions have been submitted, this usually remains 0 as nobody really uses the suggest command
admins =
['18c59b215ec078996ef9c3f8']; //users who are admin
msgcount = 0; //how many messages have been sent
statscount = 0; //how many times the stats command has been used
leavecount = 0; //how many users have left the room
joincount = 0; //how many users have joined the room
blNames = ["Socket","LOL","Spammer","Proxy","Levi","blobek-lady2013","Denis","Zhaydin-Admin"]; //blacklisted names that get banned whenever they type in chat
autobanned = []; //autobanned users ids
thingy = 0; //i dont even know what that's for but it does something
var ballresponses = ['XD LOL. No.', 'Hell no!', 'bitch u stupid or something???', 'never','maybe idk','go away pls','Dunno','Hell yea!','Yea','Yep','Nah','Sorry im not home right now','no','YES','Fat chance','Lol fat chance','I dont think so!','Not this time!','i aint talking to YOU!','Yea sure whatever ','whatever','Suuuree','Maybe so',':P','In the year 3000 you will','just 3 seconds','Lel hell no!','nah m8','Definitely!','Duhhhh, yes!','what do you think','of course... NOT','of course!','Duhh','XD NO','no','yes','m8','doubt it','Tomorrow','Ughhh im tired can you ask again some other time??','TrY AgAiN wHeN i CaRe!','TrY aGaIn!','i hate you','UGH NO','google it','m8 i may be a computer but i dont know everything!','[The number you are calling does not give a fuck]','k','Don\'t count on it.','Not this time!','Nope.']; //random responses for the 8ball command
var getResponse = ballresponses[Math.floor(Math.random() * ballresponses.length)];
var diceresponses = ['1','6','3','5','2','4']; //random number responses for the dice command
var diceresponse = diceresponses[Math.floor(Math.random() * diceresponses.length)];
var Operators = ['+','-','/','*']; //this was for the maths command i was working on but that got removed as it was a bit trickier to make than i thought it'd be, so this is just unused
var getOperator = Operators[Math.floor(Math.random() * Operators.length)];
correctanswercount = 0; //how many questions have been answered correctly on the timetables command in the games section
welcome = false; //whether or not the bot welcomes users
news = 'Latest feature: Use the join command to move the bot to your own room!'; //text that displays after command list loads in help command
news2 = 'Please feel free to use the suggest command to provide feedback, thanks! Also, try out the games command!'; //more text that displays after the command list
afkusersids = []; //afk users ids
afkusersnames = []; //afk users names
rpsr = ['paper','rock','scissors']; //rock paper scissors responses
votecount = 0; //how many users have voted to disable commands with the votedisable command
voteids = []; //user ids that have voted to disable the commands with the votedisable command
AutoR = false; //Whether or not the bot automatically updates the command list
ownerId = '18c59b215ec078996ef9c3f8'; //Owners _id
securityerror = 'Security Error: '; //Security error message
error = 'Error: '; //Error message
Responses = {
'greetings':['Hi','Hello','Hey','Greetings!','Hello there!'],
'confirm':['Confirmed','Noted.','Registered.','Command registered','Registered command','Processing','Processing request.','Sure!','Done!','Affirmative'],
'goodbye':['Goodbye','Bye','See you later'],
'funny':['Haha'],
'yes':['Yes?','What can I do for you?','What?','What is it?','How can I help?','How may I be of assistance to you?'],
'confuzzled':['Yeahhh... I don\'t understand.','What?','Can you repeat that, please?','Sorry, what?','Uhh.. what?','You\'ve lost me there haha']} //EpicOS Smart Response System responses
pixel_lm = ''; //Last thing said to pixel
pixel_reports = []; //Administrator Pixel reports
systeminroom=false;
extra = 'none';
latestcmd = 'globalsend';
comingsoon = 'none';
otherinfo = 'Discontinued projects: EpicOS Discord Edition and The Pixel AI System';
idiotmessage=true;
idiots = [
'51ae6a811e43f5c7ecb97bcb',
'af159288cb2368547e7b6c75',
'daf814c2aaf8246f8e8ba8d4',
'1c99752a8e51880d2b414cf2',
'01d900c769fc9b443484bf0c'];
pixelenabled=false;
autoupdateName = setInterval(function(){ if(batteryname) { EOS.client.sendArray([{ m: "userset", set: { name: botname + ' [' + cmdChar + 'help] Battery: ' + battery + '%'  } }]); } else { EOS.client.sendArray([{ m: "userset", set: { name: botname + ' [' + cmdChar + 'help]'  } }]); } }, 0000);
//SETTINGS--

//Pixel START
function saytopixel(input,data){
var dt = new Date();
    var h =  dt.getHours(), m = dt.getMinutes();
    var _time = (h > 12) ? ('PM') : ('AM');
if(_time == 'AM' == true) {a = 'morning'} else {a = 'evening/afternoon'};
EOS.chat.send(discontinued+' Sorry about that');
pixel_lm = '('+Date()+') ('+data.p._id+') '+data.p.name+': '+input;
if(input==''){EOS.chat.send('Pixel: ' + Responses.greetings[Math.floor(Math.random() * Responses.greetings.length)] + ' want to know a little bit more about me?'); pixel_awaitresponse1 = true; }
else {
if(input.toLowerCase().substring(0,'hi'.length)=='hi'||input.toLowerCase().substring(0,'hey'.length)=='hey'||input.toLowerCase().substring(0,'hey'.length)=='hey'||input.toLowerCase().substring(0,'hello',length)=='hello') {EOS.chat.send('Pixel: '+Responses.greetings[Math.floor(Math.random() * Responses.greetings.length)])} else {
if(pixel_awaitresponse1){
pixel_awaitresponse1=false;
if(input.toLowerCase().substring(0,'yes'.length)=='yes'||input.toLowerCase().substring(0,'yep'.length)=='yep'||input.toLowerCase().substring(0,'yeah'.length)=='yeah'||input.toLowerCase().substring(0,'yup'.length)=='yup'||input.toLowerCase().substring(0,'okay'.length)=='okay'||input.toLowerCase().substring(0,'ok'.length)=='ok'){
EOS.chat.send('Pixel: Okay then, one second..');
setTimeout(function(){
EOS.chat.send('Pixel: Hi there! I am Pixel, Epic\'s Smart Response System. I was created by Infinity (SublimeHawk6/Epictree160). The date that this feature was created was: Saturday 16th September 2017. There are multiple different private versions of me outside of MPP.');
}, 2000);
}
else {
EOS.chat.send('Sorry, this system is no longer being worked on.'+discontinued);
}}
else {
EOS.chat.send('Pixel: ' + Responses.confuzzled[Maths.floor(Math.random() * Responses.confuzzled.length)])
setTimeout(function() {
EOS.chat.send('EpicOS: Looks like Pixel failed to understand your query. No worries, a report is currently being generated for an admin to review. Thanks for contributing to Pixel. New responses may be added to respond to your input. Please remember that Pixel only supports English. Try rephrasing your query, if Pixel still does not understand, I apologise.');
pixel_reports.push('//START REPORT User: ' + pixel_lm + ' || Pixel responded with Responses.confuzzled..  END REPORT');
log('**NEW PIXEL REPORT GENERATED..**');
log('**To view report now, type pixel_reports[pixel_reports.length-1]; To cancel automatic report display, type cancel(); **');
setTimeout(function(){
log('Displaying report automatically in..');
log('10');
setTimeout(function(){
log('9');
}, 1000);
setTimeout(function(){
log('8');
}, 2000);
setTimeout(function(){
log('7');
}, 3000);
setTimeout(function(){
log('6');
}, 4000);
setTimeout(function(){
log('5');
}, 5000);
setTimeout(function(){
log('4');
}, 6000);
setTimeout(function(){
log('3');
}, 7000);
setTimeout(function(){
log('2');
}, 8000);
setTimeout(function(){
log('1');
}, 9000);
final = setTimeout(function(){
log('0');
setTimeout(function(){
log(pixel_reports[pixel_reports.length-1])
}, 200);
}, 10000);
}, 4000);
}, 2000);
}

}
}
function cancel() {
clearInterval(final);
log('Automatic report display was manually cancelled.')
}}
//Pixel END

//Epic's Language START
hello = 'heplo ';
what = 'waygc ';
is = 'us ';
i = 'I ';
by = 'buh';
your = 'yior ';
name = 'camo ';
good = 'iud ';
to = 'uo ';
hear = 'orea ';
yes = 'oos ';
no = 'lo ';
okay = 'lekoo ';
bye = 'bop ';
hey = 'heu ';
it = 'oy ';
is = 'od ';
not = 'mop ';
a = 'la ';
be = 'hua ';
idea = 'ibee ';
an = 'wan ';
ha = 'lek ';
please = 'leapse ';
maybe = 'niuba ';
bad = 'duad ';
happy = 'hallpy ';
sad = 'suas ';
important = 'omporting ';
remember = 'lerember ';
on = 'un ';
off = 'loc ';
are = 'loo ';
how = 'poh ';
you = 'yio ';
that = 'htaoi ';
am = 'um ';
epicos = 'epicos ';
pixel = 'pixel ';
was = 'eas ';
so = 'osa ';
now = 'pana ';
there = 'yagatha ';
command = 'instrucom ';
list = 'lalist ';
help = 'hople ';
never = 'nevern ';
sure = 'shope ';
ever = 'levern ';
because = 'beakas ';
and = 'yandera ';
use = 'utili ';
useful = 'utilifal ';
cool = 'col ';
really = 'reeli ';
real = 'reel ';
fake = 'gafener ';
faker = 'gafenary ';
auto = 'pato ';
automatic = 'patoatop ';
displaying = 'folomur ';
display = 'folo ' ;
monitor = 'manata ';
monitoring = 'manatamur ';
observe = 'manaya ';
observing = 'manayamur ';
observation = 'manayaiun ';
just = 'ladel ';
because = 'necioas ';
make = 'booke ';
bug = 'huf ';
dug = 'duf ';
cake = 'loka ';
create = 'freage ';
//Epic's Language END


function LoadHelpList(msg) { EOS.chat.send('[MAIN COMMANDS]: ' + cmds1); LoadHelpList4(msg);LoadNews1();LoadNews2();}
function LoadHelpList2(msg) { EOS.chat.send('[ADMIN-ONLY COMMANDS]: ' + cmds2)}
function LoadHelpList3(msg) { EOS.chat.send('[OWNER-ONLY COMMANDS]: ' + cmds3)}
function LoadHelpList4(msg) { EOS.chat.send('[OTHER PUBLIC COMMANDS]: ' + cmds4)}
function LoadNews1() {EOS.chat.send('Latest News: ' + news)}
function LoadNews2() {EOS.chat.send('Latest News: ' + news2)}
var Z = {
            chars: {
                0 : [ /* up */
                    '\u030d', /*     ̍     */
                    '\u030e', /*     ̎     */
                    '\u0304', /*     ̄     */
                    '\u0305', /*     ̅     */
                    '\u033f', /*     ̿     */
                    '\u0311', /*     ̑     */
                    '\u0306', /*     ̆     */
                    '\u0310', /*     ̐     */
                    '\u0352', /*     ͒     */
                    '\u0357', /*     ͗     */
                    '\u0351', /*     ͑     */
                    '\u0307', /*     ̇     */
                    '\u0308', /*     ̈     */
                    '\u030a', /*     ̊     */
                    '\u0342', /*     ͂     */
                    '\u0343', /*     ̓     */
                    '\u0344', /*     ̈́     */
                    '\u034a', /*     ͊     */
                    '\u034b', /*     ͋     */
                    '\u034c', /*     ͌     */
                    '\u0303', /*     ̃     */
                    '\u0302', /*     ̂     */
                    '\u030c', /*     ̌     */
                    '\u0350', /*     ͐     */
                    '\u0300', /*     ̀     */
                    '\u0301', /*     ́     */
                    '\u030b', /*     ̋     */
                    '\u030f', /*     ̏     */
                    '\u0312', /*     ̒     */
                    '\u0313', /*     ̓     */
                    '\u0314', /*     ̔     */
                    '\u033d', /*     ̽     */
                    '\u0309', /*     ̉     */
                    '\u0363', /*     ͣ     */
                    '\u0364', /*     ͤ     */
                    '\u0365', /*     ͥ     */
                    '\u0366', /*     ͦ     */
                    '\u0367', /*     ͧ     */
                    '\u0368', /*     ͨ     */
                    '\u0369', /*     ͩ     */
                    '\u036a', /*     ͪ     */
                    '\u036b', /*     ͫ     */
                    '\u036c', /*     ͬ     */
                    '\u036d', /*     ͭ     */
                    '\u036e', /*     ͮ     */
                    '\u036f', /*     ͯ     */
                    '\u033e', /*     ̾     */
                    '\u035b', /*     ͛     */
                    '\u0346', /*     ͆     */
                    '\u031a'  /*     ̚     */
                ],
                1 : [ /* down */
                    '\u0316', /*     ̖     */
                    '\u0317', /*     ̗     */
                    '\u0318', /*     ̘     */
                    '\u0319', /*     ̙     */
                    '\u031c', /*     ̜     */
                    '\u031d', /*     ̝     */
                    '\u031e', /*     ̞     */
                    '\u031f', /*     ̟     */
                    '\u0320', /*     ̠     */
                    '\u0324', /*     ̤     */
                    '\u0325', /*     ̥     */
                    '\u0326', /*     ̦     */
                    '\u0329', /*     ̩     */
                    '\u032a', /*     ̪     */
                    '\u032b', /*     ̫     */
                    '\u032c', /*     ̬     */
                    '\u032d', /*     ̭     */
                    '\u032e', /*     ̮     */
                    '\u032f', /*     ̯     */
                    '\u0330', /*     ̰     */
                    '\u0331', /*     ̱     */
                    '\u0332', /*     ̲     */
                    '\u0333', /*     ̳     */
                    '\u0339', /*     ̹     */
                    '\u033a', /*     ̺     */
                    '\u033b', /*     ̻     */
                    '\u033c', /*     ̼     */
                    '\u0345', /*     ͅ     */
                    '\u0347', /*     ͇     */
                    '\u0348', /*     ͈     */
                    '\u0349', /*     ͉     */
                    '\u034d', /*     ͍     */
                    '\u034e', /*     ͎     */
                    '\u0353', /*     ͓     */
                    '\u0354', /*     ͔     */
                    '\u0355', /*     ͕     */
                    '\u0356', /*     ͖     */
                    '\u0359', /*     ͙     */
                    '\u035a', /*     ͚     */
                    '\u0323'  /*     ̣     */
                ],
                2 : [ /* mid */
                    '\u0315', /*     ̕     */
                    '\u031b', /*     ̛     */
                    '\u0340', /*     ̀     */
                    '\u0341', /*     ́     */
                    '\u0358', /*     ͘     */
                    '\u0321', /*     ̡     */
                    '\u0322', /*     ̢     */
                    '\u0327', /*     ̧     */
                    '\u0328', /*     ̨     */
                    '\u0334', /*     ̴     */
                    '\u0335', /*     ̵     */
                    '\u0336', /*     ̶     */
                    '\u034f', /*     ͏     */
                    '\u035c', /*     ͜     */
                    '\u035d', /*     ͝     */
                    '\u035e', /*     ͞     */
                    '\u035f', /*     ͟     */
                    '\u0360', /*     ͠     */
                    '\u0362', /*     ͢     */
                    '\u0338', /*     ̸     */
                    '\u0337', /*     ̷      */
                    '\u0361', /*     ͡     */
                    '\u0489' /*     ҉_     */
                ]

            },
            random: function(len) {
                if (len == 1) return 0;
                return !!len ? Math.floor(Math.random() * len + 1) - 1 : Math.random();
            },
            generate: function(str) {
                var str_arr = str.split(''),
                    output = str_arr.map(function(a) {
                        if(a == " ") return a;
                        for(var i = 0, l = Z.random(16);
                            i<l;i++){
                            var rand = Z.random(3);
                            a += Z.chars[rand][
                                Z.random(Z.chars[rand].length)
                            ];
                        }
                        return a;
                    });
                return output.join('');
            }
        };
function GCS() {
cmds1 = [];
cmds2 = [];
cmds3 = [];
cmds4 = [];
for (i = 0; i < FCL.length; i++) {
cmds1 += ", " + cmdChar + FCL[i];}
log('Commands (FCL) were successfully generated.');
for (var i = 0; i < AOC.length; i++) {
cmds2 += ", " + cmdChar + AOC[i];}
log('Commands (AOC) were successfully generated.');
for (var i = 0; i < OOC.length; i++) {
cmds3 += ", " + cmdChar + OOC[i];}
log('Commands (OOC) were successfully generated.');
for (var i = 0; i < MPC.length; i++) {
cmds4 += ", " + cmdChar + MPC[i];}
log('Commands (MPC) were successfully generated.');
}
function underline(fullCmd) {var result = "";for(var i = 0; i < fullCmd.length; i++) {result += fullCmd[i]+"̲";}return result;}
function spawnClients(roomName, amount){
	tracker = {};
	for (let i = 0; i < amount; i++) {
		(function() {
			setTimeout(function() {
				let client = "client" + i; if (!tracker[client]) {
					tracker[client] = new Client("ws://" + window.location.hostname + ":443");
                    tracker[client].setChannel(roomName + ' #' + i); tracker[client].start();
				}
			}, i * 1050);
		})(i);
	}
}


//These functions are now pointless to be honest.
function AllowSwearing() {EOS.chat.send('Swearing is permitted.');SwearingAllowed = true}
function DisallowSwearing() {EOS.chat.send('Swearing is not permitted.');SwearingAllowed = false;}
/////////////////////////////////////////////////////////////////////////////////

//EOS.client.on("ls",function(ls){rooms = [];for(var room in ls.u){rooms.push(ls.u[room]._id)}})
function chatBuffer(msg) {msg.match(/.{0,511}/g).forEach(function(x, i) {if(x == "") return;if (i !== 0) x = ". . ." + x;chat_buffer.push(x);});
};
EOS.client.on("count", function (count) {
            document.title = "EpicOS (" + count + ")";
            });
proxyChat=false;
chatTurn=-1;
chatInt = setInterval(function() {
	var msg = chat_buffer.shift();
	if (proxyChat) {chatTurn++;nmpb_proxy_database[chatTurn].client.sendArray([{m: "a", message: msg}]);if(chatTurn==Object.keys(nmpb_proxy_database).length-1){setTimeout(function(){chatTurn=-1;},200);}}else{EOS.client.sendArray([{m: "a", message: msg}]);}
},2000);
function EPC(){
EOS.chat.send('EpicOS Epic\'s Chat Entertainment System Proxy ChatQuota Reach Prevention System Automatic Message Internet Protocol Sharing Multi Chat System Bot Created By Infinity For MultiPlayerPiano™ (E.O.S.E.C.E.S.P.C.Q.A.C.C.R.P.S.A.M.I.P.S.M.C.S.C.B.B.I.F.M.P.P.) is now active.');
proxyChat=true;
chatTurn=-1;
}
function DPC(){
EOS.chat.send('EpicOS Epic\'s Chat Entertainment System Proxy ChatQuota Reach Prevention System Automatic Message Internet Protocol Sharing Multi Chat System Bot Created By Infinity For MultiPlayerPiano™ (E.O.S.E.C.E.S.P.C.Q.A.C.C.R.P.S.A.M.I.P.S.M.C.S.C.B.B.I.F.M.P.P.) is now inactive.');
proxyChat=false;
chatTurn=-1;
}
function LoadRoomNames() { $('#room').click(); EOS.chat.send('Loading channel names..'); setTimeout(function() { chatBuffer(JSON.stringify(rooms)) }, 5000); }
function randomNumber() {test = Math.random(); test2 = test * 20 ; RN = Math.floor(test2); return RN}

setInterval(function() {EOS.chat.send('EpicOS, a javascript chat bot with over 80 commands, programmed by Infinity for www.multiplayerpiano.com. Using code from Squid/Casio, Skallagrim/Vidkunssonn, Electrashave and more.'); }, 11000000);
setInterval(function() {if(Power == 'on' == true) {_ = true;};if(_) {if(ForbiddenRooms.includes(EOS.client.channel._id)) { EOS.chat.send('Commands are forbidden in the room "' + EOS.client.channel._id + '" Commands Disabled.');Power = 'off'; _ = false;batteryenabled = true;botname = botname + ' ' + '[Offline]' } } }, 2000);
joinenabled=true;
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "adminhelp") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { LoadHelpList2(); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "discord") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Recommended discord servers: |1| https://discord.gg/pMhX9C3 | 160System Discord Service |2| https://discord.gg/Y2u82Xd | Brin\'s MPP Notes to Discord and MIDI player server |3|  |  |4| ') } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "join") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) {if(!joinenabled){EOS.chat.send(error+'Sorry, this command has been disabled by an administrator');}else{if(!roomselected){EOS.chat.send('Please select a room for EpicOS to connect to by typing: ' + cmdChar + 'selectroom <Room Name Here> without the < and > and then type ' + cmdChar + 'join.');} else {if(systeminroom){EOS.chat.send(error+'Sorry, it seems the system is already in a requested room. Please wait until the current room timer expires and the system returns to room: ' + lastroom + '. Apologies for the wait.')} else {systeminroom=true;lastroom=EOS.client.channel._id;clearTimeout(timeout); EOS.chat.send('One moment.');EOS.chat.send('EpicOS will now relocate to selected room ('+selectedroom+') for 30 minutes');setTimeout(function(){EOS.client.setChannel(selectedroom);trelocate=setTimeout(function(){systeminroom=false;EOS.chat.send('Time expired. Relocating to last room: ' + lastroom + '. Thank you for using EpicOS. Relocating in 6 seconds.');setTimeout(function(){EOS.client.setChannel(lastroom);setTimeout(function(){EOS.chat.send('The system has just returned from the room: ' + selectedroom + '. You can request me to join your room by typing '+cmdChar+'selectroom <Room Name Here> without the < and > and then typing '+cmdChar+'join');roomselected=false;}, 4000);},6000);},roomtime);},2000); }}}} else {  } } });
EOS.client.on("a", function(msg) { if(banned.includes(msg.p._id) == true) { } else {if(SwearingAllowed) {} else {if(msg.a.toLowerCase().includes("fuck")||msg.a.toLowerCase().includes("shit")||msg.a.toLowerCase().includes("twat")||msg.a.toLowerCase().includes("fucks")||msg.a.toLowerCase().includes("fuckers")||msg.a.toLowerCase().includes("fucked")||msg.a.toLowerCase().includes("shits")||msg.a.toLowerCase().includes("porn")) {EOS.chat.send('Swearing is not permitted. You no longer have access to EpicOS.');banned.push(msg.p._id)}}}});



//Transfer data from tab to tab through localStorage! :D
localStorage.announcement = 'false';
LocalStorageRecieverCheckerIntervalThingSuperCollidingSuperButtonPortalButtonPotatoMachineGunMachine = setInterval(function() { if(localStorage.announcement == 'true') { localStorage.announcement = false; EOS.chat.send('[EpicOSAnnounceSystem]: ' + localStorage.announcement2  + '.');
if(localStorage.announcement2 == 'Owner is offline.') {EOS.chat.send('Disconnecting..');if(nmpb_online){EOS.chat.send('One second while I disconnect the NMPB link system..');nmpb_cl.stop();nmpb_cl_send('/stop');};EOS.chat.send('Shutting Down..'); localStorage.lastbotname = botname;localStorage.lastcmdChar = cmdChar;batteryenabled = false;setTimeout(function() {botname = 'Shutting Down..'}, 2000); setTimeout(function() {botname = 'Saving Settings..'}, 4000);setTimeout(function() {botname = 'Disabling Commands..';Power = 'off'}, 8000);setTimeout(function() {botname = 'Disabling Notice System..';clearInterval(LocalStorageRecieverCheckerIntervalThingSuperCollidingSuperButtonPortalButtonPotatoMachineGunMachine)}, 10000); setTimeout(function() {clearInterval(AutoReconnect); botname = 'Stopping services..'}, 14000); setTimeout(function() {EOS.chat.send('Disconnecting Bot..');setTimeout(function(){EOS.client.stop();EOS.chat.send('Thank you for using the EpicOS Chat Entertainment System. System is now disconnecting.');},6000);}, 18000);} } }, 1000);

//IDNUMBER = randomNumber() + randomNumber()
//'EOS' + IDNUMBER = EOS
EOS.client.on("a", function(msg) {
if(msg.a=='> Connected, type ^help for commands. This bot was created by Infinity and is part of the 160System.'){
EOS.chat.send('Detected EpicBot.');
log('EpicBot system detected.');
}
});
EOS.client.on("a", function(msg) { if(banned.includes(msg.p._id)==false) if(msg.a.toLowerCase() == 'what time is it'||msg.a.toLowerCase() == 'what time is it') { EOS.chat.send('Here\'s my date and time: '+Date()); } });
EOS.client.on("a", function(msg) { if(msg.a.toLowerCase() == 'epicos') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { var dt = new Date();
    var h =  dt.getHours(), m = dt.getMinutes();
    var _time = (h > 12) ? ('PM') : ('AM'); if(_time == 'AM' == true) { EOS.chat.send('Good morning, ' + msg.p.name + '. How may I be of assistance?') } else { EOS.chat.send('EpicOS: Good evening, ' + msg.p.name + '. How may I be of assistance?') } } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar ) if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Hi, ' + msg.p.name + '. Please try ' + cmdChar + 'help for the command list.'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + 'cmds') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Hi, ' + msg.p.name + '. Please try ' + cmdChar + 'help for the command list.'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + 'votedisable'||msg.a.toLowerCase() == cmdChar + 'vd') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { if(voteids.includes(msg.p._id)){EOS.chat.send('You already voted to disable the commands.');} else { voteids.push(msg.p._id);votecount++; EOS.chat.send('User: ' + msg.p.name + ' voted to disable the commands. ' + votecount + ' out of 6 votes'); if(votecount==6){EOS.chat.send('Chat commands disabled.'); Power = 'off';}}} else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + '?') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Hi, ' + msg.p.name + '. Please try ' + cmdChar + 'help for the command list.'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + '?') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Known prefixes for bots on MPP: ^ (often used for prefixes of bots created by Infinity), * (Used in BOTBOT database system and ESB Proxy Control Panel), / (Used in NMPB)'); } else {  } } });
EOS.client.on("a", function(msg) { message = msg.a; if(message.toLowerCase() == 'hello' || message.toLowerCase() == 'hi' || message.toLowerCase() == 'hey' || message.toLowerCase() == 'hi.' || message.toLowerCase() == 'hey.' || message.toLowerCase() == 'hello.') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { var dt = new Date();
    var h =  dt.getHours(), m = dt.getMinutes();
    var _time = (h > 12) ? ('PM') : ('AM'); if(_time == 'AM' == true) { EOS.chat.send('Good morning, ' + msg.p.name + '.') } else { EOS.chat.send('Good afternoon/evening, ' + msg.p.name + '.') } } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + 'commands') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Hi, ' + msg.p.name + '. Please try ' + cmdChar + 'help for the command list.'); } else {  } } });
function resetRoom(){
console.warn('selected room reset.');
clearInterval(trelocate);
systeminroom=false;
roomselected=false;
EOS.chat.send('[SELECTEDROOM RESET]: Hello. I am EpicOS. Use '+ cmdChar + 'join to connect the bot to your room.')
}
discontinued='Error: Discontinued Feature.'
//-electrashave
//v0.3, may update in the future to support more unicode characters
String.prototype.formatUnicode = function() {
	let abcs = {"0":["０","0","₀","⁰","ᅙ"],"1":["１","1","₁","¹","߁","⑴","①"],"2":["２","2","ƻ","₂","²","ϩ","⑵","②","ᆯ","Զ"],"3":["３","3","ӟ","₃","³","Ӡ","З","⑶","③","Յ"],"4":["４","4","₄","⁴","५","⑷","④","Վ"],"5":["５","5","₅","⁵","Ƽ","⑸","⑤"],"6":["６","6","₆","⁶","Ϭ","⑹","⑥"],"7":["７","7","₇","⁷","子","⑺","⑦","ᆨ","Դ"],"8":["８","8","₈","⁸","⑻","⑧","Ց"],"9":["９","9","₉","⁹","९","⑼","⑨","Գ"],"a":["ａ","á","ﾑ","ค","α","а","ል","ä","ᴀ","Ⱥ","ₐ","ᵃ","a","ą","ᗩ","å","ʌ","ƛ","⒜","ⓐ","Λ","ᾄ","ձ","მ","ǟ","Â","Թ","λ","ª","Ǟ","Æ"],"b":["ｂ","b","乃","๒","в","ъ","ጌ","ḅ","ʙ","ƀ","ᵇ","ҍ","ᕊ","♭","ß","Ь","Ъ","Ɓ","⒝","ⓑ","ᗷ","ᙖ","Ⴆ","ɓ","β","๖","ჩ","ც","ɮ","ƅ","Б","Յ","Ϧ","þ"],"c":["ｃ","ć","c","ƈ","¢","ς","с","ር","ċ","ᴄ","ȼ","ᶜ","ↄ","ç","ᑕ","ḉ","Ƈ","⒞","ⓒ","ᙅ","ζ","८","Ĉ","Ͼ","Շ","Ȼ","ㄈ","ट","©"],"d":["ｄ","d","ɗ","∂","๔","ↁ","ዕ","ḋ","ᴅ","đ","ᵈ","ժ","ᖙ","ᕍ","ⅾ","⒟","ⓓ","ᗪ","Ɗ","ԃ","D","Ð","ɔ","δ","໓","ძ","ɖ","Ժ","ð","Þ"],"e":["е", "ｅ","é","乇","ﻉ","є","э","ቿ","ë","ᴇ","ɇ","ₑ","ᵉ","ɘ","ҽ","ᙓ","ℯ","ε","e","૯","⒠","ⓔ","ᕮ","Є","Ɛ","ἔ","ē","ɛ","£","Ξ","ȝ","€","È","ę","E"],"f":["ｆ","f","ｷ","ि","ƒ","Ŧ","ቻ","ḟ","ꜰ","ᶠ","ꟻ","ℱ","ғ","⒡","ⓕ","ᖴ","Ƒ","ϝ","F","∱","բ","Բ","ʄ","ʃ"],"g":["ｇ","ǵ","g","ﻭ","ﻮ","Б","ኗ","ġ","ɢ","ǥ","ᵍ","ց","ᘐ","ℊ","❡","ʛ","⒢","ⓖ","G","ᘜ","Ɠ","ɠ","Ǥ","ĝ","ງ","૭","Գ","Ģ","૬","ζ"],"h":["ｈ","h","ん","ɦ","н","ђ","Ђ","ዘ","ḧ","ʜ","ħ","ₕ","ʰ","հ","ᖺ","♄","ℎ","Ӈ","⒣","ⓗ","ᕼ","ԋ","Ĥ","ɧ","Һ","Ħ","৸"],"i":["ｉ","í","ﾉ","ٱ","ι","เ","і","ጎ","ï","ɪ","ɨ","ᵢ","ⁱ","i","ì","ᓰ","☤","ḯ","ℑ","ї","ί","⒤","ⓘ","I","ᶤ","Ī","ı","ἷ","ﻨ","ἶ","ɿ","ĩ","ł","¡","Î","Ї"],"j":["ｊ","j","ﾌ","ﻝ","נ","ן","ј","ጋ","ᴊ","ɉ","ⱼ","ʲ","ʝ","ᒎ","ʆ","⒥","ⓙ","ᒍ","Ĵ","ว","յ","ʖ","ĵ","¿"],"k":["Ⱪ","ｋ","ḱ","ズ","ᛕ","к","ጕ","ḳ","ᴋ","ꝁ","ₖ","ᵏ","k","ҟ","ķ","Ƙ","⒦","ⓚ","K","ĸ","ƙ","Ҡ","κ","ќ","ҡ","қ","ӄ","Қ","К","Κ"],"l":["ｌ","ĺ","ﾚ","ɭ","ℓ","l","ረ","ḷ","Ƚ","ʟ","ł","ₗ","ˡ","Ӏ","ᒪ","ǀ","ʅ","Լ","⒧","ⓛ","Ɩ","Ŀ","Ն","Ł","ι","|","Ļ","ᄂ"],"m":["ｍ","ḿ","ﾶ","๓","м","ጠ","ṁ","ᴍ","m","ₘ","ᵐ","ʍ","ᙢ","ღ","ɱ","⒨","ⓜ","ᗰ","ᙏ","M","ᄊ","ო","♏","௱"],"n":["ｎ","ń","刀","ก","η","ภ","и","ክ","ṅ","ɴ","n","ₙ","ⁿ","ᴎ","ղ","ﬡ","ᾔ","ท","ɲ","й","Ɲ","⒩","ⓝ","ᑎ","ɳ","ᶰ","И","ᾗ","п","ŋ","π","ຖ","ռ","Ո","ה","Л","Ռ","ñ","П","Ñ"],"o":["ｏ","ő","o","ѻ","σ","๏","о","ዐ","ö","ᴏ","ø","ₒ","ᵒ","օ","ᗢ","☺","◎","ѳ","ō","ơ","ℴ","Ơ","⒪","ⓞ","O","♡","ὄ","Ծ","໐","૦","Ø","⊕","Ф","Θ","¤","◊","Φ"],"p":["ｐ","ṕ","ｱ","ρ","ק","р","የ","ṗ","ᴩ","ᵽ","ₚ","ᵖ","p","ք","ᕈ","℘","Ƥ","⒫","ⓟ","ᑭ","թ","Ṗ","ῥ","þ","ր","ƿ","P","ƥ","Þ","Ƿ","Р"],"q":["ｑ","q","۹","ợ","ዒ","ꝗ","զ","ᕋ","ⓠ","ǫ","ϙ","Ƣ","⒬","ᑫ","ᵠ","Ҩ","ҩ","φ","๑","գ","Ω","ƣ","Ǫ","ƍ","Ø"],"r":["ｒ","ŕ","尺","ɼ","я","г","ѓ","ዪ","ṛ","ʀ","ɍ","ᵣ","ʳ","ᴙ","ɾ","ᖇ","ґ","ℜ","r","Ʀ","⒭","ⓡ","Ŕ","ŗ","Ր","R","Я","ર","®","Ґ"],"s":["ｓ","ś","丂","ร","ѕ","ነ","ṡ","ꜱ","s","ₛ","ˢ","ꙅ","ʂ","ᔕ","﹩","ṧ","ƨ","ş","Ƨ","⒮","ⓢ","S","š","ṩ","ㄎ","$","Ş","ς","ֆ","Տ","Ș","ら","Š"],"t":["ｔ","t","ｲ","Շ","т","ፕ","ẗ","ᴛ","ŧ","ₜ","ᵗ","է","♈","ƭ","ℸ","⒯","ⓣ","T","Ƭ","ƚ","ҭ","†","੮","ȶ","Ŧ","Ե","τ","Ť","⊥","Ʈ"],"u":["ｕ","ú","u","પ","υ","ย","ц","ሁ","ü","ᴜ","ᵾ","ᵤ","ᵘ","U","մ","⋒","ᘎ","μ","Ʋ","⒰","ⓤ","ᑌ","ᙀ","Ʊ","ὗ","Ц","ų","น","ս","ʊ","Ū","Մ","µ"],"v":["ｖ","v","√","۷","ν","ש","ሀ","ṿ","ᴠ","ᵥ","ᵛ","ѵ","Ⅴ","ᐯ","ṽ","Ɣ","⒱","ⓥ","ʋ","Ѵ","Џ","υ","ง","౮","V","∀","ע","¥"],"w":["ｗ","ẃ","w","ฝ","ω","ฬ","ш","ሠ","ẅ","ᴡ","ʷ","ա","ᙡ","ᗯ","ẘ","Ɯ","⒲","ⓦ","ᙎ","ɯ","Ѡ","ᾧ","Щ","щ","ຟ","Ш","ώ"],"x":["ｘ","x","ﾒ","ซ","χ","א","х","ሸ","ẍ","ₓ","ˣ","×","ϰ","✄","Ҳ","⒳","ⓧ","᙭","Ӿ","ẋ","ჯ","૪","Ӽ","X","ҳ","Ж","Ճ","Χ","ж"],"y":["ｙ","ӳ","ﾘ","ץ","у","Ў","ሃ","ÿ","y","ɏ","ʸ","վ","Ꭹ","¥","ƴ","ɣ","Ƴ","⒴","ⓨ","Y","ყ","ч","ẏ","γ","ψ","ฯ","ע","ʏ","￥","Џ","Վ","ϓ","Ϥ","ý"],"z":["ｚ","ź","乙","չ","z","ጊ","ż","ᴢ","ƶ","ᶻ","Հ","ᔓ","ℨ","ẕ","Ȥ","⒵","ⓩ","ᘔ","ȥ","Z","ẓ","ຊ","২","ઽ","ʐ","Ẕ","Ẑ","ւ","շ"],"A":["Ａ","Á","Д","Ä","ᴬ","A","∀","Ѧ","Δ","λ","Λ","Ⓐ","ᗩ","ƛ","ค","ᾋ","ﾑ","α","ձ","Â","Թ","Æ","Ǟ"],"B":["Ｂ","B","Ḅ","Ƀ","ᴮ","β","ᗷ","ℬ","฿","Ⓑ","ᙖ","Ɓ","๒","ß","ϐ","乃","๖","ъ","ɓ","Б","Յ","в","þ"],"C":["Ｃ","Ć","Ҁ","Ċ","Ȼ","C","Ↄ","↻","ᙅ","ℭ","☾","ℂ","Ⓒ","ᑕ","Ƈ","ς","ᶜ","ζ","c","¢","ƈ","Ĉ","Ͼ","Շ","©","ट"],"D":["Ｄ","D","Ḋ","Đ","ᴰ","Ꭰ","ᗪ","Ḏ","Ɗ","Ⓓ","๔","Ɖ","Ð","δ","໓","ժ","Ժ"],"E":["Ｅ","É","Є","Ё","Ɇ","ᴱ","Ǝ","Ɛ","ᕮ","ℰ","€","E","ℇ","Ⓔ","ᙓ","є","Ἕ","乇","ε","ē","£","Ξ","ȝ","ę"],"F":["Ｆ","F","Ḟ","Ƒ","℉","Ⓕ","ᖴ","Ŧ","ᶠ","Ғ","ｷ","f","բ","ƒ","Բ"],"G":["Ｇ","Ǵ","Ġ","Ǥ","G","ᴳ","Ɠ","Ḡ","Ꮆ","Ⓖ","ᘜ","ɠ","ĝ","ງ","ց","ɢ","Գ","g","ζ","ﻮ"],"H":["Ｈ","H","Н","Ḧ","Ħ","ᴴ","Ƕ","ᕼ","ℋ","ℍ","Ⓗ","Ӈ","ђ","Ĥ","Ἤ","ん","h","հ","ɦ","ɧ","৸"],"I":["Ｉ","І","Ї","Ɨ","ᴵ","I","į","ᓮ","ℐ","Ⓘ","ǀ","Ɩ","เ","Ī","Ἷ","ﾉ","ι","i","ﻨ","ĩ","ł","ɿ","Ï"],"J":["Ｊ","J","Ј","Ɉ","ᴶ","ل","Ⓙ","ᒍ","ʆ","ן","Ĵ","ﾌ","j","ว","յ","ʖ","ʝ","¿"],"K":["Ｋ","Ḱ","Ќ","Ḳ","Ꝁ","ᴷ","K","Ҡ","К","Ⓚ","Ƙ","к","ズ","κ","k","ĸ","Қ","ƙ"],"L":["Ｌ","Ĺ","L","Ḷ","Ł","ᴸ","⅃","Ꝉ","Ḻ","ℒ","Ⓛ","ᒪ","Լ","l","Ŀ","ﾚ","ʅ","|","ᄂ"],"M":["Ｍ","Ḿ","М","Ṁ","M","ᴹ","Ɱ","ᗰ","ℳ","♏","Ⓜ","ᙏ","๓","Ṃ","ᄊ","ʍ","ო","ɱ"],"N":["Ｎ","Ń","И","Ṅ","N","ᴺ","ហ","ᘉ","ℵ","ℕ","Ň","Ⓝ","ᑎ","Ɲ","ภ","刀","π","ຖ","ռ","ה","Л","Ռ","Ñ","П"],"O":["Ｏ","Ő","Ф","Ö","Ø","ᴼ","O","ට","〇","☮","Ѻ","ϴ","О","Ⓞ","Ơ","๏","♡","Ὃ","Ծ","ø","໐","օ","Φ","Θ"],"P":["Ｐ","Ṕ","Р","Ṗ","Ᵽ","ᴾ","ꟼ","φ","ᖘ","ℙ","P","Ⓟ","ᑭ","Ƥ","թ","ｱ","ρ","p","þ","Ƿ","ק"],"Q":["Ｑ","Q","Ꝗ","Ҩ","Ⴓ","ℚ","Ⓠ","ᑫ","Ƣ","ợ","ᵠ","φ","๑","զ","Ǫ","q","Ø"],"R":["Ｒ","Ŕ","Я","Ṛ","Ɍ","ᴿ","འ","ℝ","ℛ","Ř","R","Ⓡ","ᖇ","Ʀ","г","Ȓ","尺","r","Ր","®","Ґ"],"S":["Ｓ","Ѕ","Ṡ","S","Ꙅ","Ϛ","ϟ","₴","Տ","∫","Ⓢ","ᔕ","Ƨ","ร","ˢ","Ṩ","ㄎ","$","Ş","§","s","Š"],"T":["Ｔ","T","Г","Ṫ","ᵀ","Ͳ","☂","✝","Ƭ","Ⓣ","t","Ҭ","ｲ","†","է","ƚ","Ŧ","Ե","Ʈ","τ"],"U":["Ｕ","Ű","Ц","Ü","ᵁ","Ա","ᘮ","Ṳ","Ữ","Ⓤ","ᑌ","ᙀ","U","Ʋ","ย","Ʊ","Ȗ","u","น","ս","Ū","Մ","µ","υ"],"V":["Ｖ","V","Ṿ","ⱽ","Ỽ","✔","Ṽ","Ѵ","Ⓥ","ᐯ","Ʋ","Ɣ","v","ᵛ","Џ","υ","ง","ν","ע","¥","ש"],"W":["Ｗ","Ẃ","Щ","Ẅ","W","ᵂ","చ","Ш","Ŵ","Ⓦ","ᗯ","ᙎ","Ɯ","ฬ","Ѡ","ω","ຟ","ա","w"],"X":["Ｘ","X","Ж","Ẍ","ჯ","᙭","✕","卐","Ⓧ","Ҳ","x","ᵡ","Ӿ","Ẋ","ﾒ","χ","×","Ճ","ж","א"],"Y":["Ｙ","Ӳ","Ч","Ÿ","Y","Ɏ","Ӌ","ϒ","Ẏ","У","Ⓨ","Ƴ","ץ","ᵞ","Ὓ","ﾘ","ψ","ฯ","ყ","￥","¥","Џ","Վ","y"],"Z":["Ｚ","Ź","Z","Ż","Ƶ","ɀ","Ẑ","ℤ","Ⓩ","ᘔ","Ȥ","z","ᶻ","Ẕ","乙","ຊ","২","Հ","ւ","շ"],"~":["~"],"!":["！","﹗","❣","‼","!","ᵎ"],"@":["＠","﹫","@"],"#":["＃","﹟","#","♯"],"$":["＄","$"],"%":["％","%"],"^":["^"],"&":["＆","﹠","&"],"*":["＊","﹡","●","*","⊛"],"(":["（","﹙","(","⁽"],")":["）","﹚","ϡ",")","⁾"],"_":["_","▂"],"+":["＋","﹢","☩","✜","+","⊕","⁺"],"-":["－","﹣","✏","➸","-","⊖","⁻"],"=":["＝","=","≕","♒","⊜"],"[":["["],"]":["]"],"\\":["\\","⦸"],"{":["{"],"}":["}"],"|":["|","⦶"],";":["；",";"],"'":["＇","·","‷","❝","'"],":":["：","﹕",":"],"\"":["\"","❞","‴","＂"],"<":["<","«","⧀"],">":[">","⧁"],"?":["？","﹖","⁇","?","ˀ"],",":["，","﹐",",","˒"],".":["．",".","▣","▪","⨀","ˑ"],"/":["／","/","⊘"]};
    return this.split("").reduce(function(a, b, c) {
        let tmp = Object.keys(abcs).filter(x => abcs[x].indexOf(b) !== -1);
        let char = tmp[0] || b;
        a += char;
        return a;
    }, "");
}

//usage
var string = "ｔｒｅｅ";
var formated = string.formatUnicode(); //output: tree

//$.get("http://www.transltr.org/api/translate?text="+input+"&to=RU", function(x) { EOS.chat.send("\u034f"+x.translationText); });
//if (cmd == cmdChar+"netherlands") { if (message.length == cmd.length) { EOS.chat.send("Usage: "+cmdChar+"netherlands text_here."); } else { $.get("http://www.transltr.org/api/translate?text="+encodeURIComponent(input)+"&to=NL", function(x) { EOS.chat.send("\u034fNetherlands: "+x.translationText); }); } }
//EOS.chat.send = function (message) { $.get("http://www.transltr.org/api/translate?text="+message+"&to=RU", function(x) { EOS.client.sendArray([{m:"a", message:"\u034f"+x.translationTextthing}]); }); }

function Translatetorussian(text) { $.get("http://www.transltr.org/api/translate?text="+text+"&to=RU", function(x) { EOS.chat.send(usersinput + ' Translated to Russian is: ' + x.translationText + ' (Again, translations may not be accurate.)'); }); }
function _Translatetorussian(text) { $.get("http://www.transltr.org/api/translate?text="+text+"&to=RU", function(x) { EOS.chat.send(usersinput + ' Translated to Russian is: ' + x.translationText + ''); }); }
function Translatetoenglish(text) { $.get("http://www.transltr.org/api/translate?text="+text+"&to=EN", function(x) { EOS.chat.send('' + x.translationText + ''); }); }



setInterval(function(){ if(batteryenabled) { infinitebattery = false; batteryname = true; chargecommand = true } else { infinitebattery = true; batteryname = false; chargecommand = false; } }, 5000);

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "charge") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { if(chargecommand) { if(battery == 100) { EOS.chat.send( error + 'Unable to charge: Battery is full.'); } else { EOS.chat.send('Battery charged to 100%'); batterything = true;
batterything1 = true;
batterything2 = true;
batterything3 = true; battery = 100; googleCommand = true } } else { EOS.chat.send(error + 'Command not active. The bots battery mode is disabled.') } } else {  } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "latest") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) {
EOS.chat.send('News 1: ' + news + ' || News 2: ' + news2 + ' || The latest command is: ' + latestcmd + '||Other information: ' + otherinfo + '||Coming soon: ' + comingsoon);
EOS.chat.send('Extra: '+extra)
} else {  } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "cake") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie.'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "test") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Test message.'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "7ball") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('The 7ball says: "You weren\'t supposed to find me!"'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "6ball") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('The 6ball says: "6ball.exe has stopped working. EpicOS can check for a solution to the problem."'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "5ball") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('The 5ball says: "Loading."'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "4ball") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('The 4ball says: "4ball.exe is not responding."'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "3ball") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('The 3ball says: "3ball.exe is not responding."'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "160") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('hello. this command is secret. hello. this command is secret. hello. this command is secret. hello. this command is secret.'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "dongers") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('RAISE YOur-- wait no, fuck this.'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "roll") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('its '+cmdChar+'dice btw'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "hello") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('HELLO!!!!!!!! I AM EPICOS !!!!!!11 I AM A CHAT BOT CREATED BY A PERSON HELO!!1! (im super bored so i wrote this command. dont ask)'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "stop") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('OR WHAT?'); } else {  } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "levi") if (banned.includes(msg.p._id)  || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('STOP RERERAIDYING!!!'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "karma") if (banned.includes(msg.p._id)  || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('...'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "denis") if (banned.includes(msg.p._id)   || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Go To Denis'); } else {  } } });

//The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie.
//The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie.
//The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie.

setInterval(function(){ if(batterything) {  if(battery < 30 == true) { EOS.chat.send('Warning! Battery is low! (30%) Use ' + cmdChar + 'charge to charge the battery. '); batterything = false; googleCommand = false; } } }, 2000);
setInterval(function(){ if(batterything1) { battery = battery - 1; } }, 30000);
setInterval(function(){ if(batterything2) { if(battery < 15 == true) { EOS.chat.send('Warning! Battery is at 15% Use ' + cmdChar + 'charge to charge the battery now!'); batterything2 = false } } }, 2000);
setInterval(function(){ if(batterything3) { if(battery < 1 == true) { EOS.chat.send('Warning! Battery is at 0% Shutting down system.. To reactivate the bot, an admin must type ' + cmdChar + 'js resetBattery();'); Power = 'off'; batterything3 = false; batterything2 = false; batterything = false; batterything1 = false;batteryenabled = false;} } }, 2000);
setInterval(function(){ if(infinitebattery) { battery = 100; batterything1 = false; } else { batterything1 = true } }, 2000);



function tumblr(stringystring) {
	if (typeof stringystring !== "string") {
		throw "SyntaxError: tumblr() may only be used with strings.";
	} else {
		var results = [];
		var csto = stringystring.toLowerCase();
		var csm = csto.split(' ');
		for (var i = 0; i < csm.length; i++) {
			var res2 = [];
			wordc = csm[i].split('');
			for (var x = 0; x < wordc.length; x++) {
				if (x % 2 == 0) {
					res2.push(wordc[x].toUpperCase());
				} else {
					res2.push(wordc[x]);
				}
			}
		results.push(res2.join(''));
		}
		fnl = results.join(' ');
		return fnl;
	}
}

// to use: run
// tumblr("string");
notecount = 0; EOS.client.on('n',a=>notecount+=a.n.length);


function rbinary(bin){ array = bin.split(" "); var result = ""; for (var i = 0; i < array.length; i++) { result += String.fromCharCode(parseInt(array[i], 2)); } return result; }

EOS.client.on("a", function (msg) {
        //Josh's template
        var args = msg.a.split(" ");
        var cmd = args[0].toLowerCase();
        args = args.slice(1);
        var sendChat = function(msg) { EOS.chat.send(msg) };
        var name = msg.p.name;

        if (speakChat) {
        var t = new SpeechSynthesisUtterance();
                  t.text = msg.a.slice(0, 512);         // 140 is good.
                  t.lang = 'en-GB';     //en-GB
                  t.rate = 0.75;           //0.75
                  t.pitch = 1.0;        //1.0
                  t.volume = 2.0;       //0.5
                  speechSynthesis.speak(t); } });

msgcount = 0;
EOS.client.on("a", function(msg) { msgcount = msgcount + 1 });

var i = 1;
function spam () {
   setTimeout(function () {
	EOS.press("a0");
	EOS.press("a1");
	EOS.press("a2");
	EOS.press("a3");
	EOS.press("a4");
	EOS.press("a5");
	EOS.press("a6");
	EOS.press("as0");
	EOS.press("as1");
	EOS.press("as2");
	EOS.press("as3");
	EOS.press("as4");
	EOS.press("as5");
	EOS.press("as6");
	EOS.press("b0");
	EOS.press("b1");
	EOS.press("b2");
	EOS.press("b3");
	EOS.press("b4");
	EOS.press("b5");
	EOS.press("b6");
	EOS.press("bs0");
	EOS.press("bs1");
	EOS.press("bs2");
	EOS.press("bs3");
	EOS.press("bs4");
	EOS.press("bs5");
	EOS.press("bs6");
	EOS.press("c0");
	EOS.press("c1");
	EOS.press("c2");
	EOS.press("c3");
	EOS.press("c4");
	EOS.press("c5");
	EOS.press("c6");
	EOS.press("c7");
	EOS.press("cs0");
	EOS.press("cs1");
	EOS.press("cs2");
	EOS.press("cs3");
	EOS.press("cs4");
	EOS.press("cs5");
	EOS.press("cs6");
	EOS.press("d0");
	EOS.press("d1");
	EOS.press("d2");
	EOS.press("d3");
	EOS.press("d4");
	EOS.press("d5");
	EOS.press("d6");
	EOS.press("ds0");
	EOS.press("ds1");
	EOS.press("ds2");
	EOS.press("ds3");
	EOS.press("ds4");
	EOS.press("ds5");
	EOS.press("ds6");
	EOS.press("e0");
	EOS.press("e1");
	EOS.press("e2");
	EOS.press("e3");
	EOS.press("e4");
	EOS.press("e5");
	EOS.press("e6");
	EOS.press("es0");
	EOS.press("es1");
	EOS.press("es2");
	EOS.press("es3");
	EOS.press("es4");
	EOS.press("es5");
	EOS.press("es6");
	EOS.press("f0");
	EOS.press("f1");
	EOS.press("f2");
	EOS.press("f3");
	EOS.press("f4");
	EOS.press("f5");
	EOS.press("f6");
	EOS.press("fs0");
	EOS.press("fs1");
	EOS.press("fs2");
	EOS.press("fs3");
	EOS.press("fs4");
	EOS.press("fs5");
	EOS.press("fs6");
	EOS.press("g0");
	EOS.press("g1");
	EOS.press("g2");
	EOS.press("g3");
	EOS.press("g4");
	EOS.press("g5");
	EOS.press("g6");
	EOS.press("gs0");
	EOS.press("gs1");
	EOS.press("gs2");
	EOS.press("gs3");
	EOS.press("gs4");
	EOS.press("gs5");
	EOS.press("gs6");
      i++;
      if (i < 10) {    // Write how many times you want to spam it for example this is going to spam 10 times

      }
   }, 100)      // Write delay in milliseconds
}





	var googleCommandDelay = 3;

	var div = document.createElement("div");
	div.id = "Div1";
	div.style.display= "none";
	document.body.appendChild(div);


	(function() {
		var cx = '010021570394457971158:qajzusztxwo';
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
			'//www.google.com/cse/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
	})();

	function gcseCallback(query) {
		if (document.readyState != 'complete')
			return google.setOnLoadCallback(gcseCallback, true);
		google.search.cse.element.render({gname:'gsearch', div:'Div1', tag:'searchresults-only', attributes:{webSearchResultSize:1}});
		var element = google.search.cse.element.getElement('gsearch');
		element.execute(query);
		returnResults();
		setTimeout(function(){
		googleavailabe = true}, googleCooldown);
	};
	function getTitle(index){
		var title = document.getElementsByClassName("gsc-thumbnail-inside")[index].textContent;
		return title;
	}

		function getLink(index){
		if (typeof document.getElementsByClassName("gsc-webResult gsc-result")[0].getElementsByClassName("gs-spelling gs-result")[0] != "undefined")
			index++;
		if (typeof document.getElementsByClassName("gsc-webResult gsc-result")[0].getElementsByClassName("gs-spelling")[0] != "undefined")
			index++;
		if (typeof document.getElementsByClassName("gsc-webResult gsc-result")[0].getElementsByClassName("gs-spelling gs-spelling-original")[0] != "undefined")
			index++;
		var title = document.getElementsByClassName("gsc-webResult gsc-result")[index];
		var firstdiv = title.getElementsByClassName("gsc-thumbnail-inside")[0];
		var firstatag = firstdiv.getElementsByTagName("a")[0];
		var link = firstatag.getAttribute("data-ctorig");
		return link;
	}

	function getText(index){
		var txt = document.getElementsByClassName("gs-bidi-start-align gs-snippet")[index].textContent;
		return txt;
	}

	function checkLoaded(index){
		if (typeof document.getElementsByClassName("gs-bidi-start-align gs-snippet")[index] != "undefined" &&
		typeof document.getElementsByClassName("gsc-thumbnail-inside")[index] != "undefined" &&
		typeof document.getElementsByClassName("gsc-webResult gsc-result")[index] != "undefined"){
			return true;
		}
		else {
			return false;
		}
	}

	function checkNoResult(){
		if (typeof document.getElementsByClassName("gs-webResult gs-result gs-no-results-result")[0] != "undefined"){
			return true;
		}
		else{
			return false;
		}
	}
	function returnResults(){
		var intervalId = setInterval(function(){
			if (checkNoResult() == true){
				div.innerHTML = "";
				EOS.chat.send( error + 'Your search - ' + lastsearch + ' - did not match any documents. | Make sure that all words are spelled correctly. | Try different keywords. | Try more general keywords. |');
				clearInterval(intervalId);
			}
			if (checkLoaded(0) == true && checkLoaded(1) == true && checkLoaded(2) == true){
				EOS.chat.send("First result || " + getTitle(0) + ": (" + getLink(0) + ") => " +getText(0));
				EOS.chat.send("Second result || " + getTitle(1) + ": (" + getLink(1) + ") => " +getText(1));
				EOS.chat.send("Third result || " + getTitle(2) + ": (" + getLink(2) + ") => " +getText(2));
				div.innerHTML = "";
				clearInterval(intervalId);
			}
		},25);
	}


EOS.client.on("a", function(msg) {if(AUTOMATICMODERATION){ if(blNames.includes(msg.p.name) == true )  { if(autobanned.includes(msg.p._id) == true) {  } else { EOS.chat.send('User with the id (' + msg.p._id + ') has been added to the ban list. Reason: Autobanned by system, that name is blacklisted.'); autobanned.push(msg.p._id); banned.push(msg.p._id); } } } });

EOS.client.on("participant removed", function(msg) { leavecount = leavecount + 1 });
EOS.client.on("participant added", function(msg) { joincount = joincount + 1 });
welcomemessage='';
EOS.client.on("participant added", function(msg) { if(welcome){EOS.chat.send('Welcome, ' + msg.name + '. '+welcomemessage)}});


function binary(text) { var output = ""; var input = text; for (i=0; i < input.length; i++) { var e=input[i].charCodeAt(0);var s = ""; do{ var a =e%2; e=(e-a)/2; s=a+s; } while(e!=0); while(s.length<8){s="0"+s;} output+=s + " "; } return output; }


function encode(text) { return window.btoa(unescape(encodeURIComponent(text))); }

function decode(text){ return decodeURIComponent(escape(window.atob(text))); }
iannouncedtime=0;

EOS.client.on('a', function (msg) {if(idiots.includes(msg.p._id)){if(idiotmessage){if(iannouncedtime>5){EOS.chat.send('Spam detected. To prevent spam this message has been momentarily disabled.');idiotmessage=false;setTimeout(function(){EOS.chat.send('Variable: idiotmessage set to: true By system.');},60000);} else{iannouncedtime++;EOS.chat.send('The system recommends to ignore the above message posted by the user with the _id: '+msg.p._id+', the name: '+msg.p.name+' and the id: '+msg.p.id+'.');}}}});

RESETTHEIDIOTCOUNTERQUICKLY = setInterval(function(){iannouncedtime=0;},20000);

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"remindme") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send('Usage: ' + cmdChar + 'remindme txt') }  else {  EOS.chat.send(CMDUNFINISHED);  }}}}});
EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"encode") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send('Please input something for me to encode!') }  else {  EOS.chat.send('Encoded: ' + encode(input) + '');  }}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if(Power == "on" == true) { if (cmd == cmdChar+"google") { if( googleCommand == true ){if(!googleavailable){EOS.chat.send('This command has a ' + googleCooldown + ' millisecond cooldown to prevent spam. Please wait and then try again later. Thanks!');} else { if (input == "") { EOS.chat.send('Please input something for me to google!') }  else { EOS.chat.send('[GOOGLE]: Commands temporarily disabled while search is in progress. Processing request..'); lastsearch = input; Power = 'off'; searchHistory.push(lastsearch); setTimeout(function(){ gcseCallback(input); Power = 'on'}, 4000); } }}}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"decode") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else {if(input == "") { EOS.chat.send("Please input something for me to decode! ") }  else {  EOS.chat.send('Decoded: ' + decode(input) + '');  }}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"selectroom") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else {if(input == "") { EOS.chat.send("You are using the command incorrectly. Correct command usage: " + cmdChar + "selectroom <Room Name Here> without the < and >.") }  else {  EOS.chat.send('Selected: '+input+'. Ready to continue. Displaying options.');EOS.chat.send('To connect to a room, type ' + cmdChar + 'join to confirm your connection within 30 seconds.');EOS.chat.send('To send a message to a channel, type '+cmdChar+'channelsend <message here> without the < and > to confirm your option within 30 seconds.');roomselected=true;selectedroom=input;timeout = setTimeout(function(){EOS.chat.send('@'+ msg.p.name+ ' Selected room was reset because you did not select an option within 30 seconds.');roomselected=false;}, 30000);  }}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"say") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else {if(input == "") { EOS.chat.send('Usage: ' + cmdChar + 'say [txt here]') }  else {if(input=='ban me'){EOS.chat.send('Cool.')}else{EOS.chat.send('\u034f' + input);  }}}}}});

respondtostop=true;
EOS.client.on("a", function (msg) {if(banned.includes(msg.p._id)==false){if(respondtostop){if(msg.a.toLowerCase()=='stop'){if(nmpb_online){if(Power2){function nmpb_cl_send(msg){nmpb_cl.sendArray([{m:"a", message: msg}]);};log('Processing.');log('Stopped song on request. Disable this with respondtostop = false;');nmpb_cl_send('/stop');EOS.chat.send('The song has been stopped.');}}}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"translatetobinary") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("Please input something for me to translate.") }  else {  EOS.chat.send('Translated: ' + binary(input) + '.');  }}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"translatefrombinary") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("Please input something for me to translate.") }  else {  EOS.chat.send('Translated: ' + rbinary(input) + '.');  }}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"channelsend") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("Incorrect usage. Usage: " + cmdChar + "") }  else {  EOS.chat.send('One moment.');if(!roomselected){EOS.chat.send('Please type '+cmdChar+'selectroom <room name here> without the < and > and then try again. Thanks.')}else{clearTimeout(timeout);channelSend(selectedroom,message);}}}}}});
gs_cc = false;
gs_sm = false;
function globalSend(message){
rooms = [];
rooms2 = [];
log('_');
log('Initializing..');
if(!gs_sm) {
gs_sm=true;
setTimeout(function() {
log('Loading channel names..');
$('#room').click();
    setTimeout(function(){
    document.dispatchEvent(new MouseEvent("mousedown"));
log('Channel names loaded.');
EOS.chat.send('> Calculated. Estimated time for sending: '+rooms2.length*3+' seconds estimated.');
log('> Calculated. Estimated time for sending: '+rooms2.length*3+' seconds estimated.');
    },10000); }, 2000);
log('Checking if client is already connected..');
if(gs_cc) {log('Client is connected already');} else {
log('Client is not connected');
log('Connecting..');
website = 'www.multiplayerpiano.com';
port = '8080';
gs_cl = new Client("ws://"+website+":"+port);
gs_cl.start();
gs_currentroom=EOS.client.channel._id;
if(EOS.client.channel._id=='lobby'){
gs_currentroom='lolwutsecretlobbybackdoor'};
gs_cl.setChannel(gs_currentroom);
EOS.chat.send('Client connected: website: ' + website + ' port: ' + port + ' room: ' + gs_currentroom);}
gs_counter = -1;
setTimeout(function(){
EOS.chat.send('[EpicOSAnnounceSystem]: Sending..');
function gs_cl_send(msg){
gs_cl.sendArray([{m:"a", message: msg}]);
}
gs_interval = setInterval(function(){
gs_counter++;
gs_cl.setChannel(rooms2[gs_counter]);
setTimeout(function(){
gs_cl.sendArray([{m:"a", message: '[EpicOSAnnounceSystem]: '+message}]);
gs_cl.sendArray([{m:"a", message: '[EpicOSAnnounceSystem]: The above announcement was sent from: ' + gs_currentroom}]);
}, 1000);
if(gs_counter>=rooms2.length){clearInterval(gs_interval);EOS.chat.send('[EpicOSAnnounceSystem]: Announcement complete.');gs_sm=false;gs_cl.setChannel('EpicOSAnnounceSystemClientStorageRoom');}
}, 3000);
}, 15000);
} else {EOS.chat.send('Output: [BUSY] System cannot globally send a message because a global message send is already in progress. Please wait for the system to finish and try again later. Sorry about that.')}
}
cs_cl_connected=false;
cs_sending=false;
function channelSend(chnl,msg){
EOS.chat.send('_');
if(!cs_cl_connected){
website = 'www.multiplayerpiano.com';
port = '8080';
cs_cl = new Client("ws://"+website+":"+port);
cs_cl.start();
cs_currentroom=EOS.client.channel._id;
EOS.chat.send('Client connected.');
cs_cl_connected=true;
}
function cs_cl_send(msg){
cs_cl.sendArray([{m:"a", message: msg}]);
}
if(cs_sending){
EOS.chat.send('[EpicOSMessageSystem]: [BUSY] System cannot send a message to: ' + chnl + ' because a channel message send is already in progress. The system will notify you when the message has been sent and then you can try again.');
} else {
setTimeout(function(){
EOS.chat.send('[EpicOSMessageSystem]: Sending..');
cs_sending=true;
cs_cl.setChannel(chnl);
setTimeout(function(){
cs_cl_send('[EpicOSMessageSystem]: '+msg);
cs_cl_send('[EpicOSMessageSystem]: The above message was sent from: ' + EOS.client.channel._id + '');
cs_sending=false;
EOS.chat.send('[EpicOSMessageSystem]: Message sent successfully.');
}, 1000);
}, 6000);
}
}
EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"globalsend") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("Usage: " + cmdChar + "globalsend <message> without the < and >") }  else {  EOS.chat.send('One moment.'); globalSend(input);  }}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"finduser") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("Usage: " + cmdChar + "findUser <A users name here> without the < and >.") }  else {  EOS.chat.send('One moment.'); findUser(input);}}}}});

function EAP(){
nmpb_autoplay=true;
EOS.chat.send('> Autoplay is enabled. Selecting a song.');
function nmpb_cl_send(msg){
nmpb_cl.sendArray([{m:"a", message: msg}]);
};
nmpb_cl_send('/r');
}

function DAP(){
nmpb_autoplay=false;
EOS.chat.send('> Autoplay is disabled.');
function nmpb_cl_send(msg){
nmpb_cl.sendArray([{m:"a", message: msg}]);
};
}

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"hug") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("User not found") }  else {  EOS.chat.send(msg.p.name + ' hugs ' + info(input).name + '.');  }}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"slap") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("User not found") }  else {  EOS.chat.send(msg.p.name + ' slaps ' + info(input).name + '.');  }}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if(Power == "on" == true) { if (cmd == cmdChar+"suggest") { if (input == "") { EOS.chat.send("Please enter something for me to add to the suggestion list. If an administrator catches you spamming this command and not providing actual suggestions, it may result in a permanent ban from the bot. Thanks for any feedback provided.") }  else { localStorage.suggestions = localStorage.suggestions + ' _ ' + input + ', Suggested by ' + msg.p.name; suggestioncounter = suggestioncounter + 1 ; EOS.chat.send('(Suggestion #' + suggestioncounter + ') Thank you! Your suggestion has been saved. ' + '(' + input + ', Suggested by ' + msg.p.name + ', with the _id ' + msg.p._id + ')');  }}}}});

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "help") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { LoadHelpList(msg); } else {  } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "games") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Games: ' + cmdChar + '8ball, ' + cmdChar + 'dice, ' + cmdChar + 'timetables, ' + cmdChar + 'rockpaperscissors (' + cmdChar + 'rps)'); } else {  } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "amiadmin") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) {EOS.chat.send('One moment.'); if(admins.includes(msg.p._id) == true) { EOS.chat.send('Yes, you are an admin of EpicOS.') } else { EOS.chat.send('No, you are not an admin of EpicOS.') } } else {  } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "dice") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { var diceresponse = diceresponses[Math.floor(Math.random() * diceresponses.length)]; EOS.chat.send( msg.p.name + ' rolled the dice and got: ' + diceresponse + ' out of 6!'); } else {  } } });

EOS.client.on("a", function(msg) { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { if(msg.p.name.includes('﷽')){EOS.chat.send('The user with the _id: ' + msg.p._id + ' has been added to the ban list. Reason: Name\'s including that character are often spam names.');banned.push(msg.p._id); } } else {  } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "yes") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('No'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "no") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Yes'); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "dumbass") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('^^ WARNING ^^');EOS.chat.send('^^ DUMBASS DETECTED ^^');EOS.chat.send('^^ DUMBASS DETECTED ^^');EOS.chat.send('^^ NAME OF DETECTED DUMBASS: '+msg.p.name+' ^^');EOS.chat.send('^^ THIS DUMBASS APPEARS TO BE EXTRA DUMB. PLEASE BE CAREFUL. ^^');EOS.chat.send('^^ DO NOT INTERACT WITH THE DUMBASS AT ANY TIME OTHERWISE YOU MAY BECOME AS DUMB AS THAT DUMBASS ^^'); } else {  } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "ownerhelp") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { LoadHelpList3()} else {  } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "about") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) {EOS.chat.send('EpicOS Chat Entertainment System was originally created in 2015.'); EOS.chat.send('EpicOS was created by Infinity (AKA Epictree160/SublimeHawk6), it has over 70 commands and uses code from Infinity (commands, findUser function, globalSend function, channelSend function, much more.), Squid (Automatic command list updates, command templates, bot suggestions ), Vidkunnsonn (bot suggestions&other), Electrashave (formatUnicode function), Logan (JS command), Chacha (Bot disconnecting message, bot suggestions), CitronSustain (bot suggestions, emojis), Braden T (Tsunami command), Ham\'s Music (nmpblink base&idea, bot suggestions), Anon (bot suggestions) Type ' + cmdChar + 'help to view the command list.');EOS.chat.send('Special thanks to Chris | Male | Neko! For giving me the ideas for many of this system\'s commands!');
EOS.chat.send('Version: ' + version);
EOS.chat.send('> EpicOS, Epic\'s Chat Entertainment System Copyright (©) Sublime Studios 2015'); } else {  } } });

EOS.client.on("a", function(msg) {
if(AUTOMATICMODERATION){
if(Power=='on'){
if(!banned.includes(msg.p._id)){
if(!msg.p._id==EOS.client.getOwnParticipant()._id){
if(msg.p.name.toLowerCase().includes(botname.toLowerCase())){
EOS.chat.send('> You have been denied service to this system due to possible impersonation. Congratulations on that.');
banned.push(msg.p._id);
}
}
}
}
}
});

totalCommands = OOC.length + FCL.length + AOC.length + MPC.length;
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "stats") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { statscount = statscount + 1; EOS.chat.send('Since the last system reboot, ' + notecount + ' notes have been pressed, ' + msgcount + ' messages have been sent, the stats command has been used ' + statscount + ' time(s), ' + joincount + ' person(s) have joined, and ' + leavecount + ' person(s) have left. Command Count: EpicOS currently has ' + FCL.length + ' public commands, ' + OOC.length + ' owner only commands, ' + AOC.length + ' administrator only commands and ' + MPC.length + ' other commands. Total Command Count: ' + totalCommands + ' commands!');} else {  } } });





EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "tsunami") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('TSUNAMI INCOMING!!');  t=0; Object.keys(EOS.piano.keys).forEach(function(key) {setTimeout(function () {EOS.press(key,1)}, t++ * 50)}); // could i make the code not so big?
        t=0; Object.keys(EOS.piano.keys).forEach(function(key) {setTimeout(function () {EOS.press(key,1)}, t++ * 55)}); // yes. yes i could.
        t=0; Object.keys(EOS.piano.keys).forEach(function(key) {setTimeout(function () {EOS.press(key,1)}, t++ * 60)}); // but a m just too lazy for that :3
        t=0; Object.keys(EOS.piano.keys).forEach(function(key) {setTimeout(function () {EOS.press(key,1)}, t++ * 65)}); // maybe in 2.5 ;D
        t=0; Object.keys(EOS.piano.keys).forEach(function(key) {setTimeout(function () {EOS.press(key,1)}, t++ * 70)});
        t=0; Object.keys(EOS.piano.keys).forEach(function(key) {setTimeout(function () {EOS.press(key,1)}, t++ * 50)});
        t=0; Object.keys(EOS.piano.keys).forEach(function(key) {setTimeout(function () {EOS.press(key,1)}, t++ * 55)});
        t=0; Object.keys(EOS.piano.keys).forEach(function(key) {setTimeout(function () {EOS.press(key,1)}, t++ * 60)});
        t=0; Object.keys(EOS.piano.keys).forEach(function(key) {setTimeout(function () {EOS.press(key,1)}, t++ * 65)});
        t=0; Object.keys(EOS.piano.keys).forEach(function(key) {setTimeout(function () {EOS.press(key,1)}, t++ * 70)});
   } else { EOS.chat.send( securityerror + accessdenied ) } } });



//adduserid = "513c055c68e493b4668787e2"; admins = admins + ',' + adduserid + ''; EOS.chat.send('Added user to //the admin list. (' + adduserid + ')');

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "power on") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('EpicOS is now online. Public commands were enabled. Type ' + cmdChar + 'help for the command list.'); localStorage.lastcmdChar = cmdChar;  Power = "on" } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "power off") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('EpicOS is now offline. Public commands were disabled.'); localStorage.lastcmdChar = cmdChar; localStorage.lastbotname = botname; Power = "off" } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "power") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('Usage: ' + cmdChar + 'power [on/off] (User: ' + msg.p.name + ')' ); } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "nmpbpower on") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('NMPB access enabled.'); Power2 = true; } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "nmpbpower off") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('NMPB access disabled.'); Power2 = false;} else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "nmpbpower") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('Usage: ' + cmdChar + 'power2 [on/off] (User: ' + msg.p.name + ')' ); } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "battery on") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('The EpicOS Battery Feature is now enabled.'); batteryenabled=true; } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "battery off") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('The EpicOS Battery Feature is now disabled.'); batteryenabled=false; } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "battery") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('Usage: ' + cmdChar + 'battery [on/off] (User: ' + msg.p.name + ')' ); } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "autoplay on") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send(Responses.confirm[Math.floor(Math.random() * Responses.confirm.length)]); nmpb_autoplay=true;EAP(); } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "autoplay off") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send(Responses.confirm[Math.floor(Math.random() * Responses.confirm.length)]); nmpb_autoplay=false;DAP(); } else { EOS.chat.send( securityerror + accessdenied ) } } });
accessdenied='ACCESS DENIED. '
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "autoplay") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('Usage: ' + cmdChar + 'autoplay [on/off] (User: ' + msg.p.name + ')' ); } else { EOS.chat.send( securityerror + accessdenied ) } } });
setInterval(function(){if(cmdChar=='?'){EOS.chat.send('> This is EpicOS, not CasiOS! Prefix defaulting to: ^');cmdChar='^';}},2000);
announcetrusted=true;
EOS.client.on("participant added", function(msg){if(announcetrusted){ if (trustedusers.includes(msg._id)){ EOS.chat.send('A trusted user has connected: | ' + msg.name + ' | ' + msg._id  + ' | ' + msg.id) } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "welcome on") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('Welcome messages are now enabled. (User: ' + msg.p.name + ')'); welcome = true } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "welcome off") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('Welcome messages are now disabled. (User: ' + msg.p.name + ')'); welcome = false } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "welcome") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('Usage: ' + cmdChar + 'welcome [on/off] (User: ' + msg.p.name + ')'); delete welcome } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "announce") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('[EpicOSAnnounceSystem]: Please use '+cmdChar+'announce <announceid> <on/off>');EOS.chat.send('IDS: 1 - Announce when a bad reputation user has connected | 2 - Announce when a trusted user has connected'); } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "announce 1") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('[EpicOSAnnounceSystem]: Please use '+cmdChar+'announce 1 <on/off>'); } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "announce 2") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('[EpicOSAnnounceSystem]: Please use '+cmdChar+'announce 2 <on/off>'); } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "announce 1 off") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('[EpicOSAnnounceSystem]: announce ID 1 = var idiotmessage: var idiotmessage value set to: false. ||The system will no longer announce when a bad reputation user has connected.');idiotmessage=false; } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "announce 2 off") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('[EpicOSAnnounceSystem]: announce ID 2 = var announcetrusted: var announcetrusted value set to: false. ||The system will no longer announce when a trusted user has connected.');announcetrusted=false; } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "announce 1 on") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('[EpicOSAnnounceSystem]: announce ID 1 = var idiotmessage: var idiotmessage value set to: true. ||The system will now announce when a bad reputation user has connected.');idiotmessage=true; } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "announce 2 on") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('[EpicOSAnnounceSystem]: announce ID 2 = var announcetrusted: var announcetrusted value set to: true. ||The system will now announce when a trusted user has connected.');announcetrusted=true; } else { EOS.chat.send( securityerror + accessdenied ) } } });
// simple JavaScript evaluater in chat - meow :3
if (typeof gScriptLoaded === "undefined") {
    gScriptLoaded = true;

    var args;
    var cmd;
    var input;
    var isAdmin;

                                        // If you want to add more preople use !js admins.push(their_id_here)
                                        // this will allow them to use !js too. But be careful who you trust!


    // simplified

    Object.prototype.toString = function() {
        return JSON.stringify(this);
    }

    EOS.client.on("a", function (msg) {
        args = msg.a.split(' ');
        cmd = args[0];
        input = msg.a.substring(cmd.length).trim();

        isAdmin = false; // this will remain false if the below check fails
                         // if this isAdmin is manually set to true anyone
                         // will be able to use !js. This is very bad
        if (admins.indexOf(msg.p._id) != -1) isAdmin = true; // makes you admin if you're in admins

        // anything inside this block will run if the user is an admin
        if (isAdmin) {
            if (cmd == cmdChar+"js") {
                try {
		if(input.includes('ownerId')){EOS.chat.send('Due to security issues I cannot allow you to interact with the variable: "ownerId". Sorry about that.')}else{
		if(input.includes('location')){EOS.chat.send('Forbidden. "location" is blacklisted. ');EOS.chat.send('> Nice try though.');} else{
                    EOS.chat.send('[' + msg.p.name + '] JavaScript Console Output: ' + eval(input));}}
                } catch (err) {
                    EOS.chat.send('[' + msg.p.name + '] JavaScript Console Output: ' + error + err);
                }
            }
        }  // else they're not admin
    } );
} else {
    console.warn("You've already pasted the script!\nRefresh the page then paste it again");
}


EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "disconnect") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( ownerId == msg.p._id == true ) { EOS.chat.send('Disconnecting EpicOS system, please wait..'); Power = "off"; delete welcome ; EOS.client.stop() } else { EOS.chat.send( securityerror + 'Sorry, this command is for the bot owner only.' ) } } });


EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "restart") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( ownerId == msg.p._id == true ) { setTimeout(function(){ EOS.chat.send('Restarting EpicOS system..'); Power = "off" }, 2000);
setTimeout(function(){ EOS.chat.send('Disconnecting'); EOS.client.stop() }, 4000);
setTimeout(function(){ EOS.client.start() }, 16000);
setTimeout(function(){ }, 20000);
setTimeout(function(){ EOS.chat.send('Connected');EOS.chat.send('EpicOS has successfully restarted. For the command list, type ' + cmdChar + 'help.'); Power = "on" }, 25000); } else { EOS.chat.send( securityerror + 'Sorry, this command is for the bot owner only.' ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "save") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( ownerId == msg.p._id == true ) { EOS.chat.send('Settings were saved.'); localStorage.lastcmdChar = cmdChar; localStorage.lastbotname = botname; } else { EOS.chat.send( securityerror + 'Sorry, this command is for the bot owner only.' ) } } });


EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"ban") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '')) { if (input == "") { EOS.chat.send(error + 'Failed to ban user: Incorrect use. Usage: ' + cmdChar + 'Ban [Users _id here.]') }  else { EOS.chat.send('Banning user.. (' + input + ')');if( input.length == 24 == false) { EOS.chat.send( error + 'Failed to ban user: Please use someones _id. That is not an _id!'); } else { if ( input == ownerId == true ) { EOS.chat.send( error + 'Failed to ban user: You cannot ban the owner.'); } else { if ( admins.includes(input) == true ) { EOS.chat.send( error + 'Failed to ban user: You cannot ban an admin.'); } else { if ( banned.includes(input) == true ) { EOS.chat.send( error + 'Failed to ban user: This id was already found in the ban list.') } else { setTimeout(function(){ EOS.chat.send('User with the id (' + input + ') has been added to the ban list. Please note that whenever the system restarts, the banned user list will be reset.'); banned.push(input) }, 2000); }}}}}}}}}});

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "unbanall") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '')) { EOS.chat.send('Unbanned all users.'); banned = [] } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('start')){
if(msg.a.toLowerCase().includes('nmpb')){
EOS.chat.send('Sure thing. Give me a moment, please.');
setTimeout(function(){
startNMPB();
}, 4000);
}
}
}
}
});
EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('shut')){
if(msg.a.toLowerCase().includes('down')){
EOS.chat.send('I am now shutting down.');
localStorage.lastbotname = botname;localStorage.lastcmdChar = cmdChar;batteryenabled = false;setTimeout(function() {botname = 'Shutting Down..'}, 2000); setTimeout(function() {botname = 'Saving Settings..'}, 4000);setTimeout(function() {botname = 'Disabling Commands..';Power = 'off'}, 8000);setTimeout(function() {botname = 'Disabling Notice System..';clearInterval(LocalStorageRecieverCheckerIntervalThingSuperCollidingSuperButtonPortalButtonPotatoMachineGunMachine)}, 10000); setTimeout(function() {clearInterval(AutoReconnect); botname = 'Stopping services..'}, 14000); setTimeout(function() {EOS.chat.send('Disconnecting Bot..');EOS.client.stop();}, 18000);
}
}
}
}
});
EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('what')){
if(msg.a.toLowerCase().includes('time')){
EOS.chat.send('Here\'s the date and time: ' + Date());
}
}
}
}
});
EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('enable')){
if(msg.a.toLowerCase().includes('autoplay')){
nmpb_autoplay=true;EOS.chat.send('Autoplay is enabled. Checking NMPB status.');
startNMPB();
}
}
}
}
});
//localStorage.history = JSON.stringify(searchHistory);
 //SAVE
//searchHistory = JSON.parse(localStorage.history);
//LOAD
EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('disable')){
if(msg.a.toLowerCase().includes('autoplay')){
nmpb_autoplay=false;EOS.chat.send('Autoplay is disabled. Checking NMPB status.');
startNMPB();
}
}
}
}
});
EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('disable')){
if(msg.a.toLowerCase().includes('commands')){
EOS.chat.send('I have disabled the system\'s commands.');
Power = 'off';
}
}
}
}
});
EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('enable')){
if(msg.a.toLowerCase().includes('commands')){
EOS.chat.send('I have enabled the system\'s commands.');
Power = 'on';
}
}
}
}
});
EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('shut')){
if(msg.a.toLowerCase().includes('up')){
EOS.chat.send('Hm, no.');
}
}
}
}
});
EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('delete')){
if(msg.a.toLowerCase().includes('system32')){
EOS.chat.send('System32 deleted.');
}
}
}
}
});
EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('start')){
if(msg.a.toLowerCase().includes('lockdown')){
chat_buffer = [];
EOS.chat.send('LOCKDOWN INITIATED.');
ownerId = [];
admins = [];
Power = 'off';
batteryenabled=false;
botname = 'LOCKDOWN INITIATED';
clearInterval(cursor_programming_1);
}
}
}
}
});
EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('reset')){
if(msg.a.toLowerCase().includes('room')){
EOS.chat.send('One moment.');
resetRoom();
}
}
}
}
});
EOS.client.on("a", function(msg) {
if(msg.p._id==ownerId){
if(msg.a.toLowerCase().substring(0,'epicos'.length)=='epicos'){
if(msg.a.toLowerCase().includes('reset')){
if(msg.a.toLowerCase().includes('prefix')){
EOS.chat.send('Prefix reset to ^.');
cmdChar = '^';
}
}
}
}
});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"shout") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send('Please input something for me to shout!') }  else {  EOS.chat.send('͏' + input.toUpperCase() + '!!');  }}}}});

function info(name){
		var array = [];
		for (var pl in EOS.client.ppl){
			if (EOS.client.ppl[pl].name.toLowerCase().contains(name.toLowerCase())){
				array.push(EOS.client.ppl[pl]);
			}
		}
		return array[Math.floor(Math.random() * array.length)];
	}

	function follow(part){
		intervalId2 = setInterval(function(){
			EOS.client.sendArray([{m: "m", x: part.x, y: part.y}]);
		},50);
	}

	function circleFollow(part){
		var ypos;
		var xpos;
		var ascend = true;
		var i = -500;
		intervalId2 = setInterval(function(){
			if (ascend == true){
				i++
				xpos = part.x + (0.01)*i;
				ypos = 2*Math.sqrt(Math.pow(5,2) - Math.pow((xpos - part.x) ,2)) + (part.y);
			}
			else if (ascend == false){
				i--;
				xpos = part.x + (0.01)*i;
				ypos = (part.y) - 2*(Math.sqrt(Math.pow(5,2) - Math.pow((xpos - part.x) ,2)));
			}
			if (i == 500){
				ascend = false;
			}
			else if (i == -500){
				ascend = true;
			}
			EOS.client.sendArray([{m: "m", x: xpos, y: ypos}]);
		},5);
	}
titleUpdate=setInterval(function(){
if(!EOS.client.isConnected()){
document.title='[EOS:Disconnected]';
}
}, 5000);
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "suicide") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('' + msg.p.name + ' has committed suicide! :c');} else {  } } });


EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "myinfo") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send( msg.p.name + ', your id is ' + msg.p.id + ', your _id is ' + msg.p._id + ', the length of your name (' + msg.p.name + ') is ' + msg.p.name.length + ' characters long, your color in hex is ' + msg.p.color + ', your color name is "' + new Color(msg.p.color).getName().toLowerCase() + '". Thats all the information i have.'); } else {  } } });


EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "bans") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { if ( banned.length == 0 ) { EOS.chat.send( error + 'No users are currently banned.') } else { EOS.chat.send('Banned users: ' + banned ); } } else {  } } });


EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"8ball") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("Please input a question for the 8ball to answer to.") }  else { var getResponse = ballresponses[Math.floor(Math.random() * ballresponses.length)]; EOS.chat.send('The 8ball says: "' + getResponse + '"')
 }}}}});


EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"relocate") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if( admins.includes('' + msg.p._id + '') == true ) { if (input == "") { EOS.chat.send('Please enter a room name for me to relocate to!') }  else {  EOS.chat.send('Relocating to room: ' + input + '.'); EOS.client.setChannel(input)
; EOS.chat.send('[Connected to room: ' + input + '] Hi! I\'m EpicOS! For the command list, type ' + cmdChar + 'help.')  }}}}}});


EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"prefix") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if( admins.includes('' + msg.p._id + '') == true ) { if (input == "") { EOS.chat.send('Nice try, however the prefix cannot be set to nothing.') }  else {   EOS.chat.send('The prefix has now been set to "' + input + '"' + '! For a list of commands, type ' + input + 'help.'); cmdChar = input  }}}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"rename") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if( admins.includes('' + msg.p._id + '') == true ) { if (input == "") { EOS.chat.send('My name cannot be nothing!') }  else { EOS.chat.send('The system has been renamed to ' + input + '.'); botname = input  }}}}}});


EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "texttospeech") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( ownerId == msg.p._id == true ) { EOS.chat.send('Usage: ' + cmdChar + 'texttospeech [On/Off]');  } else { EOS.chat.send( securityerror + 'Sorry, this command is for the bot owner only.' ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "texttospeech on") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( ownerId == msg.p._id == true ) { EOS.chat.send('Text-to-speech is now enabled.'); speakChat = true } else { EOS.chat.send( securityerror + 'Sorry, this command is for the bot owner only.' ) } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "texttospeech off") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( ownerId == msg.p._id == true ) { EOS.chat.send('Text-to-speech is now disabled.'); speakChat = false } else { EOS.chat.send( securityerror + 'Sorry, this command is for the bot owner only.' ) } } });


function getRandomizer(bottom, top) {
return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}

function startguess(){
EOS.chat.send('SUPERMAGICNUMBERGUESSHACKERMACHINE.EXE ONLINE')
guess=setInterval(function(){
EOS.chat.send(JSON.stringify(getRandomizer(0,1000))
);
}, 1000);
}

function stopguess(){
EOS.chat.send('SUPERMAGICNUMBERGUESSHACKERMACHINE.EXE OFFLINE')
clearInterval(guess);
}

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "navyseals") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can '); EOS.chat.send('get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to '); EOS.chat.send('the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your crappy little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.') } else {  } } });

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"timetables") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { test = Math.random(); test2 = test * 20 ; RN = Math.floor(test2);  Lol = Math.random(); Lol2 = Lol * 20 ; RN2 = Math.floor(Lol2); var getOperator = Operators[Math.floor(Math.random() * Operators.length)]; Question = RN + ' ' + '*' + ' ' + RN2 ; Answer = RN * RN2 ; EOS.chat.send('[MATH]: What is ' + RN + ' ' + '*' + ' ' + RN2 + '? (Answer using ' + cmdChar + 'answer <Answer>)' );  }}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"answer") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if( input == Answer ) { correctanswercount = correctanswercount + 1 ; EOS.chat.send('Correct! ' + msg.p.name + ' answered correctly with ' + input + '! So far ' + correctanswercount + ' questions have been answered correctly.'); Question = '[No question has been set. Use the timetables command to start playing.]' ; Answer = '[No question has been set. Use the timetables command to start playing.]' } else { EOS.chat.send('Your answer was incorrect, ' + msg.p.name + '! The question was: ' + Question + '.');  } }}}});

EOS.client.on("a", function (msg) { if( botname == 'undefined' == true ) { EOS.chat.send( error + 'failed to load the bots name. Do /js botname = "EpicOS" and then /save to fix the problem.') } });

EOS.client.on("a", function (msg) { if( cmdChar == 'undefined' == true ) { EOS.chat.send( error + 'failed to load the bots cmdChar.') } });

function info(name){ for (var pl in EOS.client.ppl){ if (EOS.client.ppl[pl].name.toLowerCase().includes(name.toLowerCase())){ return EOS.client.ppl[pl]; } } }

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "afk") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send( msg.p.name + ' is now marked as AFK. Send any message to be unmarked.');  setTimeout(function(){ afkusersnames.push(msg.p.name); afkusersids.push(msg.p._id); }, 2000); } else {  } } });

EOS.client.on("a", function(msg) { if(afkusersids.includes(msg.p._id)) { if(msg.a.toLowerCase() == 'afk'||msg.a.toLowerCase() == 'brb'||msg.a.toLowerCase() == cmdChar + 'afk') { EOS.chat.send('You already said that, ' + msg.p.name + '!') } else { EOS.chat.send('Welcome back, ' + msg.p.name + '! I have now removed you from the AFK list.'); afkusersids.splice(msg.p._id); afkusersnames.splice(msg.p.name); } } });

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "settings") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '') ) { EOS.chat.send('Settings: The current prefix is ' + cmdChar + '. The current bot name is ' + botname + '. Public commands are ' + Power + '. Text to speech: ' + speakChat + '. The current news: ' + news + ', ' + news2 + '. ADMIN: To change the prefix: ' + cmdChar + 'prefix <Prefix here> To rename the bot: ' + cmdChar + 'rename <Name here> To power the bot on/off: ' + cmdChar + 'power <On/Off> To change the news: ' + cmdChar + 'news <News here>'); EOS.chat.send('Welcome messages: ' + welcome + ' To enable/disable welcome messages: ' + cmdChar + 'welcome [On/Off]'); EOS.chat.send('OWNER: To enable/disable the text-to-speech feature: ' + cmdChar + 'texttospeech <On/Off> To default all settings: ' + cmdChar + 'default')  } else { EOS.chat.send( securityerror + accessdenied ) } } });

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"news") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if( admins.includes('' + msg.p._id + '') == true ) { if (input == "") { EOS.chat.send('Usage: ' + cmdChar + 'news <Whatever you want here>') }  else { EOS.chat.send('The news has been updated from ' + news + ' to ' + input ); news = input }}}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"news2") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if( admins.includes('' + msg.p._id + '') == true ) { if (input == "") { EOS.chat.send('Usage: ' + cmdChar + 'news <Whatever you want here>') }  else { EOS.chat.send('The news has been updated from ' + news2 + ' to ' + input ); news2 = input }}}}}});




var imgData = [ [41,-1,81,60],	[81,60,87,64],	[87,64,92,63],	[92,63,89,73],	[89,73,86,76],	[86,76,80,78],	[80,78,77,80],	[77,80,73,84],	[73,84,71,89],	[71,89,72,91],	[72,91,76,90],	[76,90,80,87],	[80,87,84,82],	[84,82,85,79],	[85,79,89,75],	[89,75,92,71],	[92,71,94,64],	[94,64,92,63],	[41,-1,41,6],	[41,6,40,9],	[40,9,58,39],	[58,39,70,59],	[70,59,70,64],	[70,64,69,67],	[69,67,70,71],	[70,71,68,75],	[68,75,73,74],	[73,74,76,72],	[70,71,59,78],	[59,78,57,76],	[57,76,41,83],	[41,83,36,89],	[36,89,24,112],	[24,112,30,115],	[30,115,37,112],	[37,112,43,109],	[43,109,53,112],	[53,112,55,112],	[55,112,58,113],	[58,113,60,111],	[60,111,60,108],	[60,108,65,104],	[65,104,64,102],	[64,102,73,91],	[76,90,69,98],	[69,98,69,101],	[69,101,66,104],	[66,104,65,106],	[65,106,63,107],	[63,107,57,115],	[57,115,56,122],	[56,122,47,125],	[47,125,44,119],	[44,119,43,112],	[43,112,43,109],	[36,104,39,102],	[39,102,42,101],	[45,101,61,94],	[61,94,66,91],	[58,95,57,86],	[57,86,59,78],	[57,76,55,82],	[55,82,54,90],	[54,90,56,96],	[70,60,74,58],	[74,58,76,56],	[76,56,77,54],	[73,48,72,50],	[72,50,69,53],	[69,53,67,53],	[68,54,70,54],	[70,54,72,52],	[72,52,74,49],	[72,46,70,50],	[70,50,68,51],	[68,51,66,51],	[83,79,79,81],	[79,81,74,86],	[74,86,73,88],	[73,88,77,88],	[77,88,82,83],	[82,83,83,80],	[83,80,83,79],	[81,77,80,74],	[80,74,79,72],	[79,72,80,76],	[80,76,80,78],	[81,86,80,92],	[80,92,79,96],	[79,96,79,88],	[51,111,48,118],	[48,118,48,121],	[48,121,49,124],	[56,121,54,117],	[54,117,52,112],	[42,110,42,119],	[42,119,44,126],	[44,126,44,128],	[44,128,50,136],	[50,136,53,137],	[53,137,55,137],	[55,137,55,134],	[55,134,58,130],	[58,130,64,127],	[64,127,68,127],	[68,127,74,128],	[74,128,76,129],	[76,129,76,123],	[76,123,75,117],	[75,117,75,106],	[76,129,82,126],	[82,126,87,117],	[87,117,88,111],	[88,111,83,114],	[83,114,78,115],	[78,115,70,119],	[70,119,63,122],	[86,112,86,105],	[86,105,84,104],	[84,104,78,104],	[78,104,76,105],	[76,105,66,112],	[70,109,70,119],	[67,104,68,109],	[68,109,69,109],	[69,109,71,107],	[72,106,74,104],	[74,104,78,101],	[78,101,79,100],	[79,100,79,102],	[79,102,80,103],	[81,104,91,89],	[91,89,91,88],	[91,88,93,83],	[93,83,95,77],	[95,77,96,73],	[96,73,98,70],	[98,70,98,68],	[98,68,94,64],	[93,67,94,67],	[94,67,96,69],	[96,69,94,71],	[94,71,92,71],	[84,81,87,85],	[87,85,91,88],	[91,89,86,86],	[86,86,83,84],	[87,117,97,115],	[97,115,100,113],	[100,113,109,103],	[109,103,109,102],	[107,102,111,102],	[111,102,116,98],	[116,98,121,95],	[121,95,129,93],	[129,93,134,92],	[134,92,128,89],	[128,89,121,84],	[121,84,117,83],	[117,83,115,81],	[115,81,111,86],	[111,86,107,89],	[107,89,98,89],	[98,89,96,92],	[96,92,100,95],	[100,95,100,97],	[100,97,105,97],	[105,97,107,99],	[107,99,107,102],	[104,108,98,108],	[98,108,93,109],	[93,109,88,112],	[90,116,91,114],	[91,114,94,112],	[94,112,97,111],	[97,111,102,111],	[101,97,99,100],	[99,100,96,101],	[96,101,93,100],	[93,100,90,106],	[90,106,86,106],	[84,100,92,98],	[92,98,94,95],	[94,95,90,91],	[86,97,92,97],	[93,84,99,85],	[99,85,100,83],	[100,83,102,77],	[102,77,97,72],	[100,83,94,82],	[108,88,106,82],	[106,82,107,81],	[107,81,114,82],	[110,86,108,83],	[133,91,135,92],	[135,92,138,87],	[138,87,138,84],	[138,84,121,84],	[133,91,132,91],	[80,104,78,106],	[78,106,77,110],	[77,110,78,115],	[86,105,84,106],	[84,106,84,113],	[78,106,84,106],	[117,127,111,125],	[111,125,104,121],	[104,121,99,114],	[60,129,61,138],	[61,138,64,144],	[64,144,69,143],	[69,143,75,139],	[75,139,76,136],	[76,136,84,130],	[84,130,84,123],	[66,127,68,132],	[68,132,71,135],	[71,135,74,136],	[74,136,76,136],	[66,144,69,150],	[69,150,74,149],	[74,149,79,147],	[79,147,78,141],	[78,141,75,139],	[69,150,73,159],	[73,159,75,162],	[75,162,83,161],	[83,161,84,161],	[84,161,85,156],	[85,156,83,153],	[83,153,85,149],	[85,149,89,145],	[89,145,90,139],	[90,139,86,130],	[86,130,84,130],	[86,136,81,144],	[79,146,81,147],	[81,147,82,149],	[84,123,91,129],	[91,129,94,130],	[94,130,97,129],	[97,129,97,131],	[97,131,100,135],	[100,135,105,139],	[105,139,111,142],	[111,142,114,142],	[90,131,95,132],	[95,132,96,131],	[96,131,98,135],	[98,135,104,140],	[104,140,110,143],	[110,143,112,143],	[112,143,108,150],	[108,150,102,149],	[102,149,97,149],	[97,149,94,141],	[94,141,90,131],	[98,150,105,151],	[105,151,107,152],	[107,152,104,163],	[104,163,103,178],	[103,171,100,168],	[100,168,101,154],	[101,154,96,153],	[96,153,90,155],	[90,155,84,169],	[84,169,84,181],	[84,181,81,170],	[84,161,84,169],	[98,150,97,151],	[97,151,101,154],	[75,162,74,175],	[74,175,78,187],	[78,187,78,188],	[107,122,110,121],	[110,121,111,119],	[111,119,111,117],	[111,119,114,124],	[114,124,118,128],	[118,128,125,132],	[125,132,126,132],	[126,132,127,133],	[127,133,127,134],	[127,134,120,138],	[120,138,114,142],	[75,170,76,167],	[76,167,78,166],	[78,166,80,167],	[80,167,80,169],	[80,169,78,171],	[78,171,76,171],	[76,171,75,170],	[76,169,76,170],	[76,170,77,170],	[77,170,78,169],	[78,169,78,167],	[78,167,77,167],	[77,167,76,169],	[86,173,89,164],	[89,164,98,165],	[98,165,97,174],	[96,173,96,167],	[96,167,90,166],	[90,166,88,173],	[89,171,91,169],	[91,169,94,169],	[94,169,96,171],	[96,171,94,173],	[94,173,90,173],	[90,173,89,171],	[89,169,91,168],	[91,168,95,168],	[95,168,96,169],	[104,178,105,174],	[105,174,107,160],	[107,160,112,148],	[112,148,121,142],	[121,142,127,139],	[127,139,131,136],	[131,136,131,132],	[131,132,127,129],	[127,129,121,127],	[121,127,116,123],	[116,123,113,119],	[113,119,113,117],	[111,117,113,117],	[113,117,120,116],	[120,116,124,116],	[124,116,128,117],	[128,117,138,116],	[138,116,145,117],	[145,117,154,123],	[154,123,159,128],	[159,128,160,132],	[160,132,145,131],	[145,131,141,129],	[141,129,139,126],	[139,126,135,125],	[160,132,161,137],	[161,137,158,155],	[158,155,160,161],	[160,161,160,170],	[160,170,155,182],	[155,182,151,193],	[151,193,150,195],	[121,116,117,119],	[117,119,119,122],	[119,122,129,128],	[129,128,133,127],	[133,127,139,130],	[139,130,143,136],	[143,136,159,136],	[159,136,161,137],	[143,136,134,144],	[134,144,130,143],	[130,143,125,145],	[125,145,115,152],	[115,152,111,161],	[111,161,107,172],	[107,172,106,177],	[106,177,109,179],	[113,179,131,158],	[131,158,137,156],	[137,156,143,148],	[143,148,146,141],	[146,141,152,145],	[152,145,158,155],	[148,144,140,158],	[140,158,132,160],	[132,160,115,181],	[137,156,140,157],	[140,157,142,157],	[142,157,147,160],	[147,160,148,164],	[148,164,148,170],	[148,170,146,174],	[146,174,149,177],	[149,177,154,180],	[154,180,156,180],	[122,118,124,122],	[124,122,125,122],	[125,122,126,121],	[126,121,128,119],	[128,119,131,121],	[131,121,132,124],	[132,124,129,127],	[132,146,124,151],	[124,151,126,152],	[126,152,125,156],	[125,156,122,160],	[122,160,119,162],	[119,162,115,161],	[115,161,111,168],	[111,168,110,175],	[110,175,111,177],	[123,157,120,160],	[120,160,118,160],	[118,160,116,157],	[116,157,117,154],	[117,154,120,152],	[120,152,122,152],	[122,152,124,154],	[124,154,123,157],	[121,159,122,156],	[122,156,120,154],	[120,154,117,154],	[113,149,115,151],	[115,151,115,152],	[115,152,111,153],	[126,125,126,123],	[126,123,128,121],	[128,121,130,121],	[126,125,127,126],	[127,126,129,126],	[129,126,131,124],	[131,124,130,121],	[127,122,128,122],	[128,122,129,123],	[129,123,130,125],	[63,142,-1,147],	[-1,147,-2,148],	[-2,148,-2,167],	[-2,167,74,169],	[66,145,-1,148],	[-1,148,-2,149],	[29,147,29,145],	[85,180,78,189],	[78,189,72,206],	[72,206,61,210],	[61,210,-10,208],	[-10,208,-12,231],	[-12,231,59,236],	[59,236,70,240],	[70,240,102,245],	[102,245,104,245],	[104,245,128,242],	[128,242,137,243],	[137,243,168,254],	[168,254,182,257],	[182,257,189,263],	[189,263,169,274],	[169,274,183,277],	[183,277,191,272],	[191,272,195,271],	[195,271,213,272],	[213,272,235,259],	[235,259,254,245],	[254,245,264,240],	[264,240,272,235],	[272,209,242,225],	[242,225,210,234],	[210,234,176,221],	[176,221,152,217],	[152,217,131,216],	[131,216,127,218],	[127,218,117,218],	[117,218,109,215],	[109,215,88,214],	[88,214,81,223],	[81,223,88,231],	[88,231,90,235],	[90,235,103,245],	[85,178,85,183],	[85,183,110,184],	[110,184,115,188],	[115,188,141,189],	[141,189,162,217],	[165,215,142,182],	[142,182,117,182],	[117,182,113,179],	[113,179,86,177],	[86,177,85,178],	[86,178,86,182],	[86,182,110,182],	[110,182,115,186],	[115,186,141,187],	[141,187,141,189],	[141,187,142,182],	[151,196,149,199],	[149,199,132,200],	[132,200,121,204],	[121,204,109,203],	[109,203,100,194],	[100,194,83,193],	[83,193,78,191],	[88,232,93,226],	[93,226,106,224],	[106,224,104,229],	[104,229,95,231],	[95,231,92,235],	[106,224,115,233],	[115,233,114,241],	[114,241,112,244],	[106,244,109,241],	[109,241,110,235],	[110,235,104,229],	[72,207,71,209],	[71,209,60,212],	[60,212,-9,210],	[-9,210,-10,211],	[29,209,29,210],	[154,249,169,240],	[169,240,178,235],	[178,235,181,231],	[181,231,181,226],	[181,226,176,221],	[210,234,208,237],	[208,237,199,241],	[199,241,193,247],	[193,247,186,255],	[186,255,181,257],	[189,263,207,261],	[207,261,221,262],	[221,262,229,259],	[229,259,243,250],	[243,250,256,244],	[271,224,251,240],	[251,240,238,245],	[238,245,222,250],	[222,250,208,261],	[172,273,182,274],	[182,274,187,272],	[104,121,112,106],	[112,106,119,98],	[119,98,139,97],	[139,97,143,99],	[143,99,164,100],	[164,100,164,105],	[164,105,141,105],	[141,105,137,101],	[137,101,116,102],	[140,98,139,101],	[111,110,125,111],	[125,111,127,116],	[127,116,142,112],	[142,112,156,122],	[156,122,157,126],	[136,116,142,114],	[142,114,155,123],	[155,123,156,125],	[150,118,152,115],	[152,115,158,113],	[158,113,164,113],	[164,113,160,105],	[164,113,168,122],	[168,122,169,125],	[169,125,172,124],	[172,124,164,105],	[163,135,172,131],	[172,131,179,130],	[179,130,181,128],	[181,128,181,126],	[172,124,178,126],	[178,126,181,126],	[181,126,185,124],	[185,124,192,125],	[192,125,201,123],	[201,123,206,120],	[206,120,209,119],	[209,119,216,111],	[216,111,223,103],	[223,103,236,96],	[236,96,272,71],	[185,152,200,149],	[200,149,212,137],	[212,137,224,135],	[224,135,208,152],	[208,152,220,151],	[220,151,231,139],	[231,139,241,134],	[241,134,256,121],	[256,121,272,105],	[224,135,227,135],	[227,135,237,124],	[237,124,260,107],	[260,107,272,98],	[271,91,254,106],	[254,106,237,116],	[237,116,234,120],	[234,120,227,132],	[232,134,216,149],	[216,149,212,150],	[206,120,206,126],	[206,126,202,133],	[202,133,195,141],	[195,141,190,150],	[178,144,184,135],	[184,135,185,127],	[185,127,185,124],	[160,132,165,140],	[165,140,173,151],	[173,151,179,167],	[179,167,181,173],	[181,173,177,176],	[177,176,169,179],	[169,179,160,183],	[160,183,153,188],	[155,197,166,186],	[166,186,176,183],	[176,183,188,180],	[188,180,192,176],	[192,176,191,171],	[191,171,184,158],	[184,158,179,148],	[179,148,175,142],	[175,142,170,140],	[170,140,165,140],	[176,143,192,159],	[192,159,197,169],	[197,169,205,175],	[205,175,206,179],	[206,179,196,191],	[196,191,183,197],	[183,197,176,203],	[176,203,170,215],	[170,215,165,219],	[192,159,206,167],	[206,167,216,172],	[216,172,223,179],	[223,179,226,182],	[226,182,226,189],	[226,189,221,200],	[221,200,214,207],	[214,207,204,214],	[204,214,195,220],	[195,220,191,227],	[180,200,184,207],	[184,207,206,213],	[157,185,160,192],	[160,192,169,199],	[169,199,177,202],	[165,202,162,209],	[188,214,184,220],	[211,225,207,229],	[207,212,212,217],	[212,217,245,223],	[218,174,223,175],	[223,175,240,181],	[240,181,249,182],	[249,182,254,188],	[254,188,262,192],	[264,204,263,208],	[263,208,262,212],	[250,183,268,182],	[228,188,237,190],	[207,180,215,182],	[194,178,197,179],	[187,174,183,173] ];

var drawIndex = 0, imageScale = 0.8;
function drawImage(x, y) {
    setTimeout(function () {
        /* Divide by two because aspect ratio stretches things */
        EOS.addons.draw.mkline(x+imgData[drawIndex][1]/2*imageScale,
                               y+imgData[drawIndex][0]*imageScale,
                               x+imgData[drawIndex][3]/2*imageScale,
                               y+imgData[drawIndex][2]*imageScale, 1);
        drawIndex++;
        if (drawIndex < imgData.length)
            drawImage(x, y);
        else
            drawIndex = 0;
    }, 15)
}

//drawImage (100, 80);
//█
//for (i = 0; i < 255; i++) { EOS.addons.draw.mkline(0,i,255,i,10) }



EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "ayy-lmao") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" ==  true) { EOS.chat.send("░█▀▀█ ▒█░░▒█ ▒█░░▒█ 　 ▒█░░░ ▒█▀▄▀█ ░█▀▀█ ▒█▀▀▀█ "); setTimeout(function () { EOS.chat.send("▒█▄▄█ ▒█▄▄▄█ ▒█▄▄▄█ 　 ▒█░░░ ▒█▒█▒█ ▒█▄▄█ ▒█░░▒█ "); }, 300); setTimeout(function () { EOS.chat.send("▒█░▒█ ░░▒█░░ ░░▒█░░ 　 ▒█▄▄█ ▒█░░▒█ ▒█░▒█ ▒█▄▄▄█ "); }, 400); } else {  } } });

function retardMode() { EOS.chat.send('Retard mode is now activated. To disable, reset the system.'); cmdChar = 'helphelp'; setTimeout(function () { EOS.chat.send( tumblr('EpicOS, created by undefined, is now active (Retard edition) for command list type ') + cmdChar + 'help'); }, 4000);   botname = 'NaN'; error = 'o noes! error occured!!!!!:::'; securityerror = 'no u no do that!'; accessdenied = 'u no admin access denyeed!!' ; admins = []; ownerId = ''; joincount = '66666666'; news = 'n0 news has ben set!! ';news2 = 'no00 neWs has beeN set!)'; };

function banall() { EOS.chat.send('The bot is now useless, as all users have been added to the ban list :))))'); banned = EOS.client.ppl }

words1= ['light','thunder','extreme','aww','war','ass','afk','and','all','ball','balls','bitch','ban','bin','big','like','lick','flick','stick','dick','licker','shit','moron','stupid','dumb','retard','retarded','eat','eater','ate','eating','eats','ant','suck','sucker','fuck','fudge','cheese','camera','house','hoe','hoes','hose','word','wording','words','wank','wanker','wink','win','woah','wew','wow','how','what','when','why','tit','tits','piss','retard','retarded','stupid','dumb','ass','hole','small','wood','woof','wedding','whore','went','would','you','kill','your','self','gay','test','nag','fag','hag','tag','dagger','java','script','is','cool','i','hate','you','okay','ok','death','deaf','done','dong','bing','bong','ping','pong','shitter','cunt','joke','pole','chair','wine glass','metal pole','door','plate'];
objects = ['chair','wine glass','metal pole','door','plate'];

function generateWord() { EOS.chat.send('Randomly generated word: ' + randomWord() + randomWord() + randomWord() + '.')  }
function randomWord() { return words1[Math.floor(Math.random() * words1.length)]; };

function meow() { return EOS.client.ppl[Object.keys(EOS.client.ppl)[Math.round(Math.random() * EOS.client.channel.count)]].name; }

function insult() { return EOS.chat.send( meow() + ' is a ' + randomWord() + ' ' + randomWord() + ' ' +randomWord() ) }

rpsr = ['paper','rock','scissors'];
function rpsrresponse() { rpsresponsevar = rpsr[Math.floor(Math.random() * rpsr.length)]; return rpsresponsevar;  };
function rps(lol) {lol = lol.toLowerCase(); if(lol == 'paper') { EOS.chat.send('[RPS]: You chose paper. I chose ' + rpsrresponse()) } else { if(lol == 'rock') { EOS.chat.send('[RPS]: You chose rock. I chose ' + rpsrresponse() + '') } else { if(lol == 'scissors') { EOS.chat.send('[RPS]: You chose scissors. I chose ' + rpsrresponse() + '') } else { EOS.chat.send( error + 'Incorrect use. Usage: ' + cmdChar + 'rockpaperscissors <Paper/Rock/Scissors> (' + cmdChar + 'rps)') } } } }


function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"rps") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("[RPS] Welcome to Rock Paper Scissors! To start playing: " + cmdChar + "rockpaperscissors <Paper/Rock/Scissors> Example: " + cmdChar + "rockpaperscissors rock") }  else { rps(input) }}}}});
EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"rockpaperscissors") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("[RPS] Welcome to Rock Paper Scissors! To start playing: " + cmdChar + "rockpaperscissors <Paper/Rock/Scissors> Example: " + cmdChar + "rockpaperscissors rock") }  else { rps(input) }}}}});
function resetBattery() { battery = 100; Power = 'on'; batterything = true; batterything1 = true; batterything2 = true; batterything3 = true; googleCommand = true; batteryenabled = true }


EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"reverse") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("Please input something for me to reverse.") }  else {  EOS.chat.send('Reversed: ' + reverse(input) + '');  }}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"op") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '')) { if (input == "") { EOS.chat.send('Usage: ' + cmdChar + 'op [Users _id/name]') } else { test = input; if(admins.includes(info(test)._id) == true) {EOS.chat.send('This user is already opped.') } else {if(input.toLowerCase() == 'anonymous') {EOS.chat.send(error + 'You cannot op this user, all anonymous users are denied access to EpicOS.')} else { admins.push(info(test)._id); name = info(test).name; EOS.chat.send('User ' + name + ' is now an admin of EpicOS.');  }}}}}}}});
EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"deop") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( admins.includes('' + msg.p._id + '')) { if (input == "") { EOS.chat.send('Usage: ' + cmdChar + 'deop [Users _id/name]') } else { test = input; if(admins.includes(info(test)._id) == false) { EOS.chat.send("Explain to me how you deop a user that isn't opped in the first place?") } else { admins.pop(info(test)._id); name = info(test).name; EOS.chat.send('User ' + name + ' is no longer an admin of EpicOS.'); }}}}}}});
EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"underline") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send('Usage: ' + cmdChar + 'Underline [Text_Here]') }  else {  EOS.chat.send('Result: ' + underline(input) + '');  }}}}});
boomenabled=true;
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "boom") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) {if(boomenabled){ EOS.chat.send('BOOM!!'); spam();}else{EOS.chat.send('Apologies, this command has been disabled by an administrator.') }} else {  } } });

function Rename(name) { botname = name }

function load() { Rename('Loading..'); TimeID = setInterval(function() { setTimeout(function() { Rename('Loading.') }, 1000); setTimeout(function() { Rename('Loading..') }, 2000); setTimeout(function() { Rename('Loading...') }, 3000); }, 2000); setTimeout(function() { clearInterval(TimeID); setTimeout(function() { Rename('Done!') }, 3000); }, 10000); }

setInterval(function() { if(battery > 100 == true) { EOS.chat.send(error + 'Oops! it looks like an error occurred with the bots battery feature. Default settings have been restored.'); battery = 100; batteryenabled = false; batteryenabled = true; } else {  } }, 1000);
setInterval(function() { if(battery < 0) { EOS.chat.send(error + 'Oops! it looks like an error occurred with the bots battery feature. Unexpected number "' + battery + '. Default settings have been restored.'); battery = 100; batteryenabled = false; batteryenabled = true; } else {  } }, 1000);

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"zalgo") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("Please input something for me to convert.") }  else {  EOS.chat.send('Converted: ' + Z.generate(input) + '') }}}}});

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar2.toLowerCase() + '_' + 'kys') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( ownerId == msg.p._id == true ) { EOS.chat.send('I dont believe that would be possible since i am a bot.') } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar2.toLowerCase() + '_' + 'test') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( ownerId == msg.p._id == true ) { EOS.chat.send('Bot is working!') } else {  } } });
EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar2.toLowerCase() + "_addname") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if( ownerId == msg.p._id == true ) { if (input == "") { EOS.chat.send("You didn't specify anything for me to add to the blacklist. :/") } else { EOS.chat.send('I have blacklisted the name ' + input + '.'); blNames.push(input) }}}}}});
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar2.toLowerCase() + '_' + 'hi') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( ownerId == msg.p._id == true ) { EOS.chat.send('Hi.') } else {  } } });


function autocorrect(string) { userinput = string; firstcharacter = userinput.charAt(0); correctedfirstc = firstcharacter.toUpperCase(); thing0 = userinput. correctedsentence =  correctedfirstc + thing0 + "."; if(userinput.charAt(userinput.length - 1) == '.' == true) { correctedsentence =  correctedfirstc + thing0 } return correctedsentence}
kickbantime = 3000000;
banonline=false;
function startBanClient(){
banonline=true;
log('*** Ban announcement client online in test/awkward. ***')
setTimeout(function(){
website = 'www.multiplayerpiano.com';
port = '8080';
banclient = new Client("ws://"+website+":"+port);
banclient.start();
banclient.setChannel('test/awkward');
setTimeout(function(){
bcs('> The EpicOS chat bot is being hosted in: ' + EOS.client.channel._id + ' right now! Head there and use ' +  cmdChar + 'help to view the systems command list!')
}, 1000);
}, 6000);
}
function bcs(msg){
banclient.sendArray([{m:"a", message: msg}]);
}
banmsg = 'You were banned from the current room EpicOS is in because of spam or refusal to do what an administrator says';
banmsg2 = 'You may wait for your ban to expire here or join another room.';
function kickban(name) {
	if (EOS.client.isOwner()) {
		userid = info(name)._id;
		EOS.client.sendArray([{m: "kickban", _id: userid, ms: kickbantime}]);
		EOS.chat.send('I have banned ' + info(name).name + ' from the room ' + EOS.client.channel._id + '. Goodbye, ' + info(name).name + '.');
		bcs('@'+info(name).name+' '+banmsg);
		bcs('@'+info(name).name+' '+banmsg2);
	} else {
		EOS.chat.send('System executed: EOS.client.sendArray([{m: "kickban", _id: userid, ms: kickbantime}]);');EOS.chat.send(error + 'Unable to ban user. It appears I do not have the crown. If you meant to ban the user from the bot, please type ' + cmdChar + 'ban ' + info(name)._id + '');
	}
}


EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"kiss") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send("User not found.") }  else {  EOS.chat.send(msg.p.name + ' kisses ' + info(input).name + '`s lips.');  }}}}});
function SEOS() { interval = setInterval(function(){ botoname2 = botname;botname = 'EpicOS is currently updating...'; }, 1000);}

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == 'brb') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send( msg.p.name + ' is now marked as AFK. Send any message to be unmarked.');  setTimeout(function(){ afkusersnames.push(msg.p.name); afkusersids.push(msg.p._id); }, 2000) } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == 'afk') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send( msg.p.name + ' is now marked as AFK. Send any message to be unmarked.');  setTimeout(function(){ afkusersnames.push(msg.p.name); afkusersids.push(msg.p._id); }, 2000) } else {  } } });



EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"kickban") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if( admins.includes('' + msg.p._id + '') == true ) { if (input == "") { EOS.chat.send('Input a name to ban.') }  else { kickban(input) }}}}}});

function UpdateLocalStorage() { localStorage.admins = []; localStorage.autoMutes = [];  }
commandUnfinished = 'Woah woah woah, hold the fuck up. This command is still being coded!';

uptime_hours=0;
uptime_minutes=0;
uptime_seconds=0;
uptime_milliseconds=0;
uptime_microseconds=0;
uptime_nanoseconds=0;
uptime_hours_i=setInterval(function(){
uptime_hours++;
},3.6e+6);
uptime_minutes_i=setInterval(function(){
uptime_minutes++;
},60000);
uptime_seconds_i=setInterval(function(){
uptime_seconds++;
},1000);
uptime_milliseconds_i=setInterval(function(){
uptime_milliseconds++;
},1);
uptime_microseconds_i=setInterval(function(){
uptime_microseconds++;
},0.001);
uptime_nanoseconds_i=setInterval(function(){
uptime_nanoseconds++;
},1e-6);

function updateRoomColor(colorcode){
EOS.chat.send('Done!')
EOS.client.sendArray([{ m: 'chset', set: { color: '#000000'} }])
;
}
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == "thanks") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send("You're whalecum :D") } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == "thank you") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send("You're whalecum :D") } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "lenny") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send("( ͡° ͜ʖ ͡°( ͡° ͜ʖ ͡°( ͡° ͜ʖ ͡°( ͡° ͜ʖ ͡°)͡° ͜ʖ ͡°) ͡° ͜ʖ ͡°)͡° ͜ʖ ͡°)") } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "uptime") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Uptime: '+uptime_hours+' hours, '+uptime_minutes+' minutes, '+uptime_seconds+' seconds, '+uptime_milliseconds+' milliseconds, '+uptime_microseconds+' microseconds and '+uptime_nanoseconds+' nanoseconds.') } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "fact") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { Fact();} else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "time") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send("The time for me is: " + Date() + '.') } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "generaterpname") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { RandomName();} else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "joke") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { GenerateJoke(); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "pun") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { GeneratePun(); } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "sink") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('THE SHIP IS SINKING!!') } else {  } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == "gtg"||msg.a.toLowerCase() == 'bye') if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { EOS.chat.send('Goodbye, ' + msg.p.name + '. Come again soon!') } else {  } } });
Jokes = ["Why is 88 better than 69? Because you get ate twice.","Yo' mama so fat, when she was a baby, she took a bath with a rubber albatross.","Yo' mama so fat, that when she wears a yellow rain jacket, people think she's a taxi cab.","Yo mama so fat, her portrait fell off the wall","Yo daddy's so ugly, when he looked out the window he was arrested for mooning!","Yo mama so fat, she has a real horse on her polo shirt.","Yo mama so stupid, she walked into an antique shop and asked, `What's new?`","Yo' Mama is so stupid, she saw a sign that said, 'Airport Left,' so she turned around and went home.","Yo' Mama is so ugly, when she ran away from home, her parents called the dog catcher.","Yo' Mama is so fat, she couldn't identify a picture of her feet.","Yo' Mama is so fat, when she went skydiving, she caused an eclipse.","Yo' Mama is so fat, when she left her home country, the population dropped by 10%.","Yo' Mama is so ugly, she couldn't get a date on a calendar.","Yo' Mama is so stupid, she put lipstick on hr forehead to make up her mind."];

EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == "generaterpname") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (Power == "on" == true) { RandomName(); } else {  } } });

function GenerateJoke(){EOS.chat.send('Joke: ' + Jokes[Math.floor(Math.random() * Jokes.length)] + '.');}

Facts = ['Root beer is a carbonated, sweetened beverage, originally manufactured using the root of the sassafras tree, or its bark, as the primary flavor. Root beer, popularized in North America, comes in two forms: alcoholic and soft drink.'
,'Giant Jupiter is almost three times heavier than all the other eight planets put together. This sounds like a simple, .straightforward answer to the question, but there is more to it. Jupiter is 1,318 times . to an equal volume of water.'
,'In the Northern Hemisphere, winter generally begins on December 21 or 22. This is the winter solstice, the day of the year with the shortest period of daylight. Summer begins on June 20 or 21, the summer solstice, which has the most daylight of any day in the year.'
,'Flame color varies depending on what you\'re burning and how hot it is. Color variation within in a flame is caused by uneven temperature. Typically, the hottest part of a flame -- the base -- glows blue, and the cooler parts at the top glow orange or yellow.'];

Names = ['John','Sarah','Chloe','Cadence','Jack','David','Robert','Denis','Robin','Diana','Cherry','Mari','Justin','Daniel','Mary','Claire'];
Genders = ['Male','Female'];
Professions = ['Magician','Neko','Rabbit','Human','Judge','Builder','Inventor','Writer','Pianist','Actor','Vampire','Lion','Robot','Shadow','Cat/Can turn invisible','Wolf','Singer','Writer','Comedian','Bus Driver','Programmer','Designer','Artist'];
premadeNames = ['John/Male/Magician','Sarah/female/Neko','Chloe/Female/Rabbit','Cadence/Female/Human','Jack/Male/Demon','David/Male/Judge','Robert/Male/Inventor','Denis/Male/Writer','Robin/Male/Pianist','Diana/Female/Acter','Cherry/Female/Builder','Mari/Female/Vampire','Justin/Male/Robot','Daniel/Male/Wolf','Mary/Female/Singer','Claire/Female/Heroine']
function RandomName() {EOS.chat.send('Random Roleplay Name: ' + Names[Math.floor(Math.random() * Names.length)]+'/'+Genders[Math.floor(Math.random() * Genders.length)]+'/'+Professions[Math.floor(Math.random() * Professions.length)])}

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"kill") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") {Item=RandomItem(); EOS.chat.send(msg.p.name + ' kills their invisible friend with a ' + Item + '. However, since nobody was ever really there, the ' + Item + ' falls down and lands onto ' + msg.p.name + '`s foot, ' + msg.p.name + ' screams in pain.') } else {  EOS.chat.send(msg.p.name + ' kills ' + info(input).name + ' with a ' + RandomItem() + '. ' + info(input).name + ' screams in pain.');  }}}}});
EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"drink") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send(msg.p.name + ' gets a cup and pours some invisible liquid into it. They attempt to drink it; nothing comes out of the cup.') } else {  EOS.chat.send(msg.p.name + ' grabs a cup, pours some ' + input + ' into it, and drinks it.');  }}}}});
EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"eat") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send(msg.p.name + ' eats nothing and starves to death. Good job.') } else {  EOS.chat.send(msg.p.name + ' eats some ' + input + '.');  }}}}});
EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"invent") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send(msg.p.name + ' invents an invisible machine that does not do anything. Yay.') } else {  EOS.chat.send(msg.p.name + ' HAS INVENTED SOMETHING NEW! They call it: ' + input + '!');  }}}}});

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"double") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if (input == "") { EOS.chat.send('What do you want me to double? Use ' + cmdChar + 'double any number here'); } else {  EOS.chat.send('Doubled: ' + input * 2 + ''); }}}}});

CodeVerify = true;
VerifyCodeEnabled = true;
VerificationCode = Math.random() * 1000000;


function ResetPasscode() { EOS.chat.send('Verification system unlocked. A new code has been generated. If you are an admin, to view the code, move this system to a private room and type ' + cmdChar + 'js VerificationCode. This will display the code in the chat. Alternatively, if you are near the computer that runs this bot, the code is now being displayed in the console.');VerificationCode=Math.random();VerifyCodeEnabled = true;CodeVerify = true; }
//Oh yeah, somebody once found out the code and got admin.
//then somebody else used the same code and it worked because for some reason the system didn't generate a new one. luckily, this has since been fixed.

function VerifyCode(PassCode,id,name) { if(VerifyCodeEnabled) { if(PassCode == VerificationCode) {EOS.chat.send('Welcome, ' + name + ', I have added you to the admin list. System locked. This command will be available again and the system will generate a new code after a certain amount of time.');setTimeout(function(){ResetPasscode();}, 60000);admins.push(id);CodeVerify = false;} else {EOS.chat.send('Code incorrect. System locked. Please try again after 60 seconds.');VerifyCodeEnabled = false;CodeVerify = false;setTimeout(function() {ResetPasscode();}, 60000); }} else {EOS.chat.send(error + 'Access Denied.')}}

EOS.client.on("a", function (msg) { var cmd = msg.a.split(' ')[0].toLowerCase(); var input = msg.a.substring(cmd.length).trim(); if(Power == "on" == true) { if (cmd == cmdChar+"verify") { if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if(CodeVerify) { if(input == "") {  } else {  EOS.chat.send('Verifying..');VerifyCode(input,msg.p._id,msg.p.name);}}}}}});

Puns = ["I wasn't originally going to get a brain transplant, but then I changed my mind. Colin Thomas -","Why don't some couples go to the gym? Because some relationships don't work out.","I'd tell you a chemistry joke but I know I wouldn't get a reaction.","Have you ever tried to eat a clock? It's very time consuming.","Why don't programmers like nature? It has too many bugs.","Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.","Yesterday I accidentally swallowed some food coloring. The doctor says I'm OK, but I feel like I've dyed a little inside.","I wondered why the baseball was getting bigger. Then it hit me.","I'd tell you a chemistry joke but I know I wouldn't get a reaction."]
function GeneratePun() { EOS.chat.send('Pun: ' + Puns[Math.floor(Math.random() * Puns.length)] + '') }
Items = ['keyboard','flower pot','pillow','lamp','floor board','roll of tissue paper','pizza box','happy meal','drum','chicken nugget','flower pot'];
function RandomItem() {return Items[Math.floor(Math.random() * Items.length)]}
function Fact() {EOS.chat.send('Fact: ' + Facts[Math.floor(Math.random() * Facts.length)] + '.')};

Dares = ['Do an impression of your favorite celebrity','Close your eyes and send a blind text to a random person','Go grab a broom and do your best tango','Give a 3 minute stand-up comedy routine','Break Dance','Make up a story about the item to your right','Sing the alphabet without moving your mouth','Do your best president impression','Yell out the first word that comes to your mind right now','Call the pizza place and order 300 sardine pizzas','Call the pizza place and order 300 sardine pizzas','Pound on your chest and act like a gorilla for the next minute','Sing everything you say for the next 10 minutes','Give a foot massage','Say the alphabet backwards in 15 seconds']


function RandomDare() { EOS.chat.send("Dare: " + Dares[Math.floor(Math.random() * Dares.length)] + "."); }

//Joke Generator /
//Story Command /
//Fact Command /
//Kill Command /
//Pun Generator /
//Gamble Command
//Ship Command
//Fuck Command /
//Time Command /
//Sink Command /
//Drink Command /
//Eat Command /
//Rape Command
//Name Generator /
//Invent Command /
//Truth or dare Generator /

//Joke Generator
//Story Command
//Fact Command
//Kill Command
//Pun Generator
//Gamble Command
//Ship Command
//Fuck Command
//Time Command
//Sink Command
//Drink Command
//Eat Command
//Rape Command
//Name Generator
//Invent Command
//Truth or dare Generator
function spawnClients2() {a = 1;
 let client = "client" + a; if (!tracker[client]) {tracker[client] = new Client("ws://" + window.location.hostname + ":443");tracker[client].setChannel('_-Hotel Balcony-_ [ #1'); tracker[client].start(); }
a = a + 1;let client = "client" + a; if (!tracker[client]) {tracker[client] = new Client("ws://" + window.location.hostname + ":443");tracker[client].setChannel('_-Hotel Balcony-_ [ #2'); tracker[client].start(); }
a = a + 1;let client = "client" + a; if (!tracker[client]) {tracker[client] = new Client("ws://" + window.location.hostname + ":443");tracker[client].setChannel('_-Hotel Balcony-_ [ #3'); tracker[client].start(); }
a = a + 1;let client = "client" + a; if (!tracker[client]) {tracker[client] = new Client("ws://" + window.location.hostname + ":443");tracker[client].setChannel('_-Hotel Balcony-_ [ #4'); tracker[client].start(); }
}
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "shutdown") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( ownerId == msg.p._id == true ) {EOS.chat.send('Shutting Down..'); localStorage.lastbotname = botname;localStorage.lastcmdChar = cmdChar;batteryenabled = false;setTimeout(function() {botname = 'Shutting Down..'}, 2000); setTimeout(function() {botname = 'Saving Settings..'}, 4000);setTimeout(function() {botname = 'Disabling Commands..';Power = 'off'}, 8000);setTimeout(function() {botname = 'Disabling Notice System..';clearInterval(LocalStorageRecieverCheckerIntervalThingSuperCollidingSuperButtonPortalButtonPotatoMachineGunMachine)}, 10000); setTimeout(function() {clearInterval(AutoReconnect); botname = 'Stopping services..'}, 14000); setTimeout(function() {EOS.chat.send('Disconnecting Bot..');EOS.client.stop();}, 18000);} else { EOS.chat.send( securityerror + 'Sorry, this command is for the bot owner only.' ) } } });
EOS.client.on("a", function(msg) { if( msg.a.toLowerCase() == cmdChar + "hotel") if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) { } else { if ( ownerId == msg.p._id == true ) { EOS.chat.send('Connecting clients..'); spawnClients('_-Hotel Room-_ [',30); } else { EOS.chat.send( securityerror + 'Sorry, this command is for the bot owner only.' ) } } });

//The thing to change colors, just in case Brandon ever gives out the password :3
//(Which he probably wont.)
//EOS.client.sendArray([{m: "admin message", password: "bla bla", msg: {m: "color", _id: msg.p._id, color: color}}]);

var test_ = []; function UDN(msg) { msg.match(/.{0,20}/g).forEach(function(x, i) { if(x == "") return; if (i !== 0) x = "..." + x; test_.push(x); }); }; var chatInt = setInterval(function() { var msg = test_.shift(); if (msg) botname = msg }, 6000);

EOS.chat.send = function(message) {chatBuffer(message);}


////////////////////////////////////////////////////////////////////

log('Commands: Section 2 Activated.');
//Public Command Template
EOS.client.on("a", function(msg) {
 if( msg.a.toLowerCase() == cmdChar + "meow")
 if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
 } else { if (Power == "on" == true) {
EOS.chat.send('Meow :3') } else {  } } });

//Public Command Template
EOS.client.on("a", function(msg) {
 if( msg.a.toLowerCase() == cmdChar + "dare")
 if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
 } else { if (Power == "on" == true) {
RandomDare(); } else {  } } });

//Public Command Template
EOS.client.on("a", function(msg) {
 if( msg.a.toLowerCase() == cmdChar + "thischat")
 if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
 } else { if (Power == "on" == true) {
EOS.chat.send('That\'s it, I\'m done. Fuck this chat. It\'s developed into a mass of retarded copy pastes and face spam. The quality the MPP chat has been declining for quite a while, but this is the last straw. That\'s it. I\'m done. I\'m uninstalling the internet, chopping off my dick and moving to fucking antartica.'); } else {  } } });

//Public Command Template
EOS.client.on("a", function(msg) {
 if( msg.a.toLowerCase() == cmdChar + "wtf")
 if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
 } else { if (Power == "on" == true) {
EOS.chat.send('WHAT. THE. FUCK.') } else {  } } });

EOS.client.on("a", function(msg) {
 if( msg.a.toLowerCase() == cmdChar + "gr8")
 if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
 } else { if (Power == "on" == true) {
EOS.chat.send('gr8 m8 no d-b8 i r8 it an 8 i h8 2 b in an ir8 st8 but its my f8 hey m8 i apreci8 that u r8 it gr8 u wanna d8 and mayb masturb8 i can ask n8 and we can meet at the g8 dont b l8 gr8 b8 m8 i r8 it an 8/8 plz don\'t h8 gr8 b8 m8 cant even h8 so I r8 8 outta 8 Gr8 b8 m8. I rel8, str8 appreci8, and congratul8. I r8 this b8 an 8/8. Plz no h8., I\'m str8 ir8. Cre8 more, can\'t w8. We should convers8, I won\'t ber8.') } else {  } } });

//Public Command Template
EOS.client.on("a", function(msg) {
 if( msg.a.toLowerCase() == cmdChar + "9ball")
 if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
 } else { if (Power == "on" == true) {
EOS.chat.send('The 9ball says: ...') } else {  } } });

//Public Command Template
EOS.client.on("a", function(msg) {
 if( msg.a.toLowerCase() == cmdChar + "secretcommand")
 if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
 } else { if (Power == "on" == true) {
EOS.chat.send('Yup. It\'s a secret command. Wow. :I') } else {  } } });

//Public Command Template
EOS.client.on("a", function(msg) {
 if( msg.a.toLowerCase() == cmdChar + "bunny")
 if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
 } else { if (Power == "on" == true) {
EOS.chat.send('..(\ /)');
EOS.chat.send('..(•.•)');
EOS.chat.send('c(")(")'); } else {  } } });
EOS.client.on("a", function(msg) {
if (msg.a.toLowerCase().includes('WWW.AMIGHTYWIND.COM'.toLowerCase())) { EOS.chat.send('FUCK OFF!'); }
});
//Public Command Template
EOS.client.on("a", function(msg) {
 if( msg.a.toLowerCase() == cmdChar + "improto")
 if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
 } else { if (Power == "on" == true) {
EOS.chat.send('I am Proto! Your security is my motto! Install me on your computer, To protect your data better! With me there, no viruses, Could enter your computer! Malware! Spyware! Trojan! All gone forever! I filter your junk mail, Monitoring WiFi, never fail! I am pr-pr-pr-pr-pr-pr-pr-pr-Proto! Your security is my motto! I keep your data encrypted, Your virus security updated! Anti-phishing for safe browsing, And safe pay for secure e-shopping! My security acts silently, So you can work efficiently! I am Proto! ...');
EOS.chat.send('Enhanced performance is my motto! I make monitoring At the office lot easier! No Facebook! No games! Efficiency gets better! I ensure effective people planning! With twenty percent lesser staff, The company is shining! I am pr-pr-pr-pr-pr-pr-pr-pr-Proto! Preventing data theft is my motto! I prevent data leakage, Securing your business and image! No pen drive, no email, No print without permission! No stealing of data, And you work without any tension! I am Proto! Preventing data loss is my motto!');
EOS.chat.send('I reverse data loss Saving you from your angry boss (AYY HAHAHAHAHA) I recover... deleted... 𝙁𝙄𝙇𝙀𝙎！ Making it sure, that you always smile! I am pr-pr-pr-pr-pr-pr-pr-pr-Proto! Protection from laptop theft is my motto! I track your lost laptop! To let you work non-stop! I do remote data... encryption! Saving you from security... tension! I am Proto! Bringing families closer is my motto! I protect your kids, while they surf! As I know, that parenting is tough! I like to bring... smile to your faces!');
EOS.chat.send('Making internet surfing relaxing With all work traces! I am Proto! Complete security is my motto'); } else {  } } });

//2:08]:Loading the file. Index: 1077, Song: "RED ZONE.mid" [01:49]
//I SHIP TOM X TORD:the third line should be the first line, last line should be second, 1st line should be 3rd, and 2nd one should be last.
//Anonymous:/p john cena

//Owner Only Command Template
EOS.client.on("a", function(msg) {
 if( msg.a.toLowerCase() == cmdChar + "regenerate")
 if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
} else { if ( ownerId == msg.p._id == true ) { EOS.chat.send('Regenerating Command List..'); GCS(); }
else {EOS.chat.send( securityerror + 'Sorry, this command is for the bot owner only.' ) } } });

//Owner Only Command Template
EOS.client.on("a", function(msg) {
var cmd = msg.a.split(' ')[0].toLowerCase();
var input = msg.a.substring(cmd.length).trim();
 if(cmd == cmdChar+"transferowner")
 if(banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
} else { if ( ownerId == msg.p._id == true ) { if(input==''){EOS.chat.send('> Usage: '+cmdChar+'transferowner _id');} else {EOS.chat.send('Done. ownerId set to '+input+'. Opping '+ input + '.');ownerId=input;admins.push(input);} }
else {EOS.chat.send( securityerror + 'Sorry, this command is for the bot owner only.' ) } } });

//Owner Only Command Template
EOS.client.on("a", function(msg) {
 if( msg.a.toLowerCase() == cmdChar + "autoregenerate")
 if (banned.includes(msg.p._id) || blNames.includes(msg.p.name)) {
} else { if ( ownerId == msg.p._id == true ) {
Power = 'off';
EOS.chat.send('Please wait.. I\'m now toggling automatic command list regeneration..');
if(AutoR) {
EOS.chat.send('I have now disabled automatic command list regeneration.');AutoR = false;clearInterval(AUTOR)} else {
EOS.chat.send('I have now enabled automatic command list regeneration. I will now  update the command list every 10 seconds.');
AutoR = true;
Power = 'on';
AUTOR = setInterval(function() {GCS();}, 10000);}
}
else {EOS.chat.send( securityerror + 'Sorry, this command is for the bot owner only.' ) } } });


AutoR = true;
AUTOR = setInterval(function() {GCS();}, 10000);

setTimeout(function() {GCS();batteryenabled = true; botname = localStorage.lastbotname}, 8000);


EOS.client.on("a", function (msg) {
if(spying) {spymessagecount++;spymessages.push(msg.p.name + ': ' + msg.a);}
});
function spy(room) {
mainroom = EOS.client.channel._id;
spymessagecount = 0;
spymessages = [];
EOS.client.setChannel(room);
spying = true;
setTimeout(function() {
EOS.client.setChannel(mainroom);
spying = false;spyroomcount = EOS.client.channel.count}, 13000);
setTimeout(function() {
EOS.chat.send('Returned from [' + room + ']. Results: ' + spyroomcount + ' players. ' + spymessagecount + ' messages sent.');
EOS.chat.send('To view the messages that were sent, execute: '+cmdChar+'js spymessages')}, 15000);}
messagesplitter='6574au39Oa0012323xXFf99F7454THJS743h48u6432567894365278935trw';
//chat logger
//to access logs, use localStorage.messages.split(messagesplitter);
logchat=true;
EOS.client.on("a", function(msg) {if(logchat){ localStorage.messages = localStorage.messages + ' ' + messagesplitter + ' ' + msg.p.name + ':' + msg.a + ''; }});
function displayallLogs(startmsgid){
EOS.chat.send('Function displayallLogs(); was executed.');
EOS.chat.send('One moment.');
log=false;
botname='EpicOS is displaying logs'
msgcounter=startmsgid;
EOS.chat.send('I will now display all saved messages starting from msgid '+startmsgid+'. ('+localStorage.messages.split(messagesplitter).length+' messages stored)');EOS.chat.send('3');EOS.chat.send('2');EOS.chat.send('1');EOS.chat.send('*LOG START*');displayLog=setInterval(function(){msgcounter++;EOS.chat.send('[MSGID:'+msgcounter+'/'+localStorage.messages.split(messagesplitter).length+']:'+localStorage.messages.split(messagesplitter)[msgcounter]);if(msgcounter>=localStorage.messages.split(messagesplitter).length){clearInterval(displayLog);EOS.chat.send('*LOG END*');botname='𝙴𝚙𝚒𝚌𝙾𝚂 𝟼.𝟻 [-help]';log=true;}}, 200);
}
TotalNewUsers = 0;
NewUsers = 0;
findUserCC=false;
function findUser(user) {
if(!findUserCC){
E = {client:new Client('ws://www.multiplayerpiano.com')}
E.client.setChannel(EOS.client.channel._id);
E.client.start();
console.log('findUser client connected.');
findUserCC=true;
}else{
rooms = [];
users = [];
room = E.client.channel._id;
if(room == 'lobby') {room = 'lolwutsecretlobbybackdoor';}
setTimeout(function(){
$('#room').click();
    setTimeout(function(){
    document.dispatchEvent(new MouseEvent("mousedown"));
    },6000); }, 2000);

setTimeout(function() {
E.chat.send('Scanning ' + rooms2.length + ' rooms - Excluding Private Rooms -  for any usernames matching (' + user + ')'); }, 3000);
___counter___ = -1;
function info(name){
		var array = [];
		for (var pl in E.client.ppl){
			if (E.client.ppl[pl].name.toLowerCase().includes(name.toLowerCase())){
				array.push(E.client.ppl[pl]);
			}
		}
		return array[Math.floor(Math.random() * array.length)];
	}
setTimeout(function() {
AnonUsers = 0;
relocate_ = setInterval(function() {
___counter___++;
TotalNewUsers++;
NewUsers++;
E.client.setChannel(rooms2[___counter___]);
for (var client in E.client.ppl){
if(users.includes(E.client.ppl[client].name.toLowerCase())==false){
if(E.client.ppl[client].name.toLowerCase()=='anonymous')  {AnonUsers++;}
users.push(E.client.ppl[client].name.toLowerCase());
if(E.client.ppl[client].name.toLowerCase() == user.toLowerCase()) {
FoundUser____counter___ = ___counter___;
FoundUser_room_usercount = E.client.channel.count;
FoundUser_room_name = E.client.channel._id;
FoundUser_id = info(E.client.ppl[client].name)._id;}}
if(___counter___ == rooms.length) {
___counter___ = -1;
clearInterval(relocate_);
setTimeout(function() {
E.client.setChannel(room);
setTimeout(function() {
E.chat.send('I have scanned ' + rooms.length + ' rooms for any usernames matching (' + user + ')');
if(users.includes(user.toLowerCase())) {
scan_results =
'Results: User found: true. Users location: (Room #' + FoundUser____counter___ + '): ' + FoundUser_room_name + '. Room user count: ' + FoundUser_room_usercount + '. There are currently ' + users.length + ' users online right now, ' + AnonUsers + ' of which are new users.';
E.chat.send(scan_results);
} else {
scan_results =
'Results: User found: false. There are currently ' + users.length + ' users online right now, ' + AnonUsers + ' of which are new users.';
E.chat.send(scan_results);
}}, 2000);}, 2000);
}}}, 2000);}, 4000);}}
//chat logger
EOS.client.on("a", function(msg) { log('('+msg.p._id+') ' + msg.p.name + ': ' + msg.a)});
EOS.client.on("a", function(msg) { if(!banned.includes(msg.p._id)){if(msg.a.toLowerCase().substring(0,'ban me'.length)=='ban me'){EOS.chat.send('User with _id: ' + msg.p._id + ' has been added to the ban list. Reason: Autobanned by system. It was requested.');banned.push(msg.p._id)}}});
capt=100;
cbpt=200;
rsvisible=false;
rscrownsolo=false;
function startRS(room){
rs=new Client('ws://www.multiplayerpiano.com');rs.start();rs.setChannel(room);pickupcrown = setInterval(function() {rs.sendArray([{m: "chown", id: rs.getOwnParticipant().id}]);rs.sendArray([{ m: 'chset', set: { visible: rsvisible, crownsolo: rscrownsolo} }]);rs.sendArray([{ m: "userset", set: { name: botname+'CrownBot'  } }]);},0);
}

nmpb_bmaniss=400;
notecount_nmpb=0;
function startBMD(room){
bmd3=new Client('ws://www.multiplayerpiano.com');bmd3.start();setTimeout(function(){bmd3.setChannel(EOS.client.channel._id);}, 6000);
bmd=new Client('ws://www.multiplayerpiano.com');bmd.start();bmd.setChannel(room);bmdUpdateNAME = setInterval(function() {bmd.sendArray([{ m: "userset", set: { name: '['+notecount_nmpb+'] <-- NMPBLink Notes Per 6 sec'  } }]);},0);
bmd.on('n',a=>notecount_nmpb+=a.n.length);}
function startBMD2(room){
BMD2_int_1=setInterval(function(){
notecount_nmpb=0;
}, 6000);
function nmpb_cl_send(msg){
nmpb_cl.sendArray([{m:"a", message: msg}]);
};
BMD2_int_2=setInterval(function(){
if(notecount_nmpb>=nmpb_bmaniss){
nmpb_cl_send('/song');
EOS.chat.send('Black MIDI detected.');
GETINFO=true;
setTimeout(function(){
if(!nmpb_name.includes('(Black Midi)')){
EOS.chat.send('Gathered File Information: ID: '+nmpb_id+' | NAME: '+nmpb_name);
bmd2.sendArray([{m:"a", message: '/rename '+nmpb_id+' '+nmpb_name+' (Black Midi)'}]);
}
}, 0);
}
}, 0);
bmd2=new Client('ws://www.multiplayerpiano.com');bmd2.start();bmd2.setChannel(room);
}
setTimeout(function() {
x_coord = 50;
y_coord = 30;
cursor_programming_1 = setInterval(function() {x_coord++;if(x_coord > 99){x_coord = -45}}, capt);
cursor_programming_2 = setInterval(function() {y_coord++;if(y_coord > 99){y_coord = -5}}, cbpt);
setInterval(function() {EOS.client.sendArray([{m: "m", x: x_coord, y: y_coord}]);}, 0000);
}, 5000);
function refreshCursorSettings(){
clearInterval(cursor_programming_1);
clearInterval(cursor_programming_2);
cursor_programming_1 = setInterval(function() {x_coord++;if(x_coord > 99){x_coord = -45}}, capt);
cursor_programming_2 = setInterval(function() {y_coord++;if(y_coord > 99){y_coord = -5}}, cbpt);
}
//Error messages START
setInterval(function() {if(!FCL){EOS.chat.send(error + 'CRITICAL ERROR: Commands #1 FCL missing. System restart recommended.');}}, 10000);
setInterval(function() {if(!AOC){EOS.chat.send(error + 'CRITICAL ERROR: Commands #2 AOC missing. System restart recommended.');}}, 11000);
setInterval(function() {if(!OOC){EOS.chat.send(error + 'CRITICAL ERROR: Commands #3 OOC missing. System restart recommended.');}}, 12000);
setInterval(function() {if(!MPC){EOS.chat.send(error + 'CRITICAL ERROR: Commands #4 MPC missing. System restart recommended.');}}, 12000);
//Error messages END

//automatic name updates
autoupdateName = setInterval(function(){ if(batteryname) { EOS.client.sendArray([{ m: "userset", set: { name: botname + ' [' + cmdChar + 'help] Battery: ' + battery + '%'  } }]); } else { EOS.client.sendArray([{ m: "userset", set: { name: botname + ' [' + cmdChar + 'help]'  } }]); } }, 0000);

//I reverse data loss Saving you from your angry boss (AYY HAHAHAHAHA) I recover... deleted... 𝙁𝙄𝙇𝙀𝙎！ Making it sure, that you always smile! I am pr-pr-pr-pr-pr-pr-pr-pr-Proto! Protection from laptop theft is my motto! I track your lost laptop! To let you work non-stop! I do remote data... encryption! Saving you from security... tension! I am Proto! Bringing families closer is my motto! I protect your kids, while they surf! As I know, that parenting is tough! I like to bring... smile to your faces!
//Making internet surfing relaxing With all work traces! I am Proto! Complete security is my motto
//I am Proto! Your security is my motto! Install me on your computer, To protect your data better! With me there, no viruses, Could enter your computer! Malware! Spyware! Trojan! All gone forever! I filter your junk mail, Monitoring WiFi, never fail! I am pr-pr-pr-pr-pr-pr-pr-pr-Proto! Your security is my motto! I keep your data encrypted, Your virus security updated! Anti-phishing for safe browsing, And safe pay for secure e-shopping! My security acts silently, So you can work efficiently! I am Proto! ...
//Enhanced performance is my motto! I make monitoring At the office lot easier! No Facebook! No games! Efficiency gets better! I ensure effective people planning! With twenty percent lesser staff, The company is shining! I am pr-pr-pr-pr-pr-pr-pr-pr-Proto! Preventing data theft is my motto! I prevent data leakage, Securing your business and image! No pen drive, no email, No print without permission! No stealing of data, And you work without any tension! I am Proto! Preventing data loss is my motto!

//21/10/2017
//13:38
//EPICOS IS SO CLOSE TO 100 COMMANDS :D
NoteQuota.prototype.spend = () => true

function startDiscordLinks(){
EOS.chat.send('EPICOS: DISCORD BOT ONLINE.');
log('Starting Discord Links..');
log('Done.');
DCL1();
DCL2();
DCL3();
setInterval(function(){
CLIENT1.start();CLIENT1.setChannel('lolwutsecretlobbybackdoor');_CLIENT1.start();_CLIENT1.setChannel('EOSDISCORDLINK1');
CLIENT2.start();CLIENT2.setChannel('test/awkward');_CLIENT2.start();_CLIENT2.setChannel('EOSDISCORDLINK2');
CLIENT3.start();CLIENT3.setChannel('test/fishing');_CLIENT3.start();_CLIENT3.setChannel('EOSDISCORDLINK3');}, 1000);
_CLIENT1.on("a", function(msg) {
if(msg.p._id==selectedID_1){
CLIENT1.sendArray([{m:"a", message: '[From Discord]: '+  msg.a}]);
}
});
_CLIENT2.on("a", function(msg) {
if(msg.p._id==selectedID_2){
CLIENT2.sendArray([{m:"a", message: '[From Discord]: '+   msg.a}]);
}
});
_CLIENT3.on("a", function(msg) {
if(msg.p._id==selectedID_3){
CLIENT3.sendArray([{m:"a", message: '[From Discord]: '+  msg.a}]);
}
});
}

function DCL1(){
log('Discord Link 1 online.');
website = 'www.multiplayerpiano.com';
port = '8080';
CLIENT1 = new Client("ws://"+website+":"+port);
CLIENT1.start();
CLIENT1.setChannel('lobby');
_CLIENT1 = new Client("ws://"+website+":"+port);
_CLIENT1.start();
_CLIENT1.setChannel('EOSDISCORDLINK1');
function DiscordSend1(msg){
_CLIENT1.sendArray([{m:"a", message: msg}]);
log(msg);
}
selectedID_1=ownerId;
setTimeout(function(){
DiscordSend1('CONNECTED. EPICOS DISCORD LINK 1. lobby');
}, 6000);
CLIENT1.on("a", function(msg) {
if(msg.p._id==CLIENT1.getOwnParticipant()._id==false){
DiscordSend1('[lobby]: ['+msg.p.name+']: ['+msg.p.color+']: ['+msg.p._id+']: ['+msg.a+']');
}
});
}
function DCL2(){
log('Discord Link 2 online.');
website = 'www.multiplayerpiano.com';
port = '8080';
CLIENT2 = new Client("ws://"+website+":"+port);
CLIENT2.start();
CLIENT2.setChannel('test/awkward');
_CLIENT2 = new Client("ws://"+website+":"+port);
_CLIENT2.start();
_CLIENT2.setChannel('EOSDISCORDLINK2');
_CLIENT2.start();
_CLIENT2.setChannel('EOSDISCORDLINK2');
function DiscordSend2(msg){
_CLIENT2.sendArray([{m:"a", message: msg}]);
log(msg);
}
selectedID_2=ownerId;
setTimeout(function(){
DiscordSend2('CONNECTED. EPICOS DISCORD LINK 2. test/awkward');
}, 6000);
CLIENT2.on("a", function(msg) {
if(msg.p._id==CLIENT2.getOwnParticipant()._id==false){
DiscordSend2('[test/awkward]: ['+msg.p.name+']: ['+msg.p.color+']: ['+msg.p._id+']: ['+msg.a+']');
}
});
}
function DCL3(){
log('Discord Link 3 online.');
website = 'www.multiplayerpiano.com';
port = '8080';
CLIENT3 = new Client("ws://"+website+":"+port);
CLIENT3.start();
CLIENT3.setChannel('test/fishing');
_CLIENT3 = new Client("ws://"+website+":"+port);
_CLIENT3.start();
_CLIENT3.setChannel('EOSDISCORDLINK3');
function DiscordSend3(msg){
_CLIENT3.sendArray([{m:"a", message: msg}]);
log(msg);
}
selectedID_3=ownerId;
setTimeout(function(){
DiscordSend3('CONNECTED. EPICOS DISCORD LINK 3. test/awkward');
}, 6000);
CLIENT3.on("a", function(msg) {
if(msg.p._id==CLIENT3.getOwnParticipant()._id==false){
DiscordSend3('[test/fishing]: ['+msg.p.name+']: ['+msg.p.color+']: ['+msg.p._id+']: ['+msg.a+']');
}
});
}

function DiscordSend3(msg){
_CLIENT3.sendArray([{m:"a", message: msg}]);
log(msg);
}
function DiscordSend2(msg){
_CLIENT2.sendArray([{m:"a", message: msg}]);
log(msg);
}
function DiscordSend1(msg){
_CLIENT1.sendArray([{m:"a", message: msg}]);
log(msg);
}

function advert_server(){
EOS.chat.send('[ADVERTISEMENT]: Join the official 160System Discord Server: discord.gg/5wtubrg for more information  about upcoming projects and updates for EpicOS, or just chat! Anyone is welcome.');
}

function advert_alternatesites(){
EOS.chat.send('[ADVERTISEMENT]: This website has multiple alternatives! mpp.meowbin.com, ourworldofpixels.com/piano - This supports drawing by holding shift and left clicking');
}

function advert_mppforum(){
EOS.chat.send('[ADVERTISEMENT]: Visit the unofficial MPP forum page: bit.do/mpptools and the unofficial MPP wiki page: http://multiplayer-piano.wikia.com/wiki/Multiplayer_Piano_Wikia');
}

function advert_owop(){
EOS.chat.send('[ADVERTISEMENT]: Visit www.ourworldofpixels.com! it\'s a multiplayer pixel drawing website, which also has a chat function.');
}
setInterval(function(){EOS.chat.send('> EpicOS, Epic\'s Chat Entertainment System. A project started in 2015. Thanks for using this system.');},600000);
setInterval(function(){EOS.chat.send('> Find the creator of EpicOS\' Discord here: EpicOSAssistance #5042');},605000);