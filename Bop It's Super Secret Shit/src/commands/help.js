const Command = require("../command.js")
class CommandHelp extends Command {
    constructor(bot) {
        super()
    this.addCommand("help", `Usage: ${this.cmdChar}help`, 0, msg => {
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
    }
}

module.exports = (bot) => {
    return new CommandHelp(bot)
}