function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
window.f = 0;

  //  a = BOTSLICE * i + f;
(async function dcursor() {
  while(true) {
for (var i of PianoRhythm.PianoRhythm.uSeRs.list) {
      if (i.socketID != PianoRhythm.PianoRhythm.CLIENT.socketID) {
        for(var t = 0; t < 2 * Math.PI; t += Math.PI / 36) {
            let scale = (2 / (3 - Math.cos(2*t))) * 10;
            let x = (scale * Math.cos(t));
            let y = (scale * Math.sin(2*t) / 2);
      PianoRhythm.PianoRhythm.mouseChannel.publish({
                                mX: (x + 50),
                                mY: (y + 75),
                                type: "pos",
                                id: i.id,
                                socketID: i.socketID
                            });
                              await sleep(50);
                          }
                        }
                         //console.log(Math.round(clientpos.x + (Math.cos(2 * Math.PI / BOTS * tonq + f))) + " , " +  Math.round(clientpos.y + (Math.sin(2 * Math.PI / BOTS * tonq + f))))
                        //console.log(i.id + i.socketID)
                        }


}

})();
