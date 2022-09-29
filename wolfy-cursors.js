let speed = 1.1; // 0.1
let fooo = -.02; // -.02
let step = fooo * Math.PI / 20;
let theta = 2; // 2
let radius = 16; // Default: 16
//let spaceX = -1;
let spaceX = 2; // 2
let spaceY = 2;             // 2
let interval = 75; //75

function circle() {
    try {
    /*
    if (!p) {
        clearInterval(circling);
        circlingstarted = false;
        setTimeout(function () {
            moveBotsTo(50, 15);
        }, 2000);
        return;
    }
    */

    circlingstarted = true;
    if (followPlayer == true){
        //console.log(`Following player...`);
        var x = p.x;
        var y = p.y;
    } else {
        var x = 50;
        var y = 50;
        //console.log(`Animation at: ${x}, ${y} ...`);
    }
    var speedX = -100;
    var speedY = -100;
    var add = 1;
    for (let d = 0; d < clients.length; d++) {
        clients[d].moveMouse(x + (spaceX * 4) / clients.length * ),
                             y + (Math.cos(spaceY * Math.PI / clients.length * d + theta) * radius));
                             //clients[d].say("Stop spam bald lady :/")
        theta += step;
    }
    //i = i + speed;
} catch (e){}
}