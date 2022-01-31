//create drawling variables
var canvas;
var context;


window.onload = function() {
	//assin canvas and context vars
	canvas = document.getElementById('gameCanvas');
	context = canvas.getContext('2d');
	
	context.fillStyle = "white";
	context.fillRect(0,0,1280,720)
}