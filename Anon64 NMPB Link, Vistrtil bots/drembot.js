console.log('owo')
let Client = require('mpp-client')
let gClient = new Client("wss://mppws.cf");
gClient.setChannel('bot')
gClient.start();
privateservermode = false;

const ws = require('ws')
gClient.on('a', msg => {
	console.log(`${msg.p.name} (${msg.p._id.slice(0, 4)}): ${msg.a}`);
});
const ips = [];
const clientList = [];
pName = "";
let Proxy = require('mpp-client-xt')
for (let i = 0; i < ips.length; i++) {
	const client = new Proxy(
		'ws://multiplayerpiano.com:8080',
		'http://' + ips[i] + '/'
	);
	clientList.push(client);
}

var wait = [];
function chatMsg(str) {
  //Creating a waiting list of things to be sent in chat
  if (str.length > 512) {
    i = 0;
    while (str[509 - i] != ' ') {
      ++i;
    }
    part = msg.substring(0, 509 - i) + '...';
    msg = msg.substring(509 - i, msg.length);
    wait.push(part);
    cout(str);
  } else wait.push(str);
}

spawnproxies = function(room) {
	for (let i = 0; i < clientList.length; i++) {
		const client = clientList[i];
		client.setChannel(room);
		for (let n = 0; n < clientList.length; n++) {
			client.sendArray([
				{
					m: 'userset',
					set: {
						name: pName,
					},
				},
			]);
		}
		client.start();
	}
};

function allSay(msg) {
	for (i = 0; i < clientList.length; i++) {
		clientList[i].sendArray([
			{
				m: 'a',
				message: msg,
			},
		]);
	}
}

const FastSpeedtest = require('fast-speedtest-api')


function allEcho() {
	gClient.on('n', msg => {
		for (let i = 0; i < msg.n.length; i++) {
			for (g = 0; g < clientList.length; g++) {
				let u = msg.n[i];
				if (msg.p._id == clientList[g].getOwnParticipant()._id) {
				} else {
					clientList[g].startNote(u.n, 0.3);
				}
			}
		}
	});
}

function allName(name) {
	for (i = 0; i < clientList.length; i++) {
		clientList[i].sendArray([
			{
				m: 'userset',
				set: {
					name: name,
				},
			},
		]);
	}
}
function formCircle() {
	for (i = 0; i < clientList.length; i++) {
		clientList[i].sendArray([
			{
				m: 'm',
				x: Math.sin(50),
				y: Math.cos(50),
			},
		]);
	}
}

function getRandom(list) {
	return list[Math.floor(Math.random() * list.length)];
}
function findClient() {
	const list = clientList.filter(c => c && c.isConnected() && c.channel);
	return getRandom(list) || null;
}



function proxycirclemouse() {
	setInterval(() => {
		let PI2 = 2 * Math.PI,
			FOLLOWADD = PI2 / 18 /*PI2 / 360 * 20*/,
			BOTSLICE = PI2 / clientList.length,
			BOTS = clientList.length;
		let a;
		i = BOTS;
		let inter,
			f = 0;
		for (g = 0; g < clientList.length; g++) {
			a = BOTSLICE * i + f;
			client = clientList[g].getOwnParticipant();
			clientList[g].sendArray([
				{
					m: 'm',
					x: client.x + Math.cos(-2 * Math.PI / BOTS * i + f) * -8,
					y: client.y + Math.sin(-2 * Math.PI / BOTS * i + f) * 8,
				},
				{
					m: 'm',
					x: client.x + Math.cos(-2 * Math.PI / BOTS * i + f) * -8,
					y: client.y + Math.sin(2 * Math.PI / BOTS * i + f) * 8,
				},
			]);

			f = (f + FOLLOWADD) % PI2;
		}
	}, 100);
}

let MPPKeys = [
		'a-1',
		'as-1',
		'b-1',
		'c0',
		'cs0',
		'd0',
		'ds0',
		'e0',
		'f0',
		'fs0',
		'g0',
		'gs0',
		'a0',
		'as0',
		'b0',
		'c1',
		'cs1',
		'd1',
		'ds1',
		'e1',
		'f1',
		'fs1',
		'g1',
		'gs1',
		'a1',
		'as1',
		'b1',
		'c2',
		'cs2',
		'd2',
		'ds2',
		'e2',
		'f2',
		'fs2',
		'g2',
		'gs2',
		'a2',
		'as2',
		'b2',
		'c3',
		'cs3',
		'd3',
		'ds3',
		'e3',
		'f3',
		'fs3',
		'g3',
		'gs3',
		'a3',
		'as3',
		'b3',
		'c4',
		'cs4',
		'd4',
		'ds4',
		'e4',
		'f4',
		'fs4',
		'g4',
		'gs4',
		'a4',
		'as4',
		'b4',
		'c5',
		'cs5',
		'd5',
		'ds5',
		'e5',
		'f5',
		'fs5',
		'g5',
		'gs5',
		'a5',
		'as5',
		'b5',
		'c6',
		'cs6',
		'd6',
		'ds6',
		'e6',
		'f6',
		'fs6',
		'g6',
		'gs6',
		'a6',
		'as6',
		'b6',
		'c7',
	];


function spam() {
	let MPPKeys = [
		'a-1',
		'as-1',
		'b-1',
		'c0',
		'cs0',
		'd0',
		'ds0',
		'e0',
		'f0',
		'fs0',
		'g0',
		'gs0',
		'a0',
		'as0',
		'b0',
		'c1',
		'cs1',
		'd1',
		'ds1',
		'e1',
		'f1',
		'fs1',
		'g1',
		'gs1',
		'a1',
		'as1',
		'b1',
		'c2',
		'cs2',
		'd2',
		'ds2',
		'e2',
		'f2',
		'fs2',
		'g2',
		'gs2',
		'a2',
		'as2',
		'b2',
		'c3',
		'cs3',
		'd3',
		'ds3',
		'e3',
		'f3',
		'fs3',
		'g3',
		'gs3',
		'a3',
		'as3',
		'b3',
		'c4',
		'cs4',
		'd4',
		'ds4',
		'e4',
		'f4',
		'fs4',
		'g4',
		'gs4',
		'a4',
		'as4',
		'b4',
		'c5',
		'cs5',
		'd5',
		'ds5',
		'e5',
		'f5',
		'fs5',
		'g5',
		'gs5',
		'a5',
		'as5',
		'b5',
		'c6',
		'cs6',
		'd6',
		'ds6',
		'e6',
		'f6',
		'fs6',
		'g6',
		'gs6',
		'a6',
		'as6',
		'b6',
		'c7',
	];

	for (i = 0; i < clientList.length; i++) {
		for (let key in MPPKeys) {
			clientList[i].sendArray([
				{
					m: 'n',
					t: Date.now() + gClient.serverTimeOffset + 300,
					n: [
						{
							n: MPPKeys[key],
							v: 2,
						},
					],
				},
			]);
			clientList[i].sendArray([
				{
					m: 'n',
					t: Date.now() + gClient.serverTimeOffset + 300,
					n: [
						{
							n: MPPKeys[key],
							v: 2,
						},
					],
				},
			]);
			clientList[i].sendArray([
				{
					m: 'n',
					t: Date.now() + gClient.serverTimeOffset + 300,
					n: [
						{
							n: MPPKeys[key],
							v: 2,
						},
					],
				},
			]);
			clientList[i].sendArray([
				{
					m: 'n',
					t: Date.now() + gClient.serverTimeOffset + 300,
					n: [
						{
							n: MPPKeys[key],
							v: 2,
						},
					],
				},
			]);
		}
	}
}

function cancerbot() {
	const Message = new gClient.chatMsg('CANCER BOTS, INCOMING!!! (Thanks Infinity for this AWFUL Idea :D)');
	setInterval(() => {
		for (i = 0; i < clientList.length; i++) {
			clientList[i].sendArray([
				{
					m: 'm',
					x: (Math.random() * 100) | 1,
					y: (Math.random() * 100) | 1,
				},
			]);
		}
	}, 0);
	sbot.on('a', msg => {
		allSay('Banned for saying ' + msg.a);
	});
}

