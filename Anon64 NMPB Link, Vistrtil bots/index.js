const Client = require('mpp-client');
const google = require('google');
const thing =
	'https://api.fast.com/netflix/speedtest?https=true&token=YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm&urlCount=5';
const fastToken = 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm';
const FastSpeedtest = require('fast-speedtest-api');
const Color = require('./Color.js');
const weather = require('openweather-apis');
const Brainfuck = require('brainfuck-node');
const brainfuck = new Brainfuck();
const ping = require('node-http-ping');
const encodify = require('encodify');
const on = true;
const off = false;
let Power = off;
let NMPBPower = off;
let echo = 1;
let cmdChar = 'd*';
let clientRoom = 'RETARDS TEST SOME SHITTY BOTS';
let NMPBRoom = '';
let speedtest = new FastSpeedtest({
	token: fastToken, // required
	verbose: false, // default: false
	timeout: 10000, // default: 5000
	https: true, // default: true
	urlCount: 5, // default: 5
	bufferSize: 8 // default: 8
});
class MPP extends Client {
	constructor(uri, defaultPrefix, defaultUserName) {
		super(uri);
	}

	changeName(name) {
		this.sendArray([
			{
				m: 'userset',
				set: {
					name
				}
			}
		]);
	}

	findUser(name) {
		let array = [];
		for (let pl in this.ppl) {
			if (this.ppl[pl].name.toLowerCase().includes(name.toLowerCase())) {
				array.push(this.ppl[pl]);
			}
		}
		return array[Math.floor(Math.random() * array.length)];
	}

	sendToChat(msg) {
		this.sendArray([
			{
				m: 'a',
				message: msg
			}
		]);
	}

	get name() {
		return this.getOwnParticipant().name;
	}

	get _id() {
		return this.getOwnParticipant()._id;
	}

	get color() {
		return this.getOwnParticipant().color;
	}
}

class chatMsg extends MPP {
	constructor(msg) {
		super();
		this.msg = msg;
	}
	/**
	 * Sends a message to the chat
	 * @param {string} chatMsg the string of the message to send
	 * @returns {string}
	 * @example
	 * let Message = new <MPP>.chatMsg(string);
	 * Message.send();
	 */
	send() {
		setTimeout(() => {
			gClient.sendToChat(this.msg);
		}, 900);
	}
}

Client.prototype.chatMsg = chatMsg;

class newName extends MPP {
	constructor(query) {
		super();
		this.query = query;
	}
	/**
	 * Changes the client's name
	 * @param {string} newName the string of the name to change to
	 * @returns {string}
	 * @example
	 * let Name = new <MPP>.newName(string);
	 * Name.apply();
	 */
	apply() {
		gClient.changeName(this.query);
	}
}

