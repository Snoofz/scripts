const { Command } = require('discord-akairo');

class RPS7Command extends Command {
    constructor() {
        super('rps7', {
            aliases: ['rps7'],
            args: [
                {
                    id: 'choice',
                    type: 'string',
                    default: ' ',
                }
            ]
        });
    }

    exec(msg, args) {
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
        let won7 = 1;
        let games7 = 1;
        let choice = ['r', 'p', 'sc', 'f', 'w', 'a', 'sp'];
        let rand = choice.random();
        let input = args.choice;
        let RPS = '';
        let names = {
			r: 'rock',
			p: 'paper',
			sc: 'scissors',
			f: 'fire',
			w: 'water',
			a: 'air',
			sp: 'sponge',
        };
        let win = `You Won! You chose ${names[RPS]}, Computer chose ${names[
			rand
		]}. Confidence: ${(won7 / games7 * 100).toFixed(2)}%`;
		let lost = `You Lost! You chose ${names[RPS]}, Computer chose ${names[
			rand
		]}. Confidence: ${(won7 / games7 * 100).toFixed(2)}%`;
        if (RPS == 's') {
			if (Math.random() > 0.5) {
				RPS = 'sc';
			} else {
				RPS = 'sp';
            }
            msg.reply('Only \'s\' detected: picking random. ' + RPS);
        }
        if (!input.length == 1) {
			RPS = input.slice(0, 2);
		} else {
			RPS = input.charAt(0).toLowerCase();
        }
        if (input == ' ' || !choice.includes(RPS)) {
			msg.reply(
				`Pick: your choices are: ${choice.join(
					', '
				)}. rock, paper, scissors, fire, water, air, and sponge.`
			);
        }
        if (RPS == rand) {
			msg.reply(
				`Tie! You both chose ${names[RPS]}. Confidence: ${(won7 /
					games7 *
					100).toFixed(2)}%`
			);
		} else
			try {
				games7++;
				if (RPS == 'r') {
					if (rand == 'sc' || rand == 'f' || rand == 'sp') {
						msg.reply(win);
						won7++;
					} else {
						msg.reply(lost);
					}
				} else if (RPS == 'p') {
					if (rand == 'r' || rand == 'w' || rand == 'a') {
						msg.reply(win);
						won7++;
					} else {
						msg.reply(lost);
					}
				} else if (RPS == 'sc') {
					if (rand == 'a' || rand == 'p' || rand == 'sp') {
						msg.reply(win);
						won7++;
					} else {
						msg.reply(lost);
					}
				} else if (RPS == 'f') {
					if (rand == 'sc' || rand == 'p' || rand == 'sp') {
						msg.reply(win);
						won7++;
					} else {
						msg.reply(lost);
					}
				} else if (RPS == 'w') {
					if (rand == 'r' || rand == 'f' || rand == 'sc') {
						msg.reply(win);
						won7++;
					} else {
						msg.reply(lost);
					}
				} else if (RPS == 'a') {
					if (rand == 'r' || rand == 'f' || rand == 'w') {
						msg.reply(win);
						won7++;
					} else {
						msg.reply(lost);
					}
				} else if (RPS == 'sp') {
					if (rand == 'p' || rand == 'w' || rand == 'a') {
						msg.reply(win);
						won7++;
					} else {
						msg.reply(lost);
					}
				}
			} catch (e) {
				console.log(e);
			}
    }
}

module.exports = RPS7Command;