/*allBallonString = function() { 
for (i = 0; i < clientList.length; i++) {
  let mass = 100;
  let gravity = 5;
  let friction = 4;
  let pos = { x: 50, y: 50 };
  let pos2 = { x: 50, y: 50 };
  let acc = { x: 0, y: 0 };
  let vel = { x: 0, y: 0 };
  let follower = '7504f8a8bb9e7c39ddbcbd27';
  let followPos = { x: 50, y: 50 };
  clientList[i].on('m', function(msg) {
    let part = clientList[i].findParticipantById(msg.id);
    if (part._id == clientList[i].user._id) return;
    followPos.x = +msg.x;
    followPos.y = +msg.y;
  });
  let updateInt = setInterval(function() {
    pos2.x = followPos.x;
    pos2.y = followPos.y;
    acc.x = (pos2.x - pos.x - friction * vel.x) / mass;
    acc.y = (pos2.y - pos.y - friction * vel.y + gravity) / mass;
    vel.x += acc.x;
    vel.y += acc.y;
    pos.x += vel.x;
    pos.y += vel.y;
    clientList[i].sendArray([
      {
        m: 'm',
        x: (clientList[i].getOwnParticipant().x = pos.x),
        y: (clientList[i].getOwnParticipant().y = pos.y),
      },
    ]);
  }, 15);
}
}*/


adminIds = [
	'a2db90c04712080af5d797a1', //citronsustain
	'63ce4e6b86780ae23e04a5b8', //citronsustain
	'd55bf273f64f37c5691f3bbb', //Anon64
	'051ee1ec34cf0218653af6a8', //JPDLD
	'0eab0774ba77d8744c9bf2a4', //Infinity~
	'5b414d782edd2d3f517a5080', //dude/error
	'eda8c37f125a3641fe041799', //Japanese
	'6918006370d05f4802047186', //ATLAS A.I.
	'5a75bfc94fb4cc2bcc3cc9b1', //Name
	'144E16C02D07B16F1F8A',     //Vistril - WOPP
    'e53791784525dc011f410c47', //repl bot
    '93ba8e3dfa222431a3e2'      //private server id
];
global.ws = require('ws')

let util = require('util')

gClient.on('a', msg => {
	let cmdChar = 's!';
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'js') {
		if (adminIds.includes(msg.p._id)) {
			try {
				const Message = new gClient.chatMsg('> ' + eval(input));
			} catch (e) {
				const Message = new gClient.chatMsg('> ' + e);
			}
		}
	}
});
sbot = gClient;

blIds = [];

function getUser(name) {
	let array = [];
	for (let pl in sbot.ppl) {
		if (sbot.ppl[pl].name.toLowerCase().includes(name.toLowerCase())) {
			array.push(sbot.ppl[pl]);
		}
	}
	return array[Math.floor(Math.random() * array.length)];
}

Array.prototype.has = function(query) {
	try {
		return this.filter(function(el, thing, arr) {
			if (!arr[thing].startsWith(query.toLowerCase())) return;
			return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
		});
	} catch (e) {
		console.error(e);
	}
};

/*gClient.on('a', msg => {
	if (
		msg.a.includes('/help') ||
		msg.a.includes('^help') ||
		msg.a.includes('>help') ||
		msg.a.includes('*help') ||
		msg.a.includes('.help') ||
		msg.a == '!help'
	) {
		const Message = new gClient.chatMsg(`${msg.p.name}, you can look at my commands by doing ${cmdChar}help`);
	}
});*/

