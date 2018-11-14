// target.addEventListener(type, listener[, useCapture]);


var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');

/*

// 测一测addEventListener对ie浏览器的一个兼容情况
box1.addEventListener('click', function (e) {
  console.log('box1');
}, false);
// 测试结果为ie9以下的版本对addEventLister不兼容

*/




/*

// useCapture为false，即表示事件回调在冒泡阶段执行
box1.addEventListener('click', function (e) {
  console.log('box1');
}, false);
box2.addEventListener('click', function (e) {
  console.log('box2');
}, false);
box3.addEventListener('click', function (e) {
  console.log('box3');
}, false);

// 所以当我们点击box3时，控制台上打印的信息为box3、box2、box1


// useCapture为true，即表示事件回调在冒泡阶段执行
box1.addEventListener('click', function (e) {
  console.log('box1');
}, true);
box2.addEventListener('click', function (e) {
  console.log('box2');
}, true);
box3.addEventListener('click', function (e) {
  console.log('box3');
}, true);

// 所以当我们点击box3时，控制台上打印的信息为box1、box2、box3

*/

