//create drawling variables
var canvas;
var context;
let canvasH = 80 * window.innerHeight / 100;
let canvasW = 80 * window.innerWidth / 100;

//create game vars
var gameLoop;
var player;

window.onload = function() {
	//assin canvas and context vars
	canvas = document.getElementById('gameCanvas');
	context = canvas.getContext('2d');
	
	console.log(canvasH)
	console.log(canvasW)
	
	canvas.height = canvasH;
	canvas.width = canvasW;
	
	//set up key listeners
	
	//create player
	player = new Player(100, 400);
	
	//start game loop
	gameLoop = setInterval(step, 1000/30);
	
	context.fillStyle = "white";
	context.fillRect(0,0,canvasW,canvasH)
}

function step() {
	//step player
	player.step();
	
	
	//draw everything
	draw();
}

function draw() {
	//clear the canvas
	context.fillStyle = "white";
	context.fillRect(0,0,canvasW,canvasH)

	//draw the player
	player.draw();
}