botname = 'DreamBot 3';
cmdChar = 'd!';
setInterval(() => {
	gClient.sendArray([
		{
			m: 'userset',
			set: {
				name: `${botname} [${cmdChar}help] `,
			},
		},
	]);
}, 1000);
sbot.on('a', msg => {
	opcmds = ['js', 'mouse', 'emershutdown', 'ban', 'unban'];
	gcmds = [
		'rps',
		'8ball',
		'guess',
		'rps7 (With ❤️ from Anon64)',
		'rps101 (With ❤️ from Anon64)',
	];
	ucmds = [
		'timer',
        'test',
		'ftok',
		'ftoc',
		'ktof',
		'ktoc',
		'ctok',
		'toDiscordAlphabet (WIP)',
		'google',
		'countcmds',
		'about',
		'userinfo',
		'weather',
		'afk',
		'brainfuck (bf)',
        'ping',
        'speedtest'
	];
	fcmds = [
		'fuck',
		'kill',
		'slap',
		'lick',
		'kiss',
		'report',
		'me',
		'drink',
		'eat',
		'cleversay',
		'bunny',
		'sellosdelamarina',
		'lenny',
		'lenin',
		'b',
		'easteregg1',
		'kevin',
		'JPDLD',
		'ping',
		'pong',
		'shakespeare',
		'jeremyclarkson',
		'luke',
		'mw3',
		'rblx',
		'france2',
		'sweden',
		'sieg',
		'wearenotsupercars',
		'dispenser',
		'sneeze',
		'anon64',
        'abon32'
	];
	cookiecmds = [
		'getCookies',
		'setCookies',
		'earnCookies',
		'removeCookies',
		'alterCPS',
		'autoClick',
		'fasterAutoClick',
		'autoClickFrenzy',
		'samePriceBuildings',
		'allBuildingsFree',
		'stopAutoClick',
		'spawnGoldenCookie',
		'achCheatCookies',
		'removeCheatCookies',
		'RuinTheFun',
		'openSesameMenu',
		'gimmeClickFrenzy',
		'infiniteGrimoreMagic',
		'sacrificeBuildings',
		'setGoldenCookiesClicked',
		'autoClickgolden',
		'spawnGoldenCookies',
		'automateTasks',
		'fuckWrinklers',
		'spamKillWrinklers',
		'unFuckWrinklers',
		'spawnAllWrinklers',
		'unlockAllAch',
		'unlockAch',
		'unlockUpgrade',
		'unlockandBuyUpgrade',
		'unlockAllUpgrades',
		'unlockandbuyAllUpgrades',
		'MakeAllUpgradesFree',
		'instantResearch',
		'changeHeavenChipsTemp',
		'changeHeavenChips',
		'openHeavenlyMenu',
		'maxHeavenChips',
		'infiniteHeavenChips',
		'dungeonSpeed',
		'dungeonLevel',
		'setSugarLumps',
		'SugarLumpType',
		'gameFPS',
		'autoClickReindeer',
		'spawnReindeer',
	];
	adminstring2 = cmdChar + opcmds[0];
	gcmds2 = cmdChar + gcmds[0];
	ucmds2 = cmdChar + ucmds[0];
	fcmds2 = cmdChar + fcmds[0];
	cookiestring = cmdChar + cookiecmds[0];
	for (d = 1; d < opcmds.length; d++) {
		adminstring2 += ', ' + cmdChar + opcmds[d];
	}
	for (d = 1; d < ucmds.length; d++) {
		ucmds2 += ', ' + cmdChar + ucmds[d];
	}
	for (d = 1; d < fcmds.length; d++) {
		fcmds2 += ', ' + cmdChar + fcmds[d];
	}
	for (d = 1; d < gcmds.length; d++) {
		gcmds2 += ', ' + cmdChar + gcmds[d];
	}
	for (d = 1; d < cookiecmds.length; d++) {
		cookiestring += ', ' + cmdChar + cookiecmds[d];
	}
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'help' || cmd == cmdChar + 'h') {
		if (adminIds.includes(msg.p._id)) {
			if (input === '') {
				const Message = new gClient.chatMsg(
					`Do ${cmdChar}help one of these inputs: util, games, fun, admin, all `
				);
			} else if (input == 'util') {
				const Message = new gClient.chatMsg(`Utilities: ${ucmds2}`);
			} else if (input == 'games') {
				const Message = new gClient.chatMsg(`Games: ${gcmds2}`);
			} else if (input == 'fun') {
				const Message = new gClient.chatMsg(`Fun: ${fcmds2}`);
			} else if (input == 'admin') {
				const Message = new gClient.chatMsg(`Admin cmds: ${adminstring2}`);
			} else if (input == 'all') {
				const Message = new gClient.chatMsg(
					`All commands: ${ucmds2}, ${gcmds2}, ${fcmds2},  ${adminstring2}`
				);
			} else if (input == 'cookieindex') {
				const Message = new gClient.chatMsg(`Cookie index: ${cookiestring}`);
			}
		} else {
			if (input === '') {
				const Message = new gClient.chatMsg(
					`Do ${cmdChar}help one of these inputs: util, games, fun, admin, all `
				);
			} else if (input == 'util') {
				const Message = new gClient.chatMsg(`Utilities: ${ucmds2}`);
			} else if (input == 'games') {
				const Message = new gClient.chatMsg(`Games: ${gcmds2}`);
			} else if (input == 'fun') {
				const Message = new gClient.chatMsg(`Games: ${fcmds2}`);
			} else if (input == 'all') {
				const Message = new gClient.chatMsg(`All commands: ${ucmds2}${gcmds2}${fcmds2}${adminstring2}`);
			}
		}
	}
});
let giphy = require('giphy-api')('MdhaibUr7iyf4Z2unueD0KwCqUw2t8du')

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let output = parseInt(input);
	if (cmd == cmdChar + 'check') {
		if (input === '') {
			const Message = new gClient.chatMsg('Please input a number!');
		} else if (isNaN(output)) {
			const Message = new gClient.chatMsg('That is not a number!');
		} else if (typeof output == 'number') {
			const Message = new gClient.chatMsg('That is a number! ' + input);
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let output = parseInt(input);
	if (cmd == cmdChar + 'timer') {
		if (input === '') {
			const Message = new gClient.chatMsg('Please input a number.');
		} else if (isNaN(output)) {
			const Message = new gClient.chatMsg('That is not a number.');
		} else if (typeof output == 'number') {
			if (output > 1000000) {
				const Message = new gClient.chatMsg('too long lol');
			} else {
				const Message = new gClient.chatMsg('Started a timer for ' + output + 'milliseconds.');
				setTimeout(() => {
					const Message = new gClient.chatMsg(`Time's up!`);
				}, output);
			}
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'test') {
		const Message = new gClient.chatMsg('test ' + input);
	}
});

insults = [
	'Your eye laughs like LUA!',
	'Your ear smells like poorly censored porn!',
	'Your body laughs like salty!',
	'Your mouth appears to be a really bad random insult generators!',
	'Your eye is as stupid as my dad!',
	'Your mother-in-law is firepoles!',
	'Your tea looks just like gross!',
	'Your mother-in-law looks like a smelly fish!',
	'Your boob sounds like my lizard!',
	'Your seagull wants to be mouldy cheese!',
	'Your bro laughs like fuck!',
	'Your ear is as stupid as a fart!',
	'Your favourite thing is as stupid as meow!',
	'Your face is an egg left in the sun for too long!',
	'Your rabbit appears to be poorly censored porn!',
];

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let degrees = parseInt(input);
	let ftokoutput = (degrees - 32) * 0.55555556 + 273.15;
	if (cmd == cmdChar + 'ftok') {
		if (input === '') {
			const Message = new gClient.chatMsg('Please input a number.');
		} else if (isNaN(input)) {
			const Message = new gClient.chatMsg('That is not a number.');
		} else {
			const Message = new gClient.chatMsg(`Converting ${input}F to  Kelvin: ${tempoutput}K`);
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let degrees = parseInt(input);
	let ftocoutput = (degrees - 32) * 0.5556;
	if (cmd == cmdChar + 'ftoc') {
		if (input === '') {
			const Message = new gClient.chatMsg('Please input a number.');
		} else if (isNaN(input)) {
			const Message = new gClient.chatMsg('That is not a number.');
		} else {
			const Message = new gClient.chatMsg(`Converting ${input}F to  Celcius: ${output}C`);
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	try {
		if (cmd == cmdChar + 'report') {
			if (blIds.includes(msg.p._id)) {
			} else {
				const Message = new gClient.chatMsg(
					`Thanks, ${msg.p.name}! A screenshot of ${getUser(input)
						.name} and their wrong-doings has been reported to the FBI. It will be investigated shortly.`
				);
			}
		}
	} catch (e) {
		const Message = new gClient.chatMsg(`User not  found. >:C`);
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let degrees = parseInt(input);
	let ctofoutput = input * 9 / 5 + 32;
	if (cmd == cmdChar + 'ctof') {
		if (input === '') {
			const Message = new gClient.chatMsg('Please input a number.');
		} else if (isNaN(input)) {
			const Message = new gClient.chatMsg('That is not a number.');
		} else {
			const Message = new gClient.chatMsg(`Converting ${input}C to  Fahrenheit: ${output}F`);
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let degrees = parseInt(input);
	let ktofoutput = 1.8 * (input - 273) + 32;
	if (cmd == cmdChar + 'ktof') {
		if (input === '') {
			const Message = new gClient.chatMsg('Please input a number.');
		} else if (isNaN(input)) {
			const Message = new gClient.chatMsg('That is not a number.');
		} else {
			const Message = new gClient.chatMsg(`Converting ${input}K to  Fahrenheit: ${output}F`);
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let degrees = parseInt(input);
	let ktocoutput = input - 273;
	if (cmd == cmdChar + 'ktoc') {
		if (input === '') {
			const Message = new gClient.chatMsg('Please input a number.');
		} else if (isNaN(input)) {
			const Message = new gClient.chatMsg('That is not a number.');
		} else {
			const Message = new gClient.chatMsg(`Converting ${input}K to Celcius: ${output}C`);
		}
	}
});

sbot.on('a', msg => {
  let cmd = msg.a.split(' ')[0].toLowerCase();
  if (cmd == cmdChar + 'abon32') {
    const Message = new gClient.chatMsg(')NATAS(sataN deman yug A -- .tahw wonk u emos hctaw ot ecalp doog a osla si ti .etacinummoc elpoep erehw ecalp a si tenretni eht .tenretni eht ni desu ylediw saw ti .tpircsavaj dellac namuh a yb detnevni saw taht egaugnal gnimmargorp eht ni era taht sedoc .sedoc syalpsid eh taht si foorp eht dna tob a si 46nonA ,gnidrocca fo sdrocer gnidrocca eht ot gnidrocca gnidrocca ot gnidroccA');
  }
});


sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let degrees = parseInt(input);
	let ctokoutput = input + 273;
	if (cmd == cmdChar + 'ctok') {
		if (input === '') {
			const Message = new gClient.chatMsg('Please input a number.');
		} else if (isNaN(input)) {
			const Message = new gClient.chatMsg('That is not a number.');
		} else {
			const Message = new gClient.chatMsg(`Converting ${input}C to  Fahrenheit: ${output}F`);
		}
	}
});
sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let numStr = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];
	function convert(input2) {
		return input2
			.toLowerCase()
			.replace(/\s/g, '   ')
			.replace(/([a-z])/g, ':regional_indicator_$1: ')
			.replace(/([0-9])/g, function($1) {
				return ':' + numStr[$1] + ': ';
			});
	}
	if (cmd == cmdChar + 'toDiscordAlphabet') {
		if (input === '') {
			const Message = new gClient.chatMsg('Please input some text for me to convert to Discord Emoji.');
		} else {
			const Message = new gClient.chatMsg(convert(input));
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let newinput = input.replace(/ /i, '-');
	if (cmd == cmdChar + 'toSpinal') {
		if (blIds.includes(msg.p._id)) {
		} else {
			const Message = new gClient.chatMsg(newinput);
		}
	}
});

function randomSign() {
	let a = Math.random();
	if (a < 0.5) {
		return 1;
	}
	return -1;
}

function distance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

let ground = 60;

let x = 50;
let y = 0;

let gravity = 2;

let xVelocity = 0;
let yVelocity = 0;

let bounceY = 0.9;
let bounceX = 0.8;

let scoreLeft = 0;
let scoreRight = 0;

let ellapsedTime = 0;

foo = setInterval(() => {
	ellapsedTime += 60;
	if (ellapsedTime > 10000) {
	
		ellapsedTime = 0;
	}

	yVelocity += gravity;

	x += xVelocity;
	y += yVelocity;

	if (y > ground) {
		y = ground;
		yVelocity = -bounceY * yVelocity;
		xVelocity = bounceX * xVelocity;
	}

	if (y < 0) {
		y = 0;
		yVelocity = -bounceY * yVelocity;
	}

	if (x < 0) {
		x = 0;
		xVelocity = -bounceX * xVelocity;
		scoreLeft += 1;
	}

	if (x > 100) {
		x = 100;
		xVelocity = -bounceX * xVelocity;
		scoreRight += 1;
	}

	sbot.sendArray([{ m: 'm', x: x.toString(), y: y.toString() }]);
}, 60);

sbot.on('m', function(msg) {
	if (distance(x, y, msg.x, msg.y) < 10) {
		xVelocity = -Math.sign(msg.x - x) * 5;
		yVelocity = 15;
	}
});

proxymouse = function() {
	function randomSign() {
		let a = Math.random();
		if (a < 0.5) {
			return 1;
		}
		return -1;
	}

	function distance(x1, y1, x2, y2) {
		return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
	}

	let ground = 60;

	let x = 50;
	let y = 0;

	let gravity = 2;

	let xVelocity = 0;
	let yVelocity = 0;

	let bounceY = 0.9;
	let bounceX = 0.8;

	let scoreLeft = 0;
	let scoreRight = 0;

	let ellapsedTime = 0;

	foo = setInterval(() => {
		ellapsedTime += 60;
		if (ellapsedTime > 10000) {
			findClient(30).sendArray([
				{
					m: 'userset',
					set: { name: `[score: ${scoreRight}:${scoreLeft}]` },
				},
			]);
			ellapsedTime = 0;
		}

		yVelocity += gravity;

		x += xVelocity;
		y += yVelocity;

		if (y > ground) {
			y = ground;
			yVelocity = -bounceY * yVelocity;
			xVelocity = bounceX * xVelocity;
		}

		if (y < 0) {
			y = 0;
			yVelocity = -bounceY * yVelocity;
		}

		if (x < 0) {
			x = 0;
			xVelocity = -bounceX * xVelocity;
			scoreLeft += 1;
		}

		if (x > 100) {
			x = 100;
			xVelocity = -bounceX * xVelocity;
			scoreRight += 1;
		}

		findClient((Math.random() * clientList.length) | 1).sendArray([
			{ m: 'm', x: x.toString(), y: y.toString() },
		]);
	}, 60);
	findClient((Math.random() * clientList.length) | 1).on('m', function(msg) {
		if (distance(x, y, msg.x, msg.y) < 10) {
			xVelocity = -Math.sign(msg.x - x) * 5;
			yVelocity = 15;
		}
	});
};

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'mouse') {
		if (adminIds.includes(msg.p._id)) {
			if (input == '') {
				const Message = new gClient.chatMsg('What?');
			} else if (input == 'off') {
				const Message = new gClient.chatMsg('Bouncy mouse disabled.');
				clearInterval(foo);
			} else if (input == 'on') {
				const Message = new gClient.chatMsg('Bouncy mouse enabled.');
				foo = setInterval(() => {
					ellapsedTime += 60;
					if (ellapsedTime > 10000) {
						
						ellapsedTime = 0;
					}

					yVelocity += gravity;

					x += xVelocity;
					y += yVelocity;

					if (y > ground) {
						y = ground;
						yVelocity = -bounceY * yVelocity;
						xVelocity = bounceX * xVelocity;
					}

					if (y < 0) {
						y = 0;
						yVelocity = -bounceY * yVelocity;
					}

					if (x < 0) {
						x = 0;
						xVelocity = -bounceX * xVelocity;
						scoreLeft += 1;
					}

					if (x > 100) {
						x = 100;
						xVelocity = -bounceX * xVelocity;
						scoreRight += 1;
					}

					sbot.sendArray([{ m: 'm', x: x.toString(), y: y.toString() }]);
				}, 60);
			}
		}
	}
});
blIds = [];
blNames = [];
gClient.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let name = msg.p.name;
	let target = getUser(input);
	if (cmd == cmdChar + 'slap') {
		try {
			if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
			} else if (input === '') {
				const Message = new gClient.chatMsg(
					`${name} attempts to slap someone. Instead, they looked retarded waving their hand around.`
				);
			} else if (target.name == msg.p.name) {
				const Message = new gClient.chatMsg(`${name} slaps themselves.`);
			} else {
				const Message = new gClient.chatMsg(
					`${name} slaps ${getUser(input).name}. It left a mark on their face.`
				);
			}
		} catch (e) {
			const Message = new gClient.chatMsg('User not found. >:C');
		}
	}
});

