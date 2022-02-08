//create drawling variables
var canvas;
var context;
let canvasH = 80 * window.innerHeight / 100;
let canvasW = 80 * window.innerWidth / 100;

//input vars
var upKey;
var rightKey;
var leftKey;
var downKey;

//create game vars
var gameLoop;
var player;
var borders = [];

window.onload = function() {
	//assin canvas and context vars
	canvas = document.getElementById('gameCanvas');
	context = canvas.getContext('2d');

	canvas.height = canvasH;
	canvas.width = canvasW;
	
	//set up key listeners
	setupInputs()
	
	//create player
	player = new Player(50, canvasH - 100);
	
	//create borders
	for (let i = 0; i < 6; i++) {
		borders.push(new border(0 + 100* i, canvasH - 100, 100, 100, 1));
	}
	borders.push(new border(0, canvasH-200, 100, 100, 2));
	for (let i = 0; i < 3; i++){
		borders.push(new border(600, (canvasH - 300) + 100*i, 100, 100, 2));
	}
	
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
	
	//draw the borders
	for (let i=0; i < borders.length; i++) {
		borders[i].draw();
	}
}

function setupInputs(){
	document.addEventListener('keydown', function(event){
		if (event.key === 'w' || event.key === 'ArrowUp'){
			upKey = true;
		}else if (event.key === 'a' || event.key === 'ArrowLeft'){
			leftKey = true;
		}else if (event.key === 'd' || event.key === 'ArrowRight'){
			rightKey = true;
		}else if (event.key === 's' || event.key === 'ArrowDown'){
			downKey = true;
		}
	});
	document.addEventListener('keyup', function(event){
		if (event.key === 'w' || event.key === 'ArrowUp'){
			upKey = false;
		}else if (event.key === 'a' || event.key === 'ArrowLeft'){
			leftKey = false;
		}else if (event.key === 'd' || event.key === 'ArrowRight'){
			rightKey = false;
		}else if (event.key === 's' || event.key === 'ArrowDown'){
			downKey = false;
		}
	});
}

function checkIntersection(r1, r2){
	if (r1.x >= r2.x +  r2.width) {
		return false;
	} else if (r1.x + r1.width <= r2.x) {
		return false;
	} else if (r1.y >= r2.y + r2.height) {
		return false;
	} else if (r1.y + r1.height <= r2.y) {
		return false;
	} else{
		return true;
	}
}