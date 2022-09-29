// ==UserScript==
// @name         BallOnString.js
// @namespace    http://meowbin.com/BallOnString.js
// @version      1
// @description  Turn MPP cursor into Ball on String
// @author       electrashave
// @match        http://www.multiplayerpiano.com/*
// @match        http://mpp-evolution.com/*
// @match        http://cursors.me/piano/*
// @grant        none
// ==/UserScript==
var mass = 100;
var gravity = 5;
var friction = 4;
var pos = {x: 50, y: 50};
var pos2 = {x: 50, y: 50};
var acc = {x: 0, y: 0};
var vel = {x: 0, y: 0};
var follower = "7504f8a8bb9e7c39ddbcbd27";
var followPos = {x: 50, y: 50};
MPP.client.on("m", function(msg) {
    var part = MPP.client.findParticipantById(msg.id);
    if (part._id == MPP.client.user._id) return;
    followPos.x = +msg.x;
    followPos.y = +msg.y;
});
var updateInt = setInterval(function() {
    pos2.x = followPos.x;
    pos2.y = followPos.y;
    acc.x = ((pos2.x-pos.x) - (friction*vel.x))/mass;
    acc.y = ((pos2.y-pos.y) - (friction*vel.y) + gravity)/mass;
    vel.x += acc.x;
    vel.y += acc.y;
    pos.x += vel.x;
    pos.y += vel.y;
    MPP.client.sendArray([{m: "m", x: MPP.client.getOwnParticipant().x = pos.x, y: MPP.client.getOwnParticipant().y = pos.y}]);
}, 15);