gClient.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let name = msg.p.name;
	let target = getUser(input);
	if (cmd == cmdChar + 'fuck') {
		try {
			if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
			} else if (input === '') {
				const Message = new gClient.chatMsg(`${name} fucks the air.`);
			} else if (target.name == msg.p.name) {
				const Message = new gClient.chatMsg(`${name} fucks themselves`);
			} else {
				const Message = new gClient.chatMsg(
					`${name} fucks ${getUser(input)
						.name} SO FUCKING HARD they both die from too much sex...`
				);
			}
		} catch (e) {
			const Message = new gClient.chatMsg('User not found. >:C');
		}
	}
});

gClient.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let name = msg.p.name;
	let target = getUser(input);
	if (cmd == cmdChar + 'lick') {
		try {
			if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
			} else if (input === '') {
				const Message = new gClient.chatMsg(`Please input a user to lick.`);
			} else if (target.name == msg.p.name) {
				const Message = new gClient.chatMsg(`${name} licks themselves. I do not want to know where.`);
			} else {
				const Message = new gClient.chatMsg(`${name} licks ${getUser(input).name}.`);
			}
		} catch (e) {
			const Message = new gClient.chatMsg('User not found. >:C');
		}
	}
});

gClient.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let name = msg.p.name;
	let target = getUser(input);
	if (cmd == cmdChar + 'kill') {
		try {
			if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
			} else if (input === '') {
				const Message = new gClient.chatMsg(`${name} attempts to stab the air. Didn't work.`);
			} else if (target.name == msg.p.name) {
				const Message = new gClient.chatMsg(`${name} commits suicide! :(`);
			} else {
				const Message = new gClient.chatMsg(
					`${name} kills ${getUser(input)
						.name} with a balisong. ${name} is facing up to 20 years in prison. :(`
				);
			}
		} catch (e) {
			const Message = new gClient.chatMsg('User not found. >:C');
		}
	}
});

