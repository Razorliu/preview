// JavaScript Document// 获取弹窗
var modal = document.getElementById('myModal');
 
// 打开弹窗的按钮对象
var btn = document.getElementById("myBtn");
 
// 获取 <span> 元素，用于关闭弹窗
var span = document.querySelector('.close');
 
// 点击按钮打开弹窗
btn.onclick = function() {
    modal.style.display = "block";
	var d = new Date(2021,3,25)
	var e = new Date()

	document.getElementById('count').innerHTML = Math.ceil(81234+24*(e.getTime()-d.getTime())/(1000*3600));
}

 
// 点击 <span> (x), 关闭弹窗
span.onclick = function() {
    modal.style.display = "none";
}
 
// 在用户点击其他地方时，关闭弹窗
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}