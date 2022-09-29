module.exports = function () {
    this.addCommand = async (cmd, usage, minargs, func, minrank, hidden, secondfunc, highscore) => {
        this.commands.push({
            cmd: cmd,
            usage: usage,
            minargs: minargs,
            func: func,
            minrank: minrank,
            hidden: hidden,
            secondfunc: secondfunc,
            highscore: highscore
        });
    }
    this.addCommand("help", `Usage: CMDCHARhelp (cmd)`, 0, msg => {
        if (msg.args.length - 1 > 0) {
            this.sendChat(this.getUsage(msg.args[1]));
        } else {
            let tosend = `Commands:`;
            this.commands.forEach((command) => {
                if (!command.hidden) {
                    if (msg.p.rank.id >= command.minrank)
                        tosend += ` ${this.cmdChar}${command.cmd}, `;
                }
            })
            tosend = tosend.trim();
            tosend = replaceAt(tosend, tosend.length - 1, ".");
            this.sendChat(tosend);
        }
    }, 0, false)

    this.addCommand("ping", `Usage: CMDCHARping`, 0, msg => {
        this.sendChat("Pong!")
    }, 0, false)

    this.addCommand("test", `Usage: CMDCHARtest`, 1, msg => {
        this.sendChat(msg.args[1])
    }, 3, false)

    this.addCommand("room", `Usage: CMDCHARroom (your room)`, 1, msg => {
        if (Bot.bots.find((bot) => bot.room == msg.input(1))) {
            this.sendChat(`❌The Bot is already connected in room〘 ${msg.input(1)} 〙`);
            return;
        }
        Bot.rooms[msg.input(1)] = {
            "ppl": {}
        }
        Bot.updateroomdb();
        this.sendChat(`Connecting Bot to room〘 ${msg.input(1)} 〙`);
        Bot.startBot(msg.input(1)).then((a) => {
            if (a.connected) {
                this.sendChat(`Connected Bot in room〘 ${a.data.client.channel._id} 〙`);
            } else {
                this.sendChat(`Failed to connect bot. ${a.err}`);
            }
        });
    }, 0, false)



    this.addCommand("wordguess", `Usage: CMDCHARwordguess`, 0, msg => {
        let letters = "abcdefghijklmnopqrstuvwxyz";
        let word = "";
        for (var i = 0; i < 10; i++) {
            word = word.concat(letters[Math.floor(Math.random() * letters.length)]);
        }
        this.sendChat(`Find as many words as you can from the letters〘 ${word} 〙in 60 seconds! You can only use each letter once.`);
        this.changeMode("sfunc", msg.p, "wordguess", "1person", {
            word: word,
            wordsfound: 0,
            wrdsfound: []
        }, 60000, `It's been a minute, wordguess game is over. You found 0 words.`)
    }, 0, false, msg => {
        function getwinmsg(bot) {
            let winmsg = `It's been a minute, wordguess game is over. You found ${msg.data.wordsfound} words.`;
            if (bot.highscores.wordguess.highscore < msg.data.wordsfound) {
                winmsg = winmsg.concat(" NEW RECORD!");
                bot.updateHighscores(msg.p, "wordguess", msg.data.wordsfound);
            }
            return winmsg;
        }

        function scramble(world, seed) {
            var arr = new Array(256);
            var i = 0;

            for (i = 0; i < 256; i++) {
                arr[i] = 0;
            }

            for (i = 0; i < world.length; i++) {
                arr[world.charCodeAt(i)] += 1;
            }

            for (i = 0; i < seed.length; i++) {
                arr[seed.charCodeAt(i)] -= 1;
                if (arr[seed.charCodeAt(i)] < 0) {
                    return false;
                }
            }

            return true;
        }

        if (scramble(msg.data.word, msg.a)) {
            var checkWord = require('check-word'),
                words = checkWord('en');
            if (words.check(msg.a)) {
                if (!msg.data.wrdsfound.includes(msg.a)) {
                    msg.data.wordsfound++;
                    this.sendChat(`✔️ Word found: ${msg.a}. You have found ${msg.data.wordsfound} words so far.`)
                    msg.data.wrdsfound.push(msg.a)
                    this.cmode.msg = getwinmsg(this)
                    console.log(this.cmode.msg)
                } else {
                    this.sendChat(`❌ You already found that word.`)
                }
            } else {
                this.sendChat(`❌ That's not a word.`)
            }
        } else {
            this.sendChat(`❌ That word includes characters not in the letters ${msg.data.word}`);
        }
    }, true)

    this.addCommand("rhymeguess", `Usage: CMDCHARrhymeguess`, 0, msg => {
        var randomWords = require('random-words');
        var word = randomWords()
        this.sendChat(`Find as many rhymes as you can from the word〘 ${word} 〙in 60 seconds!`);
        this.changeMode("sfunc", msg.p, "rhymeguess", "1person", {
            word: word,
            wordsfound: 0,
            wrdsfound: []
        }, 60000, `It's been a minute, rhymeguess game is over. You found 0 rhymes.`)
    }, 0, false, msg => {
        function getwinmsg(bot) {
            let winmsg = `It's been a minute, rhymeguess game is over. You found ${msg.data.wordsfound} rhymes.`;
            if (bot.highscores.rhymeguess.highscore < msg.data.wordsfound) {
                winmsg = winmsg.concat(" NEW RECORD!");
                bot.updateHighscores(msg.p, "rhymeguess", msg.data.wordsfound);
            }
            return winmsg;
        }

        request(`https://api.datamuse.com/words?rel_rhy=${msg.data.word}`, (error, response, body) => {
            if (error) throw error;
            let res = Object.values(JSON.parse(body));
            let rhymefound = false;
            let wrdobj;
            for (var wrd of res) {
                if (wrd.word == msg.a) {
                    rhymefound = true;
                    wrdobj = wrd;
                } else {
                    continue;
                }
            }
            if (rhymefound && wrdobj) {
                if (!msg.data.wrdsfound.includes(msg.a)) {
                    msg.data.wordsfound++;
                    this.sendChat(`✔️ Rhyme found: ${msg.a}. You have found ${msg.data.wordsfound} rhymes so far.`)
                    msg.data.wrdsfound.push(msg.a)
                    this.cmode.msg = getwinmsg(this)
                    console.log(this.cmode.msg)
                } else {
                    this.sendChat(`❌ You already found that rhyme.`)
                }
            } else {
                this.sendChat(`❌ that does not rhyme with ${msg.data.word}.`);
            }
        });

       

    }, true)

    this.addCommand("moreorless", `Usage: CMDCHARmoreorless`, 0, msg => {
        this.sendChat("Guess a number between 1 and 100.");
        let num = Math.floor(Math.random() * 100);
        this.changeMode("sfunc", msg.p, "moreorless", "1person", {
            num: num,
            tries: 0
        }, 60000, "It's been a minute, moreorless game is over. Number was: " + num);
    }, 3, false, msg => {
        if (!isNaN(msg.a)) {
            if (msg.a > msg.data.num) {
                this.sendChat("Less!");
            } else if (msg.a < msg.data.num) {
                this.sendChat("More!")
            } else if (msg.a == msg.data.num) {
                let winmsg = `${msg.p.name} found the answer in ${msg.data.tries} tries.`;
                if (this.highscores.moreorless.highscore > msg.data.tries) {
                    winmsg = winmsg.concat(" NEW RECORD!");
                    this.updateHighscores(msg.p, "moreorless", msg.data.tries);
                }
                this.sendChat(winmsg);
                this.changeMode("cmd");
            }
            msg.data.tries++;
        }
    }, true)

    this.addCommand("tictactoe", `Usage: CMDCHARtictactoe <difficulty>`, 1, msg => {
        const goodarr = ["Easy", "Medium", "Hard"];
        if (!goodarr.includes(msg.args[1])) {
            this.sendChat(`Wrong difficulty. Aliases: ${this.cmdChar}tictactoe <Easy | Normal | Hard>`);
            return;
        }
        var Minimax = require('tic-tac-toe-minimax');
        const huPlayer = "❌";
        const aiPlayer = "⭕";
        const symbols = {
            huPlayer: huPlayer,
            aiPlayer: aiPlayer
        } //❌
        const {
            ComputerMove,
            GameStep
        } = Minimax.default;
        const difficulty = msg.args[1]; //ㅤ
        let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        var whoseturn = Math.round(Math.random());
        var renderboard = (brd) => {
            let returnval = "";
            brd = brd.chunk(3);
            for (var ele of brd) {
                if (!ele.some(isNaN)) {
                    for (var index of ele) {
                        returnval += `${index + 1}ㅤ `;
                    }
                    returnval = replaceAt(returnval, returnval.length - 1, "\n");
                    returnval = replaceAt(returnval, returnval.length - 2, "");
                } else {
                    for (var index2 of ele) {
                        if (isNaN(index2)) {
                            returnval += `${index2}ㅤ`;
                        } else {
                            returnval += `${index2 +1}ㅤ`;
                        }

                    }
                    returnval = replaceAt(returnval, returnval.length - 1, "\n");
                }
            }
            this.sendChat(returnval);
        }
        if (whoseturn == 0) {
            this.sendChat("It's your turn!");
            renderboard(board);
            this.sendChat("Type a number between 1-9 to add your piece to the board.")
        } else {
            this.sendChat("It's the computer's turn! ");
            const nextMove = GameStep(board, symbols, difficulty);
            board = nextMove.board;

            renderboard(board);
            whoseturn = 1;
            this.sendChat("It's your turn! Type a number between 1-9 to add your piece to the board.")

        }

        this.changeMode("sfunc", msg.p, "tictactoe", "1person", {
            ComputerMove,
            whoseturn,
            renderboard,
            symbols,
            GameStep,
            difficulty,
            board
        }, 60000, "It's been a minute, tictactoe game is over.");

    }, 3, false, msg => {
        if (!isNaN(msg.a)) {
            const huPlayer = "❌";
            const aiPlayer = "⭕";

            if (Math.floor(msg.a) > 9 || Math.floor(msg.a) < 1) {
                this.sendChat("Type a number between 1-9 to add your piece to the board.");
                return;
            } else {
                if (isNaN(msg.data.board[msg.a - 1])) {
                    this.sendChat("This spot is already taken. Try another spot.");
                    return;
                }
                msg.data.board[msg.a - 1] = "❌";
                msg.data.renderboard(msg.data.board);
                let board2 = msg.data.board;
                let gs = msg.data.GameStep(board2, msg.data.symbols, msg.data.difficulty)
                if (gs.winner != null) {
                    this.sendChat(`The ${gs.winner} won.`)
                    this.changeMode("cmd");
                    msg.data.renderboard(gs.board);
                    return;
                };
                msg.data.whoseturn = 1;
            }
            if (msg.data.whoseturn == 0) {
                this.sendChat("It's your turn!");
                msg.data.renderboard(msg.data.board);
                this.sendChat("Type a number between 1-9 to add your piece to the board.")
            } else {
                this.sendChat("It's the computer's turn! ");
                //const gs = msg.data.ComputerMove(msg.data.board, msg.data.symbols, msg.data.difficulty);
                // msg.data.board[gs] = msg.data.symbols.aiPlayer;
                //let board2 = msg.data.board;
                let gs2 = msg.data.GameStep(msg.data.board, msg.data.symbols, msg.data.difficulty)
                if (gs2.winner != null) {
                    this.sendChat(`The ${gs2.winner} won.`);
                    this.changeMode("cmd");
                    return;
                } else {
                    msg.data.board = gs2.board;
                    msg.data.whoseturn = 0;
                    msg.data.renderboard(msg.data.board);
                    this.sendChat(`It's your turn! Type a number between 1-9 to add your piece to the board.`);
                    return;
                }

            }
        }
    }, true)

    this.addCommand("typerace", `Usage: CMDCHARtyperace`, 0, msg => {
        this.sendChat("The Typerace game has started, get ready!");
        var duhword = require('random-words')();
        const prettyMs = require('pretty-ms');
        this.changeMode("sfunc", msg.p, "typerace", "all", {
            word: duhword,
            prettyMs: prettyMs
        }, 30000, "30 seconds is up! Type racing game is over.");
        setTimeout(() => {
            this.sendChat(`Type ${duhword} as fast as possible!`);
            this.cmode.data.seconds = Date.now(); //start timer when send chat
        }, 2000)
    }, 3, false, msg => {
        if (msg.data.word == msg.a) {
            if (msg.data.seconds) { //no undefined
                let ms = msg.data.prettyMs(Date.now() - msg.data.seconds, {
                    secDecimalDigits: 3
                })
                ms.endsWith("m") ? ms = "0." + ms.split("m")[0] : {};
                let winmsg = `${msg.p.name} won the game in ${ms.split("s")[0]} seconds!`;
                if (this.highscores.typerace.highscore > ms.split("s")[0]) {
                    winmsg = winmsg.concat(" NEW RECORD!");
                    this.updateHighscores(msg.p, "typerace", ms.split("s")[0]);
                }
                this.sendChat(winmsg);
                this.changeMode("cmd");
            }
        }
    }, true)


    this.addCommand("circle", `Usage: CMDCHARcircle (_id or name)`, 1, msg => {
        if (this.circleing) {
            clearInterval(this.circleing);
        }
        let user = this.getUsersByNameOrId(msg.args[1]);
        if (user.length <= 0) {
            this.sendChat("User Not found.");
            return;
        }
        user = user[Math.floor(Math.random() * user.length)];
        if (this.getRankById(user._id).name == "Banned") {
            this.sendChat("❌ Cannot circle user. User is banned.");
            return;
        } else if (user._id == this.client.getOwnParticipant()._id) {
            this.sendChat("❌ The bot cannot be circled.");
            return;
        }
        this.sendChat(`Circling ${user.name} (${this.Color.getNearestColor(user.color)}).`);
        this.Cursor.changeMode("circle", user);
    }, 0, false)

    this.addCommand("balance", `Usage: CMDCHARbalance`, 0, msg => {
        let money = this.Economy.getEconomyUserBy_id(msg.p._id);
        if (money) {
            this.sendChat(`${money.name}, you have $${money.money} in cash.`)
        } else {
            this.sendChat(`${msg.p.name}, you have $0 in cash.`);
        }
    }, 0, false)

    this.addCommand("work", `Usage: CMDCHARwork`, 0, msg => {
        let money = this.Economy.AttemptToGetMoney(msg.p.name, msg.p._id, "work");
        if (money.canGetMoney) {
            this.sendChat(this.Economy.getMoneyMessageByType("work", money.good).replace("NICKNAME", msg.p.name) + "$" + money.moneygot);
        } else {
            let when = this.Economy.convertMS(money.whenGetMoney);
            when = this.Economy.convertMSToString(when);

            this.sendChat(`You cannot work for another ${when}`);
        }
    }, 0, false)

    this.addCommand("crime", `Usage: CMDCHARcrime`, 0, msg => {
        let money = this.Economy.AttemptToGetMoney(msg.p.name, msg.p._id, "crime");
        if (money.canGetMoney) {
            this.sendChat(this.Economy.getMoneyMessageByType("crime", money.good).replace("NICKNAME", msg.p.name) + "$" + money.moneygot);
        } else {
            let when = this.Economy.convertMS(money.whenGetMoney);
            when = this.Economy.convertMSToString(when);

            this.sendChat(`You cannot commit a crime for another ${when}`);
        }
    }, 0, false)

    this.addCommand("rob", `Usage: CMDCHARrob (name or _id)`, 1, msg => {
        let user = this.getUsersByNameOrId(msg.input(1));
        if (user.length <= 0) {
            this.sendChat("User Not found.");
            return;
        }
        user = user[Math.floor(Math.random() * user.length)];
        if (user._id == this.client.getOwnParticipant()._id) {
            this.sendChat("❌ The bot cannot be robbed.");
            return;
        }
        if (user._id == msg.p._id) {
            this.sendChat("❌ You cannot rob yourself.");
            return;
        }
        let money = this.Economy.AttemptToGetMoney(msg.p.name, msg.p._id, "rob", user._id);
        if (money.canGetMoney) {
            this.sendChat(this.Economy.getMoneyMessageByType("rob", money.good).replace("NICKNAME", msg.p.name).replace("ROBID", user.name) + "$" + money.moneygot);
        } else {
            let when = this.Economy.convertMS(money.whenGetMoney);
            when = this.Economy.convertMSToString(when);

            this.sendChat(`You cannot rob someone for another ${when}`);
        }
    }, 0, false)

    this.addCommand("promote", `Usage: CMDCHARpromote (_id or name) (rank)`, 2, msg => {
        let user = this.getUsersByNameOrId(msg.args[1]);
        if (user.length <= 0) {
            this.sendChat("User Not found.");
            return;
        }
        user = user[Math.floor(Math.random() * user.length)];
        if (this.getRankById(user._id).name == "Banned") {
            this.sendChat("❌ Cannot promote user. User is banned.");
            return;
        }
        switch (msg.args[2]) {
            case "User":
            case "Helper":
            case "Admin":
                {
                    let oldrank = this.getRankById(user._id);
                    let prm = "Promoted";
                    if (oldrank.id == this.getRankIdByRankName(msg.args[2])) {
                        this.sendChat(`${user.name} (${this.Color.getNearestColor(user.color)}) is already a ${oldrank.name}.`)
                        break;
                    }
                    this.changeRank(user._id, msg.args[2].toLowerCase() + "s").then((tonq) => {
                        if (oldrank.id > this.getRankById(user._id).id /* new rank */ )
                            prm = "Demoted";
                        this.sendChat(`${prm} ${user.name} (${this.Color.getNearestColor(user.color)}) from ${oldrank.name} to ${tonq}.`)
                    }).catch((err) => {
                        throw err;
                    })
                    break;
                }
            case "Owner":
                {
                    this.sendChat(`You cannot promote someone to Owner.`);
                }
            default:
                {
                    let tosend = `❌ There is no rank '${msg.args[2]}'. Ranks: `;
                    Object.keys(this.ranks).forEach((rank) => {
                        switch (rank) {
                            case "owner":
                                {
                                    break;
                                }
                            case "admins":
                                {
                                    tosend += "Admin, ";
                                    break;
                                }
                            case "helpers":
                                {
                                    tosend += "Helper, User.";
                                    break;
                                }
                        }
                    })
                    this.sendChat(tosend)
                    break;
                }
        }


    }, 3, false)

    this.addCommand("eval", `Usage: CMDCHAReval (javascript)`, 0, msg => {
        try {
            this.sendChat(`Result: ${eval(msg.input(1))}`);
        } catch (e) {
            this.sendChat(`${e}`);
        }
    }, 3, false)

    this.addCommand("wave", `Usage: CMDCHARwave`, 0, msg => {
        this.sendChat("Wave incoming!!")
        let delay = Math.floor(Math.random() * 100);
        let k = this.piano.keys;

        function wave(i, bot) {
            let up = i == 0;
            let x = setInterval(() => {
                bot.client.startNote(k[Math.abs(i)], 10);
                if ((up && i == k.length - 1) || (!up && i == 0)) clearInterval(x);
                else i++;
            }, delay);
        }
        let aa = Math.round(Math.random());
        if (aa == 1) {
            for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
                setTimeout(() => {
                    wave(0, this)
                }, Math.floor(Math.random() * 500) * i)
            }
        } else {
            for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
                setTimeout(() => {
                    wave(-k.length + 1, this)
                }, Math.floor(Math.random() * 500) * i)
            }
        }
    }, 3, false)

    /*
    this.addCommand("color", `Usage: CMDCHARcolor (color)`, 1, msg => {
        if (Object.keys(this.Color.map).find((clr) => clr.includes(msg.input(1)))) {
            this.sendArray([{
                m: "adminmsg",
                password: "oof",
                message: {
                    m: "color",
                    color: Object.keys(this.Color.map).find((clr) => clr.includes(input)),
                    id: msg.p.id
                }
            }]);
            this.sendChat("oof")
        } else {
            console.log("aa")
        }
    }, 0, false)
    */
    this.addCommand("banself", `Usage: CMDCHARbanself`, 0, msg => {
        this.client.sendArray([{
            m: "kickban",
            _id: this.client.getOwnParticipant()._id,
            ms: -1
        }]);
        this.sendChat("I banned myself, lol.");
    }, 0, false)

    this.addCommand("countryinfo", `Usage: CMDCHARcountryinfo (country)`, 1, msg => {
        let countries = require("./db/countries.json");
        let country = Object.values(countries).find((cty) => cty.name.toLowerCase() == msg.input(1).toLowerCase() || cty.altSpellings.toLocaleString().toLowerCase().includes(msg.input(1)));
        let boarders = "";
        if (country) {
            for (var brdr of country.borders) {
                let country2 = Object.values(countries).find((cty) => cty.alpha3Code == brdr);
                if (country2) {
                    boarders = boarders.concat(country2.name + ",");
                } else continue;
                
            }
            boarders = replaceAt(boarders, boarders.length - 1, ".");
            boarders = boarders.replace(/,(?=[^,]*$)/, ' and ');

            this.sendChat(`${country.name}'s capital is ${country.capital}.`);
            this.sendChat(`${country.name}'s population is ${country.population}.`);
            if (country.borders.length != 0) {
                this.sendChat(`${country.name} is bordered by ${boarders}`);
            } else {
                this.sendChat(`${country.name} isn't bordered by any countries.`);
            }
        } else {
            this.sendChat("Sorry, I couldn't find that country.");
        }
    }, 0, false)

    this.addCommand("ban", `Usage: CMDCHARban (_id or name)`, 1, msg => {
        let user = this.getUsersByNameOrId(msg.args[1]);
        if (user.length <= 0) {
            this.sendChat("User Not found.");
            return;
        }
        user = user[Math.floor(Math.random() * user.length)];
        if (this.getRankById(user._id).name == "Banned") {
            this.sendChat(`${user.name} (${this.Color.getNearestColor(user.color)}) is already Banned.`);
            return;
        } else if (this.getRankById(user._id).name == "Owner") {
            this.sendChat(`You cannot ban the Owner.`);
            return;
        } else {
            this.updateBan(user._id, true).then(() => {
                this.sendChat(`Banned ${user.name} (${this.Color.getNearestColor(user.color)}).`);
            }).catch((err) => {
                throw err;
            })
        }
    }, 2, false)

    this.addCommand("unban", `Usage: CMDCHARunban (_id or name)`, 1, msg => {
        let user = this.getUsersByNameOrId(msg.args[1]);
        if (user.length <= 0) {
            this.sendChat("User Not found.");
            return;
        }
        user = user[Math.floor(Math.random() * user.length)];
        if (this.getRankById(user._id).name != "Banned") {
            this.sendChat(`${user.name} (${this.Color.getNearestColor(user.color)}) isn't Banned.`);
            return;
        } else if (this.getRankById(user._id).name == "Owner") {
            this.sendChat(`:thinking: Unbanned the Owner.`);
            return;
        } else {
            this.updateBan(user._id, false).then(() => {
                this.sendChat(`Unbanned ${user.name} (${this.Color.getNearestColor(user.color)}).`);
            }).catch((err) => {
                throw err;
            })
        }
    }, 2, false)

}