gClient.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let name = msg.p.name;
	let target = getUser(input);
	if (cmd == cmdChar + 'kiss') {
		try {
			if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
			} else if (input === '') {
				const Message = new gClient.chatMsg(`Please input a user.`);
			} else if (target.name == msg.p.name) {
				const Message = new gClient.chatMsg(`${name} kisses their own hand. Lol`);
			} else {
				const Message = new gClient.chatMsg(`${name} kisses ${getUser(input).name}.`);
			}
		} catch (e) {
			const Message = new gClient.chatMsg('User not found. >:C');
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'me') {
		if (blIds.includes(msg.p._id)) {
		} else {
			const Message = new gClient.chatMsg(`**${msg.p.name} ${input}`);
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'eat') {
		if (blIds.includes(msg.p._id)) {
		} else {
			const Message = new gClient.chatMsg(`**${msg.p.name} eats (a(n)) ${input}. It was delicious.`);
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'drink') {
		if (blIds.includes(msg.p._id)) {
		} else {
			const Message = new gClient.chatMsg(`**${msg.p.name} drinks (a(n)) ${input}`);
		}
	}
}); //fuk dis

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	

	if (cmd == cmdChar + 'lenny') {
		const Message = new gClient.chatMsg('( ͡° ͜ʖ ͡°)');
	}

	if (cmd == cmdChar + 'lenin') {
		const Message = new gClient.chatMsg('(☭ ͜ʖ ☭)');
	}

	if (cmd == cmdChar + 'easteregg1') {
		const Message = new gClient.chatMsg(msg.p.name + ' found an easter egg and gets a cookie. Yay.');
	}

	if (cmd == cmdChar + 'kevin') {
		const Message = new gClient.chatMsg(' I HOPE YOU GO FUCKING DIE AND GET CANCER  - Kevin ');
	}

	if (cmd == cmdChar + 'JPDLD') {
		const Message = new gClient.chatMsg('T R A I N S!!!');
	}

	if (cmd == cmdChar + 'ping') {
		const Message = new gClient.chatMsg(' Pong! ');
	}

	if (cmd == cmdChar + 'pong') {
		const Message = new gClient.chatMsg(' Ping! ');
	}

	if (cmd == cmdChar + 'shakespeare') {
		const Message = new gClient.chatMsg(' To be or not to be, that is the question. ');
	}

	if (cmd == cmdChar + 'jeremyclarkson') {
		const Message = new gClient.chatMsg('My genius staggers me, once again!');
	}

	if (cmd == cmdChar + 'luke') {
		const Message = new gClient.chatMsg(' Use the force, Luke! ');
	}

	if (cmd == cmdChar + 'mw3') {
		const Message = new gClient.chatMsg(' Mission failed, we’ll get em next time. ');
	}

	if (cmd == cmdChar + 'rblx') {
		const Message = new gClient.chatMsg(' oof ');
	}

	if (cmd == cmdChar + 'france2') {
		const Message = new gClient.chatMsg('0-400-0, 42 sec.');
	}

	if (cmd == cmdChar + 'sweden') {
		const Message = new gClient.chatMsg('0-400-0, 36 sec.');
	}

	if (cmd == cmdChar + 'sieg') {
		const Message = new gClient.chatMsg('heil');
	}

	if (cmd == cmdChar + 'wearenotsupercars') {
		const Message = new gClient.chatMsg(' We are Lamborghini. ');
	}

	if (cmd == cmdChar + 'dispenser') {
		const Message = new gClient.chatMsg(' Nope.avi ');
	}

	if (cmd == cmdChar + 'jeremyclarkson') {
		const Message = new gClient.chatMsg(' I AM BETTER THAN YOU AND MY CAR IS TOO. ');
	}

	if (cmd == cmdChar + 'sneeze') {
		const Message = new gClient.chatMsg(msg.p.name + ' sneezes everywhere.  ');
	}

	if (cmd == cmdChar + 'anon64') {
		const Message = new gClient.chatMsg(
			'According to according according to the according records of according, Anon64 is a bot and the proof is that he displays codes. codes that are in the programming language that was invented by a human called javascript. it was widely used in the internet. the internet is a place where people communicate. it is also a good place to watch some u know what. -- A guy named Natas(SATAN)'
		);
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'b') {
		const Message = new gClient.chatMsg('🅱️' + input);
	}
});
/*sbot.on('a', msg => {
  if (cmd == cmdChar + 'rps') {
    let cmd = msg.a.split(' ')[0].toLowerCase();
    let input = msg.a.substring(cmd.length).trim();
    let RPS = input.charAt(0);
    let choice = ['r', 'p', 's'];
    let rand = choice.random();
    let won = 0;
    let games = 0;
    let names = { r: 'rock', p: 'paper', s: 'scissors' };
    if (!input || !choice.includes(RPS)) {
      const Message = new gClient.chatMsg(`Pick: your choices are: ${choice.join(', ')}`);
    }
    let win = `You Won! You chose ${names[RPS]}, Computer chose ${names[
      rand
    ]}. Confidence: ${(won / games * 100).toFixed(2)}%`;
    let lost = `You Lost! You chose ${names[RPS]}, Computer chose ${names[
      rand
    ]}. Confidence: ${(won / games * 100).toFixed(2)}%`;
    ++games;
    if (RPS == rand) {
      const Message = new gClient.chatMsg(
        `Tie! You both chose ${names[RPS]}. Confidence: ${(won /
          games *
          100).toFixed(2)}%`
      );
      --games;
    } else
      try {
        if (RPS == 'r') {
          if (rand == 'p') {
            const Message = new gClient.chatMsg(lost);
          } else if (rand == 's') {
            const Message = new gClient.chatMsg(win);
            ++won;
          }
        } else if (RPS == 'p') {
          if (rand == 's') {
            const Message = new gClient.chatMsg(lost);
          } else if (rand == 'r') {
            const Message = new gClient.chatMsg(win);
            ++won;
          }
        } else if (RPS == 's') {
          if (rand == 'r') {
            const Message = new gClient.chatMsg(lost);
          } else if (rand == 'p') {
            const Message = new gClient.chatMsg(win);
            ++won;
          }
        }
      } catch (e) {
        console.log(e);
      }
  }
}); */ sbot.on(
	//de fuk happened here??
	'a',
	function(msg) {
		let cmd = msg.a.split(' ')[0].toLowerCase();
		let input = msg.a.substring(cmd.length).trim();
		let eightballwords = [
			'It is certain',
			'It is decidedly so',
			'Without a doubt',
			'Yes, definitely.',
			'You may rely on it',
			'As I see it yes',
			'Most likely',
			'Outlook good',
			'Yes',
			'Signs point to yes',
			'Reply hazy, try again.',
			'Ask again later',
			'Better not tell you now',
			'Cannot predict now',
			'Concentrate and ask again',
			'Dont count on it',
			'My reply is no',
			'My sources say no',
			'Outlook not so good',
			'Very doubtful',
			'No',
		];
		eightballrandom = Math.floor(Math.random() * eightballwords.length);
		if (cmd == cmdChar + '8ball') {
			if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
			} else {
				if (input == '') {
					const Message = new gClient.chatMsg(
						'8ball: ' +
							msg.p.name +
							", Ask me a question to answer, don't just stand there!"
					);
				} else {
					const Message = new gClient.chatMsg(
						'8ball: ' + msg.p.name + ', ' + eightballwords[eightballrandom]
					);
				}
			}
		}
	}
);

magic_number = (Math.random() * 100) | 1;

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let output = parseInt(input);
	if (cmd == cmdChar + 'guess') {
		if (blIds.includes(msg.p._id)) {
		} else {
			if (input === '') {
				const Message = new gClient.chatMsg('Please input a number!');
			} else if (isNaN(output)) {
				const Message = new gClient.chatMsg('That is not a number!');
			} else if (typeof output == 'number') {
				if (input > magic_number) {
					const Message = new gClient.chatMsg('Lower!');
				} else if (input < magic_number) {
					const Message = new gClient.chatMsg('Higher!');
				} else if (input == magic_number) {
					const Message = new gClient.chatMsg(
						`${msg.p
							.name} guessed the magic number correctly (${magic_number}), and won some cookies!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`
					);
					magic_number = (Math.random() * 100) | 1;
				}
			}
		}
	}
});

