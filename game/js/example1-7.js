var context = document.getElementById('canvas').getContext('2d'),
	strtButton = document.getElementById('startButton'),
	glasspane = document.getElementById('glasspane'),
	paused = true,
	circles = [];

drawGrid(context, 'lightgray', 10, 10);
context.lineWidth = 0.5;
context.font = '32pt Ariel';

for(var i = 0; i< 100; ++i){
	circles[i] = {
			x: 100,
			y: 100,
			velocityX: 3* Math.random(),
			velocityY: 3* Math.random(),
			radius: 50 * Math.random(),
			color: 'rgba(' + (Math.random()*255).toFixed(0) + ', ' +
							(Math.random()*255).toFixed(0) + ', ' + 
							(Math.random()*255).toFixed(0) + ', 1,0)' 
	};
}