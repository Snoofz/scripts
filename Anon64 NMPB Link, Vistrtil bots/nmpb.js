//throw new Error("f u k !")
var atob = require('b2a').atob;
var btoa = require('b2a').btoa;
var fs = require('fs');
var readline = require('readline');
var gClient = require('mpp-client');
var speedTest = require('speedtest-net');
var MPP = require('anon64-mpp');
let linkv = '0.2.4';
let ofo = false;
let NMPB = gClient;
let gEndpoint = 'ws://multiplayerpiano.com';
let players = 50;
let gRoom = 'RETARDS TEST SOME SHITTY BOTS';
let nroom = 'NMPBlink5';
let OWOPmode = false;
let pName = 'ProxyPlayer';
let NMPBOWOP = true;
let nmpbname = 'Clyde';
let notecounter = 0;
let fire = false;
let result = '---------';
let testing = false;
let themode = false;
let tobebanned = {};
let vbanned = [];
let sure = [];
let vball = 4;
let oof = false;
let isMouseing = true;
let chatturn = 0;
let cmdChar = '>';
let nmpbchar = '/';
let anon64 = 'd55bf273f64f37c5691f3bbb';
let op = [
	'd55bf273f64f37c5691f3bbb',
	'63ce4e6b86780ae23e04a5b8',
	'29f3d649cb0e8de2156d1508'
];
let lolchat = [];
//~js n = 0;oof = setInterval(function(){ttp(`${n++}`)},1000)
let nmpbmsg = 'That is not possible >:C';
let FW = false;
let sust = false;
let numx = 5;
let numy = 5;
let main = 1;
let back = 0;
let backarr = [0];
let crazy = false;
let wtf = true;
let wtname = '\u034f@';
let nlist = [];
let snake = false;
let letters = {
	'-': [
		['0', '0', '0', '0', '0', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	'0': [
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '1', '1', '1', '0'],
		['0', '1', '1', '1', '1', '1', '1', '0'],
		['0', '1', '1', '1', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	'1': [
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '1', '1', '1', '0', '0', '0'],
		['0', '1', '1', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	'2': [
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '1', '1', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '1', '1', '0', '0', '0', '0'],
		['0', '1', '1', '1', '1', '1', '1', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	'3': [
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	'4': [
		['0', '0', '0', '1', '1', '1', '0', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '1', '1', '0', '0'],
		['1', '1', '0', '0', '1', '1', '0', '0'],
		['1', '1', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '1', '1', '0', '0'],
		['0', '0', '0', '0', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	'5': [
		['0', '1', '1', '1', '1', '1', '1', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	'6': [
		['0', '0', '0', '1', '1', '1', '0', '0'],
		['0', '0', '1', '1', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	'7': [
		['0', '1', '1', '1', '1', '1', '1', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '1', '1', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	'8': [
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	'9': [
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '1', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '1', '1', '0', '0'],
		['0', '0', '1', '1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	A: [
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '1', '1', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0']
	],
	B: [
		['0', '1', '1', '1', '1', '1', '1', '0'],
		['0', '1', '1', '0', '0', '0', '1', '1'],
		['0', '1', '1', '0', '0', '0', '1', '1'],
		['0', '1', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '1', '1', '1', '1', '1'],
		['0', '1', '1', '0', '0', '0', '1', '1'],
		['0', '1', '1', '0', '0', '0', '1', '1'],
		['0', '1', '1', '1', '1', '1', '1', '0']
	],
	C: [
		['0', '0', '0', '1', '1', '1', '1', '1'],
		['0', '0', '1', '1', '0', '0', '0', '0'],
		['1', '1', '1', '0', '0', '0', '0', '0'],
		['1', '1', '0', '0', '0', '0', '0', '0'],
		['1', '1', '0', '0', '0', '0', '0', '0'],
		['1', '1', '1', '0', '0', '0', '0', '0'],
		['0', '0', '1', '1', '0', '0', '0', '0'],
		['0', '0', '0', '1', '1', '1', '1', '1']
	],
	D: [
		['0', '1', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '0', '1', '0'],
		['0', '1', '1', '0', '0', '0', '1', '0'],
		['0', '1', '1', '0', '0', '0', '1', '0'],
		['0', '1', '1', '0', '0', '0', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '1', '1', '1', '0', '0']
	],
	E: [
		['0', '1', '1', '1', '1', '1', '1', '0'],
		['0', '1', '0', '0', '0', '0', '0', '0'],
		['0', '1', '0', '0', '0', '0', '0', '0'],
		['0', '1', '1', '1', '1', '0', '0', '0'],
		['0', '1', '0', '0', '0', '0', '0', '0'],
		['0', '1', '0', '0', '0', '0', '0', '0'],
		['0', '1', '0', '0', '0', '0', '0', '0'],
		['0', '1', '1', '1', '1', '1', '1', '0']
	],
	F: [
		['0', '1', '1', '1', '1', '1', '1', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '1', '1', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0']
	],
	G: [
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '1', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '1', '0']
	],
	H: [
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '1', '1', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0']
	],
	I: [
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0']
	],
	J: [
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0']
	],
	K: [
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['1', '1', '0', '0', '1', '1', '0', '0'],
		['1', '1', '0', '1', '1', '0', '0', '0'],
		['1', '1', '1', '1', '0', '0', '0', '0'],
		['1', '1', '1', '1', '0', '0', '0', '0'],
		['1', '1', '0', '1', '1', '0', '0', '0'],
		['1', '1', '0', '0', '1', '1', '0', '0'],
		['1', '1', '0', '0', '0', '1', '1', '0']
	],
	L: [
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '1', '1', '1', '1', '0']
	],
	M: [
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['1', '1', '1', '0', '1', '1', '1', '0'],
		['1', '1', '1', '1', '1', '1', '1', '0'],
		['1', '1', '0', '1', '0', '1', '1', '0'],
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['1', '1', '0', '0', '0', '1', '1', '0']
	],
	N: [
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['1', '1', '1', '0', '0', '1', '1', '0'],
		['1', '1', '1', '1', '0', '1', '1', '0'],
		['1', '1', '0', '1', '1', '1', '1', '0'],
		['1', '1', '0', '0', '1', '1', '1', '0'],
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['1', '1', '0', '0', '0', '1', '1', '0']
	],
	O: [
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	P: [
		['0', '1', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	Q: [
		['0', '1', '1', '1', '1', '0', '0', '0'],
		['1', '1', '0', '0', '1', '1', '0', '0'],
		['1', '1', '0', '0', '1', '1', '0', '0'],
		['1', '1', '0', '0', '1', '1', '0', '0'],
		['1', '1', '0', '0', '1', '1', '0', '0'],
		['1', '1', '0', '1', '1', '1', '0', '0'],
		['1', '1', '1', '1', '1', '1', '1', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	R: [
		['0', '1', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	S: [
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '1', '0', '0', '0', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '1', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	T: [
		['0', '1', '1', '1', '1', '1', '1', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	U: [
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	V: [
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	W: [
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['1', '1', '0', '1', '0', '1', '1', '0'],
		['1', '1', '1', '1', '1', '1', '1', '0'],
		['1', '1', '1', '0', '1', '1', '1', '0'],
		['1', '1', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	X: [
		['1', '1', '0', '0', '0', '0', '1', '1'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['1', '1', '0', '0', '0', '0', '1', '1'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	Y: [
		['1', '1', '0', '0', '0', '0', '1', '1'],
		['0', '1', '1', '0', '0', '1', '1', '0'],
		['0', '0', '1', '1', '1', '1', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	Z: [
		['1', '1', '1', '1', '1', '1', '1', '0'],
		['0', '0', '0', '0', '1', '1', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '1', '1', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['1', '1', '0', '0', '0', '0', '0', '0'],
		['1', '1', '1', '1', '1', '1', '1', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	':': [
		['0', '0', '0', '0', '0', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	],
	'/': [
		['0', '0', '0', '0', '0', '0', '1', '1'],
		['0', '0', '0', '0', '0', '1', '1', '0'],
		['0', '0', '0', '0', '1', '1', '0', '0'],
		['0', '0', '0', '1', '1', '0', '0', '0'],
		['0', '0', '1', '1', '0', '0', '0', '0'],
		['0', '1', '1', '0', '0', '0', '0', '0'],
		['1', '1', '0', '0', '0', '0', '0', '0'],
		['0', '0', '0', '0', '0', '0', '0', '0']
	]
};
let placed = 0;
let diagonal = true;
////////////// PONG ///////////////
let ballARR = [];
let ballamn = 0;
let gravity = true;
let drag = true;
let loop = false;
let collision = false;
function h() {
	ballARR.forEach(ball => {
		ball.vel.x *= 100;
		ball.vel.y *= 100;
	});
}

function ball(x, y, id, radius) {
	this.id = id;
	this.bounce = 1;
	this.mass = this.radius * this.radius * this.radius;
	this.pos = {
		x,
		y
	};
	this.vel = {
		x: 1,
		y: 1
	};
	this.speed = function() {
		// magnitude of velocity vector
		return Math.sqrt(this.vel.x * this.vel.x + this.vel.y * this.vel.y);
	};
	this.angle = function() {
		return Math.atan2(this.vel.y, this.vel.x);
	};
	this.onGround = function() {
		return this.pos.y + this.radius >= 100;
	};
	this.radius = radius;
}

function addBall(
	x = Math.floor(Math.random() * 100),
	y = Math.floor(Math.random() * 100),
	id = ballamn,
	radius = 1
) {
	ballARR.push(new ball(x, y, id, radius));
	ballamn = ballARR.length;
}

function distanceNextFrame(a, b) {
	return (
		Math.sqrt(
			(a.pos.x + a.vel.x - b.pos.x - b.vel.x) ** 2 +
				(a.pos.y + a.vel.y - b.pos.y - b.vel.y) ** 2
		) -
		a.radius -
		b.radius
	);
}

function prender() {
	ballARR.forEach(ball => {
		if (gravity) {
			if (ball.onGround() === false) {
				ball.vel.y += 0.29;
			}
		}
		if (drag) {
			ball.vel.x *= 0.99;
			ball.vel.y *= 0.99;
		}
		if (isNaN(ball.mass)) {
			ball.mass = ball.radius * ball.radius * ball.radius;
			ball.pos = {
				x: 50,
				y: 50
			};
			ball.vel = {
				x: 0,
				y: 0
			};
		}
		if (collision) {
			ballARR.forEach(ball2 => {
				if (ball !== ball2 && distanceNextFrame(ball, ball2) <= 0) {
					let theta1 = ball.angle();
					let theta2 = ball2.angle();
					//console.log(ball)
					//console.log(ball2)
					let phi = Math.atan2(
						ball2.pos.y - ball.pos.y,
						ball2.pos.x - ball.pos.x
					);
					let m1 = ball.mass;
					let m2 = ball2.mass;
					let v1 = ball.speed();
					let v2 = ball2.speed();

					//console.log(theta1, theta2, phi, m1, m2, v1, v2)
					let dx1F =
						(v1 * Math.cos(theta1 - phi) * (m1 - m2) +
							2 * m2 * v2 * Math.cos(theta2 - phi)) /
							(m1 + m2) *
							Math.cos(phi) +
						v1 * Math.sin(theta1 - phi) * Math.cos(phi + Math.PI / 2);
					let dy1F =
						(v1 * Math.cos(theta1 - phi) * (m1 - m2) +
							2 * m2 * v2 * Math.cos(theta2 - phi)) /
							(m1 + m2) *
							Math.sin(phi) +
						v1 * Math.sin(theta1 - phi) * Math.sin(phi + Math.PI / 2);
					let dx2F =
						(v2 * Math.cos(theta2 - phi) * (m2 - m1) +
							2 * m1 * v1 * Math.cos(theta1 - phi)) /
							(m1 + m2) *
							Math.cos(phi) +
						v2 * Math.sin(theta2 - phi) * Math.cos(phi + Math.PI / 2);
					let dy2F =
						(v2 * Math.cos(theta2 - phi) * (m2 - m1) +
							2 * m1 * v1 * Math.cos(theta1 - phi)) /
							(m1 + m2) *
							Math.sin(phi) +
						v2 * Math.sin(theta2 - phi) * Math.sin(phi + Math.PI / 2);
					//console.log(dx1F,dy1F,dx2F,dy2F)
					ball.vel.x = dx1F * 0.95;
					ball.vel.y = dy1F * 0.95;
					ball2.vel.x = dx2F * 0.95;
					ball2.vel.y = dy2F * 0.95;
				}
			});
		}
		if (loop) {
			if (ball.pos.x < 0) ball.pos.x = 100;
			if (ball.pos.x > 100) ball.pos.x = 0;
			if (ball.pos.y < 0) ball.pos.y = 100;
			if (ball.pos.y > 100) ball.pos.y = 0;
		} else {
			if (
				ball.pos.x - ball.radius + ball.vel.x < 0 ||
				ball.pos.x + ball.radius + ball.vel.x > 100
			) {
				ball.vel.x *= -1;
			}
			if (
				ball.pos.y - ball.radius + ball.vel.y < 0 ||
				ball.pos.y + ball.radius + ball.vel.y > 100
			) {
				ball.vel.y *= -1;
			}
		}
		sockObj[ball.id].sendArray([
			{
				m: 'm',
				x: (ball.pos.x += ball.vel.x),
				y: (ball.pos.y += ball.vel.y)
			}
		]);
	});
	setTimeout(prender, 50);
}

function pstart() {
	prender();
}
////end////
function distance(x1, y1, x2, y2) {
	return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function pt(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') return false;
	return Math.sqrt(x * x + y * y);
}

function cvel(p1, p2) {
	return pt(Math.abs(p2.x - p1.x), Math.abs(p2.y - p1.y)).toFixed(2);
}
let parea = {
	ground: 10,
	gravity: 2
};

function isCollide(a, b) {
	return !(
		a.y + a.height < b.y ||
		a.y > b.y + b.height ||
		a.x + a.width < b.x ||
		a.x > b.x + b.width
	);
}
hist = [];

function place(x, y, amn = 1) {
	hist.unshift({
		x,
		y
	});
	hist = hist.slice(0, 100);
	for (i = 0; i < amn; i++) {
		try {
			sockObj[i].sendArray([
				{
					m: 'm',
					x: hist[i].x,
					y: hist[i].y
				}
			]);
		} catch (e) {}
	}
}
/*function place(x, y, amn, cs = false) {
  sockObj[placed].sendArray([{
    m: "m",
    x: x,
    y: y
  }]);
  if (cs) {
    placed = (placed + 1) % amn
    for (i = amn; i < sockObj.length - 1; i++) {
      sockObj[i].sendArray([{
        m: "m",
        x: 200,
        y: 200
      }]);
    }
  } else {
    placed = (placed + 1) % sockObj.length
  }
}
*/
let bot = {
	target: {
		x: 50,
		y: 50
	},
	pos: {
		x: 0,
		y: 0
	},
	width: 3,
	height: 3,
	speed: 1,
	dir: 'down',
	moving: false,
	amn: 1,
	lmult: 1,
	curr: null,
	points: -1,
	cool: 500,
	banids: []
};
let dirmap = {
	up: {
		x: 0,
		y: -2
	},
	right: {
		x: 1,
		y: 0
	},
	down: {
		x: 0,
		y: 2
	},
	left: {
		x: -1,
		y: 0
	}
};
let food = {
	x: 50,
	y: 50,
	width: 3,
	height: 3
};
let cooldown = false;

function randomF() {
	let fl = sockObj.length - 1;
	let rx = parseInt(Math.floor(Math.random() * 85) + 15);
	let ry = parseInt(Math.floor(Math.random() * 85) + 15);
	sockObj[fl].sendArray([
		{
			m: 'm',
			x: rx,
			y: ry
		}
	]);
	sockObj[fl].sendArray([
		{
			m: 'userset',
			set: {
				name: `[F] Pts: ${(bot.points += 1)} /help`
			}
		}
	]);
	food.x = rx;
	food.y = ry;
	cooldown = true;
	setTimeout(() => {
		cooldown = false;
	}, bot.cool);
}

function sstart() {
	isMouseing = true;
	snake = true;
	randomF();
	path();
	sockObj[0].on('n', msg => {
		if (msg.p != bot.curr) return;
		if (msg.n[0].s != 1)
			switch (msg.n[0].n.replace(/[0-9]/g, '')) {
				case 'ds':
					if (bot.dir == 'down') break;
					bot.dir = 'up';
					break;
				case 'd':
					if (bot.dir == 'right') break;
					bot.dir = 'left';
					break;
				case 'e':
					if (bot.dir == 'up') break;
					bot.dir = 'down';
					break;
				case 'f':
					if (bot.dir == 'left') break;
					bot.dir = 'right';
					break;
				default:
					break;
			}
	});
	sockObj[0].on('a', msg => {
		let cmdChar = '/';
		let isAdmin = false;
		let args = msg.a.split(' ');
		let cmd = args[0];
		let input = msg.a.substring(cmd.length).trim();
		if (op.includes(msg.p._id)) isAdmin = true;
		if (cmd == `${cmdChar}js`) {
			if (isAdmin) {
				try {
					chat(`Console: ${eval(input)}`);
				} catch (err) {
					chat(`${err}`);
				}
			}
		} else if (cmd == `${cmdChar}help`) {
			chat(
				`Commands: ${cmdChar}help, ${cmdChar}c, ${cmdChar}about, ${cmdChar}controls, ${cmdChar}exit`
			);
		} else if (cmd == `${cmdChar}about`) {
			chat(`MPP Snake - Anon64 v0.0.2`);
		} else if (cmd == `${cmdChar}c`) {
			if (bot.banids.includes(msg.p._id)) return;
			if (msg.p.id == bot.curr) {
				chat(`You already have control over the snake, ${msg.p.name}`);
				return;
			}
			bot.curr = msg.p.id;
			chat(
				`You now have control over the snake, ${
					msg.p.name
				}, use ${cmdChar}controls if you don't know them`
			);
		} else if (cmd == `${cmdChar}controls`) {
			chat(
				`Controls: Use G V B N to control your snake. G - UP, V - LEFT, B - DOWN, N - RIGHT. @ is your snake and [F] is the food. Use /c to take control of the snake.`
			);
		} else if (cmd == `${cmdChar}exit`) {
			if (bot.curr == null || bot.curr != msg.p.id) {
				chat(`You do not have control of the snake, ${msg.p.name}`);
				return;
			}
			bot.curr = null;
			chat(`Snake AI now playing.`);
		}
	});
	chat(`Starting MPP Snake - Anon64 v0.0.2`);
}

function set() {
	sockObj.forEach(bot => {
		bot.sendArray([
			{
				m: 'm',
				x: 0,
				y: 0
			}
		]);
	});
}
//>js sockObj[0].on('a', msg => { if (msg.a == '>left') { bot.dir = 'left'; } else if (msg.a == '>right') { bot.dir = 'right'; } else if (msg.a == '>up') { bot.dir = 'up'; } else if (msg.a == '>down') { bot.dir = 'down' }});
//>js oof = setInterval(function(){var b = getUser("Anon64");bot.target.x = Math.floor(b.x);bot.target.y = Math.floor(b.y);},250)
function render() {
	if (snake) {
		if (bot.curr == null) {
			if (food.x != bot.pos.x) {
				if (food.x - bot.pos.x <= 0) {
					mx = -0.5;
				} else {
					mx = 0.5;
				}
			} else {
				mx = 0;
			}
			if (food.y != bot.pos.y) {
				if (food.y - bot.pos.y <= 0) {
					my = -1;
				} else {
					my = 1;
				}
			} else {
				my = 0;
			}
		}
		if (bot.pos.x < 0) bot.pos.x = 100;
		if (bot.pos.x > 100) bot.pos.x = 0;
		if (bot.pos.y < 0) bot.pos.y = 100;
		if (bot.pos.y > 100) bot.pos.y = 0;
		let s = {
			x: bot.pos.x,
			y: bot.pos.y,
			width: bot.width,
			height: bot.height
		};
		let f = {
			x: food.x,
			y: food.y,
			width: food.width,
			height: food.height
		};
		if (isCollide(s, f)) {
			if (cooldown) {
			} else {
				randomF();
				if (bot.amn >= sockObj.length - 1) {
				} else {
					bot.amn++;
				}
			}
		}
		if (bot.curr == null) {
			if (diagonal) {
				place(
					(bot.pos.x += mx * bot.lmult),
					(bot.pos.y += my * bot.lmult),
					bot.amn,
					true
				);
			} else {
				if (bot.pos.x == food.x) {
					place(bot.pos.x, (bot.pos.y += my), bot.amn, true);
				} else {
					if (bot.pos.y == food.y) return;
					place((bot.pos.x += mx), bot.pos.y, bot.amn, true);
				}
				/*if (Math.floor(Math.random() * 2) == 1) {
          if (bot.pos.x == food.x) return;
          place(bot.pos.x += mx, bot.pos.y, bot.amn, true)
        } else {
          if (bot.pos.y == food.y) return;
          place(bot.pos.x, bot.pos.y += my, bot.amn, true)
        }
        */
			}
		} else {
			place(
				(bot.pos.x += dirmap[bot.dir].x * bot.lmult),
				(bot.pos.y += dirmap[bot.dir].y * bot.lmult),
				bot.amn,
				true
			);
		}
	} else {
		if (bot.target.x - bot.pos.x <= 0) {
			mx = -1;
		} else {
			mx = 1;
		}
		if (bot.target.y - bot.pos.y <= 0) {
			my = -2;
		} else {
			my = 2;
		}
		//console.log(bot.pos.x + mx, bot.pos.y + my)
		if (Math.floor(Math.random() * 2) == 1) {
			if (bot.pos.x == bot.target.x) return;
			place((bot.pos.x += mx), bot.pos.y);
		} else {
			if (bot.pos.y == bot.target.y) return;
			place(bot.pos.x, (bot.pos.y += my));
		}
	}
	setTimeout(() => {
		render();
	}, 50 / bot.speed);
}

function path(x = 50, y = 50) {
	if (bot.moving) return;
	bot.moving = true;
	bot.target = {
		x,
		y
	};
	render();
}

function extflag(str) {
	let out = [];
	let split = str.split('-');
	for (let i = 1; i < split.length; i++) {
		let thing = split[i];
		let flag = thing.slice(0, 2).trim();
		let inp = thing.slice(2).trim();
		out.push(JSON.parse(`{\"${flag}\":\"${inp}\"}`));
	}
	return out;
}

function addKey(note, oct) {
	nlist.push(note + oct);
}
addKey('a', -1);
addKey('b', -1);
let notes = 'c d e f g a b'.split(' ');
for (let oct = 0; oct < 7; oct++) {
	for (var i in notes) {
		addKey(notes[i], oct);
	}
}
addKey('c', 7);
tpt = 0;

function tp(cd = null, offset = 0) {
	if (cd === null) return;
	cd.reverse().forEach((part, numb) => {
		setTimeout(() => {
			part.forEach((who, num) => {
				if (who != 1) {
					if (crazy) {
						tpt = backarr[Math.floor(Math.random() * backarr.length)];
						sockObj[tpt].sendArray([
							{
								m: 'n',
								t: Date.now() + 500,
								n: [
									{
										n: nlist[num + offset * part.length],
										v: 0.00001
									}
								]
							}
						]);
					} else {
						/*var back2 = (back+num) %sockObj.length;
            if(back2===main) back2 = (back+num) % sockObj.length;
            */
						sockObj[back].sendArray([
							{
								m: 'n',
								t: Date.now() + 500,
								n: [
									{
										n: nlist[num + offset * part.length],
										v: 0.00001
									}
								]
							}
						]);
					}
				} else {
					sockObj[main].sendArray([
						{
							m: 'n',
							t: Date.now() + 500,
							n: [
								{
									n: nlist[num + offset * part.length],
									v: 0.00001
								}
							]
						}
					]);
				}
			});
		}, numb * 50);
	});
	cd.reverse();
}

function ttp(string = '') {
	inp = string.toUpperCase().split('');
	inp.forEach((char, num) => {
		tp(letters[char], num);
	});
}

function randNum(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function maxvel() {
	if (Tvel) {
		Tvel = false;
		return 'Max volume is enabled';
	} else {
		Tvel = true;
		return 'Max volume is disabled';
	}
}

function doloop() {
	if (loop) {
		loop = false;
		return 'Loop is disabled';
	} else {
		loop = true;
		return 'Loop is enabled';
	}
}

function velocity(vol) {
	if (isNaN(vol) || vol === '') return `Current volume: ${vel}`;

	let v = Math.max(Math.min(vol, 3), 0.01);
	vel = v;
	return `Volume set to: ${v}.`;
}

function counter(cnt) {
	if (isNaN(cnt) || cnt === '') return `Nextcount: ${nextcount}`;

	let nx = Math.max(Math.min(cnt, 200), 1);
	if (nx == 1) {
		next = false;
		return 'Nextcount disabled.';
	} else {
		nextcount = nx;
		next = true;
		return `Nextcount set to: ${nx}.`;
	}
}
makeId = (chars = 5) => {
	let text = '';
	let possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < chars; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
};

function gentext(num = 20) {
	try {
		return btoa(atob(btoa(makeId(randNum(5, 10)))));
	} catch (e) {
		return '\u034f';
	}
}

function nhere(user) {
	let here = false;
	Object.keys(tobebanned).forEach(ppl => {
		if (ppl == user) {
			here = true;
		}
	});
	return here;
}
let warn = [];

function fake() {
	names = [];
	Object.keys(MPP.client.ppl).forEach(wut => {
		cl = MPP.client.ppl[wut];
		if (cl.name.startsWith('\u034f')) names.push(cl.name);
	});
	Object.keys(MPP.client.ppl).forEach(wut => {
		cl = MPP.client.ppl[wut];
		if (cl.name.startsWith('\u034f')) return;
		if (
			cl.name.toLowerCase().includes('proxyplayer') &&
			!vbanned.includes(cl._id)
		) {
			warn.push(wut);
			chat('Fake ProxyPlayer: You have 5 seconds to change your name.');
			setTimeout(() => {
				if (MPP.client.ppl[wut].name.toLowerCase().includes('proxyplayer')) {
					chat(
						vb(
							MPP.client.getOwnParticipant()._id,
							MPP.client.ppl[wut].name,
							300,
							true
						)
					);
				}
			}, 5000);
		}
	});
}

function fw(inp) {
	let alpha1 =
		'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz,./<>?`1234567890-=~!@#$%^&*()_+;\':"[]{}| ＡａＢｂＣｃＤｄＥｅＦｆＧｇＨｈＩｉＪｊＫｋＬｌＭｍＮｎＯｏＰｐＱｑＲｒＳｓＴｔＵｕＶｖＷｗＸｘＹｙＺｚ，．／＜＞？｀１２３４５６７８９０－＝～！＠＃＄％＾＆＊（）＿＋；＇：＂［］｛｝｜';
	let alpha2 =
		'ＡａＢｂＣｃＤｄＥｅＦｆＧｇＨｈＩｉＪｊＫｋＬｌＭｍＮｎＯｏＰｐＱｑＲｒＳｓＴｔＵｕＶｖＷｗＸｘＹｙＺｚ，．／＜＞？｀１２３４５６７８９０－＝～！＠＃＄％＾＆＊（）＿＋；＇：＂［］｛｝｜ AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz,./<>?`1234567890-=~!@#$%^&*()_+;\':"[]{}|';
	let str = inp;
	let newstr = '';
	for (let f = 0; f < str.length; f++) {
		try {
			let charPos = alpha1.indexOf(str.charAt(f));
			newstr += alpha2.charAt(charPos);
		} catch (e) {
			newstr += str.charAt(f);
		}
	}
	return newstr;
}

function stopp() {
	try {
		delete sockObj[Math.ceil(Math.random() * sockObj.length)];
	} catch (e) {}
}
//setInterval(stopp,1500)
function findbyuuid(user) {
	return MPP.client.ppl[user];
}

function vbcountdown() {
	setInterval(() => {
		try {
			Object.keys(tobebanned).forEach(user => {
				if (tobebanned[user].time == Infinity || tobebanned[user].time <= 0)
					return;
				--tobebanned[user].time;
				if (tobebanned[user].time <= 0) {
					chat(vpardon(tobebanned[user].name, true));
				}
			});
		} catch (e) {
			console.log(e);
		}
	}, 1000);
}

function vpardon(client, timed = false) {
	let db = tobebanned;
	try {
		let vb = getUser(client)._id;
	} catch (e) {
		return 'Not found.';
	}
	let user = getUser(client)._id;
	let id = getUser(client).id;
	let beforedel = db[user];
	if (!nhere(user))
		return `User not banned: ${findbyuuid(id).name} (${findbyuuid(id)._id})`;
	if (!db[user].banned)
		return `User not banned: ${db[user].name} (${db[user]._id})`;
	vbanned.splice(vbanned.indexOf(db[user]._id), 1);
	delete tobebanned[user];
	if (timed)
		return `User automatically pardoned: ${beforedel.name} (${
			beforedel._id
		}) || Ban length: (${sectoprop(beforedel.length)})`;
	return `User pardoned: ${beforedel.name} (${
		beforedel._id
	}) || Ban length: (${sectoprop(beforedel.length)})`;
}

function votes(user) {
	if (getUser(user) === true || getUser(user) === undefined) return 'Not found';
	let vb = getUser(user)._id;
	let exist = nhere(vb);
	if (!exist)
		return `Votes for ${getUser(user).name} (${
			getUser(user)._id
		}): 0 of ${vball}.`;
	if (tobebanned[vb].banned) {
		return `User already banned (${tobebanned[vb].name} (${
			tobebanned[vb]._id
		})) (Time remaining: ${sectoprop(tobebanned[vb].time)})`;
	} else {
		return `Votes for ${tobebanned[vb].name} (${tobebanned[vb]._id}): ${
			tobebanned[vb].votes
		} of ${vball}.`;
	}
}

function vb(votee, user, time = 600, novote = false) {
	let here = false;
	try {
		var vb = getUser(user)._id;
	} catch (e) {
		return 'Not found.';
	}
	if (sure.includes(vb)) {
		if (!exist)
			tobebanned[vb] = {
				name: getUser(user).name,
				_id: vb,
				votes: 0,
				banned: false,
				time: 0,
				length: 0,
				voted: []
			};
		tobebanned[vb].banned = true;
		tobebanned[vb].time = 600;
		tobebanned[vb].length = 600;
		vbanned.push(vb);
		var message = 600 == Infinity ? 'forever.' : `for ${sectoprop(600)}.`;
		return `User ${tobebanned[vb].name} (${
			tobebanned[vb]._id
		}) has been banned ${message}`;
	}
	if (votee == vb) {
		sure.push(votee);
		return 'are you sure about that?';
	}
	let from = votee;
	var exist = nhere(vb);
	var message = time == Infinity ? 'forever.' : `for ${sectoprop(time)}.`;
	if (novote) {
		if (!exist)
			tobebanned[vb] = {
				name: getUser(user).name,
				_id: vb,
				votes: 0,
				banned: false,
				time: 0,
				length: 0,
				voted: []
			};
		tobebanned[vb].banned = true;
		tobebanned[vb].time = time;
		tobebanned[vb].length = time;
		vbanned.push(vb);
		return `User ${tobebanned[vb].name} (${
			tobebanned[vb]._id
		}) has been banned ${message}`;
	} else {
		if (exist) {
			if (tobebanned[vb].banned) {
				return `User already banned (${tobebanned[vb].name} (${
					tobebanned[vb]._id
				})) (Time remaining: ${sectoprop(tobebanned[vb].time)})`;
			}
			if (!tobebanned[vb].voted.includes(from)) {
				tobebanned[vb].voted.push(from);
				tobebanned[vb].votes++;
			}
			if (tobebanned[vb].votes >= vball) {
				vbanned.push(vb);
				tobebanned[vb].banned = true;
				tobebanned[vb].time = time;
				tobebanned[vb].length = time;
				return `User ${tobebanned[vb].name} (${
					tobebanned[vb]._id
				}) has been banned ${message}`;
			}
			return `Votes for ${tobebanned[vb].name} (${tobebanned[vb]._id}): ${
				tobebanned[vb].votes
			} of ${vball}.`;
		} else {
			tobebanned[vb] = {
				name: getUser(user).name,
				_id: vb,
				votes: 0,
				banned: false,
				time: 0,
				length: 0,
				voted: []
			};
			if (!tobebanned[vb].voted.includes(from)) {
				tobebanned[vb].voted.push(from);
				tobebanned[vb].votes++;
			}
			if (tobebanned[vb].votes >= vball) {
				vbanned.push(vb);
				tobebanned[vb].banned = true;
				return `User ${tobebanned[vb].name} (${
					tobebanned[vb]._id
				}) has been banned ${message}`;
			}
			return `Votes for ${tobebanned[vb].name} (${tobebanned[vb]._id}): ${
				tobebanned[vb].votes
			} of ${vball}.`;
		}
	}
}
MPP.client.setChannel(gRoom);
MPP.client.on('hi', () => {
	sockObj.unshift(MPP.client);
	/*MPP.client.sendArray([{
    m: "userset",
    set: {
      name: "NMPB"
    }
  }]);
*/
});

function test() {
	testing = true;
	let test = speedTest({
		maxTime: 5000
	});
	test.on('downloadprogress', progress => {
		result = `Download progress: ${progress.toFixed(2)}`;
	});
	test.on('uploadprogress', progress => {
		result = `Upload progress: ${progress.toFixed(2)}`;
	});
	test.on('data', data => {
		testing = false;
		if (FW) {
			MPP.chat.send(
				fw(
					`Speedtest Results: Ping: ${data.server.ping} ms. Download: ${
						data.speeds.download
					} Mbps. Upload: ${data.speeds.upload} Mbps.`
				)
			);
		} else {
			MPP.chat.send(
				`Speedtest Results: Ping: ${data.server.ping} ms. Download: ${
					data.speeds.download
				} Mbps. Upload: ${data.speeds.upload} Mbps.`
			);
		}
	});
	test.on('error', err => {
		console.error(err);
	});
	return 'Conducting a speedtest...';
}
gClient.prototype.setName = function(name, time = Date.now() + 2000) {
	if (FW) {
		this.sendArray([
			{
				m: 'userset',
				set: {
					name: `\u034f${fw(name)}`
				}
			}
		]);
	} else {
		this.sendArray([
			{
				m: 'userset',
				set: {
					name: `\u034f${name}`
				}
			}
		]);
	}
};
let buffer = [];
var sockObj = [];
let delay = 20;
let echo = 1;
let starting = Date.now();
//custom stuffs
MPP.client.on('a', msg => {
	cmdChar = '>';
	let isAdmin = false;
	let args = msg.a.split(' ');
	let cmd = args[0];
	let input = msg.a.substring(cmd.length).trim();
	if (op.includes(msg.p._id)) isAdmin = true;
	if (cmd == `${cmdChar}js`) {
		if (isAdmin) {
			try {
				chat(`Console: ${eval(input)}`);
			} catch (err) {
				chat(`${err}`);
			}
		}
	} else if (cmd == `${cmdChar}ping` && isAdmin) {
		pingAll();
	}
});
let thing = 0;
let nmpbturns = 0;

function auto(turn_off) {
	if (turn_off) {
		clearInterval(thing);
		return;
	}
	clearInterval(thing);
	thing = setInterval(() => {
		fire = true;
		sockObj.forEach(bot => {
			bot.sendArray([
				{
					m: 'chown',
					id: MPP.client.participantId
				}
			]);
		});
		relocate(gRoom);
		if (wtf) {
			if (snake) {
				for (i = 0; i < sockObj.length - 1; i++) {
					sockObj[i].sendArray([
						{
							m: 'userset',
							set: {
								name: wtname
							}
						}
					]);
				}
			} else {
				sockObj.forEach(bot => {
					bot.sendArray([
						{
							m: 'userset',
							set: {
								name: wtname
							}
						}
					]);
				});
			}
		} else {
			if (themode) {
				sockObj.forEach(proxy => {
					proxy.sendArray([
						{
							m: 'userset',
							set: {
								name: gentext(25)
							}
						}
					]);
				});
			} else {
				try {
					let nmpbNames = {
						0: `Note count: ${notecounter}`,
						1: `Players: ${sockObj[0].channel.count}. Proxies: ${
							sockObj.length
						}`,
						2: `NMPB "link" by Anon64. V ${linkv}`,
						3: `Link uptime: ${sectoform(
							Math.round(Date.now() / 1000 - starting / 1000)
						)}`
					};
					for (let wat = 1; wat < sockObj.length - 1; wat++) {
						if (FW) {
							sockObj[wat].sendArray([
								{
									m: 'userset',
									set: {
										name: `\u034f${fw(`${pName}_${wat}`)}`
									}
								}
							]);
						} else {
							sockObj[wat].sendArray([
								{
									m: 'userset',
									set: {
										name: `${pName}_${wat}`
									}
								}
							]);
						}
					}
					if (testing) {
						if (fire) {
							if (FW) {
								MPP.client.sendArray([
									{
										m: 'userset',
										set: {
											name: `\u034f${fw(`Speedtesting... (${result})`)}`
										}
									}
								]);
							} else {
								MPP.client.sendArray([
									{
										m: 'userset',
										set: {
											name: `\u034fSpeedtesting... (${result})`
										}
									}
								]);
							}
							fire = false;
						}
					} else {
						if (isCounting) {
							if (FW) {
								MPP.client.sendArray([
									{
										m: 'userset',
										set: {
											name:
												'\u034f' +
												fw(
													`${nmbpname} [${sectoform(elaspe)} | ${sectoform(
														extsec(current)
													)}]`
												)
										}
									}
								]);
							} else {
								MPP.client.sendArray([
									{
										m: 'userset',
										set: {
											name: `\u034f${nmpbname} [${sectoform(
												elapse
											)} | ${sectoform(extsec(current))}]`
										}
									}
								]);
							}
						} else {
							if (FW) {
								MPP.client.sendArray([
									{
										m: 'userset',
										set: {
											name: `\u034f${fw(`${nmpbname} [${nmpbchar}help]`)}`
										}
									}
								]);
							} else {
								MPP.client.sendArray([
									{
										m: 'userset',
										set: {
											name: `\u034f${nmpbname} [${nmpbchar}help]`
										}
									}
								]);
							}
						}
					}
					if (FW) {
						sockObj[sockObj.length - 1].sendArray([
							{
								m: 'userset',
								set: {
									name: `\u034f${fw(nmpbNames[nmpbturns++])}`
								}
							}
						]);
					} else {
						sockObj[sockObj.length - 1].sendArray([
							{
								m: 'userset',
								set: {
									name: `\u034f${nmpbNames[nmpbturns++]}`
								}
							}
						]);
					}
					if (nmpbturns >= Object.keys(nmpbNames).length) nmpbturns = 0;
				} catch (e) {}
			}
		}
	}, 2100);
}

function sectoprop(sec) {
	let totalSeconds = sec;
	let millennium = Math.floor(totalSeconds / 31556926000);
	totalSeconds %= 31556926000;
	let century = Math.floor(totalSeconds / 3155692600);
	totalSeconds %= 3155692600;
	let decades = Math.floor(totalSeconds / 315569260);
	totalSeconds %= 315569260;
	let years = Math.floor(totalSeconds / 31556926);
	totalSeconds %= 31556926;
	let months = Math.floor(totalSeconds / Math.round(2629743.83));
	totalSeconds %= Math.round(2629743.83);
	let days = Math.floor(totalSeconds / 86400);
	totalSeconds %= 86400;
	let hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = totalSeconds % 60;
	//console.log(years, months, days, hours, minutes, seconds);
	/*if (parseInt(years) <= 9) years = "0" + years;
    if (parseInt(months) <= 9) months = "0" + months;
    if (parseInt(days) <= 9) days = "0" + days;
    if (parseInt(hours) <= 9) hours = "0" + hours;
    if (parseInt(minutes) <= 9) minutes = "0" + minutes;
    if (parseInt(seconds) <= 9) seconds = "0" + seconds;
*/
	millennium =
		millennium == 1
			? `${millennium} millennium, `
			: `${millennium} millennia, `;
	century = century == 1 ? `${century} century, ` : `${century} centuries, `;
	decades = decades == 1 ? `${decades} decade, ` : `${decades} decades, `;
	years = years == 1 ? `${years} year, ` : `${years} years, `;
	months = months == 1 ? `${months} month, ` : `${months} months, `;
	days = days == 1 ? `${days} day, ` : `${days} days, `;
	hours = hours == 1 ? `${hours} hour, ` : `${hours} hours, `;
	minutes = minutes == 1 ? `${minutes} minute ` : `${minutes} minutes `;
	seconds = seconds == 1 ? `${seconds} second` : `${seconds} seconds`;

	/*
  if (years == "0 years, " && months == "0 months, ") years = "";
  if (months == "0 months, " && days == "0 days, ") months = "";
  if (days == "0 days, " && hours == "0 hours, ") days = "";
  if (hours == "0 hours, " && minutes == "0 minutes, ") hours = "";
  */
	if (millennium == '0 millennia, ') millennium = '';
	if (century == '0 centuries, ') century = '';
	if (decades == '0 decades, ') decades = '';
	if (years == '0 years, ') years = '';
	if (months == '0 months, ') months = '';
	if (days == '0 days, ') days = '';
	if (hours == '0 hours, ') hours = '';
	if (minutes == '0 minutes ') minutes = '';
	if (seconds == '0 seconds') seconds = '';
	if (seconds != '') minutes = `${minutes}and `;
	if (minutes == 'and ') minutes = '';
	let out =
		millennium +
		century +
		decades +
		years +
		months +
		days +
		hours +
		minutes +
		seconds;
	if (out.endsWith(', ')) out = out.slice(0, -2);
	if (out.endsWith(' ')) out = out.slice(0, -1);
	if (
		out ==
		'Infinity millennia, NaN centuries, NaN decades, NaN years, NaN months, NaN days, NaN hours, NaN minutes and NaN seconds'
	)
		out =
			'Infinity millennia, Infinity centuries, Infinity decades, Infinity years, Infinity months, Infinity days, Infinity hours, Infinity minutes and Infinity seconds';
	return out;
}

function sectoform(sec) {
	let totalSeconds = sec;
	let years = Math.floor(totalSeconds / 31556926);
	totalSeconds %= 31556926;
	let months = Math.floor(totalSeconds / Math.round(2629743.83));
	totalSeconds %= Math.round(2629743.83);
	let days = Math.floor(totalSeconds / 86400);
	totalSeconds %= 86400;
	let hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = totalSeconds % 60;
	//console.log(years, months, days, hours, minutes, seconds);
	if (parseInt(years) <= 9) years = `0${years}`;
	if (parseInt(months) <= 9) months = `0${months}`;
	if (parseInt(days) <= 9) days = `0${days}`;
	if (parseInt(hours) <= 9) hours = `0${hours}`;
	if (parseInt(minutes) <= 9) minutes = `0${minutes}`;
	if (parseInt(seconds) <= 9) seconds = `0${seconds}`;

	years = `${years}:`;
	months = `${months}:`;
	days = `${days}:`;
	hours = `${hours}:`;
	minutes = `${minutes}:`;

	if (years == '00:' && months == '00:') years = '';
	if (months == '00:' && days == '00:') months = '';
	if (days == '00:' && hours == '00:') days = '';
	if (hours == '00:' && minutes == '00:') hours = '';

	let out = years + months + days + hours + minutes + seconds;
	if (out.startsWith('00:') && out.length > 5)
		out = out.substring(3, out.length);
	return out;
}

function extsec(str) {
	try {
		out = 0;
		inps = str.split(':');
		sec = parseInt(inps[1].match(/\d/g).join(''));
		min = parseInt(inps[0].match(/\d/g).join(''));
		out += min * 60;
		out += sec;
		return out;
	} catch (e) {
		// console.log(`Input str: ${str}`)
	}
}

function similar(first, second, percent) {
	if (
		first === null ||
		second === null ||
		typeof first === 'undefined' ||
		typeof second === 'undefined'
	) {
		return 0;
	}

	first += '';
	second += '';

	let pos1 = 0;
	let pos2 = 0;
	let max = 0;
	let firstLength = first.length;
	let secondLength = second.length;
	let p;
	let q;
	let l;
	let sum;

	max = 0;

	for (p = 0; p < firstLength; p++) {
		for (q = 0; q < secondLength; q++) {
			for (
				l = 0;
				p + l < firstLength &&
				q + l < secondLength &&
				first.charAt(p + l) === second.charAt(q + l);
				l++
			);
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

		if (pos1 + max < firstLength && pos2 + max < secondLength) {
			sum += similar(
				first.substr(pos1 + max, firstLength - pos1 - max),
				second.substr(pos2 + max, secondLength - pos2 - max)
			);
		}
	}

	if (!percent) {
		return sum;
	} else {
		return sum * 200 / (firstLength + secondLength);
	}
}

function getUser(target) {
	if (target === '') {
		return true;
	}
	for (let pl in MPP.client.ppl) {
		if (!MPP.client.ppl.hasOwnProperty(pl)) continue;
		let part = MPP.client.ppl[pl];
		if (
			part.name.toLowerCase().includes(target) ||
			similar(part.name.toLowerCase(), target, 1) >= 60
		) {
			return part;
		}
	}
}

let mouseMove = 0;
theroom = false;
speed = 1;
move = true;
reverse = false;
radius = 7;

function doMouse(off) {
	if (off) {
		clearInterval(mouseMove);
		isMouseing = false;
		return;
	}
	clearInterval(mouseMove);
	isMouseing = true;
	let angle = 0;
	let things = 0;
	mouseMove = setInterval(() => {
		try {
			if (!oof) {
				own = getUser('Anon64');
				for (i = 0; i < sockObj.length; i++) {
					let tx = Math.sin(angle) * radius + parseInt(own.x);
					let ty = Math.cos(angle) * radius + parseInt(own.y);
					PNUM = sockObj.length;
					sockObj[i].sendArray([
						{
							m: 'm',
							x: tx,
							y: ty
						}
					]);
					angle += 2 * Math.PI / PNUM + 0.025 * speed;
				}
			} else {
				for (i = 0; i < sockObj.length; i++) {
					if (sockObj[i].ppl[sockObj[i].participantId].x >= 100) numx *= -1;
					if (sockObj[i].ppl[sockObj[i].participantId].x >= -100) numx *= -1;
					if (sockObj[i].ppl[sockObj[i].participantId].y >= 100) numy *= -1;
					if (sockObj[i].ppl[sockObj[i].participantId].y >= -100) numy *= -1;
					let fx = sockObj[i].ppl[sockObj[i].participantId].x + numx;
					let fy = sockObj[i].ppl[sockObj[i].participantId].y + numy;
					sockObj[i].sendArray([
						{
							m: 'm',
							x: fx,
							y: fy
						}
					]);
				}
			}
		} catch (e) {}
	}, 100);
}

let count = 0;
let pcur = 0;
var next = false;
let fade = 0;
var nextcount = 5;
let ncount = 0;

function press(key, vel, time, echo = 1, delay = 20) {
	for (let i = 0; i < echo; i++) {
		//setTimeout(function () {
		if (next) {
			if (ncount >= nextcount) {
				count = (count + 1) % sockObj.length;
				ncount = 0;
			}
			ncount++;
			var gSock = sockObj[count];
		} else {
			count = (count + 1) % sockObj.length;
			var gSock = sockObj[count];
		}
		if (gSock.participantId == undefined || !gSock.isConnected()) {
			count = (count + 1) % sockObj.length;
			var gSock = sockObj[count];
		}
		notecounter++;
		let tim = 100 + delay * i;
		if (NMPBOWOP) tim = 1200 + delay * i;
		gSock.sendArray([
			{
				m: 'n',
				t: time + tim,
				n: [
					{
						n: key,
						v: vel
					}
				]
			}
		]);
		//}, i * delay)
	}
}

function relocate(room = 'lolwutsecretlobbybackdoor') {
	for (i = 0; i < sockObj.length; i++) {
		sockObj[i].setChannel(room);
	}
}

function all(msg) {
	for (i = 0; i < sockObj.length; i++) {
		sockObj[i].sendArray([
			{
				m: 'a',
				message: msg
			}
		]);
	}
}

function name(name, num = undefined) {
	for (i = 0; i < sockObj.length; i++) {
		if (num == undefined) {
			if (FW) {
				sockObj[i].sendArray([
					{
						m: 'userset',
						set: {
							name: fw(`${name}`)
						}
					}
				]);
			} else {
				sockObj[i].sendArray([
					{
						m: 'userset',
						set: {
							name: `${name}`
						}
					}
				]);
			}
		} else {
			if (FW) {
				sockObj[i].sendArray([
					{
						m: 'userset',
						set: {
							name: fw(`${name} ${num + i}`)
						}
					}
				]);
			} else {
				sockObj[i].sendArray([
					{
						m: 'userset',
						set: {
							name: `${name} ${num + i}`
						}
					}
				]);
			}
		}
	}
}
String.prototype.replaceAll = function(search, replacement) {
	let target = this;
	return target.split(search).join(replacement);
};

function chat(msg) {
	chatturn = (chatturn + 1) % sockObj.length;
	var gSock = sockObj[chatturn];
	if (gSock.participantId == undefined || !gSock.isConnected()) {
		chatturn = (chatturn + 1) % sockObj.length;
		var gSock = sockObj[chatturn];
	}
	if (FW) {
		gSock.sendArray([
			{
				m: 'a',
				message: fw(msg)
			}
		]);
	} else {
		gSock.sendArray([
			{
				m: 'a',
				message: msg
			}
		]);
	}
}

let chatInt = setInterval(() => {
	let msg = buffer.shift();
	if (msg) chat(msg);
}, Math.round(2150 / players));
//End oof
connected = false;
canconnect = false;function press(key, vel, time, echo = 1, delay = 20) {
	for (let i = 0; i < echo; i++) {
		//setTimeout(function () {
		if (next) {
			if (ncount >= nextcount) {
				count = (count + 1) % sockObj.length;
				ncount = 0;
			}
			ncount++;
			var gSock = sockObj[count];
		} else {
			count = (count + 1) % sockObj.length;
			var gSock = sockObj[count];
		}
		if (gSock.participantId == undefined || !gSock.isConnected()) {
			count = (count + 1) % sockObj.length;
			var gSock = sockObj[count];
		}
		notecounter++;
		let tim = 100 + delay * i;
		if (NMPBOWOP) tim = 1200 + delay * i;
		gSock.sendArray([
			{
				m: 'n',
				t: time + tim,
				n: [
					{
						n: key,
						v: vel
					}
				]
			}
		]);
		//}, i * delay)
	}
}
pianoturn = 0;
once = true;
vel = 2;
Tvel = false;
let presscount = 0;
let hosts = [];

function initSocket(sockIp = null) {
	let gSocket;
	let nmpb;
	if (sockIp != null) {
		if (OWOPmode) {
			var gEndpoint = 'ws://www.ourworldofpixels.com:1234';
			if (gRoom == 'lolwutsecretlobbybackdoor') gRoom = 'lobby';
			var gClient = require('./OWOPCL.js');
			gClient.prototype.setName = function(name, time = Date.now() + 2000) {
				this.sendArray([
					{
						m: 'userset',
						set: {
							name
						}
					}
				]);
			};
			//anon64 = "6CC6Atbwwtb3910D86F9739F57"
		} else {
			var gEndpoint = 'ws://multiplayerpiano.com';
			var gClient = require('./Client.js');
			gClient.prototype.setName = function(name, time = Date.now() + 2000) {
				this.sendArray([
					{
						m: 'userset',
						set: {
							name
						}
					}
				]);
			};
		}
		if (NMPBOWOP) {
			var NMPB = require('./Client.js');
			nmpb = new NMPB('ws://multiplayerpiano.com:443', {//ws://23.95.115.204:8080
				socketIp: sockIp
			});
		} else {
			var NMPB = require('./Client.js');
			nmpb = new NMPB('ws://www.multiplayerpiano.com:443', {
				socketIp: sockIp
			});
		}
		gSocket = new gClient(gEndpoint, {
			socketIp: sockIp
		});
	} else {
		gSocket = new gClient(gEndpoint);
	}
	gSocket.start();
	gSocket.on('bye', msg => {
		if (msg.p == gSocket.participantId)
			console.log(`[@] Proxy disconnected (${gSocket.socketParams.socketIp})`);
	});
	gSocket.on('hi', () => {
		let pConn = 0;
		sockObj.forEach(bot => {
			if (bot.isConnected || bot.participantId !== undefined) pConn++;
		});
		if (pConn >= players) {
			canconnect = true;
			return;
		}
		if (sockIp != null) {
			console.log(`[@] Connected using proxy (${sockIp})`);
			sockObj.push(gSocket);
			gSocket.setChannel(gRoom);
			//gSocket.setName(`${pName} #${sockObj.length}`);
			hosts.push(sockIp.split(':')[1].split('//')[1]);
		} else {
			console.log('[@] Connected using default IP');
			sockObj.push(gSocket);
			gSocket.setChannel(gRoom);
			sockObj[0].on('a', msg => {
				let isAdmin = false;
				let args = msg.a.split(' ');
				let cmd = args[0];
				let input = msg.a.substring(cmd.length).trim();
				if (op.includes(msg.p._id)) isAdmin = true;
				if (cmd == `${cmdChar}js`) {
					if (isAdmin) {
						try {
							chat(`Console: ${eval(input)}`);
						} catch (err) {
							chat(`${err}`);
						}
					}
				} else if (cmd == `${cmdChar}ping` && isAdmin) {
					pingAll();
				}
			});
		}
	});
	try {
		nmpb.start();
		nmpb.on('hi', () => {
			if (sockIp != null && canconnect && !connected) {
				connected = true;
				console.log(`[@] Connected nmpb client (${sockIp})`);
				//MPP.chat.send("NMPB Connected")
				nmpb.setChannel(nroom);
				auto();
				setTimeout(vbcountdown, 5000);
				elapse = 0;
				elapser = 0;
				tempo = 100;
				cancount = false;
				isCounting = false;
				loop = false;
				current = '';
				setInterval(() => {
					if (cancount) {
						elapser++;
						elapse++;
					}
					if (extsec(current) <= elapse && cancount == true) {
						if (loop) {
							nmpb.sendArray([
								{
									m: 'a',
									message: '/rr'
								}
							]);
							elapse = 0;
							elapser = 0;
						} else {
							cancount = false;
							isCounting = false;
							elapse = 0;
							elapser = 0;
						}
					}
				}, 1000);
				let canP = true;
				setInterval(() => {
					pressed = 0;
				}, 1100);
				nmpb.on('n', msg => {
					let time = msg.t;

					for (let note of msg.n) {
						let del = note.d || 0;
						let time2 = msg.t + del;
						let veloc = Tvel ? note.v : vel;
						let pressed = 0;
						pressed++;
						var numbar = 550 * players;
						if (gRoom != 'lobby') var numbar = 1100 * players;
						if (pressed >= numbar) {
							canP = false;
							setTimeout(() => {
								canP = true;
								pressed = 0;
							}, 1600);
						}
						if (canP) {
							press(note.n, veloc, time2, echo, delay);
						}
					}
				});
				sockObj[0].on('a', m => {
					let args = m.a.split(' ');
					let cmd = args[0].toLowerCase();
					let pinput = m.a
						.substring(cmd.length)
						.trim()
						.toLowerCase();
					if (
						m.a.toLowerCase().startsWith(`${nmpbchar}ttp`) &&
						op.includes(m.p._id)
					) {
						if (!pinput) {
							chat('No input.');
						} else {
							chat(ttp(pinput));
						}
					}
					if (
						m.a.toLowerCase().startsWith(`${nmpbchar}pardon`) &&
						op.includes(m.p._id)
					) {
						if (!pinput) {
							chat('No input.');
						} else {
							chat(vpardon(pinput));
						}
					}
					if (
						m.a.toLowerCase().startsWith(`${nmpbchar}private`) &&
						op.includes(m.p._id)
					) {
						MPP.client.setChannel(gRoom, {
							visible: false
						});
					}
					if (vbanned.includes(m.p._id)) return;
					if (m.a.toLowerCase().startsWith(`${nmpbchar}stop`)) {
						themode = false;
						cancount = false;
					}
					if (
						m.a.toLowerCase().startsWith(`${nmpbchar}p `) ||
						m.a.toLowerCase().startsWith(`${nmpbchar}r`) ||
						m.a.toLowerCase().startsWith(`${nmpbchar}auto `) ||
						m.a.toLowerCase().startsWith(`${nmpbchar}play `) ||
						m.a.toLowerCase().startsWith(`${nmpbchar}a `) ||
						m.a.toLowerCase().startsWith(`${nmpbchar}l `) ||
						m.a.toLowerCase().startsWith(`${nmpbchar}load `) ||
						m.a.toLowerCase().startsWith(`${nmpbchar}random`)
					) {
						themode = false;
						cancount = true;
						loop = false;
					}
					if (
						m.a.toLowerCase().startsWith(`${nmpbchar}nextcount`) ||
						m.a.toLowerCase().startsWith(`${nmpbchar}nc`)
					) {
						chat(counter(pinput));
					}
					if (m.a.toLowerCase().startsWith(`${nmpbchar}vol`)) {
						chat(velocity(pinput));
					}
					if (
						m.a.toLowerCase().startsWith(`${nmpbchar}maxvol`) ||
						m.a.toLowerCase().startsWith(`${nmpbchar}mv`)
					) {
						chat(maxvel());
					}
					if (m.a.toLowerCase().startsWith(`${nmpbchar}loop`)) {
						chat(doloop());
					}
					if (
						m.a.toLowerCase().startsWith(`${nmpbchar}rr`) ||
						m.a.toLowerCase().startsWith(`${nmpbchar}retart`)
					) {
						elapse = 0;
						elapser = 0;
						cancount = true;
						isCounting = true;
					}
					if (
						m.a.toLowerCase().startsWith(`${nmpbchar}vb`) ||
						m.a.toLowerCase().startsWith(`${nmpbchar}voteban`)
					) {
						if (!pinput) {
							chat('No input.');
						} else {
							chat(vb(m.p._id, pinput));
						}
					}
					if (m.a.toLowerCase().startsWith(`${nmpbchar}votes`)) {
						chat(votes(pinput || m.p.name));
						console.log(pinput);
					}
					if (m.a.startsWith(nmpbchar)) {
						if (m.a)
							nmpb.sendArray([
								{
									m: 'a',
									message: m.a.replaceAll(nmpbchar, '/')
								}
							]);
					}
				});
				nmpb.on('a', m => {
					if (m.a.startsWith('/')) {
						return;
					}
					if (m.a.includes('Use /help')) {
						lolchat.push(
							`Additional NMPB commands: ${nmpbchar}voteban (${nmpbchar}vb) ${nmpbchar}votes ${nmpbchar}maxvel (${nmpbchar}mv) ${nmpbchar}nextcount (${nmpbchar}nc) ${nmpbchar}vol ${nmpbchar}loop`
						);
						setTimeout(() => {
							chat(lolchat.join(' | '));
							lolchat = [];
						}, 500);
					}
					if (m.a.includes('Current position')) {
						elapse = extsec(m.a.split('[')[1].split('/')[0]);
						elapser = extsec(m.a.split('[')[1].split('/')[0]);
					}
					if (m.a.includes('Tempo: ')) {
						current = `[${m.a.split('[')[1]}`;
						elapse = Math.round(
							elapser / (m.a.split(':')[1].split('%')[0] / 100)
						);
					}
					if (m.a == 'Not found.') {
						lolchat.push(nmpbmsg);
						setTimeout(() => {
							chat(lolchat.join(' | '));
							lolchat = [];
						}, 500);
					} else if (m.a == 'Reading file Id: 666. Name: title.mid [03:37].') {
						themode = true;
						setTimeout(() => {
							n1 = randNum(0, 99).toString();
							n2 = randNum(0, 59).toString();
							if (n1.length == 1) {
								n1 = `0${n1}`;
							}
							if (n2.length == 1) {
								n2 = `0${n2}`;
							}
							let name = gentext();
							lolchat.push(
								`Reading file Id: 666. Name: ${name} [${n1}:${n2}].`
							);
							chat(lolchat.join(' | '));
							lolchat = [];
						}, 500);
					} else if (
						m.a == "Reading file Id: 6639. Name: Emperor's Death [01:43]."
					) {
						setTimeout(() => {
							lolchat.push(m.a);
							lolchat.push('Now young Skywalker... You will die.');
							chat(lolchat.join(' | '));
							lolchat = [];
						}, 500);
					} else if (m.p._id == anon64 || '6CC6A3910D86F9739F57') {
						if (m.a.includes('Reading file')) {
							elapse = 0;
							if (cancount) cancount = false;
							cancount = true;
							isCounting = true;
							if (themode) {
								current = `[${n1}:${n2}]`;
							} else {
								current = m.a.split(' ')[m.a.split(' ').length - 1];
							}
						}
						lolchat.push(m.a.replaceAll('/', nmpbchar));
						setTimeout(() => {
							chat(lolchat.join(' | '));
							lolchat = [];
						}, 500);
					}
				});
				setInterval(() => {
					for (let pl in nmpb.ppl) {
						if (!nmpb.ppl.hasOwnProperty(pl)) continue;
						if (nmpb.ppl[pl]._id !== '6CC6A3910D86F9739F57') continue;
						let part = nmpb.ppl[pl];
						//console.log(nmpb.ppl)
						if (!isMouseing) {
							sockObj[0].sendArray([
								{
									m: 'm',
									x: part.x,
									y: part.y
								}
							]);
							let y = 15;
							let x1 = 8;
							let x2 = 88;
							if (part.x && part.y == -100) {
								sockObj[1].sendArray([
									{
										m: 'm',
										x: -100,
										y: -100
									}
								]);
								sockObj[2].sendArray([
									{
										m: 'm',
										x: -100,
										y: -100
									}
								]);
							} else {
								sockObj[1].sendArray([
									{
										m: 'm',
										x: x1,
										y
									}
								]);
								sockObj[2].sendArray([
									{
										m: 'm',
										x: x2,
										y
									}
								]);
							}
						}
					}
				}, 100);
			}
		});
	} catch (e) {}
}

let sockProxies = readline.createInterface({
	input: fs.createReadStream('./proxy.txt')
});

sockProxies.on('line', line => {
	initSocket(`http://${line}`);
});

let stdin = process.openStdin();

stdin.addListener('data', data => {
	let arg = data
		.toString()
		.trim()
		.split(' ');

	if (arg[0] == 'socket') {
		initSocket(`http://${arg[1]}`);
		console.log('[@] Connecting socket in realtime!');
	}
	if (arg[0] == 'js') {
		try {
			console.log(
				`Console: ${eval(
					data
						.toString()
						.trim()
						.substring(arg[0].length)
				)}`
			);
		} catch (err) {
			console.log(`${err}`);
		}
	}
});
