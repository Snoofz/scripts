$.getJSON("https://augustberchelmann.com/BopBot/songs.json", function() {
}).then(function(asd) {songs = asd});
var bot = true;
let indexglobal;
let sfileglobal;
midiPlayer.delay = 75;

function sendChat(msg) {
	//var color = "#0000";
	var name = "BopBot";
PianoRhythm.PianoRhythm.SOCKET.emit("chatMessage", {
                message:msg,
                bot: bot
            });
			
}
PianoRhythm.PianoRhythm.EVENT_EMITTER.on("bot_chatMessage", (data) => {
            console.log(data)
				let command_prefix = "!";

                //Custom commands
                if (data.message && data.message.indexOf(command_prefix) == 0)
                {
                    let spaceIndex = data.message.indexOf(" ");
                    let index = spaceIndex > -1 ? spaceIndex : data.message.length;
                    let command = data.message.substring(1, index);
                    let name = data.name;
					let id = data.id;
                    let message = data.message;
                    let args = data.message.substring(index, data.message.length).trim();

                    console.log("CHAT COMMAND", command, "ARGS", args);

                    switch (command.toLowerCase())
                    {
                        //Setup your command outputs here.
                        case "js":
							if (id == "52d69ac178293621611eaa59a2") {
							try {
								sendChat('> ' + eval(args));
									} catch (e) {
										sendChat('> ' + e);
									}
							} else {
								sendChat(":no_good:")
								
							}
                            break;
							case "help":
							{
								sendChat("Commands: !chat, !play (!p), !stop, !random (!r) !octave (!oct) !echo (!e) !delay (!d) !sustain");
								
								
								
							}
							break;
							case "bot":
								
							bot = !bot
							sendChat(`Botmode = ${bot}`)
							break;
							case "chat":
								
							{
								if (args === '' || args === null || args === undefined) {
									sendChat("Usage !chat sentence")
										} else {
											$.getJSON("https://api.susi.ai/susi/chat.json?q="+args, function(data){
										 if(data.answers[0] && data.answers[0].actions){
										for(var action of data.answers[0].actions){ //what is this
											if(action.type == "answer"){
												sendChat("> "+action.expression); // <-- Here, when susi says something
													return;
										}
					}	
      sendChat("> I didn't understand you, sorry.");
    }else{
      sendChat("> I didn't understand you, sorry.");
    }
  });
	}
  


}
break;
						case "play": 
						case "p": 
						
						{
						input = args;
						if (input === '') {
			
			if (midiPlayer.playing === false) {
			if (indexglobal != undefined && sfileglobal != undefined) {
			sendChat('Playing File Id: ' + indexglobal + '. Name: ' +sfileglobal+'.');
			midiPlayer.play();
			} else {
			sendChat(`Please enter something to play.`);
			
			}
			} else {
			sendChat(":x: Already Playing! :x:")
			}
												
		
		
	} else {
 
  
 

	
//BEGIN TEST Code 


//C:\Users\augus\Desktop\MPP\BopBot\mid
var path = 'mid';

//fs.readdir(path, function(err, items) {
    //console.log(items);
	var sFileToPlay = '';
	var fileIndex = 0;

	if (!isNaN(input) && Math.abs(Number.parseInt(input)) < songs.length) { 
		//the input is a number (index), so we just want to play 
		//the song at that index of the list
		sFile = songs[Math.abs(Number.parseInt(input))];
		sFileToPlay = sFile;
		
		fileIndex = Math.abs(Number.parseInt(input));
	} else {
		 //loop through the files in the directory
		 //looking for a file that matches the string "input"
		 for (var i=0; i<songs.length; i++) {
			var sFile = songs[i];
			//console.log('Inspecting '+sFile+'...');
			
if (sFile.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
				//console.log('Found one!');
				sFileToPlay = sFile;
				fileIndex = i;
				
				break;
			}
		}
	}

 	
	if (sFileToPlay.length > 0) {
		
		//sFileToPlay = sFileToPlay.replace(/(\s)/g, "+");
		var req = new XMLHttpRequest();
			req.responseType = 'arraybuffer';
			req.open('GET', "https://augustberchelmann.com/midi_files_for_bopbot/" + fileIndex + ".mid", true);
			req.onload  = function() {
			var response = req.response;
			let midiFile = new MidiFile(response);
					console.log(midiFile);
					midiPlayer.loadMidi(midiFile);
					midiPlayer.play();
					
			};
			req.send(null);
					
					
	sfileglobal = sFileToPlay;
	indexglobal = fileIndex;
	sendChat('Playing File Id: ' + fileIndex + '. Name: ' +sFileToPlay+'.');
	 
				

		
		
		
	} else {
		sendChat('Not Found');
	}
	
//});





//fs.readdir(path);
//END TEST CODE		 


	
 
}	
							
						}
							
						break;
						case "stop":
						{
							midiPlayer.pause();
							
							
							
							
						}
						break;
						case "r":
						case "random":
						{
							input = args;
							 
        //BEGIN TEST Code

//C:\Users\augus\Desktop\MPP\BopBot\mid
var path = 'mid';


    //console.log(items);
	var sFileToPlay = '';
	var fileIndex = 0;
    var numy = Math.floor(Math.random() * songs.length)
	
		
		sFile = songs[numy];
		sFileToPlay = sFile;
		
		fileIndex = numy;
	 

 	
	if (sFileToPlay.length > 0) {
		var req = new XMLHttpRequest();
			req.responseType = 'arraybuffer';
			req.open('GET', "https://augustberchelmann.com/midi_files_for_bopbot/" + numy + ".mid", true);
			req.onload  = function() {
			var response = req.response;
			let midiFile = new MidiFile(response);
					console.log(midiFile);
					midiPlayer.loadMidi(midiFile);
					midiPlayer.play();
					
			};
			req.send(null);
					
	sendChat('Playing File Id: ' + fileIndex + '. Name: ' +sFileToPlay+'.');

				

		
	} else {
		sendChat('Not Found');
	}
	







//END TEST CODE		 


	
 

		
	
							
							
							
							
						}
						break;
						case "octave":
						case "oct":
						{
							input = args;
							if (input === '') {
									switch (midiPlayer.octave) {
								case 0:
									sendChat("Octave mode enabled.");
									midiPlayer.octave = 1;
									midiPlayer.echo = 0;
									break;
								case 1: // fallthrough is weird
								case 2:
								case 3:
								case 4:
									sendChat("Octave mode disabled.");
									midiPlayer.octave = 0;
									break;
								default:
									if (input > 4) {
									octmode = 4;
									 sendChat('Echo Multinotes: 4')
									} else {
										sendChat('Echo Multinotes: 0')
										midiPlayer.echo = 0;
									}
							}
								  } else {   
							   
							if (!isNaN(Math.abs(Number.parseInt(input)))) {	  	  
							 if (input == '0') {
							 
							midiPlayer.octave = 0; 
							 
							 sendChat('Number of Octaves: 0.')
							 
							 }
							 
							 if (input == '1') {
								 
							midiPlayer.octave = 1; 
							midiPlayer.echo = 0;
							
							 sendChat('Number of Octaves: 1.')
							 
							 }
							if (input == '2') {
								 
							midiPlayer.octave = 2; 
							midiPlayer.echo = 0;
							 
							 sendChat('Number of Octaves: 2.')
							 
							 } 
							if (input == '3') {
								 
							midiPlayer.octave = 3; 
							midiPlayer.echo = 0;
							 
							 sendChat('Number of Octaves: 3.')
							 
							 } 
							if (input >= '4') {
								 
							midiPlayer.octave = 4; 
							midiPlayer.echo = 0;
							 
							 sendChat('Number of Octaves: 4.')
							 
							 } 
							 
							
								  } else {
									sendChat(":x: Only type in Numbers! :x:");	

								  }								  
							}
							
							
							
						}
						break;
						case "echo":
						case "e":
						case "mn":
						case "multinote":
						{
							input = args;
							
							if (input === '') {
									switch (midiPlayer.echo) {
								case 0:
									sendChat("Echo mode enabled.");
									midiPlayer.echo = 1;
									midiPlayer.octave = 0; 
									break;
								case 1: // fallthrough is weird
								case 2:
								case 3:
								case 4:
									sendChat("Echo mode disabled.");
									midiPlayer.echo = 0;
									break;
								default:
									if (input > 4) {
									octmode = 4;
									 sendChat('Echo Multinotes: 4')
									} else {
										sendChat('Echo Multinotes: 0')
										midiPlayer.echo = 0;
									}
							}
								  } else {   
							   
							if (!isNaN(Math.abs(Number.parseInt(input)))) {	  
							 if (input == '0') {
							 
							midiPlayer.echo = 0; 
							 
							 sendChat('Echo mode disabled.')
							 
							 }
							 
							 if (input == '1') {
								 
							midiPlayer.echo = 1; 
							midiPlayer.octave = 0; 
							 
							 sendChat('Echo Multinotes: 1')
							 
							 }
							if (input == '2') {
								 
							midiPlayer.echo = 2; 
							 midiPlayer.octave = 0; 
							 
							 sendChat('Echo Multinotes: 2')
							 
							 } 
							if (input == '3') {
								 
							midiPlayer.echo = 3; 
							 midiPlayer.octave = 0; 
							 
							 sendChat('Echo Multinotes: 3')
							 
							 } 
							if (input >= '4') {
								 
							midiPlayer.echo = 4; 
							 midiPlayer.octave = 0; 
							 
							 sendChat('Echo Multinotes: 4')
							 
							 } 
							 

								     
							
							} else {
								sendChat(":x: Only type in Numbers! :x:");	
							}
							
								  }
						}
						break;
						case "delay":
						case "d":
						{
							
							input = args;
							if (input == '') {
								
								sendChat("Current multinote delay: " + midiPlayer.delay);
							} else {
							if (!isNaN(Math.abs(Number.parseInt(input)))) {
							let delay = Math.abs(Number.parseInt(input));
							if(delay >= 1000) {
							delay = 200	
							}
							if (delay <= 0) {
								
							delay = 0;	
							}
							midiPlayer.delay = delay;
							sendChat("Echo multinote delay: " + delay)
							
							} else {
							sendChat(":x: Only type in Numbers! :x:");	
							}
							}
						}
						break;
						case "sustain":
						{
														switch (midiPlayer.sustain) {
								case false:
									sendChat("Sustain enabled");
									midiPlayer.sustain = true;
									break;
								case true: // fallthrough is weird
									sendChat("Sustain disabled");
									midiPlayer.sustain = false;
									break;
								default:
									throw new RangeError("Wait, what? octmode not 0-4");
							}
														
							
							
						}
						break;
                    }

                }
		
      
    
	
  
});
	