module.exports = () => {
        fs.readdir("../&^#%(&^#%\'/src/commands", (err, items) => {
                
                    for (var item of items) {
                        let command = require(`./commands/${item}`).bind(this)(this);
                    }
                
            })
        }