###Node.js学习——querystring
![](http://7tebxh.com1.z0.glb.clouddn.com/node_querystring.png)

**1. querystring介绍**  

又是故名思议，querystring模块就是专门处理querystring的，主要就是组成和分解两个功能，简单易用。

**2. 常用方法**

|函数名|作用|
|:----|:-------|
|querystring.parse(qs[, sep][, eq])|将qs分解成Json，其中分隔符为sep,默认& <br>相等符为eq,默认=|
|querystring.stringify(obj[, sep][, eq])|与parse作用想法，以分隔符sep,<br>相等符eq做链接。|


**3. demo**

```
var querystring = require('querystring');

var res = querystring.stringify({foo: 'bar', cool:['max', 'drink'] });
console.log(res);

var res_json = querystring.parse(res);
console.log(res_json);

var res2 = querystring.stringify({foo: 'bar', cool:['max', 'drink'] }, '|', ':');
console.log(res2);

var res_json2 = querystring.parse(res2, '|', ':');
console.log(res_json2);
```


运行结果

![](http://7tebxh.com1.z0.glb.clouddn.com/res_querystring.png)

更详细的可以参考[这里](https://nodejs.org/api/querystring.html)
