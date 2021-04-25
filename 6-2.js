var imgTag = new Image();
var imgTag2 = new Image();
var imgTag3 = new Image();
var imgTag4 = new Image();
var imgTag5 = new Image();

var canvas = document.getElementById('bridge');
var ctx = canvas.getContext("2d");
var x = 0;
var y = 724;
var x2 = -7000;
var y2 = 0;
var x3 = -1888;
var y3 = 642;
var x4 = 2000;
var y4 = 350;
var x5 = 5500;
var y5 = 80;
var acc = Math.ceil(-x3/80);
var decc = 0;
var play=0;
var play2=0;



imgTag2.onload = animate;
imgTag.src = "images/bridge.png";   // load image
imgTag2.src = "images/bg6-1.png"; 
imgTag3.src = "images/train2.png";
imgTag4.src = "images/saise.png";
imgTag5.src = "images/light.png";


function animate()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
	ctx.drawImage(imgTag2, x2, y2);
	ctx.drawImage(imgTag, x, y);               // draw image at current position
	ctx.drawImage(imgTag3, x3, y3);  
	ctx.drawImage(imgTag4, x4, y4); 
	ctx.drawImage(imgTag5, x5, y5); 
	x -= 32;
	x2 -= 12;
	x3 += acc;
	acc = (-500-x3)/40;
	if (x <= -4360) 	
	{
		x=0;
	}
	if (x2 <= -14000) 
	{
		decc=(-14000-x2)/20;
		x+=decc;
		x2+=decc*12/32;
		acc = (-200-x3)/40;
	}

	if (x2 <= -1514) 
	{
		x4-=12;	
	}
	if (x2 <=-1514 && play==0)
		{play=1;}
	if(play==1)
	{
		var element = document.getElementById("t1");
		element.classList.remove("void");
		element.classList.add("text1");
		play++;
	}
	
	if (x2 <= -6514)
	{
		x5-=12;
	}

	if (x2 <=-6514 && play2==0)
		{play2=1;}
	if(play2==1)
	{
		var element2 = document.getElementById("t2");
		element2.classList.remove("void");
		element2.classList.add("text2");
		play2++;
	}
	
	if(x2 <= -14500){setTimeout("javascript:location.href='6-3.html'", 1000);}
	if(decc<=32) requestAnimationFrame(animate);        // loop

}
// JavaScript Document// JavaScript Document