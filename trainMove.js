var imgTag = new Image();
var canvas = document.getElementById('icanvas');
var ctx = canvas.getContext("2d");
var x = canvas.width;
var y = 0;

imgTag.onload = animate;
imgTag.src = "images/train1.png";   // load image

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
  ctx.drawImage(imgTag, x, y);                       // draw image at current position
  x -= 4;
  if (x > 250) requestAnimationFrame(animate)        // loop
}