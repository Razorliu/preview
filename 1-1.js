var imgTag = new Image();
var imgTag2 = new Image();
var imgTag3 = new Image();
var imgTag4 = new Image();
var imgTag5 = new Image();
var canvas = document.getElementById('bridge');
var ctx = canvas.getContext("2d");
var x = 0;
var y = 724;
var x2 = -3600;
var y2 = 0;
var x3 = -1888;
var y3 = 642;
var x4 = 2000;
var y4 = 650;
var x5 = 2000;
var y5 = 760;
var acc = Math.ceil(-x3/80);
var decc = 0;
var play=0;
var play2=0;
//setTimeout("javascript:location.href='2-1.html'", 41000);

imgTag.onload = animate;
imgTag.src = "images/bridge.png";   // load image
imgTag2.src = "images/bg1-2.png"; 
imgTag3.src = "images/train2.png";
imgTag4.src = "images/elephants.png";
imgTag5.src = "images/truck.png";

function animate()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
	ctx.drawImage(imgTag2, x2, y2);
	ctx.drawImage(imgTag, x, y);               // draw image at current position
	ctx.drawImage(imgTag3, x3, y3); 
	ctx.drawImage(imgTag4, x4, y4); 
	ctx.drawImage(imgTag5, x5, y5); 

	x -= 32;
	x2 -= 3;
	x3 += acc;
	acc = (-500-x3)/40;
	if (x <= -4360) 
	{
		x=0;
	}
	if (x2 <= -9614) 
	{
		decc=(-9614-x2)/10;
		x+=decc;
		x2+=2;
		acc = (-200-x3)/40;
	}

	if (x2 <= -7714) 
	{
		x4-=8;	
	}
	if (x2 <=-7714 && play==0)
		{play=1;}
	if(play==1)
	{
		var element = document.getElementById("t8");
		element.classList.add("text8");
		setTimeout(function(){
			document.getElementById("sound").play();
		},200);
		play++;
	}
	
	if (x2 <= -8714)
	{
		x5-=8;
	}
	if (x2 <=-8714 && play2==0)
		{play2=1;}
	if(play2==1)
	{
		var element2 = document.getElementById("t9");
		element2.classList.add("text9");

		play2++;
	}
	if(decc>=32){setTimeout("javascript:location.href='2-1.html'", 1000);}
		
	if(decc<=32) requestAnimationFrame(animate);        // loop

}
// JavaScript Document