sbot.on('a', msg => {
	let b = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(b.length).trim();

	let rockwords = [
		'You Lose! Computer chose paper.',
		'You win! Computer chose scissors.',
		'Tie! You both chose rock.',
		'You win! Computer chose scissors',
	];
	let rockrandom = Math.floor(Math.random() * rockwords.length);

	let paperwords = [
		'You Lose! Computer chose scisssors.',
		'You win! Computer chose rock.',
		'Tie! You both chose paper.',
		'You win! Computer chose rock.',
	];
	let paperrandom = Math.floor(Math.random() * paperwords.length);

	let scissorswords = [
		'You Lose! Computer chose rock.',
		'You win! Computer chose paper.',
		'Tie! You both chose scissors.',
		'You win! Computer chose paper.',
	];
	let scissorsrandom = Math.floor(Math.random() * scissorswords.length); //FIXME: add some difficulty settings or something cause RPS is stupidly hard

	if (cmd == cmdChar + 'rps' || cmd == cmdChar + 'rockpaperscissors') {
			if (input === '') {
				const Message = new gClient.chatMsg(
					`Welcome to RPS! Do ${cmdChar}rps <rock, paper, scissors> to play!`
				);
			} else if (input.charAt(0).toLowerCase() == 'r') {
				const Message = new gClient.chatMsg(`RPS: ${rockwords[rockrandom]}`);
			} else if (input.charAt(0).toLowerCase() == 'p') {
				const Message = new gClient.chatMsg(`RPS: ${paperwords[paperrandom]}`);
			} else if (input.charAt(0).toLowerCase() == 's') {
				const Message = new gClient.chatMsg(`RPS: ${paperwords[paperrandom]}`);
			} else {
				const Message = new gClient.chatMsg(
					`Invalid syntax: Usage: ${cmdChar}rps <rock(r), paper(p), scissors(s)>. `
				);
			}
		}
});

Array.prototype.random = function(q) {
	if (q === undefined) {
		return this.length > 0
			? this[Math.floor(this.length * Math.random())]
			: undefined;
	} else {
		let amount = q >>> 0;
		let result = this.slice(0, amount);
		for (let i = amount; i < this.length; i++) {
			let j = Math.floor(Math.random() * i);
			if (j < amount) {
				result[j] = this[i];
			}
		}
		return result;
	}
};

cleverChar = '#'; //unused
let Cleverbot = require('cleverbot-node');

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let cleverMessage = msg.a.substring(cmd.length).trim();
	cleverbot = new Cleverbot();
	cleverbot.configure({
		botapi: 'CC5o97Kdi8i_8BGJspSITy8du9g',
	});
	if (cmd == cmdChar + 'cleversay') {
		if (blIds.includes(msg.p._id)) {
		} else {
			cleverbot.write(cleverMessage, function(response) {
				const Message = new gClient.chatMsg(`Cleverbot: ${response.output}`);
			});
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'restart') {
		if (adminIds.includes(msg.p._id)) {
			if (input === '') {
				const Message = new gClient.chatMsg('Are you sure? (Y/N)');
			} else if (input == 'y') {
				const Message = new gClient.chatMsg('restarting');
				sbot.stop();
				setTimeout(() => {
					sbot.start();
				}, 3000);
			} else if (input == 'n') {
				const Message = new gClient.chatMsg('shutdown prompt cancelled');
			}
		}
	}
});

let google = require('google');
sbot.on('a', msg => {
	googleAvailable = true;
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	google.resultsPerPage = 4;
	let nextCounter = 0;
	if (cmd == cmdChar + 'google') {
		if (blIds.includes(msg.p._id)) {
		} else {
			if (googleAvailable) {
				google(input, function(err, res) {
					if (err) console.error(err);

					for (let i = 0; i < res.links.length; ++i) {
						let link = res.links[i];
						 new gClient.chatMsg(link.title + ' - ' + link.href);
						 new gClient.chatMsg(link.description + '\n');
					}

					/*if (nextCounter < 4) {
    nextCounter += 1
    if (res.next) res.next()
  }*/
				});
				setTimeout(() => {
					googleAvailable = true;
				}, 6000);
			} else {
				const Message = new gClient.chatMsg('Please wait.');
			}
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'countcmds') {
		const Message = new gClient.chatMsg(
			`Command count: ${gcmds.length +
				ucmds.length +
				fcmds.length +
				opcmds.length}`
		);
	}
});

let Color = require('./Color.js')
sbot.on('a', function(msg) {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	if (cmd == cmdChar + 'userinfo') {
		if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
		} else {
			const Message = new gClient.chatMsg(
				'Information about the user ' +
					msg.p.name +
					': ' +
					' _id: ' +
					msg.p._id +
					' color: ' +
					msg.p.color +
					'(' +
					new Color(msg.p.color).getName().toLowerCase() +
					')'
			);
			if (adminIds.includes(msg.p._id)) {
				const Message = new gClient.chatMsg('User is admin.')
			} else {
				const Message = new gClient.chatMsg('User is not admin.')
			}
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let target = getUser(input);
	if (cmd == cmdChar + 'ban') {
		try {
			if (adminIds.includes(msg.p._id)) {
				if (target.name == msg.p.name) {
					const Message = new gClient.chatMsg('You cannot ban yourself.')
				} else if (adminIds.includes(target.name)) {
					const Message = new gClient.chatMsg('You cannot ban an admin')
				} else if (blIds.includes(target.name)) {
					const Message = new gClient.chatMsg('That user is already banned!')
				} else {
					blIds.push(target.name);
					const Message = new gClient.chatMsg(`${target.name} has been banned.`);
				}
			}
		} catch (e) {
			const Message = new gClient.chatMsg('User not found. >:C')
		}
	}
});

sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let target = getUser(input);
	try {
		if (cmd == cmdChar + 'unban') {
			if (adminIds.includes(msg.p._id)) {
				if (target.name == msg.p.name) {
					const Message = new gClient.chatMsg('The hell are you trying to accomplish, here?');
				} else if (adminIds.includes(target.name)) {
					const Message = new gClient.chatMsg(
						"You can't unban this person, one, cause they're an admin, and two, they're not even on the banlist. "
					);
				} else if (blIds.includes(target.name)) {
					const Message = new gClient.chatMsg(`${target.name} has been removed from the banlist.`);
				} else if (blIds.includes(target.name) == false) {
					const Message = new gClient.chatMsg(`This person is not banned.`);
				}
			}
		}
	} catch (e) {
		const Message = new gClient.chatMsg('User not found. >:C');
	}
});

/*let weather = require('yahoo-weather');
 
sbot.on('a', msg => {
  let cmd = msg.a.split(' ')[0].toLowerCase();
  let input = msg.a.substring(cmd.length).trim();
  if (cmd == cmdChar + 'weather') {
    if (blIds.includes(msg.p._id)) {
      } else { 
      weather(input, 'c').then(info => {
        const Message = new gClient.chatMsg(info);
      }).catch(err => {
        const Message = new gClient.chatMsg('Something went wrong D:');
      });
    }
  }
});*/
let weather = require('openweather-apis')
weather.setAPPID('6d22c43fa6c0ba8f51c21ad79061c43c');
sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'weather') {
		if (blIds.includes(msg.p._id)) {
		} else {
			try {
				weather.setCity(input);
				weather.setLang('en');
				weather.setUnits('metric');
				// get the Temperature
				weather.getTemperature(function(err, temp) {
					const Message = new gClient.chatMsg(temp);
				});

				// get the Atm Pressure
				weather.getPressure(function(err, pres) {
					const Message = new gClient.chatMsg(pres);
				});

				// get the Humidity
				weather.getHumidity(function(err, hum) {
					const Message = new gClient.chatMsg(hum);
				});

				// get the Description of the weather condition
				weather.getDescription(function(err, desc) {
					const Message = new gClient.chatMsg(desc);
				});
			} catch (e) {
				const Message = new gClient.chatMsg(`City not found >:C`);
			}
		}
	}
});
sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	if (cmd == cmdChar + 'about') {
		if (blIds.includes(msg.p._id)) {
		} else {
			const Message = new gClient.chatMsg(
				`DreamBot V3.0 was developed on Node.JS by Vistril (with ideas from other cool peeps) and started in 2017 featuring 60+ commands.`
			);
		}
	}
});
afkusersnames = [];
afkusersids = [];
sbot.on('a', function(msg) {
	if (
		msg.a.toLowerCase() == cmdChar + 'afk' ||
		msg.a.toLowerCase() == 'brb' ||
		msg.a.toLowerCase() == 'afk'
	) {
		if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
		} else {
			const Message = new gClient.chatMsg(
				'**' +
					msg.p.name +
					' is now marked as AFK. Send any message to be unmarked.'
			);
			setTimeout(function() {
				afkusersnames.push(msg.p.name);
				afkusersids.push(msg.p._id);
			}, 2000);
		}
	} else {
	}
});

