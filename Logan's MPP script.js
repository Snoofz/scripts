
// ==UserScript==
// @name      Logan's MPP script
// @namespace  http://www.multiplayerpiano.com/
// @notice   This was originally made by electrashave. And furthermore edited by LoganNZL
// @Version 5.2
// @description  Modded Script For Multiplayerpiano.com
// @include http://www.multiplayerpiano.com/*
// @match http://www.multiplayerpiano.com/script.js
// @copyright  2013+
// ==/UserScript==

//R  E  A  D || T  H  I  S
//R  E  A  D || T  H  I  S
//R  E  A  D || T  H  I  S
//Search for /Lsounds and replace that line with the default piano below or another sound.
//R  E  A  D || T  H  I  S
//R  E  A  D || T  H  I  S
//R  E  A  D || T  H  I  S

// ♥ // notes // ♥ //
/*
Here's how to get your ID: gClient.getOwnParticipant()._id
Here's how to get an ID: client.ppl["11b6b8d23ad8d4040b8ac00e"]._id
Here's how to get a name: client.ppl["11b6b8d23ad8d4040b8ac00e"].name
Here's how to get your name and split it up: MPP.client.getOwnParticipant().name.split('');
Here's how to split the room into an array: MPP.client.channel._id.split('');
Here's how to check if an something is in an array: if(arrayName.indexOf(id) != -1) { It is there. } else { Nope };
Here's a cool way to generate a number Thanks B@K$!: Math.floor(Math.random()*2) ? "win " + Math.floor(Math.random()*2) : "lost " + Math.floor(Math.random()*2)
Here's how to generate two numbers one negative and one positive using a function, thanks for the help Yoshify: function meowPuff(Min, Max) { return Math.floor(Math.random() * (Max-Min)+Min);} meowPuff(-5, 5); //c:
Here's a test: function catdog(num, win, lose) { Math.floor( Math.random() * num ) ? "win " + Math.floor( Math.random() * num ) : "lose " + Math.floor( Math.random() * num ); }
Here's how to add a message to chat locally (thanks SomeGuy) function localMsg(msg) { $("#chat ul").append('<li style="color: green; opacity: 0.97;"><span class="name">bot: </span><span style="position: initial!important;" class="message"><span class="msg_">' +msg+ '</span></span></li>'); }; localMsg("Hello")
Here's how to append something to something (thanks SomeGuy) $("ul").append( name );
Here's stuff: function x(min, max) { return Math.round(Math.random() * (max - min) + min); }; x(-10, 10)
Here's stuff too: name.length == 5 && name == "Logan" && gClient.isOwner() && last_known_channel == "Kieran's Room" && last_known_channel.length == 13
Here's more stuff: me = MPP.client.getOwnParticipant(); delete me.cursorDiv; delete me.nameDiv; JSON.stringify(me)
Here's how to add notifications, thanks Kappa! new window.Notification("Hello", { icon: "http://localhost:3000/images/speech.png", body: "world" })

//made by Impossible(RU)
//var anims = 0; setInterval(function () { var char = "Logan"; var name = ""; anims++; for (i = 0; i < char.length; i++) { name += char[(anims + i) % char.length]; } MPP.client.sendArray([{ m: "userset", set: { name: name } }]); }, 2100);

!js x = setInterval(function(){ press('e1',0.5); press('b1',0.5); press('gs2',0.5) }, 4000); y = setInterval(function(){ press('b1',0.5); press('ds1',0.5); press('b2',0.5) }, 4000);

var u = new SpeechSynthesisUtterance();
      u.text = "Meow." + Math.random();
      u.lang = 'en-GB';
      u.rate = 0.75;
      u.pitch = 1.0;
      u.volume = 0.5;
      speechSynthesis.speak(u);

*/
// ♥ // notes // ♥ //

//change to true to stop the notification displaying on start-up. You can always view the hotkeys with the H key
var i_know_how_to_use_this_bot = true;



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

You can keep a list of IDs here if you'd like. Use the command !user to get a person's ID or click their name, and inspect element the ID and copy it form there.

Logan's ID: 741664af066c728ae65e6dae

Code:
Flips page 180°: ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){ document.body.style[prefix + 'transform'] = 'rotate(90deg)'; });
Tilt page elements: ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){ Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){ el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)'; }); });


if (my >= 50) { press('a-1'); my; } else { press('c7'); my}

List of piano sounds:

