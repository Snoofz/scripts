require('dotenv').config();
const Client = require('./Client');
const Color = require('./Color');

let cl = new Client("wss://mppclone.com:8443", process.env.MPPCLONE_TOKEN);

cl.start();
cl.setChannel('✧𝓓𝓔𝓥 𝓡𝓸𝓸𝓶✧');

const blessed = require('reblessed');

let screen = blessed.screen({
    mouse: true
});

let chatWidth = '100%';

let chatInput = blessed.textarea({
    bottom: 0,
    left: 0,
    width: chatWidth,
    height: 3,
    tags: true,
    inputOnFocus: true,
    border: {
        type: 'line'
    },
    style: {

    }
});

let chatMessages = blessed.list({
    top: '20%',
    left: 0,
    width: chatWidth,
    height: '80%-3',
    tags: true,
    border: {
        type: 'line'
    },
    style: {

    },
    scrollable: true,
    vi: true,
    keys: true,
    mouse: true
});

let participantList = blessed.list({
    top: 0,
	left: 0,
    width: '100%',
	height: '20%',
    tags: true,
    border: {
        type: 'line'
    },
    style: {

    },
    scrollable: true,
    vi: true,
    keys: true,
    mouse: true
});

screen.append(chatInput);
screen.append(chatMessages);
screen.append(participantList);

chatInput.key('enter', (arg1, arg2) => {
    let msg = chatInput.getValue();
    if(msg.length > 0) {
        cl.sendArray([{m: "a", message: msg.split('\n').join('')}]);
    }
    chatInput.setValue('');
    // scroll to bottom
    chatMessages.scrollTo(chatMessages.items.length);
    screen.render();
});

screen.key(['q', 'C-c'], (ch, key) => {
    return process.exit(0);
});

screen.key('enter', (ch, key) => {
    chatInput.focus();
    screen.render();
});

screen.key('i', (ch, key) => {
    chatMessages.focus();
    screen.render();
});

screen.key('c', (ch, key) => {
    
});

screen.key('p', (ch, key) => {
	participantList.focus();
});

chatMessages.on('click', data => {
    chatMessages.focus();
    screen.render();
});

screen.render();

cl.on('c', msg => {
    let chat = msg.c.map(m => {
        let tag = typeof m.p['tag'] !== 'undefined' ? `[${m.p.tag.text}] ` : "";
        let tagColor = typeof m.p['tag'] !== 'undefined' ? m.p.tag.color : "#ffffff";
        return `{${tagColor}-fg}` + tag + `{${m.p.color}-fg}` + `<${m.p.name}>` + ': ' + m.a
    });
    chatMessages.setItems(chat);
    // scroll to bottom
    chatMessages.scrollTo(chatMessages.items.length);
    screen.render();
});

cl.on('a', msg => {
    handleChatMesage(msg);
    let tag = typeof msg.p['tag'] !== 'undefined' ? `[${msg.p.tag.text}] ` : "";
    let tagColor = typeof msg.p['tag'] !== 'undefined' ? msg.p.tag.color : "#ffffff";
    let m = `{${tagColor}-fg}` + tag + `{${msg.p.color}-fg}` + `<${msg.p.name}>: ${msg.a}`
    chatMessages.addItem(m);
    // scroll to bottom
    chatMessages.scrollTo(chatMessages.items.length);
    screen.render();
});

cl.on('participant added',p => {
	let m = `[${p._id}] {${p.color}-fg}${p.name}`;
	participantList.addItem(m);
	screen.render();
});

cl.on('participant removed', p => {
	let m = `[${p._id}] {${p.color}-fg}${p.name}`;
	participantList.removeItem(m);
	screen.render();
});

function sendChat(msg) {
    cl.sendArray([{m: "a", message: `\u034f${msg}`}]);
}

function handleChatMesage(msg) {
    msg.args = msg.a.split(' ');
    
    if (msg.args[0].startsWith('>')) {
        // eval
        if (msg.p._id !== cl.user._id) return;
        try {
            let input = msg.a.substring(1);
            let result = eval(input);
            sendChat(result);
        } catch (err) {
            sendChat(err);
        }
    }
}

