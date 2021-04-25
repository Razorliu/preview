// JavaScript Document   			
var audio=new Audio("sound/music.mp3");
audio.preload="preload";
// 自动播放解决苹果不兼容autoplay属性
audio.loop=true;
audio.play();
document.addEventListener("WeixinJSBridgeReady", function () {
audio.play();
}, false);

