// ==UserScript==
// @name         BridgeBot RM
// @namespace    IDK
// @version      0.0.1
// @description  Ban script - Private release for Ruben Gray or '
// @author       Ruben Gray
// @match        http://www.multiplayerpiano.com/*
// @grant        none
// ==/UserScript==



var blacklisted_names = [''];

var blacklisted_ids = [''];

var administrators = ["2c5ffc52c7bfc06bda4a1f32", "548195621cb387ffd397b70b"];
var administrators_names = ["'", "UwU"];
var autoBan = false;
var roomSearching = false;
var roomDataBase = [];

var owners = ['2c5ffc52c7bfc06bda4a1f32', '548195621cb387ffd397b70b'];

var commands = ['blacklist', 'getname', 'nameban', 'admin', 'idban', 'nameadmin', 'idadmin', 'admins', 'solo', 'roomids', 'commands', 'rooms (toggle)', 'find', 'roomDB', 'shutdown'];
var roomsHTML = document.getElementById('room');
var rooms = roomsHTML.getElementsByTagName('*');

var roomNames = rooms[2];
var findingPlayer = false;

// Creating New Button for Bot's Interface

var bottomBar = document.getElementById('bottom').children[0];
var newDiv = document.createElement('div');
newDiv.setAttribute('id', 'bot-gui-btn');
newDiv.setAttribute('class', 'ugly-button');
newDiv.style.position = 'absolute';
newDiv.style.left = '660px';
newDiv.style.top = '32px';
newDiv.style.display = 'block';
newDiv.appendChild(document.createTextNode('Bot GUI'));
bottomBar.appendChild(newDiv);
var playerList = document.createElement('div');
playerList.setAttribute('id', 'plr-list');
playerList.setAttribute('class', 'bot-interface');
playerList.style.position = 'absolute';
playerList.style.bottom = '100%';
playerList.style.left = '600px';
playerList.style.width = '250px';
playerList.style.height = '300px';
playerList.style.maxHeight = '300px';
playerList.style.display = 'none';
playerList.style.background = '#898';
playerList.style.border = '1px solid #aba';
bottomBar.appendChild(playerList);
var pListVis = false;

// Setting Up Functions for Bot's Interface

$('#bot-gui-btn').click(function(evt) {
    var people = MPP.client.ppl;
    var playerList = document.getElementById('plr-list');
    var fChild = playerList.firstChild;
    while(fChild){
        playerList.removeChild(fChild);
        fChild = playerList.firstChild;
    };
    var x = 0;
    if(pListVis == false){
        playerList.style.display = 'block';
        pListVis = true;
    }else{
        playerList.style.display = 'none';
        pListVis = false;
    };
    for(var person in people){
        var playerButton = document.createElement('div');
        playerButton.setAttribute('id', people[person].name + '-btn');
        playerButton.setAttribute('class', 'ugly-button');
        playerButton.style.position = 'absolute';
        playerButton.style.left = '0px';
        playerButton.style.top = ((x * 25).toString() + 'px');
        playerButton.style.width = '95%';
        playerButton.style.display = 'block';
        playerButton.appendChild(document.createTextNode(people[person].name));
        x++;
        playerList.append(playerButton);
    };
});

var MPP = window.MPP;

function getName(id) {
    var people = MPP.client.ppl;
    for(var person in people){
        if(MPP.client.ppl[person]._id == id){
            var name = MPP.client.ppl[person].name;
            return MPP.chat.send(id + "'s name: " + name);
        };
    };
};

function listAdmins() {
    let i = administrators.length;
    let reply = [];
    for(i = 0; i < administrators.length; i++){
        if(i == administrators.length - 1){
            let input = administrators_names[i] + ' with ID: ' + administrators[i] + '.';
            reply.push(input);
        }else{
            let input = administrators_names[i] + ' with ID: ' + administrators[i] + ',';
            reply.push(input);
        };
    };
    let showMessage = 'Current admins are: ' + reply.join(' ');
    MPP.chat.send(showMessage);
};

