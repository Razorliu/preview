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
var x2 = -6000;
var y2 = 0;
var x3 = -1888;
var y3 = 642;
var x4 = 1900;
var y4 = 50;
var x5 = 2000;
var y5 = 850;
var x6 = 2000;
var y6 = 510;
var acc = Math.ceil(-x3/80);
var decc = 0;
var yCount=0;
var play=0;
var play2=0;
var play3=0;


imgTag2.onload = animate;
imgTag.src = "images/bridge.png";   // load image
imgTag2.src = "images/bg2-2.png"; 
imgTag3.src = "images/train2.png";
imgTag4.src = "images/grid.png";
imgTag5.src = "images/ship.png";
imgTag6.src = "images/rice.png";





function animate()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
	ctx.drawImage(imgTag2, x2, y2);
	ctx.drawImage(imgTag4, x4, y4); 
	ctx.drawImage(imgTag, x, y);               // draw image at current position
	ctx.drawImage(imgTag3, x3, y3);  
	ctx.drawImage(imgTag6, x6, y6);
	ctx.drawImage(imgTag5, x5, y5); 


	x -= 32;
	x2 -= 6;
	x3 += acc;
	acc = (-500-x3)/40;
	if (x <= -4360) 
	{
		x=0;
	}
	if (x2 <= -14014) 
	{
		decc=(-14014-x2)/10;
		x+=decc;
		x2+=2;
		acc = (-200-x3)/40;
	}

	if (x2 <= -6014) 
	{
		x4-=6;	
	}
	
	if (x2 <=-7014 && play==0)
		{play=1;}
	if(play==1)
	{
		var element = document.getElementById("t1");
		element.classList.remove("void");
		element.classList.add("text1");
		setTimeout(function(){
		document.getElementById("sound").play();
		},200);
		play++;
	}
	
	if (x2 <= -8514)
	{
		x5-=8;
			
		if(y5>=600 && yCount==0)
			y5-=1;
			y5+=Math.round(Math.random()*4-2);
		if(y5<=600 && yCount==0)
			yCount=1;
		if(y5<=850 && yCount==1)
			y5+=1;

	}
	if (x2 <=-8514 && play2==0)
		{play2=1;}
	if(play2==1)
	{
		var element2 = document.getElementById("t2");
		element2.classList.remove("void");
		element2.classList.add("text2");
		play2++;
	}
	
	if (x2 <= -11514)
	{
		x6-=8;
	}
	if (x2 <=-11514 && play3==0)
		{play3=1;}
	if(play3==1)
	{
		var element3 = document.getElementById("t3");
		element3.classList.remove("void");
		element3.classList.add("text3");
		play3++;
	}
	if(decc>=32){setTimeout("javascript:location.href='3-1.html'", 1000);}
	if(decc<=32) requestAnimationFrame(animate);        // loop

}



