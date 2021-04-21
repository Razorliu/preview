var imgTag = new Image();
var doctors = new Image();
var nurse = new Image();
var jinda = new Image();
var canvas = document.getElementById('BKGD');
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;
var y1 =100;
var y2 =200;
var yJinda = 250;

setTimeout("javascript:location.href='6-2.html'", 20000);

imgTag.onload = animate;
imgTag.src = "images/bg6-1cut.png";   // load image
doctors.src = "images/doctors.png";
nurse.src = "images/nurse.png";
jinda.src = "images/jinda6-1.png"

function animate()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
	ctx.drawImage(imgTag, x, y);               // draw image at current position
	ctx.drawImage(doctors, x+3700, y1);
	ctx.drawImage(nurse, x+4500, y2);
	ctx.drawImage(jinda, x+4900, yJinda);
	
	x -= 4;
	

	
	if(x>=-3700) requestAnimationFrame(animate);        // loop

}// JavaScript Document