function name_admin(n) {
    var people = MPP.client.ppl;
    for(var person in people){
        if(MPP.client.ppl[person].name == n){
            MPP.chat.send(n + ' was made admin, with ID: ' + MPP.client.ppl[person]._id + '.');
            administrators.push(MPP.client.ppl[person]._id);
            administrators_names.push(n);
        };
    };
};

function id_admin(id) {
    var people = MPP.client.ppl;
    for(var person in people){
        if(MPP.client.ppl[person]._id == id){
            MPP.chat.send(MPP.client.ppl[person].name + ' was made admin, with ID: ' + id);
            administrators.push(id);
            administrators_names.push(MPP.client.ppl[person].name);
        };
    };
};

function soloPlay(b) {
    let x = b.toString();
    if(x == 'on'){
        var settingsOn = {visible: MPP.client.channel.settings.visible, chat: MPP.client.channel.settings.visible, crownsolo: true, color: MPP.client.channel.settings.color};
        MPP.chat.send('Room has been made solo.');
        return MPP.client.sendArray([{m: 'chset', set: settingsOn}]);
    };
    if(x == 'off'){
        var settingsOff = {visible: MPP.client.channel.settings.visible, chat: MPP.client.channel.settings.visible, crownsolo: false, color: MPP.client.channel.settings.color};
        MPP.chat.send('Room has turned off solo play.');
        return MPP.client.sendArray([{m: 'chset', set: settingsOff}]);
    };
    MPP.chat.send('Usage: /solo [on/off]');
};

function ban(name) {
    let args = name.split(' ');
    let i = args.length;
    let time = args.pop();
    let finalChoice;
    if(!parseInt(time)){
        MPP.chat.send('Usage: /nameban [name] [time]');
    }else{
        let timeInt = parseInt(time);
        var minutes = timeInt;
        if(minutes === null) return MPP.chat.send('Usage: /banname [name] [time]');
        var ms = minutes * (60) * (1000);
        var people = MPP.client.ppl;
        for(var person in people){
            if(MPP.client.ppl[person].name == args.join(' ')){
                var banPerson = MPP.client.ppl[person]._id;
                MPP.client.sendArray([{m: 'kickban', _id: banPerson, ms: ms}]);
            };
        };
    };
};

function banById(id, time){
    var people = MPP.client.ppl;
    let timeToBan = parseInt(time);
    for(var person in people){
        if(people[person]._id == id){
            var ms = timeToBan * (60) * (1000);
            MPP.client.sendArray([{m: 'kickban', _id: id, ms: ms}]);
        };
    };
};

function getId(n){
    var people = MPP.client.ppl;
    for(var person in people){
        if(MPP.client.ppl[person].name.toLowerCase() == n.toLowerCase()){
            MPP.chat.send(n + "'s ID is: " + MPP.client.ppl[person]._id);
            return;
        };
    };
    MPP.chat.send('Usage: /getid [name]');
};

function commandsShow(){
    let i = commands.length;
    var showCommands = [];
    for(i = 0; i < commands.length; i++){
        if(i == (commands.length - 1)){
            let input = '/' + commands[i];
            showCommands.push(input);
        }else{
            let input = '/' + commands[i] + ',';
            showCommands.push(input);
        };
    };
    let reply = 'Current commands: ' + showCommands.join(' ');
    MPP.chat.send(reply);
};

function blacklist_user(user){
    var people = MPP.client.ppl;
    var found = false;
    for(var person in people){
        if(people[person].name == user){
            found = true;
            MPP.chat.send('Blacklisted user: ' + people[person].name + '.');
            banById(people[person]._id, 10);
            return blacklisted_ids.push(people[person]._id);
        };
    };
    MPP.chat.send('User: ' + user + ' not found.');
};