sbot.on('a', function(msg) {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'bunny')
		if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
		} else {
			 new gClient.chatMsg('..( /)');
			new gClient.chatMsg('..(•.•)');
			 new gClient.chatMsg('c(")(")');
		}
});

sbot.on('a', function(msg) {
	if (afkusersids.includes(msg.p._id)) {
		if (
			msg.a.toLowerCase() == 'afk' ||
			msg.a.toLowerCase() == 'brb' ||
			msg.a.toLowerCase() == cmdChar + 'afk'
		) {
			const Message = new gClient.chatMsg('You are marked as AFK already ' + msg.p.name + '!');
		} else {
			const Message = new gClient.chatMsg('**' + msg.p.name + ' is no longer AFK.');
			afkusersids.splice(msg.p._id);
			afkusersnames.splice(msg.p.name);
		}
	}
});



quotesarray = [
	"Super Mario: hey vistril i will pose as you if you don't stop fucking around with people :)",
	'Lilith: this is over fishing',
	'Anon64: fuker',
	'❤️๖ۣۜƓὗƈƈἷ Ɠᾄᾗʛ❤️: can u plz tell me the secret to the factory',
	'❤️๖ۣۜƓὗƈƈἷ Ɠᾄᾗʛ❤️: please i wont ever bother u again',
	'❤️๖ۣۜƓὗƈƈἷ Ɠᾄᾗʛ❤️: and next time i see you i will give you kekklefruit',
	'You missed a call from ❤️๖ۣۜƓὗƈƈἷ Ɠᾄᾗʛ❤️.',
	'Nestastic: what the gay',
	'Anonymous: who the fuck is playing sorting algorythms as midi',
	'Anonymous: You broke my speaker ass',
]; //stupi d 



const Brainfuck = require('brainfuck-node')
const brainfuck = new Brainfuck();
sbot.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	try {
		if (cmd == cmdChar + 'brainfuck' || cmd == cmdChar + 'bf') {
			if (blIds.includes(msg.p._id)) {
			} else {
				if (input === '') {
					const Message = new gClient.chatMsg('Please input something for me to evaluate.');
				} else {
					if (JSON.stringify(brainfuck.execute(input).output) === '') {
						chat('No output.');
					} else {
						chat(`${JSON.stringify(brainfuck.execute(input).output)}`);
					}
				}
			}
		}
	} catch (e) {
		const Message = new gClient.chatMsg(e);
	}
});

chat = msg => {
	sbot.sendArray([
		{
			m: 'a',
			message: msg,
		},
	]);
};
const ping = require('node-http-ping')
gClient.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	if (cmd == cmdChar + 'ping') {
		if (!input) {
			const Message = new gClient.chatMsg(`No input detected. Pinging MPP.`)
			ping('multiplayerpiano.com')
				.then(time =>  new gClient.chatMsg(`Response time: ${time}ms`))
				.catch(error => new gClient.chatMsg(`Failed to ping: ${error}`));
		} else {
			ping(input)
				.then(time => new gClient.chatMsg(`Response time: ${time}ms`))
				.catch(error => new gClient.chatMsg(`Failed to ping: ${error}`));
		}
	}
});

const thing = "https://api.fast.com/netflix/speedtest?https=true&token=YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm&urlCount=5"
const fastToken = "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm";
let speedtest = new FastSpeedtest({
	token: fastToken, // required
	verbose: false, // default: false
	timeout: 10000, // default: 5000
	https: true, // default: true
	urlCount: 5, // default: 5
	bufferSize: 8, // default: 8
});
gClient.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	if (cmd == cmdChar + 'speedtest') {
		const Message = new gClient.chatMsg('Measuring... (not completely accurate)');
		speedtest.getSpeed().then(s => {
			const Message = new gClient.chatMsg(`Speed: ${s /10000} Mbps`);
		}).catch(e => {
			const Message = new gClient.chatMsg("There was an internal error. Please contact an administrator." + e.message);
		});
	}
});


let encodify = require('encodify');
/*
// Convert to Pig Latin Script
//encodify.toPigLatin('glove').should.eql('oveglay');

// Convert to Roman Numeral
//encodify.toRomanNumeral(55).should.eql('XXXXXV');

// Convert to NATO Code - French and German currently supported
//encodify.toNATOCode('CODE').should.eql('Charlie Oscar Delta Echo');
//encodify.toNATOCode('code', 'German').should.eql('Cäsar Otto Dora Emil');
//encodify.toNATOCode('C.O D@E', 'FRENCH').should.eql('Célestin point Oscar espace Désiré arobase Eugène');

// Convert to Morse Code
//encodify.toMorseCode('secret').should.eql('... . -.-. .-. . -');
encodify.toMorseCode('b.o@nd').should.eql('-... .-.-.- --- .--.-. -. -..');
encodify.toMorseCode('NPK').should.eql('-. .--. -.-');

// Convert from Morse Code
encodify.fromMorseCode('... . -.-. .-. . -').should.eql('secret');
encodify.fromMorseCode('.... .- .--. .--. -.-- -..-. -... .. .-. - .... -.. .- -.-- -..-. -. .--. -.-').should.eql('happy/birthday/npk');

// Convert to Binary Code
encodify.toBinary('I am the War Cheif!').should.eql('1001001 100000 1100001 1101101 100000 1110100 1101000 1100101 100000 1010111 1100001 1110010 100000 1000011 1101000 1100101 1101001 1100110 100001');
encodify.toBinary('&#@!').should.eql('100110 100011 1000000 100001');
encodify.toBinary(9).should.eql('111001');

// Convert from Binary Code
encodify.fromBinary('1001001 100000 1100001 1101101 100000 1110100 1101000 1100101 100000 1010111 1100001 1110010 100000 1000011 1101000 1100101 1101001 1100110 100001').should.eql('I am the War Cheif!');
encodify.fromBinary('100110 100011 1000000 100001').should.eql('&#@!');
encodify.fromBinary('111001').should.eql('9');

// Convert to list of Anagrams
encodify.toAnagrams('cod').should.eql(['cod', 'cdo', 'ocd', 'odc', 'dco', 'doc']);
encodify.toAnagrams('%*!').should.eql(['%*!', '%!*', '*%!', '*!%', '!%*', '!*%']);

// Convert to Spinal Case
encodify.toSpinalCase('thisIsSpinalTap').should.eql('this-is-spinal-tap');
encodify.toSpinalCase('This Is Spinal Tap').should.eql('this-is-spinal-tap');
encodify.toSpinalCase('The_Andy_Griffith_Show').should.eql('the-andy-griffith-show');

// Convert to Fibonacci Series
encodify.toFibonacci(10).should.eql([ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]);
encodify.toFibonacci(3.9).should.eql([ 1, 1, 2 ]);

// Convert to Base DNA Pair
encodify.toDNABasePair('GGCC').should.eql('CCGG');
encodify.toDNABasePair('GaTcAatagc').should.eql('CTAGTTATCG');
//probably wont use
// Convert to list of Prime numbers upto given specified number
encodify.toPrimes(10).should.eql([2, 3, 5, 7]);
encodify.toPrimes(30.97).should.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);

// Calculate LCM of all values in an array
encodify.toLCM([330, 65, 15]).should.eql(4290);
encodify.toLCM([330, 90, 65, 55, 20, 15]).should.eql(25740);

// Calculate GCD of all values in an array
encodify.toGCD([45, 60, 330]).should.eql(15);
encodify.toGCD([25, 45, 60, 115, 330]).should.eql(5);

// Convert to flattened array from any multi dimensional array of letying level of nesting
encodify.toFlattenedArray([1, [], [3, [[4]]]]).should.eql([1, 3, 4]);
encodify.toFlattenedArray([1, [5, [6, [7, 8, [9]]]], [3, [[4]]]]).should.eql([1, 5, 6, 7, 8, 9, 3, 4]);
*/

