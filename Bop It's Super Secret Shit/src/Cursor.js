class CursorHandler {
    constructor(bot) {
        this.bot = bot;
        this.mode = {
            name: "off",
            prsn: null
        };
        this.circle = {
            fSpeed: 0.25,
            fRadius: 4,
            fDegree: 180,
            z: 0
        }; 
        this.CursorInterval =  setInterval(() => {
            //update prsn
            if (this.bot.Cursor.mode.prsn) {
                this.bot.Cursor.mode.prsn = this.bot.getUsersByNameOrId(this.bot.Cursor.mode.prsn._id)[0];
            }
            switch (true) {
                case this.bot.Cursor.mode.name == "circle":
                    {
                        if (!this.bot.Cursor.mode.prsn) {
                            this.changeMode("off");
                            break;
                        }
                        let angle = (this.bot.Cursor.circle.z) * (Math.PI / this.bot.Cursor.circle.fDegree);
                        this.bot.client.sendArray([{
                            m: "m",
                            x: (this.bot.Cursor.mode.prsn.x + Math.sin(angle) * this.bot.Cursor.circle.fRadius),
                            y: (this.bot.Cursor.mode.prsn.y + Math.cos(angle) * this.bot.Cursor.circle.fRadius)
                        }]);
                        this.bot.Cursor.circle.z += this.bot.Cursor.circle.fSpeed;
                        break;
                    }
                default:
                    {
                        this.bot.client.sendArray([{
                            m: "m",
                            x: 9000000,
                            y: 9000000
                        }]);
                        break;
                    }
            }
        }) 
    }
    changeMode(mode, prsn)  {
        switch (mode) {
            case "circle":
                {
                    this.bot.Cursor.mode = {
                        name: "circle",
                        prsn: prsn
                    };
                    break;
                }
            default:
                {
                    this.bot.Cursor.mode = {
                        name: mode,
                        prsn: null
                    };
                    break;
                }
        }
    }
    
}

module.exports = (bot) => {
    return new CursorHandler(bot)
}