Steinway Piano: piano.audio.load(key.note, "https://dl.dropboxusercontent.com/u/24213061/HDPiano/" + key.note + ".wav", function () {
Music Box: piano.audio.load(key.note, "http://24.183.232.15:8999/CustomSounds/MusicBox/" + key.note + ".mp3", function () {
Harpsichord (good): piano.audio.load(key.note, "http://24.183.232.15:8222/CustomSounds/Harpischord/" + key.note + ".wav", function () {
Amazing: piano.audio.load(key.note, "http://24.183.232.15:8222/CustomSounds/PianoSounds/" + key.note + ".mp3", function () {
		Amazing Local: piano.audio.load(key.note, "http://localhost:3000/sounds/amazing/" + key.note + ".mp3", function () {
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

*/

//background music: document.body.style.background = " url('https://www.dropbox.com/s/1tcf42b0f41ib40/Music.gif?raw=1') no-repeat right top";
//Totoro: document.body.style.background = "url('http://f8.topit.me/8/56/31/113111364735131568o.jpg') no-repeat right top";
//background landscape: document.body.style.background = " url('http://i.imgur.com/fUdprux.jpg') no-repeat center 90%";
//Beethoven: document.body.style.background = "url('http://wallpoper.com/images/00/41/58/86/music-beethoven_00415886.jpg')"; document.body.style.backgroundSize = "1366px 768px";

//if (gClient.isOwner()) { sendChat("You're king \\o/") } else {sendChat("You're a peasant v.v")}

//JSON.stringify(MPP.client.channel)

// creates a lobby
//MPP.client.sendArray([{m: "chset", set: {lobby: true}}]); //thanks Jacob for showing me client.js!

// creates new room
//MPP.client.sendArray([{m: "ch", _id: name + "'s room"}]);

//fennece's cool name thingy
/*
MPP.client.on("a",function(msg){ if(msg.p.id == MPP.client.participantId) return; MPP.client.sendArray([{m:"userset", set:{name:msg.a}}]); });
*/


// basic settings
												//below is the message of the day
var Lmotd = "MOTD: Clefairy's Polar bear - http://i.imgur.com/gVudKiN.jpg";
var botVersion = "5.2"							//version. saves time instead of changing all throughout script
var selfName = "Logan";							//your name
var country = "New Zealand";					//this is used for the !time command. Change it to yours
var hotkeyMsg = ":3"; 							//TAB hotkey message to send
var sheetURL = "http://pastebin.com/zWvWVfdb";	//link to pastebin for PC sheets
var refresh_rate = 2100;						//delay between name change. Min: 2.1 sec. Default: 2100
var hotkeyRoom = "][_, ([]) ][_,";				//the name of the numpad 2 lobby room to be created
var fSpeed = 0.25;
var fRadius = 2;
var fDegree = 180;
	//speech settings
	var speechStatus = false;					//read chat by default or use numpad 7 to toggle
	var speechVolume = 0.5;						//default volume for spoken text
	var speechPitch = 1;						//default pitch for spoken text
	var speechRate = 1;							//default speed for spoken text
	var speechLang = "en-GB";					//default for speech language
	//speech settings

	//audio settings
	var alertSound = new Audio('http://localhost:3000/sounds/alert.mp3');	//alert!
	var yeySound = new Audio('http://localhost:3000/sounds/yey.mp3');	//yey!
	var friendJoinSound = new Audio('http://localhost:3000/sounds/friendJoin.mp3');	//friendJoin

	var alertName = true;						//plays mp3 when your name is said in chat (edit your name there)
	//audio settings

var debug = false;								//toggle ids next to names in chat (will add other useful stuff later
//end of basic settings
//tests

//tests
chromaticArray = ['a-1', 'as-1', 'b-1', 'c0', 'cs0', 'd0', 'ds0', 'e0', 'f0', 'fs0', 'g0', 'gs0', 'a0', 'as0', 'b0', 'c1', 'cs1', 'd1', 'ds1', 'e1', 'f1', 'fs1', 'g1', 'gs1', 'a1', 'as1', 'b1', 'c2', 'cs2', 'd2', 'ds2', 'e2', 'f2', 'fs2', 'g2', 'gs2', 'a2', 'as2', 'b2', 'c3', 'cs3', 'd3', 'ds3', 'e3', 'f3', 'fs3', 'g3', 'gs3', 'a3', 'as3', 'b3', 'c4', 'cs4', 'd4', 'ds4', 'e4', 'f4', 'fs4', 'g4', 'gs4', 'a4', 'as4', 'b4', 'c5', 'cs5', 'd5', 'ds5', 'e5', 'f5', 'fs5', 'g5', 'gs5', 'a5', 'as5', 'b5', 'c6', 'cs6', 'd6', 'ds6', 'e6', 'f6', 'fs6', 'g6', 'gs6', 'a6', 'as6', 'b6', 'c7'];

var followId = undefined;

// advanced settings
var clients_joined = 0;							//tracks total clients connected to active room
var notes_played = 0;							//tracks your notes played
var others_notes = 0;							//tracks others notes played
var total_notes = 0;							//tracks total notes played
var messages_sent = 0;							//tracks your messages sent
var messages_total = 0;							//tracks total messages sent
var food_calories = 0;							//tracks calories of food consumed
var drink_calories = 0;							//tracks calories of liquid consumed
var fishCaught = 0;								//tracks your fish caught
var naughty = 0;								//tracks how many times the bot has been sworn at
var jokeGens = 0;								//tracks the number of generated jokes
var octTemp = 1;
var susTemp = 1;
var volume = 0.5;
var delPlay = false;							//for delay play
var rollTemp = false;							//now includes MIDI supported multi-note. Thanks Josh!
var delTime = 1000;								//amount of delay
var copyNotes = false;							//copy other's notes
var ignoreNotes = false;						//ignore notes default setting
var testflipT = false;							//for test hotkey
var testflipN = false;							//for Josh's random name thingy
var testflipP = false;							//for cursor pong hotkey
var testflipB = false;							//for cursor bunny hotkey
var testflipF = false;							//for cursor follow hotkey
var afterName = " ";							//symbol in chat after name
var incognito = false;                  		//turn this on to be incognito by default
var juggle = false;								//crown juggling
var alertOnFriendJoin = true;					//sends a message in chat when a friend joins
var friendJoinMsgTime = 0;						//time the message is displayed | 0 = stay up until you close it manually
var alertOnFriendJoinDelay = 0;					//delay in milliseconds until notification is displayed
var crownSoloToggle = false;					//toggle for hotkey
var roomVisibleToggle = true;					//toggle for hotkey
var giveFish = false;							//toggle for !fishlord whether or not it gives fish out
var fishLord = "";								//name of person whom receives fish if you're giving out fish
var Lvel = false;								//for muting PC notes

// thanks Someguy!
function localMsg(msg) {
	$("#chat ul").append(
		'<li style="color: #FF3399; opacity: 0.97;"><span class="name">Bot </span><span style="position: initial!important;" class="message"><span class="msg_">' +
	msg + '</span></span></li>');
};
// end of advanced settings

$(function () {

	  var test_mode = (window.location.hash && window.location.hash.match(/^(?:#.+)*#test(?:#.+)*$/i));

    //var gSeeOwnCursor = (window.location.hash && window.location.hash.match(/^(?:#.+)*#seeowncursor(?:#.+)*$/i));
	  var lSeeOwnCursor = true;

	  var gMidiOutTest = (window.location.hash && window.location.hash.match(/^(?:#.+)*#midiout(?:#.+)*$/i));

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt /*, from*/ ) {
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
            if (window.console) console.log("Warning: for some stupid reason there's no volume-slider");
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
        /*$(piano.rootElement).mouseover(function(event) {			//plays on mouseover?
			if(!mouse_down) return;
				var ele = event.target;
				if($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
				var key = piano.keys[ele.note];
			  press(key.note);
			}
		});*/

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
			//event.stopPropagation();
			event.preventDefault();

			var pos = CanvasRenderer.translateMouseEvent(event);
			var hit = self.getHit(pos.x, pos.y);
			if(hit) {
				press(hit.key.note, hit.v);
				last_key = hit.key;
			}
		});
        piano.rootElement.addEventListener("touchstart", function (event) {	//mess with Logan
            mouse_down = true;
            //event.stopPropagation();
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
	press(hit.key.note, hit.v);
	last_key = hit.key;
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
                        y -= Math.floor(h * 1.1); //Lblips
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

    var PianoKey = function (note, octave) {
        this.note = note + octave;
        this.baseNote = note;
        this.octave = octave;
        this.sharp = note.indexOf("s") != -1;
        this.loaded = false;
        this.timeLoaded = 0;
        this.domElement = null;
        this.timePlayed = 0;
        this.blips = [];
    };

    var Piano = function (rootElement) {

        var piano = this;
        piano.rootElement = rootElement;
        piano.keys = {};

        var white_spatial = 0;
        var black_spatial = 0;
        var black_it = 0;
        var black_lut = [2, 1, 2, 1, 1];
        var addKey = function (note, octave) {
            var key = new PianoKey(note, octave);
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
            addKey("a", -1);
            addKey("as", -1);
            addKey("b", -1);
            var notes = "c cs d ds e f fs g gs a as b".split(" ");
            for (var oct = 0; oct < 7; oct++) {
                for (var i in notes) {
                    addKey(notes[i], oct);
                }
            }
            addKey("c", 7);							//default key
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
						piano.audio.load(key.note, "/mp3/" + key.note + ".wav.mp3", function () {  //Lsounds
						key.loaded = true;
                        key.timeLoaded = Date.now();
                        if (key.domElement) // todo: move this to renderer somehow
                            $(key.domElement).removeClass("loading");
                    });
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

    var gAutoSustain = true; //!(window.location.hash && window.location.hash.match(/^(?:#.+)*#sustain(?:#.+)*$/));
    var gSustain = false;

    var gHeldNotes = {};
    var gSustainedNotes = {};

	// press
    function press(id, vol) {
		//used to have an if gClient.preventsPlaying()
		if (delPlay) {
				setTimeout(function() {
					gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
					gClient.startNote(id + oct, vol);
				}, delTime);
            }

				gHeldNotes[id] = true;
				gSustainedNotes[id] = true;
				var octave = parseInt(id.replace(/[^\d.]/, '').replace('s', ''));
				var note = id.replace(/[0-9]/g, '').replace("-", "");

				function pressDown(pressed, oct) {
					gPiano.play(pressed + oct, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
					gClient.startNote(pressed + oct, vol);
					notes_played+=1;
					total_notes+=1;
				}
				if (!rollTemp && octTemp == 1) {
					pressDown(note, octave);
				}
				if (!rollTemp && octTemp == 2) {
					pressDown(note, octave);
					pressDown(note, (octave - 1));
				}
				if (!rollTemp && octTemp == 3) {
					pressDown(note, octave);
					pressDown(note, (octave - 1));
					pressDown(note, (octave + 1));
				}
				if (!rollTemp && octTemp == 4) {
					pressDown(note, octave);
					pressDown(note, (octave - 1));
					pressDown(note, (octave + 1));
					pressDown(note, (octave - 2));
				}
				if (!rollTemp && octTemp == 5) {
					pressDown(note, octave);
					pressDown(note, (octave - 1));
					pressDown(note, (octave + 1));
					pressDown(note, (octave - 2));
					pressDown(note, (octave + 2));
				}
				if (rollTemp && octTemp == 1) {
					pressDown(note, octave);
				}
				if (rollTemp && octTemp == 2) {
					setTimeout(function() {
						pressDown(note, octave);
					}, 50);
					pressDown(note, (octave - 1));
				}
				if (rollTemp && octTemp == 3) {
					setTimeout(function() {
						pressDown(note, octave);
					}, 50);
					pressDown(note, (octave - 1));
					setTimeout(function() {
						pressDown(note, (octave + 1));
					}, 100);
				}
				if (rollTemp && octTemp == 4) {
					setTimeout(function() {
						pressDown(note, octave);
					}, 100);
					setTimeout(function() {
						pressDown(note, (octave - 1));
					}, 50);
					setTimeout(function() {
						pressDown(note, (octave + 1));
					}, 150);
					pressDown(note, (octave - 2));
				}
				if (rollTemp && octTemp == 5) {
					setTimeout(function() {
						pressDown(note, octave);
					}, 100);
					setTimeout(function() {
						pressDown(note, (octave - 1));
					}, 50);
					setTimeout(function() {
						pressDown(note, (octave + 1));
					}, 150);
					pressDown(note, (octave - 2));
					setTimeout(function() {
						pressDown(note, (octave + 2));
					}, 200);
				}
	}

	// release
    function release(id) {
        if (gHeldNotes[id]) {
            gHeldNotes[id] = false;
            if (gAutoSustain || gSustain) {
                gSustainedNotes[id] = true;
            } else {
                if (gNoteQuota.spend(0)) {
                    gPiano.stop(id, gClient.getOwnParticipant(), 0);
                    gClient.stopNote(id);
                    gSustainedNotes[id] = false;
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
	if(channel_id == "") channel_id = "lobby";

	//FIX FOR HANDSHAKE ERROR
	var gClient = new Client("ws://" + window.location.hostname + ":443");	//FIX FOR HANDSHAKE ERROR
	//FIX FOR HANDSHAKE ERROR
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
                $("#status").html('<span class="number">' + count + '</span> ' + (count == 1 ? 'person is' : 'people are') + ' playing');
                document.title = "Logan's [Bot v" + botVersion + "] (" + count + ")";
            } else { document.title = "Logan's Piano [Bot v" + botVersion + "]"}
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
            div.textContent = part.name || "";
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
            $(part.nameDiv).fadeIn(2000);

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
            if (gClient.participantId !== part.id || lSeeOwnCursor) {
                var div = document.createElement("div");
                div.className = "cursor";
                div.style.display = "none";
                part.cursorDiv = $("#cursors")[0].appendChild(div);
                $(part.cursorDiv).fadeIn(2000);

				//sets mouse position on join (thanks Josh)
				//part.cursorDiv.style.left = 47.73 + "%";
				//part.cursorDiv.style.top = 19.60 + "%";

                var div = document.createElement("div");
                div.className = "name";
                div.style.backgroundColor = part.color || "#777"
                div.textContent = part.name || "";
                part.cursorDiv.appendChild(div);

            } else {
                part.cursorDiv = undefined;
            }
        });
        gClient.on("participant removed", function (part) {	//when the participant leaves
            // remove nameDiv
            var nd = $(part.nameDiv);
            var cd = $(part.cursorDiv);
            cd.fadeOut(2000);
            nd.fadeOut(2000, function () {
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


// Playing notes
    gClient.on("n", function (msg) {

        var t = msg.t - gClient.serverTimeOffset + TIMING_TARGET - Date.now();
        var participant = gClient.findParticipantById(msg.p);
        if (gPianoMutes.indexOf(participant._id) !== -1)
            return;
        for (var i = 0; i < msg.n.length; i++) {
            var note = msg.n[i];
			var octave = parseInt(note.n.replace( /[^\d.]/, '').replace('s', ''));
			var noteCopy = note.n.replace(/[0-9]/g, '').replace("-", "");
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
					press(noteCopy + (octave + 1), vel);
					}
					others_notes+=1;
					total_notes+=1;

                }
            }
        }
    });

        // Send cursor updates
		// fast update mouse optimizations by Alex
			var mx = 0, last_mx = -2.5, my = 0, last_my = -2.5;
				setInterval(function() {
						if(Math.abs(mx - last_mx) > 0.1 || Math.abs(my - last_my) > 0.1) {
								last_mx = mx;
								last_my = my;
							if(!incognito){	gClient.sendArray([{m: "m", x: mx, y: my}]);}
						}
				}, 50);
				$(document).mousemove(function(event) {
						mx = ((event.pageX / $(window).width()) * 100).toFixed(2);
						my = ((event.pageY / $(window).height()) * 100).toFixed(2);
				});

			// Animate cursors
			setInterval(function () {
				for (var id in gClient.ppl) {
					if (!gClient.ppl.hasOwnProperty(id)) continue;
					var part = gClient.ppl[id];
					if (part.cursorDiv && (Math.abs(part.x - part.displayX) > 0.1 || Math.abs(part.y - part.displayY) > 0.1)) {
						part.displayX += (part.x - part.displayX) * 0.25;
						part.displayY += (part.y - part.displayY) * 0.25;
						part.cursorDiv.style.left = part.displayX + "%";
						part.cursorDiv.style.top = part.displayY + "%";
					}
				}
			}, 1);
		// fast update mouse optimizations by Alex



    // Room settings button
    (function () {
        gClient.on("ch", function (msg) {
            if (gClient.isOwner()) {
                $("#room-settings-btn").show();
				$("#room-settings-btn").animate({opacity:1},100);	//animates it thanks B@K$
            } else {
				$("#room-settings-btn").css("display","block");  //shows it
				$("#room-settings-btn").animate({opacity:0.5},100);	//animates it thanks B@K$
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
                $('<div id="crownsolo-notice">').text('Only owner can play mode ;-; cri cri').appendTo("body").fadeIn(1000);
            }
        } else {
            $("#crownsolo-notice").remove();
        }
    });
    gClient.on("disconnect", function () {
        $("#crownsolo-notice").remove();
		$("#nochat-notice").remove();
    });



    var gPianoMutes = [];

    var gChatMutes = [];

	/*
		//name and note trackers
		setTimeout(function() {
        //$("#chat ul").css("text-shadow","-1.2px 0 black, 0 1.2px black, 1.2px 0 black, 0 -1.2px black"); //adds black outline
        	var sec = 0;
            	function submit(newname) {
				var set = {name: newname,color: "nouse"};
				gClient.sendArray([{m: "userset", set: set}]);
			};

			sec = 0;
        	setInterval(function() {

                var min = Math.floor(sec/60);
                var g_szek = Math.round(sec-min*60);
                var szek = (g_szek>=10)?g_szek:"0"+g_szek;
                var gTime = (min>0)?min+"m"+szek+"s":szek+"s";

				submit("Logan ♥s " + heyThereKitty + "" + "");	//name to print
                sec+=Math.max((refresh_rate/1000),2.1);
                }, Math.max(refresh_rate,2100));


    }, 2500);																			//name and note trackers
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
        if (keys[107]) {						//plus
            if (volTemp > 9) {
                volTemp = 10;
            } else {
                volTemp = volTemp + 1;
            }
        } else if (keys[109]) {					//minus
            if (volTemp < -9) {
                voltemp = 10;
            } else {
                volTemp = volTemp - 1;
            }
        }
        if (keys[107]) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Note Volume",
                    text: "Volume: " + volTemp,
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            if (volume > 1.9) {
                volume = 2;
            } else {
                volume = volume + 0.1;
            }
        } else if (keys[109]) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Note Volume",
                    text: "Volume: " + volTemp,
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            if (volume < 0.2) {
                volume = 0.1;
            } else {
                volume = volume - 0.1;
            }
        }
        // multi-octave toggling
        if (keys[38]) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Level",
                    text: "You’re on level " + octTemp + " of the multi-note",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            if (octTemp > 4) {
                octTemp = 5;
            } else
                octTemp = octTemp + 1;
        } else if (keys[40]) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Level",
                    text: "You’re on level " + octTemp + " of the multi-note",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            if (octTemp < 2) {
                octTemp = 1;
            } else
                octTemp = octTemp - 1;;
        }
        // roll toggling
        if (keys[35] && rollTemp== true) {
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Roll",
                    text: "Roll is disabled",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            rollTemp= false;
        } else if (keys[35] && rollTemp== false) {
            window.gTest = setTimeout(function () {		//roll
                window.gTest = new Notification({
                    title: "Roll",
                    text: "Roll enabled",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            rollTemp= true;
        }
        // sustain toggling
        if (keys[45] && susTemp == 2) {
			susSet = "OFF";
            window.gTest = setTimeout(function () {
                window.gTest = new Notification({
                    title: "Sustain",
                    text: "Sustain enabled",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            susTemp = 1;
									//Insert
        } else if (keys[45] && susTemp == 1) {
		susSet = "ON";
            window.gTest = setTimeout(function () {		//sustain
                window.gTest = new Notification({
                    title: "Sustain",
                    text: "Sustain disabled",
                    target: "#midi-btn",
                    duration: 1000
                });
            }, 1);
            susTemp = 2;
        }
		if (susTemp == 2) {
            gAutoSustain = false;
        } else if (susTemp == 1) {
            gAutoSustain = true;
        }
        // piano moddifications
        var code = parseInt(evt.keyCode);
						  //numpad / key

        							//numpad5
			if (code == 101 || code == 12) { 	//delay
				delPlay = !delPlay;
				if (!delPlay) {
				window.gTest = new Notification({
							title: "Delay",
							text: "Delay disabled",
							target: "#midi-btn",
							duration: 1000
						});
                } else {
					window.gTest = new Notification({
						title: "Delay",
						text: "Delay enabled",
						target: "#midi-btn",
						duration: 1000
					});
                }
						//Pagedown
			} else if (code == 34) { 					//ignore
				ignoreNotes = !ignoreNotes;
				if (!ignoreNotes) {
				window.gTest = new Notification({
                    title: "Ignore",
                    text: "Ignore notes disabled",
                    target: "#midi-btn",
                    duration: 1000
                });
                } else {
                window.gTest = new Notification({
                    title: "Ignore",
                    text: "Ignore notes enabled",
                    target: "#midi-btn",
                    duration: 1000
                });
              }
							//Pageup
				} else if (code == 33) { 					//bot on/off	[clean this logan]
				bot = !bot;
				if (!bot) {
				window.gTest = new Notification({
                    title: "Commands",
                    text: "Chat commands disabled",
                    target: "#midi-btn",
                    duration: 1000
                });
                } else {
                window.gTest = new Notification({
                    title: "Commands",
                    text: "Chat commands enabled",
                    target: "#midi-btn",
                    duration: 1000
                });
             }
							//numpad *
				} else if (code == 106) { 					//bot on/off
				Lvel = !Lvel;
				if (Lvel) {
				volume = 0;
				window.gTest = new Notification({
                    title: "Velocity",
                    text: "Velocity set to 0",
                    target: "#midi-btn",
                    duration: 1000
                });
                } else {
				volume = 0.5;
                window.gTest = new Notification({
                    title: "Velocity",
                    text: "Velocity set to default (0.5)",
                    target: "#midi-btn",
                    duration: 1000
                });
              }
						//numpad0
		} else if (code == 96) { 				//reconnect
		var	logieYeyYey = true;
        logieYeyYey = logieYeyYey;
        if (logieYeyYey) {
		MPP.client.stop(); MPP.client.start()
		window.gTest = new Notification({
                    title: "Reconnecting...",
                    text: "",
                    target: "#piano",
                    duration: 2000
                });
              }
		} else if (code == 97) { 				//private room
		var	logieYeyYey = true;
        logieYeyYey = logieYeyYey;
        if (logieYeyYey) {
		var room_name = "" + Math.sin(Math.random() * 1000000000000000000000);
        changeRoom(room_name, "right", {
            "visible": false, //true
            "chat": true,
            "crownsolo": false,
			"lobby": false //true

        });
              }
						//tab
	    } else if (code == 98) { 				//public room
		var	logieYeyYey = true;
        logieYeyYey = logieYeyYey;
        if (logieYeyYey) {
		var room_name = hotkeyRoom;
        changeRoom(room_name, "right", {
            "visible": true, //true
            "chat": true,
            "crownsolo": false,
			"lobby": true //true

        });
              }

		} else if (code == 9) { 				//hotkeymsg
		var	logieYeyYey = true;
        logieYeyYey = logieYeyYey;
        if (logieYeyYey) {
		gClient.sendArray([{
				m: "a",
				message: "" + hotkeyMsg + ""
				}]);
              }
						//ctrl
		} else if (code == 17) { 				//drop crown
		var	logieYeyYey = true;
        logieYeyYey = logieYeyYey;
        if (logieYeyYey) {
		gClient.sendArray([{
                m: "chown"
            }]);
			window.gTest = new Notification({
                    title: "Dropping crown...",
                    text: "",
                    target: "#piano",
                    duration: 1000
                });
		}

						//alt
		} else if (code == 18) { 				//pickup crown
		var	logieYeyYey = true;
        logieYeyYey = logieYeyYey;
        if (logieYeyYey) {
		gClient.sendArray([{
                m: "chown",
                id: gClient.participantId
            }]);
			window.gTest = new Notification({
                    title: "Picking up crown...",
                    text: "",
                    target: "#piano",
                    duration: 1000
                });
		}
						//H
		} else if (code == 72) { 				//display help
		var	logieYeyYey = true;
        logieYeyYey = logieYeyYey;
        if (logieYeyYey) {
			new Notification({id: "volume", title: "Hotkeys (thanks B@K$ for the design)", html: '\
				<h3>๖ۣۜHold to display binds and hotkeys...</h3>\
				<font color="#FF0066">Page Up:</font>Turns on/off chat commands (excluding !js and !room)<br />\
				<font color="#FF0066">Page Down</font> Ignores everyone elses notes<br />\
				<font color="#FF0066">End</font> Toggles rolling on multi-octaves<br />\
				<font color="#FF0066">Up Arrow</font> Turns on / increases multi-octave<br />\
				<font color="#FF0066">Down Arrow:</font> Turns on / increases multi-octave<br />\
				<font color="#FF0066">Insert</font> Toggles sustain (default was backspace)<br />\
				<font color="#FF0066">Delete</font> Toggles an alert sound if your name is said<br />\
				<font color="#FF0066">Home</font> Toggles Crown Juggling<br />\
				<font color="#FF0066">Spacebar</font> Plays low notes while held<br />\
				<font color="#FF0066">~</font> Plays high notes while held<br />\
				<font color="#FF0066">Tab</font> Sends hotkey message<br />\
				<font color="#FF0066">Numpad + -</font> Change note volume<br />\
				<font color="#FF0066">Numpad *</font> Plays silent notes<br />\
				<font color="#FF0066">Numpad .</font> Is a test toggle (test your own code)<br />\
				<font color="#FF0066">Numpad 0</font> Quick reconnect<br />\
				<font color="#FF0066">Numpad 1</font> Play Alone<br />\
				<font color="#FF0066">Numpad 2</font> Public lobby room<br />\
				<font color="#FF0066">Numpad 3</font> Toggles Follower (follows closest cursor)<br />\
				<font color="#FF0066">Numpad 4</font> Toggle Bunny<br />\
				<font color="#FF0066">Numpad 5</font> Toggles delay (BROKEN ATM)<br />\
				<font color="#FF0066">Numpad 6</font> Toggles Pong<br />\
				<font color="#FF0066">Numpad 7</font> Toggles text to speech<br />\
				<font color="#FF0066">Numpad 8</font> Toggles SomeGuy\'s incognito<br />\
				<font color="#FF0066">Alt</font> Picks up the crown<br />\
				<font color="#FF0066">Ctrl</font> Drops the crown<br />\
				<font color="#FF0066">H</font> Displays displays Hotkeys again<br />\
				<br />\
				<font color="#FF3399">!lhelp</font> Displays local commands in chat<br />\
				To stop this message displaying every time you start the script search for <font color="#FF0066">i_know_how_to_use_this_bot</font> and change <font color="#CC0000">false</font> to <font color="#0066FF">true</font>.<br />\
			', target: "#midi-btn", duration: 600});
		}

//--TEST--TEST--TEST////--TEST--TEST--TEST////--TEST--TEST--TEST//
			 } else if (code == 110) { 					//hotkey test
					//testflipT = !testflipT;
				if (debug) {
								//off
							debug = false;
					window.gTest = new Notification({
						title: "Debug",
						text: "Off",
						target: "#midi-btn",
						duration: 1000
					});
					} else {
								//on
							debug = true;
					window.gTest = new Notification({
						title: "Debug",
						text: "On",
						target: "#midi-btn",
						duration: 1000
					});
              }


//--TEST--TEST--TEST////--TEST--TEST--TEST////--TEST--TEST--TEST//


					// ♥ Thanks Josh ♥ //
									   // \ key
					} else if (code == 220) { 					//Josh's random name thnigy
						setInterval(function() {
							var nameLength = 11; //was 10 //39 makes it 40
							var chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
							var finalName = '';

							function rename(name) {
								gClient.sendArray([{
									m: "userset",
									set: {
										name: name
									}
								}]);
								finalName = "";
							}
							if (testflipN) { //on
								for (var i = 0; i < (nameLength + 1); i++) {
									var randomIndex = Math.floor(Math.random() * chars.length);
									finalName = finalName + chars[randomIndex];
									if (i == nameLength) {
										rename(finalName);
										finalName = "";
									}
								}
							} else { //off
								gClient.sendArray([{
									m: "userset",
									set: {
										name: selfName
									}
								}]);
							}
						}, 2010);	//2000 is minimum

			if (testflipN) { //off
				testflipN = !testflipN;
				window.gTest = new Notification({
					title: "Random name",
					text: "Off",
					target: "#piano",
					duration: 2000
				});
			} else { //on
				testflipN = !testflipN;
				window.gTest = new Notification({
					title: "Random name",
					text: "On",
					target: "#piano",
					duration: 2000
				});
			}


					   //numpad 7
			} else if (code == 103) { 					//speech toggle
					if (speechStatus) {
								//off
						speechStatus = false;
						speechSynthesis.cancel();
					window.gTest = new Notification({
						title: "Text to speech",
						text: "Off",
						target: "#piano",
						duration: 1000
					});
					} else {
								//on
						speechStatus = true;
					window.gTest = new Notification({
						title: "Text to speech",
						text: "On",
						target: "#piano",
						duration: 1000
					});
				}
								//del
              } else if (code == 46) { 					//alert on name said in chat toggle
					if (alertName) {
								//off
						alertName = false;
					window.gTest = new Notification({
						title: "Alert on Key-word",
						text: "Off",
						target: "#piano",
						duration: 1000
					});
					} else {
								//on
						alertName = true;
					window.gTest = new Notification({
						title: "Alert on Key-word",
						text: "On",
						target: "#piano",
						duration: 1000
					});

				}

				function jugglePls() {
				juggling = setInterval(function() {
								gClient.sendArray([{
									m: "chown"
								}]);
							}, 2300);	//2030 is good for just the dropping of it
				}

				} else if (code == 36) { 					//juggle crown
					if (juggle) {
								//off
						juggle = false;
						clearInterval(juggling);

						//picks crown up when finishing
						gClient.sendArray([{
							m: "chown",
							id: gClient.participantId
						}]);
					window.gTest = new Notification({
						title: "Juggle Crown",
						text: "Off",
						target: "#piano",
						duration: 1000
					});
					} else {
								//on
						juggle = true;
						jugglePls();
					window.gTest = new Notification({
						title: "Juggle Crown",
						text: "On",
						target: "#piano",
						duration: 1000
					});

				}

					   //backspace
			} else if (code == 8) { 					//alert on friends join toggle
					if (alertOnFriendJoin) {
								//off
						alertOnFriendJoin = false;
					window.gTest = new Notification({
						title: "Alert on friend join",
						text: "Off",
						target: "#piano",
						duration: 1000
					});
					} else {
								//on
						alertOnFriendJoin = true;
					window.gTest = new Notification({
						title: "Alert on friend join",
						text: "On",
						target: "#piano",
						duration: 1000
					});
              }
							  // 3 key
			  } else if (code == 51) { 				//owner only mode
					if (crownSoloToggle) {
								//off
						crownSoloToggle = false;
						MPP.client.sendArray([{m: "chset", set: {crownsolo: false}}]);
					window.gTest = new Notification({
						title: "Owner Only",
						text: "Off",
						target: "#piano",
						duration: 1000
					});
					} else {
								//on
						crownSoloToggle = true;
						MPP.client.sendArray([{m: "chset", set: {crownsolo: true}}]);
					window.gTest = new Notification({
						title: "Owner Only",
						text: "On",
						target: "#piano",
						duration: 1000
					});
              }
							// 6 key
			} else if (code == 54) { 				//hide room mode
					if (roomVisibleToggle) {
								//off
						roomVisibleToggle = false;
						MPP.client.sendArray([{m: "chset", set: {visible: false}}]);
					window.gTest = new Notification({
						title: "Room Visible",
						text: "No",
						target: "#piano",
						duration: 1000
					});
					} else {
								//on
						roomVisibleToggle = true;
						MPP.client.sendArray([{m: "chset", set: {visible: true}}]);
					window.gTest = new Notification({
						title: "Room Visible",
						text: "Yes",
						target: "#piano",
						duration: 1000
					});
              }


			} else if (code == 104) { 					//mouse updates
				if (incognito) {
								//off
						incognito = false;
					window.gTest = new Notification({
						title: "Incognito",
						text: "Off",
						target: "#midi-btn",
						duration: 1000
					});
					} else {
								//on
						incognito = true;
					window.gTest = new Notification({
						title: "Incognito",
						text: "On",
						target: "#midi-btn",
						duration: 1000
					});
              }

			} else if (code == 105) { 					//copy notes
				if (copyNotes) {
								//off
						copyNotes = false;
					window.gTest = new Notification({
						title: "Copy Notes",
						text: "Off",
						target: "#midi-btn",
						duration: 1000
					});
					} else {
								//on
						copyNotes = true;
					window.gTest = new Notification({
						title: "Copy Notes",
						text: "On",
						target: "#midi-btn",
						duration: 1000
					});
              }

			 } else if (code == 100) { 					//cursor bunny
					testflipB = !testflipB;
				if (!testflipB) {
								//off

					window.gTest = new Notification({
						title: "Bunny",
						text: "Off",
						target: "#midi-btn",
						duration: 1000
					});
					} else {
								//on
								setTimeout(function () {
											client = MPP.client;
											var pong = new Pong(client);
											worker.onmessage = function(event)
											{
												if(event.data.args)
												if(event.data.args.action==0){
													if(testflipB){ pong.tick(); }
												}
											}
											worker.postMessage({delay:120,args:{action:0}});
										}, 120);


										var Pong = function (client) {
											this.client = client;

											this.vx = 1.5;
											this.vy = 2.2;

											var self = this;
												self.part = self.client.ppl[self.client.participantId];
												client.on("ch", function () {
												self.part = self.client.ppl[self.client.participantId];
											});
										}

										Pong.prototype.tick = function () {
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
											} else if (this.part.y > 0) {   //0 makes roofs which it bounces off
												this.vy = -this.vy;
											}                                                                       //mer
											//this.vx += Math.random() * -0.05 - -0.05;
											//this.vy += Math.random() * 0.5 - 0.5;
											this.client.sendArray([{
												m: "m",
												x: this.part.x,
												y: this.part.y
											}]);                                                            //mer
											this.client.sendArray([{
												m: "m",
												x: this.part.x,
												y: this.part.y
											}]);
											worker.postMessage({delay:120,args:{action:0}});
										};
					window.gTest = new Notification({
						title: "Bunny",
						text: "On",
						target: "#midi-btn",
						duration: 1000
					});
              }

			} else if (code == 102) { 					//cursor pong
					testflipP = !testflipP;
				if (!testflipP) {
								//off

					window.gTest = new Notification({
						title: "Pong",
						text: "Off",
						target: "#midi-btn",
						duration: 1000
					});
					} else {
								//on
								setTimeout(function () {
									client = MPP.client;
									var pong = new Pong(client);
									worker.onmessage = function(event)
											{
												if(event.data.args)
												if(event.data.args.action==0){
													if(testflipP){ pong.tick(); }
												}
											}
											worker.postMessage({delay:60,args:{action:0}});
								}, 60);


								var Pong = function (client) {
									this.client = client;

									this.vx = 0.1875;	//0.75
									this.vy = 0.275;	//1.1

									var self = this;
										self.part = self.client.ppl[self.client.participantId];
										client.on("ch", function () {
										self.part = self.client.ppl[self.client.participantId];
									});
								}

								Pong.prototype.tick = function () {
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
									  if (this.part.x < -10 || this .part.y < -10 || this.part.x > 110 || this.part.y > 110) {
											this.part.x = 50;
											this.part.y = 50;

											//resets the velocity when setting position
											this.vx = 0.1875;	//0.75
											this.vy = 0.275;	//1.1
									} else {};
									worker.postMessage({delay:60,args:{action:0}});
								};
					window.gTest = new Notification({
						title: "Pong",
						text: "On",
						target: "#midi-btn",
						duration: 1000
					});
              }
			} else if (code == 99) { 					//follower
					testflipF = !testflipF;
				if (!testflipF) {
								//off
					window.gTest = new Notification({
						title: "Follower",
						text: "Off",
						target: "#midi-btn",
						duration: 1000
					});
					} else {
								//on

						client=MPP.client;
							//make these get your current mouse pos instead
							var mx = 50, my = 50;	//starting location
							var last_mx = mx, last_my = my;
							setInterval(function() {
								 best_dist = 9000;
								 best_part = null;
								for(var id in client.ppl) {
									if(!client.ppl.hasOwnProperty(id) || id === client.participantId || !testflipF) continue;
									 dist = Math.abs(Math.sqrt(Math.pow(client.ppl[id].x - mx, 2) + Math.pow(client.ppl[id].y - my, 2)));
									if(dist < best_dist) {
										best_dist = dist;
										best_part = client.ppl[id];
									}
								}
								if(best_part && best_dist > 0.1) {
									var vx = (best_part.x - mx) / best_dist;
									var vy = (best_part.y - my) / best_dist;
									mx += vx * 0.7;
									my += vy * 0.7;
									if(Math.abs(Math.sqrt(Math.pow(mx - last_mx, 2) + Math.pow(my - last_my, 2))) > 2) {
										last_mx = mx; last_my = my;
										client.sendArray([{m:"m", x: mx, y: my}]);
									}
								}

							}, 5);
					window.gTest = new Notification({
						title: "Follower",
						text: "On",
						target: "#midi-btn",
						duration: 1000
					});

				}
					 //code is the keyboard key
			} else if (code == 111) { 					//spam
				for(var key in MPP.piano.keys) MPP.press(key, 1);
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
                    // octave adding
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
						if (keys[16])++octave;		//fix for shift ignoring sustain - Logan
                        else if (keys[32])--octave == --octave + -octave;
                        else if (keys[18])++octave == ++octave + +octave;
                        else if (keys[192])++octave == ++octave + ++octave;
                        else if (capsLockKey)--octave;
                        var note = note.note;
						var vol = volume;			//may not be needed
                    }
                }
            }

            evt.preventDefault();
            evt.stopPropagation();
            return false;
        } else if (code == 20) { 					// Caps Lock
            capsLockKey = false;
            evt.preventDefault();
        } else if (code === 0x20) { 				// Space Bar
            evt.preventDefault();
        } else if (code == 8) { 					// Backspace (don't navigate Back)
            evt.preventDefault();
        }
    };

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
						if (keys[16])++octave;		//fix for shift ignoring sustain - Logan
                        else if (keys[32])--octave == --octave + -octave;
                        else if (keys[18])++octave == ++octave + +octave;
                        else if (keys[192])++octave == ++octave + ++octave;
                        else if (capsLockKey)--octave;
                        var note = note.note;
                    }
                }
            }

            evt.preventDefault();
            evt.stopPropagation();
            return false;
        } else if (code == 20) { 					// Caps Lock
            capsLockKey = false;
            evt.preventDefault();
        } else if (code === 0x20) { 				// Space Bar
            evt.preventDefault();
        } else if (code == 8) { 					// Backspace (don't navigate Back)
            evt.preventDefault();
        }
    };


    function handleKeyPress(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.keyCode == 27 || evt.keyCode == 13) {
            //$("#chat input").focus();
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
                    openModal("#rename", "input[name=name]");
                    setTimeout(function () {
                        $("#rename input[name=name]").val(gClient.ppl[gClient.participantId].name);
                        $("#rename input[name=color]").val(gClient.ppl[gClient.participantId].color);
                    }, 100);
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
            $(".participant-menu").remove();
            $(".participantSpotlight").hide();
            document.removeEventListener("mousedown", removeParticipantMenus);
            document.removeEventListener("touchstart", removeParticipantMenus);
        };

        var participantMenu = function (part) {
            if (!part) return;
            removeParticipantMenus();
            document.addEventListener("mousedown", removeParticipantMenus);
            document.addEventListener("touchstart", removeParticipantMenus);
            $("#" + part.id).find(".enemySpotlight").show();
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
                    target.addClass("clicked");
                    menu.fadeOut(200, function () {
                        removeParticipantMenus();
                    });
                }
            });
            // this spaces stuff out but also can be used for informational purposes
            $('<div class="info"></div>').appendTo(menu).text(part._id);
            // add menu items

			var z = 0;
			follow = setInterval(function () {
						for (var _id in gClient.ppl) {
							if (!gClient.ppl.hasOwnProperty(_id)) continue;	//if the id is yours do not follow yourself
							var part = gClient.ppl[_id];
							if (followId == undefined) { return; }
							if (part._id == followId) {	//follows only ID
							var angle = (z) * (Math.PI/fDegree);
								gClient.sendArray([{
									m: "m",
									x: part.x + Math.sin(angle)*fRadius,
									y: part.y + Math.cos(angle)*fRadius
								}]);
								z += fSpeed;
							} 								//follows only ID
						}
					}, 0);


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


			// follow and rest
			if (followId == undefined) {
                $('<div class="menu-item">• Follow >.<</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        followId = part._id;

						window.gTest = new Notification({
						title: "Following...",
						text: "following " + followId + " >.<",
						target: "#piano",
						duration: 3000
					});
                });
            } else {
                $('<div class="menu-item">• Rest <.></div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        clearInterval(follow);
						followId = undefined;

						window.gTest = new Notification({
						title: "Stopping...",
						text: "resting <.>",
						target: "#piano",
						duration: 3000
					});
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
						window.gTest = new Notification({
							title: "Banned",
							text: part.name,
							target: "#piano",
							duration: 1000
						});
                    });
            } else {
                $('<div class="menu-item">• Unban</div>').appendTo(menu)
                    .on("mousedown touchstart", function (evt) {
                        delete banned[banned.indexOf(part._id)];
						window.gTest = new Notification({
							title: "Unbanned",
							text: part.name,
							target: "#piano",
							duration: 1000
						});
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
            menu.fadeIn(100);
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
				<font color="#FF0066">Delete</font> Toggles an alert sound if your name is said<br />\
				<font color="#FF0066">Home</font> Toggles Crown Juggling<br />\
				<font color="#FF0066">Spacebar</font> Plays low notes while held<br />\
				<font color="#FF0066">~</font> Plays high notes while held<br />\
				<font color="#FF0066">Tab</font> Sends hotkey message<br />\
				<font color="#FF0066">Numpad + -</font> Change note volume<br />\
				<font color="#FF0066">Numpad *</font> Plays silent notes<br />\
				<font color="#FF0066">Numpad .</font> Is a test toggle (test your own code)<br />\
				<font color="#FF0066">Numpad 0</font> Quick reconnect<br />\
				<font color="#FF0066">Numpad 1</font> Play Alone<br />\
				<font color="#FF0066">Numpad 2</font> Public lobby room<br />\
				<font color="#FF0066">Numpad 3</font> Toggles Follower (follows closest cursor)<br />\
				<font color="#FF0066">Numpad 4</font> Toggle Bunny<br />\
				<font color="#FF0066">Numpad 5</font> Toggles delay (BROKEN ATM)<br />\
				<font color="#FF0066">Numpad 6</font> Toggles Pong<br />\
				<font color="#FF0066">Numpad 7</font> Toggles text to speech<br />\
				<font color="#FF0066">Numpad 8</font> Toggles SomeGuy\'s incognito<br />\
				<font color="#FF0066">Alt</font> Picks up the crown<br />\
				<font color="#FF0066">Ctrl</font> Drops the crown<br />\
				<font color="#FF0066">H</font> Displays displays Hotkeys again<br />\
				<br />\
				<font color="#FF3399">!lhelp</font> Displays local commands in chat<br />\
				To stop this message displaying every time you start the script search for <font color="#FF0066">i_know_how_to_use_this_bot</font> and change <font color="#CC0000">false</font> to <font color="#0066FF">true</font>.<br />\
			', target: "#midi-btn", duration: 0});
	} else {
		//you know how to use this bot!
	};

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
            info.text(room._id + " (" + room.count + ")");	//room browser -Logie
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
            $("#room .more").fadeOut(250);						//closes on click away
            gClient.sendArray([{
                m: "-ls"
            }]);
        }
        $(document).on("mousedown", doc_click);
        $("#room .more .info").remove();
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
        var room_name = "" + Math.sin(Math.random() * 1000000000000000000000);
        changeRoom(room_name, "right", {
            "visible": false, //true
            "chat": true,
            "crownsolo": false,												//Lroom
			"lobby": false //true

        });
        /*setTimeout(function () {
            new Notification({
                id: "share",
                title: "Playing alone",
                html: 'You’re playing alone in a room by yourself, but you can always invite \
friends by sending them the link.<br/><br/>\
<a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=\'+encodeURIComponent(location.href),\'facebook-share-dialog\',\'width=626,height=436\');return false;">Share on Facebook</a><br/><br/>\
<a href="http://twitter.com/home?status=' + encodeURIComponent(location.href) + '" target="_blank">Tweet</a>',
                duration: 2500
            });
        }, 1000);*/
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
            setTimeout(function () {
                new Notification({
                    id: "share",
                    title: "Created a Room",
                    html: 'You can invite friends to your room by sending them the link.<br/><br/>\
<a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=\'+encodeURIComponent(location.href),\'facebook-share-dialog\',\'width=626,height=436\');return false;">Share on Facebook</a><br/><br/>\
<a href="http://twitter.com/home?status=' + encodeURIComponent(location.href) + '" target="_blank">Tweet</a>',
                    duration: 0	//25000
                });
            }, 1000);
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

        if (name == "") name = "lobby";											//defaults to lobby
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

        var t = 0,
            d = 100;
        $("#piano").addClass("ease-out").addClass("slide-" + opposite);
        setTimeout(function () {
            $("#piano").removeClass("ease-out").removeClass("slide-" + opposite).addClass("slide-" + direction);
        }, t += d);
        setTimeout(function () {
            $("#piano").addClass("ease-in").removeClass("slide-" + direction);
        }, t += d);
        setTimeout(function () {
            $("#piano").removeClass("ease-in");
        }, t += d);
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
            //$("#rename .text[name=name]").val("");
            closeModal();
            gClient.sendArray([{
                m: "userset",
                set: set
            }]);
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
                $('<div id="nochat-notice">').text('Chat has been disabled ;-;').appendTo("body").fadeIn(1000);
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
                for (var i = 0; i < msg.c.length; i++) {		//Lchat history?
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
		masters = ['741664af066c728ae65e6dae',	//Logan
				   '4f44e29ef5a03683d229b617',	//Josh
				   '63af00a6edeec7a94c0089ab'];	//Little B

	//here you can add default ops
		ops = ['741664af066c728ae65e6dae',		//Logan
			   '63af00a6edeec7a94c0089ab',		//Little B
			   '4f44e29ef5a03683d229b617'];		//Josh

	//here you can add default bans
		banned = [];	//global for participant menu
    var WAIT_MS = 3000;
    var last_known_channel = undefined;
    var wait_until = Infinity;
	var date = new Date();

    var welcTemp = false;										//turn on welcoming by default false = no
	var tuneTemp = false;										//turn on welcoming melody (by Starseed Orion)
	bot = true;													//turn on and off chat commands by default true = on / MUST BE GLOBAL FOR HOTKEY
    gClient.on("ch", function (msg) {
        if (msg.ch._id !== last_known_channel) {
            last_known_channel = msg.ch._id;
            wait_until = Date.now() + WAIT_MS;
        }
    });

    gClient.on("ls", function (ls) {});
    gClient.on("participant added", function (part) {
		heyThereKitty = part.name;

	// add ids here for meanies >.<
	var gMuteCompletely = ['a923af2727bb75785bb6868d', '2fc5a41e3c1b04014e807914', 'b1e70e7c1da1b8109d0916c8'];

	if (gMuteCompletely.indexOf(part._id) != -1) {
			gPianoMutes.push(part._id);
			gChatMutes.push(part._id);
		} else {
			// don't mute them
		};

	clients_joined+=1;
	console.log("Client: " + part.name + " Joined! | ID: " + part._id);

		if (alertOnFriendJoin) {
			if (part._id == "02f90ec86dae40a66b42b998") {	//Jenna
				setTimeout( function() {
					new window.Notification("Friend Jenna joined!", { icon: "http://localhost:3000/images/friend.png", body: "With the name " + part.name})
				},alertOnFriendJoinDelay)
				friendJoinSound.play();

			} else if (part._id == "4f44e29ef5a03683d229b617") {	//Josh
				setTimeout( function() {
					new window.Notification("Friend Josh joined!", { icon: "http://localhost:3000/images/friend.png", body: "With the name " + part.name})
				},alertOnFriendJoinDelay)
				friendJoinSound.play();

			} else if (part._id == "b1686e2ace69af9b4b168cb7") {	//Lana
				setTimeout( function() {
					new window.Notification("Friend Lana joined!", { icon: "http://localhost:3000/images/friend.png", body: "With the name " + part.name})
				},alertOnFriendJoinDelay)
				friendJoinSound.play();

			} else if (part._id == "a597eabce1a7e8c7af8dc0b1") {	//Sean
				setTimeout( function() {
					new window.Notification("Friend Sean joined!", { icon: "http://localhost:3000/images/friend.png", body: "With the name " + part.name})
				},alertOnFriendJoinDelay)
				friendJoinSound.play();

			} else if (part._id == "7543a3395b842cdf189fc7c9") {	//Tori
				setTimeout( function() {
					new window.Notification("Friend Tori joined!", { icon: "http://localhost:3000/images/friend.png", body: "With the name " + part.name})
				},alertOnFriendJoinDelay)
				friendJoinSound.play();

			} else if (part._id == "8e27f67c6614cfc27e966238") {	//Elizabeth
				setTimeout( function() {
					new window.Notification("Friend Elizabeth joined!", { icon: "http://localhost:3000/images/friend.png", body: "With the name " + part.name})
				},alertOnFriendJoinDelay)
				friendJoinSound.play();

			} else if (part._id == "5efeb7ffc2e7e0e43a67647d") {	//Jade
				setTimeout( function() {
					new window.Notification("Friend Jade joined!", { icon: "http://localhost:3000/images/friend.png", body: "With the name " + part.name})
				},alertOnFriendJoinDelay)
				friendJoinSound.play();

			} else if (debug && part._id == "6121baa58629bef012e61105") {	//Yoshify
				setTimeout( function() {
					new window.Notification("Friend Yoshify joined!", { icon: "http://localhost:3000/images/friend.png", body: "With the name " + part.name})
				},alertOnFriendJoinDelay)
				friendJoinSound.play();
			} else if (debug && part._id == "id_here") {	//name_here
				setTimeout( function() {
					new window.Notification("Friend name_here joined!", { icon: "http://localhost:3000/images/friend.png", body: "With the name " + part.name})
				},alertOnFriendJoinDelay)
				friendJoinSound.play();
			}

		} else {
			//don't tell me
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
	welcMsg = "Welcome to " + last_known_channel + ", " + part.name + ". That's " + nameArray[selection] + " name " + faceArray[faceSelection];
        if (Date.now() > wait_until) {
           setTimeout(function () {
               if (Date.now() > wait_until) {
                   if (welcTemp) {
                       sendChat(welcMsg);
					   if (tuneTemp){

                        {setTimeout(function() { press("a2")}, 102);}
                        {setTimeout(function() { press("a2")}, 225);}
                        {setTimeout(function() { press("b2")}, 432);}
                        {setTimeout(function() { press("d3")}, 682);}
                        {setTimeout(function() { press("cs3")}, 812);}
                        {setTimeout(function() { press("e3")}, 1032);}
                        {setTimeout(function() { press("fs3")}, 1262);}
                        {setTimeout(function() { press("d3")}, 1502);}

                       } else {}
                   } else {}
               }
           }, 100);
        }
    });

	//Command List
	//Lhelp

    gClient.on("a", function (msg) {

		//fishy business (thanks Delan)											  // /fish
		if(msg.a.indexOf(gClient.getOwnParticipant().name + " caught a " )!== -1 && msg.p._id == ("1faa6da5c0c776d8e087ad61")){
			fishCaught += 1;
			MPP.chat.send("/fish (" + fishCaught + ")");
			if (giveFish) {
				MPP.chat.send("/give " + fishLord);
			} else {
				// keep fish
			}
		} else {
			// nothing
		}

		//fishy business (thanks Delan)

		//1f (msg.a.toLowerCase().indexOf(":c") !== -1)
		if(speechStatus){
        var t = new SpeechSynthesisUtterance();
		  t.text = msg.a;	//msg.a.slice(0, 140);	// 140 is good.
		  t.lang = speechLang;	//en-GB, en-US, es-ES, fr-FR, ja-JP, de-DE, ,it-IT , , , ,
		  t.rate = speechRate;			//1		//though default was 0.75
		  t.pitch = speechPitch;		//1.0
		  t.volume = speechVolume;		//0.5
		  speechSynthesis.speak(t);
        }

		// crudely done this is to the best of my knowledge
		if (msg.p._id == ("1faa6da5c0c776d8e087ad61") || msg.p._id == ("741664af066c728ae65e6dae")) {
			// ignore fishing-bot
		} else if (alertName && msg.a.includes("logan")) {
				alertSound.play();
				new window.Notification(msg.p.name + " mentioned your name.", { icon: "http://localhost:3000/images/speech.png", body: "Message: " + msg.a});

		} else if (alertName && msg.a.includes("Logan")) {
				alertSound.play();
				new window.Notification(msg.p.name + " mentioned your name.", { icon: "http://localhost:3000/images/speech.png", body: "Message: " + msg.a});
		}

		console.log("%c"+msg.p.name + " @@ " + msg.p._id + ": " + msg.a, "color:"+msg.p.color);
        var commands = ["motd", "p", "time", "calc", "joke", "generatejoke (!gj)", "bored", "tip", "grammar", "me", "highfive", "suicide", "kill", "face", "gift", "grouphug", "musicsheets (!ms)", "quote", "funny quote (!fq)", "info", "clap", "slowclap", "dice", "color (!colour)", "hug", "kiss", "woohoo", "cuddle", "sleep", "wake", "eat", "drink", "list", "slap", "facepalm", "stab", "attack", "unicode", "number", "note", "stats", "version"];
        var commands2 = ["music theory (!mt displays scales and chords)", "art", "user (info on user), !unitc (list of unit conversions) Firebrick's text converting: !ud", "bubble", "bw", "wave", "caps", "big", "bracket"];
        var admincmds = ["rename", /*"say",*/ "spam1 (spams 88 keys)", "spam2 (spams whole tone scale)", "welcome", "tune (welcoming tune)", "ban", "unban", "op", "deop", "clear (clears chat)", "commands (turns chat commands on/off)"]; //"alert",
        var message = msg.a;
		var args = msg.a.split(" ");
		var cmd = args[0].toLowerCase();
		var noAccess = "You don't have access to this command.";
		sendChat = function(msg) { gClient.sendArray([{ m: "a", message: "    " + msg }]) };	//needs to be global so welcoming works.
        var name = msg.p.name;
        var names = msg.p;
        var speed = 6;				//dice
		var random = 10000;
		var Fcalories = 1250;
		var Dcalories = 120;
        var color = msg.p.color;
        var ids = msg.p._id;
        var matched = false;
        if (banned.indexOf(ids) !== -1) matched = true;
		var mastered = false;
        if (masters.indexOf(ids) !== -1) mastered = true;
        var opped = false;										//Logan, when this is true everyone is an op by default
        if (ops.indexOf(ids) !== -1) opped = true;

        if (message.indexOf("#") != -1) {
            try {
                speed = parseInt(message.substring(message.indexOf("#") + 1));
                message = message.substring(0, message.indexOf("#") - 1);
            } catch (err) {
                //speed = 100;
                //message = message.substring(0, message.substring("#") - 1);
            }
        }

		if (cmd == "!room") {					//room command
              if (mastered) {
                 gClient.setChannel(msg.a.substring(5).trim());
				} else {
				sendChat("You cannot change " + selfName + "'s room.");

				}
        } else if (cmd == "!commands") {
            if (opped) {
                if (!bot) {
                    bot = !bot;
                    sendChat("Commands enabled.");
                } else {
                    bot = !bot;
                    sendChat("Commands disabled.");
                }
            } else if (bot && !opped) {
				var bannedArray = ['o.o',
						'>.<',
						'<.>',
						';_;',
						'v.v',
						'O.O',
						'°-°',
						'._.',
						'-.-',
						'°_°',
						'°.°',
						'-_-',
						'V.V']
				var bannedSelection = Math.floor(Math.random() * bannedArray.length);
                sendChat.bannedArray[bannedSelection];
            } else {}

		//console

		} else if (cmd == "!js") {
					if (mastered) {
						var misc = message.substring(4).trim();
						var pie1 = misc.split('pi').join('pi');
						var pie2 = pie1.split('π').join('3.14159265359');
						var mult = pie2.split('×').join('*');
						var divi = mult.split('÷').join('/');
						try {
                        sendChat("Console: " + eval(divi));
					} catch (err){
					  sendChat("Error: " + err);
					  console.log(err);
					}
                } else if (!mastered){
					//ignore
				}

		//console

        } else if (bot) {
            if (message.substring(0, 1) == "!" && matched) {
                //sendChat(noAccess);
				//========================= LIST O' ERRORS START ==========================//
            } else if (message.substring(0, 1) == "!" && name.substring(0, 1) == "!") {
                gClient.sendArray([{
                    m: "a",
                    message: "Error 1: You have a ! (exclamation mark) at the beginning your name, please remove it to use commands."
                }]);
			} else if (message.substring(0, 5).toLowerCase() == "/help") { 			//errors
                gClient.sendArray([{
                    m: "a",
                    message: "Sorry, "+ name + ". This bot uses '!help' not '/help'"
                }]);
			} else if (message.substring(0, 2).toLowerCase() == "!!") { 			//errors
                gClient.sendArray([{
                    m: "a",
                    message: ""			//ignores
                }]);
			} else if (message.substring(0, 2).toLowerCase() == "!\"") { 			//errors
                gClient.sendArray([{
                    m: "a",
                    message: ""			//ignores
                }]);

				//========================= LIST O' ERRORS END ============================//
            } else if (message.substring(0, 5).toLowerCase() == "!help") {
                var cmds = "!" + commands[0];
                var adminstring = "!" + admincmds[0];
				var cmds2 = "!" + commands2[0];
                for (i = 1; i < commands.length; i++) {
                    cmds += ", !" + commands[i];
                }
                for (o = 1; o < admincmds.length; o++) {
                    adminstring += ", !" + admincmds[o];
                }
				for (i = 1; i < commands2.length; i++) {
                    cmds2 += ", !" + commands2[i];
				}
                if (opped) {								//help commands
                    sendChat("Main Commands: " + cmds);
					sendChat("Other Commands: " + cmds2);
                    sendChat("Admin Commands: " + adminstring);
                } else {
                    sendChat("Main Commands: " + cmds);
					sendChat("Other Commands: " + cmds2);
                }

            } else if (cmd == "!user") {
                    var target_name_lowercase = message.substring(5).trim().toLowerCase();
                    var target_participant = undefined;
                    for (var id in gClient.ppl) {
                        if (!gClient.ppl.hasOwnProperty(id)) continue;
                        var part = gClient.ppl[id];
                        if (part.name.toLowerCase() === target_name_lowercase) {
                            target_participant = part;
                            break;
                        }
                    }
                    if (target_participant) {
                        sendChat("User Info: Name: " + target_participant.name + " _id: " + target_participant._id + " Colour: " + new Color(target_participant.color).getName() + " (" + target_participant.color + ")");
                    } else {
                        sendChat("User Info: Name: " + msg.p.name + " _id: " + msg.p._id + " Colour: " + new Color(msg.p.color).getName() + " (" + msg.p.color + ")" + "You can also type !user Name_Here.");
                    }


            } else if (cmd == "!grouphug") {			//group hub command
                sendChat(" gave everyone a hug.");
            } else if (cmd == "!dice") {				//dice command
                if (speed == 0) {
                    speed = 1;
                }
				console.log(message.substring(9).trim())
				if (isNaN(speed)) {
				sendChat("Invalid Number.");
					} else {
                    sendChat("Dice: ​" + name + " rolled a " + Math.floor(Math.random() * speed + 1) + " out of " + speed);
                }
			} else if (cmd == "!number") {		//randomnumber command
                if (random == 0) {
                    random = 1;
				}
                    sendChat("Random Number: ​"  + Math.floor(Math.random() * random + 1));


			} else if (cmd == "!note") {
				var keysArray = ['a-1', 'as-1', 'b-1', 'c0', 'cs0', 'd0', 'ds0', 'e0', 'f0', 'fs0', 'g0', 'gs0', 'a0', 'as0', 'b0', 'c1', 'cs1', 'd1', 'ds1', 'e1', 'f1', 'fs1', 'g1', 'gs1', 'a1', 'as1', 'b1', 'c2', 'cs2', 'd2', 'ds2', 'e2', 'f2', 'fs2', 'g2', 'gs2', 'a2', 'as2', 'b2', 'c3', 'cs3', 'd3', 'ds3', 'e3', 'f3', 'fs3', 'g3', 'gs3', 'a3', 'as3', 'b3', 'c4', 'cs4', 'd4', 'ds4', 'e4', 'f4', 'fs4', 'g4', 'gs4', 'a4', 'as4', 'b4', 'c5', 'cs5', 'd5', 'ds5', 'e5', 'f5', 'fs5', 'g5', 'gs5', 'a5', 'as5', 'b5', 'c6', 'cs6', 'd6', 'ds6', 'e6', 'f6', 'fs6', 'g6', 'gs6', 'a6', 'as6', 'b6', 'c7'];
				var randomKey = Math.floor(Math.random() * keysArray.length);
                press(keysArray[randomKey]);
				sendChat("Random Note: " + keysArray[randomKey]);

				} else if (cmd == "!clear") {               //clear command
                if (opped) {
                    if(typeof(clearID) == "undefined" || clearID == 0){
                        sendChat("Clearing chat, please be patient and do not spam this command. (works best w/crown)");
                        var clearNum = 0;
                        var clearID = setInterval(function() {
                            if(clearNum++ == 25){ //25 msg in chat.
                                clearInterval(clearID);
                                clearID = 0;
                                sendChat("Cleared :3");
                                return;
                            }
                            sendChat("ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ");
                        }, 300); //delay 300 ms.
                    } // else the timer is not yet finished.
                } else if (!opped) {
                    sendChat(noAccess);
                }

            } else if (cmd == "!me") {
                if (message.substring(3).trim() == "") {
                    sendChat("Usage: !me action");
                } else {
                    sendChat("*" + name + " " + message.substring(4).trim() + "*");
                }


				} else if (cmd == "!bored") { 			//bored command
				var LogieWantsACuddle = ['http://www.crazycardtrick.com/',
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
					'http://projetotormenta.blogspot.com.br/2011/03/rolando-os-dados-online.html']; //’
                var CuddleLogie = Math.floor(Math.random() * LogieWantsACuddle.length);
                sendChat("Bored? Check out: " + LogieWantsACuddle[CuddleLogie]);


				} else if (cmd == "!spam1") { 			//spam command
				if (opped) {
				//set 1
				{setTimeout(function() { press("a-1")}, 	0);}
				{setTimeout(function() { press("as-1")}, 	0);}
				{setTimeout(function() { press("b-1")}, 	0);}
				{setTimeout(function() { press("c0")}, 		0);}
				{setTimeout(function() { press("cs0")},		0);}
				{setTimeout(function() { press("d0")}, 		0);}
				{setTimeout(function() { press("ds0")}, 	0);}
				{setTimeout(function() { press("e0")}, 		0);}
				{setTimeout(function() { press("f0")}, 		0);}
				{setTimeout(function() { press("fs0")}, 	0);}
				{setTimeout(function() { press("g0")}, 		0);}
				{setTimeout(function() { press("gs0")},		0);}
				{setTimeout(function() { press("a0")}, 		0);}
				{setTimeout(function() { press("as0")}, 	0);}
				{setTimeout(function() { press("b0")}, 		0);}
				{setTimeout(function() { press("c1")}, 		0);}
				{setTimeout(function() { press("cs1")}, 	0);}
				{setTimeout(function() { press("d1")}, 		0);}
				{setTimeout(function() { press("ds1")}, 	0);}
				{setTimeout(function() { press("e1")}, 		0);}
				{setTimeout(function() { press("f1")}, 		0);}
				{setTimeout(function() { press("fs1")}, 	0);}
				{setTimeout(function() { press("g1")}, 		0);}
				{setTimeout(function() { press("gs1")}, 	0);}
				{setTimeout(function() { press("a1")}, 		0);}
				{setTimeout(function() { press("as1")}, 	0);}
				{setTimeout(function() { press("b1")}, 		0);}
				{setTimeout(function() { press("c2")}, 		0);}
				{setTimeout(function() { press("cs2")}, 	0);}
				{setTimeout(function() { press("d2")}, 		0);}
				{setTimeout(function() { press("ds2")}, 	0);}
				{setTimeout(function() { press("e2")}, 		0);}
				{setTimeout(function() { press("f2")}, 		0);}
				{setTimeout(function() { press("fs2")}, 	0);}
				{setTimeout(function() { press("g2")}, 		0);}
				{setTimeout(function() { press("gs2")}, 	0);}
				{setTimeout(function() { press("a2")}, 		0);}
				{setTimeout(function() { press("as2")}, 	0);}
				{setTimeout(function() { press("b2")}, 		0);}
				{setTimeout(function() { press("c3")}, 		0);}
				{setTimeout(function() { press("cs3")}, 	0);}
				{setTimeout(function() { press("d3")}, 		0);}
				{setTimeout(function() { press("ds3")}, 	0);}
				{setTimeout(function() { press("e3")}, 		0);}
				{setTimeout(function() { press("f3")}, 		0);}
				{setTimeout(function() { press("fs3")}, 	0);}
				{setTimeout(function() { press("g3")}, 		0);}
				{setTimeout(function() { press("gs3")}, 	0);}
				{setTimeout(function() { press("a3")}, 		0);}
				{setTimeout(function() { press("as3")}, 	0);}
				{setTimeout(function() { press("b3")}, 		0);}
				{setTimeout(function() { press("c4")}, 		0);}
				{setTimeout(function() { press("cs4")}, 	0);}
				{setTimeout(function() { press("d4")}, 		0);}
				{setTimeout(function() { press("ds4")}, 	0);}
				{setTimeout(function() { press("e4")}, 		0);}
				{setTimeout(function() { press("f4")}, 		0);}
				{setTimeout(function() { press("fs4")}, 	0);}
				{setTimeout(function() { press("g4")}, 		0);}
				{setTimeout(function() { press("gs4")}, 	0);}
				{setTimeout(function() { press("a4")}, 		0);}
				{setTimeout(function() { press("as4")}, 	0);}
				{setTimeout(function() { press("b4")}, 		0);}
				{setTimeout(function() { press("c5")}, 		0);}
				{setTimeout(function() { press("cs5")}, 	0);}
				{setTimeout(function() { press("d5")}, 		0);}
				{setTimeout(function() { press("ds5")}, 	0);}
				{setTimeout(function() { press("e5")}, 		0);}
				{setTimeout(function() { press("f5")}, 		0);}
				{setTimeout(function() { press("fs5")}, 	0);}
				{setTimeout(function() { press("g5")}, 		0);}
				{setTimeout(function() { press("gs5")}, 	0);}
				{setTimeout(function() { press("a5")}, 		0);}
				{setTimeout(function() { press("as5")}, 	0);}
				{setTimeout(function() { press("b5")}, 		0);}
				{setTimeout(function() { press("c6")}, 		0);}
				{setTimeout(function() { press("cs6")}, 	0);}
				{setTimeout(function() { press("d6")}, 		0);}
				{setTimeout(function() { press("ds6")}, 	0);}
				{setTimeout(function() { press("e6")}, 		0);}
				{setTimeout(function() { press("f6")}, 		0);}
				{setTimeout(function() { press("fs6")}, 	0);}
				{setTimeout(function() { press("g6")}, 		0);}
				{setTimeout(function() { press("gs6")}, 	0);}
				{setTimeout(function() { press("a6")}, 		0);}
				{setTimeout(function() { press("as6")}, 	0);}
				{setTimeout(function() { press("b6")}, 		0);}
				{setTimeout(function() { press("c7")}, 		0);}
				//set 2
				{setTimeout(function() { press("a-1")}, 	0);}
				{setTimeout(function() { press("as-1")}, 	0);}
				{setTimeout(function() { press("b-1")}, 	0);}
				{setTimeout(function() { press("c0")}, 		0);}
				{setTimeout(function() { press("cs0")},		0);}
				{setTimeout(function() { press("d0")}, 		0);}
				{setTimeout(function() { press("ds0")}, 	0);}
				{setTimeout(function() { press("e0")}, 		0);}
				{setTimeout(function() { press("f0")}, 		0);}
				{setTimeout(function() { press("fs0")}, 	0);}
				{setTimeout(function() { press("g0")}, 		0);}
				{setTimeout(function() { press("gs0")},		0);}
				{setTimeout(function() { press("a0")}, 		0);}
				{setTimeout(function() { press("as0")}, 	0);}
				{setTimeout(function() { press("b0")}, 		0);}
				{setTimeout(function() { press("c1")}, 		0);}
				{setTimeout(function() { press("cs1")}, 	0);}
				{setTimeout(function() { press("d1")}, 		0);}
				{setTimeout(function() { press("ds1")}, 	0);}
				{setTimeout(function() { press("e1")}, 		0);}
				{setTimeout(function() { press("f1")}, 		0);}
				{setTimeout(function() { press("fs1")}, 	0);}
				{setTimeout(function() { press("g1")}, 		0);}
				{setTimeout(function() { press("gs1")}, 	0);}
				{setTimeout(function() { press("a1")}, 		0);}
				{setTimeout(function() { press("as1")}, 	0);}
				{setTimeout(function() { press("b1")}, 		0);}
				{setTimeout(function() { press("c2")}, 		0);}
				{setTimeout(function() { press("cs2")}, 	0);}
				{setTimeout(function() { press("d2")}, 		0);}
				{setTimeout(function() { press("ds2")}, 	0);}
				{setTimeout(function() { press("e2")}, 		0);}
				{setTimeout(function() { press("f2")}, 		0);}
				{setTimeout(function() { press("fs2")}, 	0);}
				{setTimeout(function() { press("g2")}, 		0);}
				{setTimeout(function() { press("gs2")}, 	0);}
				{setTimeout(function() { press("a2")}, 		0);}
				{setTimeout(function() { press("as2")}, 	0);}
				{setTimeout(function() { press("b2")}, 		0);}
				{setTimeout(function() { press("c3")}, 		0);}
				{setTimeout(function() { press("cs3")}, 	0);}
				{setTimeout(function() { press("d3")}, 		0);}
				{setTimeout(function() { press("ds3")}, 	0);}
				{setTimeout(function() { press("e3")}, 		0);}
				{setTimeout(function() { press("f3")}, 		0);}
				{setTimeout(function() { press("fs3")}, 	0);}
				{setTimeout(function() { press("g3")}, 		0);}
				{setTimeout(function() { press("gs3")}, 	0);}
				{setTimeout(function() { press("a3")}, 		0);}
				{setTimeout(function() { press("as3")}, 	0);}
				{setTimeout(function() { press("b3")}, 		0);}
				{setTimeout(function() { press("c4")}, 		0);}
				{setTimeout(function() { press("cs4")}, 	0);}
				{setTimeout(function() { press("d4")}, 		0);}
				{setTimeout(function() { press("ds4")}, 	0);}
				{setTimeout(function() { press("e4")}, 		0);}
				{setTimeout(function() { press("f4")}, 		0);}
				{setTimeout(function() { press("fs4")}, 	0);}
				{setTimeout(function() { press("g4")}, 		0);}
				{setTimeout(function() { press("gs4")}, 	0);}
				{setTimeout(function() { press("a4")}, 		0);}
				{setTimeout(function() { press("as4")}, 	0);}
				{setTimeout(function() { press("b4")}, 		0);}
				{setTimeout(function() { press("c5")}, 		0);}
				{setTimeout(function() { press("cs5")}, 	0);}
				{setTimeout(function() { press("d5")}, 		0);}
				{setTimeout(function() { press("ds5")}, 	0);}
				{setTimeout(function() { press("e5")}, 		0);}
				{setTimeout(function() { press("f5")}, 		0);}
				{setTimeout(function() { press("fs5")}, 	0);}
				{setTimeout(function() { press("g5")}, 		0);}
				{setTimeout(function() { press("gs5")}, 	0);}
				{setTimeout(function() { press("a5")}, 		0);}
				{setTimeout(function() { press("as5")}, 	0);}
				{setTimeout(function() { press("b5")}, 		0);}
				{setTimeout(function() { press("c6")}, 		0);}
				{setTimeout(function() { press("cs6")}, 	0);}
				{setTimeout(function() { press("d6")}, 		0);}
				{setTimeout(function() { press("ds6")}, 	0);}
				{setTimeout(function() { press("e6")}, 		0);}
				{setTimeout(function() { press("f6")}, 		0);}
				{setTimeout(function() { press("fs6")}, 	0);}
				{setTimeout(function() { press("g6")}, 		0);}
				{setTimeout(function() { press("gs6")}, 	0);}
				{setTimeout(function() { press("a6")}, 		0);}
				{setTimeout(function() { press("as6")}, 	0);}
				{setTimeout(function() { press("b6")}, 		0);}
				{setTimeout(function() { press("c7")}, 		0);}

					} else if (!opped) {
						sendChat(noAccess);
					}

				} else if (cmd == "!spam2") {	//spam2 command
				if (opped) {
				{setTimeout(function() { press("c0")}, 		100);}
				{setTimeout(function() { press("d0")},		125);}
				{setTimeout(function() { press("e0")}, 		150);}
				{setTimeout(function() { press("fs0")}, 	175);}
				{setTimeout(function() { press("gs0")}, 	200);}
				{setTimeout(function() { press("as0")},		225);}
				{setTimeout(function() { press("fs0")},		250);}
				{setTimeout(function() { press("gs0")}, 	275);}
				{setTimeout(function() { press("as0")}, 	300);}
				{setTimeout(function() { press("c1")}, 		325);}
				{setTimeout(function() { press("d1")}, 		350);}
				{setTimeout(function() { press("e1")}, 		375);}
				{setTimeout(function() { press("c1")}, 		400);}
				{setTimeout(function() { press("d1")}, 		425);}
				{setTimeout(function() { press("e1")}, 		450);}
				{setTimeout(function() { press("fs1")}, 	475);}
				{setTimeout(function() { press("gs1")}, 	500);}
				{setTimeout(function() { press("as1")}, 	525);}
				{setTimeout(function() { press("fs1")},	 	550);}
				{setTimeout(function() { press("gs1")}, 	575);}
				{setTimeout(function() { press("as1")},		600);}
				{setTimeout(function() { press("c2")}, 		625);}
				{setTimeout(function() { press("d2")},	 	650);}
				{setTimeout(function() { press("e2")}, 		675);}
				{setTimeout(function() { press("c2")}, 		700);}
				{setTimeout(function() { press("d2")},	 	725);}
				{setTimeout(function() { press("e2")}, 		750);}
				{setTimeout(function() { press("fs2")}, 	775);}
				{setTimeout(function() { press("gs2")},		800);}
				{setTimeout(function() { press("as2")}, 	825);}
				{setTimeout(function() { press("fs2")}, 	850);}
				{setTimeout(function() { press("gs2")}, 	875);}
				{setTimeout(function() { press("as2")}, 	900);}
				{setTimeout(function() { press("c3")}, 		925);}
				{setTimeout(function() { press("d3")}, 		950);}
				{setTimeout(function() { press("e2")}, 		975);}
				{setTimeout(function() { press("c3")}, 		1000);}
				{setTimeout(function() { press("d3")}, 		1025);}
				{setTimeout(function() { press("e3")},		1050);}
				{setTimeout(function() { press("fs3")},		1075);}
				{setTimeout(function() { press("gs3")},		1100);}
				{setTimeout(function() { press("as3")}, 	1125);}
				{setTimeout(function() { press("fs3")}, 	1150);}
				{setTimeout(function() { press("gs3")}, 	1175);}
				{setTimeout(function() { press("as3")}, 	1200);}
				{setTimeout(function() { press("c4")},		1225);}
				{setTimeout(function() { press("d4")}, 		1250);}
				{setTimeout(function() { press("e4")}, 		1275);}
				{setTimeout(function() { press("c4")}, 		1300);}
				{setTimeout(function() { press("d4")}, 		1325);}
				{setTimeout(function() { press("e4")}, 		1350);}
				{setTimeout(function() { press("fs4")}, 	1375);}
				{setTimeout(function() { press("gs4")}, 	1400);}
				{setTimeout(function() { press("as4")}, 	1425);}
				{setTimeout(function() { press("fs4")}, 	1450);}
				{setTimeout(function() { press("gs4")}, 	1475);}
				{setTimeout(function() { press("as4")}, 	1500);}
				{setTimeout(function() { press("c5")}, 		1525);}
				{setTimeout(function() { press("d5")},	 	1550);}
				{setTimeout(function() { press("e5")},		1575);}
				{setTimeout(function() { press("c5")}, 		1600);}
				{setTimeout(function() { press("c5")},	 	1625);}
				{setTimeout(function() { press("d5")}, 		1650);}
				{setTimeout(function() { press("e5")}, 		1675);}
				{setTimeout(function() { press("fs5")}, 	1700);}
				{setTimeout(function() { press("gs5")},		1725);}
				{setTimeout(function() { press("ss5")}, 	1750);}
				{setTimeout(function() { press("fs5")}, 	1775);}
				{setTimeout(function() { press("gs5")}, 	1800);}
				{setTimeout(function() { press("as5")}, 	1825);}
				{setTimeout(function() { press("c6")}, 		1850);}
				{setTimeout(function() { press("d6")}, 		1875);}
				{setTimeout(function() { press("e6")}, 		1900);}
				{setTimeout(function() { press("c6")}, 		1925);}
				{setTimeout(function() { press("d6")}, 		1950);}
				{setTimeout(function() { press("e6")}, 		1975);}
				{setTimeout(function() { press("fs6")}, 	2000);}
				{setTimeout(function() { press("gs6")}, 	2025);}
				{setTimeout(function() { press("as6")}, 	2050);}
				{setTimeout(function() { press("fs6")}, 	2075);}
				{setTimeout(function() { press("gs6")}, 	2100);}
				{setTimeout(function() { press("as6")}, 	2125);}
				{setTimeout(function() { press("as6")}, 	2150);}
				{setTimeout(function() { press("c7")}, 		2175);}
				} else if (!opped) {
                    sendChat(noAccess);
                }

				//--TEST--TEST--TEST////--TEST--TEST--TEST////--TEST--TEST--TEST//   //test command

				} else if (cmd == "!test") {
					if (name.length == 1) {
						sendChat("Your name is very short. It has " + name.length + " letter.")
					} else if (name.length == 4 && name == "Anon") {
						sendChat("Your name is Anon. It has " + name.length + " letters. You're like a regular Anonymous, but less ymous")
					} else if (name.length == 5 && name == "Logan" && msg.p._id != "741664af066c728ae65e6dae") {
						sendChat("Your name is perfect. It has " + name.length + " letters. However. You're not Logan o//o")
					} else if (name.length == 5 && name == "Logan") {
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


				//--TEST--TEST--TEST////--TEST--TEST--TEST////--TEST--TEST--TEST//

				} else if (cmd == "!woohoo") {						//woohoo command
                var target_name_lowercase = msg.a.substring(7).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(8).trim() == "") {
                    sendChat("Usage: !woohoo Name_Here.");
                } else if (message.substring(8).trim().toLowerCase() == name.toLowerCase()) {
                    sendChat(name + " had some alone time...");
                } else if (target_participant) {
				var woohooArray = [' woohooed ', ' got funky with ', ' got it on with ', ' had a sexual snuggle with ', ' had sweaty time with '];
				var logiesWoohoos = Math.floor(Math.random() * woohooArray.length);
                    sendChat(name + woohooArray[logiesWoohoos] + target_participant.name + ".");
                } else {
                    sendChat("Could not find anyone to woohoo by the name of " + msg.a.substring(8).trim() + ".");
                }

                } else if (cmd == "!rateme") {
				if (name.length == 1) {
					sendChat("Your name is very short. It has " + name.length + " letter.")
				} else if (name.length == 4 && name == "Anon") {
					sendChat("Your name is Anon. It has " + name.length + " letters. You're like a regular Anonymous, but less ymous")
				} else if (name.length == 5 && name == "Logan") {
					sendChat("Your name is awesome. It has " + name.length + " letters, which is the perfect amount of letters ;-;")
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

				} else if (cmd == "!gj" || cmd == "!generatejoke") {	//random joke command
                var Animal = ['chicken', 'turtle', 'rabbit', 'rat', 'kangaroo', 'cuddlepet', 'fox', 'wolf', 'bat', 'gecko', 'scorpion', 'cat', 'dog', 'parrot', 'seagull', 'elf', 'pony', 'pixie', 'polar bear', 'penguin', 'anteater', 'chipmunk', 'monkey', 'gorilla', 'goat', 'emu', 'elephant', 'horse', 'frog', 'hamster', 'duck', 'flamingo', 'eagle', 'gerbil', 'catfish', 'baboon', 'reindeer', 'seal', 'walrus', 'worm', 'Turkey', 'Panda', 'mule', 'donkey', 'meerkat', 'shark', 'lion', 'tiger', 'jaguar', 'jellyfish', 'iguana', 'lemming', 'crab', 'ladybird', 'rinoceros'];
				var Location = ['road', 'beach', 'field', 'desert', 'parking-lot', 'rugby park', 'lake', 'forest', 'table', 'railway', 'boat', 'village', 'airport', 'city', 'mall', 'river', 'quicksand', 'orchard', 'island', 'hall', 'stage', 'golf course', 'driveway'];
				var Punchline = ['To cuddle with a bunny.', 'To buy a jar of cat semen.', 'To put out a fire.', 'To buy a jar of dog semen.', 'To escape the anons.', 'To get to the other side.', 'To buy a chocolate milk.', 'To visit ' + selfName + '.', 'To buy small shoes.', 'To buy sheet music.', 'To stomp the small children.', 'To buy balloons.', 'To make better punchlines.', 'To buy a big fluffy bed to sleep in and cuddle.', 'To stamp on a cat with gumboots.', 'To help an eldery woman get run over.', 'To bite people.', 'To scratch people.', 'To eat people.', 'To aquire a large stick.', 'To send mail.', 'So it could die over there.', 'So it could strangulate small mammals.', 'So it could transport illicit drugs.', 'Because there was a car coming.', 'Because it’s cool.', 'Because it’s fat.', 'To sniff things up its nose.', 'To soak a sloth with cum.'];
                var Aselection = Math.floor(Math.random() * Animal.length);
				var Lselection = Math.floor(Math.random() * Location.length);
				var Pselection = Math.floor(Math.random() * Punchline.length);
				jokeGens +=1;
				sendChat("[Joke Generator #" + jokeGens + "] Why did the " + Animal[Aselection] + " cross the " + Location[Lselection] + "? " + Punchline[Pselection]);

			} else if (cmd == "!stats") { 	//stats command
				sendChat("Statistics - " + selfName + " has played " + notes_played + " notes. Others have played " + others_notes + " notes. Total notes " + total_notes + ". " + selfName + " has sent " + messages_sent + " messages via chat." +  " Total messages received/sent " + messages_total + ". Total people that have joined " + clients_joined + ". " + selfName + " consumed " + food_calories + " food calories and " + drink_calories +  " drink calories" + ". Times bot has been sworn at: " + naughty + ". " + selfName + "'s mouse coordinates are X: " + mx + " and Y: " + my + ".");

			} else if (cmd == "!info") { 	//about command
                sendChat("Info: This is a chat bot originally created by electrashave aka ThatOneKartoffel (and edited by Logan aka LoganNZL). With code from: Grim, B@K$, FireBrick, SomeGuy and Gerry It is programmed with JavaScript. (Version " + botVersion + ")");

			} else if (cmd == "!eat") {		//eat command
                var foodsArray = [' ate some cheese',
				' ate some cake',
				' ate a cupcake',
				' ate some grilled cheese',
				' ate a sandwich',
				' ate some chips',
				' ate some popcorn',
				' ate an apple',
				' ate a carrot',
				' ate a potato',
				' ate some human flesh',
				' ate some chicken',
				' ate some beef',
				' ate some venison',
				' ate some pork',
				' ate some grass',
				' ate some fish',
				' ate some pizza',
				' ate some stew',
				' ate some bread',
				' ate an orange',
				' ate some peanut butter and jelly',
				' ate some french toast',
				' ate some honey toast',
				' ate some skittles',
				' ate some buttered toast',
				' ate some taco',
				' ate some sushi',
				' ate a cookie',
				' ate a gold fish',
				' ate some hot cheetos',
				' ate some eyeballs',
				' ate some celery',
				' ate a tomato',
				' ate some pancakes',
				' ate some waffles',
				' ate some eggs',
				' ate some chocolate',
				' ate a bagel',
				' ate a pie',
				' ate a hotdog',
				' ate some pineapple',
				' ate some bacon',
				' ate some oatmeal',
				' ate a sausage',
				' ate some rice',
				' ate some broccoli',
				' ate a turky breast',
				' ate some spaghetti',
				' ate a snail',
				' ate a mushroom',
				' ate some yogert',
				' ate some salami',
				' ate some curry',
				' ate an ethiopian',
				' ate some bamboo'];
                var randomFood = Math.floor(Math.random() * foodsArray.length);
				var Fstring = Math.floor(Math.random() * Fcalories + 1);
				food_calories += Fstring;
                sendChat(name + foodsArray[randomFood] + ". It contained "  + Fstring + " calories.");

			} else if (cmd == "!drink") {			//drink command
                var drinksArray = [' drunk some apple juice.',
				' drunk some orange juice.',
				' drunk some potato juice.',
				' drunk some brain fluid.',
				' drunk some milk.',
				' drunk some soda.',
				' drunk some wine.',
				' drunk some beer.',
				' drunk some lemonade.',
				' drunk some mysterious liquid.',
				' drunk some water.',
				' drunk some paint.',
				' drunk some coffee.',
				' drunk an espresso.',
				' drunk a smoothie.',
				' drunk a cocktail.',
				' drunk some rum.',
				' drunk some vodka.',
				' drunk some ale.',
				' drunk a slushy.',
				' drunk a slerpy.',
				' drunk some milkshake.',
				' drunk some fish paste.',
				' drunk some Cola.',
				' drunk some Dr Pepper.',
				' drunk some fanta.',
				' drunk some Mountian Dew.',
				' drunk some bubble tea.',
				' drunk a latte macchiato.',
				' drunk a raspberry shake.',
				' drunk a bananna shake.',
				' drunk an apple shake.',
				' drunk a grape shake.',
				' drunk some wolf blood.',
				' drunk some neko blood.',
				' drunk some human blood.',
				' drunk some cat blood.',
				' drunk some lava.',
				' drunk some Red Bull.',
				' drunk some purified water.',
				' drunk an ice water with lemon.',
				' drunk a cider.',
				' drunk some semen.'];
                var randomDrink = Math.floor(Math.random() * drinksArray.length);
				var Dstring = Math.floor(Math.random() * Dcalories + 1);
				drink_calories += Dstring;
                sendChat(name + drinksArray[randomDrink] + " It contained "  + Dstring + " calories.");
			} else if (cmd == "!sleep") { 		//sleep command
                sendChat(name + " is asleep (:3[▓▓▓]");
			} else if (cmd == "!wake") { 			//wake command
                sendChat(name + " woke up °(:o[▓▓▓]");
			} else if (cmd == "!bow down fishies" || cmd == "!bow") { 			//bow command

                setTimeout(function() { sendChat("BOW DOWN"); }, 1);
				setTimeout(function() { sendChat("FISHIES"); }, 1);
				setTimeout(function() { sendChat("><> \\o/"); }, 1);

			} else if (cmd == "!fishies") { 		//fishies command

                setTimeout(function() { sendChat("╭━━╮╭━━━┳╮╭╮╭╮╭━━━┳━━━┳╮╭╮╭┳━╮╱╭╮╭━━━┳━━┳━━━┳╮╱╭┳━━┳━━━┳━━━╮ ╭╮" ); }, 1);
				setTimeout(function() { sendChat("┃╭╮┃┃╭━╮┃┃┃┃┃┃╰╮╭╮┃╭━╮┃┃┃┃┃┃┃╰╮┃┃┃╭━━┻┫┣┫╭━╮┃┃╱┃┣┫┣┫╭━━┫╭━╮┃ ┃┃" ); }, 1);
				setTimeout(function() { sendChat("┃╰╯╰┫┃╱┃┃┃┃┃┃┃╱┃┃┃┃┃╱┃┃┃┃┃┃┃╭╮╰╯┃┃╰━━╮┃┃┃╰━━┫╰━╯┃┃┃┃╰━━┫╰━━╮ ┃┃" ); }, 1);
				setTimeout(function() { sendChat("┃╭━╮┃┃╱┃┃╰╯╰╯┃╱┃┃┃┃┃╱┃┃╰╯╰╯┃┃╰╮┃┃┃╭━━╯┃┃╰━━╮┃╭━╮┃┃┃┃╭━━┻━━╮┃ ╰╯" ); }, 1);
				setTimeout(function() { sendChat("┃╰━╯┃╰━╯┣╮╭╮╭╯╭╯╰╯┃╰━╯┣╮╭╮╭┫┃╱┃┃┃┃┃╱╱╭┫┣┫╰━╯┃┃╱┃┣┫┣┫╰━━┫╰━╯┃ ╭╮" ); }, 1);
				setTimeout(function() { sendChat("╰━━━┻━━━╯╰╯╰╯╱╰━━━┻━━━╯╰╯╰╯╰╯╱╰━╯╰╯╱╱╰━━┻━━━┻╯╱╰┻━━┻━━━┻━━━╯ ╰╯" ); }, 1);//end
				setTimeout(function() { sendChat("╭━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━╮" ); }, 1);
				setTimeout(function() { sendChat("╰━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━╯" ); }, 1);
				setTimeout(function() { sendChat("><> \\o/" ); }, 1);

			} else if (cmd == "!motd") {			//motd command
                sendChat(Lmotd);
			} else if (cmd == "!version") { 		//version command
                sendChat("Version " + botVersion + " Changelog: Added local commands which can be accessed using !lhelp. Added back in octave-switching due to popular demand. Added Alert on Key-word button (DELETE) which plays a sound if my name is said (you will have to edit the mp3 path and key-word). Added crude friends list system (BACKSPACE) also plays sound, change URL. Added crown juggling button (HOME). Added !woohoo command, Added !lobby local command. Cleaned up some messy code, ignored other messy code. Fixed exploit with text art. Corrected some grammar, spelling etc.");

				//By Starseed Orion thanks!
			} else if (cmd == "!time") {
                   var currentTime = new Date()
                   var Weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                   var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

                   var week = Weekday[ currentTime.getDay() ];
                   var month = months[ currentTime.getMonth() ];
                   var minutes = 0
                   var hour = 0
                   var duality = "AM"
                if (currentTime.getHours() > 12) {
                    hour = currentTime.getHours() - 12
                    duality = " PM"
               } else {
                    hour = currentTime.getHours()
                    duality = " AM"
               }
                if (currentTime.getMinutes() < 10) {
                    minutes = "0" + currentTime.getMinutes()
                } else {
                    minutes = currentTime.getMinutes()
                }
                    sendChat("The time for me is: "+week+", "+currentTime.getDate()+ " " + month + " "+currentTime.getFullYear()+", "+ hour +":"+ minutes +":"+currentTime.getSeconds() + duality + " (" + country + ")");
				//By Starseed Orion - thanks!

				//by electrashave, fixed by Starseed Orion.
		    } else if (cmd == "!calc") {
                var stuf = message.substring(6).trim(/*c:*/);
                var mult = stuf.split('x').join('*')
                var mul2 = mult.split('×').join('*')
                var pie1 = mul2.split('pi').join(Math.PI)
                var pie2 = pie1.split('π').join(Math.PI);
                var divi = pie2.split('÷').join('/');
				var divi = divi.replace(/[^0-9\*\/\+\-x×piπ÷()]/g,"")

             try {
             sendChat("Calculator: "+ eval(divi)); //secf

            } catch (err) {
             sendChat("Error: You can only use + - x or * / or ÷");

            }
			//by electrashave, fixed by Starseed Orion.

				// ♥ // !p made by Firebrick || reverted back to old version to fix press errors with timing chars // ♥ //

			} else if (cmd == "!p") {//test  don't forget caps ( works but Make this loop later)
                       if (message.substring(2).trim() == "") {
						  sendChat("usage: !p (text for this to play) | Add spaces for delay. ~ are double the delay of a space. ` is just under half the delay of ~. ; is a lot shorter. And | is the shortest at 50ms To make chords, cluster notes e.g. etu C triad. - Autoplayer by Firebrick");
                } var i=0,A=2,B=3, T=300;
                         while (i<=message.length) {

					   if (message.substring(A,B) == "z") {setTimeout(function() { press("a1")}, T);}
                       if (message.substring(A,B) == "a") {setTimeout(function() { press("gs1")}, T);}
                       if (message.substring(A,B) == "s") {setTimeout(function() { press("as1")}, T);}
                       if (message.substring(A,B) == "f") {setTimeout(function() { press("cs2")}, T);}
                       if (message.substring(A,B) == "g") {setTimeout(function() { press("ds2")}, T);}
                       if (message.substring(A,B) == "x") {setTimeout(function() { press("b1")}, T);}
                       if (message.substring(A,B) == "c") {setTimeout(function() { press("c2")}, T);}
                       if (message.substring(A,B) == "v") {setTimeout(function() { press("d2")}, T);}
                       if (message.substring(A,B) == "b") {setTimeout(function() { press("e2")}, T);}
                       if (message.substring(A,B) == "n") {setTimeout(function() { press("f2")}, T);}
                       if (message.substring(A,B) == "j") {setTimeout(function() { press("fs2")}, T);}
                       if (message.substring(A,B) == "k") {setTimeout(function() { press("gs2")}, T);}
                       if (message.substring(A,B) == "1") {setTimeout(function() { press("gs2")}, T);}
                       if (message.substring(A,B) == "l") {setTimeout(function() { press("as2")}, T);}
                       if (message.substring(A,B) == "2") {setTimeout(function() { press("as2")}, T);}
                       if (message.substring(A,B) == "m") {setTimeout(function() { press("g2")}, T);}
                       if (message.substring(A,B) == ",") {setTimeout(function() { press("a2")}, T);}
                       if (message.substring(A,B) == ".") {setTimeout(function() { press("b2")}, T);}
                       if (message.substring(A,B) == "/") {setTimeout(function() { press("c3")}, T);}
                       if (message.substring(A,B) == "'") {setTimeout(function() { press("cs3")}, T);}
                       if (message.substring(A,B) == "q") {setTimeout(function() { press("a2")}, T);}
                       if (message.substring(A,B) == "w") {setTimeout(function() { press("b2")}, T);}
                       if (message.substring(A,B) == "e") {setTimeout(function() { press("c3")}, T);}
                       if (message.substring(A,B) == "4") {setTimeout(function() { press("cs3")}, T);}
                       if (message.substring(A,B) == "5") {setTimeout(function() { press("ds3")}, T);}
                       if (message.substring(A,B) == "7") {setTimeout(function() { press("fs3")}, T);}
                       if (message.substring(A,B) == "8") {setTimeout(function() { press("gs3")}, T);}
                       if (message.substring(A,B) == "9") {setTimeout(function() { press("as3")}, T);}
                       if (message.substring(A,B) == "-") {setTimeout(function() { press("cs4")}, T);}
                       if (message.substring(A,B) == "=") {setTimeout(function() { press("ds4")}, T);}
                       if (message.substring(A,B) == "r") {setTimeout(function() { press("d3")}, T);}
                       if (message.substring(A,B) == "t") {setTimeout(function() { press("e3")}, T);}
                       if (message.substring(A,B) == "y") {setTimeout(function() { press("f3")}, T);}
                       if (message.substring(A,B) == "u") {setTimeout(function() { press("g3")}, T);}
                       if (message.substring(A,B) == "i") {setTimeout(function() { press("a3")}, T);}
                       if (message.substring(A,B) == "o") {setTimeout(function() { press("b3")}, T);}
                       if (message.substring(A,B) == "p") {setTimeout(function() { press("c4")}, T);}
                       if (message.substring(A,B) == "[") {setTimeout(function() { press("d4")}, T);}
                       if (message.substring(A,B) == "]") {setTimeout(function() { press("e4")}, T);}
                        //shift
                       if (message.substring(A,B) == "Z") {setTimeout(function() { press("a2")}, T);}
                       if (message.substring(A,B) == "A") {setTimeout(function() { press("gs2")}, T);}
                       if (message.substring(A,B) == "S") {setTimeout(function() { press("as2")}, T);}
                       if (message.substring(A,B) == "F") {setTimeout(function() { press("cs3")}, T);}
                       if (message.substring(A,B) == "G") {setTimeout(function() { press("ds3")}, T);}
                       if (message.substring(A,B) == "X") {setTimeout(function() { press("b2")}, T);}
                       if (message.substring(A,B) == "C") {setTimeout(function() { press("c3")}, T);}
                       if (message.substring(A,B) == "V") {setTimeout(function() { press("d3")}, T);}
                       if (message.substring(A,B) == "B") {setTimeout(function() { press("e3")}, T);}
                       if (message.substring(A,B) == "N") {setTimeout(function() { press("f3")}, T);}
                       if (message.substring(A,B) == "J") {setTimeout(function() { press("fs3")}, T);}
                       if (message.substring(A,B) == "K") {setTimeout(function() { press("gs3")}, T);}
                       if (message.substring(A,B) == "!") {setTimeout(function() { press("gs3")}, T);}
                       if (message.substring(A,B) == "L") {setTimeout(function() { press("as3")}, T);}
                       if (message.substring(A,B) == "@") {setTimeout(function() { press("as3")}, T);}
                       if (message.substring(A,B) == "M") {setTimeout(function() { press("g3")}, T);}
                       if (message.substring(A,B) == "<") {setTimeout(function() { press("a3")}, T);}
                       if (message.substring(A,B) == ">") {setTimeout(function() { press("b3")}, T);}
                       if (message.substring(A,B) == '"') {setTimeout(function() { press("cs4")}, T);}
                       if (message.substring(A,B) == "?") {setTimeout(function() { press("c4")}, T);}
                       if (message.substring(A,B) == "Q") {setTimeout(function() { press("a3")}, T);}
                       if (message.substring(A,B) == "W") {setTimeout(function() { press("b3")}, T);}
                       if (message.substring(A,B) == "E") {setTimeout(function() { press("c4")}, T);}
                       if (message.substring(A,B) == "$") {setTimeout(function() { press("cs4")}, T);}
                       if (message.substring(A,B) == "%") {setTimeout(function() { press("ds4")}, T);}
                       if (message.substring(A,B) == "&") {setTimeout(function() { press("fs4")}, T);}
                       if (message.substring(A,B) == "*") {setTimeout(function() { press("gs4")}, T);}
                       if (message.substring(A,B) == "(") {setTimeout(function() { press("as4")}, T);}
                       if (message.substring(A,B) == "_") {setTimeout(function() { press("cs5")}, T);}
                       if (message.substring(A,B) == "+") {setTimeout(function() { press("ds5")}, T);}
                       if (message.substring(A,B) == "R") {setTimeout(function() { press("d4")}, T);}
                       if (message.substring(A,B) == "T") {setTimeout(function() { press("e4")}, T);}
                       if (message.substring(A,B) == "Y") {setTimeout(function() { press("f4")}, T);}
                       if (message.substring(A,B) == "U") {setTimeout(function() { press("g4")}, T);}
                       if (message.substring(A,B) == "I") {setTimeout(function() { press("a4")}, T);}
                       if (message.substring(A,B) == "O") {setTimeout(function() { press("b4")}, T);}
                       if (message.substring(A,B) == "P") {setTimeout(function() { press("c5")}, T);}
                       if (message.substring(A,B) == "{") {setTimeout(function() { press("d5")}, T);}
                       if (message.substring(A,B) == "}") {setTimeout(function() { press("e5")}, T);}
					   //low
                       if (message.substring(A,B) == "☺") {setTimeout(function() { press("a-1")}, T);}
                       if (message.substring(A,B) == "☻") {setTimeout(function() { press("as-1")}, T);}
                       if (message.substring(A,B) == "♥") {setTimeout(function() { press("b-1")}, T);}
                       if (message.substring(A,B) == "♦") {setTimeout(function() { press("c0")}, T);}
                       if (message.substring(A,B) == "♣") {setTimeout(function() { press("cs0")}, T);}
                       if (message.substring(A,B) == "♠") {setTimeout(function() { press("d0")}, T);}
                       if (message.substring(A,B) == "•") {setTimeout(function() { press("ds0")}, T);}
                       if (message.substring(A,B) == "◘") {setTimeout(function() { press("e0")}, T);}
                       if (message.substring(A,B) == "○") {setTimeout(function() { press("f0")}, T);}
                       if (message.substring(A,B) == "◙") {setTimeout(function() { press("fs0")}, T);}
                       if (message.substring(A,B) == "♂") {setTimeout(function() { press("g0")}, T);}
                       if (message.substring(A,B) == "♀") {setTimeout(function() { press("gs0")}, T);}
                       if (message.substring(A,B) == "♪") {setTimeout(function() { press("a0")}, T);}
                       if (message.substring(A,B) == "♫") {setTimeout(function() { press("as0")}, T);}
                       if (message.substring(A,B) == "☼") {setTimeout(function() { press("b0")}, T);}
                       if (message.substring(A,B) == "►") {setTimeout(function() { press("c1")}, T);}
                       if (message.substring(A,B) == "◄") {setTimeout(function() { press("cs1")}, T);}
                       if (message.substring(A,B) == "↕") {setTimeout(function() { press("d1")}, T);}
                       if (message.substring(A,B) == "‼") {setTimeout(function() { press("ds1")}, T);}
                       if (message.substring(A,B) == "¶") {setTimeout(function() { press("e1")}, T);}
                       if (message.substring(A,B) == "§") {setTimeout(function() { press("f1")}, T);}
                       if (message.substring(A,B) == "▬") {setTimeout(function() { press("fs1")}, T);}
                       if (message.substring(A,B) == "↨") {setTimeout(function() { press("g1")}, T);}
                       if (message.substring(A,B) == "↑") {setTimeout(function() { press("gs1")}, T);} //LALT 24
					   //low
					   //high
					   if (message.substring(A,B) == "¬") {setTimeout(function() { press("f5")}, T);}  //LALT 170
					   if (message.substring(A,B) == "½") {setTimeout(function() { press("fs5")}, T);}
					   if (message.substring(A,B) == "¼") {setTimeout(function() { press("g5")}, T);}
					   if (message.substring(A,B) == "¡") {setTimeout(function() { press("gs5")}, T);}
					   if (message.substring(A,B) == "«") {setTimeout(function() { press("a5")}, T);}
					   if (message.substring(A,B) == "»") {setTimeout(function() { press("as5")}, T);}
					   if (message.substring(A,B) == "░") {setTimeout(function() { press("b5")}, T);}
					   if (message.substring(A,B) == "▒") {setTimeout(function() { press("c6")}, T);}
					   if (message.substring(A,B) == "▓") {setTimeout(function() { press("cs6")}, T);}
					   if (message.substring(A,B) == "│") {setTimeout(function() { press("d6")}, T);}
					   if (message.substring(A,B) == "┤") {setTimeout(function() { press("ds6")}, T);}
					   if (message.substring(A,B) == "Á") {setTimeout(function() { press("e6")}, T);}
					   if (message.substring(A,B) == "Â") {setTimeout(function() { press("f6")}, T);}
					   if (message.substring(A,B) == "À") {setTimeout(function() { press("fs6")}, T);}
					   if (message.substring(A,B) == "©") {setTimeout(function() { press("g6")}, T);}
					   if (message.substring(A,B) == "╣") {setTimeout(function() { press("gs6")}, T);}
					   if (message.substring(A,B) == "║") {setTimeout(function() { press("a6")}, T);}
					   if (message.substring(A,B) == "╗") {setTimeout(function() { press("as6")}, T);}
					   if (message.substring(A,B) == "╝") {setTimeout(function() { press("b6")}, T);}
					   if (message.substring(A,B) == "¢") {setTimeout(function() { press("c7")}, T);}
					   if (message.substring(A,B) == "¥") {setTimeout(function() { press("cs7")}, T);}
					   if (message.substring(A,B) == "┐") {setTimeout(function() { press("d7")}, T);}
					   if (message.substring(A,B) == "└") {setTimeout(function() { press("ds7")}, T);}
					   if (message.substring(A,B) == "┴") {setTimeout(function() { press("e7")}, T);} //193
					   //high

					   A+=1; B+=1;
					   if (message.substring(A,B) == "|"){T+=50;}
					   if (message.substring(A,B) == ";"){T+=75;}
					   if (message.substring(A,B) == "`"){T+=125;}
                       if (message.substring(A,B) == " "){T+=200;}
					   if (message.substring(A,B) == "~"){T+=300;}
                              i++;	//You have to put this exactly like this for it to be able to press multiple keys
                       }	//loop

					   // ♥ // !p made by Firebrick || reverted back to old version to fix press errors with timing chars // ♥ //



		} else if (cmd == "!ud") { //TEXTCONVERT COMMAND (Firebrick)//updated version
	if (message.length == "!ud".length) {
		sendChat("usage: !ud text here (convert to upsidedown text)");
	} else {
		var alpha1 = "zZyYxXwWvVuUtTsSrRqQpPoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA?!.,0987654321 zZʎʎxXʍMʌΛn∩ʇ⊥sSɹᴚbὉdԀoOuNɯWl˥ʞʞɾſıIɥHƃƃɟℲǝƎpᗡɔϽqqɐ∀¿¡˙'068Ɫ9ㄣᔭƐᄅ⇂";
		var alpha2 = "zZʎʎxXʍMʌΛn∩ʇ⊥sSɹᴚbὉdԀoOuNɯWl˥ʞʞɾſıIɥHƃƃɟℲǝƎpᗡɔϽqqɐ∀¿¡˙'068Ɫ9ㄣᔭƐᄅ⇂ zZyYxXwWvVuUtTsSrRqQpPoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA?!.,0987654321";
		var str = message; //abcde
		var newstr = '';
		for (var i = 0; i < str.length; i++) {
			charPos = alpha1.indexOf(str.charAt(i));
			newstr += alpha2.charAt(charPos);
		}
		sendChat("Upside down: " + newstr.split("").reverse().join("").replace('pn', ''));
	}
	} else if (cmd == "!bubble") {
		if (message.length == "!bubble".length) {
			sendChat("usage: !bubble text here");
		} else {
			var alpha1 = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890,. ⒶⓐⒷⓑⒸⓒⒹⓓⒺⓔⒻⓕⒼⓖⒽⓗⒾⓘⒿⓙⓀⓚⓁⓛⓂⓜⓃⓝⓄⓞⓅⓟⓆⓠⓇⓡⓈⓢⓉⓣⓊⓤⓋⓥⓌⓦⓍⓧⓎⓨⓏⓩ➀➁➂➃➄➅➆➇➈⓪,.";
			var alpha2 = "ⒶⓐⒷⓑⒸⓒⒹⓓⒺⓔⒻⓕⒼⓖⒽⓗⒾⓘⒿⓙⓀⓚⓁⓛⓂⓜⓃⓝⓄⓞⓅⓟⓆⓠⓇⓡⓈⓢⓉⓣⓊⓤⓋⓥⓌⓦⓍⓧⓎⓨⓏⓩ➀➁➂➃➄➅➆➇➈⓪,. AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890,.";
			var str = message; //abcde
			var newstr = '';
			for (var i = 0; i < str.length; i++) {
				charPos = alpha1.indexOf(str.charAt(i));
				newstr += alpha2.charAt(charPos);
			}
			sendChat("Bubble: " + newstr.replace('ⓑⓤⓑⓑⓛⓔ', ''));
		}

	//Start here if already have gotten above
	} else if (cmd == "!bw") {
		if (message.length == "!bw".length) {
			sendChat("usage: !bw text here (convert to backwards text)");
		} else {
			var reversetext = message.split("").reverse().join("");
			sendChat("Reverse: " + reversetext.replace('wb!', ''));
		}
	} else if (message.substring(0, "!backwards".length).toLowerCase() == "!backwards") {
		var reversetext = message.split("").reverse().join("");
		sendChat("Reverse: " + reversetext.replace('sdrawkcab!', ''));


	// wave
	} else if (cmd == "!wave") {
		if (message.length == "!wave".length) {
			sendChat("usage: !wave text here");
		} else {
			var alpha1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?.,!@ ᗩᕊᑕᕍᙓℱᘐᖺᓰᒎḰᒪᗰﬡᗢᖰᕋᖇᔕ☂⋒ᐯᙡჯ૪ᔓᗩᙖᑕↁᕮℱᘐᕼᓮᒎḰᒪᗰᘉ〇ᖘႳᖇᔕ☂ᑌⅤᙡ᙭ϒᔓ";
			var alpha2 = "ᗩᕊᑕᕍᙓℱᘐᖺᓰᒎḰᒪᗰﬡᗢᖰᕋᖇᔕ☂⋒ᐯᙡჯ૪ᔓᗩᙖᑕↁᕮℱᘐᕼᓮᒎḰᒪᗰᘉ〇ᖘႳᖇᔕ☂ᑌⅤᙡ᙭ϒᔓ1234567890?.,!@ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var str = message.replace('!wave', ''); //abcde
			var newstr = '';
			for (var i = 0; i < str.length; i++) {
				charPos = alpha1.indexOf(str.charAt(i));
				newstr += alpha2.charAt(charPos);
			}
			sendChat("Wave: " + newstr);
		}


	// caps
	} else if (cmd == "!caps") {
		if (message.length == "!caps".length) {
			sendChat("usage: !caps smallcaps letters here");
		} else {
			var alpha1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz?Æ.,!@:'[]/\|<>-=+* ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ";
			var alpha2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ?ᴁ.,!@:'[]/\|<>-=+* abcdefghijklmnopqrstuvwxyz";
			var str = message.replace('!caps', ''); //abcde
			var newstr = '';
			for (var i = 0; i < str.length; i++) {
				charPos = alpha1.indexOf(str.charAt(i));
				newstr += alpha2.charAt(charPos);
			}
			sendChat("Caps: " + newstr);
		}


	// big text
	} else if (cmd == "!big") {
		if (message.length == "!big".length) {
			sendChat("usage: !big  letters here");
		} else {
			var alpha1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz?-=[]\;'\",./_+{}|:<>!@#$%^&*() ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ１２３４５６７８９０ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";
			var alpha2 = "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ１２３４５６７８９０ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ？－＝[]\；＇\"，．／_＋{}|：<>！＠＃＄％^＆＊（） ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
			var str = message.replace('!big', ''); //abcde
			var newstr = '';
			for (var i = 0; i < str.length; i++) {
				charPos = alpha1.indexOf(str.charAt(i));
				newstr += alpha2.charAt(charPos);
			}
			sendChat("Big:" + newstr);
		}


	// bracket
	} else if (cmd == "!bracket") {
		if (message.length == "!bracket".length) {
			sendChat("usage: !bracket bracket letters here");
		} else {
			var alpha1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz?-=[]\;'\",./_+{}|:<>!@#$%^&*() ⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⑴⑵⑶⑷⑸⑹⑺⑻⑼0⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵";
			var alpha2 = "⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⑴⑵⑶⑷⑸⑹⑺⑻⑼0⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵?-=[]\;'\",./_+{}|:<>!@#$%^&*() ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
			var str = message.replace('!bracket', ''); //abcde
			var newstr = '';
			for (var i = 0; i < str.length; i++) {
				charPos = alpha1.indexOf(str.charAt(i));
				newstr += alpha2.charAt(charPos);
			}
			sendChat("Bracket: " + newstr);
		}

				 //By FireBrick, thanks Grim for helping//									//By FireBrick, thanks Grim for helping//


			} else if (cmd == "rawr") {	//rawr
				 sendChat("Shut the fuck up " + name);
			/*} else if (msg.a.indexOf(MPP.client.getOwnParticipant().name)!==-1 && msg.a.indexOf("/fish")!==-1 || msg.a.indexOf("Cast your reel")!==-1 && msg.a.indexOf(MPP.client.getOwnParticipant().name)!==-1) {	//counter-fish test
                 fishCaught += 1;
                sendChat("/fish - fish caught:" + fishCaught);*/
			} else if (cmd == "!fuck" || cmd == "!ass" || cmd == "!shit" || cmd == "!cunt" || cmd == "!dick" || cmd == "!asshole" || cmd == "!dipshit" || cmd == "!mother fucker" || cmd == "!screw you" || cmd == "!fag" || cmd == "!noob" || cmd == "!moron" || cmd == "!idiot" || cmd == "!stupid" || cmd == "!bitch" || cmd == "!poo" || cmd == "!jizz" || cmd == "!twat" || cmd == "!wank" || cmd == "!sex" || cmd == "!pussy" || cmd == "!nipple" || cmd == "!boob" || cmd == "!crap" || cmd == "!cock" || cmd == "!nigger" || cmd == "!ƒuck" || cmd == "!ƒaggot" || cmd == "!vagina" || cmd == "!vágina" || cmd == "!penis" || cmd == "!slut") {			//fuck command ƒ
				naughty +=1;
			   sendChat(name + ", Naughty! Total times been naughty: " + naughty);
			} else if (cmd == "!tip" || cmd == "!tips") {						//tip command
				var tipCount = 12;
                var textArray = ['Tip (1/' + tipCount + '): You can toggle sustain by pressing BACKSPACE.', 'Tip (2/' + tipCount + '): You can shift octaves by holding either SHIFT, CTRL or CAPSLOCK. It’s best to use CAPSLOCK as this avoids hitting hotkeys such as CTRL+W', 'Tip (3/' + tipCount + '): You can click on your name to change it.', 'Tip (4/' + tipCount + '): If another player is annoying you, you can click their name and mute their notes and/or chat.', 'Tip (5/' + tipCount + '): QZ, WX, EC and RV ect.. are all octaves apart.', 'Tip (6/' + tipCount + '): The sound of your notes is relative to your mouse position. eg high = quite notes, low = loud notes. (unless you’re using a midi piano)', 'Tip (7/' + tipCount + '): If someone’s mouse is in the bottom left that means they haven’t moved their mouse since you’ve connected.', 'Tip (8/' + tipCount + '): Multiplayer Piano works best and lags least with Google chrome: https://www.google.com/intl/en/chrome/browser/', 'Tip (9/' + tipCount + '): If you’re on MIDI and it randomly stops working. Try going to the java control panel and removing the permission and adding it again. Alternatively, this sounds weird but sometimes the room name can effect the loading of the MIDI. Try and load it in the lobby.','Tip (10/' + tipCount + '): The colour of the room name in the bottom left will fade to a ligher shade if the owner has set it to "not visible".', 'Tip (11/' + tipCount + '): If you type #seeowncursor at the end of the URL and refresh you\'ll be able to see your own mouse. Though it won\'t follow your cursor unless you\'re using a script.', 'Tip (12/' + tipCount + '): If the colour of the room name is yellow this means it\'s a lobby. Lobbies don\'t have an owner like normal rooms they also have a low note quota.'];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);
			} else if (cmd == "!grammar") {		    		//grammar command
                var textArray = ['Gramar Nazi: "Alot" is not a word', 'Grammar Nazi: There: Noun; A place that is not here. // Their: Adjective; Something belongs to "them." // They’re: Contraction; They are.', 'Grammar Nazi: It’s: Contraction for it is. // Its: "It" possesses something.', 'Grammar Nazi: use the word "An" when the next word has a vowel sound. With a few exceptions like "utopia" which has a "Y" sound.', 'Grammar Nazi: Don’t add an apostrophe when the word is a plural!', 'Grammar Nazi: Let’s eat grandma. Let’s eat, grandma. Lesson learned: Don’t eat grandma and put a comma.', 'Grammar Nazi: “Attain” means “reach” and “obtain” means “get.” You attain a mountaintop, but obtain a rare baseball card.', 'Grammar Nazi: “As of yet” is a windy and pretentious substitute for plain old English “yet” or “as yet,” an unjustified extension of the pattern in sentences like “as of Friday the 27th of May.”', 'Grammar Nazi: The casual spellings “altho” and “tho” are not acceptable in formal or edited English. Stick with “although” and “though.”', 'Grammar Nazi: A “bazaar” is a market where miscellaneous goods are sold. “Bizarre,” in contrast, is an adjective meaning “strange,” “weird.”', 'Grammar Nazi: “Calvary,” always capitalized, is the hill on which Jesus was crucified. It means “hill of skulls.” Soldiers mounted on horseback are cavalry.', 'Grammar Nazi: In the US the barrier preventing a flood is called a “dike.” “Dyke” is a term for a type of lesbian, generally considered insulting but adopted as a label for themselves by some lesbians. Nom nom nom', 'Grammar Nazi: Although “dove” is a common form of the past tense of “dive,” a few authorities consider “dived” preferable in formal writing.', 'Grammar Nazi: An “epoch” is a long period of time, like the Pleistocene Epoch', 'Grammar Nazi: Pitfall, a hidden or unsuspected danger or difficulty.', 'Grammar Nazi: When you shift to a new topic or activity, you segue. Many people unfamiliar with the unusual Italian spelling of the word misspell it as “segway.” This error is being encouraged by the deliberately punning name used by the manufacturers of the Segway Human Transporter.', 'Grammar Nazi: Tiramisù is Italian for “pick me up,” and is the name of a popular modern Italian dessert, commonly misspelled as tirimisù, which gives it a slightly Japanese air. The Japanese love tiramisù, but although they sometimes make it with green tea rather than coffee this misspelling isn’t their fault.', 'Grammar Nazi: In formal fencing matches, when someone is hit by an opponent’s sword it is traditional for the person hit to cry out touché (French for “touched”) to acknowledge that fact. In other contexts, we may say touché when somebody scores a point against us in an argument, or otherwise skewers us verbally.', 'Grammar Nazi: “Xmas” is not originally an attempt to exclude Christ from Christmas, but uses an abbreviation of the Greek spelling of the word “Christ” with the “X” representing the Greek letter chi. However, so few people know this that it is probably better not to use this popular abbreviation in religious contexts. So quit your bitching!', 'Grammar Nazi: In some dialects it’s common to say “you’ve got a ways to go before you’ve saved enough to buy a Miata,” but in standard English it’s “a way to go.”', 'Grammar Nazi: Than is a comparision. Then is time based.', 'Grammar Nazi: If you’re dying you need help. If you’re dyeing clothes you might get dirty.', 'Grammar Nazi: '];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);
			} else if (cmd == "!grammer" || cmd == "!gramer" || cmd == "!gramar") {		    		//grammer command for idiots
                var textArray = ['Close, but no cigar!', 'Nice going...', 'You moronic fool!', 'Even slurpy squid can spell grammar!', 'Grammar* You idiot!', 'You sir, are not educated!', 'Wake up on the wrong side of the barn?', 'Are you daft?', 'I\'ll slap your mother!']; //’ (apostrophe) //add these: http://public.wsu.edu/~brians/errors/errors.html
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);
			} else if (cmd == "!joke") {		    		//joke command
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
				'I\'m guaranteed to shag the missus up the arse tonight. She\'s dyslexic and thinks it\'s Vaseline Day.']; //’ (apostrophe) //Thanks to various people giving me some awesome jokes on MPP!
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);


				//music theory - I had to use some message.substring due to spaced commands not working.
				//Music theory by Logan aka LoganNZL
				//It's not very optimised and takes up way too much space. I'm not sure hot to make it more compact.
				//chords
				} else if (message.substring(0, 13).toLowerCase() == "!music theory" || cmd == "!mt") { 	//music theory command
                sendChat("Music Theory Index: !chords (list of chords), !scales (list of scales C-G), !scales2 (list of scales Ab-X), !glossary (music terminology) [Unfinished!!]");

				} else if (cmd == "!chords") {	//Chords
				 sendChat("Chords Index: !cmajor, !cminor, !cmaj7, !cmin7, !cminmaj, !cdom7, !cdom7sus4, !cdim, !cdim7, !chalfdim, !caug, !caug7, !caugmaj7, !csus2, !csus4 [Unfinished!!]");

				 } else if (cmd == "!cmajor") {	//C Major
				 sendChat("A Major triad is a chord having a root, a major third, and a perfect fifth.");
				{setTimeout(function() { press("c2"); press("e2"); press("g2") }, 0);}
				{setTimeout(function() { press("c2"); press("e2"); press("g2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("e2")}, 6000);}
				{setTimeout(function() { press("g2")}, 7000);}


				} else if (cmd == "!cdom7") {	//C Dominant seventh
				 sendChat("A dominant seventh chord is a chord composed of a root, major third, perfect fifth, and minor seventh. It can be also viewed as a major triad with an additional minor seventh.");
				{setTimeout(function() { press("c2"); press("e2"); press("g2"); press("as2") }, 0);}
				{setTimeout(function() { press("c2"); press("e2"); press("g2"); press("as2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("e2")}, 6000);}
				{setTimeout(function() { press("g2")}, 7000);}
				{setTimeout(function() { press("as2")}, 8000);}

				} else if (cmd == "!cdom7sus4") {	//C Dominant seventh suspended 4th
				 sendChat("A dominant seventh suspended 4th chord is a chord composed of a root, perfect fourth, perfect fifth, and minor seventh.");
				{setTimeout(function() { press("c2"); press("f2"); press("g2"); press("as2") }, 0);}
				{setTimeout(function() { press("c2"); press("f2"); press("g2"); press("as2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("f2")}, 6000);}
				{setTimeout(function() { press("g2")}, 7000);}
				{setTimeout(function() { press("as2")}, 8000);}

				} else if (cmd == "!cmaj7") {		//C Major seventh
				 sendChat("A major seventh chord is a seventh chord where the \"third\" note is a major third above the root, and the \"seventh\" note is a major seventh above the root (a fifth above the third note).");
				{setTimeout(function() { press("c2"); press("e2"); press("g2"); press("b2") }, 0);}
				{setTimeout(function() { press("c2"); press("e2"); press("g2"); press("b2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("e2")}, 6000);}
				{setTimeout(function() { press("g2")}, 7000);}
				{setTimeout(function() { press("b2")}, 8000);}

				} else if (cmd == "!cminor") {	//C minor
				 sendChat("A minor triad is a chord having a root, a minor third, and a perfect fifth.");
				{setTimeout(function() { press("c2"); press("ds2"); press("g2") }, 0);}
				{setTimeout(function() { press("c2"); press("ds2"); press("g2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("ds2")}, 6000);}
				{setTimeout(function() { press("g2")}, 7000);}

				} else if (cmd == "!cmin7") {		//C minor seventh
				 sendChat("A minor seventh chord is any non-dominant seventh chord where the \"third\" note is a minor third above the root.");
				{setTimeout(function() { press("c2"); press("ds2"); press("g2"); press("as2") }, 0);}
				{setTimeout(function() { press("c2"); press("ds2"); press("g2"); press("as2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("ds2")}, 6000);}
				{setTimeout(function() { press("g2")}, 7000);}
				{setTimeout(function() { press("as2")}, 8000);}

				} else if (cmd == "!cminmaj") {		//C minor Major seventh
				 sendChat("The minor major seventh chord is a diatonic non-dominant seventh chord in the harmonic minor scale. The chord is built on a root, with the intervals of a minor third, a major third above that note and above that a major third");
				{setTimeout(function() { press("c2"); press("ds2"); press("g2"); press("b2") }, 0);}
				{setTimeout(function() { press("c2"); press("ds2"); press("g2"); press("b2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("ds2")}, 6000);}
				{setTimeout(function() { press("g2")}, 7000);}
				{setTimeout(function() { press("b2")}, 8000);}

				} else if (cmd == "!cdim") {	//C diminished
				 sendChat("A diminished triad is a triad consisting of two minor thirds above the root.");
				{setTimeout(function() { press("c2"); press("ds2"); press("fs2") }, 0);}
				{setTimeout(function() { press("c2"); press("ds2"); press("fs2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("ds2")}, 6000);}
				{setTimeout(function() { press("fs2")}, 7000);}

				} else if (cmd == "!cdim7") {	//C diminished seventh
				 sendChat("A diminished seventh is an interval produced by narrowing a minor seventh by a chromatic semitone.");
				{setTimeout(function() { press("c2"); press("ds2"); press("fs2"); press("a2") }, 0);}
				{setTimeout(function() { press("c2"); press("ds2"); press("fs2"); press("a2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("ds2")}, 6000);}
				{setTimeout(function() { press("fs2")}, 7000);}
				{setTimeout(function() { press("a2")}, 8000);}

				} else if (cmd == "!chalfdim") {	//C half diminished
				 sendChat("A half diminished chord is composed by a root note, together with a minor third, a diminished fifth and a minor seventh from root.");
				{setTimeout(function() { press("c2"); press("ds2"); press("fs2"); press("as2") }, 0);}
				{setTimeout(function() { press("c2"); press("ds2"); press("fs2"); press("as2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("ds2")}, 6000);}
				{setTimeout(function() { press("fs2")}, 7000);}
				{setTimeout(function() { press("as2")}, 8000);}


				} else if (cmd == "!caug") {	//C Augmented
				 sendChat("An augmented triad is a triad, or chord, consisting of two major thirds (an augmented fifth).");
				{setTimeout(function() { press("c2"); press("e2"); press("gs2") }, 0);}
				{setTimeout(function() { press("c2"); press("e2"); press("gs2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("e2")}, 6000);}
				{setTimeout(function() { press("gs2")}, 7000);}

				} else if (cmd == "!caug7") {	//C Augmented seventh
				 sendChat("An augmented seventh chord is a dominant seventh chord consisting of an augmented triad with a minor seventh.");
				{setTimeout(function() { press("c2"); press("e2"); press("gs2"); press("as2") }, 0);}
				{setTimeout(function() { press("c2"); press("e2"); press("gs2"); press("as2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("e2")}, 6000);}
				{setTimeout(function() { press("gs2")}, 7000);}
				{setTimeout(function() { press("as2")}, 8000);}

				} else if (cmd == "!caugmaj7") {	//C Augmented major seventh
				 sendChat("An augmented major seventh chord is a nondominant seventh chord and is associated with the augmented scale.");
				{setTimeout(function() { press("c2"); press("e2"); press("gs2"); press("b2") }, 0);}
				{setTimeout(function() { press("c2"); press("e2"); press("gs2"); press("b2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("e2")}, 6000);}
				{setTimeout(function() { press("gs2")}, 7000);}
				{setTimeout(function() { press("b2")}, 8000);}

				} else if (cmd == "!csus2") {	//C suspended second
				 sendChat("A suspended second chord (sus2 chord) is a musical chord in which the (major or minor) third is omitted and replaced with a major second. ");
				{setTimeout(function() { press("c2"); press("d2"); press("g2") }, 0);}
				{setTimeout(function() { press("c2"); press("d2"); press("g2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("d2")}, 6000);}
				{setTimeout(function() { press("g2")}, 7000);}

				} else if (cmd == "!csus4") {	//C suspended second
				 sendChat("A suspended fourth chord (sus4 chord) is a musical chord in which the (major or minor) third is omitted and replaced with a perfect fourth. ");
				{setTimeout(function() { press("c2"); press("f2"); press("g2") }, 0);}
				{setTimeout(function() { press("c2"); press("f2"); press("g2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("f2")}, 6000);}
				{setTimeout(function() { press("g2")}, 7000);}

				} else if (cmd == "!csus2") {	//C suspended second
				 sendChat("A suspended second chord (sus2 chord) is a musical chord in which the (major or minor) third is omitted and replaced with a perfect second. ");
				{setTimeout(function() { press("c2"); press("d2"); press("g2") }, 0);}
				{setTimeout(function() { press("c2"); press("d2"); press("g2") }, 3000);}
				{setTimeout(function() { press("c2")}, 5000);}
				{setTimeout(function() { press("d2")}, 6000);}
				{setTimeout(function() { press("g2")}, 7000);}
				//chords

				//scales
				} else if (cmd == "!scales") {		//Scales
				 sendChat("Scales Index C-G: !scale cmajor, !scale cminor, !scale charminor, !scale cmelminor, !scale csmajor, !scale csminor, !scale csharminor, !scale csmelminor, !scale dmajor, !scale dminor, !scale dharminor, !scale dmelminor, !scale ebmajor, !scale ebminor, !scale ebharminor, !scale ebmelminor, !scale fmajor, !scale fminor, !scale fharminor, !scale fmelminor, !scale fsmajor, !scale fsminor, !scale fsharminor, !scale fsmelminor, !scale gmajor, !scale gminor, !scale gharminor, !scale gmelminor [See bugs? Tell me!]");

				 } else if (cmd == "!scales2") {	//Scales 2
				 sendChat("Scales Index 2 Ab-B: !scale abmajor, !scale abminor, !scale abharminor, !scale abmelminor, !scale amajor, !scale aminor, !scale aharminor, !scale amelminor, !scale bbmajor, !scale bbminor, !scale bbharminor, !scale bbmelminor, !scale bmajor, !scale bminor, !scale bharminor, !scale bmelminor [Tell me if you spot mistakes!]");

				 //C scales
				 } else if (message.substring(0, 13).toLowerCase() == "!scale cmajor") {	//C Major scale
				 sendChat("The C Major scale - it has no flats or sharps - its relative minor is A");
				 sendChat("The C Major PC notes - E R T Y U I O P");
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

				} else if (message.substring(0, 13).toLowerCase() == "!scale cminor") {	//C minor scale
				 sendChat("The C minor scale - it has 3 flats - its relative Major is Eb");
				 sendChat("The C minor PC notes - E R 5 Y U 8 9 P");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale charminor") {	//C harmonic minor scale
				 sendChat("The C harmonic minor scale - it has 2 flats - it has a Major 7th (B)");
				 sendChat("The C harmonic minor PC notes - E R 5 Y U 8 O P");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale cmelminor") {	//C melodic minor scale
				 sendChat("The C melodic minor scale - it has 1 flat ascending and 3 flats descending - it has two patterns ascending and descending.");
				 sendChat("The C melodic minor PC notes - E R 5 Y U I O P 9 8 U Y 5 R E");
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
				 } else if (message.substring(0, 14).toLowerCase() == "!scale csmajor") {	//C# Major scale
				 sendChat("The C# (sharp) Major scale - it has 7 sharps - its relative minor is A#");
				 sendChat("The C# (sharp) Major PC notes - 4 5 Y 7 8 9 P -");
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

				} else if (message.substring(0, 14).toLowerCase() == "!scale csminor") {	//C# minor scale
				 sendChat("The C# (sharp) minor scale - it has 4 sharps - its relative Major is E");
				 sendChat("The C# (sharp) Major PC notes - F G B J K Q . 4");
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

				} else if (message.substring(0, 17).toLowerCase() == "!scale csharminor") {	//C# harmonic minor scale
				 sendChat("The C# (sharp) harmonic minor scale - it has 2 flats - it has a Major 7th (C)");
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

				} else if (message.substring(0, 17).toLowerCase() == "!scale csmelminor") {	//C# melodic minor scale
				 sendChat("The C# (sharp) melodic minor scale - it has 7 sharps ascending and 5 sharps descending - it has two patterns ascending and descending.");
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
				 } else if (message.substring(0, 13).toLowerCase() == "!scale dmajor") {	//D Major scale
				 sendChat("The D Major scale - it has 2 sharps - its relative minor is B");
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

				} else if (message.substring(0, 13).toLowerCase() == "!scale dminor") {	//D minor scale
				 sendChat("The D minor scale - it has 2 sharps - its relative Major is F");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale dharminor") {	//D harmonic minor scale
				 sendChat("The D harmonic minor scale - it has 2 sharps - it has a Major 7th (C#)");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale dmelminor") {	//D melodic minor scale
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
				} else if (message.substring(0, 14).toLowerCase() == "!scale ebmajor") {	//Eb Major scale
				 sendChat("The Eb (flat) Major scale - it has 3 flats - its relative minor is C");
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

				} else if (message.substring(0, 14).toLowerCase() == "!scale ebminor") {	//Eb minor scale
				 sendChat("The Eb (flat) minor scale - it has 6 flats - its relative Major is Gb");
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

				} else if (message.substring(0, 17).toLowerCase() == "!scale ebharminor") {	//Eb harmonic minor scale
				 sendChat("The Eb (flat) harmonic minor scale - it has 5 flats - it has a Major 7th (D)");
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

				} else if (message.substring(0, 17).toLowerCase() == "!scale ebmelminor") {	//Eb melodic minor scale
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
				} else if (message.substring(0, 13).toLowerCase() == "!scale emajor") {	//E Major scale
				 sendChat("The E Major scale - it has 4 sharps - its relative minor is C#");
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

				} else if (message.substring(0, 13).toLowerCase() == "!scale eminor") {	//E minor scale
				 sendChat("The E minor scale - it has 1 sharp - its relative Major is G");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale eharminor") {	//E harmonic minor scale
				 sendChat("The E harmonic minor scale - it has 2 sharps - it has a Major 7th (D#)");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale emelminor") {	//E melodic minor scale
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
				} else if (message.substring(0, 13).toLowerCase() == "!scale fmajor") {	//F Major scale
				 sendChat("The F Major scale - it has 1 flat - its relative minor is D");
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

				} else if (message.substring(0, 13).toLowerCase() == "!scale fminor") {	//F minor scale
				 sendChat("The F minor scale - it has 4 flats - its relative Major is Ab");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale fharminor") {	//F harmonic minor scale
				 sendChat("The F harmonic minor scale - it has 3 flats - it has a Major 7th (E)");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale fmelminor") {	//F melodic minor scale
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
				} else if (message.substring(0, 14).toLowerCase() == "!scale fsmajor") {	//F# Major scale
				 sendChat("The F# (sharp) Major scale - it has 6 sharps - its relative minor is D#");
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

				} else if (message.substring(0, 14).toLowerCase() == "!scale fsminor") {	//F# minor scale
				 sendChat("The F# (sharp) minor scale - it has 3 sharps - its relative Major is A");
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

				} else if (message.substring(0, 17).toLowerCase() == "!scale fsharminor") {	//F# harmonic minor scale
				 sendChat("The F# (sharp) harmonic minor scale - it has 4 sharps - it has a Major 7th (E#)");
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

				} else if (message.substring(0, 17).toLowerCase() == "!scale fsmelminor") {	//F# melodic minor scale
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
				} else if (message.substring(0, 13).toLowerCase() == "!scale gmajor") {	//G Major scale
				 sendChat("The G Major scale - it has 1 sharp - its relative minor is E");
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

				} else if (message.substring(0, 14).toLowerCase() == "!scale gminor") {	//G minor scale
				 sendChat("The G minor scale - it has 1 sharps - its relative Major is Bb");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale gharminor") {	//G harmonic minor scale
				 sendChat("The G harmonic minor scale - it has 3 sharps - it has a Major 7th (F#)");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale gmelminor") {	//G melodic minor scale
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
				} else if (message.substring(0, 14).toLowerCase() == "!scale abmajor") {	//Ab Major scale
				 sendChat("The Ab (flat) Major scale - it has 4 flats - its relative minor is F");
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

				} else if (message.substring(0, 15).toLowerCase() == "!scale abminor") {	//Ab minor scale
				 sendChat("The Ab (flat) minor scale - it has 7 flats - its relative Major is Cb Major or enharmonically, B major");
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

				} else if (message.substring(0, 17).toLowerCase() == "!scale abharminor") {	//Ab harmonic minor scale
				 sendChat("The Ab (flat) harmonic minor scale - it has 4 flats - it has a Major 7th (G)");
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

				} else if (message.substring(0, 17).toLowerCase() == "!scale abmelminor") {	//Ab melodic minor scale
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
				} else if (message.substring(0, 13).toLowerCase() == "!scale amajor") {	//A Major scale
				 sendChat("The A Major scale - it has 3 sharps - its relative minor is F#");
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

				} else if (message.substring(0, 14).toLowerCase() == "!scale aminor") {	//A minor scale
				 sendChat("The A minor scale - it has no sharps or flats - its relative Major is C Major");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale aharminor") {	//A harmonic minor scale
				 sendChat("The A harmonic minor scale - it has 1 flat - it has a Major 7th (G#)");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale amelminor") {	//A melodic minor scale
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
				} else if (message.substring(0, 14).toLowerCase() == "!scale bbmajor") {	//Bb Major scale
				 sendChat("The Bb (flat) Major scale - it has 2 flats - its relative minor is G");
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

				} else if (message.substring(0, 15).toLowerCase() == "!scale bbminor") {	//Bb minor scale
				 sendChat("The Bb (flat) minor scale - it 6 flats - its relative Major is Db Major");
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

				} else if (message.substring(0, 17).toLowerCase() == "!scale bbharminor") {	//Bb harmonic minor scale
				 sendChat("The Bb (flat) harmonic minor scale - it has 5 flats - it has a Major 7th (A)");
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

				} else if (message.substring(0, 17).toLowerCase() == "!scale bbmelminor") {	//Bb melodic minor scale
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
				} else if (message.substring(0, 13).toLowerCase() == "!scale bmajor") {	//B Major scale
				 sendChat("The B Major scale - it has 5 sharps - its relative minor is G#");
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

				} else if (message.substring(0, 14).toLowerCase() == "!scale bminor") {	//B minor scale
				 sendChat("The B minor scale - it 2 sharps - its relative Major is D Major");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale bharminor") {	//B harmonic minor scale
				 sendChat("The B harmonic minor scale - it has 3 sharps - it has a Major 7th (A#)");
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

				} else if (message.substring(0, 16).toLowerCase() == "!scale bmelminor") {	//B melodic minor scale
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
				} else if (cmd == "!glossary") {	//Glossary
				 sendChat("Music theory glossary: !arpeggio, !glissando [Unfinished!!]");

				 //Arpeggio
				 } else if (cmd == "!arpeggio") {	//Arpeggio
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
				 } else if (cmd == "!glissando") {	//Glissando
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

				//unit conversions start
				} else if (cmd == "!unitc") {				//art command	//"Large text art (crown needed): bow (crown not required)", "fishies (crown required)."
                sendChat("Unit Conversions: !ctof (celsius to fahrenheit), !ftoc (fahrenheit to celsius), !cmtoinch (Centimetre to Inch), !inchtocm (Inch to Centimetre), !cmtofeet (Centimetre to Feet), !feettocm (Feet to Centimetre), !kmtomile (Kilometre to Mile), !miletokm (Mile to Kilometre)");

            } else if (cmd == "!ctof") {					//Celsius to Fahrenheit
                var fTemp = message.substring(6).trim() * (9 / 5) + 32;
                var outcome = fTemp.toString();
                if (message.substring(6).trim() == "" || isNaN(fTemp)) {
                    sendChat("Usage: !ctof <unit> eg: 32");
					} else {
						sendChat(message.substring(6).trim() + " Celsius equals: " + outcome.substring(0, 6) + " in Fahrenheit.");	//add!
				}
            } else if (cmd == "!ftoc") {					//Fahrenheit to Celsius
                var cTemp = (message.substring(6).trim() - 32) * (5 / 9);
                var outcome = cTemp.toString();
                if (message.substring(6).trim() == "" || isNaN(cTemp)) {
                    sendChat("Usage: !ftoc <unit> eg: 74");
					} else {
						sendChat(message.substring(6).trim() + " Fahrenheit equals: " + outcome.substring(0, 6) + " in  Celsius.");
                }
			} else if (cmd == "!cmtoinch") {				//Centimetres to Inches
                var cmTemp = message.substring(10).trim() * 0.39370;
                var outcome = cmTemp.toString();
                if (message.substring(10).trim() == "" || isNaN(cmTemp)) {
                    sendChat("Usage: !cmtoinch <unit> eg: 30");
					} else {
						sendChat(message.substring(10).trim() + " Centimetres equals: " + outcome.substring(0, 6) + " inches.");
                }
			} else if (cmd == "!inchtocm") {				//Inches to Centimetres
                var cmTemp = message.substring(10).trim() / 0.39370;
                var outcome = cmTemp.toString();
                if (message.substring(10).trim() == "" || isNaN(cmTemp)) {
                    sendChat("Usage: !inches <unit> eg: 6");
					} else {
						sendChat(message.substring(10).trim() + " Inches equals: " + outcome.substring(0, 6) + " Centimetres.");
                }
			} else if (cmd == "!cmtofeet") {				//Centimetres to Feet
                var cmTemp = message.substring(10).trim() * 0.032808;
                var outcome = cmTemp.toString();
                if (message.substring(10).trim() == "" || isNaN(cmTemp)) {
                    sendChat("Usage: !cmtofeet <unit> eg: 5");
					} else {
						sendChat(message.substring(10).trim() + " Centimetres equals: " + outcome.substring(0, 6) + " feet.");
                }
			} else if (cmd == "!feettocm") {				//Centimetres to Inches
                var cmTemp = message.substring(10).trim() / 0.032808;
                var outcome = cmTemp.toString();
                if (message.substring(10).trim() == "" || isNaN(cmTemp)) {
                    sendChat("Usage: !feettocm <unit> eg: 5");
					} else {
						sendChat(message.substring(10).trim() + " Feet equals: " + outcome.substring(0, 6) + " Centimetres.");
                }
			} else if (cmd == "!kmtomile") {				//Centimetres to Inches
                var cmTemp = message.substring(11).trim() / 0.62137;
                var outcome = cmTemp.toString();
                if (message.substring(11).trim() == "" || isNaN(cmTemp)) {
                    sendChat("Usage: !kmtomile <unit> eg: 50");
					} else {
						sendChat(message.substring(11).trim() + " Kilometres equals: " + outcome.substring(0, 5) + " Miles.");
                }
			} else if (cmd == "!miletokm") {				//Centimetres to Inches
                var cmTemp = message.substring(11).trim() * 0.62137;
                var outcome = cmTemp.toString();
                if (message.substring(11).trim() == "" || isNaN(cmTemp)) {
                    sendChat("Usage: !miletokm <unit> eg: 80");
					} else {
						sendChat(message.substring(11).trim() + " Miles equals: " + outcome.substring(0, 5) + " Kilometres.");
                }
				//unit conversions end
            } else if (cmd == "!stab") {					//stab command
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    sendChat("Usage: !stab Name_Here.");
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    sendChat("You cannot stab yourself... unless you wanted to cut yourself.");
                } else if (target_participant) {
                    sendChat(name + " stabbed " + target_participant.name +", " + target_participant.name + " lays on their side... then stabby stab stab stab!");
                } else {
                    sendChat("Could not find anyone to stab by the name of " + msg.a.substring(5).trim() + ".");
                }
            } else if (cmd == "!highfive") {				//highfive command
                var target_name_lowercase = msg.a.substring(10).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(10).trim() == "") {
                    sendChat("Usage: !highfive Name_Here.");
                } else if (message.substring(10).trim().toLowerCase() == name.toLowerCase()) {
                    sendChat(target_participant.name + " lonelily claps.. alone");
                } else if (target_participant) {
                    sendChat(name + " highfived " + target_participant.name + ".");
                } else {
                    sendChat("Could not find anyone to highfive by the name of " + msg.a.substring(10).trim()+ ".");
                }

            } else if (cmd == "!kiss") {					//kiss command
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    sendChat("Usage: !kiss Name_Here.");
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    sendChat("You cannot kiss yourself, lonely much...");
                } else if (target_participant) {
					var kissArray = ['bottom', 'top'];
					var lip = Math.floor(Math.random() * kissArray.length);
                    sendChat(name + " passionately kisses " + target_participant.name + "'s " + kissArray[lip] + " lip. " + target_participant.name + " blushes shyly.");
                } else {
                    sendChat("Could not find anyone to kiss by the name of " + msg.a.substring(5).trim() + ".");
                }



            } else if (cmd == "!slap") {					//slap command
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    sendChat("Usage: !slap Name_Here");
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    sendChat("You cannot slap yourself, that would be weird.");
                } else if (target_participant) {
                    sendChat(name + " Slapped " + target_participant.name);
                } else {
                    sendChat("Could not find anyone to slap by the name of " + msg.a.substring(5).trim());
                }

            } else if (cmd == "!cuddle") {					//cuddle command
                var target_name_lowercase = msg.a.substring(7).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(7).trim() == "") {
                    sendChat("Usage: !cuddle Name_Here.");
                } else if (message.substring(7).trim().toLowerCase() == name.toLowerCase()) {
                    sendChat("You cannot cuddle yourself, you lonely fuck.");
                } else if (target_participant) {
                    sendChat(name + " tightly cuddles " + target_participant.name + ".");
                } else {
                    sendChat("Could not find anyone to cuddle by the name of " + msg.a.substring(7).trim() + ".");
                }

            } else if (cmd == "!hug") {						//hug command
                var target_name_lowercase = msg.a.substring(4).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    sendChat("Usage: !hug Name_Here.");
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    sendChat("You cannot hug yourself, hug a cuddly anon.");
                } else if (target_participant) {
				var huggieArray = [' tightly squeezes ', ' sprints up and hugs ', ' shyly hugs ', ' gently caresses ', ' tounge hugs '];
				var logiesHugs = Math.floor(Math.random() * huggieArray.length);
                    sendChat(name + huggieArray[logiesHugs] + target_participant.name + ".");
                } else {
                    sendChat("Could not find anyone to hug by the name of " + msg.a.substring(5).trim() + ".");
                }
			} else if (cmd == "!rape") {					//rape command
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(6).trim() == "") {
                    sendChat("Usage: !rape Name_Here.");
                } else if (message.substring(6).trim().toLowerCase() == name.toLowerCase()) {
                    sendChat("You cannot rape yourself, rape the Anonymous people.");
                } else if (target_participant) {
                    sendChat(name + " raped " + target_participant.name + " ᶘ ᵒᴥᵒᶅ");
                } else {
                    sendChat("Could not find anyone to rape by the name of " + msg.a.substring(5).trim() + ".");
                }

            } else if (cmd == "!gift") {						//gift command
                var giftArray = ['a cute kitten!', 'a cute puppy!', 'a potato!', 'a pikachu!', 'a brand new Xbox One!', 'a brand new PS4!', '1 million cows!', 'a slice of bacon!', 'a boating license!', 'a bunch of money!', 'some cake!', 'a box inside of a... BOX!', 'a new phone!', 'a new piano!', 'some chicken nuggets!', 'a brand new Wii U!', 'an evil gerbil!', 'a captains ship!', 'some sfoof! (Semolina Turmeric Cake)', 'some pizza!', 'a new laptop!', 'a piece of cotton', 'a spoon', 'a dribbling cat']; //add more... like 100 :D

                var randomNumber = Math.floor(Math.random() * giftArray.length);
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    sendChat("Usage: !gift Name_Here.");
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    sendChat("You cannot gift yourself, that would be greedy.");
                } else if (target_participant) {
                    sendChat(name + " gave " + target_participant.name + " " + giftArray[randomNumber]);	//could bug it
                } else {
                    sendChat("Could not find anyone to gift by the name of " + msg.a.substring(5).trim() + ".");
                }
			} else if (cmd == "!attack") {						//attack command
                var attackArray = ['fondue stick', 'piece of bread', 'rubber chicken', 'piano', 'turtle shell', 'lamp', 'Kkitting needle', 'brake cable', 'totally non-harmful piece of string', 'rake', 'shovel', 'birds nest', 'bit of help from gravity', 'sharp stick', 'stick covered in poop', 'can of softdrink (isn’t too soft)', 'disembodied arm', 'candle stick', 'wet iguana', 'duck', 'spoon', 'boat oar', 'large rock', 'sharp triangle', 'trumpet', 'toy car', 'buzz-saw', 'computer keyboard', 'piece of Ed and Megan’s love', 'scratched CD', 'shoe lace', 'assault rifle', 'Mini-Uzi', 'piece of paper', 'very angry wet cat', 'slug', 'cylinder of Pringles', 'hairbrush'];

                var randomNumber = Math.floor(Math.random() * attackArray.length);
                var target_name_lowercase = msg.a.substring(7).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(7).trim() == "") {
                    sendChat("Usage: !attack Name_Here.");
                } else if (message.substring(7).trim().toLowerCase() == name.toLowerCase()) {
                    sendChat("You cannot attack yourself! Attack Anonymous people.");
                } else if (target_participant) {
                    sendChat(name + " attacked " + target_participant.name + " with a " + attackArray[randomNumber] + ".");
                } else {
                    sendChat("Could not find anyone to attack by the name of " + msg.a.substring(7).trim() + ".");
                }

            } else if (cmd == "!colour" || cmd == "!color") {	//colour command
                var target_name_lowercase = msg.a.substring(7).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (target_participant) {
                    sendChat(target_participant.name + "'s colour is: " + new Color(target_participant.color).getName() + " (" + target_participant.color + ")");
                } else {
                    sendChat("Your colour is: " + new Color(msg.p.color).getName() + " (" + msg.p.color + ") You can also type !colour Name_Here.");
                }
            } else if (cmd == "!unicode") {				//unicode command
                sendChat("Put some of these in your name: ᴥ◕☀☁☂☃☄★☆☇☈☉☊☋☌☍ﾂ¢￠☍☎☏☐☑☒☓☔☕☖☗☘☙☚☛☜☝☞☟☠␀☡☢☣☤☥☦☧☨☩☪☫☬☭☮☯─━│┃┎┒┝┫┳┻╋╭╮╯╰╱╲╳╴╵╶╷╸╹╺╻╼╽╾╿☰☱☲☳☴☵☶☷░▒▓▔▁▂▃▄▅▆▇█▉▊▋▌▐ ▍▎▏◘☸☹☺☻☼☽☾☿ ♀♁♂♃♄♅♆♇♈♉♊♋♌♍♎♏♐♑♒♓♔♕♖♗♘♙♚♛♜♝♞♟♠♢♣♤♥♡♦♧♨♩♪♫♬♭♮♯ ๖ۣۜ  ∥～∼˜≀π∏ℍℂℕℙℚℝℤℬℰℱℋℐℒℳ℘ℛℓℴℯɨℊℎ√∑∮‖⌊⌉⋕⊤✀✁✂✃✄✆✇✈✉✌✍✎✏✐✑✒✓✔✕✖✗✘✙✚✛✜✝✞✟✠✡✢✣✤✥✦✧✩✪✫✬✭✮✯✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃❄❅❆❇❈❉❊❋❍❏❐❑❒❖❡❤❥❦❧❶❷❸❹❺❻❼❽❾❿➀➁➂➃➄➅➆➇➈➉➔➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧➨➩➪➫➬➭➮➯➰➱➲➳➴➵➶➷➸➹➺➻➼➽➾∧⋉⋊⋈ℵ");
            } else if (cmd == "!applaud" || cmd == "!clap") {	//clap command
                sendChat(name + " applauds.");
			} else if (cmd == "!slowclap") {			//slow clap command
                sendChat(name + " claps slowly in approval");

            } else if (cmd == "!quote") {				//quote command
                var textArray = ['Life is like riding a bicycle. To keep your balance, you must keep moving.', 'Excuses are only attempts to explain failure.', 'Sometimes people are beautiful. Not in looks. Not in what they say. Just in what they are.', 'If you don’t know where you are going, any road will take you there', 'It is better to get hurt by the truth than comforted with a lie.', 'Where there is love there is life.', 'Of all sad words of tongue or pen, the saddest are these; It might have been.', '"It’s impossible" said Pride. "It’s risky" said Experience. "It’s pointless" said Reason. Give it a try... whispered The Heart', 'Someday everything will make perfect sense. So for now, laugh at the confusion, smile through the tears, and keep reminding yourself everything happens for a reason', 'The secret to happiness is not to do what makes you happy, it’s to be happy doing what youre already doing.', 'It is sad when someone you know becomes someone you knew.', 'The best and most beautiful things in the world cannot be seen or even touched / they must be felt with the heart.', 'I believe that if you haven\'t leared about sadness, you cannot appreciate happiness.', 'Crying is cleansing. There is a reason for tears, happiness or sadness.', 'It is during our darkest moments that we must focus to see the light.', 'There are two things to keep in mind when you are an old man: always take advantage of a hard-on, and never trust a fart.', 'Don’t wish what you can do!', 'People say nothing rhymes with Orange, this is false. Nothing and Orange do not rhyme. (English word ordering and syntax is funny :D', 'If you try to fail, but succed, which one have you done?', 'I do believe that if you haven’t learnt about sadness, you cannot appreciate happiness.'];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);
			} else if (message.substring(0, 12).toLowerCase() == "!funny quote" || cmd == "!fq") {	//funny quote command
                var textArray = ['Someone got hit by a can on the head. They were lucky, as it was a softdrink.', 'Welcome the weirdness, it’s yours, use it', 'I wanna make a jigsaw puzzle thats 40,000 pieces. And when you finish it, it says go outside.', 'I havent spoken to my wife in years. I didnt want to interrupt her.', 'Always remember that you are absolutely unique. Just like everyone else.', 'All right everyone, line up alphabetically according to your height.', 'A lot of people are afraid of heights. Not me, Im afraid of widths.', 'My fake plants died because I did not pretend to water them.', 'My grandmother started walking five miles a day when she was sixty. Shes ninety-seven now, and we don’t know where the hell she is.', 'A day without sunshine is like, you know, night.', 'A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man', 'I’m super lazy today!!! Which is like normal lazy but I’m also wearing a cape...', 'Lasagna is basically spaghetti flavored cake.', 'My wife told me the other day that I don’t take her to expensive places any more, so I took her to the gas station.', 'Chuck Norris can blow bubbles with chewing tobacco', 'I’m going to become rich and famous after I invent a device that allows you to stab people in the face over the internet.']; //’
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);

            } else if (cmd == "!list") {				//list command
                var list = "Connected users";
                for (var id in gClient.ppl) {
                    if (gClient.ppl.hasOwnProperty(id)) {
                        list += ", " + gClient.ppl[id].name;
                    }
                }
                list = list.substr(0);
                sendChat(list);
             return;

            } else if (cmd == "!facepalm") {			//facepalm command
                sendChat(" facepalmed.");
            } else if (cmd == "!musicsheets" || cmd == "!ms") {		//musicsheets command
			var songArray = ['Logan’s small march: xbm. cbm/ xvj. gj. gj, xbm xbm. cb,/ n,ry k.r wtbk etb,',
					'Dramatic song: C E 5 E Y E Y U | S E 5 E 8 U Y U | A E 5 E Y E Y U | (Ctrl M) E 5 E 8 U Y 5',
					'Part of Turkich March - [ - o i o i 8 7 i 8 7 y 7 8 y 4 5 t 4 7 y 7 8 i 8 i o - p - [ -',
					'C. P. E. Bach Solfeggietto: g c m e 5 r e w m w r u y 5 r 5 e 5 u p = [ p [ p o i u y 5 r',
					'Gravity Falls: N V Z V N V Z V N C Z C N C Z C B F Z F B F Z F B F Z F B F Z ',
					'My Immortal: z4 tb qi t - t i t f4 tk 48 t - z4 tb qi t o t i t f4 tk 48 t',
					'Song of Stroms: v r yi yi b t uo n y ip ip b t uo',
					'C minor: c v g n m k l /',
					'Skrillex - Scary Monsters: m u y u g9 u [ p 9 y 2 q y 5 nr e 2 m 2 m 2 r u r 2 m y 2 m n',
					'B Major: x f g b j k l .',
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

            } else if (cmd == "!suicide") {					//suicide command
                sendChat(name + " ate a cactus.");

			} else if (cmd == "!kill") {					//kill command
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                for (var id in gClient.ppl) {
                    if (!gClient.ppl.hasOwnProperty(id)) continue;
                    var part = gClient.ppl[id];
                    if (part.name.toLowerCase() === target_name_lowercase) {
                        target_participant = part;
                        break;
                    }
                }
                if (message.substring(5).trim() == "") {
                    sendChat("Usage: !kill Name_Here.");
                } else if (message.substring(5).trim().toLowerCase() == name.toLowerCase()) {
                    sendChat(name + " drives a massive sword through their rib cage splitting them in half slowly.");
                } else if (target_participant) {
                    sendChat(" killed " + target_participant.name + ".");
                } else {
                    sendChat("Could not find anyone to kill by the name of " + msg.a.substring(5).trim() + ".");
                }
				//text art
				} else if (cmd == "!art") { //art command
                sendChat("Small text art (crown not needed): !bunny (3 lines), !bunny2 (3 lines), !bunny3 (3 lines), !bunny4 (3 lines), !hamster (3 lines), !hamster2 (3 lines), Table flip (3 lines). Large text art (crown needed) !fishies (9 lines).");


				} else if (cmd == "!hamster2") { 			//hamster 2 art command

                setTimeout(function() { sendChat("( ) ( )" ); }, 0);
				setTimeout(function() { sendChat("(>•.•<)" ); }, 0);
				setTimeout(function() { sendChat('(") (")' ); }, 0);

				} else if (cmd == "!hamster") { 			//hamster art command

                setTimeout(function() { sendChat("( )_( )" ); }, 0);
				setTimeout(function() { sendChat("(='.'=)" ); }, 0);
				setTimeout(function() { sendChat('(")_(")' ); }, 0);

				} else if (cmd == "!bunny4") {				//bunny 4 art command

				setTimeout(function() { sendChat("(\\(\\" ); }, 0);
				setTimeout(function() { sendChat("(=\".\")" ); }, 0);
				setTimeout(function() { sendChat('("")("")' ); }, 0);

				} else if (cmd == "!bunny3") { 				//bunny 3 art command

                setTimeout(function() { sendChat("(\\_(\\" ); }, 0);
				setTimeout(function() { sendChat("(˚_˚)" ); }, 0);
				setTimeout(function() { sendChat("('')('')" ); }, 0);

				} else if (cmd == "!bunny2") { 				//bunny 2 art command

                setTimeout(function() { sendChat("/)_/)" ); }, 0);
				setTimeout(function() { sendChat("(0.0)" ); }, 0);
				setTimeout(function() { sendChat("('')('')" ); }, 0);

				} else if (cmd == "!bunny") { 				//bunny art command

                setTimeout(function() { sendChat("(\\_/)" ); }, 0);
				setTimeout(function() { sendChat("(o.o)" ); }, 0);
				setTimeout(function() { sendChat("('')('')" ); }, 0);

				} else if (cmd == "!table") { 				//table art command

                setTimeout(function() { sendChat("(╮°-°)╮┳━━┳" ); }, 0);
				setTimeout(function() { sendChat("( ╯°□°)╯ ┻━━┻" ); }, 0);
				setTimeout(function() { sendChat("┬──┬ ノ( ゜-゜ノ)" ); }, 0);
				//text art

            } else if (cmd == "!face") {					//face command
                var textArray = ['╥﹏╥', '(◕ᴥ◕し)', 'ʕ•ᴥ•ʔ', '(◡‿◡✿)', 'ヽ༼ ಠ益ಠ ༽ﾉ', '＾‿＾', 'ᶘ ᵒᴥᵒᶅ', '๏̯͡๏', '^ㅂ^', ' ಠ_ರೃ', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '◕◡◕', 'ಠ▃ಠ', 'ಠ╭╮ಠ', 'ಠ⌣ಠ', 'ಠ◡ಠ', 'ლ(ಠ益ಠლ)', 'ლ(◉◞౪◟◉‵ლ)', '⊙ω⊙', '⊙▂⊙', '╯‵Д′)╯彡┻━┻', '◕ω◕', '⌒▽⌒', '♥◡♥', '｡◕‿‿◕｡', '｡◕ ‿ ◕｡', '(´◉◞౪◟◉)', 'Ծ‸ Ծ', '(ᵔᴥᵔ)', '• ε •', '(⌐■_■)', '(┛◉Д◉)┛┻━┻', '(╯°□°）╯︵ ┻━┻ ', '◕ ^ ◕', '(☞ﾟ ∀ﾟ )☞', '(づ｡◕‿‿◕｡)づ', '(ノಠ益ಠ)ノ彡┻━┻', '；一_一', '\(◕ ◡ ◕\)', '°-°', '¶_¶', '( ͡° ͜ʖ ͡°)', '|)^_^(|'];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                sendChat(textArray[randomNumber]);

            } else if (cmd == "!rename") {	//rename command
                if (opped) {
                    gClient.sendArray([{
                        "m": "userset",
                        "set": {
                        "name": msg.a.substring(7).trim()
                        }
                    }]);

					selfName = msg.a.substring(7).trim();

                } else {
                    sendChat(noAccess);
                }

            } else if (cmd == "!welcome") {			//welcome command
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
			} else if (cmd == "!tune") {			//tune command
           if (opped) {
                if (tuneTemp) {
                    tuneTemp = false;
                    sendChat("Welcome tune disabled.")
                } else {
                    tuneTemp = true;
                    sendChat("Welcome tune enabled.")
                }
            } else {
				sendChat(noAccess);
			}

            } else if (cmd == "!ban") {						//ban command
                var target_name_lowercase = msg.a.substring(5).trim().toLowerCase();
                var target_participant = undefined;
                if (opped) {
                    for (var id in gClient.ppl) {
                        if (!gClient.ppl.hasOwnProperty(id)) continue;
                        var part = gClient.ppl[id];
                        if (part.name.toLowerCase() === target_name_lowercase) {
                            target_participant = part;
                            break;
                        }
                    }
                    if (target_participant) {
                        if (target_participant._id == "741664af066c728ae65e6dae") {			//Logan
                            sendChat("Banning " + target_participant.name.substring(0, 4).trim() + "... wait.");
                        } else if (target_participant._id == "4e28d8736f8a464ada652896") {	//Yoshify.
                            sendChat("You cannot ban " + selfName + "'s friend " + target_participant.name + ".");
						} else if (target_participant._id == "d9e6170fd899f2a94adea761") {	//StarsPiano
                            sendChat("You cannot ban " + selfName + "'s friend " + target_participant.name + ".");
                        } else {
                            banned.push(target_participant._id);
								sendChat(name + " banned " + target_participant.name + ".");
                        }
                    } else {
                        sendChat("Could not find anyone to ban by the name of " + msg.a.substring(5).trim() + ".");
                    }
                } else {
                    sendChat(noAccess);
                }

            } else if (cmd == "!unban") {					//unban command
                var target_name_lowercase = msg.a.substring(7).trim().toLowerCase();
                var target_participant = undefined;
                if (opped) {
                    for (var id in gClient.ppl) {
                        if (!gClient.ppl.hasOwnProperty(id)) continue;
                        var part = gClient.ppl[id];
                        if (part.name.toLowerCase() === target_name_lowercase) {
                            target_participant = part;
                            break;
                        }
                    }
                    if (target_participant) {
                        while (banned.indexOf(target_participant._id) !== -1) {
                            banned.splice(banned.indexOf(target_participant._id), 1);
							sendChat(name + " unbanned " + target_participant.name + ".");
                        }
                        while (banned.indexOf(target_participant._id) !== -1) {
                            delete banned[banned.indexOf(target_participant._id)];
                        }
                    } else {
                        sendChat("Could not find anyone to unban by the name of " + msg.a.substring(7).trim() + ".");
                    }
                } else {
                    sendChat(noAccess);
                }

				} else if (cmd == "!forgive") {	//funny quote command
				if (mastered) {
					banned = [];
						sendChat(name + " forgave and everyone's unbanned.");
					} else {
						sendChat(noAccess);
					}
            } else if (cmd == "!op") {				//op command
                var target_name_lowercase = msg.a.substring(3).trim().toLowerCase();
                var target_participant = undefined;
                if (opped) {
                    for (var id in gClient.ppl) {
                        if (!gClient.ppl.hasOwnProperty(id)) continue;
                        var part = gClient.ppl[id];
                        if (part.name.toLowerCase() === target_name_lowercase) {
                            target_participant = part;
                            break;
                        }
                    }
                    if (target_participant) {
                        sendChat("Opped " + target_participant.name + ".");
                        ops.push(target_participant._id);

                    } else {
                        sendChat("Could not find anyone to op by the name of " + msg.a.substring(4).trim() + ".");
                    }
                } else {
                    sendChat(noAccess);
                }

            } else if (cmd == "!deop") {							//deop command
                var target_name_lowercase = msg.a.substring(6).trim().toLowerCase();
                var target_participant = undefined;
                if (opped) {
                    for (var id in gClient.ppl) {
                        if (!gClient.ppl.hasOwnProperty(id)) continue;
                        var part = gClient.ppl[id];
                        if (part.name.toLowerCase() === target_name_lowercase) {
                            target_participant = part;
                            break;
                        }
                    }
                    if (target_participant) {
                        if (target_participant._id == "741664af066c728ae65e6dae") {			//Logan
                            sendChat("You cannot deop " + target_participant.name + ".");
						} else if (target_participant._id == "4e28d8736f8a464ada652896") {	//Yoshify.
                            sendChat("You cannot deop " + selfName + "'s friend " + target_participant.name + ".");
						} else if (target_participant._id == "d9e6170fd899f2a94adea761") {	//StarsPiano
                            sendChat("You cannot deop " + selfName + "'s friend " + target_participant.name + ".");
                        } else {
                            while (ops.indexOf(target_participant._id) !== -1) {
                                ops.splice(banned.indexOf(target_participant._id), 1);
                            }

                            while (ops.indexOf(target_participant._id) !== -1) {
                                delete ops[ops.indexOf(target_participant._id)];
                            }
                        }
                    } else {
                        sendChat("Could not find anyone to deop by the name of " + msg.a.substring(6).trim() + ".");
                    }
                } else {
                    sendChat(noAccess);
                }
           } else if (message.substring(0, 1) == "!") {		//alternative error messages
                if (message.substring(2).trim() == "") {

                } else {
				//sendChat("Invalid command. Type !help for a list of commands you have access to.");
             }
		  }
        }
    });

	//Lchat bot end

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
    else name = "The colour of " + name;	//Lhehe
    return name;
};

Color.map = {};

Color.addToMap = function (hexa, name) {
    Color.map[name] = new Color(hexa);
};

Color.addToMap("#7CB9E8", "Aero");
Color.addToMap("#C9FFE5", "Aero blue");
Color.addToMap("#B284BE", "African purple");
Color.addToMap("#5D8AA8", "Air Force blue (RAF)");
Color.addToMap("#00308F", "Air Force blue (USAF)");
Color.addToMap("#72A0C1", "Air superiority blue");
Color.addToMap("#AF002A", "Alabama Crimson");
Color.addToMap("#F0F8FF", "Alice blue");
Color.addToMap("#E32636", "Alizarin crimson");
Color.addToMap("#C46210", "Alloy orange");
Color.addToMap("#EFDECD", "Almond");
Color.addToMap("#E52B50", "Amaranth");
Color.addToMap("#F19CBB", "Amaranth pink");
Color.addToMap("#AB274F", "Dark amaranth");
Color.addToMap("#3B7A57", "Amazon");
Color.addToMap("#FF7E00", "Amber");
Color.addToMap("#FF033E", "American rose");
Color.addToMap("#9966CC", "Amethyst");
Color.addToMap("#A4C639", "Android green");
Color.addToMap("#F2F3F4", "Anti-flash white");
Color.addToMap("#CD9575", "Antique brass");
Color.addToMap("#665D1E", "Antique bronze");
Color.addToMap("#915C83", "Antique fuchsia");
Color.addToMap("#841B2D", "Antique ruby");
Color.addToMap("#FAEBD7", "Antique white");
Color.addToMap("#8DB600", "Apple green");
Color.addToMap("#FBCEB1", "Apricot");
Color.addToMap("#00FFFF", "Aqua");
Color.addToMap("#7FFFD4", "Aquamarine");
Color.addToMap("#4B5320", "Army green");
Color.addToMap("#3B444B", "Arsenic");
Color.addToMap("#8F9779", "Artichoke");
Color.addToMap("#B2BEB5", "Ash grey");
Color.addToMap("#87A96B", "Asparagus");
Color.addToMap("#FDEE00", "Aureolin");
Color.addToMap("#6E7F80", "AuroMetalSaurus");
Color.addToMap("#568203", "Avocado");
Color.addToMap("#007FFF", "Azure");
Color.addToMap("#F0FFFF", "Azure mist/web");
Color.addToMap("#89CFF0", "Baby blue");
Color.addToMap("#A1CAF1", "Baby blue eyes");
Color.addToMap("#FEFEFA", "Baby powder");
Color.addToMap("#FF91AF", "Baker-Miller pink");
Color.addToMap("#21ABCD", "Ball blue");
Color.addToMap("#FAE7B5", "Banana Mania");
Color.addToMap("#FFE135", "Banana yellow");
Color.addToMap("#E0218A", "Barbie pink");
Color.addToMap("#7C0A02", "Barn red");
Color.addToMap("#848482", "Battleship grey");
Color.addToMap("#98777B", "Bazaar");
Color.addToMap("#9F8170", "Beaver");
Color.addToMap("#F5F5DC", "Beige");
Color.addToMap("#2E5894", "B'dazzled blue");
Color.addToMap("#9C2542", "Big dip o’ruby");
Color.addToMap("#FFE4C4", "Bisque");
Color.addToMap("#3D2B1F", "Bistre");
Color.addToMap("#967117", "Bistre brown");
Color.addToMap("#CAE00D", "Bitter lemon");
Color.addToMap("#648C11", "Bitter lime");
Color.addToMap("#FE6F5E", "Bittersweet");
Color.addToMap("#BF4F51", "Bittersweet shimmer");
Color.addToMap("#000000", "Black with no soul!");
Color.addToMap("#3D0C02", "Black bean");
Color.addToMap("#253529", "Black leather jacket");
Color.addToMap("#3B3C36", "Black olive");
Color.addToMap("#FFEBCD", "Blanched almond");
Color.addToMap("#A57164", "Blast-off bronze");
Color.addToMap("#318CE7", "Bleu de France");
Color.addToMap("#ACE5EE", "Blizzard Blue");
Color.addToMap("#FAF0BE", "Blond");
Color.addToMap("#0000FF", "Blue");
Color.addToMap("#1F75FE", "Blue (Crayola)");
Color.addToMap("#0093AF", "Blue (Munsell)");
Color.addToMap("#0087BD", "Blue (NCS)");
Color.addToMap("#333399", "Blue (pigment)");
Color.addToMap("#0247FE", "Blue (RYB)");
Color.addToMap("#A2A2D0", "Blue Bell");
Color.addToMap("#6699CC", "Blue-gray");
Color.addToMap("#0D98BA", "Blue-green");
Color.addToMap("#126180", "Blue sapphire");
Color.addToMap("#8A2BE2", "Blue-violet");
Color.addToMap("#5072A7", "Blue yonder");
Color.addToMap("#4F86F7", "Blueberry");
Color.addToMap("#1C1CF0", "Bluebonnet");
Color.addToMap("#DE5D83", "Blush");
Color.addToMap("#79443B", "Bole Brown");
Color.addToMap("#0095B6", "Bondi blue");
Color.addToMap("#E3DAC9", "Bone");
Color.addToMap("#CC0000", "Boston University Red");
Color.addToMap("#006A4E", "Bottle green");
Color.addToMap("#873260", "Boysenberry");
Color.addToMap("#0070FF", "Brandeis blue");
Color.addToMap("#B5A642", "Brass");
Color.addToMap("#CB4154", "Brick red");
Color.addToMap("#1DACD6", "Bright cerulean");
Color.addToMap("#66FF00", "Bright green");
Color.addToMap("#BF94E4", "Bright lavender");
Color.addToMap("#D891EF", "Bright lilac");
Color.addToMap("#C32148", "Bright maroon");
Color.addToMap("#1974D2", "Bright navy blue");
Color.addToMap("#FF007F", "Bright pink");
Color.addToMap("#08E8DE", "Bright turquoise");
Color.addToMap("#D19FE8", "Bright ube");
Color.addToMap("#F4BBFF", "Brilliant lavender");
Color.addToMap("#FF55A3", "Brilliant rose");
Color.addToMap("#FB607F", "Brink pink");
Color.addToMap("#004225", "British racing green");
Color.addToMap("#CD7F32", "Bronze");
Color.addToMap("#737000", "Bronze Yellow");
Color.addToMap("#964B00", "Brown");
Color.addToMap("#6B4423", "Brown-nose");
Color.addToMap("#FFC1CC", "Bubble gum");
Color.addToMap("#E7FEFF", "Bubbles");
Color.addToMap("#F0DC82", "Buff");
Color.addToMap("#7BB661", "Bud green");
Color.addToMap("#480607", "Bulgarian rose");
Color.addToMap("#800020", "Burgundy");
Color.addToMap("#DEB887", "Burlywood");
Color.addToMap("#CC5500", "Burnt orange");
Color.addToMap("#8A3324", "Burnt umber");
Color.addToMap("#BD33A4", "Byzantine");
Color.addToMap("#702963", "Byzantium");
Color.addToMap("#536872", "Cadet");
Color.addToMap("#5F9EA0", "Cadet blue");
Color.addToMap("#91A3B0", "Cadet grey");
Color.addToMap("#006B3C", "Cadmium green");
Color.addToMap("#ED872D", "Cadmium orange");
Color.addToMap("#E30022", "Cadmium red");
Color.addToMap("#FFF600", "Cadmium yellow");
Color.addToMap("#A67B5B", "Cafe au lait");
Color.addToMap("#4B3621", "Cafe noir");
Color.addToMap("#1E4D2B", "Cal Poly green");
Color.addToMap("#A3C1AD", "Cambridge Blue");
Color.addToMap("#EFBBCC", "Cameo pink");
Color.addToMap("#78866B", "Camouflage green");
Color.addToMap("#FFEF00", "Canary yellow");
Color.addToMap("#FF0800", "Candy apple red");
Color.addToMap("#E4717A", "Candy pink");
Color.addToMap("#592720", "Caput mortuum");
Color.addToMap("#C41E3A", "Cardinal");
Color.addToMap("#00CC99", "Caribbean green");
Color.addToMap("#960018", "Carmine");
Color.addToMap("#EB4C42", "Carmine pink");
Color.addToMap("#FF0038", "Carmine red");
Color.addToMap("#FFA6C9", "Carnation pink");
Color.addToMap("#99BADD", "Carolina blue");
Color.addToMap("#ED9121", "Carrot orange");
Color.addToMap("#00563F", "Castleton green");
Color.addToMap("#062A78", "Catalina blue");
Color.addToMap("#703642", "Catawba");
Color.addToMap("#C95A49", "Cedar Chest");
Color.addToMap("#92A1CF", "Ceil");
Color.addToMap("#ACE1AF", "Celadon");
Color.addToMap("#007BA7", "Celadon blue");
Color.addToMap("#2F847C", "Celadon green");
Color.addToMap("#4997D0", "Celestial blue");
Color.addToMap("#EC3B83", "Cerise pink");
Color.addToMap("#2A52BE", "Cerulean blue");
Color.addToMap("#6D9BC3", "Cerulean frost");
Color.addToMap("#007AA5", "CG Blue");
Color.addToMap("#E03C31", "CG Red");
Color.addToMap("#A0785A", "Chamoisee");
Color.addToMap("#F7E7CE", "Champagne");
Color.addToMap("#36454F", "Charcoal");
Color.addToMap("#232B2B", "Charleston green");
Color.addToMap("#E68FAC", "Charm pink");
Color.addToMap("#DFFF00", "Chartreuse");
Color.addToMap("#7FFF00", "Chartreuse (web)");
Color.addToMap("#DE3163", "Cherry");
Color.addToMap("#FFB7C5", "Cherry blossom pink");
Color.addToMap("#954535", "Chestnut");
Color.addToMap("#A8516E", "China rose");
Color.addToMap("#AA381E", "Chinese red");
Color.addToMap("#856088", "Chinese violet");
Color.addToMap("#7B3F00", "Chocolate");
Color.addToMap("#FFA700", "Chrome yellow");
Color.addToMap("#98817B", "Cinereous");
Color.addToMap("#E4D00A", "Citrine");
Color.addToMap("#9FA91F", "Citron");
Color.addToMap("#7F1734", "Claret");
Color.addToMap("#FBCCE7", "Classic rose");
Color.addToMap("#0047AB", "Cobalt");
Color.addToMap("#D2691E", "Cocoa brown");
Color.addToMap("#965A3E", "Coconut");
Color.addToMap("#6F4E37", "Coffee Brown");
Color.addToMap("#9BDDFF", "Columbia blue");
Color.addToMap("#002E63", "Cool black");
Color.addToMap("#8C92AC", "Cool grey");
Color.addToMap("#B87333", "Copper");
Color.addToMap("#AD6F69", "Copper penny");
Color.addToMap("#CB6D51", "Copper red");
Color.addToMap("#996666", "Copper rose");
Color.addToMap("#FF3800", "Coquelicot");
Color.addToMap("#FF7F50", "Coral");
Color.addToMap("#F88379", "Coral pink");
Color.addToMap("#FF4040", "Coral red");
Color.addToMap("#893F45", "Cordovan");
Color.addToMap("#FBEC5D", "Corn Yellow");
Color.addToMap("#B31B1B", "Cornell Red");
Color.addToMap("#6495ED", "Cornflower blue");
Color.addToMap("#FFF8DC", "Cornsilk");
Color.addToMap("#FFF8E7", "Cosmic latte");
Color.addToMap("#FFBCD9", "Cotton candy");
Color.addToMap("#FFFDD0", "Cream");
Color.addToMap("#DC143C", "Crimson");
Color.addToMap("#BE0032", "Crimson glory");
Color.addToMap("#00B7EB", "Cyan");
Color.addToMap("#58427C", "Cyber grape");
Color.addToMap("#FFD300", "Cyber yellow");
Color.addToMap("#FFFF31", "Daffodil");
Color.addToMap("#F0E130", "Dandelion");
Color.addToMap("#00008B", "Dark blue");
Color.addToMap("#666699", "Dark blue-gray");
Color.addToMap("#654321", "Dark brown");
Color.addToMap("#5D3954", "Dark byzantium");
Color.addToMap("#A40000", "Dark candy apple red");
Color.addToMap("#08457E", "Dark cerulean");
Color.addToMap("#986960", "Dark chestnut");
Color.addToMap("#CD5B45", "Dark coral");
Color.addToMap("#008B8B", "Dark cyan");
Color.addToMap("#536878", "Dark electric blue");
Color.addToMap("#B8860B", "Dark goldenrod");
Color.addToMap("#A9A9A9", "Dark gray");
Color.addToMap("#013220", "Dark green");
Color.addToMap("#00416A", "Dark imperial blue");
Color.addToMap("#1A2421", "Dark jungle green");
Color.addToMap("#BDB76B", "Dark khaki");
Color.addToMap("#734F96", "Dark lavender");
Color.addToMap("#534B4F", "Dark liver");
Color.addToMap("#543D37", "Dark liver (horses)");
Color.addToMap("#8B008B", "Dark magenta");
Color.addToMap("#003366", "Dark midnight blue");
Color.addToMap("#4A5D23", "Dark moss green");
Color.addToMap("#556B2F", "Dark olive green");
Color.addToMap("#FF8C00", "Dark orange");
Color.addToMap("#9932CC", "Dark orchid");
Color.addToMap("#779ECB", "Dark pastel blue");
Color.addToMap("#03C03C", "Dark pastel green");
Color.addToMap("#966FD6", "Dark pastel purple");
Color.addToMap("#C23B22", "Dark pastel red");
Color.addToMap("#E75480", "Dark pink");
Color.addToMap("#003399", "Dark powder blue");
Color.addToMap("#4F3A3C", "Dark puce");
Color.addToMap("#872657", "Dark raspberry");
Color.addToMap("#8B0000", "Dark red");
Color.addToMap("#E9967A", "Dark salmon");
Color.addToMap("#560319", "Dark Scarlet");
Color.addToMap("#8FBC8F", "Dark sea green");
Color.addToMap("#3C1414", "Dark sienna");
Color.addToMap("#8CBED6", "Dark sky blue");
Color.addToMap("#483D8B", "Dark slate blue");
Color.addToMap("#2F4F4F", "Dark slate gray");
Color.addToMap("#177245", "Dark spring green");
Color.addToMap("#918151", "Dark tan");
Color.addToMap("#FFA812", "Dark tangerine");
Color.addToMap("#CC4E5C", "Dark terra cotta");
Color.addToMap("#00CED1", "Dark turquoise");
Color.addToMap("#D1BEA8", "Dark vanilla");
Color.addToMap("#9400D3", "Dark violet");
Color.addToMap("#9B870C", "Dark yellow");
Color.addToMap("#00703C", "Dartmouth green");
Color.addToMap("#555555", "Davy's grey");
Color.addToMap("#D70A53", "Debian red");
Color.addToMap("#A9203E", "Deep carmine");
Color.addToMap("#EF3038", "Deep carmine pink");
Color.addToMap("#E9692C", "Deep carrot orange");
Color.addToMap("#DA3287", "Deep cerise");
Color.addToMap("#B94E48", "Deep chestnut");
Color.addToMap("#C154C1", "Deep fuchsia");
Color.addToMap("#004B49", "Deep jungle green");
Color.addToMap("#F5C71A", "Deep lemon");
Color.addToMap("#9955BB", "Deep lilac");
Color.addToMap("#CC00CC", "Deep magenta");
Color.addToMap("#D473D4", "Deep mauve");
Color.addToMap("#355E3B", "Deep moss green");
Color.addToMap("#FFCBA4", "Deep peach");
Color.addToMap("#A95C68", "Deep puce");
Color.addToMap("#843F5B", "Deep ruby");
Color.addToMap("#FF9933", "Deep saffron");
Color.addToMap("#00BFFF", "Deep sky blue");
Color.addToMap("#4A646C", "Deep Space Sparkle");
Color.addToMap("#7E5E60", "Deep Taupe");
Color.addToMap("#66424D", "Deep Tuscan red");
Color.addToMap("#BA8759", "Deer");
Color.addToMap("#1560BD", "Denim");
Color.addToMap("#EDC9AF", "Desert sand");
Color.addToMap("#EA3C53", "Desire");
Color.addToMap("#B9F2FF", "Diamond");
Color.addToMap("#696969", "Dim gray");
Color.addToMap("#9B7653", "Dirt");
Color.addToMap("#1E90FF", "Dodger blue");
Color.addToMap("#D71868", "Dogwood rose");
Color.addToMap("#85BB65", "Dollar bill");
Color.addToMap("#664C28", "Donkey Brown");
Color.addToMap("#00009C", "Duke blue");
Color.addToMap("#E5CCC9", "Dust storm");
Color.addToMap("#EFDFBB", "Dutch white");
Color.addToMap("#E1A95F", "Earth yellow");
Color.addToMap("#555D50", "Ebony");
Color.addToMap("#1B1B1B", "Logan's old colour </3");				//Logan's old colour </3
Color.addToMap("#614051", "Eggplant");
Color.addToMap("#F0EAD6", "Eggshell");
Color.addToMap("#1034A6", "Egyptian blue");
Color.addToMap("#7DF9FF", "Electric blue");
Color.addToMap("#FF003F", "Electric crimson");
Color.addToMap("#00FF00", "Electric green");
Color.addToMap("#6F00FF", "Electric indigo");
Color.addToMap("#CCFF00", "Electric lime");
Color.addToMap("#BF00FF", "Electric purple");
Color.addToMap("#3F00FF", "Electric ultramarine");
Color.addToMap("#FFFF00", "Electric yellow");
Color.addToMap("#50C878", "Emerald");
Color.addToMap("#6C3082", "Eminence");
Color.addToMap("#1B4D3E", "English green");
Color.addToMap("#B48395", "English lavender");
Color.addToMap("#AB4B52", "English red");
Color.addToMap("#563C5C", "English violet");
Color.addToMap("#96C8A2", "Eton blue");
Color.addToMap("#44D7A8", "Eucalyptus");
Color.addToMap("#801818", "Falu red");
Color.addToMap("#B53389", "Fandango");
Color.addToMap("#DE5285", "Fandango pink");
Color.addToMap("#F400A1", "Fashion fuchsia");
Color.addToMap("#E5AA70", "Fawn");
Color.addToMap("#4D5D53", "Feldgrau");
Color.addToMap("#4F7942", "Fern green");
Color.addToMap("#FF2800", "Ferrari Red");
Color.addToMap("#6C541E", "Field drab");
Color.addToMap("#B22222", "Firebrick");
Color.addToMap("#CE2029", "Fire engine red");
Color.addToMap("#E25822", "Flame");
Color.addToMap("#FC8EAC", "Flamingo pink");
Color.addToMap("#F7E98E", "Flavescent");		//Logan's new stupid colour?
Color.addToMap("#EEDC82", "Flax");
Color.addToMap("#A2006D", "Flirt");
Color.addToMap("#FFFAF0", "Floral white");
Color.addToMap("#FFBF00", "Fluorescent orange");
Color.addToMap("#FF1493", "Fluorescent pink");
Color.addToMap("#FF004F", "Folly");
Color.addToMap("#014421", "Forest green");
Color.addToMap("#228B22", "Forest green (web)");
Color.addToMap("#856D4D", "French bistre");
Color.addToMap("#0072BB", "French blue");
Color.addToMap("#FD3F92", "French fuchsia");
Color.addToMap("#86608E", "French lilac");
Color.addToMap("#9EFD38", "French lime");
Color.addToMap("#FD6C9E", "French pink");
Color.addToMap("#4E1609", "French puce");
Color.addToMap("#C72C48", "French raspberry");
Color.addToMap("#F64A8A", "French rose");
Color.addToMap("#77B5FE", "French sky blue");
Color.addToMap("#8806CE", "French violet");
Color.addToMap("#AC1E44", "French wine");
Color.addToMap("#A6E7FF", "Fresh Air");
Color.addToMap("#FF77FF", "Fuchsia pink");
Color.addToMap("#CC397B", "Fuchsia purple");
Color.addToMap("#C74375", "Fuchsia rose");
Color.addToMap("#E48400", "Fulvous");
Color.addToMap("#CC6666", "Fuzzy Wuzzy");
Color.addToMap("#DCDCDC", "Gainsboro");
Color.addToMap("#E49B0F", "Gamboge");
Color.addToMap("#007F66", "Generic viridian");
Color.addToMap("#F8F8FF", "Ghost white");
Color.addToMap("#FE5A1D", "Giants orange");
Color.addToMap("#B06500", "Ginger");
Color.addToMap("#6082B6", "Glaucous");
Color.addToMap("#E6E8FA", "Glitter");
Color.addToMap("#00AB66", "GO green");
Color.addToMap("#D4AF37", "Gold (metallic)");
Color.addToMap("#FFD700", "Gold (web) (Golden)");
Color.addToMap("#85754E", "Gold Fusion");
Color.addToMap("#996515", "Golden brown");
Color.addToMap("#FCC200", "Golden poppy");
Color.addToMap("#FFDF00", "Golden yellow");
Color.addToMap("#DAA520", "Goldenrod");
Color.addToMap("#A8E4A0", "Granny Smith Apple");
Color.addToMap("#6F2DA8", "Grape");
Color.addToMap("#808080", "Gray");
Color.addToMap("#BEBEBE", "Gray (X11 gray)");
Color.addToMap("#465945", "Gray-asparagus");
Color.addToMap("#1CAC78", "Green (Crayola)");
Color.addToMap("#008000", "Green");
Color.addToMap("#00A877", "Green (Munsell)");
Color.addToMap("#009F6B", "Green (NCS)");
Color.addToMap("#00A550", "Green (pigment)");
Color.addToMap("#66B032", "Green (RYB)");
Color.addToMap("#ADFF2F", "Green-yellow");
Color.addToMap("#A99A86", "Grullo");
Color.addToMap("#663854", "Halaya ube");
Color.addToMap("#446CCF", "Han blue");
Color.addToMap("#5218FA", "Beyonce Purple");
Color.addToMap("#E9D66B", "Hansa yellow");
Color.addToMap("#3FFF00", "Harlequin");
Color.addToMap("#C90016", "Harvard crimson");
Color.addToMap("#DA9100", "Harvest gold");
Color.addToMap("#DF73FF", "Heliotrope");
Color.addToMap("#AA98A9", "Heliotrope gray");
Color.addToMap("#F0FFF0", "Honeydew");
Color.addToMap("#006DB0", "Honolulu blue");
Color.addToMap("#49796B", "Chloe's green");
Color.addToMap("#FF1DCE", "Hot magenta");
Color.addToMap("#FF69B4", "Hot pink");
Color.addToMap("#71A6D2", "Iceberg");
Color.addToMap("#FCF75E", "Icterine");
Color.addToMap("#319177", "Illuminating Emerald");
Color.addToMap("#602F6B", "Imperial");
Color.addToMap("#002395", "Imperial blue");
Color.addToMap("#66023C", "Imperial purple");
Color.addToMap("#ED2939", "Imperial red");
Color.addToMap("#B2EC5D", "Inchworm");
Color.addToMap("#4C516D", "Independence");
Color.addToMap("#138808", "India green");
Color.addToMap("#CD5C5C", "Indian red");
Color.addToMap("#E3A857", "Indian yellow");
Color.addToMap("#4B0082", "Indigo");
Color.addToMap("#002FA7", "International Klein Blue");
Color.addToMap("#FF4F00", "International orange (aerospace)");
Color.addToMap("#BA160C", "International orange (engineering)");
Color.addToMap("#C0362C", "International orange (Golden Gate Bridge)");
Color.addToMap("#5A4FCF", "Iris");
Color.addToMap("#F4F0EC", "Isabelline");
Color.addToMap("#009000", "Islamic green");
Color.addToMap("#B2FFFF", "Italian sky blue");
Color.addToMap("#FFFFF0", "Ivory");
Color.addToMap("#00A86B", "Jade");
Color.addToMap("#9D2933", "Japanese carmine");
Color.addToMap("#264348", "Japanese indigo");
Color.addToMap("#5B3256", "Japanese violet");
Color.addToMap("#D73B3E", "Jasper");
Color.addToMap("#A50B5E", "Jazzberry jam");
Color.addToMap("#DA614E", "Jelly Bean");
Color.addToMap("#343434", "Jet");
Color.addToMap("#F4CA16", "Jonquil");
Color.addToMap("#8AB9F1", "Jordy blue");
Color.addToMap("#BDDA57", "June bud");
Color.addToMap("#29AB87", "Jungle green");
Color.addToMap("#4CBB17", "Kelly green");
Color.addToMap("#7C1C05", "Kenyan copper");
Color.addToMap("#3AB09E", "Keppel");
Color.addToMap("#C3B091", "Khaki");
Color.addToMap("#E79FC4", "Kobi");
Color.addToMap("#354230", "Kombu green");
Color.addToMap("#E8000D", "KU Crimson");
Color.addToMap("#087830", "La Salle Green");
Color.addToMap("#D6CADD", "Languid lavender");
Color.addToMap("#26619C", "Lapis lazuli");
Color.addToMap("#A9BA9D", "Laurel green");
Color.addToMap("#CF1020", "Lava");
Color.addToMap("#B57EDC", "Lavender (floral)");
Color.addToMap("#CCCCFF", "Lavender blue");
Color.addToMap("#FFF0F5", "Lavender blush");
Color.addToMap("#C4C3D0", "Lavender gray");
Color.addToMap("#9457EB", "Lavender indigo");
Color.addToMap("#EE82EE", "Lavender magenta");
Color.addToMap("#E6E6FA", "Lavender mist");
Color.addToMap("#FBAED2", "Lavender pink");
Color.addToMap("#967BB6", "Lavender purple");
Color.addToMap("#FBA0E3", "Lavender rose");
Color.addToMap("#7CFC00", "Lawn green");
Color.addToMap("#FFF700", "Lemon");
Color.addToMap("#FFFACD", "Lemon chiffon");
Color.addToMap("#CCA01D", "Lemon curry");
Color.addToMap("#FDFF00", "Lemon glacier");
Color.addToMap("#E3FF00", "Lemon lime");
Color.addToMap("#F6EABE", "Lemon meringue");
Color.addToMap("#FFF44F", "Lemon yellow");
Color.addToMap("#1A1110", "Licorice");
Color.addToMap("#545AA7", "Liberty");
Color.addToMap("#FDD5B1", "Light apricot");
Color.addToMap("#ADD8E6", "Light blue");
Color.addToMap("#B5651D", "Light brown");
Color.addToMap("#E66771", "Light carmine pink");
Color.addToMap("#F08080", "Light coral");
Color.addToMap("#93CCEA", "Light cornflower blue");
Color.addToMap("#F56991", "Light crimson");
Color.addToMap("#E0FFFF", "Light cyan");
Color.addToMap("#FF5CCD", "Light deep pink");
Color.addToMap("#C8AD7F", "Light French beige");
Color.addToMap("#F984EF", "Light fuchsia pink");
Color.addToMap("#FAFAD2", "Light goldenrod yellow");
Color.addToMap("#D3D3D3", "Light gray");
Color.addToMap("#90EE90", "Light green");
Color.addToMap("#FFB3DE", "Light hot pink");
Color.addToMap("#F0E68C", "Light khaki");
Color.addToMap("#D39BCB", "Light medium orchid");
Color.addToMap("#ADDFAD", "Light moss green");
Color.addToMap("#E6A8D7", "Light orchid");
Color.addToMap("#B19CD9", "Light pastel purple");
Color.addToMap("#FFB6C1", "Light pink");
Color.addToMap("#E97451", "Light red ochre");
Color.addToMap("#FFA07A", "Light salmon");
Color.addToMap("#FF9999", "Light salmon pink");
Color.addToMap("#20B2AA", "Light sea green");
Color.addToMap("#87CEFA", "Light sky blue");
Color.addToMap("#778899", "Light slate gray");
Color.addToMap("#B0C4DE", "Light steel blue");
Color.addToMap("#B38B6D", "Light taupe");
Color.addToMap("#FFFFE0", "Light yellow");
Color.addToMap("#C8A2C8", "Lilac");
Color.addToMap("#BFFF00", "Lime");
Color.addToMap("#32CD32", "Lime green");
Color.addToMap("#9DC209", "Limerick");
Color.addToMap("#195905", "Prostitute green");
Color.addToMap("#FAF0E6", "Linen");
Color.addToMap("#6CA0DC", "Little boy blue");
Color.addToMap("#B86D29", "Liver (dogs)");
Color.addToMap("#6C2E1F", "Liver");
Color.addToMap("#987456", "Liver chestnut");
Color.addToMap("#FFE4CD", "Lumber");
Color.addToMap("#E62020", "Lust");
Color.addToMap("#FF00FF", "Magenta");
Color.addToMap("#CA1F7B", "Magenta (dye)");
Color.addToMap("#D0417E", "Magenta (Pantone)");
Color.addToMap("#FF0090", "Magenta (process)");
Color.addToMap("#9F4576", "Magenta haze");
Color.addToMap("#AAF0D1", "Magic mint");
Color.addToMap("#F8F4FF", "Magnolia");
Color.addToMap("#C04000", "Mahogany");
Color.addToMap("#6050DC", "Majorelle Blue");
Color.addToMap("#0BDA51", "Malachite");
Color.addToMap("#979AAA", "Manatee");
Color.addToMap("#FF8243", "Mango Tango");
Color.addToMap("#74C365", "Mantis");			//The colour of Mantis (#78cb53) - new fav colour
Color.addToMap("#880085", "Mardi Gras");
Color.addToMap("#800000", "Maroon");
Color.addToMap("#E0B0FF", "Mauve");
Color.addToMap("#915F6D", "Mauve taupe");
Color.addToMap("#EF98AA", "Mauvelous");
Color.addToMap("#4C9141", "May green");
Color.addToMap("#73C2FB", "Maya blue");
Color.addToMap("#E5B73B", "Golden");
Color.addToMap("#66DDAA", "Medium aquamarine");
Color.addToMap("#0000CD", "Medium blue");
Color.addToMap("#E2062C", "Medium candy apple red");
Color.addToMap("#AF4035", "Medium carmine");
Color.addToMap("#035096", "Medium electric blue");
Color.addToMap("#1C352D", "Medium jungle green");
Color.addToMap("#BA55D3", "Medium orchid");
Color.addToMap("#9370DB", "Medium purple");
Color.addToMap("#BB3385", "Medium red-violet");
Color.addToMap("#AA4069", "Medium ruby");
Color.addToMap("#3CB371", "Medium sea green");
Color.addToMap("#80DAEB", "Medium sky blue");
Color.addToMap("#7B68EE", "Medium slate blue");
Color.addToMap("#C9DC87", "Medium spring bud");
Color.addToMap("#00FA9A", "Medium spring green");
Color.addToMap("#674C47", "Medium taupe");
Color.addToMap("#48D1CC", "Medium turquoise");
Color.addToMap("#D9603B", "Pale vermilion");
Color.addToMap("#F8B878", "Mellow apricot");
Color.addToMap("#F8DE7E", "Mellow yellow");
Color.addToMap("#FDBCB4", "Melon");
Color.addToMap("#0A7E8C", "Metallic Seaweed");
Color.addToMap("#9C7C38", "Metallic Sunburst");
Color.addToMap("#E4007C", "Mexican pink");
Color.addToMap("#191970", "Midnight blue");
Color.addToMap("#004953", "Midnight green (eagle green)");
Color.addToMap("#FFC40C", "Mikado yellow");
Color.addToMap("#E3F988", "Mindaro");
Color.addToMap("#3EB489", "Mint");
Color.addToMap("#F5FFFA", "Mint cream");
Color.addToMap("#98FF98", "Mint green");
Color.addToMap("#FFE4E1", "Misty rose");
Color.addToMap("#73A9C2", "Moonstone blue");
Color.addToMap("#AE0C00", "Mordant red 19");
Color.addToMap("#8A9A5B", "Moss green");
Color.addToMap("#30BA8F", "Mountain Meadow");
Color.addToMap("#997A8D", "Mountbatten pink");
Color.addToMap("#18453B", "MSU Green");
Color.addToMap("#306030", "Mughal green");
Color.addToMap("#C54B8C", "Mulberry");
Color.addToMap("#FFDB58", "Mustard");
Color.addToMap("#317873", "Myrtle green");
Color.addToMap("#F6ADC6", "Nadeshiko pink");
Color.addToMap("#2A8000", "Napier green");
Color.addToMap("#FFDEAD", "Navajo white");
Color.addToMap("#000080", "Navy");
Color.addToMap("#FFA343", "Neon Carrot");
Color.addToMap("#FE4164", "Neon fuchsia");
Color.addToMap("#39FF14", "Neon green");
Color.addToMap("#214FC6", "New Car");
Color.addToMap("#D7837F", "New York pink");
Color.addToMap("#A4DDED", "Non-photo blue");
Color.addToMap("#059033", "North Texas Green");
Color.addToMap("#E9FFDB", "Nyanza");
Color.addToMap("#0077BE", "Ocean Boat Blue");
Color.addToMap("#CC7722", "Ochre");
Color.addToMap("#43302E", "Old burgundy");
Color.addToMap("#CFB53B", "Old gold");
Color.addToMap("#FDF5E6", "Old lace");
Color.addToMap("#796878", "Old lavender");
Color.addToMap("#673147", "Old mauve");
Color.addToMap("#867E36", "Old moss green");
Color.addToMap("#C08081", "Old rose");
Color.addToMap("#808000", "Olive");
Color.addToMap("#6B8E23", "Olive Drab #3");
Color.addToMap("#3C341F", "Olive Drab #7");
Color.addToMap("#9AB973", "Olivine");
Color.addToMap("#353839", "Onyx");
Color.addToMap("#B784A7", "Opera mauve");
Color.addToMap("#FF7F00", "Orange");
Color.addToMap("#FF7538", "Orange (Crayola)");
Color.addToMap("#FF5800", "Orange (Pantone)");
Color.addToMap("#FB9902", "Orange (RYB)");
Color.addToMap("#FFA500", "Orange (web)");
Color.addToMap("#FF9F00", "Orange peel");
Color.addToMap("#FF4500", "Orange-red");
Color.addToMap("#DA70D6", "Orchid");
Color.addToMap("#F2BDCD", "Orchid pink");
Color.addToMap("#FB4F14", "Orioles orange");
Color.addToMap("#414A4C", "Outer Space");
Color.addToMap("#FF6E4A", "Outrageous Orange");
Color.addToMap("#002147", "Oxford Blue");
Color.addToMap("#990000", "Crimson Red");
Color.addToMap("#006600", "Pakistan green");
Color.addToMap("#273BE2", "Palatinate blue");
Color.addToMap("#682860", "Palatinate purple");
Color.addToMap("#BCD4E6", "Pale aqua");
Color.addToMap("#AFEEEE", "Pale blue");
Color.addToMap("#987654", "Pale brown");
Color.addToMap("#9BC4E2", "Pale cerulean");
Color.addToMap("#DDADAF", "Pale chestnut");
Color.addToMap("#DA8A67", "Pale copper");
Color.addToMap("#ABCDEF", "Pale cornflower blue");
Color.addToMap("#E6BE8A", "Pale gold");
Color.addToMap("#EEE8AA", "Pale goldenrod");
Color.addToMap("#98FB98", "Pale green");
Color.addToMap("#DCD0FF", "Pale lavender");
Color.addToMap("#F984E5", "Pale magenta");
Color.addToMap("#FADADD", "Pale pink");
Color.addToMap("#DDA0DD", "Pale plum");
Color.addToMap("#DB7093", "Nipple");
Color.addToMap("#96DED1", "Pale robin egg blue");
Color.addToMap("#C9C0BB", "Pale silver");
Color.addToMap("#ECEBBD", "Pale spring bud");
Color.addToMap("#BC987E", "Pale taupe");
Color.addToMap("#78184A", "Pansy purple");
Color.addToMap("#009B7D", "Paolo Veronese green");
Color.addToMap("#FFEFD5", "Papaya whip");
Color.addToMap("#E63E62", "Paradise pink");
Color.addToMap("#AEC6CF", "Pastel blue");
Color.addToMap("#836953", "Pastel brown");
Color.addToMap("#CFCFC4", "Pastel gray");
Color.addToMap("#77DD77", "Pastel green");
Color.addToMap("#F49AC2", "Pastel magenta");
Color.addToMap("#FFB347", "Pastel orange");
Color.addToMap("#DEA5A4", "Pastel pink");
Color.addToMap("#B39EB5", "Pastel purple");
Color.addToMap("#FF6961", "Pastel red");
Color.addToMap("#CB99C9", "Pastel violet");
Color.addToMap("#FDFD96", "Pastel yellow");
Color.addToMap("#FFE5B4", "Peach");
Color.addToMap("#FFCC99", "Peach-orange");
Color.addToMap("#FFDAB9", "Peach puff");
Color.addToMap("#FADFAD", "Peach-yellow");
Color.addToMap("#D1E231", "Pear");
Color.addToMap("#EAE0C8", "Pearl");
Color.addToMap("#88D8C0", "Dolphin Aqua");
Color.addToMap("#B768A2", "Pearly purple");
Color.addToMap("#E6E200", "Peridot");
Color.addToMap("#1C39BB", "Persian blue");
Color.addToMap("#00A693", "Persian green");
Color.addToMap("#32127A", "Persian indigo");
Color.addToMap("#D99058", "Persian orange");
Color.addToMap("#F77FBE", "Persian pink");
Color.addToMap("#701C1C", "Persian plum");
Color.addToMap("#CC3333", "Persian red");
Color.addToMap("#FE28A2", "Persian rose");
Color.addToMap("#EC5800", "Persimmon");
Color.addToMap("#CD853F", "Peru");
Color.addToMap("#000F89", "Phthalo blue");
Color.addToMap("#123524", "Phthalo green");
Color.addToMap("#45B1E8", "Picton blue");
Color.addToMap("#C30B4E", "Pictorial carmine");
Color.addToMap("#FDDDE6", "Piggy pink");
Color.addToMap("#01796F", "Pine green");
Color.addToMap("#FFC0CB", "Pink");
Color.addToMap("#D74894", "Pink (Pantone)");
Color.addToMap("#FFDDF4", "Pink lace");
Color.addToMap("#D8B2D1", "Pink lavender");
Color.addToMap("#FF9966", "Pink-orange");
Color.addToMap("#E7ACCF", "Pink pearl");
Color.addToMap("#F78FA7", "Pink Sherbet");
Color.addToMap("#93C572", "Pistachio");
Color.addToMap("#E5E4E2", "Platinum");
Color.addToMap("#8E4585", "Plum");
Color.addToMap("#BE4F62", "Popstar");
Color.addToMap("#FF5A36", "Portland Orange");
Color.addToMap("#B0E0E6", "Powder blue");
Color.addToMap("#FF8F00", "Princeton orange");
Color.addToMap("#003153", "Prussian blue");
Color.addToMap("#DF00FF", "Psychedelic purple");
Color.addToMap("#CC8899", "Puce");
Color.addToMap("#644117", "Pullman Brown (UPS Brown)");
Color.addToMap("#FF7518", "Pumpkin");
Color.addToMap("#800080", "Purple");
Color.addToMap("#9F00C5", "Purple (Munsell)");
Color.addToMap("#A020F0", "Purple");
Color.addToMap("#69359C", "Purple Heart");
Color.addToMap("#9678B6", "Purple mountain majesty");
Color.addToMap("#4E5180", "Purple navy");
Color.addToMap("#FE4EDA", "Purple pizzazz");
Color.addToMap("#50404D", "Purple taupe");
Color.addToMap("#9A4EAE", "Purpureus");
Color.addToMap("#51484F", "Quartz");
Color.addToMap("#436B95", "Queen blue");
Color.addToMap("#E8CCD7", "Queen pink");
Color.addToMap("#8E3A59", "Quinacridone magenta");
Color.addToMap("#FF355E", "Radical Red");
Color.addToMap("#FBAB60", "Rajah");
Color.addToMap("#E30B5D", "Raspberry");
Color.addToMap("#E25098", "Raspberry pink");
Color.addToMap("#B3446C", "Raspberry rose");
Color.addToMap("#826644", "Raw umber");
Color.addToMap("#FF33CC", "Razzle dazzle rose");
Color.addToMap("#E3256B", "Razzmatazz");
Color.addToMap("#8D4E85", "Razzmic Berry");
Color.addToMap("#FF0000", "Red");
Color.addToMap("#EE204D", "Red (Crayola)");
Color.addToMap("#F2003C", "Red (Munsell)");
Color.addToMap("#C40233", "Red (NCS)");
Color.addToMap("#ED1C24", "Red (pigment)");
Color.addToMap("#FE2712", "Red (RYB)");
Color.addToMap("#A52A2A", "Red-brown");
Color.addToMap("#860111", "Red devil");
Color.addToMap("#FF5349", "Red-orange");
Color.addToMap("#E40078", "Red-purple");
Color.addToMap("#C71585", "Red-violet");
Color.addToMap("#A45A52", "Redwood");
Color.addToMap("#522D80", "Regalia");
Color.addToMap("#002387", "Resolution blue");
Color.addToMap("#777696", "Rhythm");
Color.addToMap("#004040", "Rich black");
Color.addToMap("#F1A7FE", "Rich brilliant lavender");
Color.addToMap("#D70040", "Rich carmine");
Color.addToMap("#0892D0", "Rich electric blue");
Color.addToMap("#A76BCF", "Rich lavender");
Color.addToMap("#B666D2", "Rich lilac");
Color.addToMap("#B03060", "Rich maroon");
Color.addToMap("#444C38", "Rifle green");
Color.addToMap("#704241", "Deep Roast coffee");
Color.addToMap("#00CCCC", "Robin egg blue");
Color.addToMap("#8A7F80", "Rocket metallic");
Color.addToMap("#838996", "Roman silver");
Color.addToMap("#F9429E", "Rose bonbon");
Color.addToMap("#674846", "Rose ebony");
Color.addToMap("#B76E79", "Rose gold");
Color.addToMap("#FF66CC", "Rose pink");
Color.addToMap("#C21E56", "Rose red");
Color.addToMap("#905D5D", "Rose taupe");
Color.addToMap("#AB4E52", "Rose vale");
Color.addToMap("#65000B", "Rosewood");
Color.addToMap("#D40000", "Rosso corsa");
Color.addToMap("#BC8F8F", "Rosy brown");
Color.addToMap("#0038A8", "Royal azure");
Color.addToMap("#002366", "Royal blue");
Color.addToMap("#4169E1", "Royal light blue");
Color.addToMap("#CA2C92", "Royal fuchsia");
Color.addToMap("#7851A9", "Royal purple");
Color.addToMap("#FADA5E", "Royal yellow");
Color.addToMap("#CE4676", "Ruber");
Color.addToMap("#D10056", "Rubine red");
Color.addToMap("#E0115F", "Ruby");
Color.addToMap("#9B111E", "Ruby red");
Color.addToMap("#FF0028", "Ruddy");
Color.addToMap("#BB6528", "Ruddy brown");
Color.addToMap("#E18E96", "Ruddy pink");
Color.addToMap("#A81C07", "Rufous");
Color.addToMap("#80461B", "Russet");
Color.addToMap("#679267", "Russian green");
Color.addToMap("#32174D", "Russian violet");
Color.addToMap("#B7410E", "Rust");
Color.addToMap("#DA2C43", "Rusty red");
Color.addToMap("#8B4513", "Saddle brown");
Color.addToMap("#FF6700", "Safety orange (blaze orange)");
Color.addToMap("#EED202", "Safety yellow");
Color.addToMap("#F4C430", "Saffron");
Color.addToMap("#BCB88A", "Sage");
Color.addToMap("#23297A", "St. Patrick's blue");
Color.addToMap("#FA8072", "Salmon");
Color.addToMap("#FF91A4", "Salmon pink");
Color.addToMap("#C2B280", "Sand");
Color.addToMap("#ECD540", "Sandstorm");
Color.addToMap("#F4A460", "Sandy brown");
Color.addToMap("#92000A", "Sangria");
Color.addToMap("#507D2A", "Sap green");
Color.addToMap("#0F52BA", "Sapphire");
Color.addToMap("#0067A5", "Sapphire blue");
Color.addToMap("#CBA135", "Satin sheen gold");
Color.addToMap("#FF2400", "Scarlet");
Color.addToMap("#FFD800", "School bus yellow");
Color.addToMap("#76FF7A", "Screamin' Green");
Color.addToMap("#006994", "Sea blue");
Color.addToMap("#2E8B57", "Sea green");
Color.addToMap("#321414", "Seal brown");
Color.addToMap("#FFF5EE", "Seashell");
Color.addToMap("#FFBA00", "Selective yellow");
Color.addToMap("#704214", "Sepia");
Color.addToMap("#8A795D", "Shadow");
Color.addToMap("#778BA5", "Shadow blue");
Color.addToMap("#FFCFF1", "Shampoo");
Color.addToMap("#009E60", "Shamrock green");
Color.addToMap("#8FD400", "Sheen Green");
Color.addToMap("#D98695", "Shimmering Blush");
Color.addToMap("#FC0FC0", "Shocking pink");
Color.addToMap("#882D17", "Sienna");
Color.addToMap("#C0C0C0", "Silver");
Color.addToMap("#ACACAC", "Silver chalice");
Color.addToMap("#5D89BA", "Silver Lake blue");
Color.addToMap("#C4AEAD", "Silver pink");
Color.addToMap("#BFC1C2", "Silver sand");
Color.addToMap("#CB410B", "Sinopia");
Color.addToMap("#007474", "Skobeloff");
Color.addToMap("#87CEEB", "Sky blue");
Color.addToMap("#CF71AF", "Sky magenta");
Color.addToMap("#6A5ACD", "Slate blue");
Color.addToMap("#708090", "Slate gray");
Color.addToMap("#C84186", "Smitten");
Color.addToMap("#738276", "Smoke");
Color.addToMap("#933D41", "Smokey topaz");
Color.addToMap("#100C08", "Smoky black");
Color.addToMap("#FFFAFA", "Snow");
Color.addToMap("#CEC8EF", "Soap");
Color.addToMap("#893843", "Solid pink");
Color.addToMap("#757575", "Sonic silver");
Color.addToMap("#9E1316", "Spartan Crimson");
Color.addToMap("#1D2951", "Space cadet");
Color.addToMap("#807532", "Spanish bistre");
Color.addToMap("#0070B8", "Spanish blue");
Color.addToMap("#D10047", "Spanish carmine");
Color.addToMap("#E51A4C", "Spanish crimson");
Color.addToMap("#989898", "Spanish gray");
Color.addToMap("#009150", "Spanish green");
Color.addToMap("#E86100", "Spanish orange");
Color.addToMap("#F7BFBE", "Spanish pink");
Color.addToMap("#E60026", "Spanish red");
Color.addToMap("#4C2882", "Spanish violet");
Color.addToMap("#007F5C", "Spanish viridian");
Color.addToMap("#0FC0FC", "Spiro Disco Ball");
Color.addToMap("#A7FC00", "Spring bud");
Color.addToMap("#00FF7F", "Spring green");
Color.addToMap("#007BB8", "Star command blue");
Color.addToMap("#4682B4", "Steel blue");
Color.addToMap("#CC33CC", "Steel pink");
Color.addToMap("#4F666A", "Stormcloud");
Color.addToMap("#E4D96F", "Straw");
Color.addToMap("#FC5A8D", "Strawberry");
Color.addToMap("#FFCC33", "Sunglow");
Color.addToMap("#E3AB57", "Sunray");
Color.addToMap("#FAD6A5", "Sunset");
Color.addToMap("#FD5E53", "Sunset orange");
Color.addToMap("#CF6BA9", "Super pink");
Color.addToMap("#D2B48C", "Tan");
Color.addToMap("#F94D00", "Tangelo");
Color.addToMap("#F28500", "Tangerine");
Color.addToMap("#FFCC00", "Tangerine yellow");
Color.addToMap("#483C32", "Dark Grayish Brown");
Color.addToMap("#8B8589", "Taupe gray");
Color.addToMap("#D0F0C0", "Tea green");
Color.addToMap("#F4C2C2", "Tea rose");
Color.addToMap("#008080", "Teal");
Color.addToMap("#367588", "Teal blue");
Color.addToMap("#99E6B3", "Teal deer");
Color.addToMap("#00827F", "Teal green");
Color.addToMap("#CF3476", "Telemagenta");
Color.addToMap("#CD5700", "Tenne");
Color.addToMap("#E2725B", "Terra cotta");
Color.addToMap("#D8BFD8", "Thistle");
Color.addToMap("#DE6FA1", "Thulian pink");
Color.addToMap("#FC89AC", "Tickle Me Pink");
Color.addToMap("#0ABAB5", "Tiffany Blue");
Color.addToMap("#E08D3C", "Tiger's eye");
Color.addToMap("#DBD7D2", "Timberwolf");
Color.addToMap("#EEE600", "Titanium yellow");
Color.addToMap("#FF6347", "Tomato");
Color.addToMap("#746CC0", "Toolbox");
Color.addToMap("#FFC87C", "Topaz");
Color.addToMap("#FD0E35", "Tractor red");
Color.addToMap("#00755E", "Tropical rain forest");
Color.addToMap("#0073CF", "True Blue");
Color.addToMap("#417DC1", "Tufts Blue");
Color.addToMap("#FF878D", "Tulip");
Color.addToMap("#DEAA88", "Tumbleweed");
Color.addToMap("#B57281", "Turkish rose");
Color.addToMap("#40E0D0", "Turquoise");
Color.addToMap("#00FFEF", "Turquoise blue");
Color.addToMap("#A0D6B4", "Turquoise green");
Color.addToMap("#7C4848", "Tuscan red");
Color.addToMap("#C09999", "Tuscany");
Color.addToMap("#8A496B", "Twilight lavender");
Color.addToMap("#0033AA", "UA blue");
Color.addToMap("#D9004C", "UA red");
Color.addToMap("#8878C3", "Ube");
Color.addToMap("#536895", "UCLA Blue");
Color.addToMap("#FFB300", "UCLA Gold");
Color.addToMap("#3CD070", "UFO Green");
Color.addToMap("#120A8F", "Ultramarine");
Color.addToMap("#4166F5", "Ultramarine blue");
Color.addToMap("#FF6FFF", "Ultra pink");
Color.addToMap("#635147", "Umber");
Color.addToMap("#FFDDCA", "Unbleached silk");
Color.addToMap("#5B92E5", "United Nations blue");
Color.addToMap("#B78727", "University of California Gold");
Color.addToMap("#FFFF66", "Unmellow yellow");
Color.addToMap("#7B1113", "UP Maroon");
Color.addToMap("#AE2029", "Upsdell red");
Color.addToMap("#E1AD21", "Urobilin");
Color.addToMap("#004F98", "USAFA blue");
Color.addToMap("#F77F00", "University of Tennessee Orange");
Color.addToMap("#D3003F", "Utah Crimson");
Color.addToMap("#F3E5AB", "Vanilla");
Color.addToMap("#F38FA9", "Vanilla ice");
Color.addToMap("#C5B358", "Vegas gold");
Color.addToMap("#C80815", "Venetian red");
Color.addToMap("#43B3AE", "Verdigris");
Color.addToMap("#E34234", "Medium vermilion");
Color.addToMap("#D9381E", "Vermilion");
Color.addToMap("#8F00FF", "Violet");
Color.addToMap("#7F00FF", "Violet (color wheel)");
Color.addToMap("#8601AF", "Violet (RYB)");
Color.addToMap("#324AB2", "Logie Bear");
Color.addToMap("#F75394", "Violet-red");
Color.addToMap("#40826D", "Viridian");
Color.addToMap("#009698", "Viridian green");
Color.addToMap("#922724", "Vivid auburn");
Color.addToMap("#9F1D35", "Vivid burgundy");
Color.addToMap("#DA1D81", "Vivid cerise");
Color.addToMap("#CC00FF", "Vivid orchid");
Color.addToMap("#00CCFF", "Vivid sky blue");
Color.addToMap("#FFA089", "Vivid tangerine");
Color.addToMap("#9F00FF", "Vivid violet");
Color.addToMap("#004242", "Warm black");
Color.addToMap("#A4F4F9", "Waterspout");
Color.addToMap("#645452", "Wenge");
Color.addToMap("#F5DEB3", "Wheat");
Color.addToMap("#FFFFFF", "White");
Color.addToMap("#F5F5F5", "White smoke");
Color.addToMap("#A2ADD0", "Wild blue yonder");
Color.addToMap("#D470A2", "Wild orchid");
Color.addToMap("#FF43A4", "Wild Strawberry");
Color.addToMap("#FC6C85", "Wild watermelon");
Color.addToMap("#FD5800", "Willpower orange");
Color.addToMap("#A75502", "Windsor tan");
Color.addToMap("#722F37", "Wine");
Color.addToMap("#C9A0DC", "Wisteria");
Color.addToMap("#C19A6B", "Wood brown");
Color.addToMap("#738678", "Xanadu");
Color.addToMap("#0F4D92", "Yale Blue");
Color.addToMap("#1C2841", "Yankees blue");
Color.addToMap("#FCE883", "Yellow Crayola");
Color.addToMap("#EFCC00", "Yellow Munsell");
Color.addToMap("#FEDF00", "Yellow Pantone");
Color.addToMap("#FEFE33", "Yellow");
Color.addToMap("#9ACD32", "Yellow Green");
Color.addToMap("#FFAE42", "Yellow Orange");
Color.addToMap("#FFF000", "Yellow rose");
Color.addToMap("#0014A8", "Zaffre");
Color.addToMap("#2C1608", "Zinnwaldite brown");
Color.addToMap("#39A78E", "Zomp");
        gClient.on("a", function (msg) {
            chat.receive(msg);
			messages_total+=1
        });
        $("#chat input").on("focus", function (evt) {
            releaseKeyboard();
            $("#chat").addClass("chatting");
            chat.scrollToBottom();
        });
        /*$("#chat input").on("blur", function(evt) {
			captureKeyboard();
			$("#chat").removeClass("chatting");
			chat.scrollToBottom();
		});*/
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
                if (message.length == 0) {
                    setTimeout(function () {
                        chat.blur();		//Lmessage
                    }, 0); //100

					// ♥ // local commands // ♥ //


				} else if (message.substring(0, 6).toLowerCase() == "!lhelp") {		//local command list
                    // thanks Someguy!
					localMsg("Local Commands: !name, !svol (speech volume), !spitch (speech pitch), !srate (speech speed), !sdefault, !lobby, !givefish (gives fish to fishlord), !fishlord (sets person who receives fish)");

                    $(this).val("");
                    setTimeout(function () {
                        chat.blur();
                    }, 0);

                } else if (message.substring(0, 5).toLowerCase() == "!name") {		//name
                    if (message.substring(5).trim() == "") {

						window.gTest = new Notification({
							title: "Rename",
							text: "Usage: !name new_name",
							target: "#piano",
							duration: 3000
						});

					} else {

						gClient.sendArray([{
							"m": "userset",
							"set": {
							"name": message.substring(5).trim()
							}
						}]);

						selfName = message.substring(5).trim();

						window.gTest = new Notification({
							title: "Renamed...",
							text: message.substring(5).trim(),
							target: "#piano",
							duration: 3000
						});

					}
                    $(this).val("");
                    setTimeout(function () {
                        chat.blur();
                    }, 0);

					} else if (message.substring(0, 5).toLowerCase() == "!svol") {					//speech volume
					var speechVolumeTEMP = message.substring(6).trim()
				if (speechVolumeTEMP == NaN || speechVolumeTEMP > 1 || speechVolumeTEMP < 0) {

					window.gTest = new Notification({
						title: "Speech volume [error]",
						text: "Please enter a number no greater than 1 and no less than 0.",
						target: "#piano",
						duration: 4000
					});

					$(this).val("");
					setTimeout(function () {
						chat.blur();
					}, 0);
					return;

				} else {
					speechVolume = speechVolumeTEMP; //sets new variable value
					window.gTest = new Notification({
						title: "Speech",
						text: speechVolume,
						target: "#piano",
						duration: 3000
					});

					$(this).val("");
						setTimeout(function () {
							chat.blur();
						}, 0);
				}

				} else if (message.substring(0, 7).toLowerCase() == "!spitch") {					//speech pitch
				var speechPitchTEMP = message.substring(8).trim()
				if (speechPitchTEMP == NaN || speechPitchTEMP > 2 || speechPitchTEMP < 1) {

					window.gTest = new Notification({
						title: "Speech pitch [error]",
						text: "Please enter a number no greater than 2 and no less than 1.",
						target: "#piano",
						duration: 4000
					});

					$(this).val("");
					setTimeout(function () {
						chat.blur();
					}, 0);
					return;

				} else {
					speechPitch = message.substring(8).trim()  //sets new variable value
					window.gTest = new Notification({
						title: "Pitch",
						text: speechPitch,
						target: "#piano",
						duration: 3000
					});

					$(this).val("");
						setTimeout(function () {
							chat.blur();
						}, 0);
				}



				} else if (message.substring(0, 6).toLowerCase() == "!srate") {					//speech rate

					var speechRateTEMP = message.substring(7).trim()
					if (speechRateTEMP == NaN || speechRateTEMP > 2 || speechRateTEMP < 0) {

					window.gTest = new Notification({
						title: "Speech rate [error]",
						text: "Please enter a number no greater than 2 and no less than 1.",
						target: "#piano",
						duration: 4000
					});

					$(this).val("");
					setTimeout(function () {
						chat.blur();
					}, 0);
					return;

				} else {

					speechRate = message.substring(7).trim()  //sets new variable value

					window.gTest = new Notification({
						title: "Rate",
						text: speechRate,
						target: "#piano",
						duration: 3000
					});

					$(this).val("");
						setTimeout(function () {
							chat.blur();
						}, 0);
				}

				} else if (message.substring(0, 9).toLowerCase() == "!sdefault") {		//speech default

					speechVolume = 0.5;							//default volume for spoken text
					speechPitch = 1;							//default pitch for spoken text
					speechRate = 1;								//default speed for spoken text

					window.gTest = new Notification({
						title: "Speech default",
						text: "Volume, pitch and rate all reset.",
						target: "#piano",
						duration: 3000
					});

                    $(this).val("");
                    setTimeout(function () {
                        chat.blur();
                    }, 0);


				} else if (message.substring(0, 6).toLowerCase() == "!lobby") {		//lobby

					if (gClient.isOwner()) {

						var lobbyConfirm = prompt("Are you sure you want to turn this room into a lobby?\nThis cannot be undone.\n\nEnter \"Yes, I am sure\" below to continue.");

						if (lobbyConfirm == "Yes, I am sure") {

							MPP.client.sendArray([{m: "chset", set: {lobby: true}}]);
							window.gTest = new Notification({
								title: "Room is now a lobby",
								text: "Room is now a lobby",
								target: "#piano",
								duration: 3000
							});

						} else {
							alert("Check that your entered the text correctly.\n(note: remember the comma).");
						}

					} else {
						alert("You're not the owner of this room!");
					}

                    $(this).val("");
                    setTimeout(function () {
                        chat.blur();
                    }, 0);
				} else if (message.substring(0, 9).toLowerCase() == "!givefish") {		//give fish
						    giveFish = !giveFish;
							if (!giveFish) {
									window.gTest = new Notification({
									title: "Give Fish",
									text: "Off",
									target: "#piano",
									duration: 3000
								});
							} else {
									window.gTest = new Notification({
									title: "Give Fish",
									text: "On",
									target: "#piano",
									duration: 3000
								});
							}

                    $(this).val("");
                    setTimeout(function () {
                        chat.blur();
                    }, 0);
				} else if (message.substring(0, 9).toLowerCase() == "!fishlord") {		//fish lord
							fishLord = message.substring(10).trim();

							MPP.client.sendArray([{m: "chset", set: {lobby: true}}]);
							window.gTest = new Notification({
								title: "Fish Lord",
								text: "Fish lord: " + fishLord,
								target: "#piano",
								duration: 3000
							});


                    $(this).val("");
                    setTimeout(function () {
                        chat.blur();
                    }, 0);
					// ♥ // local commands // ♥ //

                } else if (message.length <= 512) {
                    chat.send(message);
                    $(this).val("");
                    setTimeout(function () {
                        chat.blur();
                    }, 100);
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
                $("#chat li").remove();
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
				messages_sent+=1; //Lchat!
            },


            receive: function (msg) {
                if (gChatMutes.indexOf(msg.p._id) != -1) return;
                 msg.a = msg.a.replace(/</g, '&lt;');
                  msg.p.name = msg.p.name.replace(/</g, '&lt;');
                smile1 = /b(O_O|O.O)/
                texty = msg.a;
                  content = msg.a.replace(/((https?\:\/\/|ftp\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi, function(url) {
                    nice = url;
                    if( url.match('^https?:\/\/') ) nice = nice.replace(/^https?:\/\//i,'')
                    else url = 'http://' + url;

                    return '<a target="_blank" style="text-decoration: none;" href="'+ url +'">'+ url +'</a>';
                });
                    var final = content;

                 var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

                var li = $('<li><span class="name"/><span style="position: initial!important;" class="message"/>');

                 //li.find(".name").text(msg.p.name + afterName);
				 li.find(".name").html(msg.p.name + afterName);	//fix for <3 showing up as lt;3 using .text instead of .html -thanks Sommie
				 if (debug) {
				 li.find(".name").html("[" + msg.p._id + "] " + msg.p.name + afterName);
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
                if (eles.length > 256) {
                    $(eles[0]).remove();
                }

                // scroll to bottom if not "chatting" or if not scrolled up
                if (!$("#chat").hasClass("chatting")) {
                    chat.scrollToBottom();
                } else {
                    var ele = $("#chat ul").get(0);
                    if (ele.scrollTop > ele.scrollHeight - ele.offsetHeight - 50)
                        chat.scrollToBottom();
                }
            }
        };

    })();




    // use midi bridge

    ////////////////////////////////////////////////////////////////

    var gMidiLoaded = false;
    (function () {
        var devices = [];

        $("#midi-btn").on("click", function (evt) {
            evt.preventDefault();
            $("#midi-btn").off("click");
            $("#midi-btn").addClass("stuck");
            var notif_loading = new Notification({
                id: "midi",
                title: "MIDI",
                text: "Loading the Java applet...",
                target: "#midi-btn",
                duration: 30000
            });
            midiBridge.init({
                ready: function () {
                    gMidiLoaded = true;
                    notif_loading.close();
                    devices = midiBridge.getDevices();
                    var auto_id = auto("input");
                    if (auto_id !== undefined) {
                        inputs[seq] = auto_id;
                        seq++;
                        makeConnections();
                    }
                    //showConnections();	//it's annoying when it pops up straight away. It usually selects the correct midi anyway
                    $("#midi-btn").on("click", showConnections);
                },
                error: function (e) {
                    notif_loading.close();
                    new Notification({
                        id: "midi",
                        title: "MIDI",
                        text: "Error: " + e,
                        target: "#midi-btn",
                        duration: 25000
                    });
                },
                data: function (evt) {
                    //console.log("MIDI", evt);		//uncomment to show MIDI info
                    if (evt.status == midiBridge.NOTE_ON) {
                        var note = evt.noteName.toLowerCase(); //replace("#", "s");
                        var letter = note.charAt(0);
                        var sharp = note.charAt(1) == "#";
                        var ix = sharp ? 2 : 1;
                        var number = note.substr(ix, 1);
                        number--;
                        note = letter + (sharp ? "s" : "") + number;
                        var vol = evt.data2 / 127;

                        press(note, vol);

                    } else if (evt.status == midiBridge.NOTE_OFF) {
                        var note = evt.noteName.toLowerCase(); //replace("#", "s");
                        var letter = note.charAt(0);
                        var sharp = note.charAt(1) == "#";
                        var ix = sharp ? 2 : 1;
                        var number = note.substr(ix, 1);
                        number--;
                        note = letter + (sharp ? "s" : "") + number;

                        release(note);

                    } else if (evt.status == midiBridge.CONTROL_CHANGE) {
                        if (!gAutoSustain) {
                            if (evt.data1 == 64) {
                                if (evt.data2 > 0) {
                                    pressSustain();
                                } else {
                                    releaseSustain();
                                }
                            }
                        }
                    }
                },
                connectAllInputsToFirstOutput: false
                //connectAllInputs: true
                //connectFirstOutput: true
            });
        });

        function auto(device_type) {
            var id = undefined;
            var len = devices.length;
            for (var i = 0; i < len; i++) {
                if (devices[i].type == device_type) {
                    id = devices[i].id;
                    if (!isConnected(id)) break;
                }
            }
            return id;
        };

        function isConnected(device_id) {
            for (var i in inputs) {
                if (!inputs.hasOwnProperty(i)) continue;
                if (inputs[i] == device_id) return true;
            }
            for (var i in outputs) {
                if (!outputs.hasOwnProperty(i)) continue;
                if (outputs[i] == device_id) return true;
            }
            return false;
        };

        function makeConnections() {
            midiBridge.disconnectAll();
            var used_inputs = [];
            for (var i in inputs) {
                if (!inputs.hasOwnProperty(i)) continue;
                if (used_inputs.indexOf(inputs[i]) != -1) continue;
                midiBridge.addConnection(inputs[i], "-1");
                used_inputs.push(inputs[i]);
            };
            var used_outputs = [];
            for (var i in outputs) {
                if (!outputs.hasOwnProperty(i)) continue;
                if (used_outputs.indexOf(outputs[i]) != -1) continue;
                midiBridge.addConnection("-1", outputs[i]);
                used_outputs.push(outputs[i]);
            };
        };

        var notif_conn = undefined;
        var knows_conn = true;		//false
        var inputs = {};
        var outputs = {};
        var seq = 0;

        function showConnections() {
            if (notif_conn) return;

            notif_conn = new Notification({
                id: "midi",
                title: "MIDI Connections <3",
                html: '\
	<div id="midi-connections">\
	<div class="left half">\
	<h2>IN</h2>\
	<div class="list"></div>\
	<div><button class="add">+</button></div>\
	</div>\
	<div class="right half">\
	<h2>OUT</h2>\
	<div class="list"></div>\
	<div>Not applicable.</div>\
	</div>\
	<div class="clear"></div>\
	</div>\
	',
                target: "#midi-btn"
            });

            notif_conn.on("close", function () {
                if (!knows_conn) {
                    knows_conn = true;
                    new Notification({
                        title: "Okay ^.^",
                        text: "^°^",
                        target: "#midi-btn",
                        duration: 120
                    });
                }
                notif_conn = undefined;
            });

            var j = $("#midi-connections");
            if (!j.length) return;

            function Item(device_type, seq, sel_id, store) {
                var sel = $("<select/>");
                var len = devices.length;
                for (var i = 0; i < len; i++) {
                    var dev = devices[i];
                    if (dev.type !== device_type) continue;
                    var opt = $("<option/>");
                    opt.attr("value", dev.id);
                    opt.text(dev.id + ": " + dev.name);
                    if (sel_id == dev.id) opt.attr("selected", true);
                    sel.append(opt);
                }
                var btn = $('<button class="remove">x</button>');
                var itm = $("<div/>");
                itm.append(sel);
                itm.append(btn);
                itm.attr("seq", seq);
                sel.on("change", function () {
                    var val = itm.find("option:selected").attr("value");
                    var seq = itm.attr("seq");
                    store[seq] = val;
                    makeConnections();
                });
                btn.on("click", function () {
                    var seq = itm.attr("seq");
                    delete store[seq];
                    itm.remove();
                    notif_conn.position(); // fix this...
                    makeConnections();
                });
                return itm;
            };

            var ji = j.find(".left.half .list");
            for (var i in inputs) {
                if (!inputs.hasOwnProperty(i)) continue;
                ji.append(Item("input", i, inputs[i], inputs));
            };
            j.find(".left.half .add").on("click", function () {
                var auto_id = auto("input");
                if (auto_id !== undefined) {
                    inputs[seq] = auto_id;
                    ji.append(Item("input", seq, auto_id, inputs));
                    notif_conn.position(); // fix this...
                    seq++;
                    makeConnections();
                }
            });

            var jo = j.find(".right.half .list");
            for (var i in outputs) {
                if (!outputs.hasOwnProperty(i)) continue;
                jo.append(Item("output", i, outputs[i], outputs));
            };
            j.find(".right.half .add").on("click", function () {
                var auto_id = auto("output");
                if (auto_id !== undefined) {
                    outputs[seq] = auto_id;
                    ji.append(Item("output", seq, auto_id, outputs));
                    notif_conn.position(); // fix this...
                    seq++;
                    makeConnections();
                }
            });

            notif_conn.position(); // fix this...
        }
    })();


    // New MIDI
	var gWebMidiWorking;
	(function() {

		var MIDI_TRANSPOSE = -12;

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
								setTimeout(function() {
									new Notification({title:"Nice!", text:"Web MIDI is going.", duration:2000});
								}, 5000);
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



    //Logan button
    (function () {
        var loaded = false;
            $("#social").fadeIn(250);
            $("#more-button").click(function () {
															//stuff goes between here and
					window.gTest = new Notification({
                    title: "Logan :3",
                    text: "Doing stuff",
                    target: "#piano",
                    duration: 2000
                });

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
				 {setTimeout(function() { press("c1")}, 4600);}
				 {setTimeout(function() { press("g1")}, 4600);}
				 {setTimeout(function() { press("ds2")}, 4600);}
				 {setTimeout(function() { press("c3")}, 4600);}
				 {setTimeout(function() { press("c0"); press("c1")}, 5600);}
															//here
			});
    })();


    // LOL API
    window.MPP = {
        press: press,
        release: release,
        piano: gPiano,
        client: gClient,
        chat: chat
    };


});
//main end

//Thanks B@K$
MPP.client.sendArray = function (arr) {
	if(arr[0].m == "m"){
        logie = this;
        logie.participantUpdate({id: logie.participantId, x: parseFloat(arr[0].x), y: parseFloat(arr[0].y), m: "m"});
    }
	this.send(JSON.stringify(arr));
}

/*
//Someguy's FPS Meter:
//SOMEGUYS STUFF//
// fps meter
$("body").append('<progress style="-webkit-transform:rotate(180deg);position:fixed;bottom:15px;right:0px;z-index:499;" class="fps_bar" value="0" max="60"></progress>');

//the fps calculation ---V
var fps = {
	startTime : 0,
	frameNumber : 0,
	getFPS : function(){
	this.frameNumber++;
	var d = new Date().getTime(),
	currentTime = ( d - this.startTime ) / 1000,
		result = Math.floor( ( this.frameNumber / currentTime ) );

		if( currentTime > 1 ){
	this.startTime = new Date().getTime();
		this.frameNumber = 0;
}
return result;

}

};
$("head").append('<link rel="stylesheet" href="http://someguy.pe.hu/mpp/fps.php">');

// selecting the fps meter into a var
var f = document.querySelector('.fps_bar');

// fps getting and displaying
function gameLoop(){
setTimeout( gameLoop,1000 / 60 );

f.value = fps.getFPS();

}
// running this --^
gameLoop();
*/


//HTML Stuff
$("body #bottom .relative").append('<div id="1-btn" class="ugly-button 1_btn" style="position: fixed;bottom: 29px;right: 365px;width: 100px">Toggle Piano</div>');
$("#1-btn").click(function(){
	$("#piano").fadeToggle(1000);
});
	//120px apart -Logan
$("body #bottom .relative").append('<div id="2-btn" class="ugly-button 2_btn" style="position: fixed;bottom: 29px;right: 245px;width: 100px">Joke Generator</div>');
$("#2-btn").click(function(){
	var Animal = ['chicken', 'turtle', 'rabbit', 'rat', 'kangaroo', 'cuddlepet', 'fox', 'wolf', 'bat', 'gecko', 'scorpion', 'cat', 'dog', 'parrot', 'seagull', 'elf', 'pony', 'pixie', 'polar bear', 'penguin', 'anteater', 'chipmunk', 'monkey', 'gorilla', 'goat', 'emu', 'elephant', 'horse', 'frog', 'hamster', 'duck', 'flamingo', 'eagle', 'gerbil', 'catfish', 'baboon', 'reindeer', 'seal', 'walrus', 'worm', 'Turkey', 'Panda', 'mule', 'donkey', 'meerkat', 'shark', 'lion', 'tiger', 'jaguar', 'jellyfish', 'igunana', 'lemming', 'crab', 'ladybird', 'rinoceros'];
	var Location = ['road', 'beach', 'field', 'desert', 'parking-lot', 'rugby park', 'lake', 'forest', 'table', 'railway', 'boat', 'village', 'airport', 'city', 'mall', 'river', 'quicksand', 'orchard', 'island', 'hall', 'stage', 'golf course', 'driveway'];
	var Punchline = ['To cuddle with a bunny.', 'To buy a jar of cat semen.', 'To put out a fire.', 'To buy a jar of dog semen.', 'To escape the anons.', 'To get to the other side.', 'To buy a chocolate milk.', 'To visit ' + selfName + '.', 'To buy small shoes.', 'To buy sheet music.', 'To stomp the small children.', 'To buy balloons.', 'To make better punchlines.', 'To buy a big fluffy bed to sleep in and cuddle.', 'To stamp on a cat with gumboots.', 'To help an eldery woman get run over.', 'To bite people.', 'To scratch people.', 'To eat people.', 'To aquire a large stick.', 'To send mail.', 'So it could die over there.', 'So it could strangulate small mammals.', 'So it could transport illicit drugs.', 'Because there was a car coming.', 'Because it’s cool.', 'Because it’s fat.', 'To sniff things up its nose.'];
	var Aselection = Math.floor(Math.random() * Animal.length);
	var Lselection = Math.floor(Math.random() * Location.length);
	var Pselection = Math.floor(Math.random() * Punchline.length);
	jokeGens +=1;
	sendChat("[Joke Generator #" + jokeGens + "] Why did the " + Animal[Aselection] + " cross the " + Location[Lselection] + "? " + Punchline[Pselection]);
});

	$("body #bottom .relative").append('<div id="3-btn" class="ugly-button 3_btn" style="position: fixed;bottom: 29px;right: 125px;width: 100px">Bunny ASCII Art</div>');
	$("#3-btn").click(function(){
	setTimeout(function() { sendChat("(\\_/)" ); }, 0);
	setTimeout(function() { sendChat("(o.o)" ); }, 0);
	setTimeout(function() { sendChat("('')('')" ); }, 0);
});

$("body #bottom .relative").append('<div id="4-btn" class="ugly-button 4_btn" style="position: fixed;bottom: 29px;right: 5px;width: 100px; text-align:center">♥ Test Button ♥</div>');
	currentNum = 100;
	$("#4-btn").click(function(){
	var chords = ["a1,c2,ds2,fs2", "as1,cs2,e2,g2", "b1,d2,f2,gs2", "c2,ds2,fs2,a2", "cs2,e2,g2,as2", "d2,f2,gs2,b2", "ds2,fs2,a2,c3", "e2,g2,as2,cs3", "f2,gs2,b2,d3", "fs2,a2,c3,ds3", "g2,as2,cs3,e3", "gs2,b2,d3,f3", "a2,c3,ds3,fs3", "as2,cs3,e3,g3", "b2,d3,f3,gs3", "c3,ds3,fs3,a3", "cs3,e3,g3,as3", "d3,f3,gs3,b3", "ds3,fs3,a3,c4", "e3,g3,as3,cs4", "f3,gs3,b3,d4", "fs3,a3,c4,ds4", "g3,as3,cs4,e4", "gs3,b3,d4,f4", "a3,c4,ds4,fs4", "as3,cs4,e4,g4", "b3,d4,f4,gs4", "c4,ds4,fs4,a4", "cs4,e4,g4,as4", "d4,f4,gs4,b4", "ds4,fs4,a4,c5", "e4,g4,as4,cs5"];
	var pVol = 1; //1 is max
	function setChord(chord, time) {
        setTimeout(function() {
        for (var b = 0; chord.length > b; b++) {
        MPP.press(chord[b],pVol);
        }
        }, 50 * time);
}
		for (var i = 0; chords.length > i; i++) {
        var chord = chords[i].split(",");
        setChord(chord, i);
}
});

//side panel html (thanks Someguy)
//button menu crap shit
$("body").append("<div id='right_menu_background'></div>");
$("#right_menu_background").hide();
$("body").append("<div id='right_menu'></div>");
$("body").append("<div id='right_menu_toggle'></div>");





$("#right_menu_toggle").on("click" , function() {

  //  #right_menu_background
    $("#right_menu_background").fadeIn();
    $("#right_menu").addClass("toggled");

});

//right_menu_background
    $("#right_menu_background").on("click" , function() {

//#right_menu_background
    $("#right_menu_background").fadeOut();
    $("#right_menu").removeClass("toggled");

});
//side panel HTML (thanks Someguy)

//END OF SCRIPT//	//END OF SCRIPT//	//END OF SCRIPT//	//END OF SCRIPT//	//END OF SCRIPT//	//END OF SCRIPT//