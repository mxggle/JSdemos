// var ary = [];
// for (var i = 1; i <= 1000; i++) {
//   ary.push(i); // 假设 ary 装载了 1000 个好友的数据
// };
// var renderFriendList = function (data) {
//   for (var i = 0, l = data.length; i < l; i++) {
//     var div = document.createElement('div');
//     div.innerHTML = i;
//     document.body.appendChild(div);
//   }
// };
// renderFriendList(ary);
// var timeChunk = function (ary, fn, count) {
//   var obj,
//     t;
//   var len = ary.length;
//   var start = function () {
//     for (var i = 0; i < Math.min(count || 1, ary.length); i++) {
//       var obj = ary.shift();
//       fn(obj);
//     }
//   };
//   return function () {
//     t = setInterval(function () {
//       if (ary.length === 0) { // 如果全部节点都已经被创建好
//         return clearInterval(t);
//       }
//       start();
//     }, 200); // 分批执行的时间间隔，也可以用参数的形式传入
//   };
// };


var timeChunk = function(ary,fn,count){
  var t,
    obj;
  var start = function(){
    for(var i = 0;i < Math.min(count || 1,ary.length);i++){
      var obj = ary.shift();
      fn(obj)
    }
  };
  t = setInterval(() => {
    if(ary.length === 0){
      return clearInterval(t)
    }
    start()
  }, 200);
}

var ary = [];
for (var i = 1; i <= 1000; i++) {
  ary.push(i);
};
var renderFriendList = timeChunk(ary, function (n) {
  var div = document.createElement('div');
  div.innerHTML = n;
  document.body.appendChild(div);
}, 8);
renderFriendList();