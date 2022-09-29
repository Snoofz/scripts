function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
let chat = "hellolololloloololaaaaaaaaaaaaaaaao";
let chats = [];
//let rainbow = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#000000']
var count = 0;
var size = 128;
var rainbow = new Array(size);


for (var i = 0; i < size; i++) {
    var red = sin_to_hex(i, 0 * Math.PI * 2 / 3); // 0   deg
    var blue = sin_to_hex(i, 1 * Math.PI * 2 / 3); // 120 deg
    var green = sin_to_hex(i, 2 * Math.PI * 2 / 3); // 240 deg


    rainbow[i] = "#" + red + green + blue;
}


function sin_to_hex(i, phase) {
    var sin = Math.sin(Math.PI / size * 2 * i + phase);
    var int = Math.floor(sin * 127) + 128;
    var hex = int.toString(16);


    return hex.length === 1 ? "0" + hex : hex;
}
let j = 0;

for (var i in chat) {

  if (i == rainbow.length) {
    j = 0;
  }
  chats[i] = setCharAt(chat[i],0,`[${rainbow[j]}]${chat[i]} `)
  j++;
}

console.log(chats.join().replace(/,/g, ""));
