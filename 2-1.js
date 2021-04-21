var imgTag = new Image();
var building1 = new Image();
var building2 = new Image();
var building3 = new Image();
var backBuilding1 = new Image();
var backBuilding2 = new Image();
var backBuilding3 = new Image();
var shop = new Image();
var jinda = new Image();
var canvas = document.getElementById('BKGD');
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;
var y1 =-3644;
var y2 =-6206;
var y3 =-9580;
var yb1 =-2244;
var yb2 =-5706;
var yb3 =-8580;
var yShop=0;
var yJinda = 300;

setTimeout("javascript:location.href='2-2.html'", 20000);

imgTag.onload = animate;
imgTag.src = "images/bg2-1cut.png";   // load image
building1.src = "images/2-1building1.png";
building2.src = "images/2-1building2.png";
building3.src = "images/2-1building3.png";
backBuilding1.src = "images/2-1buildingBehind1.png";
backBuilding2.src = "images/2-1buildingBehind2.png";
backBuilding3.src = "images/2-1buildingBehind3.png";
shop.src = "images/shop.png";
jinda.src = "images/jinda2-1.png"

function animate()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
	ctx.drawImage(imgTag, x, y);               // draw image at current position
	ctx.drawImage(backBuilding3, x+2550, yb3);
	ctx.drawImage(backBuilding2, x+1300, yb2);
	ctx.drawImage(backBuilding1, x+600, yb1);
	ctx.drawImage(building3, x+2550, y3);
	ctx.drawImage(building2, x+1300, y2);
	ctx.drawImage(building1, x+600, y1);
	ctx.drawImage(shop, x+3200, yShop);
	ctx.drawImage(jinda, x+2500, yJinda);
	
	x -= 3;
	
	if(y1<330) y1+=30;
	if(y2<160) y2+=30;
	if(y3<650) y3+=30;
	
	if(yb1<100) yb1+=30;
	if(yb2<100) yb2+=30;
	if(yb3<100) yb3+=30;
	
	
	if(x>=-2600) requestAnimationFrame(animate);        // loop

}// JavaScript Document