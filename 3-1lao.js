var imgTag = new Image();
var corn1 = new Image();
var corn2 = new Image();
var corn3 = new Image();
var corn4 = new Image();
var corn5 = new Image();
var corn6 = new Image();
var jinda = new Image();
var canvas = document.getElementById('BKGD');
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;
var y1 =3644;
var y2 =6206;
var y3 =11580;
var y4 =12544;
var y5 =9706;
var y6 =13580;
var yJinda = 150;

setTimeout("javascript:location.href='3-2lao.html'", 15000);

imgTag.onload = animate;
imgTag.src = "images/bg3-1cut.png";   // load image
corn1.src = "images/corn1.png";
corn2.src = "images/corn2.png";
corn3.src = "images/corn3.png";
corn4.src = "images/corn4.png";
corn5.src = "images/corn5.png";
corn6.src = "images/corn6.png";
jinda.src = "images/jinda3-1.png"

function animate()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
	ctx.drawImage(imgTag, x, y);               // draw image at current position
	ctx.drawImage(corn1, x+700, y1);
	ctx.drawImage(corn2, x+1300, y2);
	ctx.drawImage(corn3, x+1800, y3);
	ctx.drawImage(corn4, x+2100, y4);
	ctx.drawImage(corn5, x+800, y5);
	ctx.drawImage(corn6, x+2500, y6);
	ctx.drawImage(jinda, x+3000, yJinda);
	
	x -= 3;
	
	if(y1>330) y1-=30;
	if(y2>260) y2-=30;
	if(y3>600) y3-=30;
	
	if(y4>800) y4-=30;
	if(y5>200) y5-=30;
	if(y6>40) y6-=30;
	
	
	if(x>=-1800) requestAnimationFrame(animate);        // loop

}// JavaScript Document