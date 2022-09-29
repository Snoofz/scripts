let chat_buffer = [];
function chatBuffer(msg) {
	msg.match(/.{0,511}/g).forEach((x, i) => {
		if (x == '') return;
		if (i !== 0) x = x;
		chat_buffer.push(x);
	});
}
chatInt = setInterval(() => {
	let msg = chat_buffer.shift();
	let Message = gClient.sendToChat(msg);
}, 2200);