Client.prototype.newName = newName;
const accidents = [
	'died in an unfortunate gardening accident :(',
	"drove it's chevy through the levy",
	'discovered gravity'
];
const accidentrandom = (Math.random() * accidents.length) | 0;
const gClient = new MPP('ws://multiplayerpiano.com:8080');
gClient.setChannel(clientRoom);
gClient.start();
let blIds = [];
let adminIds = [
	'a2db90c04712080af5d797a1', //citronsustain
	'63ce4e6b86780ae23e04a5b8', //citronsustain
	'd55bf273f64f37c5691f3bbb', //Anon64
	'051ee1ec34cf0218653af6a8', //JPDLD
	'0eab0774ba77d8744c9bf2a4', //Infinity~
	'5b414d782edd2d3f517a5080', //dude/error
	'eda8c37f125a3641fe041799', //Japanese
	'6918006370d05f4802047186', //ATLAS A.I.
	'5a75bfc94fb4cc2bcc3cc9b1', //Name
	'144E16C02D07B16F1F8A', //Vistril - WOPP
	'e53791784525dc011f410c47', //repl bot
	'93ba8e3dfa222431a3e2' //private server id
];
let blNames = [];
let banned = [];
gClient.on('hi', msg => {
	if (gClient.isConnected()) {
		gClient.sendToChat('DreamBot5 starting');
		gClient.changeName('DreamBot5 [D-help]');
	}
	setTimeout(() => {
		Power = on;
		const message = new gClient.chatMsg(
			'DreamBot5 ready for use. Type D-help for commands.'
		).send();
	}, 2500);
});
const opcmds = ['js', 'mouse', 'emershutdown', 'ban', 'unban'];
const gcmds = [
	'rps',
	'8ball',
	'guess',
	'rps7 (With ❤️ from Anon64)',
	'rps101 (With ❤️ from Anon64)'
];
const ucmds = [
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
const fcmds = [
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
adminstring2 = cmdChar + opcmds[0];
gcmds2 = cmdChar + gcmds[0];
ucmds2 = cmdChar + ucmds[0];
fcmds2 = cmdChar + fcmds[0];
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
gClient.on('a', msg => {
	let cmd = msg.a.split(' ')[0].toLowerCase();
	let input = msg.a.substring(cmd.length).trim();
	let degrees = parseInt(input);
	let cmdChar = 'd*';
	if (cmd == cmdChar + 'eval') {
		if (adminIds.includes(msg.p._id)) {
			try {
				const Message = new gClient.chatMsg('> ' + eval(input)).send();
			} catch (e) {
				const Message = new gClient.chatMsg('> ' + e).send();
			}
		}
	}
	if (Power) {
		if (!blIds.includes(msg.p._id)) {
			if (cmd == cmdChar + 'setname') {
				if (msg.p._id == '63ce4e6b86780ae23e04a5b8') {
					const name = new gClient.newName(input).apply();
				}
			}
			if (cmd == cmdChar + 'say') {
				if (msg.p._id == '63ce4e6b86780ae23e04a5b8') {
					const Message = new gClient.chatMsg(input).send();
				}
			}
			if (cmd == cmdChar + 'test') {
				const Message = new gClient.chatMsg('Test').send();
			}
			if (cmd == cmdChar + 'name') {
				const Message = new gClient.chatMsg(gClient.name).send();
			}
			if (cmd == cmdChar + 'color') {
				const Message = new gClient.chatMsg(gClient.color).send();
			}
			if (cmd == cmdChar + 'id') {
				const Message = new gClient.chatMsg(gClient._id).send();
			}
			if (cmd == cmdChar + 'hello') {
				const Message = new gClient.chatMsg('Hello!').send();
			}
			if (cmd == cmdChar + 'help') {
				const Message = new gClient.chatMsg(help);
				Message.send();
			}
			if (cmd == cmdChar + 'pastebox') {
				const Message = new gClient.chatMsg(
					'Pastebox is a service by SuperOP535, featuring a gallery of Pastebin scripts. link: pastebox.glitch.me'
				).send();
			}
			if (cmd == cmdChar + 'finduser') {
				try {
					const Message = new gClient.chatMsg(
						`${gClient.findUser(input).name} (${gClient.findUser(input)._id})`
					).send();
				} catch (e) {
					const Message = new gClient.chatMsg(
						'User not found! Debug info: ' + e
					).send();
				}
			}
			let output = parseInt(input);
			if (cmd == cmdChar + 'check') {
				if (input === '') {
					const Message = new gClient.chatMsg('Please input a number!').send();
				} else if (isNaN(output)) {
					const Message = new gClient.chatMsg('That is not a number!').send();
				} else if (typeof output == 'number') {
					const Message = new gClient.chatMsg(
						'That is a number! ' + input
					).send();
				}
			}
			if (cmd == cmdChar + 'speedtest') {
				const Message = new gClient.chatMsg(
					'Measuring... (not completely accurate)'
				);
				speedtest
					.getSpeed()
					.then(s => {
						const Message = new gClient.chatMsg(
							`Speed: ${Math.round(s / 100000)} Mbps`
						).send();
					})
					.catch(e => {
						const Message = new gClient.chatMsg(
							'There was an internal error. Please contact an administrator.' +
								e.message
						).send();
					});
			}
			if (cmd == cmdChar + 'timer') {
				if (input === '') {
					const Message = new gClient.chatMsg('Please input a number.').send();
				} else if (isNaN(output)) {
					const Message = new gClient.chatMsg('That is not a number.').send();
				} else if (typeof output == 'number') {
					if (output > 1000000) {
						const Message = new gClient.chatMsg('too long lol').send();
					} else {
						const Message = new gClient.chatMsg(
							'Started a timer for ' + output + 'milliseconds.'
						).send();
						setTimeout(() => {
							const Message = new gClient.chatMsg(`Time's up!`).send();
						}, output);
					}
				}
			}
			let ftokoutput = (degrees - 32) * 0.55555556 + 273.15;
			if (cmd == cmdChar + 'ftok') {
				if (input === '') {
					const Message = new gClient.chatMsg('Please input a number.').send();
				} else if (isNaN(input)) {
					const Message = new gClient.chatMsg('That is not a number.').send();
				} else {
					const Message = new gClient.chatMsg(
						`Converting ${input}F to  Kelvin: ${tempoutput}K`
					).send();
				}
			}
			let ftocoutput = (degrees - 32) * 0.5556;
			if (cmd == cmdChar + 'ftoc') {
				if (input === '') {
					const Message = new gClient.chatMsg('Please input a number.').send();
				} else if (isNaN(input)) {
					const Message = new gClient.chatMsg('That is not a number.').send();
				} else {
					const Message = new gClient.chatMsg(
						`Converting ${input}F to  Celcius: ${output}C`
					).send();
				}
			}
			try {
				if (cmd == cmdChar + 'report') {
					const Message = new gClient.chatMsg(
						`Thanks, ${msg.p.name}! A screenshot of ${
							gClient.findUser(input).name
						} and their wrong-doings has been reported to the FBI. It will be investigated shortly.`
					).send();
				}
			} catch (e) {
				const Message = new gClient.chatMsg(`User not  found. >:C`).send();
			}
			let ctofoutput = input * 9 / 5 + 32;
			if (cmd == cmdChar + 'ctof') {
				if (input === '') {
					const Message = new gClient.chatMsg('Please input a number.').send();
				} else if (isNaN(input)) {
					const Message = new gClient.chatMsg('That is not a number.').send();
				} else {
					const Message = new gClient.chatMsg(
						`Converting ${input}C to  Fahrenheit: ${output}F`
					).send();
				}
			}
			let ktofoutput = 1.8 * (input - 273) + 32;
			if (cmd == cmdChar + 'ktof') {
				if (input === '') {
					const Message = new gClient.chatMsg('Please input a number.').send();
				} else if (isNaN(input)) {
					const Message = new gClient.chatMsg('That is not a number.').send();
				} else {
					const Message = new gClient.chatMsg(
						`Converting ${input}K to  Fahrenheit: ${output}F`
					).send();
				}
			}
			let ktocoutput = input - 273;
			if (cmd == cmdChar + 'ktoc') {
				if (input === '') {
					const Message = new gClient.chatMsg('Please input a number.').send();
				} else if (isNaN(input)) {
					const Message = new gClient.chatMsg('That is not a number.').send();
				} else {
					const Message = new gClient.chatMsg(
						`Converting ${input}K to Celcius: ${output}C`
					).send();
				}
			}
			if (cmd == cmdChar + 'abon32') {
				const Message = new gClient.chatMsg(
					')NATAS(sataN deman yug A -- .tahw wonk u emos hctaw ot ecalp doog a osla si ti .etacinummoc elpoep erehw ecalp a si tenretni eht .tenretni eht ni desu ylediw saw ti .tpircsavaj dellac namuh a yb detnevni saw taht egaugnal gnimmargorp eht ni era taht sedoc .sedoc syalpsid eh taht si foorp eht dna tob a si 46nonA ,gnidrocca fo sdrocer gnidrocca eht ot gnidrocca gnidrocca ot gnidroccA'
				).send();
			}
			let ctokoutput = input + 273;
			if (cmd == cmdChar + 'ctok') {
				if (input === '') {
					const Message = new gClient.chatMsg('Please input a number.').send();
				} else if (isNaN(input)) {
					const Message = new gClient.chatMsg('That is not a number.').send();
				} else {
					const Message = new gClient.chatMsg(
						`Converting ${input}C to  Fahrenheit: ${output}F`
					).send();
				}
			}
			let newinput = input.replace(/ /i, '-');
			if (cmd == cmdChar + 'toSpinal') {
				if (blIds.includes(msg.p._id)) {
				} else {
					const Message = new gClient.chatMsg(newinput).send();
				}
			}
			if (cmd == cmdChar + 'mouse') {
				if (adminIds.includes(msg.p._id)) {
					if (input == '') {
						const Message = new gClient.chatMsg('What?').send();
					} else if (input == 'off') {
						const Message = new gClient.chatMsg(
							'Bouncy mouse disabled.'
						).send();
						clearInterval(foo);
					} else if (input == 'on') {
						const Message = new gClient.chatMsg('Bouncy mouse enabled.').send();
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

							gClient.sendArray([{ m: 'm', x: x.toString(), y: y.toString() }]);
						}, 60);
					}
				}
			}
			let name = msg.p.name;
			let target = gClient.findUser(input);
			if (cmd == cmdChar + 'slap') {
				try {
					if (input === '') {
						const Message = new gClient.chatMsg(
							`${name} attempts to slap someone. Instead, they looked retarded waving their hand around.`
						).send();
					} else if (target.name == msg.p.name) {
						const Message = new gClient.chatMsg(
							`${name} slaps themselves.`
						).send();
					} else {
						const Message = new gClient.chatMsg(
							`${name} slaps ${
								gClient.findUser(input).name
							}. It left a mark on their face.`
						).send();
					}
				} catch (e) {
					const Message = new gClient.chatMsg('User not found. >:C').send();
				}
			}
			if (cmd == cmdChar + 'fuck') {
				try {
					if (input === '') {
						const Message = new gClient.chatMsg(
							`${name} fucks the air.`
						).send();
					} else if (target.name == msg.p.name) {
						const Message = new gClient.chatMsg(
							`${name} fucks themselves`
						).send();
					} else {
						const Message = new gClient.chatMsg(
							`${name} fucks ${
								gClient.findUser(input).name
							} SO FUCKING HARD they both die from too much sex...`
						).send();
					}
				} catch (e) {
					const Message = new gClient.chatMsg('User not found. >:C').send();
				}
			}
			if (cmd == cmdChar + 'lick') {
				try {
					if (input === '') {
						const Message = new gClient.chatMsg(
							`Please input a user to lick.`
						).send();
					} else if (target.name == msg.p.name) {
						const Message = new gClient.chatMsg(
							`${name} licks themselves. I do not want to know where.`
						).send();
					} else {
						const Message = new gClient.chatMsg(
							`${name} licks ${getUser(input).name}.`
						).send();
					}
				} catch (e) {
					const Message = new gClient.chatMsg('User not found. >:C').send();
				}
			}
			if (cmd == cmdChar + 'kill') {
				try {
					if (input === '') {
						const Message = new gClient.chatMsg(
							`${name} attempts to stab the air. Didn't work.`
						).send();
					} else if (target.name == msg.p.name) {
						const Message = new gClient.chatMsg(
							`${name} commits suicide! :(`
						).send();
					} else {
						const Message = new gClient.chatMsg(
							`${name} kills ${
								getUser(input).name
							} with a balisong. ${name} is facing up to 20 years in prison. :(`
						);
					}
				} catch (e) {
					const Message = new gClient.chatMsg('User not found. >:C').send();
				}
			}
			if (cmd == cmdChar + 'kiss') {
				try {
					if (input === '') {
						const Message = new gClient.chatMsg(`Please input a user.`).send();
					} else if (target.name == msg.p.name) {
						const Message = new gClient.chatMsg(
							`${name} kisses their own hand. Lol`
						).send();
					} else {
						const Message = new gClient.chatMsg(
							`${name} kisses ${getUser(input).name}.`
						).send();
					}
				} catch (e) {
					const Message = new gClient.chatMsg('User not found. >:C').send();
				}
			}
			if (cmd == cmdChar + 'me') {
				const Message = new gClient.chatMsg(`**${msg.p.name} ${input}`).send();
			}
			if (cmd == cmdChar + 'eat') {
				const Message = new gClient.chatMsg(
					`**${msg.p.name} eats (a(n)) ${input}. It was delicious.`
				).send();
			}
			if (cmd == cmdChar + 'drink') {
				const Message = new gClient.chatMsg(
					`**${msg.p.name} drinks (a(n)) ${input}`
				);
			}

			if (cmd == cmdChar + 'sellosdelamarina') {
				const Message = new gClient.chatMsg(
					'Que putas chingadas madres dijiste demi, pinche escuincle baboso? Para que te sepas yo entrene en el gimnasio del senor Julio Cesar Chavez, tengo un record de 50 knockouts, fui al colegio militar de la ciudad de Mexico y un doctorado en ingeniera nuclear, sabes que significa eso? Que puedo volar tu pinche cabecita hueca con una bomba que estoy preparando especialmente para ti, y no solo eso tambien soy experto en el manejo de armas largas y tengo acceso a todo un arsernal..'
				).send();
				const Message2 = new gClient.chatMsg(
					'de Uzis, Ak 47 y R-15s, si tan solo hubieras pensado un poquito mas y no hubieras abierto el pinche hocico de perro que tienes no tendrias que rezar por tu vida. En estos momentos estoy rastreando tu direccion IP para ubicar tu domicilio, te vas a cagar cuando veas un chingo de camionetas esperanndo en la entrada de tu casa para acribillarte, mis hombres estan bien armados y son muy temerarios saben hacer muy bien su trabajo u estan dispuestos a exterminar hasta la ultima puta celula mas pequena..'
				).send();
				const Message3 = new gClient.chatMsg(
					'e insigificante de tu puta miserable existencia, escucha bien mis palabras nene, que ya no hay vueltra atras, vete despidiendo de tu miserable vida cabron, voy a convertir tus ultimas horas de vida en un autentico infierno, estas bien pinche muerto nene, estas bien pinche muerto.'
				).send();
			}
			if (cmd == cmdChar + 'lenny') {
				const Message = new gClient.chatMsg('( ͡° ͜ʖ ͡°)').send();
			}

			if (cmd == cmdChar + 'lenin') {
				const Message = new gClient.chatMsg('(☭ ͜ʖ ☭)').send();
			}

			if (cmd == cmdChar + 'easteregg1') {
				const Message = new gClient.chatMsg(
					msg.p.name + ' found an easter egg and gets a cookie. Yay.'
				).send();
			}

			if (cmd == cmdChar + 'kevin') {
				const Message = new gClient.chatMsg(
					' I HOPE YOU GO FUCKING DIE AND GET CANCER  - Kevin '
				).send();
			}

			if (cmd == cmdChar + 'JPDLD') {
				const Message = new gClient.chatMsg('T R A I N S!!!').send();
			}

			if (cmd == cmdChar + 'ping') {
				const Message = new gClient.chatMsg(' Pong! ').send();
			}

			if (cmd == cmdChar + 'pong') {
				const Message = new gClient.chatMsg(' Ping! ').send();
			}

			if (cmd == cmdChar + 'shakespeare') {
				const Message = new gClient.chatMsg(
					' To be or not to be, that is the question. '
				).send();
			}

			if (cmd == cmdChar + 'jeremyclarkson') {
				const Message = new gClient.chatMsg(
					'My genius staggers me, once again!'
				).send();
			}

			if (cmd == cmdChar + 'luke') {
				const Message = new gClient.chatMsg(' Use the force, Luke! ').send();
			}

			if (cmd == cmdChar + 'mw3') {
				const Message = new gClient.chatMsg(
					' Mission failed, we’ll get em next time. '
				).send();
			}

			if (cmd == cmdChar + 'rblx') {
				const Message = new gClient.chatMsg(' oof ').send();
			}

			if (cmd == cmdChar + 'france2') {
				const Message = new gClient.chatMsg('0-400-0, 42 sec.').send();
			}

			if (cmd == cmdChar + 'sweden') {
				const Message = new gClient.chatMsg('0-400-0, 36 sec.').send();
			}

			if (cmd == cmdChar + 'sieg') {
				const Message = new gClient.chatMsg('heil').send();
			}

			if (cmd == cmdChar + 'wearenotsupercars') {
				const Message = new gClient.chatMsg(' We are Lamborghini. ').send();
			}

			if (cmd == cmdChar + 'dispenser') {
				const Message = new gClient.chatMsg(' Nope.avi ').send();
			}

			if (cmd == cmdChar + 'sneeze') {
				const Message = new gClient.chatMsg(
					msg.p.name + ' sneezes everywhere.  '
				).send();
			}

			if (cmd == cmdChar + 'anon64') {
				const Message = new gClient.chatMsg(
					'According to according according to the according records of according, Anon64 is a bot and the proof is that he displays codes. codes that are in the programming language that was invented by a human called javascript. it was widely used in the internet. the internet is a place where people communicate. it is also a good place to watch some u know what. -- A guy named Natas(SATAN)'
				).send();
			}
			if (cmd == cmdChar + 'b') {
				const Message = new gClient.chatMsg('🅱️' + input).send();
			}
			const eightballwords = [
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
				'No'
			];
			let eightballrandom = Math.floor(Math.random() * eightballwords.length);
			if (cmd == cmdChar + '8ball') {
				if (input == '') {
					const Message = new gClient.chatMsg(
						'8ball: ' +
							msg.p.name +
							", Ask me a question to answer, don't just stand there!"
					).send();
				} else {
					const Message = new gClient.chatMsg(
						'8ball: ' + msg.p.name + ', ' + eightballwords[eightballrandom]
					).send();
				}
			}
		}
		if (cmd == cmdChar + 'guess') {
			if (input === '') {
				const Message = new gClient.chatMsg('Please input a number!').send();
			} else if (isNaN(output)) {
				const Message = new gClient.chatMsg('That is not a number!').send();
			} else if (typeof output == 'number') {
				if (input > magic_number) {
					const Message = new gClient.chatMsg('Lower!').send();
				} else if (input < magic_number) {
					const Message = new gClient.chatMsg('Higher!').send();
				} else if (input == magic_number) {
					const Message = new gClient.chatMsg(
						`${
							msg.p.name
						} guessed the magic number correctly (${magic_number}), and won some cookies!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`
					).send();
					magic_number = (Math.random() * 100) | 1;
				}
			}
			const rockwords = [
				'You Lose! Computer chose paper.',
				'You win! Computer chose scissors.',
				'Tie! You both chose rock.',
				'You win! Computer chose scissors'
			];
			let rockrandom = Math.floor(Math.random() * rockwords.length);

			const paperwords = [
				'You Lose! Computer chose scisssors.',
				'You win! Computer chose rock.',
				'Tie! You both chose paper.',
				'You win! Computer chose rock.'
			];
			let paperrandom = Math.floor(Math.random() * paperwords.length);

			const scissorswords = [
				'You Lose! Computer chose rock.',
				'You win! Computer chose paper.',
				'Tie! You both chose scissors.',
				'You win! Computer chose paper.'
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
					const Message = new gClient.chatMsg(
						`RPS: ${paperwords[paperrandom]}`
					);
				} else if (input.charAt(0).toLowerCase() == 's') {
					const Message = new gClient.chatMsg(
						`RPS: ${paperwords[paperrandom]}`
					);
				} else {
					const Message = new gClient.chatMsg(
						`Invalid syntax: Usage: ${cmdChar}rps <rock(r), paper(p), scissors(s)>. `
					);
				}
			}
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
			if (cmd == cmdChar + 'countcmds') {
				const Message = new gClient.chatMsg(
					`Command count: ${gcmds.length +
						ucmds.length +
						fcmds.length +
						opcmds.length}`
				).send();
			}
			if (cmd == cmdChar + 'userinfo') {
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
				).send();
				if (adminIds.includes(msg.p._id)) {
					const Message = new gClient.chatMsg('User is admin.').send();
				} else {
					const Message = new gClient.chatMsg('User is not admin.').send();
				}
			}
			if (cmd == cmdChar + 'ban') {
				try {
					if (adminIds.includes(msg.p._id)) {
						if (target.name == msg.p.name) {
							const Message = new gClient.chatMsg(
								'You cannot ban yourself.'
							).send();
						} else if (adminIds.includes(target.name)) {
							const Message = new gClient.chatMsg(
								'You cannot ban an admin'
							).send();
						} else if (blIds.includes(target.name)) {
							const Message = new gClient.chatMsg(
								'That user is already banned!'
							).send();
						} else {
							blIds.push(target.name);
							const Message = new gClient.chatMsg(
								`${target.name} has been banned.`
							).send();
						}
					}
				} catch (e) {
					const Message = new gClient.chatMsg('User not found. >:C').send();
				}
			}
			try {
				if (cmd == cmdChar + 'unban') {
					if (adminIds.includes(msg.p._id)) {
						if (target.name == msg.p.name) {
							const Message = new gClient.chatMsg(
								'The hell are you trying to accomplish, here?'
							).send();
						} else if (adminIds.includes(target.name)) {
							const Message = new gClient.chatMsg(
								"You can't unban this person, one, cause they're an admin, and two, they're not even on the banlist. "
							).send();
						} else if (blIds.includes(target.name)) {
							const Message = new gClient.chatMsg(
								`${target.name} has been removed from the banlist.`
							).send();
						} else if (blIds.includes(target.name) == false) {
							const Message = new gClient.chatMsg(
								`This person is not banned.`
							).send();
						}
					}
				}
			} catch (e) {
				const Message = new gClient.chatMsg('User not found. >:C').send();
			}
			if (cmd == cmdChar + 'weather') {
				try {
					weather.setCity(input);
					weather.setLang('en');
					weather.setUnits('metric');
					// get the Temperature
					weather.getTemperature(function(err, temp) {
						const Message = new gClient.chatMsg(temp).send();
					});

					// get the Atm Pressure
					weather.getPressure(function(err, pres) {
						const Message = new gClient.chatMsg(pres).send();
					});

					// get the Humidity
					weather.getHumidity(function(err, hum) {
						const Message = new gClient.chatMsg(hum).send();
					});

					// get the Description of the weather condition
					weather.getDescription(function(err, desc) {
						const Message = new gClient.chatMsg(desc).send();
					});
				} catch (e) {
					const Message = new gClient.chatMsg(`City not found >:C`).send();
				}
			}
		} //power variable end
	} //blIds response end
}); //msg.a response end

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

	gClient.sendArray([{ m: 'm', x: x.toString(), y: y.toString() }]);
}, 60);

