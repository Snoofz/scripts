module.exports = class Command {
    constructor(bot) {
     this.bot = bot;   
    this.addCommand = async (cmd, usage, minargs, func, minrank, hidden, secondfunc, highscore) => {
        this.bot.commands.push({
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
}
}