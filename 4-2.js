var imgTag = new Image();
var imgTag2 = new Image();
var imgTag3 = new Image();
var imgTag4 = new Image();
var imgTag5 = new Image();
var imgTag6 = new Image();
var canvas = document.getElementById('bridge');
var ctx = canvas.getContext("2d");
var x = 0;
var y = 724;
var x2 = -8000;
var y2 = 0;
var x3 = -1888;
var y3 = 642;
var x4 = 1500;
var y4 = 0;
var x5 = 3500;
var y5 = 260;
var x6 = -1000;
var y6 = 250;
var acc = Math.ceil(-x3/80);
var decc = 0;

setTimeout("javascript:location.href='5-1.html'", 23000);

imgTag.onload = animate;
imgTag.src = "images/bridge.png";   // load image
imgTag2.src = "images/bg4-1.png"; 
imgTag3.src = "images/train2.png";
imgTag4.src = "images/tower.png";
imgTag5.src = "images/village.png";
imgTag6.src = "images/magazine.png";

function animate()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
	ctx.drawImage(imgTag2, x2, y2);
	ctx.drawImage(imgTag4, x4, y4); 
	ctx.drawImage(imgTag5, x5, y5); 
	ctx.drawImage(imgTag, x, y);               // draw image at current position
	ctx.drawImage(imgTag3, x3, y3);  

	ctx.drawImage(imgTag6, x6, y6); 

	x -= 32;
	x2 -= 6;
	x3 += acc;
	acc = (-500-x3)/40;
	if (x <= -4360) 
	{
		x=0;
	}
	if (x2 <= -15000) 
	{
		decc=(-15000-x2)/10;
		x+=decc;
		x2+=2;
		acc = (-200-x3)/40;
	}

	if (x2 <= -514) 
	{
		x4-=6;	
	}
	if (x2 <= -9514)
	{
		x5-=12;
	}
	if (x2 <= -12514 && x6<=0)
	{
		x6+=12;
	}

	if(decc<=32) requestAnimationFrame(animate);        // loop

}
// JavaScript Document// JavaScript Document