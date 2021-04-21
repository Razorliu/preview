var imgTag = new Image();

var canvas = document.getElementById('BKGD');
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;

setTimeout("javascript:location.href='5-2.html'", 20000);

imgTag.onload = animate;
imgTag.src = "images/bg5-1cut.png";   // load image


function animate()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
	ctx.drawImage(imgTag, x, y);               // draw image at current position

	x -= 3;

	
	if(x>=-2600) requestAnimationFrame(animate);        // loop

}// JavaScript Document