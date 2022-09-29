// ==UserScript==
// @name         Animated Name
// @namespace    ledlamp89@gmail.com
// @version      1
// @description  Automatically changes your name in MPP
// @author       Atlas
// @include      http://www.multiplayerpiano.com/*
// @include      http://mpp-evolution.com/*
// @include      http://custommpp.xyz/*
// @include      http://cursors.me/piano/*
// @include      http://yourworldofpixels.com/piano/*
// @include      http://www.ourworldofpixels.com/piano/
// @grant        none
// ==/UserScript==
  //NameChange
    if (typeof(done) === "undefined") {
        var selfName = ""; // <-- your name here! Leave blank if you want it to not count your name
        var foo = 0;
        var toggle = false;
        var done = true;
        var counter = -1;
        function updateName(name) {
            MPP.client.sendArray([{
                m: "userset",
                set: {
                    name: name
                }
            }]);
        }
         var nameschar = ["bop it","Bop It", "BOP IT"]; // put the names to cycle through, here
    $(".relative").append('<div id="toggle-btn" class="ugly-button toggle-btn" style="position: fixed;bottom: 200px;right:295px;width: 90px;color: red;colo"r: blue;">NameChange</div>'); //ugle = text button|ugly = looks like a button //class="toggle-btn" = text|class="ugly-button toggle-btn" = button
        $("#toggle-btn").click(function() {
            if (toggle) {
                clearInterval(foo);
            } else {
                MPP.chat.send("Animated name on");
                foo = setInterval(function() {
                    if (counter < nameschar.length - 1) {
                        counter++;
                        updateName(`${selfName} ${nameschar[counter]}`);
                    } else {
                        counter = 0;
                        updateName(`${selfName} ${nameschar[counter]}`);
                    }
                }, 2050);
            }
            toggle = !toggle;
        });
        if (toggle) foo = setInterval(function() {
            if (counter < nameschar.length - 1) {
                counter++;
                updateName(`${selfName} ${nameschar[counter]}`);
            } else {
                counter = 0;
                updateName(`${selfName} ${nameschar[counter]}`);
            }
        }, 2050); //Default 2100 It changes the speed! I noticed 2050 is the fasted without it skipping!
    } else {
        console.info("==You already pasted this!==\nReload the page and paste again if you'd like to see any changes you made to the script.");
    }

    /*/  //ok ima give u all the code that makes it work
-
    };/*/

    ////////////////////////////////////////////////////////////////