var imgTag = new Image();

var canvas = document.getElementById('BKGD');
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;
var count =0;

setTimeout("javascript:location.href='4-2lao.html'", 15000);

imgTag.onload = animate;
imgTag.src = "images/bg4-1cut.png";   // load image


function animate()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
	ctx.drawImage(imgTag, x, y);               // draw image at current position

	if(x>=-2780 && count==0) x -= 5;
	if(x<-2780 && count==0) 
	{
		count++;
		x=-2770;
	}
	if(x>=-2780 && count==1) x += 5;
	if(x>-1780 && count==1) 
	{
		count++;
		x=-1770;
	}
	
	if(count<2) requestAnimationFrame(animate);        // loop

}// JavaScript Document