//Anon64's cmds below this point >:D
sbot.on('a', msg => { //CREDIT TO ABON32
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let won101 = 1;
	let games101 = 1;
	//rps101 vistrilified
	if (cmd == cmdChar + 'rps101') {
		let elements = [
			'Dynamite',
			'Tornado',
			'Quicksand',
			'Pit',
			'Chain',
			'Gun',
			'Law',
			'Whip',
			'Sword',
			'Rock',
			'Death',
			'Wall',
			'Sun',
			'Camera',
			'Fire',
			'Chainsaw',
			'School',
			'Scissors',
			'Poison',
			'Cage',
			'Axe',
			'Peace',
			'Computer',
			'Castle',
			'Snake',
			'Blood',
			'Porcupine',
			'Vulture',
			'Monkey',
			'King',
			'Queen',
			'Prince',
			'Princess',
			'Police',
			'Woman',
			'Woman',
			'Baby',
			'Man',
			'Home',
			'Train',
			'Car',
			'Noise',
			'Bicycle',
			'Tree',
			'Turnip',
			'Duck',
			'Wolf',
			'Cat',
			'Bird',
			'Fish',
			'Spider',
			'Cockroach',
			'Brain',
			'Community',
			'Cross',
			'Money',
			'Vampire',
			'Sponge',
			'Church',
			'Butter',
			'Book',
			'Paper',
			'Cloud',
			'Airplane',
			'Moon',
			'Grass',
			'Film',
			'Toilet',
			'Air',
			'Planet',
			'Guitar',
			'Bowl',
			'Cup',
			'Beer',
			'Rain',
			'Water',
			'Tv',
			'Rainbow',
			'Ufo',
			'Alien',
			'Prayer',
			'Mountain',
			'Satan',
			'Dragon',
			'Diamond',
			'Platinum',
			'Gold',
			'Devil',
			'Fence',
			'Video Game',
			'Math',
			'Robot',
			'Heart',
			'Electricity',
			'Lightning',
			'Medusa',
			'Power',
			'Laser',
			'Nuke',
			'Sky',
			'Tank',
			'Helicopter',
		]
			.join(' ')
			.toLowerCase()
			.split(' ');

		if (!input) {
			const Message = new gClient.chatMsg('Your choices are: ' + elements.join(', '));
			 new gClient.chatMsg('Heres the chart: http://umop.com/rps101/rps101chart.html');
			return;
		}
		if (!isNaN(input)) {
			let RPS101 = parseInt(input);
			let myChoice = RPS101 - 1;
		} else {
			let RPS101 = elements.join(' ').toLowerCase().split(' ').has(input);
			let RPS101rand = RPS101.random();
			if (RPS101 == '') {
				const Message = new gClient.chatMsg('That is not a valid choice!');
				return;
			}
			if (RPS101.length > 1) {
				const Message = new gClient.chatMsg(
					'More than one choice with that letter detected randomizing element: ' +
						RPS101rand
				);
			}
			let myChoice = elements.indexOf(RPS101rand);
		}
		//if(myChoice>101||myChoice<1) {
		//    const Message = new gClient.chatMsg("Numbers need to  be in between 1 and 101!")
		//} else if(isNaN(myChoice)) {const Message = new gClient.chatMsg("Invalid number!");return;}
		let myDefeating = myChoice + 52;
		if (myDefeating >= 101) {
			myDefeating -= 101;
		}
		let comChoice = Math.floor(Math.random() * 101);
		let comDefeating = comChoice + 52;
		if (comDefeating >= 101) {
			comDefeating -= 101;
		}
		let win = `You Won! You chose ${elements[
			myChoice
		]}, Computer chose ${elements[comChoice]}. Confidence: ${(won101 /
			games101 *
			100).toFixed(2)}%`;
		let lost = `You Lost! You chose ${elements[
			myChoice
		]}, Computer chose ${elements[comChoice]}. Confidence: ${(won101 /
			games101 *
			100).toFixed(2)}%`;
		if (myChoice == comChoice) {
			const Message = new gClient.chatMsg(
				`Tie! You both chose ${elements[comChoice]}. Confidence: ${(won101 /
					games101 *
					100).toFixed(2)}%`
			);
		} else if (comChoice > myChoice && comChoice <= myDefeating) {
			const Message = new gClient.chatMsg(win);
			games101++;
			won101++;
		} else if (myChoice > comChoice && myChoice <= comDefeating) {
			const Message = new gClient.chatMsg(lost);
			games101++;
		} else {
			games101++;
			won101++;
			const Message = new gClient.chatMsg(win);
		}
	}
});

sbot.on('a', msg => { //CREDIT TO ANON645K6P[34KEWRL
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let won7 = 1;
	let games7 = 1;
	if (cmd == cmdChar + 'rps7') {
		let RPS = '';
		if (!input.length == 1) {
			RPS = input.substring(0, 2);
		} else {
			RPS = input.charAt(0).toLowerCase();
		}
		let choice = ['r', 'p', 'sc', 'f', 'w', 'a', 'sp'];
		let rand = choice.random();
		if (RPS == 's') {
			if (Math.random() > 0.5) {
				RPS = 'sc';
			} else {
				RPS = 'sp';
			}
			const Message = new gClient.chatMsg(`Only s detected picking random: ${RPS}.`);
		}
		let names = {
			r: 'rock',
			p: 'paper',
			sc: 'scissors',
			f: 'fire',
			w: 'water',
			a: 'air',
			sp: 'sponge',
		};
		if (!input || !choice.includes(RPS)) {
			const Message = new gClient.chatMsg(
				`Pick: your choices are: ${choice.join(
					', '
				)}. rock, paper, scissors, fire, water, air, and sponge.`
			);
		}
		let win = `You Won! You chose ${names[RPS]}, Computer chose ${names[
			rand
		]}. Confidence: ${(won7 / games7 * 100).toFixed(2)}%`;
		let lost = `You Lost! You chose ${names[RPS]}, Computer chose ${names[
			rand
		]}. Confidence: ${(won7 / games7 * 100).toFixed(2)}%`;
		if (RPS == rand) {
			const Message = new gClient.chatMsg(
				`Tie! You both chose ${names[RPS]}. Confidence: ${(won7 /
					games7 *
					100).toFixed(2)}%`
			);
		} else
			try {
				games7++;
				if (RPS == 'r') {
					if (rand == 'sc' || rand == 'f' || rand == 'sp') {
						const Message = new gClient.chatMsg(win);
						won7++;
					} else {
						const Message = new gClient.chatMsg(lost);
					}
				} else if (RPS == 'p') {
					if (rand == 'r' || rand == 'w' || rand == 'a') {
						const Message = new gClient.chatMsg(win);
						won7++;
					} else {
						const Message = new gClient.chatMsg(lost);
					}
				} else if (RPS == 'sc') {
					if (rand == 'a' || rand == 'p' || rand == 'sp') {
						const Message = new gClient.chatMsg(win);
						won7++;
					} else {
						const Message = new gClient.chatMsg(lost);
					}
				} else if (RPS == 'f') {
					if (rand == 'sc' || rand == 'p' || rand == 'sp') {
						const Message = new gClient.chatMsg(win);
						won7++;
					} else {
						const Message = new gClient.chatMsg(lost);
					}
				} else if (RPS == 'w') {
					if (rand == 'r' || rand == 'f' || rand == 'sc') {
						const Message = new gClient.chatMsg(win);
						won7++;
					} else {
						const Message = new gClient.chatMsg(lost);
					}
				} else if (RPS == 'a') {
					if (rand == 'r' || rand == 'f' || rand == 'w') {
						const Message = new gClient.chatMsg(win);
						won7++;
					} else {
						const Message = new gClient.chatMsg(lost);
					}
				} else if (RPS == 'sp') {
					if (rand == 'p' || rand == 'w' || rand == 'a') {
						const Message = new gClient.chatMsg(win);
						won7++;
					} else {
						const Message = new gClient.chatMsg(lost);
					}
				}
			} catch (e) {
				console.log(e);
			}
	}
});
