###Node.js学习——path

![](http://7tebxh.com1.z0.glb.clouddn.com/node_path.png)

**1. path介绍**

顾名思义，path模块用来处理文件路径，提高用户开发效率。比如整合一个路径，得到一个文件的后缀，或者去处后缀。path都是一个好东西。

**2. 常用方法**

|函数名|作用|
|:----|:-------|
|path.normalize(p)|将一个路径转为合法的绝对路径|
|path.join([p1][,p2][...])|将一系列的path整合成合法的绝对路径|
|path.relative(from,to))|整合出to相对于From的相对路径|
|path.resolve([from...],to)|相当于cd 所有路径,之后pwd|
|path.dirname(p)|返回p所在的目录|
|path.basename(p，[ext])|返回路径的最后一部分，如果传入ext,则会删除后缀ext|
|path.extname|返回路径的后缀|

**3. demo**

下面是一些使用到path的例子

```
var path = require('path')

var res = path.normalize('/dengyaolong////node_basic/note/../');
console.log(res);

var res2 = path.join('///dengyaolong', 'is');
console.log(res2);

var res3 = path.resolve(res2, 'coder', 'a.html');
console.log(res3);

var dir = path.dirname(res3);
console.log(dir);

var rel = path.relative(res2, res3);
console.log(rel);

var filename = path.basename(res3);
var filename2 = path.basename(res3, '.html');
console.log('include ext:' ,filename, '& remove ext:', filename2);

var extname = path.extname(filename);
console.log(extname);

```

运行结果

![](http://7tebxh.com1.z0.glb.clouddn.com/res_path.png)

更详细的参考[这里](https://nodejs.org/api/path.html)