gClient.on('m', function(msg) {
	if (distance(x, y, msg.x, msg.y) < 10) {
		xVelocity = -Math.sign(msg.x - x) * 5;
		yVelocity = 15;
	}
});
//NMPB Pipe (heavily modified)
var chatQueue = [];
function chatQueueSend(msg) {
	msg.match(/.{0,511}/g).forEach(function(x, i) {
		if (x == '') return;
		if (i !== 0) x = ' | ' + x;
		chatQueue.push(x);
	});
}
chatInt = setInterval(function() {
	var msg = chatQueue.shift();
	const Message = new gClient.chatMsg(msg).send();
}, 1700);
const mppUri = 'ws://www.multiplayerpiano.com:443';
const client2 = new MPP(mppUri);
let nmpbchar = 'D-';
function startClients() {
	setTimeout(() => {
		client2.start();
	}, 2000);
}
startClients();

gClient.on('disconnect', () => {
	gClient.stop();
	client2.stop();
	setTimeout(() => {
		client2.start();
		gClient.start();
	}, 5000);
});
try {
	NMPBPower = on;
	setTimeout(() => {
		const Message = new gClient.chatMsg(
			'DreamBot5 NMPB Link enabled. Use D-help for Autoplayer commands. (Creds to: Anon64, and Lamp)'
		).send();
	}, 3500);
	client2.setChannel(NMPBRoom);
	client2.on('n', msg => {
		if (NMPBPower) {
			for (i = 0; i < echo; i++) {
				gClient.sendArray([msg]);
			}
		}
	});
	client2.on('m', msg => {
		if (NMPBPower) {
			gClient.sendArray([msg]);
		}
	});
	gClient.on('a', msg => {
		if (msg.p._id == gClient._id) return;
		if (NMPBPower) {
			if (!blIds.includes(msg.p._id)) {
				if (msg.a.startsWith(nmpbchar)) {
					client2.sendArray([
						{
							m: 'a',
							message: msg.a.replace(nmpbchar, '/')
						}
					]);
				}
			}
		}
	});
	const forwardfuckingslash = '/';
	client2.on('a', msg => {
		if (msg.p._id == client2.getOwnParticipant()._id) return;
		if (NMPBPower) {
			chatQueueSend(
				'🎹| ' + msg.a.replace(new RegExp(forwardfuckingslash, 'g'), nmpbchar)
			);
		}
	});
} catch (e) {}