function allRoomID(){
    var people = MPP.client.ppl;
    var ids = [];
    for(var person in people){
        ids.push(MPP.client.ppl[person].name + "'s id - " + MPP.client.ppl[person]._id);
    };
    let i = ids.length;
    let showIds = [];
    for(i = 0; i < ids.length; i++){
        if(i == (ids.length - 1)){
            let input = ids[i] + '.';
            showIds.push(input);
        }else{
            let input = ids[i] + ',';
            showIds.push(input);
        };
    };
    let xy = ids.length;
    let firstpart = [];
    let secondpart = [];
    if(xy > 6){
        for(xy = 0; xy < 7; xy++){
            firstpart.push(showIds[xy]);
        };
        for(xy = 7; xy < ids.length; xy++){
            secondpart.push(showIds[xy]);
        };
        let reply1 = ('All _ids in the room: ' + firstpart.join(' '));
        let reply2 = (secondpart.join(' '));
        MPP.chat.send(reply1);
        MPP.chat.send(reply2);
    }else{
        let reply = ('All _ids in the room: ' + showIds.join(' '));
        MPP.chat.send(reply);
    };
};

function room_shutdown(string) {
    if(!string){
        return MPP.chat.send('Usage: /shutdown [on/off]');
    };
    if(string == 'on'){
        autoBan = true;
        MPP.chat.send('Room locked.');
    };
    if(string == 'off'){
        autoBan = false;
        MPP.chat.send('Room unlocked.');
    };
};

function toMs(x){
    var xInMs = (parseInt(x) * 1000);
    return xInMs;
};

function find_Player(playerToFind, returnChannel){
    var rooms = roomNames.getElementsByTagName('*');
    var y = 0;
    var playerFound = false;
    var channelFound = '';
    var overRooms = false;
    function goThroughRooms(){
        function allRooms(){
            roomNames.style.display = 'block';
            roomNames.style.display = 'none';
            var allRoomNames = [];
            for(var room = 0; room < rooms.length; room++){
                if(rooms[room].hasAttribute('roomname')){
                    allRoomNames.push(rooms[room].getAttribute('roomname'));
                };
            };
            return allRoomNames;
        };
        var allKnownRooms = allRooms();
        var loopRooms = setTimeout(function(){
            if(y > allKnownRooms.length){
                overRooms = true;
            };
            if(overRooms == true){
                MPP.client.setChannel(returnChannel);
                return MPP.chat.send(playerToFind + ' was not found.');
            }else{
                if(playerFound == false){
                    MPP.client.setChannel(allKnownRooms[y]);
                    var people = MPP.client.ppl;
                    for(var person in people){
                        if(people[person].name == playerToFind){
                            playerFound = true;
                            channelFound = MPP.client.channel._id;
                            findingPlayer = false;
                        };
                    };
                    y++;
                    goThroughRooms();
                }else{
                    MPP.client.setChannel(returnChannel);
                    return MPP.chat.send(playerToFind + ' found in channel: ' + channelFound + '.');
                };
            };
        }, 2000);
    };
    goThroughRooms();
};

function roomData(room){
    if(!roomDataBase.includes(room)){
        roomDataBase.push(room);
    };
};

function showRoomData(){
    console.log(roomDataBase);
};

function checkRooms(returnChannel){
    if(roomSearching == false){
        roomSearching = true;
        MPP.chat.send('Searching rooms: ' + roomSearching + '.');
        var rooms = roomNames.getElementsByTagName('*');
        var x = 0;
        function roomLoop(){
            function getRoomNames(){
                roomNames.style.display = 'block';
                roomNames.style.display = 'none';
                var allRoomNames = [];
                for(var room = 0; room < rooms.length; room++){
                    if(rooms[room].hasAttribute('roomname')){
                        allRoomNames.push(rooms[room].getAttribute('roomname'));
                    };
                };
                return allRoomNames;
            };
            var allOpenRooms = getRoomNames();
            setTimeout(function(){
                if(roomSearching == true){
                    if(x > allOpenRooms.length){
                        roomSearching = false;
                        return MPP.client.setChannel(returnChannel);
                    }else{
                        MPP.client.setChannel(allOpenRooms[x]);
                        roomData(allOpenRooms[x]);
                        x++;
                        roomLoop();
                    };
                    console.log('Checking all rooms: ' + Math.ceil((x / allOpenRooms.length) * 100) + '% completed. ' + (allOpenRooms.length - x) + ' rooms left to check.');
                    setTimeout(function(){
                        MPP.chat.send('Checking all rooms: ' + Math.ceil((x / allOpenRooms.length) * 100) + '% completed. ' + (allOpenRooms.length - x) + ' rooms left to check.');
                    }, 50);
                };
            }, toMs(2));
        };
        roomLoop();
    }else{
        roomSearching = false;
        MPP.chat.send('Searching rooms: ' + roomSearching + '.');
    };
};

