###Node.js学习——util
![](http://7tebxh.com1.z0.glb.clouddn.com/node_util.jpg)

**1. util介绍**

util模块主要是为了弥补一些js中满足不了Node内部api的需求。只需要require('util')。我们常常会用util.format来构造一个字符串，避免了过量的连接号。同时util.inspect在我们调试时候常常会用。

**2. 常用方法**

|函数名|作用|
|:----|:-------|
|util.format|用于format一个字符串，<br>%s代表字符换，%d代表<br>数，%j代表json|
|util.inspect(obj,[options])|返回对象的字符串表现形式，调试时候有用|
|util.isArray|判断是否为数组|
|util.isDate|判断是否为日期对象|  
|util.isRegExp|判断是否为正则|

**3. demo**

```
var util = require('util');

var obj = {
  foo: 123,
  bar: {
    name: 'jack',
    class: {
      number: 10,
      people: 40,
    }
  }
}
var res = util.inspect(obj, { showHidden: true, depth: 1});
console.log(res)

var res2 = util.format('%s今年%d岁', 'jack', '3');
console.log(res2);

console.log(util.isArray(obj), util.isArray([1,2]));

console.log(util.isDate(obj), util.isDate(new Date));

console.log(util.isRegExp(obj), util.isRegExp(/^\w+$/));
```

运行结果

![](http://7tebxh.com1.z0.glb.clouddn.com/res_util.png)

更详细可以参考[这里](https://nodejs.org/api/util.html#util_util_inspect_object_options)