/*
//var st;
client2.on('n', msg => {
	if (NMPBPower) {
		if (!blIds.includes(msg.p._id)) {
			if (client2.findParticipantById(msg.p)._id != nmpb_id) return;
			const Message = new gClient.chatMsg(msg).send();
			//if (st) clearTimeout(st);
			//st = setTimeout(function(){
			//	client2.sendArray([{m:'a', message:"/r"}]);
			//}, 5000);
		}
	}
});

let t;
client3.on('m', msg => {
	if (NMPBPower) {
		if (!blIds.includes(msg.p._id)) {
			if (client2.findParticipantById(msg.id)._id != nmpb_id) return;
			if (msg.y == 15 && msg.x >= 8 && msg.x <= 88) {
				if (t) clearTimeout(t);
				t = setTimeout(() => {
					client3.sendArray([{ m: 'a', message: '/r' }]);
				}, 10000);
			}
		}
	}
});

if (input_channel.endsWith("(Turns)")) {
    client2.on('a', msg => {
        if (msg.p._id != nmpb_id) return;
        if (msg.a == `It is now ${client2.getOwnParticipant().name}'s turn. You have 30 seconds to pick a track.`) {
            client2.sendArray([{m:'a', message:"/r"}]);
        }
    });
} else { // no turns
    let cst;
    client2.on('a', msg => {
		if (msg.p._id != nmpb_id) return;
		if (msg.a.startsWith("Reading file Id") || msg.a.startsWith("Tempo")) { //todo tempo time is total time regardless of current position soo...
			if (msg.a.endsWith('.')) msg.a = msg.a.slice(0,-1);
			var t = msg.a.slice(-5, -1).split(':');
			var ms = (t[0]*60000)+(t[1]*1000);
			if (cst) clearTimeout(cst);
			cst = setTimeout(function(){
				client2.sendArray([{m:'a', message:"/r"}]);
			}, ms);
		}
    });
}

//setInterval(function(){
//        client2.sendArray([{m:'a', message:"/r"}]);
//}, 1000*60*30) // just in case
*/
