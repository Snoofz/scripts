var WebSocket = require("ws");
function ws(uri, ofo, options) {
    return new WebSocket(uri, null, options)
}
module.exports = ws;