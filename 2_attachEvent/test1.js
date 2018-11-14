var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');

/*

// attachEvent的事件触发流(冒泡还是捕获阶段)
box1.attachEvent('onclick', function () {
  console.log('box1');
});

box2.attachEvent('onclick', function () {
  console.log('box2');
});

box3.attachEvent('onclick', function () {
  console.log('box3');
});

// 输出box3、box2、box1，即在冒泡阶段触发事件的执行
// 另外，经测试，ie11以下不兼容attachEvent对象，仅ie11兼容

*/



/*

// 关于一个元素的同一事件类型绑定多个事件回调后，回调的执行顺序
box1.attachEvent('onclick', function () {
  console.log('box1: first reg');
});
box1.attachEvent('onclick', function () {
  console.log('box1: second reg');
});
// 经过测试发现，ie8以上版本，执行的顺序是按照回调的注册顺序来执行的，而ie8及以下是按照后注册的回调先执行的顺序来执行

*/



/*

// 关于attachEvent中作用域this指向的问题
box1.attachEvent('onclick', function () {
  console.log(this);
});

// 我们会发现this指向浏览器的window对象

*/


