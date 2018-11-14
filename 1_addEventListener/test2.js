// target.addEventListener(type, listener[, options]);
/**
 * options是一个对象，对象可有以下的属性
 * capture: Boolean，表示listener会在该类型的事件捕获阶段传播道该EventTarget时触发。
 * once: Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
 * passive: Boolean，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
 * mozSystemGroup: 只能在 XBL 或者是 Firefox' chrome 使用，这是个 Boolean，表示 listener 被添加到 system group。
 */

/*
// 关于capture参数
var linkBox = document.getElementById('linkBox');
var link = document.getElementById('link');
linkBox.addEventListener('click', function () {
  console.log('linkBox');
}, true);
link.addEventListener('click', function () {
  console.log('yaodebian');
}, {
  capture: true,
  once: false,
  passive: false
});

// 打印出linkBox、yaodebian
*/

/*

// once参数
var linkBox = document.getElementById('linkBox');
var link = document.getElementById('link');
linkBox.addEventListener('click', function () {
  console.log('linkBox');
}, true);
link.addEventListener('click', function () {
  console.log('yaodebian');
}, {
  capture: true,
  once: true,
  passive: false
});

// 第一次打印出linkBox、yaodebian，之后的每一次都只打印linkBox，由于once设置为true

*/


/*

// 关于passive参数
// passive为false
var linkBox = document.getElementById('linkBox');
var link = document.getElementById('link');
linkBox.addEventListener('click', function () {
  console.log('linkBox');
}, true);
link.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('yaodebian');
}, {
  capture: true,
  once: false,
  passive: false
});

// 打印出linkBox、yaodebian，同时执行了e.preventDefault()，也就是说不会发生跳转


// passive为true
var linkBox = document.getElementById('linkBox');
var link = document.getElementById('link');
linkBox.addEventListener('click', function () {
  console.log('linkBox');
}, true);
link.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('yaodebian');
}, {
  capture: true,
  once: false,
  passive: true
});

// 打印出linkBox、yaodebian，同时和官方文档说的一样，没有执行e.preventDefault()，并且在控制台抛出一个错误Unable to preventDefault inside passive event listener invocation (其实是在谷歌下为报错，而在火狐中是报一个警告).

*/