MPP.client.on('participant added', async data => {
    if(autoBan == true){
        MPP.client.sendArray([{m: 'kickban', _id: data._id, ms: 0}]);
    }else{
        if(blacklisted_ids.includes(data._id)){
            MPP.client.sendArray([{m: 'kickban', _id: data._id, ms: 0}]);
        };
    };
});

MPP.client.on('a', async message => {
    if(message.a.startsWith('/find')){
        if(findingPlayer == false){
            var current_Room = MPP.client.channel._id;
            findingPlayer = true;
            var playerToFind = message.a.slice(6);
            console.log('Looking for player: ' + playerToFind + '. Starting room: ' + current_Room + '.');
            find_Player(playerToFind, current_Room);
        };
    };
    if(message.a.startsWith('/nameban')){
        if(administrators.includes(message.p._id)){
            var banPerson = message.a.slice(9);
            if(banPerson !== '') {
                blacklisted_names.push(banPerson);
                ban(banPerson);
            }else{
                MPP.chat.send('Usage: /banname [name] time- [time]');
            }
        };
    };
    if(message.a.startsWith('/shutdown')){
        if(administrators.includes(message.p._id)){
            var toggleShutdown = message.a.slice(10);
            room_shutdown(toggleShutdown);
        };
    };
    if(message.a.startsWith('/getname')){
        if(administrators.includes(message.p._id)){
            var id = message.a.slice(9);
            getName(id);
        };
    };
    if(message.a.startsWith('/getid')){
        if(administrators.includes(message.p._id)){
            var name = message.a.slice(7);
            getId(name);
        };
    };
    if(message.a.startsWith('/idban')){
        if(administrators.includes(message.p._id)){
            var banID = message.a.slice(7);
            if(banID !== ''){
                blacklisted_ids.push(banID);
                banById(banID, 5);
            }else{
                MPP.chat.send('Usage: /idban [_id]');
            };
        };
    };
    if(message.a.startsWith('/roomids')){
        if(administrators.includes(message.p._id)){
            allRoomID();
        };
    };
    if(message.a.startsWith('/solo')){
        if(MPP.client.channel.crown.userId == message.p._id){
            if(administrators.includes(message.p._id)){
                let boolean = message.a.slice(6);
                soloPlay(boolean);
            };
        };
    };
    if(message.a.startsWith('/rooms')){
        if(owners.includes(message.p._id)){
            var channelOfPart = MPP.client.channel._id;
            checkRooms(channelOfPart);
        };
    };
    if(message.a.startsWith('/blacklist')){
        if(administrators.includes(message.p._id)){
            var playerToBL = message.a.slice(11);
            blacklist_user(playerToBL);
        };
    };
    if(message.a.startsWith('/commands')){
        if(administrators.includes(message.p._id)){
            commandsShow();
        };
    };
    if(message.a.startsWith('/nameadmin')){
        if(owners.includes(message.p._id)){
            var user = message.a.slice(11);
            name_admin(user);
        };
    };
    if(message.a.startsWith('/roomDB')){
        if(owners.includes(message.p._id)){
            showRoomData();
        };
    };
    if(message.a.startsWith('/idadmin')){
        if(owners.includes(message.p._id)){
            var usr = message.a.slice(9);
            id_admin(usr);
        };
    };
    if(message.a.startsWith('/admins')){
        if(administrators.includes(message.p._id)){
            listAdmins();
        };
    };
});