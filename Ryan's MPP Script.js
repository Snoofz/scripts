// ==UserScript==
// @name        Ryan's MPP script
// @athor       Autoplayer and l no klow who maked?
// @namespace   http://www.multiplayerpiano.com/
// @notice      This was originally made by electrashave. And furthermore edited by LoganNZL
// @Version     5.2
// @description Modded Script For Multiplayerpiano.com
// @include     http://www.multiplayerpiano.com/*
// @match       http://www.multiplayerpiano.com/script.js
// @copyright   2013+
// ==/UserScript==
var startUpDelay = window.performance.now();
//notce
//change proxy to start line 1681

// ♥ // personal notes // ♥ //
/*
Here's how to get your _id: MPP.client.getOwnParticipant()._id
Here's how to get your id MPP.client.participantId
Here's how to get a name: MPP.client.ppl["11b6b8d23ad8d4040b8ac00e"].name
Here's how to get your name and split it up: MPP.client.getOwnParticipant().name.split('');
Here's how to split the room into an array: MPP.client.channel._id.split('');
Here's how to check if an something is in an array: if(arrayName.indexOf(id) != -1) { It is there. } else { Nope };
Here's a cool way to generate a number Thanks B@K$!: Math.floor(Math.random()*2) ? "win " + Math.floor(Math.random()*2) : "lost " + Math.floor(Math.random()*2)
Here's how to generate two numbers one negative and one positive using a function, thanks for the help Yoshify: function meowPuff(Min, Max) { return Math.floor(Math.random() * (Max-Min)+Min);} meowPuff(-5, 5); //c:
Here's a test: function catdog(num, win, lose) { Math.floor( Math.random() * num ) ? "win " + Math.floor( Math.random() * num ) : "lose " + Math.floor( Math.random() * num ); }
Here's how to add a message to chat locally (thanks SomeGuy) function localMsg(msg) { $("#chat ul").append('<li style="color: green; opacity: 0.97;"><span class="name">bot: </span><span style="position: initial!important;" class="message"><span class="msg_">' +msg+ '</span></span></li>'); }; localMsg("Hello")
Here's how to append something to something (thanks SomeGuy) $("ul").append( name );
Here's stuff: function x(min, max) { return Math.round(Math.random() * (max - min) + min); }; x(-10, 10)
Here's stuff too: name.length === 5 && name === "Logan" && gClient.isOwner() && last_known_channel === "Logan" && last_known_channel.length === 5
Here's more stuff: me = MPP.client.getOwnParticipant(); delete me.cursorDiv; delete me.nameDiv; JSON.stringify(me)
Here's how to add notifications, thanks Kappa! new window.Notification("Hello", { icon: "http://dreamatico.com/data_images/kitten/kitten-2.jpg", body: "world" })
Here's how to get a random user (thanks Impossible) function meow() {return MPP.client.ppl[Object.keys(MPP.client.ppl)[Math.round(Math.random()*MPP.client.channel.count)]].name}; meow()

♥ Here's how databases work, Logan ♥
	var puff = MPP.client.ppl[MPP.client.getOwnParticipant().id].name

	Chacha–㉖ MPP.client.ppl is the DATABASE
	Chacha–㉖ MPP.client.getOwnParticipant().id is the INDEX or KEY
	Chacha–㉖ MPP.client.ppl[MPP.client.getOwnParticipant().id] is the RECORD or DATA
	Chacha–㉖ MPP.client.ppl[MPP.client.getOwnParticipant().id].name is ONE FIELD OF THAT RECORD

	//Object.defineProperty(MDB,"length",{get:function(){return Object.keys(this).length}})
	//MPP.client.on("n", function(n){if(!MPP.piano.keys[n.n[0]])MPP.chat.receive({t:Date.now(),p:MPP.client.ppl[n.p],a:n.n.map(function(x){return x.n}).join("")})})
♥ Here's how databases work, Logan ♥

`X: ${mx} Y: ${my}` //template  string

καρρα To be exact, it is 4 every 6 seconds.
καρρα 10 every 2 seconds when crowned.

καρρα To get the properties names use: Object.getOwnPropertyNames(String.prototype)

Josh MPP.piano.play('a1', 1, MPP.client.getOwnParticipant(), 0);

//made by Impossible(RU)
//var anims = 0; setInterval(function () { var char = "Logan"; var name = ""; anims++; for (i = 0; i < char.length; i++) { name += char[(anims + i) % char.length]; } MPP.client.sendArray([{ m: "userset", set: { name: name } }]); }, 2100);

x = setInterval(function(){ press('e1',0.5); press('b1',0.5); press('gs2',0.5) }, 4000); y = setInterval(function(){ press('b1',0.5); press('ds1',0.5); press('b2',0.5) }, 4000);


*/
// ♥ // personal notes // ♥ //

//Change to true to stop the notification displaying on start-up.
//You can always view the hotkeys with the H key.
//I encourage you to edit this script and see what cool things you can make.
var i_know_how_to_use_this_bot = false;

//js LOL = setInterval(() => { if (MDB[selfId].inventory.bananaMilk > 1000) { clearInterval(LOL) } MPP.chat.send('!mshop banana milk') }, 200)

this.worker = new Worker("/workerTimer.js"); //must be same origin	- thanks B@K$

/*
//List of names I find interesting or too funny to forget:
Names: "￼￼"
Names: ๖ۣۜʟᴏɢɪᴇ ๖ۣۜʙᴇᴀʀ
Names: ℒℴℊąɳ
Names: ℒℴℊɨℯ
Names: ℋℯℓℓℴ ℐℳ ℒℴℊɨℯؕ ぼ
Names: ℒℴℊɨℯ  ܮ̬͔̰̹̮̫̬͔̰̹̮̫̬͔̰̹̮̫̇ͅͅͅ
Names: ๖ۣۜSnorkel ๖ۣۜWarrior
Names: くコ:彡 ๖ۣۜSevant ๖Squidly  *le slurrpy*
Names: ᶠᵃᵍᵍᵒᵗ
Names: ████████████████████████████████████████
Names: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
Names: ͚ ͚͚ ͚͚͚ ͚͚͚͚ ͚͚͚͚͚ ͚͚͚͚͚͚ ͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚͚ ͚͚͚͚͚͚͚ ͚͚͚͚͚͚ ͚͚͚͚͚ ͚͚͚͚ ͚͚͚ ͚͚ ͚
Names: ௵ＬＯＧＡＮ！Ϡ
Names: Raza२
Names: Logan￼ هلا
Names: ✿ۣۣۜۜ✿
Names: ♥̬͔̰̹̮̫̇ͪͣ͐̆̍̇ͩ́ͣ̕͞ͅ
Names: ><(((⊚>
Names: (_̅_̅_̅_̅_̅м̅a̅я̅i̅j̅u̅a̅n̅a̅_̅_̅_̅ () ด้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็
Names: █̶̧̗̫̜̟̟͓̈̎ͯ͌͗ͩ̀ͮ̾͊͌̈́͌̃ͪͮ̎̑̕͡͠█̷̧̣̘̣͓͕͍̜͎̝̝͉͚͓̩̩͇̭̱͔͋̀̏ͦͯͬͬͥͭ͋̇ͫ͒͝█̶̵̨̹̝͙̲̻̦̘͉̙̭̠̠̺̲̭͍̠̝̤͋̇̀̆ͯ̂ͤͦ͒̌̈́̌ͧ͂͢█̷̴̡̭̤̗̫͓̹̳̯̫̤͇̰̗͔͓ͫ̌̽̏̎̇̐̿͂ͦ█͚̫͖̯͇̝̲̞̱͕̟̗͍̳̠͛ͥ͂̅ͨ̆ͤͥͩͦ̉̈́̾̆̒ͥ̓̄́̕͘█̷̶͋̌̈͌̆̓͒̄̃̏͗̏̽҉̪͕͓̠̩̱̖͚█ͮͣ͛̓̌̓̊̆̌̑̇ͯͯ̽͞͏̷̛̩̝̫̱͉̦̼̳̱̮͓͙̤͓̦█̶̫̫͈̣͈̦̼̻̝̟͐̋͗̐̉̐̓̈̔ͪ͗͌͋͢͝█̔̾̊͒͑̉̔̈̀͋ͣ̓̓͆̎̎͂̾͏̡̰̟̺̻̬̳͚̝͉̝́ͅ█̸̌̓ͯ͌̆̀͏̛̗̙̣̻ͅ█̧ͧ̈͐ͫ̎͊̔ͨͩ̃ͨ̎̑̑̆ͮ͗ͯ́̕͏̮͈̳̲̤̪̹̘͔͔̜͘█̧̠͈̮̤̍͑̒͆̌͂̋̋ͭ́͜█̶̷̧̟͎̻̹͈͕͔͗ͪ͌ͧ͊ͩ͒͛ͨͫͩ͋ͦ̓̓ͨ̈͢͠█͊ͥ͛̒ͦ̿̉̃̽͌ͨ͆ͫ͟͢͡҉͍̤̳̗́█̴̴̸̡ͣ͐ͯͨ̆ͥ̊̾͋͆̎ͨ҉̘̻̳̺͍̺̹͙͓█̜̙̞̩̘͔̓ͧ̓͋͊̋ͦ̍̋ͯͦ̉͂͆̊̋̇̉̚͢͢͠ͅ█̢̫̙̭̜͕̺̦̥͔͍͕̺̻̀̈́̄̂̋͐̃̔͟͞ͅͅ█̸͙̯̝̟̘͉̙̪̬̰̪ͥ̏͂ͣ͐͐̽ͤͭ͡█̶̵̤̱͍̤̖͔̭̰̗̻̩͉̣̤͕̹͍̥͋ͩ̐͐͠͝█̷̧̱̱̖̱̠̤̥͔̪̖̪̠̖͖̞͖͖ͦ͋̑̈ͬ̈́ͫ͗ͦ̏̏ͤͨͩ̓̄͋̔ͅͅ█̴̏͑̉ͦ̊̀͒͑҉͈̜̼̗̪̘͍͉͇̼̝͖̻ͅͅ█̠͕̺͙̝̦͉͉͖̞̖͇͍̖̣ͪͤ̿ͬͧ͊̌͒̒̈́͗ͨ͋̈ͩͫͪ̌́͘█̢̖̱̣̣̆̾͒̿́͘͜͡█̡̢̗̺͎͇͙̺̜̤̜̭̦͔̞̬̖̌̈̐̀͘͡█̸̸̴̛͇̯̪̗̗͕̼̙̬̮̆ͭ̿̈́ͩ̍͊̒͢█̈́̽ͨ҉̡̳̰͙͓̟̯̹͈͙̩͕̥̘̫̱̀͘ͅ█̷̗͓͎͖͈͚̗͎̪͙̾͑͒̍͆̾̑̍ͮ̍̽̍ͪ͆̋́͘█̢̢̋̊̊ͪ̍͒̇̉̏̌ͪ́̚͘҉͔̬͓̫͍̞̥̫̤̯̭͚̝̗͖̖ͅ█̵̈́̏̐ͩ̆̑͠͠͏͖̫͇̣̗̣̠̤̠͟█̵ͣ̍̊̅ͤ̂ͫͧ̌̆̈̈́ͪ̆҉̭̟̣͚̳͢͡ͅͅ█͐͌̾̌̄͆̅̉̆̅̋ͪ͆͟҉͉̘̬̙͎̗̙͞█̘̲̳̘̯͎̱͍̮̱̎̏̀̀ͦ͠ͅ█̨̧̢̪̜̺̣̣̞̞̰͚̹̣̣̺͈ͨ̿ͭͤͭ̈́̇͜█ͩͯ̄̔͋̽̅̅̇̑҉̛̖̳̩̠̜͈́█̧̨̧̯̺̪̤̬̪̼͇͍̖͎̞̲̠̊̐̎ͤ͊̑ͪ͛ͥ͐̍̌́̔̿̏̀̕█̑̃͗̎̃͛̾̋̎̾͗́̆̚͜͏̫̮͕͚͍̳̣̱̬̼͙͇͎̥̘͕͎̦█̶̶̲͖̳͍̮̭̣͈̻͓̮̮̘̬̠̥͙ͨ͗̋̽̔͗̒ͣ͢͞█̵̸̧̲͔̙̻͉̫ͨ͑̀ͮͮ͒ͭ̉͢͜ͅ█̛̰̼̙̯̬͈͉̘̜̲͈̬̲̋̊̅͒̾͒͊͊ͯ͋́͠ͅ█̶̸̘̹̰̼͛͐̒̓͛̈́̐ͥͧ̐͐̓̌ͪ̆͑͜͝█̶̨̛̏̑͌̍ͭ̄ͩ̂ͥ͌̓͆̇ͯ͊̾ͮ͏̩̮̭͎̙͈̲̮͓͚̣█̷̴̡̙̖̪̖̯̻̫͙̄̔̍͛͛́̾̈ͬ̇̾̾͡█͕̠̮̭͖͚̉ͥͨ̉͒̅̋̌͊̄̎͞͞█̷̨̠̺͓̳̤͉̗͍͙̠̮̙̼̿͛̓̀ͧ̊̄ͫ͐̐̎̕͘█̶͎͍̮̲͈̫̲̭̈́͂͗̽ͫͥͧ́͞█͎̲̻̣͓̎̌̀ͪ͑̉ͥ̀ͭͩ̿̾̀█̙͍̦̘̪̥̦̪̲̖͙̤̤̭͓͌ͣ̏̆̂͞█̸̷̹̙̗̳̮͇͎̦͇͊͒ͣ̀̆̈́͒ͪ̀̿̓͊͋͂̃ͫ͝█̛̲̳̲̰̰̜̘̐ͥ̈͂̏̓̇̉̋ͪ̔̅͞█̶̯̰̯̖͉͈͇̮͇̝̻̥̰͔͔̬̙̪̂͑ͨ̍ͦͧ̀͢͡ͅ█̷͓̹͈̩̰̼̪͇̙͙͕̼̻ͭ̓̅̈̈ͮ̍ͯ̊ͫ̇͛̉͜͞͠͠█̵̧̛̩̺̼͍͕̞̾͂͑ͦ̅̀͐̏̄͝█̋̈͗ͫͩͤ̅ͦ͋̓͆̃̒̀҉̶͉͖̺̖̤͇͚̭̮̞̕͜█̵̢̰̞͔̜̥̠̤ͧ̉͐͐͒͊̎̎͊̐̀̍̔̎͛̾́͘͢█̴̶̧̛͇̩̰̼̣̲͚̠̻͖̞͚̯̼̝̲͙̻̒ͦ̍ͪ̾̊ͨ̇͠█̴̷̢͔͇̗̙̦̅͑̉͆̋̈̎ͤ͋͞█̧̛̞̺̥̳͚̭͔̰͉̮̟͎͇͙̗̾͌ͭͬͨ̒̉̂█̶̧̡̦̗̥̘̤̜̦̞̹̣̘͉̻̬̮̠͎̐ͭ̃͆̃ͮ͑ͯ̾̔ͨ█̡͚̺̮͔̭̺̰͉̗̦͉̝͈̀̋͛̽ͦ̋͂ͅ█̶̛̳̯̪̝͕̼̞͖̑̊ͥ̀ͅ█̅̍̆̆ͩ͛͌͐͊ͦͫ͏̶̤̻͉̯̣̪͎̳̯̦̠̭͎́█̨̹̖̩͍̭͉̺ͨ̃ͯͨ́ͬ̾̄̕█̸̸̡̥̞̯̺̪̹̬̙̼͎̹̫̗̘͖̤͑́ͥ̒͊͑̒̈́ͦ̂ͧ͑͡█̦̭̺̰͎͖͋͌͂͊̊́́͝͠█̵̵͚̥͍̰̮̫̥̙͕̬̳͔͐͐̅͂ͫͣ̕͝ͅͅ█ͮ̐̊͑̄̉͋̿̋̅̾̆̈͋ͫͭ͋̒ͭ͡҉̱͎̪̫̝̲̘̭̥͉͍̱̬̬ͅ█̶ͣ̈̆̉̂̾͠҉̖̹̻̯̣̯͉̟̠͚█̘̼̣͔̮̳̻͇̠͕͎̹̤̺̏̃̔ͩ̐̌͜͟͠͞█̶̧̫͔̼͇̭̞̫̤̹̱̞̖̙ͪͦ̉̈́̏̊̿̈͞█̷̸̨͔͚͎͇̬̠͕̣͎̟̩̠͙̬̥͉̞͗͗ͥ̑̽̋̔̈ͯͪ̋ͬ͊̅͐ͅ█̴̡̡̺̰͙̳̱̜̣̟̱̼͇̘̣̅͆͑͗͑ͭ̅̃͋ͦ̄̾ͩ̅̓̑̌̓́█̵̷̊͒̀ͣ͌̒̓ͧ̐̉̀͞͏̬̞̺̬̣̦̲̱̤̩͔͚̦̞̪ͅ█̮͔̳̏̐̓͛̐ͩ̂̾̍̚͝█̴̨͗ͯ̽̓̑͗̂̈̚̚͘͟͏͖̩͕̮͉█̖̹͇͓͖͍͖̪̱͔̗̣̯̬̾͛ͯͦͤͬ͒̾̚̚͜͡█̛̓̐̈ͥͣͮ͂ͨ̃҉̢̙̮̤̬̜̭͇̘͈͍̬█̷̶͔̩̖͙͙̺̟̞̻̖̜̈̂̌͋̾̾ͣ̓̃͌ͧ̏ͧ̀̎͛͢͠█̛̆ͤͫ̿ͯͩ̔̈̉͊́͛͌̽̽҉̧͏̣̣͓̜̙̭͖͝█̷̠͍̝̘̃͂̍̔̊̉͐͠█̴̨̧̨͉̞̤̜̪̠̥̣̬͒̏̊̿͐̋̀̓͊͡ͅ█̴̜͓͔̯͖͕̙̝̗͚̪̘͙ͤͫ̂̇̿̄ͪ̑̑͡█̳̥̬̬̭͈̟͚̪͉͕ͯ̒̓ͫ͗ͧͣͩ̇͋̎ͬ̌ͣ̿̚̕͢ͅ█̰̼̹͕̎̒ͩ͆ͧͨ̽̌͒͋̾̈́̍͐̎̇ͪ̌͜█̧͔͓̫̠̤̣̟̳̥̦̘̼͓ͤ͗ͥ̏̐ͨ̆ͥ͐̀ͩͤ̑̕͞͝█̶̛̊̿͗̓̇̅͏̴͖̫͉͚̩̣̟̠͎̟̟̙̜ͅ█̬̫̘̜̤̣̫̤̠͈̃̓̑̓̀̀͘█̶̹̱̙͎̺̥̹̙̟̩͍̰͓̹̤͎̞̞̃ͤͬ̈́̔̊̏͛͋̈́ͨ̂̈́ͪͭ̽█̴̴̨ͯ̉̃̿͌̅͒͛͗ͩ̀̚͡͏͙̫̥̰͚͈█̵̄ͫͤͬ́ͨͩ̏͂̆̀̈̃̌͋͏̷̛̗̬̰͚͞█̡̨͚̱̗̰̥̪̮͍ͤ͆͑ͧͭͣ̏ͩ͌ͩͭ̆̊̿̚█̜̦͓̪̪͔̯̖̳̺̾̃ͦ͗͆ͯ̓̑̆ͮ͢͟͜͝█̸̩̻̹̠͍̹̳̻͔̥̳̰̣͐́ͮͭ̓̈̆̓́́ͅ█̵̷̢̜̹͖͔̦̜̭̯̬̯ͤͥ̐͆͛̑͌̈ͥ̿̍ͥ̿̄ͪ̕█̷̸̸̤̲͙̙͕͉̺̮͚̹͔̖̠ͣ̽ͩ̇ͪͭ̉ͫ̃͗̀͞█̨̠̮͖̞̹͔͖͔̘͔ͭͥ̍̉̿̇ͫ̄͊̉́͠█̷̷̦̩̣͇̯̙̩̰̍͊ͣ̉̎̚
Names: ♩ ♪ ♫ ♬
Names: Logie the Bomb-Diggity
Names: Logie the Small Mammal Strangulator
Names: Hunny Bunny Woo Woo
Names: "　　　　 　"
Names: Day/̢̥̝͇̣̺̠̦̣͊̏̆̄͋̈́̀̌̈́̚͜
Names: Mer mer mer mer mer~Logie the Sex Master
Names: Cum Soaked Chest Hair ;)
Names: '้ۜϠ
Names: ª º°º ª
Names: You stupid little spoon bitch.
Names: ──★──
Names: ༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽
Names: ℬℰℱℋℐℒℳ℘ℛℓℴℯɨℊℎ
Names: ][_, ([]) ][_,
Names: Special Little Snowflake
Names: ⋙
Names:(/Ꭷ ᴥ Ꭷ\)
Names: ◘◘◘◘
Names: ૯
Names: ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ௵ௌ
Names: ๖ۣ̲̲ۜB̲L̲U̲E̲S̲ ☕™

Code:
Flips page 180°: ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){ document.body.style[prefix + 'transform'] = 'rotate(90deg)'; });
Tilt page elements: ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){ Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){ el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)'; }); });


if (my >= 50) { press('a-1'); my; } else { press('c7'); my}

List of piano sounds:

Steinway Piano: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/HDPiano/" + key.note + ".wav", function () {
Music Box: piano.audio.load(key.note, "http://24.183.232.15:8999/CustomSounds/MusicBox/" + key.note + ".mp3", function () {
Harpsichord (good): piano.audio.load(key.note, "http://24.183.232.15:8222/CustomSounds/Harpischord/" + key.note + ".wav", function () {
Amazing: piano.audio.load(key.note, "http://24.183.232.15:8222/CustomSounds/PianoSounds/" + key.note + ".mp3", function () {
Clear Piano: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/ClearPiano/" + key.note + ".wav", function () {
Electric guitar: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/258840068/CustomSounds/Guitar/" + key.note + ".mp3", function() {
Hard and Tough piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/216104606/HardAndToughPiano/" + key.note + ".mp3", function () {
Airhorn piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/Airhorn/" + key.note + ".wav", function () {
Cello: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/Cello/" + key.note + ".mp3", function () {
Drums: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/Drums/" + key.note + ".wav", function () {
Grand piano: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/GrandPiano/" + key.note + ".wav", function () {
Guitar: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/Acustic%20Guitar%20v2/" + key.note + ".wav", function () {
Rape: piano.audio.load(key.note, " https://dl.dropboxusercontent.com/u/24213061/Rape/" + key.note + ".wav", function () {
Digital Piano: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/Digital/" + key.note + ".wav", function () {
Harpsichord: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/Harpischord/" + key.note + ".wav", function () {
Bells Piano: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/Bells/" + key.note + ".wav", function () {
Soft Piano: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/216104606/" + key.note + ".mp3", function () {
Default Piano: piano.audio.load(key.note, "/mp3/" + key.note + ".wav.mp3", function () {

Local sounds (you won't be able to load these)
Amazing Local: piano.audio.load(key.note, "http://localhost:3000/sounds/amazing/" + key.note + ".mp3", function () {
piano2 Local: piano.audio.load(key.note, "http://localhost:3000/sounds/piano2/" + key.note + ".mp3", function () {
newPiano Local: piano.audio.load(key.note, "http://localhost:3000/sounds/newPiano/" + key.note + ".mp3", function () {

*/

//background music: document.body.style.background = " url('https://www.dropbox.com/s/1tcf42b0f41ib40/Music.gif?raw=1') no-repeat right top";
//Totoro: document.body.style.background = "url('http://f8.topit.me/8/56/31/113111364735131568o.jpg') no-repeat right top";
//background landscape: document.body.style.background = " url('http://i.imgur.com/fUdprux.jpg') no-repeat center 90%";
//Beethoven: document.body.style.background = "url('http://wallpoper.com/images/00/41/58/86/music-beethoven_00415886.jpg')"; document.body.style.backgroundSize = "1366px 768px";

// creates a lobby
//MPP.client.sendArray([{m: "chset", set: {lobby: true}}]);

// creates new room
//MPP.client.sendArray([{m: "ch", _id: name + "'s room"}]);

//asdf = setInterval(function() { transLvl++; if (transLvl > 6) { transLvl = 0; } }, 450);

/*
test
gClient.on("a",function(msg){ gClient.sendArray([{m:"userset", set:{name:msg.p.name}}]); });

gClient.on("a",function(msg){ if (msg.a.indexOf(gClient.getOwnParticipant().name + " is enabled " )!== -1) { sendChat("/octave")} });
*/


// basic settings - settings I encourage you change for your prefrences. Just be careful.
												//below is the message of the day
var Lmotd = "MOTD: Clefairy's Polar bear - http://i.imgur.com/gVudKiN.jpg & check this out!!!1¹ http://aem1k.com/world/";
var botVersion = "5.2.28"							//version. saves time instead of changing all throughout script
var selfName = "Ryan";							//your name
var keyword = "ryan";							//your name or word you would like to be alerted about (make sure you allow Chrome notifications and swap the MP3 sound for alert)
var selfId = "6c83d8b8ea128844edf8c638";		//your id here, easy way to make yourself master and op. Just replace one Id instead of 7 or so.
var sheetURL = "http://pastebin.com/zWvWVfdb";	//link to pastebin for PC sheets
var refresh_rate = 2100;						//delay between name change. Min: 2.1 sec. Default: 2100
var hotkeyRoom = "Welcome and Enjoy!";				//the name of the numpad 2 lobby room to be created
var randNoteColour = true;						//default setting for SomeGuy's random note colours
var showOwnMouse = true;						//whether or not you can see your own mouse (I like havng it on sdfghjk)
var chatLimit = 10240;							//maximum chat messages that are shown when you scroll up chat (not upon room join) default was 256
var fSpeed = 0.25;								//default speed for following when you click a user's name then click follow
var fRadius = 2;								//default radius for following (how far away you rotate)
var fDegree = 180;								//which way you spin, not exactly sure
var afterName = " ";							//symbol in chat after name
var closeCheck = false;							//when true prompts you if you try to close/refresh the page.
var timeStamp = false;							//shows time next to message
var useDefaultSounds = true;					//change this to true if the piano is grey and the notes are not loading <-- READ IF YOU HAVE SOUND PROBLEMS
var cmdChar = '!';								//the symbol you want chat commands to use ! was default (note trim() if you run into problems Logan)
var autoFollow = false;							//auto follow user's mouses (needs to be true for strict follow)

var strictMode = false;							//only lets peoople with (); at the end of their name use the bot

//speech settings
	var speechStatus = false;					//read chat by default or use numpad 7 to toggle
	var speechVolume = 1; //0.5					//default volume for spoken text
	var speechPitch = 1;						//default pitch for spoken text
	var speechRate = 1;							//default speed for spoken text
	var speechLang = "en-GB";					//default for speech language (there's more search Google speech API supported languages)
	//en-GB, en-US, es-ES, fr-FR, ja-JP, de-DE ,it-IT
//speech settings

//$("body").css('cursor','url(http://static.tumblr.com/c07b69a007660c9d85e65fd98d03bdbb/u8lqlti/RjRnh9jhe/tumblr_static_dmtjjg29joooc4cwwkskwkwcs.gif), auto');

//audio settings
	//var alertSound = new Audio('http://localhost:3000/sounds/alert.mp3');	//alert!
	var alertSound = new Audio('http://localhost:3000/sounds/alert(mario).mp3'); //alert mario!
	var yeySound = new Audio('http://localhost:3000/sounds/yey.mp3'); //yey!
	var friendSound = new Audio('http://localhost:3000/sounds/friendJoin.mp3');	//friendJoin

	alertSound.volume = 0.05; //still bloody scares me

	var alertName = true;						//plays mp3 when your name is said in chat (edit your name there)
//audio settings

//voice
	var Voice = new webkitSpeechRecognition();
//voice

var debug = false;	//toggle ids next to names in chat
var debug2 = false;	//this feature is intended to break the chat completely. if it appears to work correctly that is in fact a bug of the bug.
//end of basic settings
//tests

/*
!js MPP.client.on("a",function(msg){ if(msg.p.id == MPP.client.participantId) return; MPP.client.sendArray([{m:"userset", set:{name: "Logan ♥s " + msg.p.name}}])});
!js i=1; foo = setInterval(() => { move(i+=1,i+=1); i > 100 ? ( clearInterval(foo), move(50,50) ) : true }, 60);

a = setInterval( function() {
	if (fSpeed >= 1) {
		fSpeed = -1
	} else {
		fSpeed += 0.1
	}
}, 300)

*/

//tests
keysArray = ['a-1', 'as-1', 'b-1', 'c0', 'cs0', 'd0', 'ds0', 'e0', 'f0', 'fs0', 'g0', 'gs0', 'a0', 'as0', 'b0', 'c1', 'cs1', 'd1', 'ds1', 'e1', 'f1', 'fs1', 'g1', 'gs1', 'a1', 'as1', 'b1', 'c2', 'cs2', 'd2', 'ds2', 'e2', 'f2', 'fs2', 'g2', 'gs2', 'a2', 'as2', 'b2', 'c3', 'cs3', 'd3', 'ds3', 'e3', 'f3', 'fs3', 'g3', 'gs3', 'a3', 'as3', 'b3', 'c4', 'cs4', 'd4', 'ds4', 'e4', 'f4', 'fs4', 'g4', 'gs4', 'a4', 'as4', 'b4', 'c5', 'cs5', 'd5', 'ds5', 'e5', 'f5', 'fs5', 'g5', 'gs5', 'a5', 'as5', 'b5', 'c6', 'cs6', 'd6', 'ds6', 'e6', 'f6', 'fs6', 'g6', 'gs6', 'a6', 'as6', 'b6', 'c7'];
var MIDI_TRANSPOSE;
var followId = null;
var following = false;

// advanced settings - settings that you probably won't need to edit and that the script changes itself to function - although some you might, give em a read
// their settings below are the state they will be in when the script starts (kind of like a default) though some are needed to be in a certian state to function correctly
var database = {}; //use for something like storing IDs Logan
var food_calories = 0;							//tracks calories of food consumed
var drink_calories = 0;							//tracks calories of liquid consumed
var fishCaught = 0;								//tracks your fish caught
var naughty = 0;								//tracks how many times the bot has been sworn at
var jokeGens = 0;								//tracks the number of generated jokes
var octTemp = 1;								//incremental number for number of octaves
var susTemp = true;								//boolean for sustain toggling
var rollTemp = false;							//now includes MIDI supported multi-note. Thanks Josh!
var volume = 0.5;								//volume for all (if not most) notes played by you
var transLvl = 0;								//electrashave's transposition
var delPlay = false;							//for delay play
var delays = 150;								//delay
var delTime = 1000;								//amount of delay
var copyNotes = false;							//copy other's notes
var ignoreNotes = false;						//ignore notes default setting
var politePlay = false; 						//doesn't send your notes so you can play while others are without interrupting
var testflipN = false;							//for Yoshify's speech to text
var testflipP = false;							//for cursor pong hotkey
var testflipB = false;							//for cursor bunny hotkey
var testflipF = false;							//for cursor follow hotkey
var incognito = false;                  		//turn this on to be incognito by default
var juggle = false;								//crown juggling
var listening = false;							//setting for speech to text, leave false so hotkey is off by default
var alertOnFriendJoin = true;					//sends a message in chat when a friend joins
var crownSoloToggle = false;					//toggle for hotkey
var roomVisibleToggle = true;					//toggle for hotkey
var usersAsleep = [];							//x3
var usersDead = [];								//x.x
var giveFish = false;							//toggle for !fishlord whether or not it gives fish out
var fishLord = "";								//name of person whom receives fish if you're giving out fish
var clearing = false;							//used when clearing chat to stop spamming
var Lvel = false;								//for muting PC notes
var meow = false;								//meow meow meow meow meow meow meow meow meow
var leet = false;								//h3ll0, my n4m3 is l0g4n :3
var animName = false;							//hey hey, cuddlepet. how're you?
var asked = false;								//for !math
var hardEnglish = true;							//for !mtype difficulty
var hardLength = 30;
var askedEnglish = false;						//for !mtype
var sentence;									//for !mtype
var mathDiff = 2								//default difficulty for !math
var mathDiffTxt = "Medium";						//for difficulty in text
var mathAnswered = 0;							//amount of answered questions
var mathSkipped = 0;							//amount of skipped questions
var mathCheat = false;							//c'mon >:3
var tabbedIn = false;							//for notifications only if tabbed in
var botLoaded = false;							//used for detecting if bot is loaded
var mouseNote = false;							//Chacha's mouse note thing :3
var ouch = false;								//ouch
var ouchN = 10;									//ouchNumber
var ouchD = 0;									//ouchDelay
var lolNo = false;								//no
var sayIt = false;								//Google says hi!
var clearChat = false;							//will switch to true for a few seconds when you click message count button to clear chat. Otherwise chat log is retained

//my theme (if you'd like it just ask I'll upload a "friendly" version that doesn't use anything from localhost)
$('head').append('<link rel="stylesheet" type="text/css" href="http://localhost:3000/scripts/style.css"/>');

// end of advanced settings

// localStorage
var L = localStorage;

// Meowpuff delerations
if (L.MDB) {
	var MDB = JSON.parse(L.MDB);
	console.log('successfully loaded MDB');

} else {
	var MDB = {};
	console.log('created new MDB');
}

var meowNeP = "You have insufficient funds for "; //not enough meow points

//This is used to set the status of meowing to false so the loop for adding meow points can initiate (thanks Kappa for explaining bracket notation)
for (var idObj in MDB) {
	for (var prop in MDB[idObj]) {
		if (MDB[idObj]['meowing'] === true) MDB[idObj]['meowing'] = false;
	}
}

// functions start //

// get random interger
function randNum(min, max) {
	return Math.round(Math.random() * (max - min) + min);
};

// get random string
function randStr(strLength) {
    var str = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i=0; i < strLength; i++)
        str += chars.charAt(Math.floor(Math.random() * chars.length));

    return str;
};

// thanks SomeGuy and electrashave!
function localMsg(msg) { 							   //<3
	MPP.client.emit('a', { m: 'a', a: msg, p: { name: "Clefairy", color: 'rgb(255, 88, 202)' }});
};

// thanks Yoshify!
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

// date ahoy!
function getTime() {
	var date = new Date(); //constructor
	var hours = date.getHours(); //hours
	var minutes = date.getMinutes(); //minutes
	var seconds = date.getSeconds(); //seconds
	if (hours <= 9) hours = '0' + hours; //fix awkwardness..
	if (minutes <= 9) minutes = '0' + minutes;
	if (seconds <= 9) seconds = '0' + seconds;
	return hours + ':' + minutes + ':' + seconds; //return the time formatted
};

// let's have a chat
function say(phrase) {
	boop = new Audio('http://ssl.gstatic.com/dictionary/static/sounds/de/0/' + phrase + '.mp3');
	boop.play();
};

// update the cmdChar
function updateCmdChar(cmd) {
	document.getElementById("24-btn").innerHTML = cmd;
}

// tab (change to whatever)
function tab() {
	var faceArray = ["≧◔◡◔≦", "≤^.^≥", "◕ ‿ ◕",
	"(`･ω･´)", "☜(⌒▽⌒)☞", "(◕‿◕✿)", "༼ つ ◕_◕ ༽つ", "(づ｡◕‿‿◕｡)づ", "(っ◕‿◕)っ", "(っ=◕‿◕=)っ"
	];
	var faceSelection = Math.floor(Math.random() * faceArray.length);
	sendChat(faceArray[faceSelection]);
};

// thanks Someguy!
function Col(){
	return ('#'+Math.floor(Math.random()*16777215).toString(16));
};

// thanks B@K$!
function randomUser() {								//Math.round <- was (floor is more reliable)
	return MPP.client.ppl[Object.keys(MPP.client.ppl)[Math.floor(Math.random() * MPP.client.channel.count)]].name;
};

// thanks Ramid!
function move(x, y){
	MPP.client.sendArray([{ m: "m", x: x, y: y}]);
}

// (thanks for showing me Someguy)
(function() {
    var script = document.createElement('script');
    script.onload = function() {
        var stats = new Stats();
        stats.domElement.style.cssText = ' position: fixed; top: 50px; right: 28px; z-index:10000';
        document.body.appendChild(stats.domElement);
        requestAnimationFrame(function loop() {
            stats.update();
            requestAnimationFrame(loop)
        });
    };
    script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
    document.head.appendChild(script);
})()

// thanks electrashave!
function similar(first, second, percent) {
  if (first === null || second === null || typeof first === 'undefined' || typeof second === 'undefined') {
	return 0;
  }

  first += '';
  second += '';

  var pos1 = 0,
	pos2 = 0,
	max = 0,
	firstLength = first.length,
	secondLength = second.length,
	p, q, l, sum;

  max = 0;

  for (p = 0; p < firstLength; p++) {
	for (q = 0; q < secondLength; q++) {
	  for (l = 0;
		(p + l < firstLength) && (q + l < secondLength) && (first.charAt(p + l) === second.charAt(q + l)); l++)
	  ;
	  if (l > max) {
		max = l;
		pos1 = p;
		pos2 = q;
	  }
	}
  }

  sum = max;

  if (sum) {
	if (pos1 && pos2) {
	  sum += similar(first.substr(0, pos1), second.substr(0, pos2));
	}

	if ((pos1 + max < firstLength) && (pos2 + max < secondLength)) {
	  sum += similar(first.substr(pos1 + max, firstLength - pos1 - max), second.substr(pos2 + max,
		secondLength - pos2 - max));
	}
  }

  if (!percent) {
	return sum;
  } else {
	return (sum * 200) / (firstLength + secondLength);
  }
}

// thanks electrashave!
function getUser(target) {
	for (var id in MPP.client.ppl) {
		if (!MPP.client.ppl.hasOwnProperty(id)) continue;
		var part = MPP.client.ppl[id];
		if (part.name.toLowerCase().indexOf(target) !== -1 || similar(part.name.toLowerCase(), target.toLowerCase(), 1) >= 60) {
			return part;
			break;
		}
	}
}

var z = 0;
var follow = setInterval(function () {
	if (following) {
		for (var _id in MPP.client.ppl) {
			if (!MPP.client.ppl.hasOwnProperty(_id)) continue;	//if the id is yours do not follow yourself
			var part = MPP.client.ppl[_id];
			if (!followId) return;
			if (part._id === followId) {	//follows only that ID
			var angle = (z) * (Math.PI/fDegree);
				MPP.client.sendArray([{
					m: "m",
					x: part.x + Math.sin(angle)*fRadius,
					y: part.y + Math.cos(angle)*fRadius
				}]);
				z += fSpeed;
			}
		}
	}
}, 1);

// functions end //

// midi btn
$("body #bottom .relative").append('<div id="blah-btn" class="ugly-button blah_btn" style="position: absolute;bottom: 25px;right: 832px;width: 100px"; title="Creates a new lobby">New Lobby...</div>');


// event listners start //

window.addEventListener("beforeunload", function(event) {
	if (closeCheck) {
		event.returnValue = "If you wish to stop this confirmation message when you close/refresh the page search for \"closeCheck\" in the script and set this to false.";
	}
});
// event listners end //

$(function () {

	  var test_mode = (window.location.hash && window.location.hash.match(/^(?:#.+)*#test(?:#.+)*$/i));

    //var gSeeOwnCursor = (window.location.hash && window.location.hash.match(/^(?:#.+)*#seeowncursor(?:#.+)*$/i));
	//var lSeeOwnCursor = true; //silly

	  var gMidiOutTest = (window.location.hash && window.location.hash.match(/^(?:#.+)*#midiout(?:#.+)*$/i));

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0) from += len;
            for (; from < len; from++) {
                if (from in this && this[from] === elt) return from;
            }
            return -1;
        };
    }

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (cb) {
        setTimeout(cb, 1000 / 30);	//60
    };

	//thanks electrashave!
	function msgBox(about, info, duration, target) {
        window.gAlert = new Notification({
            title: about,
            html: info,
            target: target,
            duration: duration
        });
    }

	setCmdChar = function() {
		var promptChar = prompt('Enter a new symbol to be used for commands. (currently ' + cmdChar + ')', cmdChar);
		cmdChar = promptChar.substring(0,1).toLowerCase();
		msgBox('CMD symbol set to', ''+cmdChar, 2000, '#piano');
	};



    var DEFAULT_VELOCITY = 0.5;




    var TIMING_TARGET = 1000;




    // Utility

    ////////////////////////////////////////////////////////////////



    var Rect = function (x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.x2 = x + w;
        this.y2 = y + h;
    };
    Rect.prototype.contains = function (x, y) {
        return (x >= this.x && x <= this.x2 && y >= this.y && y <= this.y2);
    };

    // performing translation

    ////////////////////////////////////////////////////////////////

    var Translation = (function () {
        var strings = {
            "people are playing": {
                "pt": "pessoas est√£o jogando",
                "es": "personas est√°n jugando",
                "ru": "—á–µ–ª–æ–≤–µ–∫ –∏–≥—Ä–∞–µ—Ç",
                "fr": "personnes jouent",
                "ja": "‰∫∫„ÅåÈÅä„Çì„Åß„ÅÑ„Çã",
                "de": "Leute spielen",
                "zh": "‰∫∫Ë¢´Êâì",
                "nl": "mensen spelen",
                "pl": "os√≥b grajƒÖ",
                "hu": "ember j√°tszik"
            },
            "New Room...": {
                "pt": "Nova Sala ...",
                "es": "Nueva sala de...",
                "ru": "–ù–æ–≤—ã–π –Ω–æ–º–µ—Ä...",
                "ja": "Êñ∞„Åó„ÅÑÈÉ®Â±ã",
                "zh": "Êñ∞ÊàøÈó¥",
                "nl": "nieuwe Kamer",
                "hu": "√∫j szoba"
            },
            "room name": {
                "pt": "nome da sala",
                "es": "sala de nombre",
                "ru": "–Ω–∞–∑–≤–∞–Ω–∏–µ –∫–æ–º–Ω–∞—Ç—ã",
                "fr": "nom de la chambre",
                "ja": "„É´„Éº„É†Âêç",
                "de": "Raumnamen",
                "zh": "ÊàøÈó¥ÂêçÁß∞",
                "nl": "kamernaam",
                "pl": "nazwa pok√≥j",
                "hu": "szoba neve"
            },
            "Visible (open to everyone)": {
                "pt": "Vis√≠vel (aberto a todos)",
                "es": "Visible (abierto a todo el mundo)",
                "ru": "Visible (–æ—Ç–∫—Ä—ã—Ç—ã–π –¥–ª—è –≤—Å–µ—Ö)",
                "fr": "Visible (ouvert √† tous)",
                "ja": "ÁõÆ„Å´Ë¶ã„Åà„ÇãÔºàË™∞„Å´„Åß„ÇÇÈñã„ÅÑ„Å¶„ÅÑ„ÇãÔºâ",
                "de": "Sichtbar (offen f√ºr alle)",
                "zh": "ÂèØËßÅÔºàÂêëÊâÄÊúâ‰∫∫ÂºÄÊîæÔºâ",
                "nl": "Zichtbaar (open voor iedereen)",
                "pl": "Widoczne (otwarte dla wszystkich)",
                "hu": "L√°that√≥ (nyitott mindenki sz√°m√°ra)"
            },
            "Enable Chat": {
                "pt": "Ativar bate-papo",
                "es": "Habilitar chat",
                "ru": "–í–∫–ª—é—á–∏—Ç—å —á–∞—Ç",
                "fr": "Activer discuter",
                "ja": "„ÉÅ„É£„ÉÉ„Éà„ÇíÊúâÂäπ„Å´„Åô„Çã",
                "de": "aktivieren Sie chatten",
                "zh": "ÂêØÁî®ËÅäÂ§©",
                "nl": "Chat inschakelen",
                "pl": "W≈ÇƒÖcz czat",
                "hu": "a cseveg√©st"
            }
            // todo: it, tr, th, sv, ar, fi, nb, da, sv, he, cs, ko, ro, vi, id, nb, el, sk, bg, lt, sl, hr
            // todo: Connecting, Offline mode, input placeholder, Notifications
        };

        var setLanguage = function (lang) {
            language = lang
        };

        var getLanguage = function () {
            if (window.navigator && navigator.language && navigator.language.length >= 2) {
                return navigator.language.substr(0, 2).toLowerCase();
            } else {
                return "en";
            }
        };

        var get = function (text, lang) {
            if (typeof lang === "undefined") lang = language;
            var row = strings[text];
            if (row == undefined) return text;
            var string = row[lang];
            if (string == undefined) return text;
            return string;
        };

        var perform = function (lang) {
            if (typeof lang === "undefined") lang = language;
            $(".translate").each(function (i, ele) {
                var th = $(this);
                if (ele.tagName && ele.tagName.toLowerCase() == "input") {
                    if (typeof ele.placeholder != "undefined") {
                        th.attr("placeholder", get(th.attr("placeholder"), lang))
                    }
                } else {
                    th.text(get(th.text(), lang));
                }
            });
        };

        var language = getLanguage();

        return {
            setLanguage: setLanguage,
            getLanguage: getLanguage,
            get: get,
            perform: perform
        };
    })();

    Translation.perform();




    // AudioEngine classes

    ////////////////////////////////////////////////////////////////

    var AudioEngine = function () {};

    AudioEngine.prototype.init = function (cb) {
        this.volume = 0.6;
        this.sounds = {};
        return this;
    };

    AudioEngine.prototype.load = function (id, url, cb) {};

    AudioEngine.prototype.play = function () {};

    AudioEngine.prototype.stop = function () {};

    AudioEngine.prototype.setVolume = function (vol) {
        this.volume = vol;
    };


    AudioEngineSM2 = function () {};

    AudioEngineSM2.prototype = new AudioEngine();

    AudioEngineSM2.prototype.init = function (cb) {
        AudioEngine.prototype.init.call(this);

        window.SM2_DEFER = true;
        var script = document.createElement("script");
        script.src = "/soundmanager2/soundmanager2.js";

        var loaded = false;
        script.onload = function () {
            if (loaded) return;
            if (typeof SoundManager === "undefined") {
                setTimeout(script.onload, 4000);
                return;
            }
            loaded = true;

			//sound manager settings
            window.soundManager = new SoundManager();
            soundManager.url = "/soundmanager2/";
            soundManager.debugMode = test_mode ? true : false;
            soundManager.useHTML5Audio = false;
            soundManager.flashVersion = 9;
            soundManager.multiShot = true;
            soundManager.useHighPerformance = true;
            soundManager.beginDelayedInit();
            if (cb) soundManager.onready(cb);
        };
        setTimeout(script.onload, 4000);

        document.body.appendChild(script);
        return this;
    };

    AudioEngineSM2.prototype.load = function (id, url, cb) {
        this.sounds[id] = soundManager.createSound({
            id: id,
            url: url,
            autoLoad: true,
            volume: this.volume,
            onload: cb
        });
    };

    AudioEngineSM2.prototype.play = function (id, vol, delay_ms) {
        var self = this;
        setTimeout(function () {
            soundManager.play(id, {
                volume: self.volume * 100.0
            });
        }, delay_ms);
    };

    AudioEngineSM2.prototype.setVolume = function (vol) {
        AudioEngine.prototype.setVolume.call(this, vol);
        for (var i in this.sounds) {
            if (this.sounds.hasOwnProperty(i)) {
                this.sounds[i].setVolume(this.volume * 100.0);
            }
        }
    };


    AudioEngineWeb = function () {};

    AudioEngineWeb.prototype = new AudioEngine();

    AudioEngineWeb.prototype.init = function (cb) {
        AudioEngine.prototype.init.call(this);
        this.context = new AudioContext();
        this.gainNode = this.context.createGain();
        this.gainNode.connect(this.context.destination);
        this.gainNode.gain.value = this.volume;
        this.playings = {};
        if (cb) setTimeout(cb, 0);
        return this;
    };

    AudioEngineWeb.prototype.load = function (id, url, cb) {
        var audio = this;
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.responseType = "arraybuffer";
        req.addEventListener("readystatechange", function (evt) {
            if (req.readyState !== 4) return;
            try {
                audio.context.decodeAudioData(req.response, function (buffer) {
                    audio.sounds[id] = buffer;
                    if (cb) cb();
                });
            } catch (e) {	//was commented
                throw new Error(e.message
					+ " / id: " + id
					+ " / url: " + url
					+ " / status: " + req.status
					+ " / ArrayBuffer: " + (req.response instanceof ArrayBuffer)
					+ " / byteLength: " + (req.response && req.response.byteLength ? req.response.byteLength : "undefined"));
							//was commented
                new Notification({
                    id: "audio-download-error",
                    title: "Problem",
                    text: "For some reason, an audio download failed with a status of " + req.status + ". " + " I blame antivirus software.",
                    target: "#piano",
                    duration: 10000
                });
            }
        });
        req.send();
    };

    AudioEngineWeb.prototype.play = function (id, vol, delay_ms, part_id) {
        if (!this.sounds.hasOwnProperty(id)) return;
        var time = this.context.currentTime + (delay_ms / 1000);
        var source = this.context.createBufferSource();
        source.buffer = this.sounds[id];
        var gain = this.context.createGain();
        gain.gain.value = vol;
        source.connect(gain);
        gain.connect(this.gainNode);
        source.start(time);
        // Patch from ste-art remedies stuttering under heavy load
        if (this.playings[id]) {
            var playing = this.playings[id];
            playing.gain.gain.setValueAtTime(playing.gain.gain.value, time);
            playing.gain.gain.linearRampToValueAtTime(0.0, time + 0.1);
			playing.source.stop(time + 0.1);
			/*playing.gain.gain.linearRampToValueAtTime(0.0, time + 0.5);	//Ray's fix for single notes being pressed multiple times
            playing.source.stop(time + 0.6);*/
        }
        this.playings[id] = {
            "source": source,
            "gain": gain,
            "part_id": part_id
        };
    };

    AudioEngineWeb.prototype.stop = function (id, delay_ms, part_id) {
        if (this.playings.hasOwnProperty(id) && this.playings[id] && this.playings[id].part_id === part_id) {
            var time = this.context.currentTime + (delay_ms / 1000);
            var gain = this.playings[id].gain.gain;
            gain.setValueAtTime(gain.value, time);
            gain.linearRampToValueAtTime(gain.value * 0.1, time + 0.16);
            gain.linearRampToValueAtTime(0.0, time + 1.9);
            this.playings[id].source.stop(time + 2.0);
            this.playings[id] = null;
        }
    };

    AudioEngineWeb.prototype.setVolume = function (vol) {
        AudioEngine.prototype.setVolume.call(this, vol);
        this.gainNode.gain.value = this.volume;
    };




    // VolumeSlider inst

    ////////////////////////////////////////////////////////////////

    var VolumeSlider = function (ele, cb) {
        this.rootElement = ele;
        this.cb = cb;
        var range = document.createElement("input");
        try {
            range.type = "range";
        } catch (e) {
            // Hello, IE9
        }
        if (range.min !== undefined) {
            this.range = range;
            this.rootElement.appendChild(range);
            range.className = "volume-slider";		//volume settings
            range.min = "0.0";
            range.max = "1.0";
            range.step = "0.01";
            $(range).on("change", function (evt) {
                cb(range.value);
            });
        } else {
            if (window.console) console.warn("Warning: for some stupid reason there's no volume-slider");
            // todo
        }
    };

    VolumeSlider.prototype.set = function (v) {
        if (this.range !== undefined) {
            this.range.value = v;
        } else {
            // todo
        }
    };




    // Renderer classes

    ////////////////////////////////////////////////////////////////

    var Renderer = function () {};

    Renderer.prototype.init = function (piano) {
        this.piano = piano;
        this.resize();
        return this;
    };

    Renderer.prototype.resize = function (width, height) {
        if (typeof width == "undefined") width = $(this.piano.rootElement).width();
        if (typeof height == "undefined") height = Math.floor(width * 0.2);
        $(this.piano.rootElement).css({
            "height": height + "px",
            marginTop: Math.floor($(window).height() / 2 - height / 2) + "px"
        });
        this.width = width;
        this.height = height;
    };

    Renderer.prototype.visualize = function (key, color) {};




    var DOMRenderer = function () {
        Renderer.call(this);
    };

    DOMRenderer.prototype = new Renderer();

    DOMRenderer.prototype.init = function (piano) {
        // create keys in dom
        for (var i in piano.keys) {
            if (!piano.keys.hasOwnProperty(i)) continue;
            var key = piano.keys[i];
            var ele = document.createElement("div");
            key.domElement = ele;
            piano.rootElement.appendChild(ele);
            // "key sharp cs cs2"
            ele.note = key.note;
            ele.id = key.note;
            ele.className = "key " + (key.sharp ? "sharp " : " ") + key.baseNote + " " + key.note + " loading";
            var table = $('<table width="100%" height="100%" style="pointer-events:none"></table>');
            var td = $('<td valign="bottom"></td>');
            table.append(td);
            td.valign = "bottom";
            $(ele).append(table);
        }
        // add event listeners
        var mouse_down = false;
        $(piano.rootElement).mousedown(function (event) {
            // todo: IE10 doesn't support the pointer-events css rule on the "blips"
            var ele = event.target;
            if ($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
                var key = piano.keys[ele.note];
                press(key.note);
                mouse_down = true;
                event.stopPropagation();
            };
            //event.preventDefault();
        });
        piano.rootElement.addEventListener("touchstart", function (event) {
            for (var i in event.changedTouches) {
                var ele = event.changedTouches[i].target;
                if ($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
                    var key = piano.keys[ele.note];
                    press(key.note);
                    mouse_down = true;
                    event.stopPropagation();
                }
            }
            //event.preventDefault();
        }, false);
        $(window).mouseup(function (event) {
            mouse_down = false;
        });

        Renderer.prototype.init.call(this, piano);
        return this;
    };

    DOMRenderer.prototype.resize = function (width, height) {
        Renderer.prototype.resize.call(this, width, height);
    };

    DOMRenderer.prototype.visualize = function (key, color) {	//mess with Logan
        var k = $(key.domElement);
        k.addClass("play");
        setTimeout(function () {
            k.removeClass("play");
        }, 100);
        // "blips"
        var d = $('<div style="width:100%;height:10%;margin:0;padding:0">&nbsp;</div>');
        d.css("background", color);
        k.find("td").append(d);
        d.fadeOut(1000, function () {
            d.remove();
        });
    };




    var CanvasRenderer = function () {
        Renderer.call(this);
    };

    CanvasRenderer.prototype = new Renderer();

    CanvasRenderer.prototype.init = function (piano) {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        piano.rootElement.appendChild(this.canvas);

        Renderer.prototype.init.call(this, piano); // calls resize()

        // create render loop
        var self = this;
        var render = function () {
            self.redraw();
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);

        // add event listeners
		var mouse_down = false;
		var last_key = null;
		$(piano.rootElement).mousedown(function(event) {
			mouse_down = true;
			event.preventDefault();

			var pos = CanvasRenderer.translateMouseEvent(event);
			var hit = self.getHit(pos.x, pos.y);
			if(hit) {
				press(hit.key.note, volume);
				last_key = hit.key;
			}
		});
        piano.rootElement.addEventListener("touchstart", function (event) {	//mess with Logan
            mouse_down = true;
            event.preventDefault();
            for (var i in event.changedTouches) {
                var pos = CanvasRenderer.translateMouseEvent(event);
                var hit = self.getHit(pos.x, pos.y);
                if (hit) {
                    last_key = hit.key;
                }
            }
        }, false);
        $(window).mouseup(function (event) {
            if (last_key) {
                release(last_key.note);
            }
            mouse_down = false;
            last_key = null;
        });
		$(piano.rootElement).mousemove(function(event) {		//enables you to hold mouse and drag across notes.
			if(!mouse_down) return;
			var pos = CanvasRenderer.translateMouseEvent(event);
			var hit = self.getHit(pos.x, pos.y);
			if(hit && hit.key != last_key) {
			press(hit.key.note, volume);
			last_key = hit.key;
			release(last_key.note); //fix for sustain ignoring mouse being dragged across keys -Logan
			}
		});

        return this;
    };

    CanvasRenderer.prototype.resize = function (width, height) {
        Renderer.prototype.resize.call(this, width, height);
        if (this.width < 52 * 2) this.width = 52 * 2;
        if (this.height < this.width * 0.2) this.height = Math.floor(this.width * 0.2);
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        // calculate key sizes
        this.whiteKeyWidth = Math.floor(this.width / 52);
        this.whiteKeyHeight = Math.floor(this.height * 0.9);
        this.blackKeyWidth = Math.floor(this.whiteKeyWidth * 0.75);
        this.blackKeyHeight = Math.floor(this.height * 0.5);

        this.blackKeyOffset = Math.floor(this.whiteKeyWidth - (this.blackKeyWidth / 2));
        this.keyMovement = Math.floor(this.whiteKeyHeight * 0.015);

        this.whiteBlipWidth = Math.floor(this.whiteKeyWidth * 0.7);
        this.whiteBlipHeight = Math.floor(this.whiteBlipWidth * 0.8);
        this.whiteBlipX = Math.floor((this.whiteKeyWidth - this.whiteBlipWidth) / 2);
        this.whiteBlipY = Math.floor(this.whiteKeyHeight - this.whiteBlipHeight * 1.2);
        this.blackBlipWidth = Math.floor(this.blackKeyWidth * 0.7);
        this.blackBlipHeight = Math.floor(this.blackBlipWidth * 0.8);
        this.blackBlipY = Math.floor(this.blackKeyHeight - this.blackBlipHeight * 1.2);
        this.blackBlipX = Math.floor((this.blackKeyWidth - this.blackBlipWidth) / 2);

        // prerender white key
        this.whiteKeyRender = document.createElement("canvas");
        this.whiteKeyRender.width = this.whiteKeyWidth;
        this.whiteKeyRender.height = this.height + 10;
        var ctx = this.whiteKeyRender.getContext("2d");
        if (ctx.createLinearGradient) {
            var gradient = ctx.createLinearGradient(0, 0, 0, this.whiteKeyHeight);
            gradient.addColorStop(0, "#eee");
            gradient.addColorStop(0.35, "#fff");
            gradient.addColorStop(1, "#dad4d4");
            ctx.fillStyle = gradient;
        } else {
            ctx.fillStyle = "#fff";
        }
        ctx.strokeStyle = "#000";
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.lineWidth = 10;
        ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);
        ctx.lineWidth = 2.5;	//4 - shadow between the white keys
        ctx.fillRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);

        // prerender black key
        this.blackKeyRender = document.createElement("canvas");
        this.blackKeyRender.width = this.blackKeyWidth + 10;
        this.blackKeyRender.height = this.blackKeyHeight + 10;
        var ctx = this.blackKeyRender.getContext("2d");
        if (ctx.createLinearGradient) {
            var gradient = ctx.createLinearGradient(0, 0, 0, this.blackKeyHeight);
            gradient.addColorStop(0, "#000");
            gradient.addColorStop(1, "#444");
            ctx.fillStyle = gradient;
        } else {
            ctx.fillStyle = "#000";
        }
        ctx.strokeStyle = "#222";
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.lineWidth = 8;
        ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);
        ctx.lineWidth = 4;
        ctx.fillRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);

        // prerender shadows
        this.shadowRender = [];
        var y = -this.canvas.height * 2;
        for (var j = 0; j < 2; j++) {
            var canvas = document.createElement("canvas");
            this.shadowRender[j] = canvas;
            canvas.width = this.canvas.width;
            canvas.height = this.canvas.height;
            var ctx = canvas.getContext("2d");
            var sharp = j ? true : false;
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.lineWidth = 1;
            ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
            ctx.shadowBlur = this.keyMovement * 3;
            ctx.shadowOffsetY = -y + this.keyMovement;
            if (sharp) {
                ctx.shadowOffsetX = this.keyMovement;
            } else {
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = -y + this.keyMovement;
            }
            for (var i in this.piano.keys) {
                if (!this.piano.keys.hasOwnProperty(i)) continue;
                var key = this.piano.keys[i];
                if (key.sharp != sharp) continue;

                if (key.sharp) {
                    ctx.fillRect(this.blackKeyOffset + this.whiteKeyWidth * key.spatial + ctx.lineWidth / 2,
                        y + ctx.lineWidth / 2,
                        this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);
                } else {
                    ctx.fillRect(this.whiteKeyWidth * key.spatial + ctx.lineWidth / 2,
                        y + ctx.lineWidth / 2,
                        this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);
                }
            }
        }

        // update key rects
        for (var i in this.piano.keys) {
            if (!this.piano.keys.hasOwnProperty(i)) continue;
            var key = this.piano.keys[i];
            if (key.sharp) {
                key.rect = new Rect(this.blackKeyOffset + this.whiteKeyWidth * key.spatial, 0,
                    this.blackKeyWidth, this.blackKeyHeight);
            } else {
                key.rect = new Rect(this.whiteKeyWidth * key.spatial, 0,
                    this.whiteKeyWidth, this.whiteKeyHeight);
            }
        }
    };

    CanvasRenderer.prototype.visualize = function (key, color) {
        key.timePlayed = Date.now();
        key.blips.push({
            "time": key.timePlayed,
            "color": color
        });
    };

    CanvasRenderer.prototype.redraw = function () {
        var now = Date.now();
        var timeLoadedEnd = now - 1000;
        var timePlayedEnd = now - 100;
        var timeBlipEnd = now - 1000;

        this.ctx.save();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // draw all keys
        for (var j = 0; j < 2; j++) {
            this.ctx.globalAlpha = 1.0; //unloaded keys colour
            this.ctx.drawImage(this.shadowRender[j], 0, 0);
            var sharp = j ? true : false;
            for (var i in this.piano.keys) {
                if (!this.piano.keys.hasOwnProperty(i)) continue;
                var key = this.piano.keys[i];
                if (key.sharp != sharp) continue;

                if (!key.loaded) {
                    this.ctx.globalAlpha = 0.2;
                } else if (key.timeLoaded > timeLoadedEnd) {
                    this.ctx.globalAlpha = ((now - key.timeLoaded) / 1000) * 0.8 + 0.2;
                } else {
                    this.ctx.globalAlpha = 1.0;
                }
                var y = 0;
                if (key.timePlayed > timePlayedEnd) {
                    y = Math.floor(this.keyMovement - (((now - key.timePlayed) / 100) * this.keyMovement));
                }
                var x = Math.floor(key.sharp ? this.blackKeyOffset + this.whiteKeyWidth * key.spatial : this.whiteKeyWidth * key.spatial);
                var image = key.sharp ? this.blackKeyRender : this.whiteKeyRender;
                this.ctx.drawImage(image, x, y);

                // render blips
                if (key.blips.length) {
                    var alpha = this.ctx.globalAlpha;
                    var w, h;
                    if (key.sharp) {
                        x += this.blackBlipX;
                        y = this.blackBlipY;
                        w = this.blackBlipWidth;
                        h = this.blackBlipHeight;
                    } else {
                        x += this.whiteBlipX;
                        y = this.whiteBlipY;
                        w = this.whiteBlipWidth;
                        h = this.whiteBlipHeight;
                    }
                    for (var b = 0; b < key.blips.length; b++) {
                        var blip = key.blips[b];
                        if (blip.time > timeBlipEnd) {
                            this.ctx.fillStyle = blip.color;
                            this.ctx.globalAlpha = alpha - ((now - blip.time) / 1000);
                            this.ctx.fillRect(x, y, w, h);
                        } else {
                            key.blips.splice(b, 1);
                            --b;
                        }
                        y -= Math.floor(h * 1.1); //blips space apart
                    }
                }
            }
        }
        this.ctx.restore();
    };

    CanvasRenderer.prototype.getHit = function (x, y) {
        for (var j = 0; j < 2; j++) {
            var sharp = j ? false : true; // black keys first
            for (var i in this.piano.keys) {
                if (!this.piano.keys.hasOwnProperty(i)) continue;
                var key = this.piano.keys[i];
                if (key.sharp != sharp) continue;
                if (key.rect.contains(x, y)) {
                    var v = y / (key.sharp ? this.blackKeyHeight : this.whiteKeyHeight);
                    v += 0.25;
                    v *= DEFAULT_VELOCITY;
                    if (v > 1.0) v = 1.0;
                    return {
                        "key": key,
                        "v": v
                    };
                }
            }
        }
        return null;
    };


    CanvasRenderer.isSupported = function () {
        var canvas = document.createElement("canvas");
        return !!(canvas.getContext && canvas.getContext("2d"));
    };

    CanvasRenderer.translateMouseEvent = function (evt) {
        var element = evt.target;
        var offx = 0;
        var offy = 0;
        do {
            offx += element.offsetLeft;
            offy += element.offsetTop;
        } while (element = element.offsetParent);
        return {
            x: evt.pageX - offx,
            y: evt.pageY - offy
        }
    };




    // Pianoctor

    ////////////////////////////////////////////////////////////////

    var PianoKey = function(note, octave, num) {
        this.note = note + octave;
        this.baseNote = note;
        this.octave = octave;
        this.sharp = note.indexOf("s") != -1;
        this.loaded = false;
        this.timeLoaded = 0;
        this.domElement = null;
        this.timePlayed = 0;
        this.blips = [];
		this.num = num; //Ltranspose
    };

    var Piano = function (rootElement) {

        var piano = this;
        piano.rootElement = rootElement;
        piano.keys = {};

        var white_spatial = 0;
        var black_spatial = 0;
        var black_it = 0;
        var black_lut = [2, 1, 2, 1, 1];
        var addKey = function(note, octave, num) {
            var key = new PianoKey(note, octave, num);
            piano.keys[key.note] = key;
            if (key.sharp) {
                key.spatial = black_spatial;
                black_spatial += black_lut[black_it % 5];
                ++black_it;
            } else {
                key.spatial = white_spatial;
                ++white_spatial;
            }
        }
        if (test_mode) {			//Logan check!
            addKey("c", 2);

        } else {
            addKey("a", -1, 1);
            addKey("as", -1, 2);
            addKey("b", -1, 3);
            var notes = "c cs d ds e f fs g gs a as b".split(" ");
            var count = 4;

            for(var oct = 0; oct < 7; oct++) {
                for(var i in notes) {
                    addKey(notes[i], oct, count);
                        count++;
                }
            }
            addKey("c", 7);			//default key
            addKey("cs", 7);		//extra key
            addKey("d", 7);			//extra key
            addKey("ds", 7);		//extra key
            addKey("e", 7);			//extra key

        }


        var render_engine = CanvasRenderer.isSupported() ? CanvasRenderer : DOMRenderer;
        this.renderer = new render_engine().init(this);

        $(window).resize(function () {
            piano.renderer.resize();
        });


        window.AudioContext = window.AudioContext || window.webkitAudioContext || undefined;
        var audio_engine = (window.AudioContext === undefined) ? AudioEngineSM2 : AudioEngineWeb;

        // Firefox 25 supports WebAudio, but a decodeAudioData issue is blocking until 26
        // https://bugzilla.mozilla.org/show_bug.cgi?id=865553
        var search_str = " Firefox/";
        var idx = navigator.userAgent.indexOf(search_str);
        if (idx !== -1) {
            var version = parseFloat(navigator.userAgent.substring(idx + search_str.length));
            if (isNaN(version) || version < 26.0) {
                audio_engine = AudioEngineSM2;
            }
        }

        this.audio = new audio_engine().init(function () {
            for (var i in piano.keys) {
                if (!piano.keys.hasOwnProperty(i)) continue;
                (function () {
                    var key = piano.keys[i];
					if (useDefaultSounds) {
						piano.audio.load(key.note, "/mp3/" + key.note + ".wav.mp3", function () {
							key.loaded = true;
							key.timeLoaded = Date.now();
							if (key.domElement) // todo: move this to renderer somehow
								$(key.domElement).removeClass("loading");
						});
					} else {
						//Lsounds
						piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/HDPiano/" + key.note + ".wav", function () {
							key.loaded = true;
							key.timeLoaded = Date.now();
							if (key.domElement)
								$(key.domElement).removeClass("loading");
						});
					}
                })();
            }
        });
    };

	Piano.prototype.play = function(note, vol, participant, delay_ms) {
		if(!this.keys.hasOwnProperty(note)) return;
		var key = this.keys[note];
		if(key.loaded) this.audio.play(key.note, vol, delay_ms, participant.id);
		if(typeof gMidiOutTest === "function") gMidiOutTest(key.note, vol * 100, delay_ms);
		var self = this;
		var jq_namediv = $(typeof participant == "undefined" ? null : participant.nameDiv);
		if(jq_namediv) {
			setTimeout(function() {
				self.renderer.visualize(key, typeof participant == "undefined" ? "yellow" : (participant.color || "#777"));
				jq_namediv.addClass("play");
				setTimeout(function() {
					jq_namediv.removeClass("play");
				}, 30);
			}, delay_ms);
		}
	};

    Piano.prototype.stop = function(note, participant, delay_ms) {
		if(!this.keys.hasOwnProperty(note)) return;
		var key = this.keys[note];
		if(key.loaded) this.audio.stop(key.note, delay_ms, participant.id);
		if(typeof gMidiOutTest === "function") gMidiOutTest(key.note, 0, delay_ms);
	};

    var gPiano = new Piano(document.getElementById("piano"));

    var gAutoSustain = true;
    var gSustain = false;

    var gHeldNotes = {};
    var gSustainedNotes = {};

	// roll

	function roll(id, vol, i) {
		if (octTemp == 1) {	//check Logan
			gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
            gClient.startNote(id, vol);
			return;
		}
        setTimeout(function() {
            gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
            gClient.startNote(id, vol);
        }, delays + (delays * i));
    }
	// pressing
    function pressing(id, vol) {
		if (ouch) {
			for (i=0; i <= ouchN; i++) {
				setTimeout( function() { gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);}, ouchD * i);
				if (!politePlay) {
					setTimeout( function() { gClient.startNote(id, vol);}, ouchD * i)
				}
			}

		} else {
			gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
			if (!politePlay) {
				gClient.startNote(id, vol);
			}
		}
    }

	// press
    function press(id, vol) {
		//thanks electrashave!
		var pKey = gPiano.keys[id];
		for (as in MPP.piano.keys) {
			var key = MPP.piano.keys[as];
			if (key.num == (pKey.num + transLvl)) {
				id = key.note
			}
		}

		if (mouseNote) {
			// thanks Chacha!
			try {
				var rect = gPiano.keys[id].rect;
				var t = 900;	// 900
				var x = (rect.x + rect.x2) / 2; // Position within piano
				x /= gPiano.renderer.width; // Position within renderer
				x *= 95; // 100% minus left offset (3%) minus right offset (2%)
				x += 3; // Left offset of 3%, gives position within window
				var y = rect.h; // === rect.y2 - rect.y
				y -= gPiano.renderer.height * 0.75; // Center around midpoint between black and white keys.
				y /= 10; // Scale to fit the keys. (This is arbitrary since the height of the keys will vary between users anyway.)
				y += 50; // Center on middle of screen
				x += (Math.random()+Math.random()-1)*0.5; // Alters x slightly each press
				y += (Math.random()+Math.random()+Math.random()+Math.random()-2)*2.5; // Alters y slightly each press
				setTimeout(()=>gClient.sendArray([{ m: "m", x: x, y: y }]), t); // Wait for t before
			} catch (e) {console.log("mouseNote err: " + e)} // If there's an error log it
		}

		var me = gClient.getOwnParticipant();

		if (randNoteColour && !ignoreNotes && !politePlay) {
			me = gClient.getOwnParticipant();
			me.color = Col();

		} else if (ignoreNotes && politePlay) {
			randNoteColour = true;
			me = gClient.getOwnParticipant();
			me.color = "purple";

		} else if (ignoreNotes) {
			randNoteColour = true;
			me = gClient.getOwnParticipant();
			me.color = "red";

		} else if (politePlay) {
			randNoteColour = true;
			me = gClient.getOwnParticipant();
			me.color = "blue";
		}


		if (delPlay) {
			setTimeout(function() {
				gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
				gClient.startNote(id, vol);
			}, delTime);
        }

		var note = id.replace(/[0-9]/g, '').replace("-", "");
		var octave = parseInt(id.replace(/[^\d.]/, '').replace('s', ''));
		if (octTemp >= 3) {
			if (octTemp > 4) {
				octave = octave - 2;
			} else {
				octave = octave - 1;
			}
		}
		for (i = 0; i < octTemp; i++) {
			if (rollTemp) {
				roll(note + (octave + i), vol, i);
			} else {
				pressing(note + (octave + i), vol);
			}
		}
		gHeldNotes[id] = true;
		gSustainedNotes[id] = true;

	}
	// release roll
	function releaseRoll(id, i) {
        setTimeout(function() {
            gPiano.stop(id, gClient.getOwnParticipant(), 0);
            gClient.stopNote(id);
            gSustainedNotes[id] = false;
        }, delays + (delays * i));
    }

	// releasing
	function releasing(id) {
        gPiano.stop(id, gClient.getOwnParticipant(), 0);
        gClient.stopNote(id);
        gSustainedNotes[id] = false;
    }

	// release
    function release(id) {
		if (gHeldNotes[id]) {
            gHeldNotes[id] = false;
            if (gAutoSustain || gSustain) {
                gSustainedNotes[id] = true;
            } else {
                if (gNoteQuota.spend(1)) {
                    var octave = parseInt(id.replace(/[^\d.]/, '').replace('s', ''));
                    var note = id.replace(/[0-9]/g, '').replace("-", "");
                    if (octTemp >= 3) {
                        if (octTemp > 4) {
                            octave = octave - 2;
                        } else {
                            octave = octave - 1;
                        }
                    }
                    for (i = 0; i < octTemp; i++) {
                        if (rollTemp) {
                            releaseRoll(note + (octave + i), i);
                        } else {
                            releasing(note + (octave + i));
                        }
                    }
                }
            }
        }
    }

    function pressSustain() {
        gSustain = true;
    }

    function releaseSustain() {
        gSustain = false;
        if (!gAutoSustain) {
            for (var id in gSustainedNotes) {
                if (gSustainedNotes.hasOwnProperty(id) && gSustainedNotes[id] && !gHeldNotes[id]) {
                    if (gNoteQuota.spend(0)) {
                        gPiano.stop(id, gClient.getOwnParticipant(), 0);
                        gClient.stopNote(id);
                    }
                }
            }
        }
    }




    // internet science

    ////////////////////////////////////////////////////////////////

    var channel_id = decodeURIComponent(window.location.pathname);
	if(channel_id.substr(0, 1) == "/") channel_id = channel_id.substr(1);
	if(channel_id == "") channel_id = "lolwutsecretlobbybackdoor"; //lobby

	
	var gClient = new Client("ws://mpp-proxy-server--bopit.repl.co");
	

	//worker
	worker.onmessage = function(event) { if(event.data.args) if(event.data.args.action==0) { gClient.sendArray([{m:"m", x:event.data.args.x, y:event.data.args.y}]); } }
	gClient.setChannel(channel_id);
	gClient.start();

    // Setting status
    (function () {
        gClient.on("count", function (status) {
            $("#status").text(status);
        });
        gClient.on("count", function (count) {
            if (count > 0) {
                $("#status").html('<span class="number">' + count + '</span> ' + (count == 1 ? 'player' : 'players'));
                document.title = "Ryan's Bot [v" + botVersion + "] (" + count + ")";
            } else {
				document.title = "Logan's Bot [v" + botVersion + "]";
			}
        });
    })();

    // Handle changes to participants
    (function () {
        gClient.on("participant added", function (part) {

            part.displayX = 0.75;	//150
            part.displayY = 25;		//50

            // add nameDiv
            var div = document.createElement("div");
            div.className = "name";
            div.participantId = part.id;
            div.textContent = part.name || selfName; // ""
            div.style.backgroundColor = part.color || "#777";
            if (gClient.participantId === part.id) {
                $(div).addClass("me");
            }
            if (gClient.channel && gClient.channel.crown && gClient.channel.crown.participantId === part.id) {
                $(div).addClass("owner");
            }
            if (gPianoMutes.indexOf(part._id) !== -1) {
                $(part.nameDiv).addClass("muted-notes");
            }
            if (gChatMutes.indexOf(part._id) !== -1) {
                $(part.nameDiv).addClass("muted-chat");
            }
            div.style.display = "none";
            part.nameDiv = $("#names")[0].appendChild(div);
            $(part.nameDiv).fadeIn(500); //2000

            // sort names
            var arr = $("#names .name");
            arr.sort(function (a, b) {
                a = a.style.backgroundColor; // todo: sort based on user id instead
                b = b.style.backgroundColor;
                if (a > b) return 1;
                else if (a < b) return -1;
                else return 0;
            });
            $("#names").html(arr);

            // add cursorDiv					   //gSeeOwnCursor
            if (gClient.participantId !== part.id || showOwnMouse) {
                var div = document.createElement("div");
                div.className = "cursor";
                div.style.display = "none";
                part.cursorDiv = $("#cursors")[0].appendChild(div);
                $(part.cursorDiv).fadeIn(500); //2000

				//sets mouse position on join (thanks Josh)
				part.cursorDiv.style.left = 46.73 + "%";
				part.cursorDiv.style.top = 19.60 + "%";

                var div = document.createElement("div");
                div.className = "name";
                div.style.backgroundColor = part.color || "#777"
                div.textContent = part.name || selfName; // ""
                part.cursorDiv.appendChild(div);

            } else {
                part.cursorDiv = undefined;
            }
        });
        gClient.on("participant removed", function (part) {	//when the participant leaves
            // remove nameDiv
            var nd = $(part.nameDiv);
            var cd = $(part.cursorDiv);
            cd.fadeOut(500); //2000
            nd.fadeOut(450, function () { //2000
                nd.remove();
                cd.remove();
                part.nameDiv = undefined;
                part.cursorDiv = undefined;
            });
        });
        gClient.on("participant update", function (part) {
            var name = part.name || "";
            var color = part.color || "#777";
            part.nameDiv.style.backgroundColor = color;
            part.nameDiv.textContent = name;
            $(part.cursorDiv)
                .find(".name")
                .text(name)
                .css("background-color", color);
        });
        gClient.on("ch", function (msg) {
            for (var id in gClient.ppl) {
                if (gClient.ppl.hasOwnProperty(id)) {
                    var part = gClient.ppl[id];
                    if (part.id === gClient.participantId) {
                        $(part.nameDiv).addClass("me");
                    } else {
                        $(part.nameDiv).removeClass("me");
                    }
                    if (msg.ch.crown && msg.ch.crown.participantId === part.id) {
                        $(part.nameDiv).addClass("owner");
                        $(part.cursorDiv).addClass("owner");
                    } else {
                        $(part.nameDiv).removeClass("owner");
                        $(part.cursorDiv).removeClass("owner");
                    }
                    if (gPianoMutes.indexOf(part._id) !== -1) {
                        $(part.nameDiv).addClass("muted-notes");
                    } else {
                        $(part.nameDiv).removeClass("muted-notes");
                    }
                    if (gChatMutes.indexOf(part._id) !== -1) {
                        $(part.nameDiv).addClass("muted-chat");
                    } else {
                        $(part.nameDiv).removeClass("muted-chat");
                    }
                }
            }
        });
    })();


    // Handle changes to crown
    (function () {
        var jqcrown = $('<div id="crown"></div>').appendTo(document.body).hide();
        var jqcountdown = $('<span></span>').appendTo(jqcrown);
        var countdown_interval;
        jqcrown.click(function () {
            gClient.sendArray([{
                m: "chown",
                id: gClient.participantId
            }]);
        });
        gClient.on("ch", function (msg) {
            if (msg.ch.crown) {
                var crown = msg.ch.crown;
                if (!crown.participantId || !gClient.ppl[crown.participantId]) {
                    var land_time = crown.time + 2000 - gClient.serverTimeOffset;
                    var avail_time = crown.time + 15000 - gClient.serverTimeOffset;
                    jqcountdown.text("");
                    jqcrown.show();
                    if (land_time - Date.now() <= 0) {
                        jqcrown.css({
                            "left": crown.endPos.x + "%",
                            "top": crown.endPos.y + "%"
                        });
                    } else {
                        jqcrown.css({
                            "left": crown.startPos.x + "%",
                            "top": crown.startPos.y + "%"
                        });
                        jqcrown.addClass("spin");
                        jqcrown.animate({
                            "left": crown.endPos.x + "%",
                            "top": crown.endPos.y + "%"
                        }, 2000, "linear", function () {
                            jqcrown.removeClass("spin");
                        });
                    }
                    clearInterval(countdown_interval);
                    countdown_interval = setInterval(function () {
                        var time = Date.now();
                        if (time >= land_time) {
                            var ms = avail_time - time;
                            if (ms > 0) {
                                jqcountdown.text(Math.ceil(ms / 1000) + "s");
                            } else {
                                jqcountdown.text("");
                                clearInterval(countdown_interval);
                            }
                        }
                    }, 1000);
                } else {
                    jqcrown.hide();
                }
            } else {
                jqcrown.hide();
            }
        });
        gClient.on("disconnect", function () {
            jqcrown.fadeOut(2000);
        });
    })();


// Josh's playThing
	function playThing(notes, veloc, delay, times) {
		setTimeout(function() {
		gClient.sendArray([{
                m: "n",
                t: times,
                n: [{
                    n: notes,
                    v: veloc
                }]
            }]);
		}, delay);
		//console.log(notes);
	}


// Playing notes
    gClient.on("n", function(msg) {
        var t = msg.t - gClient.serverTimeOffset + TIMING_TARGET - Date.now();
        var participant = gClient.findParticipantById(msg.p);
        if (gPianoMutes.indexOf(participant._id) !== -1)
            return;
        for (var i = 0; i < msg.n.length; i++) {
            var note = msg.n[i];
			var octave = parseInt(note.n.replace( /[^\d.]/, '').replace('s', ''));
			if (octave > 7) {
				return;
			}
            var ms = t + (note.d || 0);
            if (ms < 0) {
                ms = 0;
            } else if (ms > 10000) continue;
            if (ignoreNotes) {
                if (participant.id == gClient.participantId) {
                    if (note.s) {
                        gPiano.stop(note.n, participant, ms);
                    } else {
                        var vel = (typeof note.v !== "undefined") ? parseFloat(note.v) : DEFAULT_VELOCITY;
                        if (vel < 0) vel = 0;
                        else if (vel > 1) vel = 1;
                        gPiano.play(note.n, vel, participant, ms);
                    }
                }
            } else {
				if (note.s) {
                    gPiano.stop(note.n, participant, ms);
				} else {
					var vel = (typeof note.v !== "undefined") ? parseFloat(note.v) : DEFAULT_VELOCITY;
					if (vel < 0) vel = 0;
					else if (vel > 1) vel = 1;
					gPiano.play(note.n, vel, participant, ms);
					if (copyNotes){
						playThing(note.n,vel,note.d||0, t);
					}
				}
            }
        }
    });

        // Send cursor updates
		// mouse optimizations by Alex
		var mx = 0, last_mx = -2.5, my = 0, last_my = -2.5;
		setInterval(function() {
			if (Math.abs(mx - last_mx) > 0.1 || Math.abs(my - last_my) > 0.1) {
				last_mx = mx;
				last_my = my;
				if (!incognito){
					gClient.sendArray([{m: "m", x: mx, y: my}]);
				}
			}
		}, 50);

		$(document).mousemove(function(event) {
			mx = ((event.pageX / $(window).width()) * 100).toFixed(2);
			my = ((event.pageY / $(window).height()) * 100).toFixed(2);
		});

		// Animate cursors
		setInterval(function() {
			for (var id in gClient.ppl) {
				if (!gClient.ppl.hasOwnProperty(id)) continue;
				var part = gClient.ppl[id];
				if (part.cursorDiv && (Math.abs(part.x - part.displayX) > 0.1 || Math.abs(part.y - part.displayY) > 0.1)) {
					part.displayX += (part.x - part.displayX) * 0.25;
					part.displayY += (part.y - part.displayY) * 0.25;
					part.cursorDiv.style.left = part.displayX + "%";
					part.cursorDiv.style.top = part.displayY + "%";
					if (autoFollow && part._id != selfId) {
						followId = part._id;
					}
				}
			}
		}, 1);

    // Room settings button
    (function () {
        gClient.on("ch", function (msg) {
            if (gClient.isOwner()) {
                $("#room-settings-btn").show();
				$("#room-settings-btn").animate({opacity:0.7},100);	//animates it thanks B@K$
            } else {
				$("#room-settings-btn").css("display","block");  //shows it
				$("#room-settings-btn").animate({opacity:0.3},100);
            }
        });
        $("#room-settings-btn").click(function (evt) {												//room settings button
            if (gClient.channel && gClient.isOwner()) {
                var settings = gClient.channel.settings;
                openModal("#room-settings");
                setTimeout(function () {
                    $("#room-settings .checkbox[name=visible]").prop("checked", settings.visible);
                    $("#room-settings .checkbox[name=chat]").prop("checked", settings.chat);
                    $("#room-settings .checkbox[name=crownsolo]").prop("checked", settings.crownsolo);
                }, 100);
            }
        });
        $("#room-settings .submit").click(function () {
            var settings = {
                visible: $("#room-settings .checkbox[name=visible]").is(":checked"),
                chat: $("#room-settings .checkbox[name=chat]").is(":checked"),
                crownsolo: $("#room-settings .checkbox[name=crownsolo]").is(":checked")
            };
            gClient.sendArray([{
                m: "chset",
                set: settings
            }]);
            closeModal();
        });
        $("#room-settings .drop-crown").click(function () {
            gClient.sendArray([{
                m: "chown"
            }]);
            closeModal();
        });
    })();

    // Handle notifications
    gClient.on("notification", function (msg) {
        new Notification(msg);
    });

    //cursor float
	/*gClient.on("ch", function (msg) {
        var chidlo = msg.ch._id.toLowerCase();
        if (chidlo === "a" || chidlo.substr() === "a") {
            $(".cursor").addClass("floating");
        } else {

            $(".cursor").addClass("floating");

        }
    });*/

	// Don't forget spin
    /*gClient.on("ch", function (msg) {
        var chidlo = msg.ch._id.toLowerCase();
        if (chidlo === "spin" || chidlo.substr(-5) === "/spin") {
            $("#piano").addClass("spin");
        } else {
            $("#piano").removeClass("spin");
        }
    });*/

    // Crownsolo notice
    gClient.on("ch", function (msg) {
        if (msg.ch.settings.crownsolo) {
            if ($("#crownsolo-notice").length == 0) {
                $('<div id="crownsolo-notice">').text('Only owner can play mode').appendTo("body").fadeIn(500);
            }
        } else {
            $("#crownsolo-notice").remove();
        }
    });
    gClient.on("disconnect", function () {
        $("#crownsolo-notice").remove();
		$("#nochat-notice").remove();
    });



    var gPianoMutes = ["3ed152147e36d229cf5b7cba", "9b8df25492874a938ce9fb74"];

    var gChatMutes = [];

	//animated name stuff
	if (animName) {
		setInterval(function() {
			if (heyThereKitty == MPP.client.getOwnParticipant().name) return;
			updateName(heyThereKitty);	//name to print
			if (followId == heyThereKittyId) return;
			followId = heyThereKittyId;
		}, 2100);
	}

	// thanks Kappa
	/*
	var i = 0;
	setInterval(function() {
		MPP.client.sendArray([{
			m: "userset"
			, set: {
				name: selfName.slice(i % selfName.length) + selfName.slice(0, i++ % selfName.length)
			}
		}]);
	}, 2100)
	*/

    var volume_slider = new VolumeSlider(document.getElementById("volume"), function (v) {
        gPiano.audio.setVolume(v);
        if (window.localStorage) localStorage.volume = v;
    });
    volume_slider.set(gPiano.audio.volume);

    var Note = function (note, octave) {
        this.note = note;
        this.octave = octave || 0;
    };



    var n = function (a, b) {
        return {
            note: new Note(a, b),
            held: false
        };
    };
	//Logan, these are the key bindings for on the piano
    var key_binding = {
        65: n("gs"),
        90: n("a"),
        83: n("as"),
        88: n("b"),
        67: n("c", 1),
        70: n("cs", 1),
        86: n("d", 1),
        71: n("ds", 1),
        66: n("e", 1),
        78: n("f", 1),
        74: n("fs", 1),
        77: n("g", 1),
        75: n("gs", 1),
        188: n("a", 1),
        76: n("as", 1),
        190: n("b", 1),
        191: n("c", 2),
        222: n("cs", 2),

        49: n("gs", 1),
        81: n("a", 1),
        50: n("as", 1),
        87: n("b", 1),
        69: n("c", 2),
        52: n("cs", 2),
        82: n("d", 2),
        53: n("ds", 2),
        84: n("e", 2),
        89: n("f", 2),
        55: n("fs", 2),
        85: n("g", 2),
        56: n("gs", 2),
        73: n("a", 2),
        57: n("as", 2),
        79: n("b", 2),
        80: n("c", 3),
        189: n("cs", 3),
        219: n("d", 3),
        187: n("ds", 3),
        221: n("e", 3)
    };

    var capsLockKey = false;					//here are some settings, Logan
    var gSustain = false;
    var keys = [];
    var volTemp = 1;

    function handleKeyDown(evt) {
		var key = evt.keyCode;
		keys[key] = true;

		// volume changing
        if (keys[107]) {
            volume > 0.9 ? volume = 1 : volume += 0.1;
			msgBox('Note Volume', 'Volume: ' + parseFloat(volume.toFixed(2)), 1000, '#piano');

        } else if (keys[109]) {
			volume < 0.1 ? volume = 0 : volume -= 0.1;
			msgBox('Note Volume', 'Volume: ' + parseFloat(volume.toFixed(2)), 1000, '#piano');
        }
        // multi-octave toggling
        if (keys[38]) {
			octTemp > 6 ? octTemp = 7 : ++octTemp;
            msgBox('Multi-octave', 'Level ' + octTemp, 1000, '#piano');

        } else if (keys[40]) {
			octTemp < 2 ? octTemp = 1 : --octTemp;
            msgBox('Multi-octave', 'Level ' + octTemp, 1000, '#piano');
		}

        // roll toggling
        if (keys[35] && rollTemp) {
			rollTemp = false;
            msgBox('Roll', 'Disabled', 1000, '#piano');

        } else if (keys[35] && !rollTemp) {
			rollTemp = true;
            msgBox('Roll', 'Enabled', 1000, '#piano');
        }

        // sustain toggling
		//Insert key
        if (keys[45] && !susTemp) {
            msgBox('Sustain', 'Enabled', 1000, '#piano');
			susTemp = true;

        } else if (keys[45] && susTemp) {
            msgBox('Sustain', 'Disabled', 1000, '#piano');
			susTemp = false;
        }
		if (!susTemp) {
            gAutoSustain = false;
        } else if (susTemp) {
            gAutoSustain = true;
        }

        var code = parseInt(evt.keyCode);	//move up and make use of more Logan

					//numpad5
		if (code == 101 || code == 12) { 	//delay
			delPlay = !delPlay; //swaps it
			if (!delPlay) {
				msgBox('Delay', 'Disabled', 1000, '#piano');
			} else {
				msgBox('Delay', 'Enabled', 1000, '#piano');
			}
						//Pagedown
		} else if (code == 34) { 					//ignore
				ignoreNotes = !ignoreNotes;
				if (!ignoreNotes) {
					msgBox('Ignore Notes', 'Disabled', 1000, '#piano');
                } else {
					msgBox('Ignore Notes', 'Enabled', 1000, '#piano');
				}
							//Pageup
		} else if (code == 33) { 					//bot on/off	[clean this logan]
			if (bot == 2) {
				bot = 0;
				msgBox('Commands', 'Disabled', 1000, '#piano');
			} else if (bot == 0) {
				bot = 1;
				msgBox('Commands', 'For everyone', 1000, '#piano');
			} else if (bot == 1) {
				bot = 2;
				msgBox('Commands', 'Only for you', 1000, '#piano');
			}

							//numpad *
		} else if (code == 106) { 					//bot on/off //♥ REMOVE AND JUST MAKE NUMPAD - GO TO 0 ♥//
			if (timeStamp) {
				timeStamp = false;
				msgBox('Timestamps', 'Off', 1000, '#piano');
			} else {
				timeStamp = true;
				msgBox('Timestamps', 'On', 1000, '#piano');
			}

						//numpad 0
		} else if (code == 96) { 				//reconnect
			MPP.client.stop();
			MPP.client.start();
			msgBox('Reconnecting...', '', 2000, '#piano');

						//numpad 1
		} else if (code == 97) { 				//private room
			var room_name = randStr(28);
			changeRoom(room_name, "right", {
				"visible": false,
				"chat": true,
				"crownsolo": false,
				"lobby": false
			});
						//numpad 2
	    } else if (code == 98) { 				//illuminati hotkey (until I find a better use)
			if (autoFollow) {
				autoFollow = false;
				following = false;
				followId = null;
				msgBox('Auto Follow', 'Off', 2000, '#blah-btn');
			} else {
				autoFollow = true;
				following = true;
				msgBox('Auto Follow', 'On', 2000, '#blah-btn');
			}
						//tab
		} else if (code == 9) { 				//hotkeymsg
			tab(); //ring ring..

						//ctrl
		} else if (code == 17) { 				//drop crown
			gClient.sendArray([{
				m: "chown"
			}]);
			msgBox('Dropping crown', '', 1000, '#piano');

						//alt
		} else if (code == 18) { 				//pickup crown
			gClient.sendArray([{
				m: "chown",
				id: gClient.participantId
			}]);
			msgBox('Picking up crown', '', 1000, '#piano');

						//H
		} else if (code == 72) { 				//display help
			new Notification({id: "volume", title: "Hotkeys (thanks B@K$ for the design)", html: '\
				<h3>๖ۣۜHold to display binds and hotkeys...</h3>\
				<font color="#FF0066">Page Up:</font>Turns on/off chat commands (excluding !js and !room)<br />\
				<font color="#FF0066">Page Down</font> Ignores everyone elses notes<br />\
				<font color="#FF0066">End</font> Toggles rolling on multi-octaves<br />\
				<font color="#FF0066">Up/Down Arrows</font> Turns sets number of multi-octave<br />\
				<font color="#FF0066">Left/Right Arrows</font> electrashave\'s note transposing<br />\
				<font color="#FF0066">Insert</font> Toggles sustain (default was backspace)<br />\
				<font color="#FF0066">Backspace</font> Alerts you if someone in the friends list array joins<br />\
				<font color="#FF0066">Delete</font> Toggles an alert sound and notifcation if "Logan" is said<br />\
				<font color="#FF0066">Home *new</font> Toggles Polite Play Mode<br />\
				<font color="#FF0066">\\</font> Speech to text for Chrome (click accept then speak)<br />\
				<font color="#FF0066">Spacebar</font> Plays low notes while held<br />\
				<font color="#FF0066">~</font> Plays high notes while held<br />\
				<font color="#FF0066">Tab</font> Sends hotkey message<br />\
				<font color="#FF0066">3</font> Toggles owner only mode (need crown)<br />\
				<font color="#FF0066">6</font> Toggles room visibility (need crown)<br />\
				<font color="#FF0066">Numpad + -</font> Change note volume<br />\
				<font color="#FF0066">Numpad *</font> Toggles timestamps in chat<br />\
				<font color="#FF0066">Numpad .</font> Meow meow meow<br />\
				<font color="#FF0066">Numpad 0</font> Quick reconnect<br />\
				<font color="#FF0066">Numpad 1</font> Play Alone<br />\
				<font color="#FF0066">Numpad 2</font> Auto Follow<br />\
				<font color="#FF0066">Numpad 3</font> Greeting<br />\
				<font color="#FF0066">Numpad 4</font> Toggle Bunny<br />\
				<font color="#FF0066">Numpad 5</font> Toggles delay<br />\
				<font color="#FF0066">Numpad 6</font> Toggles Pong<br />\
				<font color="#FF0066">Numpad 7</font> Toggles text to speech<br />\
				<font color="#FF0066">Numpad 8</font> Toggles SomeGuy\'s incognito<br />\
				<font color="#FF0066">Alt</font> Picks up the crown<br />\
				<font color="#FF0066">Ctrl</font> Drops the crown<br />\
				<font color="#FF0066">H</font> Displays displays Hotkeys again<br />\
				<font color="#FF3399">!lhelp</font> Displays local commands in chat<br />\
				To stop this message displaying every time you start the script search for <font color="#FF0066">i_know_how_to_use_this_bot</font> and change <font color="#CC0000">false</font> to <font color="#0066FF">true</font>.<br />\
			', target: "#blah-btn", duration: 600});

//--TEST--TEST--TEST////--TEST--TEST--TEST////--TEST--TEST--TEST//
							//numpad .
		 } else if (code == 110) { 					//hotkey test
			if (meow) {
				meow = false;
				msgBox('Cat Mode', 'Off', 1000, '#blah-btn');
			} else {
				meow = true;
				msgBox('Cat Mode', 'On', 1000, '#blah-btn');
			}


//--TEST--TEST--TEST////--TEST--TEST--TEST////--TEST--TEST--TEST//


			// ♥ Thanks Josh ♥ //
						// \ key
			} else if (code == 220) { 					//Yoshify's speech to text
					if (listening) {
						listening = false;
						Voice.stop();
						msgBox('Speech to Text', 'Stopping Capture', 3000, '#blah-btn');
					} else {
						listening = true;
						Voice.start();
						msgBox('Speech to Text', 'Listening (press again to send)', 3000, '#blah-btn');
					}

					   //numpad 7
			} else if (code == 103) { 					//speech toggle
				if (speechStatus) {
					speechStatus = false;
					speechSynthesis.cancel();
					msgBox('Text to Speech', 'Off', 1000, '#blah-btn');
				} else {
					speechStatus = true;
					msgBox('Text to Speech', 'On', 1000, '#blah-btn');
				}
								//del
              } else if (code == 46) { 					//alert on name said in chat toggle
				if (alertName) {
					alertName = false;
					msgBox('Alert on key-word', 'Off', 1000, '#blah-btn');
				} else {
					alertName = true;
					msgBox('Alert on key-word', 'On', 1000, '#blah-btn');
				}
						//home
			} else if (code == 36) { 				//politePlay
				if (politePlay) {
					politePlay = false;
					msgBox('Polite Play', 'Off', 1000, '#blah-btn');
				} else {
					politePlay = true;
					msgBox('Polite Play', 'On (others cannot hear your notes)', 1000, '#blah-btn');
				}

					   //backspace
			} else if (code == 8) { 					//alert on friends join toggle
				if (alertOnFriendJoin) {
					alertOnFriendJoin = false;
					msgBox('Alert on Friend Join', 'Off', 1000, '#blah-btn');
				} else {
					alertOnFriendJoin = true;
					msgBox('Alert on Friend Join', 'On', 1000, '#blah-btn');
				}
							  // 3 key
			  } else if (code == 51) { 				//owner only
				if (crownSoloToggle) {
					crownSoloToggle = false;
					MPP.client.sendArray([{m: "chset", set: {crownsolo: false}}]);
					msgBox('Owner Only', 'Off', 1000, '#blah-btn');
				} else {
					crownSoloToggle = true;
					MPP.client.sendArray([{m: "chset", set: {crownsolo: true}}]);
					msgBox('Owner Only', 'On', 1000, '#blah-btn');
				}
							// 6 key
			} else if (code == 54) { 				//hide room
				if (roomVisibleToggle) {
					roomVisibleToggle = false;
					MPP.client.sendArray([{m: "chset", set: {visible: false}}]);
					msgBox('Room Visible', 'No', 1000, '#blah-btn');
				} else {
					roomVisibleToggle = true;
					MPP.client.sendArray([{m: "chset", set: {visible: true}}]);
					msgBox('Room Visible', 'Yes', 1000, '#blah-btn');
				}


			} else if (code == 104) { 				//mouse updates
				if (incognito) {
					incognito = false;
					msgBox('Incognito', 'Off', 1000, '#blah-btn');
				} else {
					incognito = true;
					msgBox('Incognito', 'On', 1000, '#blah-btn');
				}

			} else if (code == 105) { 				//copy notes
				if (copyNotes) {
					copyNotes = false;
					msgBox('Copy Notes', 'Off', 1000, '#blah-btn');
				} else {
					copyNotes = true;
					msgBox('Copy Notes', 'On', 1000, '#blah-btn');
				}

			 } else if (code == 100) { 				//cursor bunny
					testflipB = !testflipB;
				if (!testflipB) {
					msgBox('Bunny', 'Off', 1000, '#blah-btn');
					} else {
						setTimeout(function () {
							client = MPP.client;
							var bunny = new Bunny(client);
							worker.onmessage = function(event)
							{
								if(event.data.args)
								if(event.data.args.action==0){
									if(testflipB){ bunny.tick(); }
								}
							}
							worker.postMessage({delay:120,args:{action:0}});
						}, 120);


						var Bunny = function (client) {
							this.client = client;

							this.vx = 1.5;
							this.vy = 2.2;

							var self = this;
								self.part = self.client.ppl[self.client.participantId];
								client.on("ch", function () {
								self.part = self.client.ppl[self.client.participantId];
							});
						}

						Bunny.prototype.tick = function () {
							if (!this.client.isConnected() || !this.part) return;
							this.part.x += this.vx;
							this.part.y += this.vy;
							if (this.part.x < 0) {
								this.vx = -this.vx;
							} else if (this.part.x > 100) {
								this.vx = -this.vx;
							}
							if (this.part.y < 0) {
								this.vy = -this.vy;
							} else if (this.part.y > 0) {   //0 makes the ceiling which it bounces off
								this.vy = -this.vy;
							}
							this.client.sendArray([{
								m: "m",
								x: this.part.x,
								y: this.part.y
							}]);
							this.client.sendArray([{
								m: "m",
								x: this.part.x,
								y: this.part.y
							}]);
							worker.postMessage({delay:120,args:{action:0}});
						};
					msgBox('Bunny', 'On', 1000, '#blah-btn');
              }

			  //msgBox('Pong', 'Off', 1000, '#blah-btn');

			} else if (code == 102) { //cursor pong
				testflipP = !testflipP;
				if (!testflipP) {
					msgBox('Pong', 'Off', 1000, '#blah-btn');

				} else {
					//on
					setTimeout(function() {
						client = MPP.client;
						var pong = new Pong(client);
						worker.onmessage = function(event) {
							if (event.data.args)
								if (event.data.args.action == 0) {
									if (testflipP) {
										pong.tick();
									}
								}
						}
						worker.postMessage({
							delay: 60
							, args: {
								action: 0
							}
						});
					}, 60);


					var Pong = function(client) {
						this.client = client;

						this.vx = 0.1875; //0.75
						this.vy = 0.275; //1.1

						var self = this;
						self.part = self.client.ppl[self.client.participantId];
						client.on("ch", function() {
							self.part = self.client.ppl[self.client.participantId];
						});
					}

					Pong.prototype.tick = function() {
						if (!this.client.isConnected() || !this.part) return;
						this.part.x += this.vx;
						this.part.y += this.vy;
						if (this.part.x < 0) {
							this.vx = -this.vx;
						} else if (this.part.x > 100) {
							this.vx = -this.vx;
						}
						if (this.part.y < 0) {
							this.vy = -this.vy;
						} else if (this.part.y > 100) {
							this.vy = -this.vy;
						}

						//x is <--> 100 is --> 0 is <--
						//y is ^v   0 	is ^ 100 is v

						this.vx += Math.random() * 0.1 - 0.05;
						this.vy += Math.random() * 0.1 - 0.05;
						this.client.sendArray([{ //were two of these
							m: "m"
							, x: this.part.x
							, y: this.part.y
						}]);
						if (this.part.x < -10 || this.part.y < -10 || this.part.x > 110 || this.part.y > 110) {
							this.part.x = 50;
							this.part.y = 50;
							//resets the velocity when setting position
							this.vx = -this.vx;
							this.vy = -this.vy;
						}
						worker.postMessage({
							delay: 60
							, args: {
								action: 0
							}
						});
					};
					msgBox('Pong', 'On', 1000, '#blah-btn');
				}

			} else if (code == 99) { 					//lenny
				var msgTmp = $("input").val(); //retain old text
				$("body #chat input").val(msgTmp + " Hello everyone! Type in (!help) to get my commands! Remember to stay cool  ( ͡◕ ͜ʖ ͡◕)");

					 //numpad /
			} else if (code == 111) { 					//hotkey spam
				for(var key in MPP.piano.keys) MPP.press(key, volume);

			//thanks electrashave!
			} else if (code == 39) {
				transLvl++;
				msgBox('Transposing (by electrashave)', 'Transpose level: ' + transLvl, 1000, '#blah-btn');

			//thanks electrashave!
            } else if (code == 37) {
				transLvl--;
				msgBox('Transposing (by electrashave)', 'Transpose level: ' + transLvl, 1000, '#blah-btn');
            }

        if (key_binding[code] !== undefined) {
            var binding = key_binding[code];
            if (!binding.held) {
                binding.held = true;
                if (gNoteQuota.spend(0)) {
                    var note = binding.note;
                    var octave = 1 + note.octave;
                    // extra octaves
                    if (keys[16])++octave;
                    else if (keys[32])--octave == --octave + -octave;
                    else if (keys[18])++octave == ++octave + +octave;
                    else if (keys[192])++octave == ++octave + ++octave;
                    else if (capsLockKey)--octave;
                    var note = note.note;
                    var vol = volume;

                    if (volume > 5) {
                        volume = 5;
                    }
					press(note + octave, vol);
                }
            }

            if (++gKeyboardSeq == 3) {
                gKnowsYouCanUseKeyboard = true;
                if (window.gKnowsYouCanUseKeyboardTimeout) clearTimeout(gKnowsYouCanUseKeyboardTimeout);
                if (localStorage) localStorage.knowsYouCanUseKeyboard = true;
                if (window.gKnowsYouCanUseKeyboardNotification) gKnowsYouCanUseKeyboardNotification.close();
            }

            evt.preventDefault();
            evt.stopPropagation();
            return false;
        } else if (code == 20) { 				// Caps Lock
            capsLockKey = true;
            evt.preventDefault();
        } else if (code === 0x20) { 			// Space Bar
            evt.preventDefault();
        } else if (code == 9) { 				// Tab (don't tab away from the piano)
            evt.preventDefault();
        } else if (code == 8) { 				// Backspace (don't navigate Back)
            evt.preventDefault();
        }
    };

	//FIX BELOW MESS

    var keys = [];

    function handleKeyUp(evt) {
        var key = evt.keyCode;
        keys[key] = false;
        var code = parseInt(evt.keyCode);
        if (key_binding[code] !== undefined) {
            var binding = key_binding[code];
            if (binding.held) {
                keys[key] = false;
                binding.held = false;

                if (!gAutoSustain && !gSustain) {
                    if (gNoteQuota.spend(octTemp)) {
                        var note = binding.note;
                        var octave = 1 + note.octave;
                        // extra octaves
						if (keys[16])++octave;
                        else if (keys[32])--octave == --octave + -octave;
                        else if (keys[18])++octave == ++octave + +octave;
                        else if (keys[192])++octave == ++octave + ++octave;
                        else if (capsLockKey)--octave;
                        var note = note.note;
						release(note + octave);	//was missing octave which didn't stop the note - Logan
                    }
                }
            }

            evt.preventDefault();
            evt.stopPropagation();
            return false;
        } else if (code == 20) { 		// Caps Lock
            capsLockKey = false;
            evt.preventDefault();
        } else if (code === 0x20) { 	// Space Bar
            evt.preventDefault();
        } else if (code == 8) { 		// Backspace (don't navigate Back)
            evt.preventDefault();
        }
    };

    function handleKeyPress(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.keyCode == 27 || evt.keyCode == 13) {
            //add some stuff here Logan
        }
        return false;
    };

    var recapListener = function (evt) {
        captureKeyboard();
    };

    function captureKeyboard() {
        $("#piano").off("mousedown", recapListener);
        $("#piano").off("touchstart", recapListener);
        $(document).on("keydown", handleKeyDown);
        $(document).on("keyup", handleKeyUp);
        $(window).on("keypress", handleKeyPress);
    };

    function releaseKeyboard() {
        $(document).off("keydown", handleKeyDown);
        $(document).off("keyup", handleKeyUp);
        $(window).off("keypress", handleKeyPress);
        $("#piano").on("mousedown", recapListener);
        $("#piano").on("touchstart", recapListener);
    };

    captureKeyboard();


    var velocityFromMouseY = function () {
        return 0.1 + (my / 100) * 0.6;
    };




    // NoteQuota
    var gNoteQuota = (function () {
        var last_rat = 0;
        var nqjq = $("#quota .value");
        setInterval(function () {
            gNoteQuota.tick();
        }, 2000);
        return new NoteQuota(function (points) {
            // update UI
            var rat = (points / this.max) * 100; // 100
            if (rat <= last_rat)
                nqjq.stop(true, true).css("width", rat.toFixed(0) + "%");
            else
                nqjq.stop(true, true).animate({
                    "width": rat.toFixed(0) + "%"
                }, 2000, "linear");
            last_rat = rat;
        });
    })();
    gClient.on("nq", function (nq_params) {
        gNoteQuota.setParams(nq_params);
    });
    gClient.on("disconnect", function () {
        gNoteQuota.setParams(NoteQuota.PARAMS_OFFLINE);
    });



    // click participant names
    (function () {
        var ele = document.getElementById("names");
        var touchhandler = function (e) {
            var target_jq = $(e.target);
            if (target_jq.hasClass("name")) {
                target_jq.addClass("play");
                if (e.target.participantId == gClient.participantId) {
					var id = e.target.participantId;
                    var part = gClient.ppl[id] || null;
					if (part) {
						participantMenu(part);
						e.stopPropagation();
					}
                } else if (e.target.participantId) {
                    var id = e.target.participantId;
                    var part = gClient.ppl[id] || null;
                    if (part) {
                        participantMenu(part);
                        e.stopPropagation();
                    }
                }
            }
        };
        ele.addEventListener("mousedown", touchhandler);
        ele.addEventListener("touchstart", touchhandler);
        var releasehandler = function (e) {
            $("#names .name").removeClass("play");
        };
        document.body.addEventListener("mouseup", releasehandler);
        document.body.addEventListener("touchend", releasehandler);

        var removeParticipantMenus = function () {
            $(".participant-menu").fadeOut(500);
            $(".participantSpotlight").hide(); //what is this?
            document.removeEventListener("mousedown", removeParticipantMenus);
            document.removeEventListener("touchstart", removeParticipantMenus);
        };

        var participantMenu = function (part) {
            if (!part) return;
            removeParticipantMenus();
            document.addEventListener("mousedown", removeParticipantMenus);
            document.addEventListener("touchstart", removeParticipantMenus);
            $("#" + part.id).find(".enemySpotlight").show(); //what is this D:
            var menu = $('<div class="participant-menu"></div>');
            $("body").append(menu);
            // move menu to name position
            var jq_nd = $(part.nameDiv);
            var pos = jq_nd.position();
            menu.css({
                "top": pos.top + jq_nd.height() + 15,
                "left": pos.left + 6,
                "background": part.color || "black"
            });
            menu.on("mousedown touchstart", function (evt) {
                evt.stopPropagation();
                var target = $(evt.target);
                if (target.hasClass("menu-item")) {
                    target.addClass("clicked"); //why is this needed?
                    menu.fadeOut(500, function () {
                        removeParticipantMenus();
                    });
                }
            });
            // this spaces stuff out but also can be used for informational purposes
            $('<div class="info"></div>').appendTo(menu).text(part._id)
			.on("mousedown touchstart", function (evt) {
				//prompt("Press CTRL C to copy "+ part.name +"'s ID", part._id);
				prompt(part.name.endsWith("s") ? "Press CTRL C to copy "+ part.name +"' ID" : "Press CTRL C to copy "+ part.name +"'s ID", part._id);
			});

            // added menu items

			// rename
			if (part._id == gClient.getOwnParticipant()._id) {
                $('<div class="menu-item">• Rename</div>').appendTo(menu)
					.on("mousedown touchstart", function (evt) {
						openModal("#rename", "input[name=name]");
						setTimeout(function () {
							$("#rename input[name=name]").val(gClient.ppl[gClient.participantId].name);
							$("#rename input[name=color]").val(gClient.ppl[gClient.participantId].color);
						}, 100);
					});
			}


			// master and unmaster
			if (masters.indexOf(part._id) == -1) {
                $('<div class="menu-item">• Master</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        masters.push(part._id);
						gClient.sendArray([{ m: "a", message: "Mastered " + part.name + "."}])
                    });
            } else {
                $('<div class="menu-item">• Unmaster</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        delete masters[masters.indexOf(part._id)];
						gClient.sendArray([{ m: "a", message: "Unmastered " + part.name + "."}])
                    });
            }


			// op and deop
			if (ops.indexOf(part._id) == -1) {
                $('<div class="menu-item">• Op</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        ops.push(part._id);
						gClient.sendArray([{ m: "a", message: "Opped " + part.name + "."}])
                    });
            } else {
                $('<div class="menu-item">• Deop</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        delete ops[ops.indexOf(part._id)];
						gClient.sendArray([{ m: "a", message: "deopped " + part.name + "."}])
                    });
            }

			if (part._id != gClient.getOwnParticipant()._id) {

				// follow and rest
				if (!followId) {
					$('<div class="menu-item">• Follow >.<</div>').appendTo(menu)
						.on("mousedown touchstart", function (evt) {
							following = true;
							followId = part._id;

						msgBox('Following', part.name, 2000, '#piano');
					});
				} else {
					$('<div class="menu-item">• Rest <.></div>').appendTo(menu)
						.on("mousedown touchstart", function (evt) {
							following = false;
							followId = null;
						msgBox('Stopping', 'Ok...', 2000, '#piano');
					});
				}

				if (gPianoMutes.indexOf(part._id) == -1) {
					$('<div class="menu-item">• Mute Notes</div>').appendTo(menu)
						.on("mousedown touchstart", function (evt) {
							gPianoMutes.push(part._id);
							$(part.nameDiv).addClass("muted-notes");
						});
				} else {
					$('<div class="menu-item">• Unmute Notes</div>').appendTo(menu)
						.on("mousedown touchstart", function (evt) {
							var i;
							while ((i = gPianoMutes.indexOf(part._id)) != -1)
								gPianoMutes.splice(i, 1);
							$(part.nameDiv).removeClass("muted-notes");
						});
				}
				if (gChatMutes.indexOf(part._id) == -1) {
					$('<div class="menu-item">• Mute Chat</div>').appendTo(menu)
						.on("mousedown touchstart", function (evt) {
							gChatMutes.push(part._id);
							$(part.nameDiv).addClass("muted-chat");
						});
				} else {
					$('<div class="menu-item">• Unmute Chat</div>').appendTo(menu)
						.on("mousedown touchstart", function (evt) {
							var i;
							while ((i = gChatMutes.indexOf(part._id)) != -1)
								gChatMutes.splice(i, 1);
							$(part.nameDiv).removeClass("muted-chat");
						});
				}
				if (!(gPianoMutes.indexOf(part._id) >= 0) || !(gChatMutes.indexOf(part._id) >= 0)) {
					$('<div class="menu-item">• Mute Completely</div>').appendTo(menu)
						.on("mousedown touchstart", function (evt) {
							gPianoMutes.push(part._id);
							gChatMutes.push(part._id);
							$(part.nameDiv).addClass("muted-notes");
							$(part.nameDiv).addClass("muted-chat");
						});
				}
				if ((gPianoMutes.indexOf(part._id) >= 0) || (gChatMutes.indexOf(part._id) >= 0)) {
					$('<div class="menu-item">• Unmute Completely</div>').appendTo(menu)
						.on("mousedown touchstart", function (evt) {
							var i;
							while ((i = gPianoMutes.indexOf(part._id)) != -1)
								gPianoMutes.splice(i, 1);
							while ((i = gChatMutes.indexOf(part._id)) != -1)
								gChatMutes.splice(i, 1);
							$(part.nameDiv).removeClass("muted-notes");
							$(part.nameDiv).removeClass("muted-chat");
						});
				}

				// ban and unban
				if (banned.indexOf(part._id) == -1) {
					$('<div class="menu-item">• Ban</div>').appendTo(menu)
						.on("mousedown touchstart", function (evt) {
							banned.push(part._id);
							msgBox('Banned', part.name, 1000, '#piano');
						});
				} else {
					$('<div class="menu-item">• Unban</div>').appendTo(menu)
						.on("mousedown touchstart", function (evt) {
							delete banned[banned.indexOf(part._id)];
							msgBox('Unbanned', part.name, 1000, '#piano');
						});
				}

				if (gClient.isOwner()) {
					$('<div class="menu-item give-crown">• Give Crown</div>').appendTo(menu)
						.on("mousedown touchstart", function (evt) {
							gClient.sendArray([{
								m: "chown",
								id: part.id
							}]);
						});
				}
			}
            menu.fadeIn(500);
        };
    })();




    // Notification class

    ////////////////////////////////////////////////////////////////

    var Notification = function (par) {
        EventEmitter.call(this);

        var par = par || {};

        this.id = "Notification-" + (par.id || Math.random());
        this.title = par.title || "";
        this.text = par.text || "";
        this.html = par.html || "";
        this.target = $(par.target || "#piano");
        this.duration = par.duration || 30000;

        var self = this;
        var eles = $("#" + this.id);
        if (eles.length > 0) {
            eles.remove();
        }
        this.domElement = $('<div class="notification"><div class="notification-body"><div class="title"></div>' +
            '<div class="text"></div></div><div class="x">x</div></div>');
        this.domElement[0].id = this.id;
        this.domElement.find(".title").text(this.title);
        if (this.text.length > 0) {
            this.domElement.find(".text").text(this.text);
        } else if (this.html.length > 0) {
            this.domElement.find(".text").html(this.html);
        }
        document.body.appendChild(this.domElement.get(0));

        this.position();
        this.onresize = function () {
            self.position();
        };
        $(window).on("resize", this.onresize);

        this.domElement.find(".x").click(function () {
            self.close();
        });

        if (this.duration > 0) {
            setTimeout(function () {
                self.close();
            }, this.duration);
        }

        return this;
    }

    mixin(Notification.prototype, EventEmitter.prototype);
    Notification.prototype.constructor = Notification;

    Notification.prototype.position = function () {
        var pos = this.target.offset();
        var x = pos.left - (this.domElement.width() / 2) + (this.target.width() / 4);
        var y = pos.top - this.domElement.height() - 8;
        var width = this.domElement.width();
        if (x + width > $("body").width()) {
            x -= ((x + width) - $("body").width());
        }
        if (x < 0) x = 0;
        this.domElement.offset({
            left: x,
            top: y
        });
    };

    Notification.prototype.close = function () {
        var self = this;
        $(window).off("resize", this.onresize);
        this.domElement.fadeOut(500, function () {
            self.domElement.remove();
            self.emit("close");
        });
    };




    // set variables from settings or set settings

    ////////////////////////////////////////////////////////////////

	if(!i_know_how_to_use_this_bot) {

	new Notification({id: "volume", title: "Hotkeys (thanks B@K$ for the design)", html: '\
			<h3>๖ۣۜHold to display binds and hotkeys...</h3>\
			<font color="#FF0066">Page Up:</font>Turns on/off chat commands (excluding !js and !room)<br />\
			<font color="#FF0066">Page Down</font> Ignores everyone elses notes<br />\
			<font color="#FF0066">End</font> Toggles rolling on multi-octaves<br />\
			<font color="#FF0066">Up Arrow</font> Turns on / increases multi-octave<br />\
			<font color="#FF0066">Down Arrow:</font> Turns on / increases multi-octave<br />\
			<font color="#FF0066">Insert</font> Toggles sustain (default was backspace)<br />\
			<font color="#FF0066">Backspace</font> Alerts you if someone in the friends list array joins<br />\
			<font color="#FF0066">Delete</font> Toggles an alert sound and notifcation if "Logan" is said<br />\
			<font color="#FF0066">Home *new</font> Toggles Polite Play Mode<br />\
			<font color="#FF0066">\\</font> Speech to text for Chrome (click accept then speak)<br />\
			<font color="#FF0066">Spacebar</font> Plays low notes while held<br />\
			<font color="#FF0066">~</font> Plays high notes while held<br />\
			<font color="#FF0066">Tab</font> Sends hotkey message<br />\
			<font color="#FF0066">3</font> Toggles owner only mode (need crown)<br />\
			<font color="#FF0066">6</font> Toggles room visibility (need crown)<br />\
			<font color="#FF0066">Numpad + -</font> Change note volume<br />\
			<font color="#FF0066">Numpad *</font> Toggles timestamps in chat<br />\
			<font color="#FF0066">Numpad .</font> Meow meow meow<br />\
			<font color="#FF0066">Numpad 0</font> Quick reconnect<br />\
			<font color="#FF0066">Numpad 1</font> Play Alone<br />\
			<font color="#FF0066">Numpad 2</font> Auto Follow<br />\
			<font color="#FF0066">Numpad 3</font> Greeting<br />\
			<font color="#FF0066">Numpad 4</font> Toggle Bunny<br />\
			<font color="#FF0066">Numpad 5</font> Toggles delay<br />\
			<font color="#FF0066">Numpad 6</font> Toggles Pong<br />\
			<font color="#FF0066">Numpad 7</font> Toggles text to speech<br />\
			<font color="#FF0066">Numpad 8</font> Toggles SomeGuy\'s incognito<br />\
			<font color="#FF0066">Alt</font> Picks up the crown<br />\
			<font color="#FF0066">Ctrl</font> Drops the crown<br />\
			<font color="#FF0066">H</font> Displays displays Hotkeys again<br />\
			<font color="#FF3399">!lhelp</font> Displays local commands in chat<br />\
			To stop these messages displaying every time you start the script search for <font color="#FF0066">i_know_how_to_use_this_bot</font> and change <font color="#CC0000">false</font> to <font color="#0066FF">true</font>.<br />\
		', target: "#blah-btn", duration: 0});

		setTimeout(function() { //I think wrapping this in setTimeout hoists it so it wait for the buttons to be placed
			msgBox('Chat log is saved between rooms', 'To clear click Msgs button (i know it\'s on wrong button >.<)', 0, '#4-btn');
		}, 0);

	}

    var gKeyboardSeq = 0;
    var gKnowsYouCanUseKeyboard = false;
    if (localStorage && localStorage.knowsYouCanUseKeyboard) gKnowsYouCanUseKeyboard = true;
    if (!gKnowsYouCanUseKeyboard) {
        window.gKnowsYouCanUseKeyboardTimeout = setTimeout(function () {
            window.gKnowsYouCanUseKeyboardNotification = new Notification({
                title: "Did you know!?!",
                text: "You can play the piano with your keyboard, too.  Try it!",
                target: "#piano",
                duration: 10000
            });
        }, 30000);
    }




    if (window.localStorage) {

        if (localStorage.volume) {
            volume_slider.set(localStorage.volume);
            gPiano.audio.setVolume(localStorage.volume);
        } else localStorage.volume = gPiano.audio.volume;

        window.gHasBeenHereBefore = (localStorage.gHasBeenHereBefore || false);
        if (gHasBeenHereBefore) {}
        localStorage.gHasBeenHereBefore = true;

    }




    // New room, change room

    ////////////////////////////////////////////////////////////////

    $("#room > .info").text("--");
    gClient.on("ch", function (msg) {
        var channel = msg.ch;
        var info = $("#room > .info");
        info.text(channel._id);
        if (channel.settings.lobby) info.addClass("lobby");
        else info.removeClass("lobby");
        if (!channel.settings.chat) info.addClass("no-chat");
        else info.removeClass("no-chat");
        if (channel.settings.crownsolo) info.addClass("crownsolo");
        else info.removeClass("crownsolo");
        if (!channel.settings.visible) info.addClass("not-visible");
        else info.removeClass("not-visible");
    });
    gClient.on("ls", function (ls) {
        for (var i in ls.u) {
            if (!ls.u.hasOwnProperty(i)) continue;
            var room = ls.u[i];
            var info = $("#room .info[roomname=\"" + (room._id + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0') + "\"]");
            if (info.length == 0) {
                info = $("<div class=\"info\"></div>");
                info.attr("roomname", room._id);
                $("#room .more").append(info);
            }
            info.text(room._id + " [" + room.count + "]");	//room browser -Logie
            if (room.settings.lobby) info.addClass("lobby");
            else info.removeClass("lobby");
            if (!room.settings.chat) info.addClass("no-chat");
            else info.removeClass("no-chat");
            if (room.settings.crownsolo) info.addClass("crownsolo");
            else info.removeClass("crownsolo");
            if (!room.settings.visible) info.addClass("not-visible");
            else info.removeClass("not-visible");
        }
    });
    $("#room").on("click", function (evt) {
        evt.stopPropagation();

        // clicks on a new room
        if ($(evt.target).hasClass("info") && $(evt.target).parents(".more").length) {
            $("#room .more").fadeOut(250);
            var selected_name = $(evt.target).attr("roomname");
            if (typeof selected_name != "undefined") {
                changeRoom(selected_name, "right");
            }
            return false;
        }
        // clicks on "New Room..."
        else if ($(evt.target).hasClass("new")) {
            openModal("#new-room", "input[name=name]");
        }
        // all other clicks
        var doc_click = function (evt) {
            $(document).off("mousedown", doc_click);
            $("#room .more").fadeOut(500);	//closes on click away
            gClient.sendArray([{
                m: "-ls"
            }]);
        }
        $(document).on("mousedown", doc_click);
        $("#room .more .info").fadeOut(500);
        $("#room .more").show();
        gClient.sendArray([{
            m: "+ls"
        }]);
    });
    $("#new-room-btn").on("click", function (evt) {
        evt.stopPropagation();
        openModal("#new-room", "input[name=name]");
    });


    $("#play-alone-btn").on("click", function (evt) {
        evt.stopPropagation();
        var room_name = randStr(28);
        changeRoom(room_name, "right", {
            "visible": false,
            "chat": true,
            "crownsolo": false,	//Lroom
			"lobby": false

        });
    });



    var gModal;

    function modalHandleEsc(evt) {
        if (evt.keyCode == 27) {
            closeModal();
            evt.preventDefault();
            evt.stopPropagation();
        }
    };

    function openModal(selector, focus) {
        chat.blur();
        releaseKeyboard();
        $(document).on("keydown", modalHandleEsc);
        $("#modal #modals > *").hide();
        $("#modal").fadeIn(250);
        $(selector).show();
        setTimeout(function () {
            $(selector).find(focus).focus();
        }, 100);
        gModal = selector;
    };

    function closeModal() {
        $(document).off("keydown", modalHandleEsc);
        $("#modal").fadeOut(100);
        $("#modal #modals > *").hide();
        captureKeyboard();
        gModal = null;
    };

    var modal_bg = $("#modal .bg")[0];
    $(modal_bg).on("click", function (evt) {
        if (evt.target != modal_bg) return;
        closeModal();
    });

    (function () {
        function submit() {
            var name = $("#new-room .text[name=name]").val();
            var settings = {
                visible: $("#new-room .checkbox[name=visible]").is(":checked"),
                chat: true,
                crownsolo: false
            };
            $("#new-room .text[name=name]").val("");
            closeModal();
            changeRoom(name, "right", settings);
        };
        $("#new-room .submit").click(function (evt) {
            submit();
        });
        $("#new-room .text[name=name]").keypress(function (evt) {
            if (evt.keyCode == 13) {
                submit();
            } else if (evt.keyCode == 27) {
                closeModal();
            } else {
                return;
            }
            evt.preventDefault();
            evt.stopPropagation();
            return false;
        });
    })();




    function changeRoom(name, direction, settings, push) {
        if (!settings) settings = {};
        if (!direction) direction = "right";
        if (typeof push == "undefined") push = true;
        var opposite = direction == "left" ? "right" : "left";

        if (name == "") name = "lolwutsecretlobbybackdoor";		//defaults to lobby back door
        if (gClient.channel && gClient.channel._id === name) return;
        if (push) {
            var url = "/" + encodeURIComponent(name).replace("'", "%27");
            if (window.history && history.pushState) {
                history.pushState({
                    "depth": gHistoryDepth += 1,
                    "name": name
                }, "Piano > " + name, url);
            } else {
                window.location = url;
                return;
            }
        }

        gClient.setChannel(name, settings);
    };

    var gHistoryDepth = 0;
    $(window).on("popstate", function (evt) {
        var depth = evt.state ? evt.state.depth : 0;
        if (depth == gHistoryDepth) return; // <-- forgot why I did that though...

        var direction = depth <= gHistoryDepth ? "left" : "right";
        gHistoryDepth = depth;

        var name = decodeURIComponent(window.location.pathname);
        if (name.substr(0, 1) == "/") name = name.substr(1);
        changeRoom(name, direction, null, false);
    });




    // Rename

    ////////////////////////////////////////////////////////////////

    (function () {
        function submit() {
            var set = {
                name: $("#rename input[name=name]").val(),
                color: $("#rename input[name=color]").val()
            };
            closeModal();
            gClient.sendArray([{
                m: "userset",
                set: set
            }]);
			selfName = set.name; //object
        };
        $("#rename .submit").click(function (evt) {
            submit();
        });
        $("#rename .text[name=name]").keypress(function (evt) {
            if (evt.keyCode == 13) {
                submit();
            } else if (evt.keyCode == 27) {
                closeModal();
            } else {
                return;
            }
            evt.preventDefault();
            evt.stopPropagation();
            return false;
        });
    })();




    // chatctor

    ////////////////////////////////////////////////////////////////

    var chat = (function () {
        gClient.on("ch", function (msg) {
            if (msg.ch.settings.chat) {
				$("#nochat-notice").remove();
                chat.show();
            } else {
                //chat.hide();
				if ($("#nochat-notice").length == 0) {
                $('<div id="nochat-notice">').text('Chat has been disabled').appendTo("body").fadeIn(500);
            }
				chat.show();
            }
        });
        gClient.on("disconnect", function (msg) {
            chat.hide();
        });
        gClient.on("c", function (msg) {
            chat.clear();
            if (msg.c) {
                for (var i = 0; i < msg.c.length; i++) {
                    chat.receive(msg.c[i])
                }
            }
        });
        var WAIT_MS = 3000;
        var last_known_channel = undefined;
        var wait_until = Infinity;
        gClient.on("ch", function (msg) {
            if (msg.ch._id !== last_known_channel) {
                last_known_channel = msg.ch._id;
                wait_until = Date.now() + WAIT_MS;
            }
        });

		//here are the masters - they're global so the participant menu works
		masters = [selfId,	//Logan
			'4f44e29ef5a03683d229b617',]; //Josh

		//here you can add default ops
		ops = [selfId,		//Logan
			'4f44e29ef5a03683d229b617']; //Josh

		//here you can add default bans
		banned = ['998d3dc09887c9f9aa5f5a5a'];	//global for participant menu

		//here you can add ids for meanies
		var gMuteCompletely = ['', '', '', ''];

		var WAIT_MS = 3000;
		var last_known_channel = undefined;
		var wait_until = Infinity;
		var date = new Date();

		var welcTemp = false;										//turn on welcoming by default false = no
		// 0 off, 1 for everyone, 2 for only you
		bot = 1;													//turn on and off chat commands by default true = on / MUST BE GLOBAL FOR HOTKEY
		gClient.on("ch", function (msg) {
			if (msg.ch._id !== last_known_channel) {
				last_known_channel = msg.ch._id;
				wait_until = Date.now() + WAIT_MS;
			}
		});

		gClient.on("ls", function (ls) {});
		gClient.on("participant added", function (part) {

			if (gMuteCompletely.indexOf(part._id) != -1) {
					gPianoMutes.push(part._id);
					gChatMutes.push(part._id);
				} else {
					// don't mute them
			};
			console.log("%c" + "Client: " + part.name + " Joined! | ID: " + part._id, "color:" + part.color);
			function friendFunc(name) {
				new window.Notification("Friend " + name + " joined! [" + getTime() + "]", {
					icon: "http://localhost:3000/images/friend.png",
					body: "With the name " + part.name
				});
			}
			if (alertOnFriendJoin) {
				if (part._id == "02f90ec86dae40a66b42b998") {			//Jenna
						friendFunc("Jenna");
					friendSound.play();

				} else if (part._id == "4f44e29ef5a03683d229b617") {	//Josh
						friendFunc("Josh");
					friendSound.play();

				} else if (part._id == "a597eabce1a7e8c7af8dc0b1") {	//Sean
						friendFunc("Sean");
					friendSound.play();

				} else if (part._id == "00391420f3143515cdf4f253") {	//Tori
						friendFunc("Tori");
					friendSound.play();

				} else if (part._id == "8e27f67c6614cfc27e966238") {	//Elizabeth
						friendFunc("Elizabeth");
					friendSound.play();

				} else if (part._id == "2e24802a4d0760ae38cac19d") {	//Jade
						friendFunc("Jade");
					friendSound.play();

				} else if (part._id == "6121baa58629bef012e61105") {	//Yoshify
						friendFunc("Yoshify");
					friendSound.play();

				} else if (part._id == "af837983e85689771d5c5422") {	//Clefairy
						friendFunc("Clefairy");
					friendSound.play();

				} else if (part._id == "5ae13ed2055af114e7286084") {	//Lana
						friendFunc("Lana");
					friendSound.play();

				} else if (part._id == "cf1a3130178083180a456143") {	//Fennece
						friendFunc("Fennece");
					friendSound.play();

				} else if (part._id == "c46bce6a8136bf1f2e158de4") {	//Wolfeby
						friendFunc("Wolfeby");
					friendSound.play();

				} else if (part._id == "5cc14d88c59a4110f92251d2") {	//Mr. High Horse
						friendFunc("Mr. High Horse");
					friendSound.play();

				}

			} else {

			}
				var nameArray = ['a cute',
				'a handsome',
				'a delightful',
				'an adorable',
				'an attractive',
				'a cute',
				'a lovely',
				'a sweet',
				'a gorgeous',
				'an elegant',
				'a pretty',
				'a beautiful',
				'an exquisite',
				'a nice',
				'a charming',
				'a neat',
				'a prim',
				'a plebby',
				'an unusual'];
				var faceArray = ['^-^',
				'^_^',
				':>',
				'v.v',
				'c:',
				'=D',
				':)',
				'o3o',
				'<.>',
				'>.<',
				'o.o',
				'O.O',
				'o-o',
				'O-O',
				'o_o',
				'O_O',
				'°-°',
				'°_°',
				'°.°',
				'=P',
				'=p',
				':F',
				';w;',
				'=3',
				'<3',
				'... ' + selfName + ' loves you ;-;'];
				var selection = Math.floor(Math.random() * nameArray.length);
				var faceSelection = Math.floor(Math.random() * faceArray.length);
				//welcMsg = "Welcome to " + last_known_channel + ", " + part.name + ". That's " + nameArray[selection] + " name " + faceArray[faceSelection];
				welcMsg = "Welcome, " + part.name + ". Type "+cmdChar+"help to get my list of commands!";
			if (Date.now() > wait_until) {
			   setTimeout(function () {
				   if (Date.now() > wait_until) {
					   if (welcTemp) {
						   sendChat(welcMsg);
					   }
				   }
			   }, 100);
			}
		});

	//Command List
	//Lhelp
    gClient.on("a", function (msg) {

		Object.prototype.toString = function() {
			return JSON.stringify(this);
		}

		//fishy business (thanks Delan)											  // /fish
		if(msg.a.indexOf(gClient.getOwnParticipant().name + " caught a " )!== -1 && msg.p._id == ("1faa6da5c0c776d8e087ad61")){
			fishCaught += 1;
			MPP.chat.send("/fish (" + fishCaught + ")");
			if (giveFish) {
				MPP.chat.send("/give " + fishLord);
			} else {
				// keep fish
			}
		}
		//fishy business (thanks Delan)

		if (speechStatus) {
			var t = new SpeechSynthesisUtterance();
			t.text = msg.a;				//msg.a.slice(0, 140);	// 140 is good.
			t.lang = speechLang;
			t.rate = speechRate;		//1		//though default was 0.75
			t.pitch = speechPitch;		//1.0
			t.volume = speechVolume;	//0.5
			speechSynthesis.speak(t);
		}

		// alert on key-word
		$(window).blur(function(){
			tabbedIn = true;
		})
		$(window).focus(function(){
			tabbedIn = false;
		})

		if (tabbedIn) {
			if (msg.p._id == ("1faa6da5c0c776d8e087ad61") || msg.p._id == (selfId)) {	//make this !not then you can take away the else because the first block will be all you need
				// ignore fishing-computer, he likes to say my name a lot
			} else if (alertName && msg.a.toLowerCase().includes(keyword)) {
				alertSound.play();
				new window.Notification(msg.p.name + " mentioned your name. [" + getTime() + "]", { icon: "http://localhost:3000/images/speech.png", body: "Message: " + msg.a});
			}
		}

		// alert name

		// commands area
		console.log("%c"+msg.p.name + " @@ " + msg.p._id + ": " + msg.a, "color:"+msg.p.color);
        var commands = ["motd", "meow (Meowpuff help)", "mathhelp (for math game)", "p", "time", "list", "calc", "joke", "generatejoke ("+cmdChar+"gj)", "bored", "tip", "grammar", "me", "highfive", "suicide", "kill", "face", "gift", "grouphug", "musicsheets ("+cmdChar+"ms)", "clap", "slowclap", "dice", "colour ("+cmdChar+"color)", "hug", "kiss", "woohoo", "cuddle", "sleep", "wake", "slap", "facepalm", "stab", "attack", "unicode", "number", "note", "chance", "exp", "say", "encode", "decode", "info", "version"];
        var commands2 = ["music theory ("+cmdChar+"mt displays scales and chords)", "art", "user (info on user), "+cmdChar+"unitc (list of unit conversions) [Firebrick's text converting: "+cmdChar+"ud", "bubble", "bw", "wave", "caps", "big", "bracket]"];
        var opcmds = ["prefix ( "+cmdChar+" )", "rename", "spam", "welcome", "ban", "unban", "pardon (unbans all)", "op", "deop", "clear (clears chat)", "cmds (toggles chat commands)"];
        var message = msg.a;

		//say (http://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop - thanks Daniel Vassallo!)
		if (sayIt) {
			var tmp = message.toLowerCase();
			var sayText = tmp.split(" ");
			var i = 0;                     //  set your counter to 1
			var l = sayText.length;		   //  set the max to be the message length

			function myLoop () {           //  create a loop function
			   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
				  say(sayText[i]);         //  your code here
				  i++;                     //  increment the counter
				  if (i < l) {             //  if the counter < 10, call the loop function
					 myLoop();             //  ..  again which will trigger another
				  }                        //  ..  setTimeout()
			   }, 500)
			}

			myLoop();                      //  start the loop

		}

		// stuff that needs to be redefined each time
		var args = msg.a.split(' '); //split message into array
		var cmd = args[0].toLowerCase(); //grab first index
		var target = msg.a.substring(cmd.length).trim();
		var name = msg.p.name;
		var noAccess = name.endsWith("();") ? "Insufficent permissions " + name : "Insufficent permissions (" + name + ")";
		var userNotFound = "User not found (" + target + ").";
		var color = msg.p.color;
		var ids = msg.p._id;

		if (!botLoaded) {
			// stuff that can remain the same (at least I haven't seen any bugs keep an eye out :o)
			sendChat = function(msg) { gClient.sendArray([{ m: "a", message: "\u034f" + msg }]) };		//global so welcoming works.
			updateName = function (name) { gClient.sendArray([{ m: "userset", set:{name: name }}]) }	//global so stuff won't break. (Broken???)
			var Fcalories = 1250;
			var Dcalories = 120;
			var matched = false;
			var mastered = false;									//When this is true everyone is mastered
			var opped = false;										//When this is true everyone is opped
		}

		if (banned.indexOf(ids) !== -1) matched = true;
		if (masters.indexOf(ids) !== -1) mastered = true;
		if (ops.indexOf(ids) !== -1) opped = true;
		if (animName) heyThereKitty = name;								//Hey there, Kitty.
		if (animName) heyThereKittyId = ids;							//Hey there, Kittyid.

		// sentence game
		if (askedEnglish && msg.a === sentenceAntiCopy) {
			sendChat("No copying, " + name + "!");
		}
		if (askedEnglish && msg.a === sentence) {
			if (MDB[ids]) {
				if (hardEnglish) {
					var MPtoAward = MDB[ids].meowRate * sentence.length * 10; //bonus meows, oh goody!
					MDB[ids].meowP += MPtoAward;
					sendChat(name + " typed the sentence perfectly and was awarded " + MPtoAward + " Meow Points!");
					askedEnglish = false;

				} else {
					var MPtoAward = MDB[ids].meowRate * sentence.length;
					MDB[ids].meowP += MPtoAward;
					sendChat(name + " typed the sentence perfectly and was awarded " + MPtoAward + " Meow Points!");
					askedEnglish = false;
				}

			} else {
				sendChat(name + " typed the sentence perfectly! (you get rewards if you're playing Meowpuff type "+cmdChar+"meow for info on that)");
				askedEnglish = false;
			}
		}

		//nope
		if (lolNo){
			if (msg.a.indexOf("/play")!= -1 || msg.a.indexOf("/p")!= -1 || msg.a.indexOf("/r")!= -1) {
				console.log('Triggered lolNo!');
				setTimeout(function() {
					MPP.chat.send("/stop");
				}, 300)
			}
		}

		//voice
		Voice.continuous = true;
		Voice.interimResults = true;
		Voice.onresult = function(event) {
			if (event.results.length > 0) {
				var result = event.results[event.results.length-1];

				if (result.isFinal) {
					sendChat(capitalizeFirstLetter(result[event.results.length-1].transcript) + ".");

				}
			}
		}

		//strict mode
		if (ids != selfId) {
			if (strictMode) {
				if (!name.endsWith("();")) return;
			}
		}

		//thanks Josh
		if (cmd === cmdChar+"find") {						//find command
            var target = msg.a.substring(cmd.length).trim();
            var part = getUser(target.toLowerCase());
            if (target == "") {
                sendChat("Usage "+cmdChar+"find name_here.");
                return;
            }
            if (part) {
                if (part.name == name) {
                    sendChat("You found yourself :3");
                    return;
                }
                sendChat("Found: " + part.name + ".");
            } else {
                sendChat(userNotFound);
            }

		} else if (cmd == cmdChar+"room") {					//room command
              if (mastered) {
                 gClient.setChannel(msg.a.substring(5).trim());
			} else {
				sendChat(noAccess);
			}

        } else if (cmd == cmdChar+"cmds") {
            if (opped) {
                if (bot == 0) {
                    bot = 1;
                    sendChat("Commands enabled.");
                } else {
                    bot = 0;
                    sendChat("Commands disabled.");
                }
            } else {
				sendChat(noAccess);
			}
				   //static		   //dynamic
		} else if (cmd == "!js" || cmd == cmdChar+"js") {	//console
			if (mastered) {
			var args = msg.a.split(' ');
			var cmd = args[0].toLowerCase();
			var message = args.splice(1).join(' ');
				try {
					MPP.chat.send('Console: ' + eval(message));
				} catch (e) {
					MPP.chat.send("Console: " + e);
				}
			} else {
				//ignore
			}

        } else if (bot == 1 || bot == 2 && ids == selfId) {
			if (message.substring(0, 1) == cmdChar && matched) {

			} else if (cmd == cmdChar+"prefix") {
				if (opped) {
					if (message.substring(7).trim() == "") {
						sendChat('Usage: '+cmdChar+'prefix -');
						return;
					}
					if (cmd.length < 7) {
						cmdChar = message.substring(7, 8).toLowerCase();
						sendChat(name + " set command prefix to " + cmdChar);
						updateCmdChar(cmdChar);
					} else {
						cmdChar = message.substring(8, 9).toLowerCase();
						sendChat(name + " set command prefix to " + cmdChar);
						updateCmdChar(cmdChar);
					}
				} else {
					sendChat(noAccess);
				}

		//for displaying help
		} else if (message.substring(0, 5).toLowerCase() == cmdChar+"help") {
			var cmds = cmdChar + commands[0];
			var adminstring = cmdChar + opcmds[0];
			var cmds2 = cmdChar + commands2[0];

			for (i = 1; i < commands.length; i++) {
				cmds += ", " + cmdChar + commands[i];
			}
			for (i = 1; i < opcmds.length; i++) {
				adminstring += ", " + cmdChar + opcmds[i];
			}
			for (i = 1; i < commands2.length; i++) {
				cmds2 += ", " + cmdChar + commands2[i];
			}
			if (opped) {								//help commands
				sendChat("Main Commands: " + cmds);
				sendChat("Other Commands: " + cmds2);
				sendChat("Operator Commands: " + adminstring);
			} else {
				sendChat("Main Commands: " + cmds);
				sendChat("Other Commands: " + cmds2);
			}

            } else if (cmd == cmdChar+"user") {
				if (msg.a.substring(cmd.length).trim() == '') {
					sendChat("User Info: Name: " + name + " _id: " + ids + " Colour: " + new Color(msg.p.color).getName() + " (" + msg.p.color + ")" + " You can also type "+cmdChar+"user name_here.");
					return;
				}
				var target = msg.a.substring(cmd.length).trim();
				var part = getUser(target.toLowerCase());
				if (part) {
					sendChat("User Info: Name: " + part.name + " _id: " + part._id + " Colour: " + new Color(part.color).getName() + " (" + part.color + ")");
					} else {
						sendChat(userNotFound);
					}


            } else if (cmd == cmdChar+"grouphug") {			//group hug command
                sendChat(name + " gave everyone a hug.");

            } else if (cmd == cmdChar+"dice") {				//dice command
				var dice = 6;			//max number
				if (message.substring(5).trim() == "") {
					if (isNaN(dice)) {
						sendChat("Invalid Number.");
					} else {
						sendChat("Dice: ​" + name + " rolled a " + Math.floor(Math.random() * dice + 1) + " out of " + dice);
					}

				} else {
					dice = message.substring(6).trim()
					if (dice == 0) dice = 1;
					if (isNaN(dice)) {
						sendChat("Invalid Number.");
					} else if (dice == 420) {
						sendChat('Too high!');
						return;

					} else {
						sendChat("Dice: ​" + name + " rolled a " + Math.floor(Math.random() * dice + 1) + " out of " + dice);
					}
				}

			} else if (cmd == cmdChar+"number") {		//random number command
				if (message.substring(7).trim() == '') {
					sendChat('Usage: '+cmdChar+'number max_number_here');
					return;
				}
                var num = message.substring(7).trim();
				if (isNaN(num)) {
					sendChat('Enter a number.');
					return;
				}
				if (num == 420) {
					sendChat('Too high!');
					return;
				}

				sendChat("Random Number: ​" + Math.floor(Math.random() * num));

			} else if (cmd == cmdChar+"note") {
				var randomKey = Math.floor(Math.random() * keysArray.length);
                press(keysArray[randomKey]);
				sendChat("Random Note: " + keysArray[randomKey]);

				// thanks Dragon in a Pie Costume for the blank name idea :3
				} else if (cmd == cmdChar+"clear" && !clearing) {		//clear command
					if (gClient.isOwner()) {
						if (opped) {
							clearing = true;
							if (typeof(clearID) == "undefined" || clearID == 0){
								sendChat("Clearing the chat (" + name + ")");
								updateName("￼");
								var num = 0;
								var clearID = setInterval(function() {
									if(num++ == 30){ //30 msg in chat.
										clearing = false;
										clearInterval(clearID);
										clearID = 0;
										updateName(selfName);
										sendChat("Cleared :3 ");
										return;
									}
									sendChat("￼");
								}, 300);
							} // else the timer is not yet finished
						} else if (!opped) {
							sendChat(noAccess);
						}
					} else {
						sendChat("I need the crown to efficiently clear chat.");
					}

				} else if (cmd == cmdChar+"chance") {
					var num = message.substring(7).trim();
					if (num == "") {
						sendChat("Usage: "+cmdChar+"chance number_here");
					} else {
						if (isNaN(num)) {
							sendChat("Please enter a number.");
						} else {
							var yes = 0;
							var no = 0;
							for (i = 0; i < 1000; i++) {
								var outcome = Math.floor(Math.random() * num) ? "Yes" : "No";
								if (outcome == "Yes") {
									yes++;
								} else {
									no++;
								}
							}
							sendChat("Odds: wins: " + yes + ". loses: " + no);
						}
					}

            } else if (cmd == cmdChar+"me") {
                if (message.substring(3).trim() == "") {
                    sendChat("Usage: "+cmdChar+"me action.");
                } else {
                    sendChat("*" + name + " " + message.substring(4).trim() + "*");
                }


				} else if (cmd == cmdChar+"bored") { 			//bored command
				var arrURL = ['http://www.crazycardtrick.com/',
					'http://www.whywashesad.com/',
					'http://gprime.net/game.php/dodgethedot',
					'http://www.donothingfor2minutes.com/',
					'http://www.ballonastring.com/',
					'http://sysach.com/circle-game/',
					'http://gifctrl.com/Icb',
					'http://www.polkadotgame.com/',
					'http://www.rock-paper-scissors-game.com/',
					'http://en.wikipedia.org/wiki/Music_theory',
					'http://www.deepsadness.com/',
					'http://www.jellotime.com/',
					'http://www.wdcs.co.uk/media/flash/whalebanner/content_pub_en.html',
					'http://www.towardsandbeyond.com/',
					'http://andrius.esu.lt/10/go2.htm',
					'http://www.vagenisonline.com/flash/fallingbody.html',
					'http://roxik.com/toys/toy1/main.swf',
					'http://akk.li/pics/anne.jpg',
					'http://roxik.com/toy1.html',
					'http://www.selfcontrolfreak.com/slaan.html',
					'http://hereistoday.com/',
					'http://mono-1.com/monoface/main.html',
					'http://www.redkid.net/generator/sign.php',
					'http://www.zimm-co.com/PressTheSpaceBar/pressthespacebar2000.html',
					'http://www.dhteumeuleu.com/mojo-working',
					'http://recitethis.com/',
					'http://www.papertoilet.com/',
					'http://woodgears.ca/eyeball/',
					'http://www.translation-telephone.com/',
					'http://www.onemotion.com/flash/spider/',
					'http://www.sadtrombone.com/',
					'http://the100meterscroll.com/',
					'https://triggerrally.com/',
					'http://chandlerprall.github.io/Physijs/examples/vehicle.html',
					'http://chandlerprall.github.io/Physijs/examples/jenga.html',
					'http://chandlerprall.github.io/Physijs/examples/heightfield.html',
					'http://chandlerprall.github.io/Physijs/examples/constraints_car.html',
					'http://chandlerprall.github.io/Physijs/examples/compound.html',
					'http://chandlerprall.github.io/Physijs/examples/shapes.html',
					'http://collinhover.github.io/kaiopua/',
					'http://livecodelab.net/',
					'http://inear.se/beanstalk/',
					'http://lightgraffiti.littlesun.com/',
					'http://dl.dropbox.com/u/6213850/WebGL/nyanCat/nyan.html',
					'http://helloracer.com/webgl/',
					'http://lights.elliegoulding.com/',
					'http://www.playmapscube.com/',
					'http://blackjk3.github.io/threefab/',
					'http://www.theywilleatyou.com/',
					'http://www.google.com/zeitgeist/2012/#explore',
					'http://middle-earth.thehobbit.com/',
					'http://www.google.com/doodles/rubiks-cube',
					'http://timeinvariant.com/gorescript/play/',
					'http://www.georgeandjonathan.com/',
					'http://carvisualizer.plus360degrees.com/classics/',
					'http://www.overthetinyhills.com/',
					'http://potree.org/wp/demo/',
					'http://ogreen.special-t.com/en/',
					'http://stemkoski.github.io/Three.js/#hello-world',
					'http://threejs.org/',
					'http://www.boredbutton.com/',
					'http://www.procreo.jp/labo/flower_garden.swf',
					'http://clap.resn.co.nz/',
					'http://dhmholley.co.uk/civclicker.html',
					'http://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html',
					'http://www.vectorpark.com/',
					'http://www.nobodyhere.com/gfx/toren.swf',
					'http://inception.davepedu.com/',
					'http://www.davidbessler.com/pulldown/pipecleaner_dance3.swf',
					'http://www.pointlesssites.com/',
					'http://www.ineedaprompt.com/',
					'http://www.dabadabadab.com/dabarev.html',
					'http://www.googlefeud.com/',
					'http://turnyournameintoaface.com/',
					'http://www.idiotproofwebsite.com/',
					'http://textastrophe.com/',
					'http://sampulator.com/',
					'http://www.firstpersontetris.com/',
					'http://www.clock.tissin.com/',
					'http://www.pointerpointer.com/',
					'http://www.soulstice.org/',
					'http://www.plspetdoge.com/',
					'http://www.barcinski-jeanjean.com/entries/line3d/',
					'http://www.webbaubles.com/',
					'http://www.eternalmoonwalk.com/',
					'http://www.windows93.net/',
					'http://touchpianist.com/ (this one\'s especially awesome)',
					'http://atom.smasher.org/',
					'http://en.akinator.com/',
					'http://phoboslab.org/ztype/'];
                var getURL = Math.floor(Math.random() * arrURL.length);
                sendChat("Bored? Check out: " + arrURL[getURL] + " (site " + getURL + "/" + arrURL.length + ")");


				} else if (cmd == cmdChar+"spam") { 			//spam command
					if (opped) {
						for(var key in MPP.piano.keys) MPP.press(key, 1);
					} else if (!opped) {
						sendChat(noAccess);
					}

				//--TEST--TEST--TEST////--TEST--TEST--TEST////--TEST--TEST--TEST//   //test command
				//thanks Kappa!
				} else if (/^:\d+$/.test(cmd) && msg.p._id !== selfId) { //:3 :4 :5
					sendChat(':' + (+cmd.substring(1) + 1));

				} else if (/^x\d+$/.test(cmd) && msg.p._id !== selfId) { //x3 x4 x5
					sendChat('x' + (+cmd.substring(1) + 1));

				} else if (cmd == cmdChar+"test") {
					if (message.substring(5).trim() == "") {
						sendChat("Usage: "+cmdChar+"test text_here.");
					} else {
						var result = message.substring(5).split('').sort().join('');
						sendChat(result);
					}

				} else if (cmd == cmdChar+"test2") {
					sendChat("Random user: " + randomUser());

				} else if (cmd == cmdChar+"test3") {
					$.getScript('http://localhost:3000/scripts/test.js');

				} else if (cmd == cmdChar+"test4") {
					$.getScript('http://localhost:3000/scripts/words.js');

				//--TEST--TEST--TEST////--TEST--TEST--TEST////--TEST--TEST--TEST//

				} else if (cmd == cmdChar+"exp") {
					if (message.substring(4).trim() == "") {
						sendChat("Usage: "+cmdChar+"exp 1 (it will show an exponential sequence of the numbers).");
						return;
					}
					if (isNaN(message.substring(4).trim())) {
						sendChat("Enter a number.");

					} else {
						var str = 'Exponentials: ';
						var num = parseFloat(message.substring(4).trim());

						for (i=0; i < 20; i++) {
							str += (num += num) + ' ';
						}
						sendChat(str);
					}

				} else if (cmd == cmdChar+"encode") {
					if (message.substring(7).trim() == "") {
						sendChat("Usage: "+cmdChar+"encode text to encode.");
					} else {
						try {
							var baseEncode = window.btoa(msg.a.substring(7).trim());
							sendChat("Encoded: " + baseEncode);
						} catch (e) {
							sendChat(e);
							console.log(e);
						}
					}


				} else if (cmd == cmdChar+"decode") {
					if (message.substring(7).trim() == "") {
						sendChat("Usage: "+cmdChar+"decode text to decode.");
					} else {
						try {
							var baseDecode = window.atob(msg.a.substring(7).trim());
							sendChat("Decoded: " + baseDecode);
						} catch (e) {
							sendChat(e);
							console.log(e);
						}
					}

				} else if (cmd == cmdChar+"woohoo") {						//woohoo command
					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());
					if (target == "") {
						sendChat("Usage "+cmdChar+"woohoo name_here.");
						return;
					}
					if (part) {
						if (part.name == name) {
							sendChat(name + " had some alone time...");
							return;
						}
						var woohooArray = [' woohooed ', ' got funky with ', ' got it on with ', ' had a sexual snuggle with ', ' had sweaty time with '];
						var logiesWoohoos = Math.floor(Math.random() * woohooArray.length);
						sendChat(name + woohooArray[logiesWoohoos] + part.name + ".");
					} else {
						sendChat(userNotFound);
					}

                } else if (cmd == cmdChar+"rateme") {
					if (name.length == 1) {
						sendChat("Your name is very short. It has " + name.length + " letter.")
					} else if (name.length == 4 && name == "Anon") {
						sendChat("Your name is Anon. It has " + name.length + " letters. You're like a regular Anonymous, but less ymous")
					} else if (name.length == 5 && name == "Logan" && ids != selfId) {
						sendChat("Your name is perfect. It has " + name.length + " letters. However. You're not Logan o//o")
					} else if (name.length == 5 && name == selfName) {
						sendChat("Your name is perfect. It has " + name.length + " letters. You are " + selfName + " \\o/")
					} else if (name.length == 8) {
						sendChat("Your name is gr8. It has " + name.length + " letters. I'd rate 8/8 m8")
					} else if (name.length == 9 && name == "Anonymous") {
						sendChat("Your name is extremely average. it has " + name.length + " letters which, makes you so very average.")
					} else if (name.length <= 3) {
						sendChat("Your name is short. It has " + name.length + " letters.")
					} else if (name.length <=10) {
						sendChat("Your name is average. It has " + name.length + " letters.")
					} else if (name.length <=20) {
						sendChat("Your name is long. It has " + name.length + " letters.")
					} else if (name.length <=39) {
						sendChat("Your name is very long. It has " + name.length + " letters.")
					} else if (name.length == 40) {
						sendChat("Your name is extremely long. It has " + name.length + " letters.")
					}

				} else if (cmd == cmdChar+"gj" || cmd == cmdChar+"generatejoke") {	//random joke command
                var Animal = ['chicken', 'turtle', 'rabbit', 'rat', 'kangaroo', 'cuddlepet', 'fox', 'wolf', 'bat', 'gecko', 'scorpion', 'cat', 'dog', 'parrot', 'seagull', 'elf', 'pony', 'pixie', 'polar bear', 'penguin', 'anteater', 'chipmunk', 'monkey', 'gorilla', 'goat', 'emu', 'elephant', 'horse', 'frog', 'hamster', 'duck', 'flamingo', 'eagle', 'gerbil', 'catfish', 'baboon', 'reindeer', 'seal', 'walrus', 'worm', 'Turkey', 'Panda', 'mule', 'donkey', 'meerkat', 'shark', 'lion', 'tiger', 'jaguar', 'jellyfish', 'iguana', 'lemming', 'crab', 'ladybird', 'rinoceros'];
				var Location = ['road', 'beach', 'field', 'desert', 'parking-lot', 'rugby park', 'lake', 'forest', 'table', 'railway', 'boat', 'village', 'airport', 'city', 'mall', 'river', 'quicksand', 'orchard', 'island', 'hall', 'stage', 'golf course', 'driveway'];
				var Punchline = ['To cuddle with a bunny.', 'To buy a jar of cat semen.', 'To put out a fire.', 'To buy a jar of dog semen.', 'To escape the anons.', 'To get to the other side.', 'To buy a chocolate milk.', 'To visit ' + selfName + '.', 'To buy small shoes.', 'To buy sheet music.', 'To stomp the small children.', 'To buy balloons.', 'To make better punchlines.', 'To buy a big fluffy bed to sleep in and cuddle.', 'To stamp on a cat with gumboots.', 'To help an eldery woman get run over.', 'To bite people.', 'To scratch people.', 'To eat people.', 'To aquire a large stick.', 'To send mail.', 'So it could die over there.', 'So it could strangulate small mammals.', 'So it could transport illicit drugs.', 'Because there was a car coming.', 'Because it’s cool.', 'Because it’s fat.', 'To sniff things up its nose.', 'To soak a sloth with cum.'];
                var Aselection = Math.floor(Math.random() * Animal.length);
				var Lselection = Math.floor(Math.random() * Location.length);
				var Pselection = Math.floor(Math.random() * Punchline.length);
				jokeGens +=1;
				sendChat("[Joke Generator #" + jokeGens + "] Why did the " + Animal[Aselection] + " cross the " + Location[Lselection] + "? " + Punchline[Pselection]);

			} else if (cmd == cmdChar+"info") { 	//info command
                sendChat("Info: Type in (!help) to get my commands.(Version " + botVersion + ")");

			} else if (cmd == cmdChar+"sleep") { 			//sleep command
				if (usersAsleep.indexOf(ids) == -1) {
					sendChat(name + ' is asleep (:3[▓▓▓]');
					usersAsleep.push(ids);
				} else {
					sendChat(name + ' is sound asleep (x3[▓▓▓] Zz...');
				}

			} else if (cmd == cmdChar+"wake") { 			//wake command
				if (usersAsleep.indexOf(ids) != -1) {
					sendChat(name + " woke up (:o[▓▓▓]");
					while (usersAsleep.indexOf(ids) !== -1) {
						usersAsleep.splice(usersAsleep.indexOf(ids), 1);
					}
				} else {
					sendChat(name + ' is wide already wide awake :o');
				}

			} else if (cmd == cmdChar+"motd") {			//motd command
                sendChat(Lmotd);

			} else if (cmd == cmdChar+"version") { 		//version command
                sendChat("Version " + botVersion + " ");

			} else if (cmd == cmdChar+"time") {
				sendChat("The time for me is: " + new Date());

				//by electrashave, fixed by Starseed Orion.
		    } else if (cmd == cmdChar+"calc") {
				if (message.substring(5).trim() == "") {
					sendChat('Usage: '+cmdChar+'calc 2+4 (+ is addition, - is subtraction, / is division and * is multiplication).');
					return;
				}

                var stuf = message.substring(6).trim();
                var mod = stuf.split('%').join('%');
                var pie = mod.split('pi').join(Math.PI);
				var pie = pie.replace(/[^0-9\*%\/\+\-()<>\.]/g, "");

				try {
					if (eval(pie) == 420) {
						sendChat("Calculator: "+ eval(pie) + " Too high!");
						return;
					}
					sendChat("Calculator: "+ eval(pie));

				} catch (e) {
					sendChat("Error: " + e);

            }

			// ♥ // !p made by Firebrick || optimized by B@K$ // ♥ //
			} else if (cmd == cmdChar+"p") {
				var m = message;
			if(m.substring(2).trim() == "") {
				sendChat("Usage: "+cmdChar+"p (text for this to play) | Add spaces for delay. ~ are double the delay of a space. ` is just under half the delay of ~. ; is a lot shorter. And | is the shortest at 50ms To make chords, cluster notes e.g. etu C triad. - Autoplayer by Firebrick");
			}
			m = m.slice(3);

			var notes = {
				"z":"a1","a":"gs1","s":"as1","f":"cs2","g":"ds2","x":"b1","c":"c2","v":"d2","b":"e2","n":"f2","j":"fs2","k":"gs2","1":"gs2","l":"as2",
				"2":"as2","m":"g2",",":"a2",".":"b2","/":"c3","'":"cs3","q":"a2","w":"b2","e":"c3","4":"cs3","5":"ds3","7":"fs3","8":"gs3","9":"as3",
				"-":"cs4","=":"ds4","r":"d3","t":"e3","y":"f3","u":"g3","i":"a3","o":"b3","p":"c4","[":"d4","]":"e4","Z":"a2","A":"gs2","S":"as2",
				"F":"cs3","G":"ds3","X":"b2","C":"c3","V":"d3","B":"e3","N":"f3","J":"fs3","K":"gs3","!":"gs3","L":"as3","@":"as3","M":"g3","<":"a3",
				">":"b3",'"':"cs4","?":"c4","Q":"a3","W":"b3","E":"c4","$":"cs4","%":"ds4","&":"fs4","*":"gs4","(":"as4","_":"cs5","+":"ds5","R":"d4",
				"T":"e4","Y":"f4","U":"g4","I":"a4","O":"b4","P":"c5","{":"d5","}":"e5"
			};

			var i=h=0;
			var T=300;

			while(i<m.length){
				setTimeout(function() { press(notes[m[h++]]) }, T);
				if(m[i] == "|"){T+=50;}
				else if(m[i] == ";"){T+=75;}
				else if(m[i] == "`"){T+=125;}
				else if(m[i] == " "){T+=200;}
				else if(m[i] == "~"){T+=300;}
				i++;
			}

			// ♥ // !p made by Firebrick || optimized by B@K$ // ♥ //


			} else if (cmd == cmdChar+"ud") { //TEXTCONVERT COMMAND (Firebrick)//updated version
				if (message.length == cmd.length) {
					sendChat("Usage: "+cmdChar+"ud text here (converts to upsidedown text).");
				} else {
					var alpha1 = "zZyYxXwWvVuUtTsSrRqQpPoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA?!.,0987654321 zZʎʎxXʍMʌΛn∩ʇ⊥sSɹᴚbὉdԀoOuNɯWl˥ʞʞɾſıIɥHƃƃɟℲǝƎpᗡɔϽqqɐ∀¿¡˙'068Ɫ9ㄣᔭƐᄅ⇂";
					var alpha2 = "zZʎʎxXʍMʌΛn∩ʇ⊥sSɹᴚbὉdԀoOuNɯWl˥ʞʞɾſıIɥHƃƃɟℲǝƎpᗡɔϽqqɐ∀¿¡˙'068Ɫ9ㄣᔭƐᄅ⇂ zZyYxXwWvVuUtTsSrRqQpPoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA?!.,0987654321";
					var str = message.substring(cmd.length);
					var newstr = '';
					for (var i = 0; i < str.length; i++) {
						charPos = alpha1.indexOf(str.charAt(i));
						newstr += alpha2.charAt(charPos);
					}
					sendChat("Upside down: " + newstr.split("").reverse().join(""));
				}

			} else if (cmd == cmdChar+"bubble") {
				if (message.length == cmd.length) {
					sendChat("Usage: "+cmdChar+"bubble text here.");
				} else {
					var alpha1 = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890,. ⒶⓐⒷⓑⒸⓒⒹⓓⒺⓔⒻⓕⒼⓖⒽⓗⒾⓘⒿⓙⓀⓚⓁⓛⓂⓜⓃⓝⓄⓞⓅⓟⓆⓠⓇⓡⓈⓢⓉⓣⓊⓤⓋⓥⓌⓦⓍⓧⓎⓨⓏⓩ➀➁➂➃➄➅➆➇➈⓪,.";
					var alpha2 = "ⒶⓐⒷⓑⒸⓒⒹⓓⒺⓔⒻⓕⒼⓖⒽⓗⒾⓘⒿⓙⓀⓚⓁⓛⓂⓜⓃⓝⓄⓞⓅⓟⓆⓠⓇⓡⓈⓢⓉⓣⓊⓤⓋⓥⓌⓦⓍⓧⓎⓨⓏⓩ➀➁➂➃➄➅➆➇➈⓪,. AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890,.";
					var str = message.substring(cmd.length);
					var newstr = '';
					for (var i = 0; i < str.length; i++) {
						charPos = alpha1.indexOf(str.charAt(i));
						newstr += alpha2.charAt(charPos);
					}
					sendChat("Bubble: " + newstr);
				}

			// backwards
			} else if (cmd == cmdChar+"bw") {
				if (message.length == cmd.length) {	//add useage for below command
					sendChat("Usage: "+cmdChar+"bw text here (converts to backwards text).");
				} else {
					sendChat("Reverse: " + message.substring(cmd.length).split("").reverse().join(""));
				}

			// wave
			} else if (cmd == cmdChar+"wave") {
				if (message.length == cmd.length) {
					sendChat("Usage: "+cmdChar+"wave text here.");
				} else {
					var alpha1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?.,!@ ᗩᕊᑕᕍᙓℱᘐᖺᓰᒎḰᒪᗰﬡᗢᖰᕋᖇᔕ☂⋒ᐯᙡჯ૪ᔓᗩᙖᑕↁᕮℱᘐᕼᓮᒎḰᒪᗰᘉ〇ᖘႳᖇᔕ☂ᑌⅤᙡ᙭ϒᔓ";
					var alpha2 = "ᗩᕊᑕᕍᙓℱᘐᖺᓰᒎḰᒪᗰﬡᗢᖰᕋᖇᔕ☂⋒ᐯᙡჯ૪ᔓᗩᙖᑕↁᕮℱᘐᕼᓮᒎḰᒪᗰᘉ〇ᖘႳᖇᔕ☂ᑌⅤᙡ᙭ϒᔓ1234567890?.,!@ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
					var str = message.substring(cmd.length);
					var newstr = '';
					for (var i = 0; i < str.length; i++) {
						charPos = alpha1.indexOf(str.charAt(i));
						newstr += alpha2.charAt(charPos);
					}
					sendChat("Wave: " + newstr);
				}


			// caps
			} else if (cmd == cmdChar+"caps") {
				if (message.length == cmd.length) {
					sendChat("Usage: "+cmdChar+"caps letters here.");
				} else {
					var alpha1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz?Æ.,!@:'[]/\|<>-=+* ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ";
					var alpha2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ?ᴁ.,!@:'[]/\|<>-=+* abcdefghijklmnopqrstuvwxyz";
					var str = message.substring(cmd.length);
					var newstr = '';
					for (var i = 0; i < str.length; i++) {
						charPos = alpha1.indexOf(str.charAt(i));
						newstr += alpha2.charAt(charPos);
					}
					sendChat("Caps: " + newstr);
				}

			// big text
			} else if (cmd == cmdChar+"big") {
				if (message.length == cmd.length) {
					sendChat("Usage: "+cmdChar+"big letters here.");
				} else {
					var alpha1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz?-=[]\;'\",./_+{}|:<>!@#$%^&*() ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ１２３４５６７８９０ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";
					var alpha2 = "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ１２３４５６７８９０ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ？－＝[]\；＇\"，．／_＋{}|：<>！＠＃＄％^＆＊（） ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
					var str = message.substring(cmd.length);
					var newstr = '';
					for (var i = 0; i < str.length; i++) {
						charPos = alpha1.indexOf(str.charAt(i));
						newstr += alpha2.charAt(charPos);
					}
					sendChat("Big: " + newstr.substr(1));
				}


			// bracket
			} else if (cmd == cmdChar+"bracket") {
				if (message.length == cmd.length) {
					sendChat("Usage: "+cmdChar+"bracket letters here.");
				} else {
					var alpha1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz?-=[]\;'\",./_+{}|:<>!@#$%^&*() ⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⑴⑵⑶⑷⑸⑹⑺⑻⑼0⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵";
					var alpha2 = "⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⑴⑵⑶⑷⑸⑹⑺⑻⑼0⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵?-=[]\;'\",./_+{}|:<>!@#$%^&*() ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
					var str = message.substring(cmd.length); //abcde
					var newstr = '';
					for (var i = 0; i < str.length; i++) {
						charPos = alpha1.indexOf(str.charAt(i));
						newstr += alpha2.charAt(charPos);
					}
					sendChat("Bracket: " + newstr);
				}

			} else if (cmd == cmdChar+"tip" || cmd == cmdChar+"tips") {						//tip command
				var tipCount = 14;
                var textArray = ['Tip (1/' + tipCount + '): You can toggle sustain by pressing BACKSPACE.', 'Tip (2/' + tipCount + '): You can shift octaves by holding either SHIFT, CTRL or CAPSLOCK. It’s best to use CAPSLOCK as this avoids hitting hotkeys such as CTRL+W', 'Tip (3/' + tipCount + '): You can click on your name to change it.', 'Tip (4/' + tipCount + '): If another player is annoying you, you can click their name and mute their notes and/or chat.', 'Tip (5/' + tipCount + '): QZ, WX, EC and RV ect.. are all octaves apart.', 'Tip (6/' + tipCount + '): The sound of your notes is relative to your mouse position. eg high = quite notes, low = loud notes. (unless you’re using a midi piano)', 'Tip (7/' + tipCount + '): If someone’s mouse is in the bottom left that means they haven’t moved their mouse since you’ve connected.', 'Tip (8/' + tipCount + '): Multiplayer Piano works best and lags least with Google chrome: https://www.google.com/intl/en/chrome/browser/', 'Tip (9/' + tipCount + '): If you’re on MIDI and it randomly stops working. Try going to the java control panel and removing the permission and adding it again. Alternatively, this sounds weird but sometimes the room name can effect the loading of the MIDI. Try and load it in the lobby.','Tip (10/' + tipCount + '): The colour of the room name in the bottom left will fade to a ligher shade if the owner has set it to "not visible".', 'Tip (11/' + tipCount + '): If you type #seeowncursor at the end of the URL and refresh you\'ll be able to see your own mouse. Though it won\'t follow your cursor unless you\'re using a script.', 'Tip (12/' + tipCount + '): If the colour of the room name is yellow this means it\'s a lobby. Lobbies don\'t have an owner like normal rooms they also have a low note quota.', 'Tip (13/' + tipCount + '): If you change your name while in two rooms your name will update, but your name-tag at the top will remain the same in the other room.', 'Tip (14/' + tipCount + '): If you add /spin to the end of your new room name the piano will spin!'];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);

			} else if (cmd == cmdChar+"grammar") {		    		//grammar command
                var textArray = ['Gramar Nazi: "Alot" is not a word', 'Grammar Nazi: There: Noun; A place that is not here. // Their: Adjective; Something belongs to "them." // They’re: Contraction; They are.', 'Grammar Nazi: It’s: Contraction for it is. // Its: "It" possesses something.', 'Grammar Nazi: use the word "An" when the next word has a vowel sound. With a few exceptions like "utopia" which has a "Y" sound.', 'Grammar Nazi: Don’t add an apostrophe when the word is a plural!', 'Grammar Nazi: Let’s eat grandma. Let’s eat, grandma. Lesson learned: Don’t eat grandma and put a comma.', 'Grammar Nazi: “Attain” means “reach” and “obtain” means “get.” You attain a mountaintop, but obtain a rare baseball card.', 'Grammar Nazi: “As of yet” is a windy and pretentious substitute for plain old English “yet” or “as yet,” an unjustified extension of the pattern in sentences like “as of Friday the 27th of May.”', 'Grammar Nazi: The casual spellings “altho” and “tho” are not acceptable in formal or edited English. Stick with “although” and “though.”', 'Grammar Nazi: A “bazaar” is a market where miscellaneous goods are sold. “Bizarre,” in contrast, is an adjective meaning “strange,” “weird.”', 'Grammar Nazi: “Calvary,” always capitalized, is the hill on which Jesus was crucified. It means “hill of skulls.” Soldiers mounted on horseback are cavalry.', 'Grammar Nazi: In the US the barrier preventing a flood is called a “dike.” “Dyke” is a term for a type of lesbian, generally considered insulting but adopted as a label for themselves by some lesbians. Nom nom nom', 'Grammar Nazi: Although “dove” is a common form of the past tense of “dive,” a few authorities consider “dived” preferable in formal writing.', 'Grammar Nazi: An “epoch” is a long period of time, like the Pleistocene Epoch', 'Grammar Nazi: Pitfall, a hidden or unsuspected danger or difficulty.', 'Grammar Nazi: When you shift to a new topic or activity, you segue. Many people unfamiliar with the unusual Italian spelling of the word misspell it as “segway.” This error is being encouraged by the deliberately punning name used by the manufacturers of the Segway Human Transporter.', 'Grammar Nazi: Tiramisù is Italian for “pick me up,” and is the name of a popular modern Italian dessert, commonly misspelled as tirimisù, which gives it a slightly Japanese air. The Japanese love tiramisù, but although they sometimes make it with green tea rather than coffee this misspelling isn’t their fault.', 'Grammar Nazi: In formal fencing matches, when someone is hit by an opponent’s sword it is traditional for the person hit to cry out touché (French for “touched”) to acknowledge that fact. In other contexts, we may say touché when somebody scores a point against us in an argument, or otherwise skewers us verbally.', 'Grammar Nazi: “Xmas” is not originally an attempt to exclude Christ from Christmas, but uses an abbreviation of the Greek spelling of the word “Christ” with the “X” representing the Greek letter chi. However, so few people know this that it is probably better not to use this popular abbreviation in religious contexts. So quit your bitching!', 'Grammar Nazi: In some dialects it’s common to say “you’ve got a ways to go before you’ve saved enough to buy a Miata,” but in standard English it’s “a way to go.”', 'Grammar Nazi: Than is a comparision. Then is time based.', 'Grammar Nazi: If you’re dying you need help. If you’re dyeing clothes you might get dirty.', 'Grammar Nazi: '];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);

			} else if (cmd == cmdChar+"grammer" || cmd == cmdChar+"gramer" || cmd == cmdChar+"gramar") {		  //grammer command for fun
                var textArray = ['Close, but no cigar!', 'Nice going...', 'You moronic fool!', 'Even slurpy squid can spell grammar!', 'Grammar* You imbecile!', 'You sir, are not educated!', 'Did you wake up on the wrong side of the barn?', 'Are you daft?', 'I\'ll slap your mother!'];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);

			} else if (cmd == cmdChar+"joke") {		    		//joke command
                var textArray = ['You can tune a piano but you can’t tuna fish.',
				'What sounds does a Bee make? A B#!', 'What do you get when you drop a piano on an army base? A flat major.',
				'A note left form a pianist for his wife: “Gone Chopin, (have Liszt), Bach in a Minuet.”',
				'What did the pianist say to a tightrope walker? You better C sharp or you’ll B flat.',
				'What do you call a fish musician? A piano tuna.',
				'Why was the pianist arrested?  Because he got into treble.',
				'What’s the difference between a piano and an onion?  No one cries when you chop up a piano.',
				'Did you hear about the circus fire? It was in tents! (Intense)', 'Two guys walk into a bar... the 3rd guy ducked.',
				'A blonde gets her haircut while wearing a pair of headphones. The hairdresser asks her to take them off, but she protests that she’ll die without them. The hairdresser sighs, and starts cutting the hair around the headphones. Soon, the blonde falls asleep, and the hairdresser removes the headphones. A few minutes later, the blonde collapses, dead on the floor. Alarmed, the hairdresser puts the headphones to his ear and hears, "Breathe in. Breathe out."',
				'Yo Mama’s so fat, it takes 2 trains and a bus to get to her good side.',
				'What do you get when you drop a piano down a mine shaft? A flat minor.',
				'What do you call a grizzly bear with no teeth? A gummy bear.',
				'it’s funny how after an argument is over you start to think about more clever shit you could have said.',
				'Wifi went down for five minutes, so I had to talk to my family. They seem like nice people.',
				'There are plenty of fish in the sea... too bad I suck at fishing.',
				'My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his head.',
				'How much is this torture device, sir? That\'s a wedding ring...',
				'What did the drummer get on his I.Q. Test? Saliva.',
				'How does a bass player change a light bulb? He doesn’t. The pianist does it with his left hand.',
				'What do you call a beautiful woman on a trombonist’s arm? A tattoo.',
				'What is the dynamic range of a bass trombone? On or off.',
				'Why did the chicken cross the road? To get away from the bassoon recital.',
				'What’s the difference between a bass trombone and a chainsaw? It’s easier to improvise on a chainsaw.',
				'Why are a pianist’s fingers like lightning? Because they rarely strike the same place twice.',
				'What is Harry Potter’s favourite mint? Dementoes.',
				'Give a man a fire and he is warm for a day. Set a man on fire and he is warm for the rest of his life* Quote by Terry Pratchett, Famous author',
				'What do you call a Jewish pokémon trainer? Ash.',
				'What if a girls tonsils were ticklish and when she was giving you head she laughed non stop?',
				'I used to be a banker but I lost interest.',
				'I’m glad I know sign language, it’s pretty handy.',
				'I couldn’t quite remember how to throw a boomerang, but eventually it came back to me.',
				'I don’t trust these stairs because they’re always up to something.',
				'Why was the painter killed? He dyed in a car accident.',
				'[Patient] Doctor, doctor! People keep Ignoring me! [Doctor] Next patient, please.',
				'Why did the sperm cross the road? I accidently put on the wrong sock.',
				'I\'m guaranteed to shag the missus up the arse tonight. She\'s dyslexic and thinks it\'s Vaseline Day.',
				'You can\'t spell "therapist" without "rapist".',
				'If you ever visit the amazon rain forest don\'t forget to cut down shit tons of trees. New studies show that trees block sunlight from animals']; //’ (apostrophe) //Thanks to various people giving me some awesome jokes on MPP!
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);


				//Music theory by Logan
				//It's not very optimised and takes up way too much space. I'm not sure how to make it more compact.
				//chords
				} else if (message.substring(0, 13).toLowerCase() == cmdChar+"music theory" || cmd == cmdChar+"mt") { 	//music theory command
                sendChat("Music Theory Index: "+cmdChar+"chords (list of chords), "+cmdChar+"scales (list of scales C-G), "+cmdChar+"scales2 (list of scales Ab-X), "+cmdChar+"glossary (music terminology) [Unfinished!!]");

				} else if (cmd == cmdChar+"chords") {	//Chords
				 sendChat("Chords Index: "+cmdChar+"cmajor, "+cmdChar+"cminor, "+cmdChar+"cmaj7, "+cmdChar+"cmin7, "+cmdChar+"cminmaj, "+cmdChar+"cdom7, "+cmdChar+"cdom7sus4, "+cmdChar+"cdim, "+cmdChar+"cdim7, "+cmdChar+"chalfdim, "+cmdChar+"caug, "+cmdChar+"caug7, "+cmdChar+"caugmaj7, "+cmdChar+"csus2, "+cmdChar+"csus4 [Unfinished!!]");

				} else if (cmd == cmdChar+"cmajor") {	//C major
					sendChat("A major triad is a chord having a root, a major third, and a perfect fifth.");
					sendChat("C major triad PC notes - etu");
					{setTimeout(function() { press("c2"); press("e2"); press("g2") }, 0);}
					{setTimeout(function() { press("c2"); press("e2"); press("g2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("e2")}, 6000);}
					{setTimeout(function() { press("g2")}, 7000);}


				} else if (cmd == cmdChar+"cdom7") {	//C Dominant seventh
					sendChat("A dominant seventh chord is a chord composed of a root, major third, perfect fifth, and minor seventh. It can be also viewed as a major triad with an additional minor seventh.");
					sendChat("C7 PC notes - etu9");
					{setTimeout(function() { press("c2"); press("e2"); press("g2"); press("as2") }, 0);}
					{setTimeout(function() { press("c2"); press("e2"); press("g2"); press("as2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("e2")}, 6000);}
					{setTimeout(function() { press("g2")}, 7000);}
					{setTimeout(function() { press("as2")}, 8000);}

				} else if (cmd == cmdChar+"cdom7sus4") {	//C Dominant seventh suspended 4th
					sendChat("A dominant seventh suspended 4th chord is a chord composed of a root, perfect fourth, perfect fifth, and minor seventh.");
					sendChat("C7(sus) PC notes - eyu9");
					{setTimeout(function() { press("c2"); press("f2"); press("g2"); press("as2") }, 0);}
					{setTimeout(function() { press("c2"); press("f2"); press("g2"); press("as2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("f2")}, 6000);}
					{setTimeout(function() { press("g2")}, 7000);}
					{setTimeout(function() { press("as2")}, 8000);}

				} else if (cmd == cmdChar+"cmaj7") {		//C major seventh
					sendChat("A major seventh chord is a seventh chord where the \"third\" note is a major third above the root, and the \"seventh\" note is a major seventh above the root (a fifth above the third note).");
					sendChat("Cmaj7 PC notes - etuo");
					{setTimeout(function() { press("c2"); press("e2"); press("g2"); press("b2") }, 0);}
					{setTimeout(function() { press("c2"); press("e2"); press("g2"); press("b2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("e2")}, 6000);}
					{setTimeout(function() { press("g2")}, 7000);}
					{setTimeout(function() { press("b2")}, 8000);}

				} else if (cmd == cmdChar+"cminor") {	//C minor
					sendChat("A minor triad is a chord having a root, a minor third, and a perfect fifth.");
					sendChat("C minor triad PC notes - e5u");
					{setTimeout(function() { press("c2"); press("ds2"); press("g2") }, 0);}
					{setTimeout(function() { press("c2"); press("ds2"); press("g2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("ds2")}, 6000);}
					{setTimeout(function() { press("g2")}, 7000);}

				} else if (cmd == cmdChar+"cmin7") {		//C minor seventh
					sendChat("A minor seventh chord is any non-dominant seventh chord where the \"third\" note is a minor third above the root.");
					sendChat("Cmin7 PC notes - e5u9");
					{setTimeout(function() { press("c2"); press("ds2"); press("g2"); press("as2") }, 0);}
					{setTimeout(function() { press("c2"); press("ds2"); press("g2"); press("as2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("ds2")}, 6000);}
					{setTimeout(function() { press("g2")}, 7000);}
					{setTimeout(function() { press("as2")}, 8000);}

				} else if (cmd == cmdChar+"cminmaj") {		//C minor major seventh
					sendChat("The minor major seventh chord is a diatonic non-dominant seventh chord in the harmonic minor scale. The chord is built on a root, with the intervals of a minor third, a major third above that note and above that a major third");
					sendChat("Cminmaj PC notes - e5uo");
					{setTimeout(function() { press("c2"); press("ds2"); press("g2"); press("b2") }, 0);}
					{setTimeout(function() { press("c2"); press("ds2"); press("g2"); press("b2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("ds2")}, 6000);}
					{setTimeout(function() { press("g2")}, 7000);}
					{setTimeout(function() { press("b2")}, 8000);}

				} else if (cmd == cmdChar+"cdim") {	//C diminished
					sendChat("A diminished triad is a triad consisting of two minor thirds above the root.");
					sendChat("C diminished triad PC notes - e57");
					{setTimeout(function() { press("c2"); press("ds2"); press("fs2") }, 0);}
					{setTimeout(function() { press("c2"); press("ds2"); press("fs2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("ds2")}, 6000);}
					{setTimeout(function() { press("fs2")}, 7000);}

				} else if (cmd == cmdChar+"cdim7") {	//C diminished seventh
					sendChat("A diminished seventh is an interval produced by narrowing a minor seventh by a chromatic semitone.");
					sendChat("Cdim7 PC notes - e57i (this is my favourite chord)");
					{setTimeout(function() { press("c2"); press("ds2"); press("fs2"); press("a2") }, 0);}
					{setTimeout(function() { press("c2"); press("ds2"); press("fs2"); press("a2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("ds2")}, 6000);}
					{setTimeout(function() { press("fs2")}, 7000);}
					{setTimeout(function() { press("a2")}, 8000);}

				} else if (cmd == cmdChar+"chalfdim") {	//C half diminished
					sendChat("A half diminished chord is composed by a root note, together with a minor third, a diminished fifth and a minor seventh from root.");
					sendChat("Chalfdim PC notes - e579");
					{setTimeout(function() { press("c2"); press("ds2"); press("fs2"); press("as2") }, 0);}
					{setTimeout(function() { press("c2"); press("ds2"); press("fs2"); press("as2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("ds2")}, 6000);}
					{setTimeout(function() { press("fs2")}, 7000);}
					{setTimeout(function() { press("as2")}, 8000);}


				} else if (cmd == cmdChar+"caug") {	//C Augmented
					sendChat("An augmented triad is a triad, or chord, consisting of two major thirds (an augmented fifth).");
					sendChat("C augmented triad PC notes - et8 (second favourite chord)");
					{setTimeout(function() { press("c2"); press("e2"); press("gs2") }, 0);}
					{setTimeout(function() { press("c2"); press("e2"); press("gs2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("e2")}, 6000);}
					{setTimeout(function() { press("gs2")}, 7000);}

				} else if (cmd == cmdChar+"caug7") {	//C Augmented seventh
					sendChat("An augmented seventh chord is a dominant seventh chord consisting of an augmented triad with a minor seventh.");
					sendChat("Caug7 PC notes - et89");
					{setTimeout(function() { press("c2"); press("e2"); press("gs2"); press("as2") }, 0);}
					{setTimeout(function() { press("c2"); press("e2"); press("gs2"); press("as2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("e2")}, 6000);}
					{setTimeout(function() { press("gs2")}, 7000);}
					{setTimeout(function() { press("as2")}, 8000);}

				} else if (cmd == cmdChar+"caugmaj7") {	//C Augmented major seventh
					sendChat("An augmented major seventh chord is a nondominant seventh chord and is associated with the augmented scale.");
					sendChat("Caugmaj7 PC notes - et8o");
					{setTimeout(function() { press("c2"); press("e2"); press("gs2"); press("b2") }, 0);}
					{setTimeout(function() { press("c2"); press("e2"); press("gs2"); press("b2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("e2")}, 6000);}
					{setTimeout(function() { press("gs2")}, 7000);}
					{setTimeout(function() { press("b2")}, 8000);}

				} else if (cmd == cmdChar+"csus2") {	//C suspended second
					sendChat("A suspended second chord (sus2 chord) is a musical chord in which the (major or minor) third is omitted and replaced with a major second.");
					sendChat("Csus2 PC notes - eru");
					{setTimeout(function() { press("c2"); press("d2"); press("g2") }, 0);}
					{setTimeout(function() { press("c2"); press("d2"); press("g2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("d2")}, 6000);}
					{setTimeout(function() { press("g2")}, 7000);}

				} else if (cmd == cmdChar+"csus4") {	//C suspended fourth
					sendChat("A suspended fourth chord (sus4 chord or usually referred to as just sus) is a musical chord in which the (major or minor) third is omitted and replaced with a perfect fourth.");
					sendChat("Csus PC notes - eyu");
					{setTimeout(function() { press("c2"); press("f2"); press("g2") }, 0);}
					{setTimeout(function() { press("c2"); press("f2"); press("g2") }, 3000);}
					{setTimeout(function() { press("c2")}, 5000);}
					{setTimeout(function() { press("f2")}, 6000);}
					{setTimeout(function() { press("g2")}, 7000);}
				//chords

				//scales
				} else if (cmd == cmdChar+"scales") {		//Scales
					sendChat("Scales Index C-F#: "+cmdChar+"scale cmajor, "+cmdChar+"scale cminor, "+cmdChar+"scale charminor, "+cmdChar+"scale cmelminor, "+cmdChar+"scale csmajor, "+cmdChar+"scale csminor, "+cmdChar+"scale csharminor, "+cmdChar+"scale csmelminor, "+cmdChar+"scale dmajor, "+cmdChar+"scale dminor, "+cmdChar+"scale dharminor, "+cmdChar+"scale dmelminor, "+cmdChar+"scale ebmajor, "+cmdChar+"scale ebminor, "+cmdChar+"scale ebharminor, "+cmdChar+"scale ebmelminor, "+cmdChar+"scale emajor, "+cmdChar+"scale eminor, "+cmdChar+"scale eharminor, "+cmdChar+"scale emelminor, "+cmdChar+"scale fmajor, "+cmdChar+"scale fminor, "+cmdChar+"scale fharminor, "+cmdChar+"scale fmelminor, "+cmdChar+"scale fsmajor, "+cmdChar+"scale fsminor, "+cmdChar+"scale fsharminor, "+cmdChar+"scale fsmelminor");

				 } else if (cmd == cmdChar+"scales2") {	//Scales 2
					sendChat("Scales Index 2 G-B: "+cmdChar+"scale gmajor, "+cmdChar+"scale gminor, "+cmdChar+"scale gharminor, "+cmdChar+"scale gmelminor "+cmdChar+"scale abmajor, "+cmdChar+"scale abminor, "+cmdChar+"scale abharminor, "+cmdChar+"scale abmelminor, "+cmdChar+"scale amajor, "+cmdChar+"scale aminor, "+cmdChar+"scale aharminor, "+cmdChar+"scale amelminor, "+cmdChar+"scale bbmajor, "+cmdChar+"scale bbminor, "+cmdChar+"scale bbharminor, "+cmdChar+"scale bbmelminor, "+cmdChar+"scale bmajor, "+cmdChar+"scale bminor, "+cmdChar+"scale bharminor, "+cmdChar+"scale bmelminor");

				 //C scales
				 } else if (message.substring(0, 13).toLowerCase() == cmdChar+"scale cmajor") {	//C major scale
					sendChat("The C major scale - it has no flats or sharps - its relative minor is A");
					sendChat("The C major PC notes - e r t y u i o p");
					{setTimeout(function() { press("c2")}, 0);}
					{setTimeout(function() { press("d2")}, 250);}
					{setTimeout(function() { press("e2")}, 500);}
					{setTimeout(function() { press("f2")}, 750);}
					{setTimeout(function() { press("g2")}, 1000);}
					{setTimeout(function() { press("a2")}, 1250);}
					{setTimeout(function() { press("b2")}, 1500);}
					{setTimeout(function() { press("c3")}, 1750);}
					{setTimeout(function() { press("b2")}, 2000);}
					{setTimeout(function() { press("a2")}, 2250);}
					{setTimeout(function() { press("g2")}, 2500);}
					{setTimeout(function() { press("f2")}, 2750);}
					{setTimeout(function() { press("e2")}, 3000);}
					{setTimeout(function() { press("d2")}, 3250);}
					{setTimeout(function() { press("c2")}, 3500);}
					{setTimeout(function() { press("c2"); press("e2"); press("g2"); press("c3")}, 4000);}

				} else if (message.substring(0, 13).toLowerCase() == cmdChar+"scale cminor") {	//C minor scale
					sendChat("The C minor scale - it has 3 flats - its relative major is Eb");
					sendChat("The C minor PC notes - e r 5 y u 8 9 p");
					var scale_cminor = [[0,"c2"],[250,"d2"],[250,"ds2"],[250,"f2"],[250,"g2"],[250,"gs2"],[250,"as2"],[250,"c3"],[250,"as2"],[250,"gs2"],[250,"g2"],[250,"f2"],[250,"ds2"],[250,"d2"],[250,"c2"]];
					var playID = 0;

				function playMisc(arr){
					//if(playID != 0){clearInterval(playID);}
					if(playID != 0) {clearTimeout(playID);playID=0}
					var pNum = 0;
					var f = function () {
						for(var p=1; p<arr[pNum].length; p++){
							MPP.press(arr[pNum][p]);
						}
						if(++pNum >= arr.length) {clearTimeout(playID);playID=0;return;}
						setTimeout(f,arr[pNum][0]);
					}
					setTimeout(f,arr[pNum][0]);
				}

				//test Play
				playMisc(scale_cminor);

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale charminor") {	//C harmonic minor scale
					 sendChat("The C harmonic minor scale - it has 2 flats - it has a major 7th (B)");
					 sendChat("The C harmonic minor PC notes - e r 5 y u 8 o p");
					{setTimeout(function() { press("c2")}, 0);}
					{setTimeout(function() { press("d2")}, 250);}
					{setTimeout(function() { press("ds2")}, 500);}
					{setTimeout(function() { press("f2")}, 750);}
					{setTimeout(function() { press("g2")}, 1000);}
					{setTimeout(function() { press("gs2")}, 1250);}
					{setTimeout(function() { press("b2")}, 1500);}
					{setTimeout(function() { press("c3")}, 1750);}
					{setTimeout(function() { press("b2")}, 2000);}
					{setTimeout(function() { press("gs2")}, 2250);}
					{setTimeout(function() { press("g2")}, 2500);}
					{setTimeout(function() { press("f2")}, 2750);}
					{setTimeout(function() { press("ds2")}, 3000);}
					{setTimeout(function() { press("d2")}, 3250);}
					{setTimeout(function() { press("c2")}, 3500);}
					{setTimeout(function() { press("c2"); press("ds2"); press("g2"); press("c3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale cmelminor") {	//C melodic minor scale
					 sendChat("The C melodic minor scale - it has 1 flat ascending and 3 flats descending - it has two patterns ascending and descending.");
					 sendChat("The C melodic minor PC notes - e r 5 y u i o p 9 8 u y 5 r e");
					{setTimeout(function() { press("c2")}, 0);}
					{setTimeout(function() { press("d2")}, 250);}
					{setTimeout(function() { press("ds2")}, 500);}
					{setTimeout(function() { press("f2")}, 750);}
					{setTimeout(function() { press("g2")}, 1000);}
					{setTimeout(function() { press("a2")}, 1250);}
					{setTimeout(function() { press("b2")}, 1500);}
					{setTimeout(function() { press("c3")}, 1750);}
					{setTimeout(function() { press("as2")}, 2000);}
					{setTimeout(function() { press("gs2")}, 2250);}
					{setTimeout(function() { press("g2")}, 2500);}
					{setTimeout(function() { press("f2")}, 2750);}
					{setTimeout(function() { press("ds2")}, 3000);}
					{setTimeout(function() { press("d2")}, 3250);}
					{setTimeout(function() { press("c2")}, 3500);}
					{setTimeout(function() { press("c2"); press("ds2"); press("g2"); press("c3")}, 4000);}
				//C scales

				//C# scales
				 } else if (message.substring(0, 14).toLowerCase() == cmdChar+"scale csmajor") {	//C# major scale
					sendChat("The C# (sharp) major scale - it has 7 sharps - its relative minor is A#");
					sendChat("The C# (sharp) major PC notes - 4 5 y 7 8 9 p -");
					{setTimeout(function() { press("cs2")}, 0);}
					{setTimeout(function() { press("ds2")}, 250);}
					{setTimeout(function() { press("f2")}, 500);}
					{setTimeout(function() { press("fs2")}, 750);}
					{setTimeout(function() { press("gs2")}, 1000);}
					{setTimeout(function() { press("as2")}, 1250);}
					{setTimeout(function() { press("c3")}, 1500);}
					{setTimeout(function() { press("cs3")}, 1750);}
					{setTimeout(function() { press("c3")}, 2000);}
					{setTimeout(function() { press("as2")}, 2250);}
					{setTimeout(function() { press("gs2")}, 2500);}
					{setTimeout(function() { press("fs2")}, 2750);}
					{setTimeout(function() { press("f2")}, 3000);}
					{setTimeout(function() { press("ds2")}, 3250);}
					{setTimeout(function() { press("cs2")}, 3500);}
					{setTimeout(function() { press("cs2"); press("f2"); press("gs2"); press("cs3")}, 4000);}

				} else if (message.substring(0, 14).toLowerCase() == cmdChar+"scale csminor") {	//C# minor scale
					sendChat("The C# (sharp) minor scale - it has 4 sharps - its relative major is E");
					sendChat("The C# (sharp) major PC notes - f g b j k q . 4");
					{setTimeout(function() { press("cs2")}, 0);}
					{setTimeout(function() { press("ds2")}, 250);}
					{setTimeout(function() { press("e2")}, 500);}
					{setTimeout(function() { press("fs2")}, 750);}
					{setTimeout(function() { press("gs2")}, 1000);}
					{setTimeout(function() { press("a2")}, 1250);}
					{setTimeout(function() { press("b2")}, 1500);}
					{setTimeout(function() { press("cs3")}, 1750);}
					{setTimeout(function() { press("b2")}, 2000);}
					{setTimeout(function() { press("a2")}, 2250);}
					{setTimeout(function() { press("gs2")}, 2500);}
					{setTimeout(function() { press("fs2")}, 2750);}
					{setTimeout(function() { press("e2")}, 3000);}
					{setTimeout(function() { press("ds2")}, 3250);}
					{setTimeout(function() { press("cs2")}, 3500);}
					{setTimeout(function() { press("cs2"); press("e2"); press("gs2"); press("cs3")}, 4000);}

				} else if (message.substring(0, 17).toLowerCase() == cmdChar+"scale csharminor") {	//C# harmonic minor scale
					sendChat("The C# (sharp) harmonic minor scale - it has 2 flats - it has a major 7th (C)");
					sendChat("The C# (sharp) harmonic minor PC notes - 4 5 t 7 8 i p -");
					{setTimeout(function() { press("cs2")}, 0);}
					{setTimeout(function() { press("ds2")}, 250);}
					{setTimeout(function() { press("e2")}, 500);}
					{setTimeout(function() { press("fs2")}, 750);}
					{setTimeout(function() { press("gs2")}, 1000);}
					{setTimeout(function() { press("a2")}, 1250);}
					{setTimeout(function() { press("c3")}, 1500);}
					{setTimeout(function() { press("cs3")}, 1750);}
					{setTimeout(function() { press("c3")}, 2000);}
					{setTimeout(function() { press("a2")}, 2250);}
					{setTimeout(function() { press("gs2")}, 2500);}
					{setTimeout(function() { press("fs2")}, 2750);}
					{setTimeout(function() { press("e2")}, 3000);}
					{setTimeout(function() { press("ds2")}, 3250);}
					{setTimeout(function() { press("cs2")}, 3500);}
					{setTimeout(function() { press("cs2"); press("e2"); press("gs2"); press("cs3")}, 4000);}

				} else if (message.substring(0, 17).toLowerCase() == cmdChar+"scale csmelminor") {	//C# melodic minor scale
					sendChat("The C# (sharp) melodic minor scale - it has 7 sharps ascending and 5 sharps descending - it has two patterns ascending and descending.");
					sendChat("The C# (sharp) melodic minor PC notes - 4 5 t 7 8 9 p -  o i 8 7 t 5 4");
					{setTimeout(function() { press("cs2")}, 0);}
					{setTimeout(function() { press("ds2")}, 250);}
					{setTimeout(function() { press("e2")}, 500);}
					{setTimeout(function() { press("fs2")}, 750);}
					{setTimeout(function() { press("gs2")}, 1000);}
					{setTimeout(function() { press("as2")}, 1250);}
					{setTimeout(function() { press("c3")}, 1500);}
					{setTimeout(function() { press("cs3")}, 1750);}
					{setTimeout(function() { press("b2")}, 2000);}
					{setTimeout(function() { press("a2")}, 2250);}
					{setTimeout(function() { press("gs2")}, 2500);}
					{setTimeout(function() { press("fs2")}, 2750);}
					{setTimeout(function() { press("e2")}, 3000);}
					{setTimeout(function() { press("ds2")}, 3250);}
					{setTimeout(function() { press("cs2")}, 3500);}
					{setTimeout(function() { press("cs2"); press("e2"); press("gs2"); press("cs3")}, 4000);}
				//C# scales

				//D scales
				 } else if (message.substring(0, 13).toLowerCase() == cmdChar+"scale dmajor") {	//D major scale
					 sendChat("The D major scale - it has 2 sharps - its relative minor is B");
					 sendChat("The D major scale PC notes - r t 7 u i o - [");
					{setTimeout(function() { press("d2")}, 0);}
					{setTimeout(function() { press("e2")}, 250);}
					{setTimeout(function() { press("fs2")}, 500);}
					{setTimeout(function() { press("g2")}, 750);}
					{setTimeout(function() { press("a2")}, 1000);}
					{setTimeout(function() { press("b2")}, 1250);}
					{setTimeout(function() { press("cs3")}, 1500);}
					{setTimeout(function() { press("d3")}, 1750);}
					{setTimeout(function() { press("cs3")}, 2000);}
					{setTimeout(function() { press("b2")}, 2250);}
					{setTimeout(function() { press("a2")}, 2500);}
					{setTimeout(function() { press("g2")}, 2750);}
					{setTimeout(function() { press("fs2")}, 3000);}
					{setTimeout(function() { press("e2")}, 3250);}
					{setTimeout(function() { press("d2")}, 3500);}
					{setTimeout(function() { press("d2"); press("fs2"); press("a2"); press("d3")}, 4000);}

				} else if (message.substring(0, 13).toLowerCase() == cmdChar+"scale dminor") {	//D minor scale
				 sendChat("The D minor scale - it has 2 sharps - its relative major is F");
				 sendChat("The D minor scale PC notes - r t 7 u i o - [");
				{setTimeout(function() { press("d2")}, 0);}
				{setTimeout(function() { press("e2")}, 250);}
				{setTimeout(function() { press("f2")}, 500);}
				{setTimeout(function() { press("g2")}, 750);}
				{setTimeout(function() { press("a2")}, 1000);}
				{setTimeout(function() { press("as2")}, 1250);}
				{setTimeout(function() { press("c3")}, 1500);}
				{setTimeout(function() { press("d3")}, 1750);}
				{setTimeout(function() { press("c3")}, 2000);}
				{setTimeout(function() { press("as2")}, 2250);}
				{setTimeout(function() { press("a2")}, 2500);}
				{setTimeout(function() { press("g2")}, 2750);}
				{setTimeout(function() { press("f2")}, 3000);}
				{setTimeout(function() { press("e2")}, 3250);}
				{setTimeout(function() { press("d2")}, 3500);}
				{setTimeout(function() { press("d2"); press("f2"); press("a2"); press("d3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale dharminor") {	//D harmonic minor scale
				 sendChat("The D harmonic minor scale - it has 2 sharps - it has a major 7th (C#)");
				{setTimeout(function() { press("d2")}, 0);}
				{setTimeout(function() { press("e2")}, 250);}
				{setTimeout(function() { press("f2")}, 500);}
				{setTimeout(function() { press("g2")}, 750);}
				{setTimeout(function() { press("a2")}, 1000);}
				{setTimeout(function() { press("as2")}, 1250);}
				{setTimeout(function() { press("cs3")}, 1500);}
				{setTimeout(function() { press("d3")}, 1750);}
				{setTimeout(function() { press("cs3")}, 2000);}
				{setTimeout(function() { press("as2")}, 2250);}
				{setTimeout(function() { press("a2")}, 2500);}
				{setTimeout(function() { press("g2")}, 2750);}
				{setTimeout(function() { press("f2")}, 3000);}
				{setTimeout(function() { press("e2")}, 3250);}
				{setTimeout(function() { press("d2")}, 3500);}
				{setTimeout(function() { press("d2"); press("f2"); press("a2"); press("d3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale dmelminor") {	//D melodic minor scale
				 sendChat("The D melodic minor scale - it has 1 flat ascending and 3 flats descending - it has two patterns ascending and descending.");
				{setTimeout(function() { press("d2")}, 0);}
				{setTimeout(function() { press("e2")}, 250);}
				{setTimeout(function() { press("f2")}, 500);}
				{setTimeout(function() { press("g2")}, 750);}
				{setTimeout(function() { press("a2")}, 1000);}
				{setTimeout(function() { press("b2")}, 1250);}
				{setTimeout(function() { press("cs3")}, 1500);}
				{setTimeout(function() { press("d3")}, 1750);}
				{setTimeout(function() { press("c3")}, 2000);}
				{setTimeout(function() { press("as2")}, 2250);}
				{setTimeout(function() { press("a2")}, 2500);}
				{setTimeout(function() { press("g2")}, 2750);}
				{setTimeout(function() { press("f2")}, 3000);}
				{setTimeout(function() { press("e2")}, 3250);}
				{setTimeout(function() { press("d2")}, 3500);}
				{setTimeout(function() { press("d2"); press("f2"); press("a2"); press("d3")}, 4000);}
				//D scales

				//Eb scales
				} else if (message.substring(0, 14).toLowerCase() == cmdChar+"scale ebmajor") {	//Eb major scale
				 sendChat("The Eb (flat) major scale - it has 3 flats - its relative minor is C");
				{setTimeout(function() { press("ds2")}, 0);}
				{setTimeout(function() { press("f2")}, 250);}
				{setTimeout(function() { press("g2")}, 500);}
				{setTimeout(function() { press("gs2")}, 750);}
				{setTimeout(function() { press("as2")}, 1000);}
				{setTimeout(function() { press("c3")}, 1250);}
				{setTimeout(function() { press("d3")}, 1500);}
				{setTimeout(function() { press("ds3")}, 1750);}
				{setTimeout(function() { press("d3")}, 2000);}
				{setTimeout(function() { press("c3")}, 2250);}
				{setTimeout(function() { press("as2")}, 2500);}
				{setTimeout(function() { press("gs2")}, 2750);}
				{setTimeout(function() { press("g2")}, 3000);}
				{setTimeout(function() { press("f2")}, 3250);}
				{setTimeout(function() { press("ds2")}, 3500);}
				{setTimeout(function() { press("ds2"); press("g2"); press("as2"); press("ds3")}, 4000);}

				} else if (message.substring(0, 14).toLowerCase() == cmdChar+"scale ebminor") {	//Eb minor scale
				 sendChat("The Eb (flat) minor scale - it has 6 flats - its relative major is Gb");
				{setTimeout(function() { press("ds2")}, 0);}
				{setTimeout(function() { press("f2")}, 250);}
				{setTimeout(function() { press("fs2")}, 500);}
				{setTimeout(function() { press("gs2")}, 750);}
				{setTimeout(function() { press("as2")}, 1000);}
				{setTimeout(function() { press("b2")}, 1250);}
				{setTimeout(function() { press("cs3")}, 1500);}
				{setTimeout(function() { press("ds3")}, 1750);}
				{setTimeout(function() { press("cs3")}, 2000);}
				{setTimeout(function() { press("b2")}, 2250);}
				{setTimeout(function() { press("as2")}, 2500);}
				{setTimeout(function() { press("gs2")}, 2750);}
				{setTimeout(function() { press("fs2")}, 3000);}
				{setTimeout(function() { press("f2")}, 3250);}
				{setTimeout(function() { press("ds2")}, 3500);}
				{setTimeout(function() { press("ds2"); press("fs2"); press("as2"); press("ds3")}, 4000);}

				} else if (message.substring(0, 17).toLowerCase() == cmdChar+"scale ebharminor") {	//Eb harmonic minor scale
				 sendChat("The Eb (flat) harmonic minor scale - it has 5 flats - it has a major 7th (D)");
				{setTimeout(function() { press("ds2")}, 0);}
				{setTimeout(function() { press("f2")}, 250);}
				{setTimeout(function() { press("fs2")}, 500);}
				{setTimeout(function() { press("gs2")}, 750);}
				{setTimeout(function() { press("as2")}, 1000);}
				{setTimeout(function() { press("b2")}, 1250);}
				{setTimeout(function() { press("d3")}, 1500);}
				{setTimeout(function() { press("ds3")}, 1750);}
				{setTimeout(function() { press("d3")}, 2000);}
				{setTimeout(function() { press("b2")}, 2250);}
				{setTimeout(function() { press("as2")}, 2500);}
				{setTimeout(function() { press("gs2")}, 2750);}
				{setTimeout(function() { press("fs2")}, 3000);}
				{setTimeout(function() { press("f2")}, 3250);}
				{setTimeout(function() { press("ds2")}, 3500);}
				{setTimeout(function() { press("ds2"); press("fs2"); press("as2"); press("ds3")}, 4000);}

				} else if (message.substring(0, 17).toLowerCase() == cmdChar+"scale ebmelminor") {	//Eb melodic minor scale
				 sendChat("The Eb (flat) melodic minor scale - it has 5 flats ascending and 6 flats descending - it has two patterns ascending and descending.");
				{setTimeout(function() { press("ds2")}, 0);}
				{setTimeout(function() { press("f2")}, 250);}
				{setTimeout(function() { press("fs2")}, 500);}
				{setTimeout(function() { press("gs2")}, 750);}
				{setTimeout(function() { press("as2")}, 1000);}
				{setTimeout(function() { press("c3")}, 1250);}
				{setTimeout(function() { press("d3")}, 1500);}
				{setTimeout(function() { press("ds3")}, 1750);}
				{setTimeout(function() { press("cs3")}, 2000);}
				{setTimeout(function() { press("b2")}, 2250);}
				{setTimeout(function() { press("as2")}, 2500);}
				{setTimeout(function() { press("gs2")}, 2750);}
				{setTimeout(function() { press("fs2")}, 3000);}
				{setTimeout(function() { press("f2")}, 3250);}
				{setTimeout(function() { press("ds2")}, 3500);}
				{setTimeout(function() { press("ds2"); press("fs2"); press("as2"); press("ds3")}, 4000);}
				//Eb scales

				//E scales
				} else if (message.substring(0, 13).toLowerCase() == cmdChar+"scale emajor") {	//E major scale
				 sendChat("The E major scale - it has 4 sharps - its relative minor is C#");
				{setTimeout(function() { press("e2")}, 0);}
				{setTimeout(function() { press("fs2")}, 250);}
				{setTimeout(function() { press("gs2")}, 500);}
				{setTimeout(function() { press("a2")}, 750);}
				{setTimeout(function() { press("b2")}, 1000);}
				{setTimeout(function() { press("cs3")}, 1250);}
				{setTimeout(function() { press("ds3")}, 1500);}
				{setTimeout(function() { press("e3")}, 1750);}
				{setTimeout(function() { press("ds3")}, 2000);}
				{setTimeout(function() { press("cs3")}, 2250);}
				{setTimeout(function() { press("b2")}, 2500);}
				{setTimeout(function() { press("a2")}, 2750);}
				{setTimeout(function() { press("gs2")}, 3000);}
				{setTimeout(function() { press("fs2")}, 3250);}
				{setTimeout(function() { press("e2")}, 3500);}
				{setTimeout(function() { press("e2"); press("gs2"); press("b2"); press("e3")}, 4000);}

				} else if (message.substring(0, 13).toLowerCase() == cmdChar+"scale eminor") {	//E minor scale
				 sendChat("The E minor scale - it has 1 sharp - its relative major is G");
				{setTimeout(function() { press("e2")}, 0);}
				{setTimeout(function() { press("fs2")}, 250);}
				{setTimeout(function() { press("g2")}, 500);}
				{setTimeout(function() { press("a2")}, 750);}
				{setTimeout(function() { press("b2")}, 1000);}
				{setTimeout(function() { press("c3")}, 1250);}
				{setTimeout(function() { press("d3")}, 1500);}
				{setTimeout(function() { press("e3")}, 1750);}
				{setTimeout(function() { press("d3")}, 2000);}
				{setTimeout(function() { press("c3")}, 2250);}
				{setTimeout(function() { press("b2")}, 2500);}
				{setTimeout(function() { press("a2")}, 2750);}
				{setTimeout(function() { press("g2")}, 3000);}
				{setTimeout(function() { press("fs2")}, 3250);}
				{setTimeout(function() { press("e2")}, 3500);}
				{setTimeout(function() { press("e2"); press("g2"); press("b2"); press("e3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale eharminor") {	//E harmonic minor scale
				 sendChat("The E harmonic minor scale - it has 2 sharps - it has a major 7th (D#)");
				{setTimeout(function() { press("e2")}, 0);}
				{setTimeout(function() { press("fs2")}, 250);}
				{setTimeout(function() { press("g2")}, 500);}
				{setTimeout(function() { press("a2")}, 750);}
				{setTimeout(function() { press("b2")}, 1000);}
				{setTimeout(function() { press("c3")}, 1250);}
				{setTimeout(function() { press("ds3")}, 1500);}
				{setTimeout(function() { press("e3")}, 1750);}
				{setTimeout(function() { press("ds3")}, 2000);}
				{setTimeout(function() { press("c3")}, 2250);}
				{setTimeout(function() { press("b2")}, 2500);}
				{setTimeout(function() { press("a2")}, 2750);}
				{setTimeout(function() { press("g2")}, 3000);}
				{setTimeout(function() { press("fs2")}, 3250);}
				{setTimeout(function() { press("e2")}, 3500);}
				{setTimeout(function() { press("e2"); press("g2"); press("b2"); press("e3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale emelminor") {	//E melodic minor scale
				 sendChat("The E melodic minor scale - it has 3 sharps ascending and 1 sharp descending - it has two patterns ascending and descending.");
				{setTimeout(function() { press("e2")}, 0);}
				{setTimeout(function() { press("fs2")}, 250);}
				{setTimeout(function() { press("g2")}, 500);}
				{setTimeout(function() { press("a2")}, 750);}
				{setTimeout(function() { press("b2")}, 1000);}
				{setTimeout(function() { press("cs3")}, 1250);}
				{setTimeout(function() { press("ds3")}, 1500);}
				{setTimeout(function() { press("e3")}, 1750);}
				{setTimeout(function() { press("d3")}, 2000);}
				{setTimeout(function() { press("c3")}, 2250);}
				{setTimeout(function() { press("b2")}, 2500);}
				{setTimeout(function() { press("a2")}, 2750);}
				{setTimeout(function() { press("g2")}, 3000);}
				{setTimeout(function() { press("fs2")}, 3250);}
				{setTimeout(function() { press("e2")}, 3500);}
				{setTimeout(function() { press("e2"); press("g2"); press("b2"); press("e3")}, 4000);}
				//E scales

				//F scales
				} else if (message.substring(0, 13).toLowerCase() == cmdChar+"scale fmajor") {	//F major scale
				 sendChat("The F major scale - it has 1 flat - its relative minor is D");
				{setTimeout(function() { press("f2")}, 0);}
				{setTimeout(function() { press("g2")}, 250);}
				{setTimeout(function() { press("a2")}, 500);}
				{setTimeout(function() { press("as2")}, 750);}
				{setTimeout(function() { press("c3")}, 1000);}
				{setTimeout(function() { press("d3")}, 1250);}
				{setTimeout(function() { press("e3")}, 1500);}
				{setTimeout(function() { press("f3")}, 1750);}
				{setTimeout(function() { press("e3")}, 2000);}
				{setTimeout(function() { press("d3")}, 2250);}
				{setTimeout(function() { press("c3")}, 2500);}
				{setTimeout(function() { press("as2")}, 2750);}
				{setTimeout(function() { press("a2")}, 3000);}
				{setTimeout(function() { press("g2")}, 3250);}
				{setTimeout(function() { press("f2")}, 3500);}
				{setTimeout(function() { press("f2"); press("a2"); press("c3"); press("f3")}, 4000);}

				} else if (message.substring(0, 13).toLowerCase() == cmdChar+"scale fminor") {	//F minor scale
				 sendChat("The F minor scale - it has 4 flats - its relative major is Ab");
				{setTimeout(function() { press("f2")}, 0);}
				{setTimeout(function() { press("g2")}, 250);}
				{setTimeout(function() { press("gs2")}, 500);}
				{setTimeout(function() { press("as2")}, 750);}
				{setTimeout(function() { press("c3")}, 1000);}
				{setTimeout(function() { press("cs3")}, 1250);}
				{setTimeout(function() { press("ds3")}, 1500);}
				{setTimeout(function() { press("f3")}, 1750);}
				{setTimeout(function() { press("ds3")}, 2000);}
				{setTimeout(function() { press("cs3")}, 2250);}
				{setTimeout(function() { press("c3")}, 2500);}
				{setTimeout(function() { press("as2")}, 2750);}
				{setTimeout(function() { press("gs2")}, 3000);}
				{setTimeout(function() { press("g2")}, 3250);}
				{setTimeout(function() { press("f2")}, 3500);}
				{setTimeout(function() { press("f2"); press("gs2"); press("c3"); press("f3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale fharminor") {	//F harmonic minor scale
				 sendChat("The F harmonic minor scale - it has 3 flats - it has a major 7th (E)");
				{setTimeout(function() { press("f2")}, 0);}
				{setTimeout(function() { press("g2")}, 250);}
				{setTimeout(function() { press("gs2")}, 500);}
				{setTimeout(function() { press("as2")}, 750);}
				{setTimeout(function() { press("c3")}, 1000);}
				{setTimeout(function() { press("cs3")}, 1250);}
				{setTimeout(function() { press("e3")}, 1500);}
				{setTimeout(function() { press("f3")}, 1750);}
				{setTimeout(function() { press("e3")}, 2000);}
				{setTimeout(function() { press("cs3")}, 2250);}
				{setTimeout(function() { press("c3")}, 2500);}
				{setTimeout(function() { press("as2")}, 2750);}
				{setTimeout(function() { press("gs2")}, 3000);}
				{setTimeout(function() { press("g2")}, 3250);}
				{setTimeout(function() { press("f2")}, 3500);}
				{setTimeout(function() { press("f2"); press("gs2"); press("c3"); press("f3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale fmelminor") {	//F melodic minor scale
				 sendChat("The F melodic minor scale - it has 2 flats ascending and 4 flats descending - it has two patterns ascending and descending.");
				{setTimeout(function() { press("f2")}, 0);}
				{setTimeout(function() { press("g2")}, 250);}
				{setTimeout(function() { press("gs2")}, 500);}
				{setTimeout(function() { press("as2")}, 750);}
				{setTimeout(function() { press("c3")}, 1000);}
				{setTimeout(function() { press("d3")}, 1250);}
				{setTimeout(function() { press("e3")}, 1500);}
				{setTimeout(function() { press("f3")}, 1750);}
				{setTimeout(function() { press("ds3")}, 2000);}
				{setTimeout(function() { press("cs3")}, 2250);}
				{setTimeout(function() { press("c3")}, 2500);}
				{setTimeout(function() { press("as2")}, 2750);}
				{setTimeout(function() { press("gs2")}, 3000);}
				{setTimeout(function() { press("g2")}, 3250);}
				{setTimeout(function() { press("f2")}, 3500);}
				{setTimeout(function() { press("f2"); press("gs2"); press("c3"); press("f3")}, 4000);}
				//F scales

				//F# scales
				} else if (message.substring(0, 14).toLowerCase() == cmdChar+"scale fsmajor") {	//F# major scale
				 sendChat("The F# (sharp) major scale - it has 6 sharps - its relative minor is D#");
				{setTimeout(function() { press("fs2")}, 0);}
				{setTimeout(function() { press("gs2")}, 250);}
				{setTimeout(function() { press("as2")}, 500);}
				{setTimeout(function() { press("b2")}, 750);}
				{setTimeout(function() { press("cs3")}, 1000);}
				{setTimeout(function() { press("ds3")}, 1250);}
				{setTimeout(function() { press("f3")}, 1500);}
				{setTimeout(function() { press("fs3")}, 1750);}
				{setTimeout(function() { press("f3")}, 2000);}
				{setTimeout(function() { press("ds3")}, 2250);}
				{setTimeout(function() { press("cs3")}, 2500);}
				{setTimeout(function() { press("b2")}, 2750);}
				{setTimeout(function() { press("as2")}, 3000);}
				{setTimeout(function() { press("gs2")}, 3250);}
				{setTimeout(function() { press("fs2")}, 3500);}
				{setTimeout(function() { press("fs2"); press("as2"); press("cs3"); press("fs3")}, 4000);}

				} else if (message.substring(0, 14).toLowerCase() == cmdChar+"scale fsminor") {	//F# minor scale
				 sendChat("The F# (sharp) minor scale - it has 3 sharps - its relative major is A");
				{setTimeout(function() { press("fs2")}, 0);}
				{setTimeout(function() { press("gs2")}, 250);}
				{setTimeout(function() { press("a2")}, 500);}
				{setTimeout(function() { press("b2")}, 750);}
				{setTimeout(function() { press("cs3")}, 1000);}
				{setTimeout(function() { press("d3")}, 1250);}
				{setTimeout(function() { press("e3")}, 1500);}
				{setTimeout(function() { press("fs3")}, 1750);}
				{setTimeout(function() { press("e3")}, 2000);}
				{setTimeout(function() { press("d3")}, 2250);}
				{setTimeout(function() { press("cs3")}, 2500);}
				{setTimeout(function() { press("b2")}, 2750);}
				{setTimeout(function() { press("a2")}, 3000);}
				{setTimeout(function() { press("gs2")}, 3250);}
				{setTimeout(function() { press("fs2")}, 3500);}
				{setTimeout(function() { press("fs2"); press("a2"); press("cs3"); press("fs3")}, 4000);}

				} else if (message.substring(0, 17).toLowerCase() == cmdChar+"scale fsharminor") {	//F# harmonic minor scale
				 sendChat("The F# (sharp) harmonic minor scale - it has 4 sharps - it has a major 7th (E#)");
				{setTimeout(function() { press("fs2")}, 0);}
				{setTimeout(function() { press("gs2")}, 250);}
				{setTimeout(function() { press("a2")}, 500);}
				{setTimeout(function() { press("b2")}, 750);}
				{setTimeout(function() { press("cs3")}, 1000);}
				{setTimeout(function() { press("d3")}, 1250);}
				{setTimeout(function() { press("f3")}, 1500);}
				{setTimeout(function() { press("fs3")}, 1750);}
				{setTimeout(function() { press("f3")}, 2000);}
				{setTimeout(function() { press("d3")}, 2250);}
				{setTimeout(function() { press("cs3")}, 2500);}
				{setTimeout(function() { press("b2")}, 2750);}
				{setTimeout(function() { press("a2")}, 3000);}
				{setTimeout(function() { press("gs2")}, 3250);}
				{setTimeout(function() { press("fs2")}, 3500);}
				{setTimeout(function() { press("fs2"); press("a2"); press("cs3"); press("fs3")}, 4000);}

				} else if (message.substring(0, 17).toLowerCase() == cmdChar+"scale fsmelminor") {	//F# melodic minor scale
				 sendChat("The F# (sharp) melodic minor scale - it has 5 sharps ascending and 3 sharps descending - it has two patterns ascending and descending.");
				{setTimeout(function() { press("fs2")}, 0);}
				{setTimeout(function() { press("gs2")}, 250);}
				{setTimeout(function() { press("a2")}, 500);}
				{setTimeout(function() { press("b2")}, 750);}
				{setTimeout(function() { press("cs3")}, 1000);}
				{setTimeout(function() { press("ds3")}, 1250);}
				{setTimeout(function() { press("f3")}, 1500);}
				{setTimeout(function() { press("fs3")}, 1750);}
				{setTimeout(function() { press("e3")}, 2000);}
				{setTimeout(function() { press("d3")}, 2250);}
				{setTimeout(function() { press("cs3")}, 2500);}
				{setTimeout(function() { press("b2")}, 2750);}
				{setTimeout(function() { press("a2")}, 3000);}
				{setTimeout(function() { press("gs2")}, 3250);}
				{setTimeout(function() { press("fs2")}, 3500);}
				{setTimeout(function() { press("fs2"); press("a2"); press("cs3"); press("fs3")}, 4000);}
				//F# scales

				//G scales
				} else if (message.substring(0, 13).toLowerCase() == cmdChar+"scale gmajor") {	//G major scale
				 sendChat("The G major scale - it has 1 sharp - its relative minor is E");
				{setTimeout(function() { press("g2")}, 0);}
				{setTimeout(function() { press("a2")}, 250);}
				{setTimeout(function() { press("b2")}, 500);}
				{setTimeout(function() { press("c3")}, 750);}
				{setTimeout(function() { press("d3")}, 1000);}
				{setTimeout(function() { press("e3")}, 1250);}
				{setTimeout(function() { press("fs3")}, 1500);}
				{setTimeout(function() { press("g3")}, 1750);}
				{setTimeout(function() { press("fs3")}, 2000);}
				{setTimeout(function() { press("e3")}, 2250);}
				{setTimeout(function() { press("d3")}, 2500);}
				{setTimeout(function() { press("c3")}, 2750);}
				{setTimeout(function() { press("b2")}, 3000);}
				{setTimeout(function() { press("a2")}, 3250);}
				{setTimeout(function() { press("g2")}, 3500);}
				{setTimeout(function() { press("g2"); press("b2"); press("d3"); press("g3")}, 4000);}

				} else if (message.substring(0, 14).toLowerCase() == cmdChar+"scale gminor") {	//G minor scale
				 sendChat("The G minor scale - it has 1 sharps - its relative major is Bb");
				{setTimeout(function() { press("g2")}, 0);}
				{setTimeout(function() { press("a2")}, 250);}
				{setTimeout(function() { press("as2")}, 500);}
				{setTimeout(function() { press("c3")}, 750);}
				{setTimeout(function() { press("d3")}, 1000);}
				{setTimeout(function() { press("ds3")}, 1250);}
				{setTimeout(function() { press("f3")}, 1500);}
				{setTimeout(function() { press("g3")}, 1750);}
				{setTimeout(function() { press("f3")}, 2000);}
				{setTimeout(function() { press("ds3")}, 2250);}
				{setTimeout(function() { press("d3")}, 2500);}
				{setTimeout(function() { press("c3")}, 2750);}
				{setTimeout(function() { press("as2")}, 3000);}
				{setTimeout(function() { press("a2")}, 3250);}
				{setTimeout(function() { press("g2")}, 3500);}
				{setTimeout(function() { press("g2"); press("as2"); press("d3"); press("g3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale gharminor") {	//G harmonic minor scale
				 sendChat("The G harmonic minor scale - it has 3 sharps - it has a major 7th (F#)");
				{setTimeout(function() { press("g2")}, 0);}
				{setTimeout(function() { press("a2")}, 250);}
				{setTimeout(function() { press("as2")}, 500);}
				{setTimeout(function() { press("c3")}, 750);}
				{setTimeout(function() { press("d3")}, 1000);}
				{setTimeout(function() { press("ds3")}, 1250);}
				{setTimeout(function() { press("fs3")}, 1500);}
				{setTimeout(function() { press("g3")}, 1750);}
				{setTimeout(function() { press("fs3")}, 2000);}
				{setTimeout(function() { press("ds3")}, 2250);}
				{setTimeout(function() { press("d3")}, 2500);}
				{setTimeout(function() { press("c3")}, 2750);}
				{setTimeout(function() { press("as2")}, 3000);}
				{setTimeout(function() { press("a2")}, 3250);}
				{setTimeout(function() { press("g2")}, 3500);}
				{setTimeout(function() { press("g2"); press("as2"); press("d3"); press("g3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale gmelminor") {	//G melodic minor scale
				 sendChat("The G melodic minor scale - it has 1 sharp ascending and 2 sharps descending - it has two patterns ascending and descending.");
				{setTimeout(function() { press("g2")}, 0);}
				{setTimeout(function() { press("a2")}, 250);}
				{setTimeout(function() { press("as2")}, 500);}
				{setTimeout(function() { press("c3")}, 750);}
				{setTimeout(function() { press("d3")}, 1000);}
				{setTimeout(function() { press("e3")}, 1250);}
				{setTimeout(function() { press("fs3")}, 1500);}
				{setTimeout(function() { press("g3")}, 1750);}
				{setTimeout(function() { press("f3")}, 2000);}
				{setTimeout(function() { press("ds3")}, 2250);}
				{setTimeout(function() { press("d3")}, 2500);}
				{setTimeout(function() { press("c3")}, 2750);}
				{setTimeout(function() { press("as2")}, 3000);}
				{setTimeout(function() { press("a2")}, 3250);}
				{setTimeout(function() { press("g2")}, 3500);}
				{setTimeout(function() { press("g2"); press("as2"); press("d3"); press("g3")}, 4000);}
				//G scales

				//Ab Scales
				} else if (message.substring(0, 14).toLowerCase() == cmdChar+"scale abmajor") {	//Ab major scale
				 sendChat("The Ab (flat) major scale - it has 4 flats - its relative minor is F");
				{setTimeout(function() { press("gs2")}, 0);}
				{setTimeout(function() { press("as2")}, 250);}
				{setTimeout(function() { press("c3")}, 500);}
				{setTimeout(function() { press("cs3")}, 750);}
				{setTimeout(function() { press("ds3")}, 1000);}
				{setTimeout(function() { press("f3")}, 1250);}
				{setTimeout(function() { press("g3")}, 1500);}
				{setTimeout(function() { press("gs3")}, 1750);}
				{setTimeout(function() { press("g3")}, 2000);}
				{setTimeout(function() { press("f3")}, 2250);}
				{setTimeout(function() { press("ds3")}, 2500);}
				{setTimeout(function() { press("cs3")}, 2750);}
				{setTimeout(function() { press("c3")}, 3000);}
				{setTimeout(function() { press("as2")}, 3250);}
				{setTimeout(function() { press("gs2")}, 3500);}
				{setTimeout(function() { press("gs2"); press("c3"); press("ds3"); press("gs3")}, 4000);}

				} else if (message.substring(0, 15).toLowerCase() == cmdChar+"scale abminor") {	//Ab minor scale
				 sendChat("The Ab (flat) minor scale - it has 7 flats - its relative major is Cb major or enharmonically, B major");
				{setTimeout(function() { press("gs2")}, 0);}
				{setTimeout(function() { press("as2")}, 250);}
				{setTimeout(function() { press("b2")}, 500);}
				{setTimeout(function() { press("cs3")}, 750);}
				{setTimeout(function() { press("ds3")}, 1000);}
				{setTimeout(function() { press("e3")}, 1250);}
				{setTimeout(function() { press("fs3")}, 1500);}
				{setTimeout(function() { press("gs3")}, 1750);}
				{setTimeout(function() { press("fs3")}, 2000);}
				{setTimeout(function() { press("e3")}, 2250);}
				{setTimeout(function() { press("ds3")}, 2500);}
				{setTimeout(function() { press("cs3")}, 2750);}
				{setTimeout(function() { press("b2")}, 3000);}
				{setTimeout(function() { press("as2")}, 3250);}
				{setTimeout(function() { press("gs2")}, 3500);}
				{setTimeout(function() { press("gs2"); press("b2"); press("ds3"); press("gs3")}, 4000);}

				} else if (message.substring(0, 17).toLowerCase() == cmdChar+"scale abharminor") {	//Ab harmonic minor scale
				 sendChat("The Ab (flat) harmonic minor scale - it has 4 flats - it has a major 7th (G)");
				{setTimeout(function() { press("gs2")}, 0);}
				{setTimeout(function() { press("as2")}, 250);}
				{setTimeout(function() { press("b2")}, 500);}
				{setTimeout(function() { press("cs3")}, 750);}
				{setTimeout(function() { press("ds3")}, 1000);}
				{setTimeout(function() { press("e3")}, 1250);}
				{setTimeout(function() { press("g3")}, 1500);}
				{setTimeout(function() { press("gs3")}, 1750);}
				{setTimeout(function() { press("g3")}, 2000);}
				{setTimeout(function() { press("e3")}, 2250);}
				{setTimeout(function() { press("ds3")}, 2500);}
				{setTimeout(function() { press("cs3")}, 2750);}
				{setTimeout(function() { press("b2")}, 3000);}
				{setTimeout(function() { press("as2")}, 3250);}
				{setTimeout(function() { press("gs2")}, 3500);}
				{setTimeout(function() { press("gs2"); press("b2"); press("ds3"); press("gs3")}, 4000);}

				} else if (message.substring(0, 17).toLowerCase() == cmdChar+"scale abmelminor") {	//Ab melodic minor scale
				 sendChat("The Ab (flat) melodic minor scale - it has 3 flats ascending and 4 flats descending - it has two patterns ascending and descending.");
				{setTimeout(function() { press("gs2")}, 0);}
				{setTimeout(function() { press("as2")}, 250);}
				{setTimeout(function() { press("b2")}, 500);}
				{setTimeout(function() { press("cs3")}, 750);}
				{setTimeout(function() { press("ds3")}, 1000);}
				{setTimeout(function() { press("f3")}, 1250);}
				{setTimeout(function() { press("g3")}, 1500);}
				{setTimeout(function() { press("gs3")}, 1750);}
				{setTimeout(function() { press("fs3")}, 2000);}
				{setTimeout(function() { press("e3")}, 2250);}
				{setTimeout(function() { press("ds3")}, 2500);}
				{setTimeout(function() { press("cs3")}, 2750);}
				{setTimeout(function() { press("b2")}, 3000);}
				{setTimeout(function() { press("as2")}, 3250);}
				{setTimeout(function() { press("gs2")}, 3500);}
				{setTimeout(function() { press("gs2"); press("b2"); press("ds3"); press("gs3")}, 4000);}
				//Ab Scales

				//A Scales
				} else if (message.substring(0, 13).toLowerCase() == cmdChar+"scale amajor") {	//A major scale
				 sendChat("The A major scale - it has 3 sharps - its relative minor is F#");
				{setTimeout(function() { press("a2")}, 0);}
				{setTimeout(function() { press("b2")}, 250);}
				{setTimeout(function() { press("cs3")}, 500);}
				{setTimeout(function() { press("d3")}, 750);}
				{setTimeout(function() { press("e3")}, 1000);}
				{setTimeout(function() { press("fs3")}, 1250);}
				{setTimeout(function() { press("gs3")}, 1500);}
				{setTimeout(function() { press("a3")}, 1750);}
				{setTimeout(function() { press("gs3")}, 2000);}
				{setTimeout(function() { press("fs3")}, 2250);}
				{setTimeout(function() { press("e3")}, 2500);}
				{setTimeout(function() { press("d3")}, 2750);}
				{setTimeout(function() { press("cs3")}, 3000);}
				{setTimeout(function() { press("b2")}, 3250);}
				{setTimeout(function() { press("a2")}, 3500);}
				{setTimeout(function() { press("a2"); press("cs3"); press("e3"); press("a3")}, 4000);}

				} else if (message.substring(0, 14).toLowerCase() == cmdChar+"scale aminor") {	//A minor scale
				 sendChat("The A minor scale - it has no sharps or flats - its relative major is C major");
				{setTimeout(function() { press("a2")}, 0);}
				{setTimeout(function() { press("b2")}, 250);}
				{setTimeout(function() { press("c3")}, 500);}
				{setTimeout(function() { press("d3")}, 750);}
				{setTimeout(function() { press("e3")}, 1000);}
				{setTimeout(function() { press("f3")}, 1250);}
				{setTimeout(function() { press("g3")}, 1500);}
				{setTimeout(function() { press("a3")}, 1750);}
				{setTimeout(function() { press("g3")}, 2000);}
				{setTimeout(function() { press("f3")}, 2250);}
				{setTimeout(function() { press("e3")}, 2500);}
				{setTimeout(function() { press("d3")}, 2750);}
				{setTimeout(function() { press("c3")}, 3000);}
				{setTimeout(function() { press("b2")}, 3250);}
				{setTimeout(function() { press("a2")}, 3500);}
				{setTimeout(function() { press("a2"); press("c3"); press("e3"); press("a3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale aharminor") {	//A harmonic minor scale
				 sendChat("The A harmonic minor scale - it has 1 flat - it has a major 7th (G#)");
				{setTimeout(function() { press("a2")}, 0);}
				{setTimeout(function() { press("b2")}, 250);}
				{setTimeout(function() { press("cs3")}, 500);}
				{setTimeout(function() { press("d3")}, 750);}
				{setTimeout(function() { press("e3")}, 1000);}
				{setTimeout(function() { press("fs3")}, 1250);}
				{setTimeout(function() { press("gs3")}, 1500);}
				{setTimeout(function() { press("a3")}, 1750);}
				{setTimeout(function() { press("gs3")}, 2000);}
				{setTimeout(function() { press("fs3")}, 2250);}
				{setTimeout(function() { press("e3")}, 2500);}
				{setTimeout(function() { press("d3")}, 2750);}
				{setTimeout(function() { press("cs3")}, 3000);}
				{setTimeout(function() { press("b2")}, 3250);}
				{setTimeout(function() { press("a2")}, 3500);}
				{setTimeout(function() { press("a2"); press("cs3"); press("e3"); press("a3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale amelminor") {	//A melodic minor scale
				 sendChat("The A melodic minor scale - it has 2 sharps ascending and 0 sharps descending - it has two patterns ascending and descending.");
				{setTimeout(function() { press("a2")}, 0);}
				{setTimeout(function() { press("b2")}, 250);}
				{setTimeout(function() { press("c3")}, 500);}
				{setTimeout(function() { press("d3")}, 750);}
				{setTimeout(function() { press("e3")}, 1000);}
				{setTimeout(function() { press("fs3")}, 1250);}
				{setTimeout(function() { press("gs3")}, 1500);}
				{setTimeout(function() { press("a3")}, 1750);}
				{setTimeout(function() { press("g3")}, 2000);}
				{setTimeout(function() { press("f3")}, 2250);}
				{setTimeout(function() { press("e3")}, 2500);}
				{setTimeout(function() { press("d3")}, 2750);}
				{setTimeout(function() { press("c3")}, 3000);}
				{setTimeout(function() { press("b2")}, 3250);}
				{setTimeout(function() { press("a2")}, 3500);}
				{setTimeout(function() { press("a2"); press("c3"); press("e3"); press("a3")}, 4000);}
				//A Scales

				//Bb Scales
				} else if (message.substring(0, 14).toLowerCase() == cmdChar+"scale bbmajor") {	//Bb major scale
				 sendChat("The Bb (flat) major scale - it has 2 flats - its relative minor is G");
				{setTimeout(function() { press("as2")}, 0);}
				{setTimeout(function() { press("c3")}, 250);}
				{setTimeout(function() { press("d3")}, 500);}
				{setTimeout(function() { press("ds3")}, 750);}
				{setTimeout(function() { press("f3")}, 1000);}
				{setTimeout(function() { press("g3")}, 1250);}
				{setTimeout(function() { press("a3")}, 1500);}
				{setTimeout(function() { press("as3")}, 1750);}
				{setTimeout(function() { press("a3")}, 2000);}
				{setTimeout(function() { press("g3")}, 2250);}
				{setTimeout(function() { press("f3")}, 2500);}
				{setTimeout(function() { press("ds3")}, 2750);}
				{setTimeout(function() { press("d3")}, 3000);}
				{setTimeout(function() { press("c3")}, 3250);}
				{setTimeout(function() { press("as2")}, 3500);}
				{setTimeout(function() { press("as2"); press("d3"); press("f3"); press("as3")}, 4000);}

				} else if (message.substring(0, 15).toLowerCase() == cmdChar+"scale bbminor") {	//Bb minor scale
				 sendChat("The Bb (flat) minor scale - it 6 flats - its relative major is Db major");
				{setTimeout(function() { press("as2")}, 0);}
				{setTimeout(function() { press("c3")}, 250);}
				{setTimeout(function() { press("cs3")}, 500);}
				{setTimeout(function() { press("ds3")}, 750);}
				{setTimeout(function() { press("f3")}, 1000);}
				{setTimeout(function() { press("fs3")}, 1250);}
				{setTimeout(function() { press("gs3")}, 1500);}
				{setTimeout(function() { press("as3")}, 1750);}
				{setTimeout(function() { press("gs3")}, 2000);}
				{setTimeout(function() { press("fs3")}, 2250);}
				{setTimeout(function() { press("f3")}, 2500);}
				{setTimeout(function() { press("ds3")}, 2750);}
				{setTimeout(function() { press("cs3")}, 3000);}
				{setTimeout(function() { press("c3")}, 3250);}
				{setTimeout(function() { press("as2")}, 3500);}
				{setTimeout(function() { press("as2"); press("cs3"); press("f3"); press("as3")}, 4000);}

				} else if (message.substring(0, 17).toLowerCase() == cmdChar+"scale bbharminor") {	//Bb harmonic minor scale
				 sendChat("The Bb (flat) harmonic minor scale - it has 5 flats - it has a major 7th (A)");
				{setTimeout(function() { press("as2")}, 0);}
				{setTimeout(function() { press("c3")}, 250);}
				{setTimeout(function() { press("cs3")}, 500);}
				{setTimeout(function() { press("ds3")}, 750);}
				{setTimeout(function() { press("f3")}, 1000);}
				{setTimeout(function() { press("fs3")}, 1250);}
				{setTimeout(function() { press("a3")}, 1500);}
				{setTimeout(function() { press("as3")}, 1750);}
				{setTimeout(function() { press("a3")}, 2000);}
				{setTimeout(function() { press("fs3")}, 2250);}
				{setTimeout(function() { press("f3")}, 2500);}
				{setTimeout(function() { press("ds3")}, 2750);}
				{setTimeout(function() { press("cs3")}, 3000);}
				{setTimeout(function() { press("c3")}, 3250);}
				{setTimeout(function() { press("as2")}, 3500);}
				{setTimeout(function() { press("as2"); press("cs3"); press("f3"); press("as3")}, 4000);}

				} else if (message.substring(0, 17).toLowerCase() == cmdChar+"scale bbmelminor") {	//Bb melodic minor scale
				 sendChat("The Bb (flat) melodic minor scale - it has 4 flat ascending and 6 sharps descending - it has two patterns ascending and descending.");
				{setTimeout(function() { press("as2")}, 0);}
				{setTimeout(function() { press("c3")}, 250);}
				{setTimeout(function() { press("cs3")}, 500);}
				{setTimeout(function() { press("ds3")}, 750);}
				{setTimeout(function() { press("f3")}, 1000);}
				{setTimeout(function() { press("g3")}, 1250);}
				{setTimeout(function() { press("a3")}, 1500);}
				{setTimeout(function() { press("as3")}, 1750);}
				{setTimeout(function() { press("gs3")}, 2000);}
				{setTimeout(function() { press("fs3")}, 2250);}
				{setTimeout(function() { press("f3")}, 2500);}
				{setTimeout(function() { press("ds3")}, 2750);}
				{setTimeout(function() { press("cs3")}, 3000);}
				{setTimeout(function() { press("c3")}, 3250);}
				{setTimeout(function() { press("as2")}, 3500);}
				{setTimeout(function() { press("as2"); press("cs3"); press("f3"); press("as3")}, 4000);}
				//Bb Scales

				//B Scales
				} else if (message.substring(0, 13).toLowerCase() == cmdChar+"scale bmajor") {	//B major scale
				 sendChat("The B major scale - it has 5 sharps - its relative minor is G#");
				{setTimeout(function() { press("b2")}, 0);}
				{setTimeout(function() { press("cs3")}, 250);}
				{setTimeout(function() { press("ds3")}, 500);}
				{setTimeout(function() { press("e3")}, 750);}
				{setTimeout(function() { press("fs3")}, 1000);}
				{setTimeout(function() { press("gs3")}, 1250);}
				{setTimeout(function() { press("as3")}, 1500);}
				{setTimeout(function() { press("b3")}, 1750);}
				{setTimeout(function() { press("as3")}, 2000);}
				{setTimeout(function() { press("gs3")}, 2250);}
				{setTimeout(function() { press("fs3")}, 2500);}
				{setTimeout(function() { press("e3")}, 2750);}
				{setTimeout(function() { press("ds3")}, 3000);}
				{setTimeout(function() { press("cs3")}, 3250);}
				{setTimeout(function() { press("b2")}, 3500);}
				{setTimeout(function() { press("b2"); press("ds3"); press("fs3"); press("b3")}, 4000);}

				} else if (message.substring(0, 14).toLowerCase() == cmdChar+"scale bminor") {	//B minor scale
				 sendChat("The B minor scale - it 2 sharps - its relative major is D major");
				{setTimeout(function() { press("b2")}, 0);}
				{setTimeout(function() { press("cs3")}, 250);}
				{setTimeout(function() { press("d3")}, 500);}
				{setTimeout(function() { press("e3")}, 750);}
				{setTimeout(function() { press("fs3")}, 1000);}
				{setTimeout(function() { press("g3")}, 1250);}
				{setTimeout(function() { press("a3")}, 1500);}
				{setTimeout(function() { press("b3")}, 1750);}
				{setTimeout(function() { press("a3")}, 2000);}
				{setTimeout(function() { press("g3")}, 2250);}
				{setTimeout(function() { press("fs3")}, 2500);}
				{setTimeout(function() { press("e3")}, 2750);}
				{setTimeout(function() { press("d3")}, 3000);}
				{setTimeout(function() { press("cs3")}, 3250);}
				{setTimeout(function() { press("b2")}, 3500);}
				{setTimeout(function() { press("b2"); press("d3"); press("fs3"); press("b3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale bharminor") {	//B harmonic minor scale
				 sendChat("The B harmonic minor scale - it has 3 sharps - it has a major 7th (A#)");
				{setTimeout(function() { press("b2")}, 0);}
				{setTimeout(function() { press("cs3")}, 250);}
				{setTimeout(function() { press("d3")}, 500);}
				{setTimeout(function() { press("e3")}, 750);}
				{setTimeout(function() { press("fs3")}, 1000);}
				{setTimeout(function() { press("g3")}, 1250);}
				{setTimeout(function() { press("as3")}, 1500);}
				{setTimeout(function() { press("b3")}, 1750);}
				{setTimeout(function() { press("as3")}, 2000);}
				{setTimeout(function() { press("g3")}, 2250);}
				{setTimeout(function() { press("fs3")}, 2500);}
				{setTimeout(function() { press("e3")}, 2750);}
				{setTimeout(function() { press("d3")}, 3000);}
				{setTimeout(function() { press("cs3")}, 3250);}
				{setTimeout(function() { press("b2")}, 3500);}
				{setTimeout(function() { press("b2"); press("d3"); press("fs3"); press("b3")}, 4000);}

				} else if (message.substring(0, 16).toLowerCase() == cmdChar+"scale bmelminor") {	//B melodic minor scale
				 sendChat("The B melodic minor scale - it has 4 sharps ascending and 2 sharps descending - it has two patterns ascending and descending.");
				{setTimeout(function() { press("b2")}, 0);}
				{setTimeout(function() { press("cs3")}, 250);}
				{setTimeout(function() { press("d3")}, 500);}
				{setTimeout(function() { press("e3")}, 750);}
				{setTimeout(function() { press("fs3")}, 1000);}
				{setTimeout(function() { press("gs3")}, 1250);}
				{setTimeout(function() { press("as3")}, 1500);}
				{setTimeout(function() { press("b3")}, 1750);}
				{setTimeout(function() { press("a3")}, 2000);}
				{setTimeout(function() { press("g3")}, 2250);}
				{setTimeout(function() { press("fs3")}, 2500);}
				{setTimeout(function() { press("e3")}, 2750);}
				{setTimeout(function() { press("d3")}, 3000);}
				{setTimeout(function() { press("cs3")}, 3250);}
				{setTimeout(function() { press("b2")}, 3500);}
				{setTimeout(function() { press("b2"); press("d3"); press("fs3"); press("b3")}, 4000);}
				//B Scales
				//scales

				//glossary
				} else if (cmd == cmdChar+"glossary") {	//Glossary
				 sendChat("Music theory glossary: "+cmdChar+"arpeggio, "+cmdChar+"glissando [Unfinished!!]");

				 //Arpeggio
				 } else if (cmd == cmdChar+"arpeggio") {	//Arpeggio
				 sendChat("An arpeggio is a musical technique where notes in a chord are played in sequence, one after the other. This word comes from the Italian word \"arpeggiare\", which means \"to play on a harp\". An alternative translation of this term is \"broken chord\".");
				 {setTimeout(function() { press("c0")}, 0);}		//octave
				 {setTimeout(function() { press("ds0")}, 200);}
				 {setTimeout(function() { press("g0")}, 400);}
				 {setTimeout(function() { press("c1")}, 600);}		//octave
				 {setTimeout(function() { press("ds1")}, 800);}
				 {setTimeout(function() { press("g1")}, 1000);}
				 {setTimeout(function() { press("c2")}, 1200);}		//octave
				 {setTimeout(function() { press("ds2")}, 1400);}
				 {setTimeout(function() { press("g2")}, 1600);}
				 {setTimeout(function() { press("c3")}, 1800);}		//octave
				 {setTimeout(function() { press("ds3")}, 2000);}
				 {setTimeout(function() { press("g3")}, 2200);}
				 {setTimeout(function() { press("c4")}, 2400);}		//octave
				 {setTimeout(function() { press("ds4")}, 2600);}
				 {setTimeout(function() { press("g4")}, 2800);}
				 {setTimeout(function() { press("c5")}, 3000);}		//octave
				 {setTimeout(function() { press("ds5")}, 3200);}
				 {setTimeout(function() { press("g5")}, 3400);}
				 {setTimeout(function() { press("c6")}, 3600);}		//octave
				 {setTimeout(function() { press("ds6")}, 3800);}
				 {setTimeout(function() { press("g6")}, 4000);}
				 {setTimeout(function() { press("c7")}, 4200);}		//octave
				 //Arpeggio

				 //Glissando
				 } else if (cmd == cmdChar+"glissando") {	//Glissando
				 sendChat("In music, a glissando is a glide from one pitch to another. It is an Italianized musical term derived from the French \"glisser\", to glide.");
				{setTimeout(function() { press("a-1")}, 	100);}
				{setTimeout(function() { press("b-1")}, 	200);}
				{setTimeout(function() { press("c0")}, 		300);}
				{setTimeout(function() { press("d0")}, 		400);}
				{setTimeout(function() { press("e0")}, 		500);}
				{setTimeout(function() { press("f0")}, 		600);}
				{setTimeout(function() { press("g0")}, 		700);}
				{setTimeout(function() { press("a0")}, 		800);}
				{setTimeout(function() { press("b0")}, 		900);}
				{setTimeout(function() { press("c1")}, 		1000);}
				{setTimeout(function() { press("d1")}, 		1100);}
				{setTimeout(function() { press("e1")}, 		1200);}
				{setTimeout(function() { press("f1")}, 		1300);}
				{setTimeout(function() { press("g1")}, 		1400);}
				{setTimeout(function() { press("a1")}, 		1500);}
				{setTimeout(function() { press("b1")}, 		1600);}
				{setTimeout(function() { press("c2")}, 		1700);}
				{setTimeout(function() { press("d2")}, 		1800);}
				{setTimeout(function() { press("e2")}, 		1900);}
				{setTimeout(function() { press("f2")}, 		2000);}
				{setTimeout(function() { press("g2")}, 		2100);}
				{setTimeout(function() { press("a2")}, 		2200);}
				{setTimeout(function() { press("b2")}, 		2300);}
				{setTimeout(function() { press("c3")}, 		2400);}
				{setTimeout(function() { press("d3")}, 		2500);}
				{setTimeout(function() { press("e3")}, 		2600);}
				{setTimeout(function() { press("f3")}, 		2700);}
				{setTimeout(function() { press("g3")}, 		2800);}
				{setTimeout(function() { press("a3")}, 		2900);}
				{setTimeout(function() { press("b3")}, 		3000);}
				{setTimeout(function() { press("c4")}, 		3100);}
				{setTimeout(function() { press("d4")}, 		3200);}
				{setTimeout(function() { press("e4")}, 		3300);}
				{setTimeout(function() { press("f4")}, 		3400);}
				{setTimeout(function() { press("g4")}, 		3500);}
				{setTimeout(function() { press("a4")}, 		3600);}
				{setTimeout(function() { press("b4")}, 		3700);}
				{setTimeout(function() { press("c5")}, 		3800);}
				{setTimeout(function() { press("d5")}, 		3900);}
				{setTimeout(function() { press("e5")}, 		4000);}
				{setTimeout(function() { press("f5")}, 		4100);}
				{setTimeout(function() { press("g5")}, 		4200);}
				{setTimeout(function() { press("a5")}, 		4300);}
				{setTimeout(function() { press("b5")}, 		4400);}
				{setTimeout(function() { press("c6")}, 		4500);}
				{setTimeout(function() { press("d6")}, 		4600);}
				{setTimeout(function() { press("e6")}, 		4700);}
				{setTimeout(function() { press("f6")}, 		4800);}
				{setTimeout(function() { press("g6")}, 		4900);}
				{setTimeout(function() { press("a6")}, 		5000);}
				{setTimeout(function() { press("b6")}, 		5100);}
				{setTimeout(function() { press("c7")}, 		5200);}
				//Glissando

				//Glossary

				//Music theory

				//Meow game
				} else if (cmd == cmdChar+"mp") {
					if (message.length == cmd.length) {
						// Check if user is in Database
						mUser = MDB[ids];

						// If user isn't create a new entry
						if (!mUser) {
							mUser = MDB[ids] = {
								name: name,
								meowP: 0,
								meowRate: 1,
								meowTime: 0,
								meowing: false,
								cheeseMaster: false,
								inventory: {
									string: 1,
									yarn: 0,
									wool: 0,
									water: 0,
									milk: 0,
									bananaMilk: 0,
									cheese: 0
								},
								prices: {
									string: 50,
									yarn: 500,
									wool: 2000,
									water: 15000,
									milk: 50000,
									bananaMilk: 100000,
									cheese: 25000000000
								}
							};

							// Start their timer (no clue if this is correct or what)
							setInterval(function() {
								MDB[ids].meowP += MDB[ids].meowRate;
								++MDB[ids].meowTime;
							}, 1000);

							MDB[ids].meowing = true;
							sendChat('✯ Meow! Welcome to Meowpuff, ' + name + '! (type '+cmdChar+'meow for help, if you\'re still confused ask Logan x3)✯');
							sendChat('MP [' + mUser.meowP + '] MP rate [' + mUser.meowRate + '] Time [' + mUser.meowTime + ' secs | ' + (mUser.meowTime / 86400).toPrecision(4) + ' days]');

						} else {
							if (!MDB[ids].meowing) {
								setInterval(function() {
									MDB[ids].meowP += MDB[ids].meowRate;
									++MDB[ids].meowTime;
								}, 1000);
								if (MDB[ids].cheeseMaster) {
									sendChat('Welcome back, [Cheese Master] ' + name + '! Stats successfully loaded.');
								} else {
									sendChat('Welcome back, ' + name + '. Stats successfully loaded.');
								}
								MDB[ids].meowing = true;
							}

							// working ✓
							sendChat('MP [' + mUser.meowP + '] MP rate [' + mUser.meowRate + '] Time [' + mUser.meowTime + ' secs | ' + (mUser.meowTime / 86400).toPrecision(4) + ' days]');
						}
					//else they entered more information
					} else {
						var target = msg.a.substring(cmd.length).trim();
						var part = getUser(target.toLowerCase());
						if (part) {
							if (!MDB[part._id] || !MDB[part._id].meowing) {
								sendChat(part.name+ ' isn\'t playing Meowpuff. They need to type '+cmdChar+'mp to create or load a save');
								return;
							}

							if (part.name == name) {
									sendChat('Your MP [' + MDB[ids].meowP + '] MP rate [' + MDB[ids].meowRate + '] Time [' + MDB[ids].meowTime + ' secs | ' + (MDB[ids].meowTime / 86400).toPrecision(4) + ' days]');
								return;
							}
							sendChat(part.name + '\'s MP [' + MDB[part._id].meowP + '] MP rate [' + MDB[part._id].meowRate + '] Time [' + MDB[part._id].meowTime + ' secs | ' + (MDB[part._id].meowTime / 86400).toPrecision(4) + ' days]');
						} else {
							sendChat(userNotFound);
						}
					}

				//Meow help
				} else if (cmd == cmdChar+"meow") {
					if (gClient.isOwner()) sendChat('✯ Meow! Need some help with Meowpuff? Buy items to entice kitties to work for you to gain as many Meow Points as possible x3 ✯');
					sendChat(''+cmdChar+'meow (shows help) '+cmdChar+'mp (starts game / shows stats after you have started and '+cmdChar+'mp name_here), \
					'+cmdChar+'meowshop ('+cmdChar+'mshop item_name_here visit The Cuddle Kitty shop to buy items to increase your MPS), \
					'+cmdChar+'meowinventory ('+cmdChar+'minv shows your Meow Points and purchased items and '+cmdChar+'minv name_here), \
					'+cmdChar+'meowsave ('+cmdChar+'msave saves game), \
					'+cmdChar+'meowtype ('+cmdChar+'mtype gives you a word challenge), \
					'+cmdChar+'meowstats ('+cmdChar+'mstats shows total stats for all players)');
				//Meow help

				//Meow shop
				} else if (cmd == cmdChar+"meowshop" || cmd == cmdChar+"mshop") {
					if (!MDB[ids].meowing) {
						sendChat('You must start the game again with '+cmdChar+'mp before The Cuddle Kitty shop will let you in!');
						return;
					}
					if (message.substring(cmd.length).trim() == '') {
						//optimise
						if (gClient.isOwner()) sendChat('✯ Meow ' + name + '! Welcome to The Cuddle Kitty shop! If you need help type '+cmdChar+'meow :3 | MP [' + MDB[ids].meowP + '] ✯');
						sendChat(name +'\'s shop (string [' + MDB[ids].prices.string + ' MP] +1 MPS for each piece of string owned) \
						(yarn [' + MDB[ids].prices.yarn + ' MP] +10 MPS for each piece of yarn owned) \
						(wool [' + MDB[ids].prices.wool + ' MP] +40 MPS for each ball of wool owned) \
						(water [' + MDB[ids].prices.water + ' MP] +300 MPS for every bowl of water owned) \
						(milk [' + MDB[ids].prices.milk + ' MP] +1000 MPS for every tanker of milk owned) \
						(banana milk [' + MDB[ids].prices.bananaMilk + ' MP] +2000 MPS for every tanker of banana milk owned) \
						(cheese [' + MDB[ids].prices.cheese + ' MP] +2500000000 MPS for each piece of cheese owned)');
						return;

					// string
					} else if (message.substring(cmd.length).trim() == 'string') {
						if (MDB[ids].meowP >= MDB[ids].prices.string) { //Do they have enough meow points?
							MDB[ids].meowP -= MDB[ids].prices.string; //Take correct price away
							MDB[ids].prices.string += 5 * (MDB[ids].inventory.string) + 50; //Up price next time, might make more cruel
							MDB[ids].meowRate += 1; //Add the MPS
							MDB[ids].inventory.string += 1; //Add the string to inv
							sendChat('String added to ' + name + '\'s inventory! Next one will cost [' + MDB[ids].prices.string + ' MP] (' + MDB[ids].inventory.string + ' string in kitty storage) MP [' + MDB[ids].meowP + ']');
						} else { //They don't have enough meow points
																	//return a positive number
							sendChat(meowNeP + ' string. You need ' + Math.abs(MDB[ids].meowP - MDB[ids].prices.string) + ' more MP! (' + MDB[ids].inventory.string + ' string in kitty storage) MP [' + MDB[ids].meowP + ']');
						}

					// yarn
					} else if (message.substring(cmd.length).trim() == 'yarn') {
						if (MDB[ids].meowP >= MDB[ids].prices.yarn) {
							MDB[ids].meowP -= MDB[ids].prices.yarn;
							MDB[ids].prices.yarn += 50 * (MDB[ids].inventory.yarn) + 500;
							MDB[ids].meowRate += 10;
							MDB[ids].inventory.yarn += 1;
							sendChat('Yarn added to ' + name + '\'s inventory! Next one will cost [' + MDB[ids].prices.yarn + ' MP] (' + MDB[ids].inventory.yarn + ' yarn in kitty storage) MP [' + MDB[ids].meowP + ']');
						} else {
							sendChat(meowNeP + ' yarn. You need ' + Math.abs(MDB[ids].meowP - MDB[ids].prices.yarn) + ' more MP! (' + MDB[ids].inventory.yarn + ' yarn in kitty storage) MP [' + MDB[ids].meowP + ']');
						}

					// wool
					} else if (message.substring(cmd.length).trim() == 'wool') {
						if (MDB[ids].meowP >= MDB[ids].prices.wool) {
							MDB[ids].meowP -= MDB[ids].prices.wool;
							MDB[ids].prices.wool += 200 * (MDB[ids].inventory.wool) + 2000;
							MDB[ids].meowRate += 40;
							MDB[ids].inventory.wool += 1;
							sendChat('Wool added to ' + name + '\'s inventory! Next one will cost [' + MDB[ids].prices.wool + ' MP] (' + MDB[ids].inventory.wool + ' wool in kitty storage) MP [' + MDB[ids].meowP + ']');
						} else {
							sendChat(meowNeP + ' wool. You need ' + Math.abs(MDB[ids].meowP - MDB[ids].prices.wool) + ' more MP! (' + MDB[ids].inventory.wool + ' wool in kitty storage) MP [' + MDB[ids].meowP + ']');
						}

					// water
					} else if (message.substring(cmd.length).trim() == 'water') {
						if (MDB[ids].meowP >= MDB[ids].prices.water) {
							MDB[ids].meowP -= MDB[ids].prices.water;
							MDB[ids].prices.water += 1500 * (MDB[ids].inventory.water) + 15000;
							MDB[ids].meowRate += 300;
							MDB[ids].inventory.water += 1;
							sendChat('Water added to ' + name + '\'s inventory! Next one will cost [' + MDB[ids].prices.water + ' MP] (' + MDB[ids].inventory.water + ' water in kitty storage) MP [' + MDB[ids].meowP + ']');
						} else {
							sendChat(meowNeP + ' water. You need ' + Math.abs(MDB[ids].meowP - MDB[ids].prices.water) + ' more MP! (' + MDB[ids].inventory.water + ' water in kitty storage) MP [' + MDB[ids].meowP + ']');
						}

					// milk
					} else if (message.substring(cmd.length).trim() == 'milk') {
						if (MDB[ids].meowP >= MDB[ids].prices.milk) {
							MDB[ids].meowP -= MDB[ids].prices.milk;
							MDB[ids].prices.milk += 5000 * (MDB[ids].inventory.milk) + 50000;
							MDB[ids].meowRate += 1000;
							MDB[ids].inventory.milk += 1;
							sendChat('Milk added to ' + name + '\'s inventory! Next one will cost [' + MDB[ids].prices.milk + ' MP] (' + MDB[ids].inventory.milk + ' milk in kitty storage) MP [' + MDB[ids].meowP + ']');
						} else {
							sendChat(meowNeP + ' milk. You need ' + Math.abs(MDB[ids].meowP - MDB[ids].prices.milk) + ' more MP! (' + MDB[ids].inventory.milk + ' milk in kitty storage) MP [' + MDB[ids].meowP + ']');
						}

					// banana milk
					} else if (message.substring(cmd.length).trim() == 'banana milk') {
						if (MDB[ids].meowP >= MDB[ids].prices.bananaMilk) {
							MDB[ids].meowP -= MDB[ids].prices.bananaMilk;
							MDB[ids].prices.bananaMilk += 10000 * (MDB[ids].inventory.bananaMilk) + 100000;
							MDB[ids].meowRate += 2000;
							MDB[ids].inventory.bananaMilk += 1;
							sendChat('Banana milk added to ' + name + '\'s inventory! Next one will cost [' + MDB[ids].prices.bananaMilk + ' MP] (' + MDB[ids].inventory.bananaMilk + ' banana milk in kitty storage) MP [' + MDB[ids].meowP + ']');
						} else {
							sendChat(meowNeP + ' banana milk. You need ' + Math.abs(MDB[ids].meowP - MDB[ids].prices.bananaMilk) + ' more MP! (' + MDB[ids].inventory.bananaMilk + ' banana milk in kitty storage) MP [' + MDB[ids].meowP + ']');
						}

					// cheese
					} else if (message.substring(cmd.length).trim() == 'cheese') {
						if (MDB[ids].meowP >= MDB[ids].prices.cheese) {
							MDB[ids].meowP -= MDB[ids].prices.cheese;
							MDB[ids].prices.cheese += 2500000000 * (MDB[ids].inventory.cheese) + 25000000000;
							MDB[ids].meowRate += 500000000;
							MDB[ids].inventory.cheese += 1;
							MDB[ids].cheeseMaster = true;
							sendChat('✯ Cheese added to ' + name + '\'s inventory! Next one will cost [' + MDB[ids].prices.cheese + ' MP] (' + MDB[ids].inventory.cheese + ' cheese in kitty storage) MP [' + MDB[ids].meowP + '] ✯');
						} else {
							sendChat(meowNeP + ' cheese. You need a whopping ' + Math.abs(MDB[ids].meowP - MDB[ids].prices.cheese) + ' more MP! (' + MDB[ids].inventory.cheese + ' cheese in kitty storage) MP [' + MDB[ids].meowP + ']');
						}
					}

				//item prices: 250000

				// kitty storage
				} else if (cmd == cmdChar+"meowinventory" || cmd == cmdChar+"minv") {
					if (message.length == cmd.length) {
						if (!MDB[ids].meowing) {
							sendChat('You must start the game again with '+cmdChar+'mp before kitty storage is setup!');
							return;
						}
						if(gClient.isOwner()) sendChat('✯ Meow! Welcome to Kitty Storage! This is where we keep all your purchased items :3 MP [' + MDB[ids].meowP + '] ✯');
						sendChat('MP [' + MDB[ids].meowP + '] (string ' + MDB[ids].inventory.string + ') (yarn ' + MDB[ids].inventory.yarn + ') (wool ' + MDB[ids].inventory.wool + ') (water ' + MDB[ids].inventory.water + ') (milk ' + MDB[ids].inventory.milk + ') (banana milk ' + MDB[ids].inventory.bananaMilk + ') (cheese ' + MDB[ids].inventory.cheese + ')');

					} else {
						var target = msg.a.substring(cmd.length).trim();
						var part = getUser(target.toLowerCase());

						if (part) {
							if (!MDB[part._id] || !MDB[part._id].meowing) {
								sendChat(part.name+ ' isn\'t playing Meowpuff. They need to type '+cmdChar+'mp to create or load a save');
								return;
							}

							if (part.name == name) {
								sendChat('Your MP [' + MDB[ids].meowP + '] (string ' + MDB[ids].inventory.string + ') (yarn ' + MDB[ids].inventory.yarn + ') (wool ' + MDB[ids].inventory.wool + ') (water ' + MDB[ids].inventory.water + ') (milk ' + MDB[ids].inventory.milk + ') (banana milk ' + MDB[ids].inventory.bananaMilk + ') (cheese ' + MDB[ids].inventory.cheese + ')');
								return;
							}
							sendChat(part.name+'\'s MP [' + MDB[part._id].meowP + '] (string ' + MDB[part._id].inventory.string + ') (yarn ' + MDB[part._id].inventory.yarn + ') (wool ' + MDB[part._id].inventory.wool + ') (water ' + MDB[part._id].inventory.water + ') (milk ' + MDB[part._id].inventory.milk + ') (banana milk ' + MDB[part._id].inventory.bananaMilk + ') (cheese ' + MDB[part._id].inventory.cheese + ')');

						} else {
							sendChat(userNotFound);
						}
					}
				//Meow save
				} else if (cmd == cmdChar+"meowsave" || cmd == cmdChar+"msave") { //notes: I need to set the meowing property to false for all when saving so I use meowing as a check for the timer too!
					try {
						L.MDB = MDB.toString(); //saves everyone for simplicity
						// get the number of people playing
						var played = 0;
						var playing = 0;
						var totalDays = 0;
						for (var id in MDB) {
							if (MDB[id].meowing) ++playing;
							if (!MDB[id].meowing) ++played;
							totalDays += MDB[id].meowTime;
						}

						sendChat('Everyones stats have been saved! [playing: ' + playing + ', total players: ' + played + ' | ' + (totalDays / 86400).toPrecision(4) + ' total days]');

					} catch (e) {
						sendChat('[There was an error in your code!] You need to start the game before you can play! (type '+cmdChar+'mp) err[' + e + ']'); // this probably won't happen
					}
				//Meow save

				//Meow copy sentence mini-game
				} else if (cmd == cmdChar+"meowtype" || cmd == cmdChar+"mtype") {
					if (!askedEnglish) {
						Array.prototype.random = function(a){ //thanks SomeGuy for prototype
							if(this){
								var b = Math.floor(Math.random() * this.length);
								return this[b];
							}
						}

						// arrays
						var colours = ["red", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white"];
						var conjunctions = ["for", "and", "but", "or", "yet", "so", "after", "as long as", "before", "by the time", "now that", "once", "since", "till", "until", "when", "whenever", "while", "even if", "than", "rather than", "because", "why", "if", "only if", "unless", "assuming that", "in which case"];
						var verbs = ["accept", "ache", "acknowledge", "act", "add", "admire", "admit", "admonish", "advise", "adopt", "affirm", "afford", "agree", "ail", "alert", "allege", "allow", "allude", "amuse", "analyse", "announce", "annoy", "answer", "apologize", "appeal", "appear", "applaud", "appreciate", "approve", "argue", "arrange", "arrest", "arrive", "articulate", "ask", "assert", "assure", "attach", "attack", "attempt", "attend", "attract", "auction", "avoid", "avow", "awake", "babble", "back", "bake", "balance", "balk", "ban", "bang", "bandage", "bar", "bare", "bargain", "bark", "barrage", "barter", "baste", "bat", "bathe", "battle", "bawl", "be", "beam", "bear", "beat", "become", "befriend", "beg", "begin", "behave", "believe", "bellow", "belong", "bend", "berate", "besiege", "bestow", "bet", "bid", "bite", "bleach", "bleed", "bless", "blind", "blink", "blot", "blow", "blurt", "blush", "boast", "bob", "boil", "bolt", "bomb", "book", "bore", "borrow", "bounce", "bow", "box", "brag", "brake", "branch", "brand", "break", "breathe", "breed", "bring", "broadcast", "broil", "bruise", "brush", "bubble", "build", "bump", "burn", "burnish", "bury", "buy", "buzz", "cajole", "calculate", "call", "camp", "care", "carry", "carve", "cause", "caution", "catch", "challenge", "change", "chant", "charge", "chase", "cheat", "check", "cheer", "chew", "chide", "chip", "choke", "chomp", "choose", "chop", "claim", "clap", "clean", "clear", "climb", "clip", "close", "coach", "coil", "collect", "color", "comb", "come", "comfort", "command", "comment", "communicate", "compare", "compete", "complain", "complete", "concede", "concentrate", "concern", "conclude", "concur", "confess", "confide", "confirm", "connect", "consent", "consider", "consist", "contain", "contend", "continue", "cook", "copy", "correct", "cost", "cough", "count", "counter", "cover", "covet", "crack", "crash", "crave", "crawl", "crochet", "cross", "criticize", "croak", "cross-examine", "crowd", "crush", "cry", "cure", "curl", "curse", "curve", "cut", "cycle", "dam", "damage", "dance", "dare", "deal", "debate", "decay", "deceive", "decide", "decipher", "declare", "decorate", "delay", "delight", "deliver", "demand", "deny", "depend", "describe", "desert", "deserve", "desire", "deter", "develop", "dial", "dictate", "die", "dig", "digress", "direct", "disclose", "dislike", "dive", "divide", "divorce", "divulge", "do", "dock", "dole", "dote", "double", "doubt", "drag", "drain", "draw", "dream", "dress", "drip", "drill", "drink", "drive", "drone", "drop", "drown", "dry", "dupe", "dump", "dust", "dye", "earn", "eat", "echo", "edit", "educate", "elope", "embarrass", "emigrate", "emit", "emphasise", "employ", "empty", "enchant", "encode", "encourage", "end", "enjoin", "enjoy", "enter", "entertain", "enunciate", "envy", "equivocate", "escape", "evacuate", "evaporate", "exaggerate", "examine", "excite", "exclaim", "excuse", "exercise", "exist", "expand", "expect", "expel", "exhort", "explain", "explode", "explore", "extend", "extoll", "face", "fade", "fail", "fall", "falter", "fasten", "favor", "fax", "fear", "feed", "feel", "fence", "fetch", "fight", "file", "fill", "film", "find", "fire", "fish", "fit", "fix", "flap", "flash", "flee", "float", "flood", "floss", "flow", "flower", "fly", "fold", "follow", "fool", "force", "foretell", "forget", "forgive", "form", "found", "frame", "freeze", "fret", "frighten", "fry", "fume", "garden", "gasp", "gather", "gaze", "gel", "get", "gild", "give", "glide", "glue", "gnaw", "go", "grab", "grate", "grease", "greet", "grill", "grin", "grip", "groan", "grow", "growl", "grumble", "grunt", "guarantee", "guard", "guess", "guide", "gurgle", "gush", "hail", "hammer", "hand", "handle", "hang", "happen", "harass", "harm", "harness", "hate", "haunt", "have", "head", "heal", "heap", "hear", "heat", "help", "hide", "highlight", "hijack", "hinder", "hint", "hiss", "hit", "hold", "hook", "hoot", "hop", "hope", "hover", "howl", "hug", "hum", "hunt", "hurry", "hurt", "ice", "identify", "ignore", "imagine", "immigrate", "imply", "implore", "impress", "improve", "include", "increase", "infect", "inflate", "influence", "inform", "infuse", "inject", "injure", "inquire", "insist", "inspect", "inspire", "instruct", "intend", "interest", "interfere", "interject", "interrupt", "introduce", "invent", "invest", "invite", "irritate", "iron", "itch", "jab", "jabber", "jail", "jam", "jeer", "jest", "jog", "join", "joke", "jolt", "judge", "juggle", "jump", "keep", "kick", "kill", "kiss", "kneel", "knit", "knock", "knot", "know", "label", "lament", "land", "last", "laugh", "lay", "lead", "lean", "learn", "leave", "lecture", "lend", "let", "level", "license", "lick", "lie", "lift", "light", "lighten", "like", "list", "listen", "live", "load", "loan", "lock", "long", "look", "loosen", "lose", "love", "lower", "mail", "maintain", "make", "man", "manage", "mar", "march", "mark", "marry", "marvel", "mate", "matter", "mean", "measure", "meet", "melt", "memorise", "mend", "mention", "merge", "milk", "mine", "miss", "mix", "moan", "moor", "mourn", "molt", "move", "mow", "mug", "multiply", "mumble", "murder", "mutter", "nag", "nail", "name", "nap", "need", "nest", "nod", "note", "notice", "number", "obey", "object", "observe", "obtain", "occur", "offend", "offer", "ogle", "oil", "omit", "open", "operate", "order", "overflow", "overrun", "owe", "own", "pack", "pad", "paddle", "paint", "pant", "park", "part", "pass", "paste", "pat", "pause", "pay", "peck", "pedal", "peel", "peep", "peer", "peg", "pelt", "perform", "permit", "pester", "pet", "phone", "pick", "pinch", "pine", "place", "plan", "plant", "play", "plead", "please", "pledge", "plow", "plug", "point", "poke", "polish", "ponder", "pop", "possess", "post", "postulate", "pour", "practice", "pray", "preach", "precede", "predict", "prefer", "prepare", "present", "preserve", "press", "pretend", "prevent", "prick", "print", "proceed", "proclaim", "produce", "profess", "program", "promise", "propose", "protect", "protest", "provide", "pry", "pull", "pump", "punch", "puncture", "punish", "push", "put", "question", "quilt", "quit", "quiz", "quote", "race", "radiate", "rain", "raise", "rant", "rain", "rate", "rave", "reach", "realise", "read", "rebuff", "recall", "receive", "recite", "recognise", "recommend", "record", "reduce", "reflect", "refuse", "regret", "reign", "reiterate", "reject", "rejoice", "relate", "relax", "release", "rely", "remain", "remember", "remind", "remove", "repair", "repeat", "replace", "reply", "report", "reprimand", "reproduce", "request", "rescue", "retire", "retort", "return", "reveal", "reverse", "rhyme", "ride", "ring", "rinse", "rise", "risk", "roar", "rob", "rock", "roll", "rot", "row", "rub", "ruin", "rule", "run", "rush", "sack", "sail", "satisfy", "save", "savor", "saw", "say", "scare", "scatter", "scoff", "scold", "scoot", "scorch", "scrape", "scratch", "scream", "screech", "screw", "scribble", "seal", "search", "see", "sell", "send", "sense", "separate", "serve", "set", "settle", "sever", "sew", "shade", "shampoo", "share", "shave", "shelter", "shift", "shiver", "shock", "shoot", "shop", "shout", "show", "shriek", "shrug", "shut", "sigh", "sign", "signal", "sin", "sing", "singe", "sip", "sit", "skate", "skateboard", "sketch", "ski", "skip", "slap", "sleep", "slice", "slide", "slip", "slow", "smash", "smell", "smile", "smoke", "snap", "snarl", "snatch", "sneak", "sneer", "sneeze", "snicker", "sniff", "snore", "snort", "snoop", "snooze", "snow", "soak", "sob", "soothe", "sound", "sow", "span", "spare", "spark", "sparkle", "speak", "speculate", "spell", "spend", "spill", "spin", "spoil", "spot", "spray", "sprout", "sputter", "squash", "squeeze", "stab", "stain" ,"stammer", "stamp", "stand", "star", "stare", "start", "state", "stay", "steer", "step", "stipulate", "stir", "stitch", "stop", "store", "strap", "storm", "stow", "strengthen", "stress", "stretch", "strip", "stroke", "stuff", "stutter", "stray", "strum", "strut", "stun", "stunt", "submerge", "succeed", "suffer", "suggest", "suit", "supply", "support", "suppose", "surmise", "surprise", "surround", "suspect", "suspend", "sway", "swear", "swim", "swing", "switch", "swoop", "sympathize", "talk", "take", "tame", "tap", "taste", "taunt", "teach", "tear", "tease", "telephone", "tell", "tempt", "terrify", "test", "testify", "thank", "thaw", "theorize", "think", "threaten", "throw", "thunder", "tick", "tickle", "tie", "time", "tip", "tire", "toast", "toss", "touch", "tour", "tow", "trace", "track", "trade", "train", "translate", "transport", "trap", "travel", "treat", "tremble", "trick", "trickle", "trim", "trip", "trot", "trouble", "trust", "trounce", "try", "tug", "tumble", "turn", "twist", "type", "understand", "undress", "unfasten", "unite", "unlock", "unpack", "uphold", "upset", "upstage", "urge", "untie", "use", "usurp", "utter", "vacuum", "value", "vanish", "vanquish", "venture", "visit", "voice", "volunteer", "vote", "vouch", "wail", "wait", "wake", "walk", "wallow", "wander", "want", "warm", "warn", "wash", "waste", "watch", "water", "wave", "waver", "wear", "weave", "wed", "weigh", "welcome", "whimper", "whine", "whip", "whirl", "whisper", "whistle", "win", "wink", "wipe", "wish", "wobble", "wonder", "work", "worry", "wrap", "wreck", "wrestle", "wriggle", "write", "writhe", "x-ray", "yawn", "yell", "yelp", "yield", "yodel", "zip", "zoom"];
						var determiners = ["the", "a", "another", "some", "any", "my", "our", "their", "her", "his", "its", "each", "every", "certain", "this", "that"];
						var nouns = ["account", "achiever", "acoustics", "act", "action", "activity", "actor", "addition", "adjustment", "advertisement", "advice", "aftermath", "afternoon", "afterthought", "agreement", "air", "airplane", "airport", "alarm", "amount", "amusement", "anger", "angle", "animal", "answer", "ant", "ants", "apparatus", "apparel", "apple", "apples", "appliance", "approval", "arch", "argument", "arithmetic", "arm", "army", "art", "attack", "attempt", "attention", "attraction", "aunt", "authority", "babies", "baby", "back", "badge", "bag", "bait", "balance", "ball", "balloon", "balls", "banana", "band", "base", "baseball", "basin", "basket", "basketball", "bat", "bath", "battle", "bead", "beam", "bean", "bear", "bears", "beast", "bed", "bedroom", "beds", "bee", "beef", "beetle", "beggar", "beginner", "behaviour", "belief", "believe", "bell", "bells", "berry", "bike", "bikes", "bird", "birds", "birth", "birthday", "bit", "bite", "blade", "blood", "blow", "board", "boat", "boats", "body", "bomb", "bone", "book", "books", "boot", "border", "bottle", "boundary", "box", "boy", "boys", "brain", "brake", "branch", "brass", "bread", "breakfast", "breath", "brick", "bridge", "brother", "brothers", "brush", "bubble", "bucket", "building", "bulb", "bun", "burn", "burst", "bushes", "business", "butter", "button", "cabbage", "cable", "cactus", "cake", "cakes", "calculator", "calendar", "camera", "camp", "can", "cannon", "canvas", "cap", "caption", "car", "card", "care", "carpenter", "carriage", "cars", "cart", "cast", "cat", "cats", "cattle", "cause", "cave", "celery", "cellar", "cemetery", "cent", "chain", "chair", "chairs", "chalk", "chance", "change", "channel", "cheese", "cherries", "cherry", "chess", "chicken", "chickens", "children", "chin", "church", "circle", "clam", "class", "clock", "clocks", "cloth", "cloud", "clouds", "clover", "club", "coach", "coal", "coast", "coat", "cobweb", "coil", "collar", "color", "comb", "comfort", "committee", "company", "comparison", "competition", "condition", "connection", "control", "cook", "copper", "copy", "cord", "cork", "corn", "cough", "country", "cover", "cow", "cows", "crack", "cracker", "crate", "crayon", "cream", "creator", "creature", "credit", "crib", "crime", "crook", "crow", "crowd", "crown", "crush", "cry", "cub", "cup", "current", "curtain", "curve", "cushion", "dad", "daughter", "day", "death", "debt", "decision", "deer", "degree", "design", "desire", "desk", "destruction", "detail", "development", "digestion", "dime", "dinner", "dinosaurs", "direction", "dirt", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "dock", "doctor", "dog", "dogs", "doll", "dolls", "donkey", "door", "downtown", "drain", "drawer", "dress", "drink", "driving", "drop", "drug", "drum", "duck", "ducks", "dust", "ear", "earth", "earthquake", "edge", "education", "effect", "egg", "eggnog", "eggs", "elbow", "end", "engine", "error", "event", "example", "exchange", "existence", "expansion", "experience", "expert", "eye", "eyes", "face", "fact", "fairies", "fall", "family", "fan", "fang", "farm", "farmer", "father", "faucet", "fear", "feast", "feather", "feeling", "feet", "fiction", "field", "fifth", "fight", "finger", "fire", "fireman", "fish", "flag", "flame", "flesh", "flight", "flock", "floor", "flower", "flowers", "fly", "fog", "fold", "food", "foot", "force", "fork", "form", "fowl", "frame", "friction", "friend", "friends", "frog", "frogs", "front", "fruit", "fuel", "furniture", "alley", "game", "garden", "gate", "geese", "ghost", "giants", "giraffe", "girl", "girls", "glass", "glove", "glue", "goat", "gold", "goldfish", "good-bye", "goose", "government", "governor", "grade", "grain", "grandfather", "grandmother", "grape", "grass", "grip", "ground", "group", "growth", "guide", "guitar", "gun", "hair", "haircut", "hall", "hammer", "hand", "hands", "harmony", "hat", "hate", "head", "health", "hearing", "heart", "heat", "help", "hen", "hill", "history", "hobbies", "hole", "holiday", "home", "honey", "hook", "hope", "horn", "horse", "horses", "hose", "hospital", "hot", "hour", "house", "houses", "humour", "hydrant", "ice", "icicle", "idea", "impulse", "income", "increase", "industry", "ink", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jail", "jam", "jar", "jeans", "jelly", "jellyfish", "jewel", "join", "joke", "journey", "judge", "juice", "jump", "K", "kettle", "key", "kick", "kiss", "kite", "kitten", "kittens", "kitty", "knee", "knife", "knot", "knowledge", "labourer", "lace", "ladybug", "lake", "lamp", "land", "language", "laugh", "lawyer", "lead", "leaf", "learning", "leather", "leg", "legs", "letter", "letters", "lettuce", "level", "library", "lift", "light", "limit", "line", "linen", "lip", "liquid", "list", "lizards", "loaf", "lock", "locket", "look", "loss", "love", "low", "lumber", "lunch", "lunchroom", "machine", "magic", "maid", "mailbox", "man", "manager", "map", "marble", "mark", "market", "mask", "mass", "match", "meal", "measure", "meat", "meeting", "memory", "men", "metal", "mice", "middle", "milk", "mind", "mine", "minister", "mint", "minute", "mist", "mitten", "mom", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "muscle", "music", "nail", "name", "nation", "neck", "need", "needle", "nerve", "nest", "net", "news", "night", "noise", "north", "nose", "note", "notebook", "number", "nut", "oatmeal", "observation", "ocean", "offer", "office", "oil", "operation", "opinion", "orange", "oranges", "order", "organization", "ornament", "oven", "owl", "owner", "P", "page", "pail", "pain", "paint", "pan", "pancake", "paper", "parcel", "parent", "park", "part", "partner", "party", "passenger", "paste", "patch", "payment", "peace", "pear", "pen", "pencil", "person", "pest", "pet", "pets", "pickle", "picture", "pie", "pies", "pig", "pigs", "pin", "pipe", "pizzas", "place", "plane", "planes", "plant", "plantation", "plants", "plastic", "plate", "play", "playground", "pleasure", "plot", "plough", "pocket", "point", "poison", "police", "polish", "pollution", "popcorn", "porter", "position", "pot", "potato", "powder", "power", "price", "print", "prison", "process", "produce", "profit", "property", "prose", "protest", "pull", "pump", "punishment", "purpose", "push", "quarter", "quartz", "queen", "question", "quicksand", "quiet", "quill", "quilt", "quince", "quiver", "rabbit", "rabbits", "rail", "railway", "rain", "rainstorm", "rake", "range", "rat", "rate", "ray", "reaction", "reading", "reason", "receipt", "recess", "record", "regret", "relation", "religion", "representative", "request", "respect", "rest", "reward", "rhythm", "rice", "riddle", "rifle", "ring", "rings", "river", "road", "robin", "rock", "rod", "roll", "roof", "room", "root", "rose", "route", "rub", "rule", "run", "sack", "sail", "salt", "sand", "scale", "scarecrow", "scarf", "scene", "scent", "school", "science", "scissors", "screw", "sea", "seashore", "seat", "secretary", "seed", "selection", "self", "sense", "servant", "shade", "shake", "shame", "shape", "sheep", "sheet", "shelf", "ship", "shirt", "shock", "shoe", "shoes", "shop", "show", "side", "sidewalk", "sign", "silk", "silver", "sink", "sister", "sisters", "size", "skate", "skin", "skirt", "sky", "slave", "sleep", "sleet", "slip", "slope", "smash", "smell", "smile", "smoke", "snail", "snails", "snake", "snakes", "sneeze", "snow", "soap", "society", "sock", "soda", "sofa", "son", "song", "songs", "sort", "sound", "soup", "space", "spade", "spark", "spiders", "sponge", "spoon", "spot", "spring", "spy", "square", "squirrel", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stew", "stick", "sticks", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "stove", "stranger", "straw", "stream", "street", "stretch", "string", "structure", "substance", "sugar", "suggestion", "suit", "summer", "sun", "support", "surprise", "sweater", "swim", "swing", "system", "table", "tail", "talk", "tank", "taste", "tax", "teaching", "team", "teeth", "temper", "tendency", "tent", "territory", "test", "texture", "theory", "thing", "things", "thought", "thread", "thrill", "throat", "throne", "thumb", "thunder", "ticket", "tiger", "time", "tin", "title", "toad", "toe", "toes", "tomatoes", "tongue", "tooth", "toothbrush", "toothpaste", "top", "touch", "town", "toy", "toys", "trade", "trail", "train", "trains", "tramp", "transport", "tray", "treatment", "tree", "trees", "trick", "trip", "trouble", "trousers", "truck", "trucks", "tub", "turkey", "turn", "twig", "twist", "umbrella", "uncle", "underwear", "unit", "use", "vacation", "value", "van", "vase", "vegetable", "veil", "vein", "verse", "vessel", "vest", "view", "visitor", "voice", "volcano", "volleyball", "voyage", "walk", "wall", "war", "wash", "waste", "watch", "water", "wave", "waves", "wax", "way", "wealth", "weather", "week", "weight", "wheel", "whip", "whistle", "wilderness", "wind", "window", "wine", "wing", "winter", "wire", "wish", "woman", "women", "wood", "wool", "word", "work", "worm", "wound", "wren", "wrench", "wrist", "writer", "writing", "yak", "yam", "yard", "yarn", "year", "yoke", "zebra", "zephyr", "zinc", "zipper", "zoo"];
						var adjectives = ["angry", "bewildered", "clumsy", "defeated", "embarrassed", "fierce", "grumpy", "helpless", "itchy", "jealous", "lazy", "mysterious", "nervous", "obnoxious", "panicky", "repulsive", "scary", "thoughtless", "uptight", "worried", "alive", "better", "careful", "clever", "dead", "easy", "famous", "gifted", "helpful", "important", "inexpensive", "mushy", "odd", "powerful", "rich", "shy", "tender", "uninterested", "vast", "wrong", "adorable", "beautiful", "clean", "drab", "elegant", "fancy", "glamorous", "handsome", "long", "magnificent", "old-fashioned", "plain", "quaint", "sparkling", "ugliest", "unsightly", "wide-eyed", "deafening", "faint", "hissing", "loud", "melodic", "noisy", "purring", "quiet", "raspy", "screeching", "thundering", "voiceless", "whispering", "big", "colossal", "fat", "gigantic", "great", "huge", "immense", "large", "little", "mammoth", "massive", "miniature", "petite", "puny", "scrawny", "short", "small", "tall", "teeny", "teeny-tiny", "tiny", "broad", "chubby", "crooked", "curved", "deep", "flat", "high", "hollow", "low", "narrow", "round", "shallow", "skinny", "square", "steep", "straight", "wide", "agreeable", "brave", "calm", "delightful", "eager", "faithful", "gentle", "happy", "jolly", "kind", "lively", "nice", "obedient", "proud", "relieved", "silly", "thankful", "victorious", "witty", "zealous", "abundant", "empty", "few", "full", "heavy", "light", "many", "numerous", "sparse", "substantial", "boiling", "breeze", "broken", "bumpy", "chilly", "cold", "cool", "creepy", "crooked", "cuddly", "curly", "damaged", "damp", "dirty", "dry", "dusty", "filthy", "flaky", "fluffy", "freezing", "hot", "warm", "wet", "bitter", "delicious", "fresh", "greasy", "juicy", "hot", "icy", "loose", "melted", "nutritious", "prickly", "rainy", "rotten", "salty", "sticky", "strong", "sweet", "tart", "tasteless", "uneven", "weak", "wet", "wooden", "yummy", "ancient", "brief", "early", "fast", "late", "long", "modern", "old", "old-fashioned", "quick", "rapid", "short", "slow", "swift", "young"];

						//consider cleaning up this code when you have free time

						try {
							if (!hardEnglish) {
								//easy (normal)
								var str = determiners.random() + " " + adjectives.random() + " " + verbs.random() + " " + nouns.random() + " " + conjunctions.random() + " " + verbs.random() + " " + nouns.random() + " " + verbs.random() + ".";
								sentence = capitalizeFirstLetter(str);
								var antiCopy = sentence.split(" ").join(" \u034f\uFFFC");
								sentenceAntiCopy = capitalizeFirstLetter(antiCopy);
							}
							if (hardEnglish) {
								//hard (test)
								var str = randStr(hardLength);
								sentence = str;
								var antiCopy = sentence.split("").join("\u034f\uFFFC");
								sentenceAntiCopy = antiCopy;
							}
							sendChat("First person to type this wins: " + sentenceAntiCopy);

						} catch(e) {
							sendChat('Error in my code: ' + e);
						}
						askedEnglish = true;

					} else {
						sendChat("To answer, type the following in chat: " + sentenceAntiCopy);
					}

				} else if (cmd == cmdChar+"mstats") {
					var mp = 0;
					var mr = 0;

					var string = 0;
					var yarn = 0;
					var wool = 0;
					var water = 0;
					var milk = 0;
					var bananaMilk = 0;
					var cheese = 0;

					for (var id in MDB) {
						mp += parseInt(MDB[id].meowP);
						mr += MDB[id].meowRate;

						string += MDB[id].inventory.string;
						yarn += MDB[id].inventory.yarn;
						wool += MDB[id].inventory.wool;
						water += MDB[id].inventory.water;
						milk += MDB[id].inventory.milk;
						bananaMilk += MDB[id].inventory.bananaMilk;
						cheese += MDB[id].inventory.cheese;
					}

					sendChat("Meowpuff total stats: MP ["+mp+"], MPS ["+mr+"], string ["+string+"], \
							  yarn ["+yarn+"], wool ["+wool+"], water ["+water+"], milk ["+milk+"], \
							  banana milk ["+bananaMilk+"], cheese ["+cheese+"].");

				//Meow game

				// Math *warning* messy code below, brace yourself.
				} else if (cmd == cmdChar+"mathhelp") {
					sendChat("Math commands: "+cmdChar+"math (for answering/getting new question), "+cmdChar+"mathskip (skips tough/glitched questions), "+cmdChar+"mathdiff (difficulty setting. pick between: 0 very easy, 1 easy, 2 medium, 3 hard and 4 insane 5 asian)");

				} else if (cmd == cmdChar+"mathdiff") {
					if (message.substring(9).trim() == "" || isNaN(message.substring(9).trim()) || message.substring(9).trim() < -1 || message.substring(9).trim() > 5) {
						sendChat("Usage: "+cmdChar+"mathdiff 1 (0 = very easy, 1 = easy, 2 = medium, 3 = hard, 4 = insane)");
					} else {
						mathDiff = message.substring(9).trim();
						if (mathDiff == 0) {
							mathDiffTxt = "Very Easy \"Piki-Mode\"";
						}
						if (mathDiff == 1) {
							mathDiffTxt = "Easy";
						}
						if (mathDiff == 2) {
							mathDiffTxt = "Medium";
						}
						if (mathDiff == 3) {
							mathDiffTxt = "Hard";
						}
						if (mathDiff == 4) {
							mathDiffTxt = "Insane";
						}
						if (mathDiff == 5) {
							mathDiffTxt = "Asian";
						}
						if (mathDiff == -1) {
							mathDiffTxt = "The Answer to Life, the Universe, and Everything *cough cough*";
						}

						sendChat(name + " set the difficulty to " + mathDiffTxt);
						asked = false;
					}

				} else if (cmd == cmdChar+"math") {
					if (message.length > 5 && !asked) {
						return; //might remove if typing !math 69 bringing up a questions seems easier
					}
					// difficulty settings
					if (mathDiff == 0) {
						questions = [randNum(1,10) + " + " + randNum(1,10),
							 randNum(1,10) + " - " + randNum(1,10),
							 randNum(1,10) + " - " + randNum(1,10)];
						pickQuestion = Math.floor( Math.random() * questions.length );
					}

					if (mathDiff == 1) {
						questions = [randNum(1,50) + " + " + randNum(1,20),
							 randNum(1,50) + " - " + randNum(1,10),
							 randNum(1,20) + " * " + randNum(1,2),
							 randNum(1,20) + " % " + randNum(1,2)];
						pickQuestion = Math.floor( Math.random() * questions.length );
					}

					if (mathDiff == 2) {
						questions = [randNum(1,100) + " + " + randNum(1,20),
							 randNum(1,100) + " - " + randNum(1,20),
							 randNum(1,20) + " * " + randNum(1,10),
							 randNum(1,50) + " % " + randNum(1,10)];
						pickQuestion = Math.floor( Math.random() * questions.length );
					}

					if (mathDiff == 3) {
						questions = [randNum(1,400) + " + " + randNum(1,20),
							 randNum(1,400) + " - " + randNum(1,300),
							 randNum(1,100) + " * " + randNum(1,50),
							 randNum(1,100) + " % " + randNum(1,50)];
						pickQuestion = Math.floor( Math.random() * questions.length );
					}

					if (mathDiff == 4) {
						questions = [randNum(1,1000) + " + " + randNum(1,100),
							 randNum(1,1000) + " - " + randNum(1,100),
							 randNum(1,1000) + " * " + randNum(1,100)];
						pickQuestion = Math.floor( Math.random() * questions.length );
					}

					if (mathDiff == 5) {
						questions = [randNum(-10000000,10000000) + " + " + randNum(-10000000,10000000),
							 randNum(-10000000,10000000) + " - " + randNum(-10000000,10000000),
							 randNum(-10000000,10000000) + " * " + randNum(-10000000,10000000),
							 randNum(-10000000,10000000) + " / " + randNum(-10000000,10000000),
							 randNum(-10000000,10000000) + " % " + randNum(-10000000,10000000)];
						pickQuestion = Math.floor( Math.random() * questions.length );
					}

					if (mathDiff == -1) {
						questions = [randNum(1,400) + " + " + randNum(1,20),
							 randNum(1,400) + " - " + randNum(1,300),
							 randNum(1,400) + " * " + randNum(1,50)];
						pickQuestion = Math.floor( Math.random() * questions.length );
					}

					// difficulty settings
					if (!asked) {
						// life easter egg
						if (mathDiff == -1) {
							question = questions[pickQuestion];
							while (eval(question) != 42) {
								questions = [randNum(1,400) + " + " + randNum(1,400),
									randNum(1,400) + " - " + randNum(1,400),
									randNum(1,400) + " * " + randNum(1,400)];

								pickQuestion = Math.floor( Math.random() * questions.length );
								question = questions[pickQuestion];
							}

							sendChat("What\u034f i\u034fs " + question + "\u034f? (to answer type "+cmdChar+"math <answer>). Difficulty - " + mathDiffTxt);
							asked = true;

							// cheater >:3
							if (mathCheat) setTimeout( function() { MPP.chat.send(""+cmdChar+"math " + eval(question)) }, randNum(1000, 2500));

						} else {
							question = questions[pickQuestion];	//fix impossible answers
							//sendChat("What is " + question + "? (to answer type !math <answer>). Difficulty - " + mathDiffTxt);
							sendChat("What\u034f i\u034fs " + question + "\u034f? (to answer type "+cmdChar+"math <answer>). Difficulty - " + mathDiffTxt);
							asked = true;

							// cheater >:3
							if (mathCheat) setTimeout( function() { MPP.chat.send(""+cmdChar+"math " + eval(question)) }, randNum(1000, 2500));
						}

					} else {
						if (message.substring(5).trim() == eval(question)) {
							sendChat(name + " answered correctly with " + message.substring(5).trim() + " on " + mathDiffTxt + " difficulty (questions answered " + ++mathAnswered +")");
							asked = false;
						} else {
							sendChat("Try again, " + name + ". The question was " + question + ". Too hard? Type "+cmdChar+"mathhelp");
							// cheater >:3
							if (mathCheat) setTimeout( function() { MPP.chat.send(cmdChar+"math " + eval(question)) }, randNum(1000, 2500));
						}
					}

				} else if (cmd == cmdChar+"mathskip") {
					asked = false;
					sendChat("Skipping question. (questions skipped " + ++mathSkipped + ")");

				} else if (cmd == cmdChar+"meth") {
					sendChat('Did you mean '+cmdChar+'"math"?');

				// unit conversions start

				} else if (cmd == cmdChar+"unitc") {
                sendChat("Unit Conversions: "+cmdChar+"ctof (celsius to fahrenheit), "+cmdChar+"ftoc (fahrenheit to celsius), "+cmdChar+"cmtoinch (centimetres to inches), "+cmdChar+"inchtocm (inches to centimetres), "+cmdChar+"cmtofeet (centimetres to feet), "+cmdChar+"feettocm (feet to centimetre), "+cmdChar+"kmtomile (kilometres to miles), "+cmdChar+"miletokm (miles to kilometres)");

				// Celsius to Fahrenheit
				} else if (cmd == cmdChar+"ctof") {
					var fTemp = message.substring(6).trim() * (9 / 5) + 32;
					var outcome = fTemp.toString();
					if (message.substring(6).trim() == "" || isNaN(fTemp)) {
						sendChat("Usage: "+cmdChar+"ctof <unit> eg: 32.");
					} else {
						sendChat(message.substring(6).trim() + " Celsius equals: " + outcome.substring(0, 6) + " in Fahrenheit.");
					}

				// Fahrenheit to Celsius
				} else if (cmd == cmdChar+"ftoc") {
					var cTemp = (message.substring(6).trim() - 32) * (5 / 9);
					var outcome = cTemp.toString();
					if (message.substring(6).trim() == "" || isNaN(cTemp)) {
						sendChat("Usage: "+cmdChar+"ftoc <unit> eg: 74.");
					} else {
						sendChat(message.substring(6).trim() + " Fahrenheit equals: " + outcome.substring(0, 6) + " in  Celsius.");
					}

				// Centimetres to Inches
				} else if (cmd == cmdChar+"cmtoinch") {
					var cmTemp = message.substring(10).trim() * 0.39370;
					var outcome = cmTemp.toString();
					if (message.substring(10).trim() == "" || isNaN(cmTemp)) {
						sendChat("Usage: "+cmdChar+"cmtoinch <unit> eg: 30.");
					} else {
						sendChat(message.substring(10).trim() + " Centimetres equals: " + outcome.substring(0, 6) + " inches.");
					}

				// Inches to Centimetres
				} else if (cmd == cmdChar+"inchtocm") {
					var cmTemp = message.substring(10).trim() / 0.39370;
					var outcome = cmTemp.toString();
					if (message.substring(10).trim() == "" || isNaN(cmTemp)) {
						sendChat("Usage: "+cmdChar+"inches <unit> eg: 6.");
					} else {
						sendChat(message.substring(10).trim() + " Inches equals: " + outcome.substring(0, 6) + " Centimetres.");
					}

				// Centimetres to Feet
				} else if (cmd == cmdChar+"cmtofeet") {
					var cmTemp = message.substring(10).trim() * 0.032808;
					var outcome = cmTemp.toString();
					if (message.substring(10).trim() == "" || isNaN(cmTemp)) {
						sendChat("Usage: "+cmdChar+"cmtofeet <unit> eg: 5.");
					} else {
						sendChat(message.substring(10).trim() + " Centimetres equals: " + outcome.substring(0, 6) + " feet.");
					}

				// Feet to Centimetres
				} else if (cmd == cmdChar+"feettocm") {
					var cmTemp = message.substring(10).trim() / 0.032808;
					var outcome = cmTemp.toString();
					if (message.substring(10).trim() == "" || isNaN(cmTemp)) {
						sendChat("Usage: "+cmdChar+"feettocm <unit> eg: 5.");
					} else {
						sendChat(message.substring(10).trim() + " Feet equals: " + outcome.substring(0, 6) + " Centimetres.");
					}

				// Kilometres to Miles
				} else if (cmd == cmdChar+"kmtomile") {
					var cmTemp = message.substring(10).trim() / 0.62137;
					var outcome = cmTemp.toString();
					if (message.substring(10).trim() == "" || isNaN(cmTemp)) {
						sendChat("Usage: "+cmdChar+"kmtomile <unit> eg: 50.");
					} else {
						sendChat(message.substring(10).trim() + " Kilometres equals: " + outcome.substring(0, 5) + " Miles.");
					}

				// Miles to Kilometres
				} else if (cmd == cmdChar+"miletokm") {
					var cmTemp = message.substring(10).trim() * 0.62137;
					var outcome = cmTemp.toString();
					if (message.substring(10).trim() == "" || isNaN(cmTemp)) {
						sendChat("Usage: "+cmdChar+"miletokm <unit> eg: 80");
					} else {
						sendChat(message.substring(10).trim() + " Miles equals: " + outcome.substring(0, 5) + " Kilometres.");
					}
				// unit conversions end

				// stab command
				} else if (cmd == cmdChar+"stab") {
					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());
					if (target == "") {
						sendChat("Usage "+cmdChar+"stab name_here.");
						return;
					}
					if (part) {
						if (part.name == name) {
							sendChat("\"Ouch!\" says " + part.name);
							return;
						}
						sendChat(name + " stabbed " + part.name +".");
					} else {
						sendChat(userNotFound);
					}

				} else if (cmd == cmdChar+"highfive") {				//highfive command
					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());
					if (target == "") {
						sendChat("Usage "+cmdChar+"highfive name_here.");
						return;
					}
					if (part) {
						if (part.name == name) {
							sendChat(part.name + " claps in the corner.. by themself.");
							return;
						}
						sendChat(name + " highfived " + part.name + ".");
					} else {
						sendChat(userNotFound);
					}

				} else if (cmd == cmdChar+"kiss") {					//kiss command
					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());
					if (target == "") {
						sendChat("Usage "+cmdChar+"kiss name_here.");
						return;
					}

					if (usersDead.indexOf(ids) !== -1) {
						sendChat("Is too weak to kiss anyone... maybe a kiss would wake them up?");
						return;
					}

					if (part) {
						if (part.name == name) {
							sendChat(name +  " scrunches up their face, sucking their bottom lip inside their mouth.");
							return;
						}

						if (usersDead.indexOf(part._id) !== -1) {
							sendChat(name + '\'s kiss brought ' + part.name + ' back to life.');
							usersDead.splice(usersDead.indexOf(ids), 1);

						} else {
							var kissArray = ['bottom', 'top'];
							var lip = Math.floor(Math.random() * kissArray.length);
							var kissTypeArray = ['passionately', 'softly', 'shyly', 'nervously', 'cutely', 'holds and'];
							var kissType = Math.floor(Math.random() * kissTypeArray.length);
							sendChat(name + " " + kissTypeArray[kissType] + " kisses " + part.name + "'s " + kissArray[lip] + " lip. " + part.name + " blushes shyly.");
						}
					} else {
						sendChat(userNotFound);
					}

				} else if (cmd == cmdChar+"slap") {					//slap command
					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());
					if (target == "") {
						sendChat("Usage "+cmdChar+"slap name_here.");
						return;
					}
					if (part) {
						if (part.name == name) {
							sendChat("You cannot slap yourself, that would be awkward.");
							return;
						}
						sendChat(name + " slapped " + part.name);
					} else {
						sendChat(userNotFound);
					}

				} else if (cmd == cmdChar+"cuddle") {					//cuddle command
					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());
					if (target == "") {
						sendChat("Usage "+cmdChar+"cuddle name_here.");
						return;
					}
					if (part) {
						if (part.name == name) {
							sendChat("You cannot cuddle yourself, you lonely fuck!");
							return;
						}
						var cuddleArray = ['tightly cuddles', 'softly cuddles', 'shyly cuddles', 'tenderly cuddles', 'cuddles'];
						var cuddle = Math.floor(Math.random() * cuddleArray.length);
						sendChat(name + " " + cuddleArray[cuddle] + " " + part.name + ".");
					} else {
						sendChat(userNotFound);
					}

				} else if (cmd == cmdChar+"hug") {						//hug command
					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());
					if (target == "") {
						sendChat("Usage "+cmdChar+"hug name_here.");
						return;
					}
					if (part) {
						if (part.name == name) {
							sendChat("You cannot hug yourself, hug a cuddly anon.");
							return;
						}
						var hugArray = [' tightly squeezes ', ' sprints up and hugs ', ' shyly hugs ', ' gently caresses ', ' tounge hugs '];
						var hug = Math.floor(Math.random() * hugArray.length);
						sendChat(name + hugArray[hug] + part.name + ".");
					} else {
						sendChat(userNotFound);
					}

				} else if (cmd == cmdChar+"rape") {					//rape command
					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());
					if (target == "") {
						sendChat("Usage "+cmdChar+"rape name_here.");
						return;
					}
					if (part) {
						if (part.name == name) {
							sendChat("You cannot rape yourself, rape the Anonymous people.");
							return;
						}
						sendChat(name + " raped " + part.name + " ᶘᵒᴥᵒᶅ");
					} else {
						sendChat(userNotFound);
					}

				} else if (cmd == cmdChar+"gift") {						//gift command
					var giftArray = ['a cute kitten!', 'a cute puppy!', 'a potato!', 'a pikachu!', 'a brand new Xbox One!', 'a brand new PS4!', '1 million cows!', 'a slice of bacon!', 'a boating license!', 'a bunch of money!', 'some cake!', 'a box inside of a... BOX!', 'a new phone!', 'a new piano!', 'some chicken nuggets!', 'a brand new Wii U!', 'an evil gerbil!', 'a captains ship!', 'some sfoof! (Semolina Turmeric Cake)', 'some pizza!', 'a new laptop!', 'a piece of cotton', 'a spoon', 'a dribbling cat']; //add more... like 100 :D
					var randomNumber = Math.floor(Math.random() * giftArray.length);
					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());
					if (target == "") {
						sendChat("Usage "+cmdChar+"gift name_here.");
						return;
					}
					if (part) {
						if (part.name == name) {
							sendChat("You cannot gift yourself, that would be greedy.");
							return;
						}
						sendChat(name + " gave " + part.name + " " + giftArray[randomNumber]);
					} else {
						sendChat(userNotFound);
					}

				} else if (cmd == cmdChar+"attack") {						//attack command
					var attackArray = ['fondue stick', 'piece of bread', 'rubber chicken', 'piano', 'turtle shell', 'lamp', 'Kkitting needle', 'brake cable', 'totally non-harmful piece of string', 'rake', 'shovel', 'birds nest', 'bit of help from gravity', 'sharp stick', 'stick covered in poop', 'can of softdrink (isn’t too soft)', 'disembodied arm', 'candle stick', 'wet iguana', 'duck', 'spoon', 'boat oar', 'large rock', 'sharp triangle', 'trumpet', 'toy car', 'buzz-saw', 'computer keyboard', 'piece of Ed and Megan’s love', 'scratched CD', 'shoe lace', 'assault rifle', 'Mini-Uzi', 'piece of paper', 'very angry wet cat', 'slug', 'cylinder of Pringles', 'hairbrush'];
					var randomNumber = Math.floor(Math.random() * attackArray.length);
					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());
					if (target == "") {
						sendChat("Usage "+cmdChar+"attack name_here.");
						return;
					}
					if (part) {
						if (part.name == name) {
							sendChat("You cannot attack yourself, attack the Anonymous people.");
							return;
						}
						sendChat(name + " attacked " + part.name + " with a " + attackArray[randomNumber] + ".");
					} else {
						sendChat(userNotFound);
					}

				} else if (cmd == cmdChar+"colour" || cmd == cmdChar+"color") { //colour command
					//thanks electrashave!
					if (msg.a.substring(cmd.length).trim() == '') {
						sendChat("Your colour is " + new Color(msg.p.color).getName() + " (" + msg.p.color + ") (You can also type "+cmdChar+"colour name_here)");
						return;
					}

					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());

					if (part) {
						sendChat(part.name + "'s colour is " + new Color(part.color).getName() + " (" + part.color + ")");
					} else {
						sendChat(userNotFound);
					}

				} else if (cmd == cmdChar+"unicode") {				//unicode command
					sendChat("Put some of these in your name: ᴥ◕☀☁☂☃☄★☆☇☈☉☊☋☌☍ﾂ¢￠☍☎☏☐☑☒☓☔☕☖☗☘☙☚☛☜☝☞☟☠␀☡☢☣☤☥☦☧☨☩☪☫☬☭☮☯─━│┃┎┒┝┫┳┻╋╭╮╯╰╱╲╳╴╵╶╷╸╹╺╻╼╽╾╿☰☱☲☳☴☵☶☷░▒▓▔▁▂▃▄▅▆▇█▉▊▋▌▐ ▍▎▏◘☸☹☺☻☼☽☾☿ ♀♁♂♃♄♅♆♇♈♉♊♋♌♍♎♏♐♑♒♓♔♕♖♗♘♙♚♛♜♝♞♟♠♢♣♤♥♡♦♧♨♩♪♫♬♭♮♯ ๖ۣۜ  ∥～∼˜≀π∏ℍℂℕℙℚℝℤℬℰℱℋℐℒℳ℘ℛℓℴℯɨℊℎ√∑∮‖⌊⌉⋕⊤✀✁✂✃✄✆✇✈✉✌✍✎✏✐✑✒✓✔✕✖✗✘✙✚✛✜✝✞✟✠✡✢✣✤✥✦✧✩✪✫✬✭✮✯✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃❄❅❆❇❈❉❊❋❍❏❐❑❒❖❡❤❥❦❧❶❷❸❹❺❻❼❽❾❿➀➁➂➃➄➅➆➇➈➉➔➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧➨➩➪➫➬➭➮➯➰➱➲➳➴➵➶➷➸➹➺➻➼➽➾∧⋉⋊⋈ℵ");

				} else if (cmd == cmdChar+"clap" || cmd == cmdChar+"applaud") {	//clap command
					sendChat(name + " applauds.");

				} else if (cmd == cmdChar+"slowclap") {			//slow clap command
					sendChat(name + " claps slowly in approval");

				} else if (cmd == cmdChar+"list") {				//list command
					var list = "Connected users: ";
					for (var id in gClient.ppl) {
						list += gClient.ppl[id].name + ", ";
					}
					sendChat(list);
				 return;

				} else if (cmd == cmdChar+"facepalm") {			//facepalm command
					sendChat(name + " facepalmed.");

				} else if (cmd == cmdChar+"musicsheets" || cmd == cmdChar+"ms") {		//musicsheets command
				var songArray = ['Logan’s small march: xbm. cbm/ xvj. gj. gj, xbm xbm. cb,/ n,ry k.r wtbk etb,',
						'Dramatic song: C E 5 E Y E Y U | S E 5 E 8 U Y U | A E 5 E Y E Y U | (Ctrl M) E 5 E 8 U Y 5',
						'Part of Turkich March - [ - o i o i 8 7 i 8 7 y 7 8 y 4 5 t 4 7 y 7 8 i 8 i o - p - [ -',
						'C. P. E. Bach Solfeggietto: g c m e 5 r e w m w r u y 5 r 5 e 5 u p = [ p [ p o i u y 5 r',
						'Gravity Falls: N V Z V N V Z V N C Z C N C Z C B F Z F B F Z F B F Z F B F Z ',
						'My Immortal: z4 tb qi t - t i t f4 tk 48 t - z4 tb qi t o t i t f4 tk 48 t',
						'Song of Stroms: v r yi yi b t uo n y ip ip b t uo',
						'C minor: c v g n m k l /',
						'Skrillex - Scary Monsters: m u y u g9 u [ p 9 y 2 q y 5 nr e 2 m 2 m 2 r u r 2 m y 2 m n',
						'B major: x f g b j k l .',
						'Colombia Pictures: 8 p 9 y | 4 y 5 e | k / l n | f n g c | acgk',
						'Fandango: ttytyt8o ttytytip ttytyt8o ttytytip',
						'Eb fun: f n . | g m l | 4 y o | 5 u 9',
						'The Entertainer LH: e tup m u9p yn yip tb tup m yu m yu m etup etup',
						'Same Love: (Hold G) L M L GC ~ (Hold A) G C G (Hold G) J-M ~ (Hold G) L M L GC ~ (Hold A) G C G (Let go of A) GS',
						'Tetris: T W E R R E Q Q E T R E W W E R T E Q Q R Y I U Y T E T R E W W E R T E Q Q',
						'Mad World: N8 P 1EU 8 NY U 1E5 R 2 RY 2 RY 8 N P 1EU 8 NY U 1E8 9 2 RY 2 RY',
						'E minor: b j m , . / r t',
						'Happy Birthday: E E NQR E Y CLT E E CLR E U NQY E E NQP I Y NLT R 9 9 NQI Y CLU NQY',
						'Darude Sandstorm: r7i tuo tuo tuo tuo up] tuo tuo tuo tuo up] tuo tuo tuo tuo up] up] uo[ uo[ r7i tuo',
						'Yoshi\'s Epic Morrowind: E R 5CGM 5 Y UGL U 9 YSVN 5 R EACG E R 5CGM 5 Y UGL U 9 PGKE 9URM 8YP'];
					var randomSong = Math.floor(Math.random() * songArray.length);
					sendChat("Songs for PC players: " + sheetURL + " here's a random sample - " + songArray[randomSong] + " (Notes updated 6th June 2015)");		//update when you update link, Logan

				} else if (cmd == cmdChar+"suicide") {					//suicide command
					if (usersDead.indexOf(ids) == -1) {
						sendChat(name + " kissed Logan and died x3");
						usersDead.push(ids);

					} else {
						sendChat(name + " is too weak to kiss Logan... Maybe a kiss would wake them up?");
					}

				} else if (cmd == cmdChar+"kill") {					//kill command
					var target = msg.a.substring(cmd.length).trim();
					var part = getUser(target.toLowerCase());
					if (target == "") {
						sendChat("Usage "+cmdChar+"kill name_here.");
						return;
					}
					if (part) {
						if (part.name == name) {
							if (usersDead.indexOf(part._id) == -1) {
								sendChat(name + " commitsed suicide!");
								usersDead.push(part._id);
							} else {
								sendChat(name + "'s body twitches... Maybe a kiss would wake them up?");
							}
							return;
						}
						if (usersDead.indexOf(part._id) == -1) {
							sendChat(name + " killed " + part.name + "!");
							usersDead.push(part._id)
						} else {
							sendChat(part.name + " body twitches... Maybe a kiss would wake them up?");
						}
					} else {
						sendChat(userNotFound);
					}

				//text art
			} else if (cmd == cmdChar+"art") { //art command
                sendChat("Small text art (crown not needed): "+cmdChar+"bunny (3 lines), "+cmdChar+"bunny2 (3 lines), "+cmdChar+"bunny3 (3 lines), "+cmdChar+"bunny4 (3 lines), "+cmdChar+"hamster (3 lines), "+cmdChar+"hamster2 (3 lines), "+cmdChar+"table (3 lines). Large text art (crown needed) "+cmdChar+"fishies (9 lines).");

			} else if (cmd == cmdChar+"hamster2") { 			//hamster 2 art command
                setTimeout(function() { sendChat("( ) ( )" ); }, 0);
				setTimeout(function() { sendChat("(>•.•<)" ); }, 0);
				setTimeout(function() { sendChat('(") (")' ); }, 0);

			} else if (cmd == cmdChar+"hamster") { 			//hamster art command
                setTimeout(function() { sendChat("( )_( )" ); }, 0);
				setTimeout(function() { sendChat("(='.'=)" ); }, 0);
				setTimeout(function() { sendChat('(")_(")' ); }, 0);

			} else if (cmd == cmdChar+"bunny4") {				//bunny 4 art command
				setTimeout(function() { sendChat("(\\(\\" ); }, 0);
				setTimeout(function() { sendChat("(=\".\")" ); }, 0);
				setTimeout(function() { sendChat('("")("")' ); }, 0);

			} else if (cmd == cmdChar+"bunny3") { 				//bunny 3 art command
                setTimeout(function() { sendChat("(\\_(\\" ); }, 0);
				setTimeout(function() { sendChat("(˚_˚)" ); }, 0);
				setTimeout(function() { sendChat("('')('')" ); }, 0);

			} else if (cmd == cmdChar+"bunny2") { 				//bunny 2 art command
                setTimeout(function() { sendChat("/)_/)" ); }, 0);
				setTimeout(function() { sendChat("(0.0)" ); }, 0);
				setTimeout(function() { sendChat("('')('')" ); }, 0);

			} else if (cmd == cmdChar+"bunny") { 				//bunny art command
                setTimeout(function() { sendChat("(\\_/)" ); }, 0);
				setTimeout(function() { sendChat("(o.o)" ); }, 0);
				setTimeout(function() { sendChat("('')('')" ); }, 0);

			} else if (cmd == cmdChar+"table") { 				//table art command
                setTimeout(function() { sendChat("(╮°-°)╮┳━━┳" ); }, 0);
				setTimeout(function() { sendChat("( ╯°□°)╯ ┻━━┻" ); }, 0);
				setTimeout(function() { sendChat("┬──┬ ノ( ゜-゜ノ)" ); }, 0);
				//text art

			} else if (cmd == cmdChar+"fishies") { 		//fishies command
				if (gClient.isOwner()) {
					sendChat("╭━━╮╭━━━┳╮╭╮╭╮╭━━━┳━━━┳╮╭╮╭┳━╮╱╭╮╭━━━┳━━┳━━━┳╮╱╭┳━━┳━━━┳━━━╮ ╭╮" );
					sendChat("┃╭╮┃┃╭━╮┃┃┃┃┃┃╰╮╭╮┃╭━╮┃┃┃┃┃┃┃╰╮┃┃┃╭━━┻┫┣┫╭━╮┃┃╱┃┣┫┣┫╭━━┫╭━╮┃ ┃┃" );
					sendChat("┃╰╯╰┫┃╱┃┃┃┃┃┃┃╱┃┃┃┃┃╱┃┃┃┃┃┃┃╭╮╰╯┃┃╰━━╮┃┃┃╰━━┫╰━╯┃┃┃┃╰━━┫╰━━╮ ┃┃" );
					sendChat("┃╭━╮┃┃╱┃┃╰╯╰╯┃╱┃┃┃┃┃╱┃┃╰╯╰╯┃┃╰╮┃┃┃╭━━╯┃┃╰━━╮┃╭━╮┃┃┃┃╭━━┻━━╮┃ ╰╯" );
					sendChat("┃╰━╯┃╰━╯┣╮╭╮╭╯╭╯╰╯┃╰━╯┣╮╭╮╭┫┃╱┃┃┃┃┃╱╱╭┫┣┫╰━╯┃┃╱┃┣┫┣┫╰━━┫╰━╯┃ ╭╮" );
					sendChat("╰━━━┻━━━╯╰╯╰╯╱╰━━━┻━━━╯╰╯╰╯╰╯╱╰━╯╰╯╱╱╰━━┻━━━┻╯╱╰┻━━┻━━━┻━━━╯ ╰╯" );
					sendChat("╭━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━╮" );
					sendChat("╰━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━╯" );
					sendChat("><> \\o/" );
				} else {
					sendChat("I need the crown to show fishies in its entirety!");
				}

            } else if (cmd == cmdChar+"face") {		//face command
                var textArray = ['╥﹏╥', '(◕ᴥ◕し)', 'ʕ•ᴥ•ʔ', '(◡‿◡✿)', 'ヽ༼ ಠ益ಠ ༽ﾉ', '＾‿＾', 'ᶘ ᵒᴥᵒᶅ', '๏̯͡๏', '^ㅂ^', ' ಠ_ರೃ', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '◕◡◕', 'ಠ▃ಠ', 'ಠ╭╮ಠ', 'ಠ⌣ಠ', 'ಠ◡ಠ', 'ლ(ಠ益ಠლ)', 'ლ(◉◞౪◟◉‵ლ)', '⊙ω⊙', '⊙▂⊙', '╯‵Д′)╯彡┻━┻', '◕ω◕', '⌒▽⌒', '♥◡♥', '｡◕‿‿◕｡', '｡◕ ‿ ◕｡', '(´◉◞౪◟◉)', 'Ծ‸ Ծ', '(ᵔᴥᵔ)', '• ε •', '(⌐■_■)', '(┛◉Д◉)┛┻━┻', '(╯°□°）╯︵ ┻━┻ ', '◕ ^ ◕', '(☞ﾟ ∀ﾟ )☞', '(づ｡◕‿‿◕｡)づ', '(ノಠ益ಠ)ノ彡┻━┻', '；一_一', '\(◕ ◡ ◕\)', '°-°', '¶_¶', '( ͡° ͜ʖ ͡°)', '|)^_^(|'];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);

			} else if (cmd == cmdChar+"say") {		//say command
				if (message.substring(4).trim() == "") {
					sendChat("Usage: "+cmdChar+"say text to say.");
					return;
				}
				sendChat(message.substring(5).trim());

            } else if (cmd == cmdChar+"rename") {	//rename command
				if (message.substring(cmd.length).trim() == 0) {
					sendChat('Usage: '+cmdChar+'rename new_name');
					return;
				}
				if (message.substring(7).trim() == 420) {
					sendChat('Too high!');
					return;
				}
                if (opped) {
                    updateName(message.substring(7).trim());
					selfName = message.substring(7).trim();

                } else {
                    sendChat(noAccess);
                }

            } else if (cmd == cmdChar+"welcome") {			//welcome command
                if (opped) {
                    if (welcTemp) {
                        welcTemp = false;
                        sendChat("Room welcoming disabled.");
                    } else {
                        welcTemp = true;
                        sendChat("Room welcoming enabled.");
                    }
                } else {
                    sendChat(noAccess);
                }
			} else if (cmd == cmdChar+"tune") {			//tune command
           if (opped) {
                if (tuneTemp) {
                    tuneTemp = false;
                    sendChat("Welcome tune disabled.");
                } else {
                    tuneTemp = true;
                    sendChat("Welcome tune enabled.");
                }
            } else {
				sendChat(noAccess);
			}

            } else if (cmd == cmdChar+"ban") {						//ban command
                var target = msg.a.substring(cmd.length).trim();
				var part = getUser(target.toLowerCase());

                if (opped) {
					if (target == "") {
						sendChat("Usage "+cmdChar+"ban name_here.");
						return;
					}
                    if (part) {
						if (banned.indexOf(part._id) !== -1) {
							sendChat(part.name + " is already banned!");
							return;
						}

                        if (part._id == selfId) {			//Logan
                            sendChat("Banning " + part.name.substring(0, 4).trim() + "... wait.");
                        } else if (part._id == "4e28d8736f8a464ada652896") {	//Yoshify.
                            sendChat("You cannot ban " + selfName + "'s friend " + part.name + ".");
						} else if (part._id == "d9e6170fd899f2a94adea761") {	//StarsPiano
                            sendChat("You cannot ban " + selfName + "'s friend " + part.name + ".");
                        } else {
                            banned.push(part._id);
								sendChat(name + " banned " + part.name + ".");
                        }
                    } else {
                        sendChat(userNotFound);
                    }
                } else {
                    sendChat(noAccess);
                }

            } else if (cmd == cmdChar+"unban") {					//unban command
                var target = msg.a.substring(cmd.length).trim();
				var part = getUser(target.toLowerCase());

                if (opped) {
					if (target == "") {
						sendChat("Usage "+cmdChar+"unban name_here.");
						return;
					}
                    if (part) {
						if (banned.indexOf(part._id) == -1) {
							sendChat(part.name + " isn't banned!");
							return;
						}

                        while (banned.indexOf(part._id) !== -1) {
                            banned.splice(banned.indexOf(part._id), 1);
							sendChat(name + " unbanned " + part.name + ".");
                        }
                        while (banned.indexOf(part._id) !== -1) {
                            delete banned[banned.indexOf(part._id)];
                        }
                    } else {
                        sendChat(userNotFound);
                    }
                } else {
                    sendChat(noAccess);
                }

			} else if (cmd == cmdChar+"pardon") {	//pardon command
				if (mastered || opped) {
					banned = [];
						sendChat(name + " pardoned everyone from being banned.");
					} else {
						sendChat(noAccess);
					}

            } else if (cmd == cmdChar+"op") {				//op command
                var target = msg.a.substring(cmd.length).trim();
				var part = getUser(target.toLowerCase());

                if (opped) {
					if (target == "") {
						sendChat("Usage "+cmdChar+"op name_here.");
						return;
					}
                    if (part) {
						if (ops.indexOf(part._id) !== -1) {
							sendChat(part.name + " is already opped!");
							return;
						}

                        sendChat("Opped " + part.name + ".");
                        ops.push(part._id);

                    } else {
                        sendChat(userNotFound);
                    }
                } else {
                    sendChat(noAccess);
                }

            } else if (cmd == cmdChar+"deop") {							//deop command
                var target = msg.a.substring(cmd.length).trim();
				var part = getUser(target.toLowerCase());

                if (opped) {
					if (target == "") {
						sendChat("Usage "+cmdChar+"deop name_here.");
						return;
					}
                    if (part) {
						if (ops.indexOf(part._id) == -1) {
							sendChat(part.name + " isn't opped!");
							return;
						}

                        if (part._id == selfId) {			//Logan
                            sendChat("You cannot deop " + part.name + ".");
						} else if (part._id == "4e28d8736f8a464ada652896") {	//Yoshify.
                            sendChat("You cannot deop " + selfName + "'s friend " + part.name + ".");
						} else if (part._id == "d9e6170fd899f2a94adea761") {	//StarsPiano
                            sendChat("You cannot deop " + selfName + "'s friend " + part.name + ".");
                        } else {
                            while (ops.indexOf(part._id) !== -1) {
                                ops.splice(banned.indexOf(part._id), 1); //is this meant to say banned?
                            }
                            while (ops.indexOf(part._id) !== -1) {
                                delete ops[ops.indexOf(part._id)];
                            }
							sendChat("Deopped " + part.name + ".");
                        }
                    } else {
                        sendChat(userNotFound);
                    }
                } else {
                    sendChat(noAccess);
                }
           } else if (message.substring(0, 1) == cmdChar) {		//alternative error messages
                if (message.substring(2).trim() == "") {

                } else {
				//sendChat("Invalid command. Type !help for a list of commands you have access to."); //shhhhh
             }
		  }
        }
		botLoaded = true;
    });

	var Color = function () {
		var r, g, b;
		if (arguments.length === 1) {
			var hexa = arguments[0].toLowerCase();
			if (hexa.match(/^#[0-9a-f]{6}$/i)) {
				hexa = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hexa);
				if (hexa && hexa.length === 4) {
					r = parseInt(hexa[1], 16);
					g = parseInt(hexa[2], 16);
					b = parseInt(hexa[3], 16);
				}
			}
		} else if (arguments.length === 3) {
			r = arguments[0];
			g = arguments[1];
			b = arguments[2];
		}
		this.r = ~~r || 0;
		this.g = ~~g || 0;
		this.b = ~~b || 0;
	};

	Color.prototype.distance = function (color) {
		var d = 0;
		d += Math.pow(this.r - color.r, 2);
		d += Math.pow(this.g - color.g, 2);
		d += Math.pow(this.b - color.b, 2);
		return Math.abs(Math.sqrt(d));
	};

	Color.prototype.toHexa = function () {
		var r = this.r.toString(16),
			g = this.g.toString(16),
			b = this.b.toString(16);
		if (r.length == 1) r = "0" + r;
		if (g.length == 1) g = "0" + g;
		if (b.length == 1) b = "0" + b;
		return "#" + r + g + b;
	};

	Color.prototype.getName = function () {
		var hexa = this.toHexa();
		var low = 256;
		var name;
		for (var n in Color.map) {
			if (!Color.map.hasOwnProperty(n)) continue;
			var color = Color.map[n];
			if (color.r === this.r && color.g === this.g && color.b === this.b) {
				return n;
			}
			var dist = this.distance(color);
			if (dist < low) {
				low = dist;
				name = n;
			}
		}
		if (!name) name = this.toHexa();
		else name = "a shade of " + name;
		return name;
	};

	Color.map = {};

	Color.a = function (hexa, name) {
		Color.map[name] = new Color(hexa);
	};

	Color.a("#7CB9E8", "Aero");
	Color.a("#C9FFE5", "Aero blue");
	Color.a("#B284BE", "African purple");
	Color.a("#5D8AA8", "Air Force blue (RAF)");
	Color.a("#00308F", "Air Force blue (USAF)");
	Color.a("#72A0C1", "Air superiority blue");
	Color.a("#AF002A", "Alabama Crimson");
	Color.a("#F0F8FF", "Alice blue");
	Color.a("#E32636", "Alizarin crimson");
	Color.a("#C46210", "Alloy orange");
	Color.a("#EFDECD", "Almond");
	Color.a("#E52B50", "Amaranth");
	Color.a("#F19CBB", "Amaranth pink");
	Color.a("#AB274F", "Dark amaranth");
	Color.a("#3B7A57", "Amazon");
	Color.a("#FF7E00", "Amber");
	Color.a("#FF033E", "American rose");
	Color.a("#9966CC", "Amethyst");
	Color.a("#A4C639", "Android green");
	Color.a("#F2F3F4", "Anti-flash white");
	Color.a("#CD9575", "Antique brass");
	Color.a("#665D1E", "Antique bronze");
	Color.a("#915C83", "Antique fuchsia");
	Color.a("#841B2D", "Antique ruby");
	Color.a("#FAEBD7", "Antique white");
	Color.a("#8DB600", "Apple green");
	Color.a("#FBCEB1", "Apricot");
	Color.a("#00FFFF", "Aqua");
	Color.a("#7FFFD4", "Aquamarine");
	Color.a("#4B5320", "Army green");
	Color.a("#3B444B", "Arsenic");
	Color.a("#8F9779", "Artichoke");
	Color.a("#B2BEB5", "Ash grey");
	Color.a("#87A96B", "Asparagus");
	Color.a("#FDEE00", "Aureolin");
	Color.a("#6E7F80", "AuroMetalSaurus");
	Color.a("#568203", "Avocado");
	Color.a("#007FFF", "Azure");
	Color.a("#F0FFFF", "Azure mist/web");
	Color.a("#89CFF0", "Baby blue");
	Color.a("#A1CAF1", "Baby blue eyes");
	Color.a("#FEFEFA", "Baby powder");
	Color.a("#FF91AF", "Baker-Miller pink");
	Color.a("#21ABCD", "Ball blue");
	Color.a("#FAE7B5", "Banana Mania");
	Color.a("#FFE135", "Banana yellow");
	Color.a("#E0218A", "Barbie pink");
	Color.a("#7C0A02", "Barn red");
	Color.a("#848482", "Battleship grey");
	Color.a("#98777B", "Bazaar");
	Color.a("#9F8170", "Beaver");
	Color.a("#F5F5DC", "Beige");
	Color.a("#2E5894", "B'dazzled blue");
	Color.a("#9C2542", "Big dip o’ruby");
	Color.a("#FFE4C4", "Bisque");
	Color.a("#3D2B1F", "Bistre");
	Color.a("#967117", "Bistre brown");
	Color.a("#CAE00D", "Bitter lemon");
	Color.a("#648C11", "Bitter lime");
	Color.a("#FE6F5E", "Bittersweet");
	Color.a("#BF4F51", "Bittersweet shimmer");
	Color.a("#000000", "Black with no soul!");
	Color.a("#3D0C02", "Black bean");
	Color.a("#253529", "Black leather jacket");
	Color.a("#3B3C36", "Black olive");
	Color.a("#FFEBCD", "Blanched almond");
	Color.a("#A57164", "Blast-off bronze");
	Color.a("#318CE7", "Bleu de France");
	Color.a("#ACE5EE", "Blizzard Blue");
	Color.a("#FAF0BE", "Blond");
	Color.a("#0000FF", "Blue");
	Color.a("#1F75FE", "Blue (Crayola)");
	Color.a("#0093AF", "Blue (Munsell)");
	Color.a("#0087BD", "Blue (NCS)");
	Color.a("#333399", "Blue (pigment)");
	Color.a("#0247FE", "Blue (RYB)");
	Color.a("#A2A2D0", "Blue Bell");
	Color.a("#6699CC", "Blue-gray");
	Color.a("#0D98BA", "Blue-green");
	Color.a("#126180", "Blue sapphire");
	Color.a("#8A2BE2", "Blue-violet");
	Color.a("#5072A7", "Blue yonder");
	Color.a("#4F86F7", "Blueberry");
	Color.a("#1C1CF0", "Bluebonnet");
	Color.a("#DE5D83", "Blush");
	Color.a("#79443B", "Bole Brown");
	Color.a("#0095B6", "Bondi blue");
	Color.a("#E3DAC9", "Bone");
	Color.a("#CC0000", "Boston University Red");
	Color.a("#006A4E", "Bottle green");
	Color.a("#873260", "Boysenberry");
	Color.a("#0070FF", "Brandeis blue");
	Color.a("#B5A642", "Brass");
	Color.a("#CB4154", "Brick red");
	Color.a("#1DACD6", "Bright cerulean");
	Color.a("#66FF00", "Bright green");
	Color.a("#BF94E4", "Bright lavender");
	Color.a("#D891EF", "Bright lilac");
	Color.a("#C32148", "Bright maroon");
	Color.a("#1974D2", "Bright navy blue");
	Color.a("#FF007F", "Bright pink");
	Color.a("#08E8DE", "Bright turquoise");
	Color.a("#D19FE8", "Bright ube");
	Color.a("#F4BBFF", "Brilliant lavender");
	Color.a("#FF55A3", "Brilliant rose");
	Color.a("#FB607F", "Brink pink");
	Color.a("#004225", "British racing green");
	Color.a("#CD7F32", "Bronze");
	Color.a("#737000", "Bronze Yellow");
	Color.a("#964B00", "Brown");
	Color.a("#6B4423", "Brown-nose");
	Color.a("#FFC1CC", "Bubble gum");
	Color.a("#E7FEFF", "Bubbles");
	Color.a("#F0DC82", "Buff");
	Color.a("#7BB661", "Bud green");
	Color.a("#480607", "Bulgarian rose");
	Color.a("#800020", "Burgundy");
	Color.a("#DEB887", "Burlywood");
	Color.a("#CC5500", "Burnt orange");
	Color.a("#8A3324", "Burnt umber");
	Color.a("#BD33A4", "Byzantine");
	Color.a("#702963", "Byzantium");
	Color.a("#536872", "Cadet");
	Color.a("#5F9EA0", "Cadet blue");
	Color.a("#91A3B0", "Cadet grey");
	Color.a("#006B3C", "Cadmium green");
	Color.a("#ED872D", "Cadmium orange");
	Color.a("#E30022", "Cadmium red");
	Color.a("#FFF600", "Cadmium yellow");
	Color.a("#A67B5B", "Cafe au lait");
	Color.a("#4B3621", "Cafe noir");
	Color.a("#1E4D2B", "Cal Poly green");
	Color.a("#A3C1AD", "Cambridge Blue");
	Color.a("#EFBBCC", "Cameo pink");
	Color.a("#78866B", "Camouflage green");
	Color.a("#FFEF00", "Canary yellow");
	Color.a("#FF0800", "Candy apple red");
	Color.a("#E4717A", "Candy pink");
	Color.a("#592720", "Caput mortuum");
	Color.a("#C41E3A", "Cardinal");
	Color.a("#00CC99", "Caribbean green");
	Color.a("#960018", "Carmine");
	Color.a("#EB4C42", "Carmine pink");
	Color.a("#FF0038", "Carmine red");
	Color.a("#FFA6C9", "Carnation pink");
	Color.a("#99BADD", "Carolina blue");
	Color.a("#ED9121", "Carrot orange");
	Color.a("#00563F", "Castleton green");
	Color.a("#062A78", "Catalina blue");
	Color.a("#703642", "Catawba");
	Color.a("#C95A49", "Cedar Chest");
	Color.a("#92A1CF", "Ceil");
	Color.a("#ACE1AF", "Celadon");
	Color.a("#007BA7", "Celadon blue");
	Color.a("#2F847C", "Celadon green");
	Color.a("#4997D0", "Celestial blue");
	Color.a("#EC3B83", "Cerise pink");
	Color.a("#2A52BE", "Cerulean blue");
	Color.a("#6D9BC3", "Cerulean frost");
	Color.a("#007AA5", "CG Blue");
	Color.a("#E03C31", "CG Red");
	Color.a("#A0785A", "Chamoisee");
	Color.a("#F7E7CE", "Champagne");
	Color.a("#36454F", "Charcoal");
	Color.a("#232B2B", "Charleston green");
	Color.a("#E68FAC", "Charm pink");
	Color.a("#DFFF00", "Chartreuse");
	Color.a("#7FFF00", "Chartreuse (web)");
	Color.a("#DE3163", "Cherry");
	Color.a("#FFB7C5", "Cherry blossom pink");
	Color.a("#954535", "Chestnut");
	Color.a("#A8516E", "China rose");
	Color.a("#AA381E", "Chinese red");
	Color.a("#856088", "Chinese violet");
	Color.a("#7B3F00", "Chocolate");
	Color.a("#FFA700", "Chrome yellow");
	Color.a("#98817B", "Cinereous");
	Color.a("#E4D00A", "Citrine");
	Color.a("#9FA91F", "Citron");
	Color.a("#7F1734", "Claret");
	Color.a("#FBCCE7", "Classic rose");
	Color.a("#0047AB", "Cobalt");
	Color.a("#D2691E", "Cocoa brown");
	Color.a("#965A3E", "Coconut");
	Color.a("#6F4E37", "Coffee Brown");
	Color.a("#9BDDFF", "Columbia blue");
	Color.a("#002E63", "Cool black");
	Color.a("#8C92AC", "Cool grey");
	Color.a("#B87333", "Copper");
	Color.a("#AD6F69", "Copper penny");
	Color.a("#CB6D51", "Copper red");
	Color.a("#996666", "Copper rose");
	Color.a("#FF3800", "Coquelicot");
	Color.a("#FF7F50", "Coral");
	Color.a("#F88379", "Coral pink");
	Color.a("#FF4040", "Coral red");
	Color.a("#893F45", "Cordovan");
	Color.a("#FBEC5D", "Corn Yellow");
	Color.a("#B31B1B", "Cornell Red");
	Color.a("#6495ED", "Cornflower blue");
	Color.a("#FFF8DC", "Cornsilk");
	Color.a("#FFF8E7", "Cosmic latte");
	Color.a("#FFBCD9", "Cotton candy");
	Color.a("#FFFDD0", "Cream");
	Color.a("#DC143C", "Crimson");
	Color.a("#BE0032", "Crimson glory");
	Color.a("#00B7EB", "Cyan");
	Color.a("#58427C", "Cyber grape");
	Color.a("#FFD300", "Cyber yellow");
	Color.a("#FFFF31", "Daffodil");
	Color.a("#F0E130", "Dandelion");
	Color.a("#00008B", "Dark blue");
	Color.a("#666699", "Dark blue-gray");
	Color.a("#654321", "Dark brown");
	Color.a("#5D3954", "Dark byzantium");
	Color.a("#A40000", "Dark candy apple red");
	Color.a("#08457E", "Dark cerulean");
	Color.a("#986960", "Dark chestnut");
	Color.a("#CD5B45", "Dark coral");
	Color.a("#008B8B", "Dark cyan");
	Color.a("#536878", "Dark electric blue");
	Color.a("#B8860B", "Dark goldenrod");
	Color.a("#A9A9A9", "Dark gray");
	Color.a("#013220", "Dark green");
	Color.a("#00416A", "Dark imperial blue");
	Color.a("#1A2421", "Dark jungle green");
	Color.a("#BDB76B", "Dark khaki");
	Color.a("#734F96", "Dark lavender");
	Color.a("#534B4F", "Dark liver");
	Color.a("#543D37", "Dark liver (horses)");
	Color.a("#8B008B", "Dark magenta");
	Color.a("#003366", "Dark midnight blue");
	Color.a("#4A5D23", "Dark moss green");
	Color.a("#556B2F", "Dark olive green");
	Color.a("#FF8C00", "Dark orange");
	Color.a("#9932CC", "Dark orchid");
	Color.a("#779ECB", "Dark pastel blue");
	Color.a("#03C03C", "Dark pastel green");
	Color.a("#966FD6", "Dark pastel purple");
	Color.a("#C23B22", "Dark pastel red");
	Color.a("#E75480", "Dark pink");
	Color.a("#003399", "Dark powder blue");
	Color.a("#4F3A3C", "Dark puce");
	Color.a("#872657", "Dark raspberry");
	Color.a("#8B0000", "Dark red");
	Color.a("#E9967A", "Dark salmon");
	Color.a("#560319", "Dark Scarlet");
	Color.a("#8FBC8F", "Dark sea green");
	Color.a("#3C1414", "Dark sienna");
	Color.a("#8CBED6", "Dark sky blue");
	Color.a("#483D8B", "Dark slate blue");
	Color.a("#2F4F4F", "Dark slate gray");
	Color.a("#177245", "Dark spring green");
	Color.a("#918151", "Dark tan");
	Color.a("#FFA812", "Dark tangerine");
	Color.a("#CC4E5C", "Dark terra cotta");
	Color.a("#00CED1", "Dark turquoise");
	Color.a("#D1BEA8", "Dark vanilla");
	Color.a("#9400D3", "Dark violet");
	Color.a("#9B870C", "Dark yellow");
	Color.a("#00703C", "Dartmouth green");
	Color.a("#555555", "Davy's grey");
	Color.a("#D70A53", "Debian red");
	Color.a("#A9203E", "Deep carmine");
	Color.a("#EF3038", "Deep carmine pink");
	Color.a("#E9692C", "Deep carrot orange");
	Color.a("#DA3287", "Deep cerise");
	Color.a("#B94E48", "Deep chestnut");
	Color.a("#C154C1", "Deep fuchsia");
	Color.a("#004B49", "Deep jungle green");
	Color.a("#F5C71A", "Deep lemon");
	Color.a("#9955BB", "Deep lilac");
	Color.a("#CC00CC", "Deep magenta");
	Color.a("#D473D4", "Deep mauve");
	Color.a("#355E3B", "Deep moss green");
	Color.a("#FFCBA4", "Deep peach");
	Color.a("#A95C68", "Deep puce");
	Color.a("#843F5B", "Deep ruby");
	Color.a("#FF9933", "Deep saffron");
	Color.a("#00BFFF", "Deep sky blue");
	Color.a("#4A646C", "Deep Space Sparkle");
	Color.a("#7E5E60", "Deep Taupe");
	Color.a("#66424D", "Deep Tuscan red");
	Color.a("#BA8759", "Deer");
	Color.a("#1560BD", "Denim");
	Color.a("#EDC9AF", "Desert sand");
	Color.a("#EA3C53", "Desire");
	Color.a("#B9F2FF", "Diamond");
	Color.a("#696969", "Dim gray");
	Color.a("#9B7653", "Dirt");
	Color.a("#1E90FF", "Dodger blue");
	Color.a("#D71868", "Dogwood rose");
	Color.a("#85BB65", "Dollar bill");
	Color.a("#664C28", "Donkey Brown");
	Color.a("#00009C", "Duke blue");
	Color.a("#E5CCC9", "Dust storm");
	Color.a("#EFDFBB", "Dutch white");
	Color.a("#E1A95F", "Earth yellow");
	Color.a("#555D50", "Ebony");
	Color.a("#1B1B1B", "Logan's old colour </3");				//Logan's old colour </3
	Color.a("#614051", "Eggplant");
	Color.a("#F0EAD6", "Eggshell");
	Color.a("#1034A6", "Egyptian blue");
	Color.a("#7DF9FF", "Electric blue");
	Color.a("#FF003F", "Electric crimson");
	Color.a("#00FF00", "Electric green");
	Color.a("#6F00FF", "Electric indigo");
	Color.a("#CCFF00", "Electric lime");
	Color.a("#BF00FF", "Electric purple");
	Color.a("#3F00FF", "Electric ultramarine");
	Color.a("#FFFF00", "Electric yellow");
	Color.a("#50C878", "Emerald");
	Color.a("#6C3082", "Eminence");
	Color.a("#1B4D3E", "English green");
	Color.a("#B48395", "English lavender");
	Color.a("#AB4B52", "English red");
	Color.a("#563C5C", "English violet");
	Color.a("#96C8A2", "Eton blue");
	Color.a("#44D7A8", "Eucalyptus");
	Color.a("#801818", "Falu red");
	Color.a("#B53389", "Fandango");
	Color.a("#DE5285", "Fandango pink");
	Color.a("#F400A1", "Fashion fuchsia");
	Color.a("#E5AA70", "Fawn");
	Color.a("#4D5D53", "Feldgrau");
	Color.a("#4F7942", "Fern green");
	Color.a("#FF2800", "Ferrari Red");
	Color.a("#6C541E", "Field drab");
	Color.a("#B22222", "Firebrick");
	Color.a("#CE2029", "Fire engine red");
	Color.a("#E25822", "Flame");
	Color.a("#FC8EAC", "Flamingo pink");
	Color.a("#F7E98E", "Flavescent");		//Logan's new stupid colour?
	Color.a("#EEDC82", "Flax");
	Color.a("#A2006D", "Flirt");
	Color.a("#FFFAF0", "Floral white");
	Color.a("#FFBF00", "Fluorescent orange");
	Color.a("#FF1493", "Fluorescent pink");
	Color.a("#FF004F", "Folly");
	Color.a("#014421", "Forest green");
	Color.a("#228B22", "Forest green (web)");
	Color.a("#856D4D", "French bistre");
	Color.a("#0072BB", "French blue");
	Color.a("#FD3F92", "French fuchsia");
	Color.a("#86608E", "French lilac");
	Color.a("#9EFD38", "French lime");
	Color.a("#FD6C9E", "French pink");
	Color.a("#4E1609", "French puce");
	Color.a("#C72C48", "French raspberry");
	Color.a("#F64A8A", "French rose");
	Color.a("#77B5FE", "French sky blue");
	Color.a("#8806CE", "French violet");
	Color.a("#AC1E44", "French wine");
	Color.a("#A6E7FF", "Fresh Air");
	Color.a("#FF77FF", "Fuchsia pink");
	Color.a("#CC397B", "Fuchsia purple");
	Color.a("#C74375", "Fuchsia rose");
	Color.a("#E48400", "Fulvous");
	Color.a("#CC6666", "Fuzzy Wuzzy");
	Color.a("#DCDCDC", "Gainsboro");
	Color.a("#E49B0F", "Gamboge");
	Color.a("#007F66", "Generic viridian");
	Color.a("#F8F8FF", "Ghost white");
	Color.a("#FE5A1D", "Giants orange");
	Color.a("#B06500", "Ginger");
	Color.a("#6082B6", "Glaucous");
	Color.a("#E6E8FA", "Glitter");
	Color.a("#00AB66", "GO green");
	Color.a("#D4AF37", "Gold (metallic)");
	Color.a("#FFD700", "Gold (web) (Golden)");
	Color.a("#85754E", "Gold Fusion");
	Color.a("#996515", "Golden brown");
	Color.a("#FCC200", "Golden poppy");
	Color.a("#FFDF00", "Golden yellow");
	Color.a("#DAA520", "Goldenrod");
	Color.a("#A8E4A0", "Granny Smith Apple");
	Color.a("#6F2DA8", "Grape");
	Color.a("#808080", "Gray");
	Color.a("#BEBEBE", "Gray (X11 gray)");
	Color.a("#465945", "Gray-asparagus");
	Color.a("#1CAC78", "Green (Crayola)");
	Color.a("#008000", "Green");
	Color.a("#00A877", "Green (Munsell)");
	Color.a("#009F6B", "Green (NCS)");
	Color.a("#00A550", "Green (pigment)");
	Color.a("#66B032", "Green (RYB)");
	Color.a("#ADFF2F", "Green-yellow");
	Color.a("#A99A86", "Grullo");
	Color.a("#663854", "Halaya ube");
	Color.a("#446CCF", "Han blue");
	Color.a("#5218FA", "Beyonce Purple");
	Color.a("#E9D66B", "Hansa yellow");
	Color.a("#3FFF00", "Harlequin");
	Color.a("#C90016", "Harvard crimson");
	Color.a("#DA9100", "Harvest gold");
	Color.a("#DF73FF", "Heliotrope");
	Color.a("#AA98A9", "Heliotrope gray");
	Color.a("#F0FFF0", "Honeydew");
	Color.a("#006DB0", "Honolulu blue");
	Color.a("#49796B", "Chloe's green");
	Color.a("#FF1DCE", "Hot magenta");
	Color.a("#FF69B4", "Hot pink");
	Color.a("#71A6D2", "Iceberg");
	Color.a("#FCF75E", "Icterine");
	Color.a("#319177", "Illuminating Emerald");
	Color.a("#602F6B", "Imperial");
	Color.a("#002395", "Imperial blue");
	Color.a("#66023C", "Imperial purple");
	Color.a("#ED2939", "Imperial red");
	Color.a("#B2EC5D", "Inchworm");
	Color.a("#4C516D", "Independence");
	Color.a("#138808", "India green");
	Color.a("#CD5C5C", "Indian red");
	Color.a("#E3A857", "Indian yellow");
	Color.a("#4B0082", "Indigo");
	Color.a("#002FA7", "International Klein Blue");
	Color.a("#FF4F00", "International orange (aerospace)");
	Color.a("#BA160C", "International orange (engineering)");
	Color.a("#C0362C", "International orange (Golden Gate Bridge)");
	Color.a("#5A4FCF", "Iris");
	Color.a("#F4F0EC", "Isabelline");
	Color.a("#009000", "Islamic green");
	Color.a("#B2FFFF", "Italian sky blue");
	Color.a("#FFFFF0", "Ivory");
	Color.a("#00A86B", "Jade");
	Color.a("#9D2933", "Japanese carmine");
	Color.a("#264348", "Japanese indigo");
	Color.a("#5B3256", "Japanese violet");
	Color.a("#D73B3E", "Jasper");
	Color.a("#A50B5E", "Jazzberry jam");
	Color.a("#DA614E", "Jelly Bean");
	Color.a("#343434", "Jet");
	Color.a("#F4CA16", "Jonquil");
	Color.a("#8AB9F1", "Jordy blue");
	Color.a("#BDDA57", "June bud");
	Color.a("#29AB87", "Jungle green");
	Color.a("#4CBB17", "Kelly green");
	Color.a("#7C1C05", "Kenyan copper");
	Color.a("#3AB09E", "Keppel");
	Color.a("#C3B091", "Khaki");
	Color.a("#E79FC4", "Kobi");
	Color.a("#354230", "Kombu green");
	Color.a("#E8000D", "KU Crimson");
	Color.a("#087830", "La Salle Green");
	Color.a("#D6CADD", "Languid lavender");
	Color.a("#26619C", "Lapis lazuli");
	Color.a("#A9BA9D", "Laurel green");
	Color.a("#CF1020", "Lava");
	Color.a("#B57EDC", "Lavender (floral)");
	Color.a("#CCCCFF", "Lavender blue");
	Color.a("#FFF0F5", "Lavender blush");
	Color.a("#C4C3D0", "Lavender gray");
	Color.a("#9457EB", "Lavender indigo");
	Color.a("#EE82EE", "Lavender magenta");
	Color.a("#E6E6FA", "Lavender mist");
	Color.a("#FBAED2", "Lavender pink");
	Color.a("#967BB6", "Lavender purple");
	Color.a("#FBA0E3", "Lavender rose");
	Color.a("#7CFC00", "Lawn green");
	Color.a("#FFF700", "Lemon");
	Color.a("#FFFACD", "Lemon chiffon");
	Color.a("#CCA01D", "Lemon curry");
	Color.a("#FDFF00", "Lemon glacier");
	Color.a("#E3FF00", "Lemon lime");
	Color.a("#F6EABE", "Lemon meringue");
	Color.a("#FFF44F", "Lemon yellow");
	Color.a("#1A1110", "Licorice");
	Color.a("#545AA7", "Liberty");
	Color.a("#FDD5B1", "Light apricot");
	Color.a("#ADD8E6", "Light blue");
	Color.a("#B5651D", "Light brown");
	Color.a("#E66771", "Light carmine pink");
	Color.a("#F08080", "Light coral");
	Color.a("#93CCEA", "Light cornflower blue");
	Color.a("#F56991", "Light crimson");
	Color.a("#E0FFFF", "Light cyan");
	Color.a("#FF5CCD", "Light deep pink");
	Color.a("#C8AD7F", "Light French beige");
	Color.a("#F984EF", "Light fuchsia pink");
	Color.a("#FAFAD2", "Light goldenrod yellow");
	Color.a("#D3D3D3", "Light gray");
	Color.a("#90EE90", "Light green");
	Color.a("#FFB3DE", "Light hot pink");
	Color.a("#F0E68C", "Light khaki");
	Color.a("#D39BCB", "Light medium orchid");
	Color.a("#ADDFAD", "Light moss green");
	Color.a("#E6A8D7", "Light orchid");
	Color.a("#B19CD9", "Light pastel purple");
	Color.a("#FFB6C1", "Light pink");
	Color.a("#E97451", "Light red ochre");
	Color.a("#FFA07A", "Light salmon");
	Color.a("#FF9999", "Light salmon pink");
	Color.a("#20B2AA", "Light sea green");
	Color.a("#87CEFA", "Light sky blue");
	Color.a("#778899", "Light slate gray");
	Color.a("#B0C4DE", "Light steel blue");
	Color.a("#B38B6D", "Light taupe");
	Color.a("#FFFFE0", "Light yellow");
	Color.a("#C8A2C8", "Lilac");
	Color.a("#BFFF00", "Lime");
	Color.a("#32CD32", "Lime green");
	Color.a("#9DC209", "Limerick");
	Color.a("#195905", "Prostitute green");
	Color.a("#FAF0E6", "Linen");
	Color.a("#6CA0DC", "Little boy blue");
	Color.a("#B86D29", "Liver (dogs)");
	Color.a("#6C2E1F", "Liver");
	Color.a("#987456", "Liver chestnut");
	Color.a("#FFE4CD", "Lumber");
	Color.a("#E62020", "Lust");
	Color.a("#FF00FF", "Magenta");
	Color.a("#CA1F7B", "Magenta (dye)");
	Color.a("#D0417E", "Magenta (Pantone)");
	Color.a("#FF0090", "Magenta (process)");
	Color.a("#9F4576", "Magenta haze");
	Color.a("#AAF0D1", "Magic mint");
	Color.a("#F8F4FF", "Magnolia");
	Color.a("#C04000", "Mahogany");
	Color.a("#6050DC", "Majorelle Blue");
	Color.a("#0BDA51", "Malachite");
	Color.a("#979AAA", "Manatee");
	Color.a("#FF8243", "Mango Tango");
	Color.a("#74C365", "Mantis");			//The colour of Mantis (#78cb53) - new fav colour
	Color.a("#880085", "Mardi Gras");
	Color.a("#800000", "Maroon");
	Color.a("#E0B0FF", "Mauve");
	Color.a("#915F6D", "Mauve taupe");
	Color.a("#EF98AA", "Mauvelous");
	Color.a("#4C9141", "May green");
	Color.a("#73C2FB", "Maya blue");
	Color.a("#E5B73B", "Golden");
	Color.a("#66DDAA", "Medium aquamarine");
	Color.a("#0000CD", "Medium blue");
	Color.a("#E2062C", "Medium candy apple red");
	Color.a("#AF4035", "Medium carmine");
	Color.a("#035096", "Medium electric blue");
	Color.a("#1C352D", "Medium jungle green");
	Color.a("#BA55D3", "Medium orchid");
	Color.a("#9370DB", "Medium purple");
	Color.a("#BB3385", "Medium red-violet");
	Color.a("#AA4069", "Medium ruby");
	Color.a("#3CB371", "Medium sea green");
	Color.a("#80DAEB", "Medium sky blue");
	Color.a("#7B68EE", "Medium slate blue");
	Color.a("#C9DC87", "Medium spring bud");
	Color.a("#00FA9A", "Medium spring green");
	Color.a("#674C47", "Medium taupe");
	Color.a("#48D1CC", "Medium turquoise");
	Color.a("#D9603B", "Pale vermilion");
	Color.a("#F8B878", "Mellow apricot");
	Color.a("#F8DE7E", "Mellow yellow");
	Color.a("#FDBCB4", "Melon");
	Color.a("#0A7E8C", "Metallic Seaweed");
	Color.a("#9C7C38", "Metallic Sunburst");
	Color.a("#E4007C", "Mexican pink");
	Color.a("#191970", "Midnight blue");
	Color.a("#004953", "Midnight green (eagle green)");
	Color.a("#FFC40C", "Mikado yellow");
	Color.a("#E3F988", "Mindaro");
	Color.a("#3EB489", "Mint");
	Color.a("#F5FFFA", "Mint cream");
	Color.a("#98FF98", "Mint green");
	Color.a("#FFE4E1", "Misty rose");
	Color.a("#73A9C2", "Moonstone blue");
	Color.a("#AE0C00", "Mordant red 19");
	Color.a("#8A9A5B", "Moss green");
	Color.a("#30BA8F", "Mountain Meadow");
	Color.a("#997A8D", "Mountbatten pink");
	Color.a("#18453B", "MSU Green");
	Color.a("#306030", "Mughal green");
	Color.a("#C54B8C", "Mulberry");
	Color.a("#FFDB58", "Mustard");
	Color.a("#317873", "Myrtle green");
	Color.a("#F6ADC6", "Nadeshiko pink");
	Color.a("#2A8000", "Napier green");
	Color.a("#FFDEAD", "Navajo white");
	Color.a("#000080", "Navy");
	Color.a("#FFA343", "Neon Carrot");
	Color.a("#FE4164", "Neon fuchsia");
	Color.a("#39FF14", "Neon green");
	Color.a("#214FC6", "New Car");
	Color.a("#D7837F", "New York pink");
	Color.a("#A4DDED", "Non-photo blue");
	Color.a("#059033", "North Texas Green");
	Color.a("#E9FFDB", "Nyanza");
	Color.a("#0077BE", "Ocean Boat Blue");
	Color.a("#CC7722", "Ochre");
	Color.a("#43302E", "Old burgundy");
	Color.a("#CFB53B", "Old gold");
	Color.a("#FDF5E6", "Old lace");
	Color.a("#796878", "Old lavender");
	Color.a("#673147", "Old mauve");
	Color.a("#867E36", "Old moss green");
	Color.a("#C08081", "Old rose");
	Color.a("#808000", "Olive");
	Color.a("#6B8E23", "Olive Drab #3");
	Color.a("#3C341F", "Olive Drab #7");
	Color.a("#9AB973", "Olivine");
	Color.a("#353839", "Onyx");
	Color.a("#B784A7", "Opera mauve");
	Color.a("#FF7F00", "Orange");
	Color.a("#FF7538", "Orange (Crayola)");
	Color.a("#FF5800", "Orange (Pantone)");
	Color.a("#FB9902", "Orange (RYB)");
	Color.a("#FFA500", "Orange (web)");
	Color.a("#FF9F00", "Orange peel");
	Color.a("#FF4500", "Orange-red");
	Color.a("#DA70D6", "Orchid");
	Color.a("#F2BDCD", "Orchid pink");
	Color.a("#FB4F14", "Orioles orange");
	Color.a("#414A4C", "Outer Space");
	Color.a("#FF6E4A", "Outrageous Orange");
	Color.a("#002147", "Oxford Blue");
	Color.a("#990000", "Crimson Red");
	Color.a("#006600", "Pakistan green");
	Color.a("#273BE2", "Palatinate blue");
	Color.a("#682860", "Palatinate purple");
	Color.a("#BCD4E6", "Pale aqua");
	Color.a("#AFEEEE", "Pale blue");
	Color.a("#987654", "Pale brown");
	Color.a("#9BC4E2", "Pale cerulean");
	Color.a("#DDADAF", "Pale chestnut");
	Color.a("#DA8A67", "Pale copper");
	Color.a("#ABCDEF", "Pale cornflower blue");
	Color.a("#E6BE8A", "Pale gold");
	Color.a("#EEE8AA", "Pale goldenrod");
	Color.a("#98FB98", "Pale green");
	Color.a("#DCD0FF", "Pale lavender");
	Color.a("#F984E5", "Pale magenta");
	Color.a("#FADADD", "Pale pink");
	Color.a("#DDA0DD", "Pale plum");
	Color.a("#DB7093", "Nipple");
	Color.a("#96DED1", "Pale robin egg blue");
	Color.a("#C9C0BB", "Pale silver");
	Color.a("#ECEBBD", "Pale spring bud");
	Color.a("#BC987E", "Pale taupe");
	Color.a("#78184A", "Pansy purple");
	Color.a("#009B7D", "Paolo Veronese green");
	Color.a("#FFEFD5", "Papaya whip");
	Color.a("#E63E62", "Paradise pink");
	Color.a("#AEC6CF", "Pastel blue");
	Color.a("#836953", "Pastel brown");
	Color.a("#CFCFC4", "Pastel gray");
	Color.a("#77DD77", "Pastel green");
	Color.a("#F49AC2", "Pastel magenta");
	Color.a("#FFB347", "Pastel orange");
	Color.a("#DEA5A4", "Pastel pink");
	Color.a("#B39EB5", "Pastel purple");
	Color.a("#FF6961", "Pastel red");
	Color.a("#CB99C9", "Pastel violet");
	Color.a("#FDFD96", "Pastel yellow");
	Color.a("#FFE5B4", "Peach");
	Color.a("#FFCC99", "Peach-orange");
	Color.a("#FFDAB9", "Peach puff");
	Color.a("#FADFAD", "Peach-yellow");
	Color.a("#D1E231", "Pear");
	Color.a("#EAE0C8", "Pearl");
	Color.a("#88D8C0", "Dolphin Aqua");
	Color.a("#B768A2", "Pearly purple");
	Color.a("#E6E200", "Peridot");
	Color.a("#1C39BB", "Persian blue");
	Color.a("#00A693", "Persian green");
	Color.a("#32127A", "Persian indigo");
	Color.a("#D99058", "Persian orange");
	Color.a("#F77FBE", "Persian pink");
	Color.a("#701C1C", "Persian plum");
	Color.a("#CC3333", "Persian red");
	Color.a("#FE28A2", "Persian rose");
	Color.a("#EC5800", "Persimmon");
	Color.a("#CD853F", "Peru");
	Color.a("#000F89", "Phthalo blue");
	Color.a("#123524", "Phthalo green");
	Color.a("#45B1E8", "Picton blue");
	Color.a("#C30B4E", "Pictorial carmine");
	Color.a("#FDDDE6", "Piggy pink");
	Color.a("#01796F", "Pine green");
	Color.a("#FFC0CB", "Pink");
	Color.a("#D74894", "Pink (Pantone)");
	Color.a("#FFDDF4", "Pink lace");
	Color.a("#D8B2D1", "Pink lavender");
	Color.a("#FF9966", "Pink-orange");
	Color.a("#E7ACCF", "Pink pearl");
	Color.a("#F78FA7", "Pink Sherbet");
	Color.a("#93C572", "Pistachio");
	Color.a("#E5E4E2", "Platinum");
	Color.a("#8E4585", "Plum");
	Color.a("#BE4F62", "Popstar");
	Color.a("#FF5A36", "Portland Orange");
	Color.a("#B0E0E6", "Powder blue");
	Color.a("#FF8F00", "Princeton orange");
	Color.a("#003153", "Prussian blue");
	Color.a("#DF00FF", "Psychedelic purple");
	Color.a("#CC8899", "Puce");
	Color.a("#644117", "Pullman Brown (UPS Brown)");
	Color.a("#FF7518", "Pumpkin");
	Color.a("#800080", "Purple");
	Color.a("#9F00C5", "Purple (Munsell)");
	Color.a("#A020F0", "Purple");
	Color.a("#69359C", "Purple Heart");
	Color.a("#9678B6", "Purple mountain majesty");
	Color.a("#4E5180", "Purple navy");
	Color.a("#FE4EDA", "Purple pizzazz");
	Color.a("#50404D", "Purple taupe");
	Color.a("#9A4EAE", "Purpureus");
	Color.a("#51484F", "Quartz");
	Color.a("#436B95", "Queen blue");
	Color.a("#E8CCD7", "Queen pink");
	Color.a("#8E3A59", "Quinacridone magenta");
	Color.a("#FF355E", "Radical Red");
	Color.a("#FBAB60", "Rajah");
	Color.a("#E30B5D", "Raspberry");
	Color.a("#E25098", "Raspberry pink");
	Color.a("#B3446C", "Raspberry rose");
	Color.a("#826644", "Raw umber");
	Color.a("#FF33CC", "Razzle dazzle rose");
	Color.a("#E3256B", "Razzmatazz");
	Color.a("#8D4E85", "Razzmic Berry");
	Color.a("#FF0000", "Red");
	Color.a("#EE204D", "Red (Crayola)");
	Color.a("#F2003C", "Red (Munsell)");
	Color.a("#C40233", "Red (NCS)");
	Color.a("#ED1C24", "Red (pigment)");
	Color.a("#FE2712", "Red (RYB)");
	Color.a("#A52A2A", "Red-brown");
	Color.a("#860111", "Red devil");
	Color.a("#FF5349", "Red-orange");
	Color.a("#E40078", "Red-purple");
	Color.a("#C71585", "Red-violet");
	Color.a("#A45A52", "Redwood");
	Color.a("#522D80", "Regalia");
	Color.a("#002387", "Resolution blue");
	Color.a("#777696", "Rhythm");
	Color.a("#004040", "Rich black");
	Color.a("#F1A7FE", "Rich brilliant lavender");
	Color.a("#D70040", "Rich carmine");
	Color.a("#0892D0", "Rich electric blue");
	Color.a("#A76BCF", "Rich lavender");
	Color.a("#B666D2", "Rich lilac");
	Color.a("#B03060", "Rich maroon");
	Color.a("#444C38", "Rifle green");
	Color.a("#704241", "Deep Roast coffee");
	Color.a("#00CCCC", "Robin egg blue");
	Color.a("#8A7F80", "Rocket metallic");
	Color.a("#838996", "Roman silver");
	Color.a("#F9429E", "Rose bonbon");
	Color.a("#674846", "Rose ebony");
	Color.a("#B76E79", "Rose gold");
	Color.a("#FF66CC", "Rose pink");
	Color.a("#C21E56", "Rose red");
	Color.a("#905D5D", "Rose taupe");
	Color.a("#AB4E52", "Rose vale");
	Color.a("#65000B", "Rosewood");
	Color.a("#D40000", "Rosso corsa");
	Color.a("#BC8F8F", "Rosy brown");
	Color.a("#0038A8", "Royal azure");
	Color.a("#002366", "Royal blue");
	Color.a("#4169E1", "Royal light blue");
	Color.a("#CA2C92", "Royal fuchsia");
	Color.a("#7851A9", "Royal purple");
	Color.a("#FADA5E", "Royal yellow");
	Color.a("#CE4676", "Ruber");
	Color.a("#D10056", "Rubine red");
	Color.a("#E0115F", "Ruby");
	Color.a("#9B111E", "Ruby red");
	Color.a("#FF0028", "Ruddy");
	Color.a("#BB6528", "Ruddy brown");
	Color.a("#E18E96", "Ruddy pink");
	Color.a("#A81C07", "Rufous");
	Color.a("#80461B", "Russet");
	Color.a("#679267", "Russian green");
	Color.a("#32174D", "Russian violet");
	Color.a("#B7410E", "Rust");
	Color.a("#DA2C43", "Rusty red");
	Color.a("#8B4513", "Saddle brown");
	Color.a("#FF6700", "Safety orange (blaze orange)");
	Color.a("#EED202", "Safety yellow");
	Color.a("#F4C430", "Saffron");
	Color.a("#BCB88A", "Sage");
	Color.a("#23297A", "St. Patrick's blue");
	Color.a("#FA8072", "Salmon");
	Color.a("#FF91A4", "Salmon pink");
	Color.a("#C2B280", "Sand");
	Color.a("#ECD540", "Sandstorm");
	Color.a("#F4A460", "Sandy brown");
	Color.a("#92000A", "Sangria");
	Color.a("#507D2A", "Sap green");
	Color.a("#0F52BA", "Sapphire");
	Color.a("#0067A5", "Sapphire blue");
	Color.a("#CBA135", "Satin sheen gold");
	Color.a("#FF2400", "Scarlet");
	Color.a("#FFD800", "School bus yellow");
	Color.a("#76FF7A", "Screamin' Green");
	Color.a("#006994", "Sea blue");
	Color.a("#2E8B57", "Sea green");
	Color.a("#321414", "Seal brown");
	Color.a("#FFF5EE", "Seashell");
	Color.a("#FFBA00", "Selective yellow");
	Color.a("#704214", "Sepia");
	Color.a("#8A795D", "Shadow");
	Color.a("#778BA5", "Shadow blue");
	Color.a("#FFCFF1", "Shampoo");
	Color.a("#009E60", "Shamrock green");
	Color.a("#8FD400", "Sheen Green");
	Color.a("#D98695", "Shimmering Blush");
	Color.a("#FC0FC0", "Shocking pink");
	Color.a("#882D17", "Sienna");
	Color.a("#C0C0C0", "Silver");
	Color.a("#ACACAC", "Silver chalice");
	Color.a("#5D89BA", "Silver Lake blue");
	Color.a("#C4AEAD", "Silver pink");
	Color.a("#BFC1C2", "Silver sand");
	Color.a("#CB410B", "Sinopia");
	Color.a("#007474", "Skobeloff");
	Color.a("#87CEEB", "Sky blue");
	Color.a("#CF71AF", "Sky magenta");
	Color.a("#6A5ACD", "Slate blue");
	Color.a("#708090", "Slate gray");
	Color.a("#C84186", "Smitten");
	Color.a("#738276", "Smoke");
	Color.a("#933D41", "Smokey topaz");
	Color.a("#100C08", "Smoky black");
	Color.a("#FFFAFA", "Snow");
	Color.a("#CEC8EF", "Soap");
	Color.a("#893843", "Solid pink");
	Color.a("#757575", "Sonic silver");
	Color.a("#9E1316", "Spartan Crimson");
	Color.a("#1D2951", "Space cadet");
	Color.a("#807532", "Spanish bistre");
	Color.a("#0070B8", "Spanish blue");
	Color.a("#D10047", "Spanish carmine");
	Color.a("#E51A4C", "Spanish crimson");
	Color.a("#989898", "Spanish gray");
	Color.a("#009150", "Spanish green");
	Color.a("#E86100", "Spanish orange");
	Color.a("#F7BFBE", "Spanish pink");
	Color.a("#E60026", "Spanish red");
	Color.a("#4C2882", "Spanish violet");
	Color.a("#007F5C", "Spanish viridian");
	Color.a("#0FC0FC", "Spiro Disco Ball");
	Color.a("#A7FC00", "Spring bud");
	Color.a("#00FF7F", "Spring green");
	Color.a("#007BB8", "Star command blue");
	Color.a("#4682B4", "Steel blue");
	Color.a("#CC33CC", "Steel pink");
	Color.a("#4F666A", "Stormcloud");
	Color.a("#E4D96F", "Straw");
	Color.a("#FC5A8D", "Strawberry");
	Color.a("#FFCC33", "Sunglow");
	Color.a("#E3AB57", "Sunray");
	Color.a("#FAD6A5", "Sunset");
	Color.a("#FD5E53", "Sunset orange");
	Color.a("#CF6BA9", "Super pink");
	Color.a("#D2B48C", "Tan");
	Color.a("#F94D00", "Tangelo");
	Color.a("#F28500", "Tangerine");
	Color.a("#FFCC00", "Tangerine yellow");
	Color.a("#483C32", "Dark Grayish Brown");
	Color.a("#8B8589", "Taupe gray");
	Color.a("#D0F0C0", "Tea green");
	Color.a("#F4C2C2", "Tea rose");
	Color.a("#008080", "Teal");
	Color.a("#367588", "Teal blue");
	Color.a("#99E6B3", "Teal deer");
	Color.a("#00827F", "Teal green");
	Color.a("#CF3476", "Telemagenta");
	Color.a("#CD5700", "Tenne");
	Color.a("#E2725B", "Terra cotta");
	Color.a("#D8BFD8", "Thistle");
	Color.a("#DE6FA1", "Thulian pink");
	Color.a("#FC89AC", "Tickle Me Pink");
	Color.a("#0ABAB5", "Tiffany Blue");
	Color.a("#E08D3C", "Tiger's eye");
	Color.a("#DBD7D2", "Timberwolf");
	Color.a("#EEE600", "Titanium yellow");
	Color.a("#FF6347", "Tomato");
	Color.a("#746CC0", "Toolbox");
	Color.a("#FFC87C", "Topaz");
	Color.a("#FD0E35", "Tractor red");
	Color.a("#00755E", "Tropical rain forest");
	Color.a("#0073CF", "True Blue");
	Color.a("#417DC1", "Tufts Blue");
	Color.a("#FF878D", "Tulip");
	Color.a("#DEAA88", "Tumbleweed");
	Color.a("#B57281", "Turkish rose");
	Color.a("#40E0D0", "Turquoise");
	Color.a("#00FFEF", "Turquoise blue");
	Color.a("#A0D6B4", "Turquoise green");
	Color.a("#7C4848", "Tuscan red");
	Color.a("#C09999", "Tuscany");
	Color.a("#8A496B", "Twilight lavender");
	Color.a("#0033AA", "UA blue");
	Color.a("#D9004C", "UA red");
	Color.a("#8878C3", "Ube");
	Color.a("#536895", "UCLA Blue");
	Color.a("#FFB300", "UCLA Gold");
	Color.a("#3CD070", "UFO Green");
	Color.a("#120A8F", "Ultramarine");
	Color.a("#4166F5", "Ultramarine blue");
	Color.a("#FF6FFF", "Ultra pink");
	Color.a("#635147", "Umber");
	Color.a("#FFDDCA", "Unbleached silk");
	Color.a("#5B92E5", "United Nations blue");
	Color.a("#B78727", "University of California Gold");
	Color.a("#FFFF66", "Unmellow yellow");
	Color.a("#7B1113", "UP Maroon");
	Color.a("#AE2029", "Upsdell red");
	Color.a("#E1AD21", "Urobilin");
	Color.a("#004F98", "USAFA blue");
	Color.a("#F77F00", "University of Tennessee Orange");
	Color.a("#D3003F", "Utah Crimson");
	Color.a("#F3E5AB", "Vanilla");
	Color.a("#F38FA9", "Vanilla ice");
	Color.a("#C5B358", "Vegas gold");
	Color.a("#C80815", "Venetian red");
	Color.a("#43B3AE", "Verdigris");
	Color.a("#E34234", "Medium vermilion");
	Color.a("#D9381E", "Vermilion");
	Color.a("#8F00FF", "Violet");
	Color.a("#7F00FF", "Violet (color wheel)");
	Color.a("#8601AF", "Violet (RYB)");
	Color.a("#324AB2", "Logie Bear");
	Color.a("#F75394", "Violet-red");
	Color.a("#40826D", "Viridian");
	Color.a("#009698", "Viridian green");
	Color.a("#922724", "Vivid auburn");
	Color.a("#9F1D35", "Vivid burgundy");
	Color.a("#DA1D81", "Vivid cerise");
	Color.a("#CC00FF", "Vivid orchid");
	Color.a("#00CCFF", "Vivid sky blue");
	Color.a("#FFA089", "Vivid tangerine");
	Color.a("#9F00FF", "Vivid violet");
	Color.a("#004242", "Warm black");
	Color.a("#A4F4F9", "Waterspout");
	Color.a("#645452", "Wenge");
	Color.a("#F5DEB3", "Wheat");
	Color.a("#FFFFFF", "White");
	Color.a("#F5F5F5", "White smoke");
	Color.a("#A2ADD0", "Wild blue yonder");
	Color.a("#D470A2", "Wild orchid");
	Color.a("#FF43A4", "Wild Strawberry");
	Color.a("#FC6C85", "Wild watermelon");
	Color.a("#FD5800", "Willpower orange");
	Color.a("#A75502", "Windsor tan");
	Color.a("#722F37", "Wine");
	Color.a("#C9A0DC", "Wisteria");
	Color.a("#C19A6B", "Wood brown");
	Color.a("#738678", "Xanadu");
	Color.a("#0F4D92", "Yale Blue");
	Color.a("#1C2841", "Yankees blue");
	Color.a("#FCE883", "Yellow Crayola");
	Color.a("#EFCC00", "Yellow Munsell");
	Color.a("#FEDF00", "Yellow Pantone");
	Color.a("#FEFE33", "Yellow");
	Color.a("#9ACD32", "Yellow Green");
	Color.a("#FFAE42", "Yellow Orange");
	Color.a("#FFF000", "Yellow rose");
	Color.a("#0014A8", "Zaffre");
	Color.a("#2C1608", "Zinnwaldite brown");
	Color.a("#39A78E", "Zomp");

		// where it receives the message
        gClient.on("a", function (msg) {
            chat.receive(msg);
        });

        $("#chat input").on("focus", function (evt) {
            releaseKeyboard();
            $("#chat").addClass("chatting");
            chat.scrollToBottom();
        });

        $(document).mousedown(function (evt) {
            if (!$("#chat").has(evt.target).length > 0) {
                chat.blur();
            }
        });

        document.addEventListener("touchstart", function (event) {
            for (var i in event.changedTouches) {
                var touch = event.changedTouches[i];
                if (!$("#chat").has(touch.target).length > 0) {
                    chat.blur();
                }
            }
        });

        $(document).on("keydown", function (evt) {
            if ($("#chat").hasClass("chatting")) {
                if (evt.keyCode == 27) {
                    chat.blur();
                    evt.preventDefault();
                    evt.stopPropagation();
                } else if (evt.keyCode == 13) {
                    $("#chat input").focus();
                }
            } else if (!gModal && (evt.keyCode == 27 || evt.keyCode == 13)) {
                $("#chat input").focus();
            }
        });

        $("#chat input").on("keydown", function (evt) {
            if (evt.keyCode == 13) {
                var message = $(this).val();

				// ♥ // local commands // ♥ //

                if (message.length == 0) { //close chat if no input
					chat.blur();

				} else if (message.substring(0, 6).toLowerCase() == cmdChar+"lhelp" || message.substring(0, 6).toLowerCase() == "!lhelp") {		//local command list
                    // thanks Someguy!
					localMsg("Local Commands: "+cmdChar+"name, "+cmdChar+"svol (speech volume), "+cmdChar+"spitch (speech pitch), "+cmdChar+"srate (speech speed), "+cmdChar+"sdefault, "+cmdChar+"lobby, "+cmdChar+"juggle (juggles the crown if you have it), "+cmdChar+"givefish (gives fish to fishlord), "+cmdChar+"fishlord (sets person who receives fish), "+cmdChar+"mathcheat (auto answers any "+cmdChar+"math question after a short delay)");
                    $(this).val(""); //empties chatbox
					chat.blur(); //closes chat

                } else if (message.substring(0, 5).toLowerCase() == cmdChar+"name" || message.substring(0, 5).toLowerCase() == "!name") {		//name
                    if (message.substring(5).trim() == "") {
						msgBox('Rename', 'Usage: '+cmdChar+'name new_name.', 3000, '#piano');

					} else {
						gClient.sendArray([{
							"m": "userset",
							"set": {
								"name": message.substring(5).trim()
							}
						}]);
						selfName = message.substring(5).trim();
						msgBox('Renamed', message.substring(5).trim(), 3000, '#piano');
					}
                    $(this).val("");
                    chat.blur();

				} else if (message.substring(0, 5).toLowerCase() == cmdChar+"svol"  || message.substring(0, 5).toLowerCase() == "!svol") {					//speech volume
					var speechVolumeTEMP = message.substring(6).trim()
					if (isNaN(speechVolumeTEMP) || speechVolumeTEMP > 1 || speechVolumeTEMP < 0 || speechVolumeTEMP == '') {
						msgBox('Speech Volume [usage]', 'Please enter a number no greater than 1 and no less than 0.', 5000, '#piano');
						$(this).val("");
						chat.blur();
						return;

					} else {
						speechVolume = speechVolumeTEMP; //sets new variable value
						msgBox('Speech Volume', speechVolume, 3000, '#piano');

						$(this).val("");
						chat.blur();
					}

				} else if (message.substring(0, 7).toLowerCase() == cmdChar+"spitch"  || message.substring(0, 7).toLowerCase() == "!spitch") {					//speech pitch
					var speechPitchTEMP = message.substring(8).trim()
					if (isNaN(speechPitchTEMP) || speechPitchTEMP > 2 || speechPitchTEMP < 0 || speechPitchTEMP == '') {
						msgBox('Speech Pitch [usage]', 'Please enter a number no greater than 2 and no less than 0.', 5000, '#piano');
						$(this).val("");
						chat.blur();
						return;

					} else {
						speechPitch = message.substring(8).trim()  //sets new variable value
						msgBox('Pitch', speechPitch, 3000, '#piano');
						$(this).val("");
						chat.blur();
					}

				} else if (message.substring(0, 6).toLowerCase() == cmdChar+"srate"  || message.substring(0, 6).toLowerCase() == "!srate") {					//speech rate
					var speechRateTEMP = message.substring(7).trim()
					if (isNaN(speechRateTEMP) || speechRateTEMP > 2 || speechRateTEMP < 0 || speechRateTEMP == '') {
						msgBox('Speech Pitch [usage]', 'Please enter a number no greater than 2 and no less than 0.', 5000, '#piano');
						$(this).val("");
						chat.blur();
						return;

					} else {
						speechRate = message.substring(7).trim()  //sets new variable value
						msgBox('Rate', speechRate, 3000, '#piano');
						$(this).val("");
						chat.blur();
					}

				} else if (message.substring(0, 9).toLowerCase() == cmdChar+"sdefault"  || message.substring(0, 9).toLowerCase() == "!sdefault") {		//speech default
					speechVolume = 0.5;	//default volume for spoken text
					speechPitch = 1;	//default pitch for spoken text
					speechRate = 1;		//default speed for spoken text
					msgBox('Speech Default', 'Volume, pitch and rate all reset.', 3000, '#piano');
                    $(this).val("");
					chat.blur();

				} else if (message.substring(0, 6).toLowerCase() == cmdChar+"lobby"  || message.substring(0, 6).toLowerCase() == "!lobby") {		//lobby
					if (gClient.isOwner()) {
						var lobbyConfirm = prompt("Are you sure you want to turn this room into a lobby?\nThis cannot be undone.\n\nEnter \"Yes\" below to continue.");
						if (lobbyConfirm == "Yes") {
							MPP.client.sendArray([{m: "chset", set: {lobby: true}}]);
							msgBox('Room is now a lobby', '', 3000, '#piano');
						} else {
							alert("Incorrectly entered text or you cancled.");
						}

					} else {
						alert("You're not the owner of this room!");
					}

                    $(this).val("");
					chat.blur();

				} else if (message.substring(0, 9).toLowerCase() == cmdChar+"givefish"  || message.substring(0, 9).toLowerCase() == "!givefish") {		//give fish
					giveFish = !giveFish;
					if (!giveFish) {
						msgBox('Give Fish', 'Off', 3000, '#piano');

					} else {
						msgBox('Give Fish', 'On', 3000, '#piano');
					}

                    $(this).val("");
					chat.blur();

				} else if (message.substring(0, 9).toLowerCase() == cmdChar+"fishlord"  || message.substring(0, 9).toLowerCase() == "!fishlord") {		//fish lord
					fishLord = message.substring(10).trim();
					if (fishLord == '') {
						msgBox('Fish Lord [usage]', cmdChar+'fishlord name_here', 3000, '#piano');
						$(this).val("");
						chat.blur();
						return;
					}
					msgBox('Fish Lord', 'Fish lord: ' + fishLord, 3000, '#piano');
                    $(this).val("");
					chat.blur();

				} else if (message.substring(0, 7).toLowerCase() == cmdChar+"juggle"  || message.substring(0, 7).toLowerCase() == "!juggle") {		//juggle
					function jugglePls() {
						juggling = setInterval(function() {
							gClient.sendArray([{
								m: "chown"
							}]);
						}, 2100);	//2300 is good for just the dropping of it
					}

					if (juggle) {
						juggle = false;
						clearInterval(juggling);

						gClient.sendArray([{
							m: "chown",
							id: gClient.participantId
						}]);
						msgBox('Juggle Crown', 'Off', 2000, '#piano');

					} else {
						juggle = true;
						jugglePls();
						msgBox('Juggle Crown', 'On', 2000, '#piano');
					}

                    $(this).val("");
					chat.blur();

				} else if (message.substring(0, 10).toLowerCase() == cmdChar+"mathcheat"  || message.substring(0, 10).toLowerCase() == "!mathcheat") {		//juggle
					if (mathCheat) {
						mathCheat = false;
						msgBox('Math Cheats', 'Off', 2000, '#piano');
					} else {
						mathCheat = true;
						msgBox('Math Cheats', 'On', 2000, '#piano');
					}

				$(this).val("");
				chat.blur();

				// ♥ // local commands // ♥ //

                } else if (message.length <= 512) {
					if (!meow && !leet) {
						//console.log("Triggered first");
						chat.send(message);
						$(this).val("");
						chat.blur();
					}
					if (message.substring(0,1).trim() != "!" && message.substring(0,1).trim() != "/" && message.substring(0,1).trim() != cmdChar) {
						if (meow) {
							//thanks electrashave!
							leet = false;
							var words = ['meow', 'meow', 'mew', 'purr'];
							var final = '';
							for (var i = 0; words.length > i; i++) {
								final += words[Math.floor(Math.random()*words.length)] + ' ';
							}
							final = final.toLowerCase();
							final = final.charAt(0).toUpperCase() + final.slice(1).trim() + '. *' + message.trim() + '*';
							chat.send(final);
							$(this).val("");
							chat.blur();

						} else if (!leet){
							$(this).val("");
							chat.blur();
						}

						if (leet) {
							meow = false;
							var alpha1 = "abcdefghijklmnopqrstuvwxyz0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`?-=[]\;'\",./_+{}|:<>!@#$%^&*()♥°¬";
							var alpha2 = "4bcd3fgh1jklmn0pqrstuvwxyz0123456789 4BCD3FGH1JKLMN0PQRSTUVWXYZ0123456789~`?-=[]\;'\",./_+{}|:<>!@#$%^&*()♥°¬";
							var str = message;
							var newstr = '';
							for (var i = 0; i < str.length; i++) {
								charPos = alpha1.indexOf(str.charAt(i));
								newstr += alpha2.charAt(charPos);
							}
							chat.send(newstr);
							$(this).val("");
							chat.blur();

						} else if (!meow) {
							$(this).val("");
							chat.blur();
						}

					} else if (meow || leet) {
						//console.log("Triggered final");
						chat.send(message);
						$(this).val("");
						chat.blur();
					}

				}

                evt.preventDefault();
                evt.stopPropagation();
            } else if (evt.keyCode == 27) {
                chat.blur();
                evt.preventDefault();
                evt.stopPropagation();
            } else if (evt.keyCode == 9) {
                evt.preventDefault();
                evt.stopPropagation();
            }
        });

        return {
            show: function () {
                $("#chat").fadeIn();
            },

            hide: function () {
                $("#chat").fadeOut();
            },

            clear: function () {
				if (clearChat) {
					$("#chat li").remove();
					return;
				}
            },

            scrollToBottom: function () {
                var ele = $("#chat ul").get(0);
                ele.scrollTop = ele.scrollHeight;
            },

            blur: function () {
                if ($("#chat").hasClass("chatting")) {
                    $("#chat input").get(0).blur();
                    $("#chat").removeClass("chatting");
                    chat.scrollToBottom();
                    captureKeyboard();
                }
            },

            send: function (message) {
                gClient.sendArray([{
                    m: "a",
                    message: message
                }]);
            },


            receive: function (msg) {
                if (gChatMutes.indexOf(msg.p._id) != -1) return;
                 msg.a = msg.a.replace(/</g, '&lt;');
                 msg.p.name = msg.p.name.replace(/</g, '&lt;');
                 content = msg.a.replace(/((https?\:\/\/|ftp\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi, function(url) {
                 nice = url;
                 if( url.match('^https?:\/\/') ) nice = nice.replace(/^https?:\/\//i,'')
                 else url = 'http://' + url;

                    return '<a target="_blank" style="text-decoration: none;" href="'+ url +'">'+ url +'</a>';
                });
                    var final = content;

                 var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

                var li = $('<li><span class="name"/><span style="position: initial!important;" class="message"/>');

				 li.find(".name").html(msg.p.name + afterName);	//fix for <3 showing up as lt;3 using .text instead of .html -thanks Someguy
				 if (debug) {
					li.find(".name").html("[" + msg.p._id + "] " + msg.p.name + afterName);
				 }
				 if (timeStamp) {
					 li.find(".name").html(getTime() + " | " + msg.p.name + afterName);
				 }
                 li.find(".message").html(
                     "<span class='msg_'>"+ final + "</span>"
                 );

                li.css("color", msg.p.color || "white");

                $("#chat ul").append(li);

                var eles = $("#chat ul li").get();
                for (var i = 1; i <= 50 && i <= eles.length; i++) {
                    eles[eles.length - i].style.opacity = 1.0 - (i * 0.03);		//chat fade
                }
                if (eles.length > 50) {
                    eles[0].style.display = "none";
                }
                if (eles.length > chatLimit) {	//max chat log history default was 256
                    $(eles[0]).remove();
                }
				updateChatLength(eles.length);

                // scroll to bottom if not "chatting" or if not scrolled up
                if (!$("#chat").hasClass("chatting")) {
                    chat.scrollToBottom();
                } else {
                    var ele = $("#chat ul").get(0);
                    if (ele.scrollTop > ele.scrollHeight - ele.offsetHeight - 50)
                        chat.scrollToBottom();
                }
				if (debug2) {
					// test
					//idea to fix, I think it's the way you += the string. You need to replace the orginial with nothing then add the extra chars
					//length of msg: $('#chat li .msg_').get(0).innerHTML.length
						var myString = $('#chat li:last .msg_').get(0).innerHTML;
						var cut = myString.length;
						console.log("length: " + cut);
						var myArray = myString.split("");
						var loopTimer = 70;
						console.log('before loop ' + myString);
						$('#chat li:last .msg_').get(0).innerHTML = myString.substring(cut, cut);
						var frameLooper = setInterval( function() {
							console.log('looping ' + myString);
							if(myArray.length > 0) {
								$('#chat li:last .msg_').get(0).innerHTML += myArray.shift();
							} else {
								clearInterval(frameLooper);
								console.log('clearing loop ' + myString);
								return false;
							}
						}, loopTimer);
						console.log('done ' + myString);

					//$('#chat li:last .msg_').get(0).innerHTML

					// test
				}


            }
        };

    })();


	clearChatFunc = function() {
		chat.clear();
		updateChatLength(0);
	}


    // use midi bridge (old one started here)
	$("#blah-btn").on("click", function (evt) {
		var pRoom = prompt("Enter the name of your lobby...", hotkeyRoom);
		if (!pRoom) return;
		var room_name = pRoom;
		changeRoom(room_name, "right", {
			"visible": true,
			"chat": true,
			"crownsolo": false,
			"lobby": true
		});
	});

	// use midi bridge (old one ended here)


    // New MIDI
	var gWebMidiWorking;
	(function() {

		MIDI_TRANSPOSE = -12;

		var MIDI_KEY_NAMES = ["a-1", "as-1", "b-1"];
		var bare_notes = "c cs d ds e f fs g gs a as b".split(" ");
		for(var oct = 0; oct < 7; oct++) {
			for(var i in bare_notes) {
				MIDI_KEY_NAMES.push(bare_notes[i] + oct);
			}
		}
		MIDI_KEY_NAMES.push("c7");

		if (navigator.requestMIDIAccess) {
			navigator.requestMIDIAccess().then(
				function(midi) {
					console.log(midi);
					if(midi.inputs.size > 0) {
						var inputs = midi.inputs.values();
						for(var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
							var input = input_it.value;
							console.log(input);
							input.onmidimessage = function(evt) {
								var channel = evt.data[0] & 0xf;
								var cmd = evt.data[0] >> 4;
								var note_number = evt.data[1];
								var vel = evt.data[2];
								//console.log(channel, cmd, note_number, vel);
								if(cmd == 8 || (cmd == 9 && vel == 0)) {
									// NOTE_OFF
									release(MIDI_KEY_NAMES[note_number - 9 + MIDI_TRANSPOSE]);
								} else if(cmd == 9) {
									// NOTE_ON
									press(MIDI_KEY_NAMES[note_number - 9 + MIDI_TRANSPOSE], vel / 100);
								} else if(cmd == 11) {
									// CONTROL_CHANGE
									if(!gAutoSustain) {
										if(note_number == 64) {
											if(vel > 0) {
												pressSustain();
											} else {
												releaseSustain();
											}
										}
									}
								}
							};
							if(!gWebMidiWorking) {
								gWebMidiWorking = true;
								new Notification({title:"Nice!", text:"Web MIDI is going.", duration:2000}); //MIDI working
							}
						}
					} else {
						console.log("no midi inputs");
						gWebMidiWorking = false;
					}
					if(gMidiOutTest && midi.outputs.size > 0) {
						var outputs = midi.outputs.values();
						for(var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
							var output = output_it.value;
							console.log(output);
						}
						gMidiOutTest = function(note_name, vel, delay_ms) {
							var note_number = MIDI_KEY_NAMES.indexOf(note_name);
							if(note_number == -1) return;
							note_number = note_number + 9 - MIDI_TRANSPOSE;

							var outputs = midi.outputs.values();
							for(var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
								var output = output_it.value;
								output.send([0x90, note_number, vel], window.performance.now() + delay_ms);
							}
						}
					}
				},
				function(err){
					console.log(err);
					gWebMidiWorking = false;
				} );
		}
	})();



    //More button
	(function () {
		var loaded = false;
		$("#social").fadeIn(250);
		$("#more-button").click(function () {
			//stuff goes between here and..
			if (leet) {
				leet = false;
			} else {
				leet = true;
			}
			msgBox('1337 Mode', ''+leet, 2000, '#piano');
		});
	})();


    //api
	//window.MPP
    MPP = {
        press: press,
        release: release,
        piano: gPiano,
        client: gClient,
        chat: chat,
		msgBox: msgBox
    };


});
//main end

//Thanks B@K$
MPP.client.sendArray = function(arr) {
    if (arr[0].m == "m") {
        logie = this;
        logie.participantUpdate({
            id: logie.participantId
            , x: parseFloat(arr[0].x)
            , y: parseFloat(arr[0].y)
            , m: "m"
        });
    }
    this.send(JSON.stringify(arr));
}

// miscellaneous HTML changes
	// default place holder for chat
	$("#chat .translate").attr("placeholder", "")

// miscellaneous HTML changes

//HTML Stuff (note: the big buttons are 120px apart and the heart buttons are 25px apart -Logan)
//button 1
$("body #bottom .relative").append('<div id="1-btn" class="ugly-button 1_btn" style="position: fixed;bottom: 29px;right: 365px;width: 100px">Toggle Piano</div>');
$("#1-btn").click(function(){
	$("#piano").fadeToggle(1000);
});

//Joke Generator
//button 2
$("body #bottom .relative").append('<div id="2-btn" class="ugly-button 2_btn" style="position: fixed;bottom: 29px;right: 245px;width: 100px">Joke Generator</div>');
$("#2-btn").click(function(){
	var Animal = ['chicken', 'turtle', 'rabbit', 'rat', 'kangaroo', 'cuddlepet', 'fox', 'wolf', 'bat', 'gecko', 'scorpion', 'cat', 'dog', 'parrot', 'seagull', 'elf', 'pony', 'pixie', 'polar bear', 'penguin', 'anteater', 'chipmunk', 'monkey', 'gorilla', 'goat', 'emu', 'elephant', 'horse', 'frog', 'hamster', 'duck', 'flamingo', 'eagle', 'gerbil', 'catfish', 'baboon', 'reindeer', 'seal', 'walrus', 'worm', 'Turkey', 'Panda', 'mule', 'donkey', 'meerkat', 'shark', 'lion', 'tiger', 'jaguar', 'jellyfish', 'igunana', 'lemming', 'crab', 'ladybird', 'rinoceros'];
	var Location = ['road', 'beach', 'field', 'desert', 'parking-lot', 'rugby park', 'lake', 'forest', 'table', 'railway', 'boat', 'village', 'airport', 'city', 'mall', 'river', 'quicksand', 'orchard', 'island', 'hall', 'stage', 'golf course', 'driveway'];
	var Punchline = ['To cuddle with a bunny.', 'To buy a jar of cat semen.', 'To put out a fire.', 'To buy a jar of dog semen.', 'To escape the anons.', 'To get to the other side.', 'To buy a chocolate milk.', 'To visit ' + selfName + '.', 'To buy small shoes.', 'To buy sheet music.', 'To stomp the small children.', 'To buy balloons.', 'To make better punchlines.', 'To buy a big fluffy bed to sleep in and cuddle.', 'To stamp on a cat with gumboots.', 'To help an eldery woman get run over.', 'To bite people.', 'To scratch people.', 'To eat people.', 'To aquire a large stick.', 'To send mail.', 'So it could die over there.', 'So it could strangulate small mammals.', 'So it could transport illicit drugs.', 'Because there was a car coming.', 'Because it’s cool.', 'Because it’s fat.', 'To sniff things up its nose.'];
	var Aselection = Math.floor(Math.random() * Animal.length);
	var Lselection = Math.floor(Math.random() * Location.length);
	var Pselection = Math.floor(Math.random() * Punchline.length);
	jokeGens++;
	document.getElementById("2-btn").innerHTML = "Joke Generator " + jokeGens
	sendChat("[Joke Generator #" + jokeGens + "] Why did the " + Animal[Aselection] + " cross the " + Location[Lselection] + "? " + Punchline[Pselection]);
});

//Bunny ASCII Art
//button 3
$("body #bottom .relative").append('<div id="3-btn" class="ugly-button 3_btn" style="position: fixed;bottom: 29px;right: 125px;width: 100px">Bunny ASCII Art</div>');
$("#3-btn").click(function(){
	setTimeout(function() { sendChat("(\\_/)" ); }, 0);
	setTimeout(function() { sendChat("(o.o)" ); }, 0);
	setTimeout(function() { sendChat("('')('')" ); }, 0);
});

//♥ Test Button ♥
//button 4
function updateChatLength(num) {
	document.getElementById("4-btn").innerHTML = "Msgs: " + num;
}
$("body #bottom .relative").append('<div id="4-btn" class="ugly-button 4_btn" style="position: fixed;bottom: 29px;right: 5px;width: 100px; text-align:center"; title="Messages shown in chat">Msgs: 0</div>');
$("#4-btn").click(function(){
	var yayNayChat = confirm("Do you want to clear the chat?");

	if (yayNayChat) {
		clearChat = true;
		clearChatFunc();
		clearChat = false;
	}
});

//♥ button 5
$("body #bottom .relative").append('<div id="5-btn" class="ugly-button 5_btn" style="position: fixed;color: red;bottom: 2px;right: 5px;width: 10px"; title="Debug Toggle">♥</div>');
$("#5-btn").click(function(){
	if (debug) {
		//off
		debug = false;
		document.getElementById("5-btn").style.color = "red";
	} else {
		//on
		debug = true;
		document.getElementById("5-btn").style.color = "green";
	}
});

//♥ button 6
$("body #bottom .relative").append('<div id="6-btn" class="ugly-button 6_btn" style="position: fixed;color: orange;bottom: 2px;right: 30px;width: 10px"; title="I love you :3">♥</div>');
$("#6-btn").click(function(){
	document.getElementById("6-btn").style.color = Col();
		//nothing as of now
});

//♥ button 7
$("body #bottom .relative").append('<div id="7-btn" class="ugly-button 7_btn" style="position: fixed;color: yellow;bottom: 2px;right: 55px;width: 10px"; title="I love you :3">♥</div>');
$("#7-btn").click(function(){
	document.getElementById("7-btn").style.color = Col();
		//nothing as of now
});

//♥ button 8
$("body #bottom .relative").append('<div id="8-btn" class="ugly-button 8_btn" style="position: fixed;color: green;bottom: 2px;right: 80px;width: 10px"; title="I love you :3">♥</div>');
$("#8-btn").click(function(){
	document.getElementById("8-btn").style.color = Col();
		//nothing as of now
});

//♥ button 9
$("body #bottom .relative").append('<div id="9-btn" class="ugly-button 9_btn" style="position: fixed;color: blue;bottom: 2px;right: 105px;width: 10px"; title="I love you :3">♥</div>');
$("#9-btn").click(function(){
	document.getElementById("9-btn").style.color = Col();
		//nothing as of now
});

//♥ button 10
$("body #bottom .relative").append('<div id="10-btn" class="ugly-button 10_btn" style="position: fixed;color: indigo;bottom: 2px;right: 130px;width: 10px"; title="I love you :3">♥</div>');
$("#10-btn").click(function(){
	document.getElementById("10-btn").style.color = Col();
		//nothing as of now
});

//♥ button 11
$("body #bottom .relative").append('<div id="11-btn" class="ugly-button 11_btn" style="position: fixed;color: violet;bottom: 2px;right: 155px;width: 10px"; title="I love you :3">♥</div>');
$("#11-btn").click(function(){
	document.getElementById("11-btn").style.color = Col();
		//nothing as of now
});

//♥ button 12
$("body #bottom .relative").append('<div id="12-btn" class="ugly-button 12_btn" style="position: fixed;color: indigo;bottom: 2px;right: 180px;width: 10px"; title="Debug Toggle">♥</div>');
$("#12-btn").click(function(){
	document.getElementById("12-btn").style.color = Col();
		//nothing as of now
});

//♥ button 13
$("body #bottom .relative").append('<div id="13-btn" class="ugly-button 13_btn" style="position: fixed;color: blue;bottom: 2px;right: 205px;width: 10px"; title="I love you :3">♥</div>');
$("#13-btn").click(function(){
	document.getElementById("13-btn").style.color = Col();
		//nothing as of now
});

//♥ button 14
$("body #bottom .relative").append('<div id="14-btn" class="ugly-button 14_btn" style="position: fixed;color: green;bottom: 2px;right: 230px;width: 10px"; title="I love you :3">♥</div>');
$("#14-btn").click(function(){
	document.getElementById("14-btn").style.color = Col();
		//nothing as of now
});

//♥ button 15
$("body #bottom .relative").append('<div id="15-btn" class="ugly-button 15_btn" style="position: fixed;color: yellow;bottom: 2px;right: 255px;width: 10px"; title="I love you :3">♥</div>');
$("#15-btn").click(function(){
	document.getElementById("15-btn").style.color = Col();
		//nothing as of now
});

//♥ button 16
$("body #bottom .relative").append('<div id="16-btn" class="ugly-button 16_btn" style="position: fixed;color: orange;bottom: 2px;right: 280px;width: 10px"; title="I love you :3">♥</div>');
var playingMid = false;
document.getElementById("16-btn").style.color = "red";
$("#16-btn").click(function(){
	if (!playingMid) {
		//MIDIjs.play('http://localhost:3000/midis/logan.mid');
		playingMid = true;
		document.getElementById("16-btn").style.color = "green";
	} else {
		//MIDIjs.stop();
		document.getElementById("16-btn").style.color = "red";
		playingMid = false;
	}
});

//♥ button 17
$("body #bottom .relative").append('<div id="17-btn" class="ugly-button 17_btn" style="position: fixed;color: red;bottom: 2px;right: 305px;width: 10px"; title="Spin :3">♥</div>');
var spinning = false;
document.getElementById("17-btn").style.color = "red";
$("#17-btn").click(function(){
	if (spinning) {
		document.getElementById("17-btn").style.color = "red";
		$("#piano").removeClass("spin");
		spinning = false;
	} else {
		document.getElementById("17-btn").style.color = "green";
		$("#piano").addClass("spin");
		spinning = true;
	}
});

//♥ button 18
$("body #bottom .relative").append('<div id="18-btn" class="ugly-button 18_btn" style="position: fixed;color: orange;bottom: 2px;right: 330px;width: 10px"; title="Bm">♥</div>');
$("#18-btn").click(function(){
	document.getElementById("18-btn").style.color = Col();
	MPP.press("b1", volume); MPP.press("fs2", volume); MPP.press("d2", volume); MPP.press("b2", volume); MPP.press("b-1", volume);
});

//♥ button 19
$("body #bottom .relative").append('<div id="19-btn" class="ugly-button 19_btn" style="position: fixed;color: yellow;bottom: 2px;right: 355px;width: 10px"; title="B">♥</div>');
$("#19-btn").click(function(){
	document.getElementById("19-btn").style.color = Col();
	MPP.press("b1", volume); MPP.press("fs2", volume); MPP.press("ds2", volume); MPP.press("b2", volume); MPP.press("b-1", volume);
});

//♥ button 20
$("body #bottom .relative").append('<div id="20-btn" class="ugly-button 20_btn" style="position: fixed;color: green;bottom: 2px;right: 380px;width: 10px"; title="F#7(3rd inv)">♥</div>');
$("#20-btn").click(function(){
	document.getElementById("20-btn").style.color = Col();
	MPP.press("cs2", volume); MPP.press("e2", volume); MPP.press("as2", volume); MPP.press("fs0", volume);
});

//♥ button 21
$("body #bottom .relative").append('<div id="21-btn" class="ugly-button 21_btn" style="position: fixed;color: blue;bottom: 2px;right: 405px;width: 10px"; title="C#m">♥</div>');
$("#21-btn").click(function(){
	document.getElementById("21-btn").style.color = Col();
	MPP.press("cs2", volume); MPP.press("e2", volume); MPP.press("gs2", volume); MPP.press("cs0", volume);
});

//♥ button 22
$("body #bottom .relative").append('<div id="22-btn" class="ugly-button 22_btn" style="position: fixed;color: indigo;bottom: 2px;right: 430px;width: 10px"; title="Csus(#4 #5)">♥</div>');
$("#22-btn").click(function(){
	document.getElementById("22-btn").style.color = Col();
	MPP.press("c2", volume); MPP.press("fs2", volume); MPP.press("gs2", volume);
});

//♥ button 23
$("body #bottom .relative").append('<div id="23-btn" class="ugly-button 23_btn" style="position: fixed;color: violet;bottom: 2px;right: 455px;width: 10px"; title="E(2nd inv)">♥</div>');
$("#23-btn").click(function(){
	document.getElementById("23-btn").style.color = Col();
	MPP.press("b1", volume); MPP.press("e2", volume); MPP.press("gs2", volume);
});

//♥ button 24
$("body #bottom .relative").append('<div id="24-btn" class="ugly-button 24_btn" style="position: fixed;bottom: 28px;right: 1072px;width: 10px"; title="cmd symbol">!</div>');
$("#24-btn").click(function(){
	setCmdChar();
	updateCmdChar(cmdChar);

});

// le label
$("body").append('<div id="resource-label" style="position: fixed; bottom: 529px; right: 17px;">Resource Monitor</div>');

// thanks http://stackoverflow.com/users/165737/anurag
$("body #resource-label").css("fontSize", "11px");

console.log(window.performance.now() - startUpDelay);
//END OF SCRIPT//	//END OF SCRIPT//	//END OF SCRIPT//	//END OF SCRIPT//	//END OF SCRIPT//	//END OF SCRIPT/