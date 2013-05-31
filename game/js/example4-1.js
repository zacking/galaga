var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	image = new Image(),
	scaleCheckbox = document.getElementById('scaleCheckbox');

function drawImage(){
	 context.clearRect(0,0,canvas.width,canvas.height);
	if(scaleCheckbox.checked){
		context.drawImage(image, 0, 0, canvas.width, canvas.height);
	}else{
		context.drawImage(image, 0, 0);
	}
	context.restore();
}
scaleCheckbox.onchange = function(e){
	drawImage();
}
image.src = 'images/running-sprite-sheet.png';
image.onload = function(e){
	drawImage();
};