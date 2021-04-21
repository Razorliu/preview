var imgTag = new Image();
var canvas = document.getElementById('train');
var ctx = canvas.getContext("2d");
var x = 0-canvas.width;
var y = 0;
var decc=Math.ceil(-x/20);

imgTag.onload = animate;
imgTag.src = "images/train1.png";   // load image

function animate()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
	ctx.drawImage(imgTag, x, y);               // draw image at current position
	x += decc;
	decc=Math.ceil(-x/20);
	if (x < 0) requestAnimationFrame(animate)        // loop
}


