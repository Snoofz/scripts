$.getJSON("https://augustberchelmann.com/BopBot/songs.json", function() {
}).then(function(asd) {songs = asd});
var bot = true;
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
								sendChat("Commands: !chat, !play (!p), !stop, !random (!r)");
								
								
								
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
			console.log('Inspecting '+sFile+'...');
			
if (sFile.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
				console.log('Found one!');
				sFileToPlay = sFile;
				fileIndex = i;
				
				break;
			}
		}
	}

 	
	if (sFileToPlay.length > 0) {
		
		//sFileToPlay = sFileToPlay.replace(/(\s)/g, "+");
				PianoRhythm.PianoRhythm.PLAYER.loadFile_Play("https://augustberchelmann.com/midi_files_for_bopbot/" + fileIndex + ".mid")

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
							PianoRhythm.PianoRhythm.PLAYER.pause()
							
							
							
							
						}
						break;
						case "r":
						case "random":
						{
							input = args;
							 
   if (input === '') {
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
		
		//sFileToPlay = sFileToPlay.replace(/(\s)/g, "+");
				PianoRhythm.PianoRhythm.PLAYER.loadFile_Play("https://augustberchelmann.com/midi_files_for_bopbot/" + fileIndex + ".mid")

	sendChat('Playing File Id: ' + fileIndex + '. Name: ' +sFileToPlay+'.');

				

		
	} else {
		sendChat('Not Found');
	}
	







//END TEST CODE		 


	
 

		
	} else {
 
  sendChat('This command doesn\'t require any input');   
 
	}
							
							
							
							
						}
						break;
                    }

                }
		
      
    
	
  
});
	