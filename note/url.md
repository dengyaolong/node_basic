###Node.js学习——url
![](http://7tebxh.com1.z0.glb.clouddn.com/node_url.png)

**1. url介绍**

我们写Node就是在做web开发，肯定会常常接触到url，而Node中只需要require('url')，就可以做一些url的相关操作。比如拆分url，得到Url的hostname，querystring等等，或者反之生成url。

**2. 常用方法**

|函数名|作用|
|:----|:-------|
|url.parse(urlStr[,parseQueryString]<br>[,slashesDenoteHost])|将一个url字符串拆解成一个Json，<br>第二个参数设置为true时候，则将<br>queryString分解为json<Br>第三个设置为true时候，将会截断Host，<br>"//"和第一个"/"之间的部分解析为主机名|
|url.format(json)）|将一个Json对象Format成Url字符串<br>，与parse互反|
|url.resolve(from,to)|from是当前的url路径，to是想去的路径，<br>返回的是组装好的|

**3. demo**

下面是一段使用url各函数的demo。


```
var url = require('url');


var res = url.parse('https://www.baidu.com');
console.log(res);

var res2 = url.parse('https://www.baidu.com/s?wd=node');
console.log(res2);

var res3 = url.parse('https://www.baidu.com/s?wd=node',true);
console.log(res3);

var res4 = url.parse('//foo/bar');
console.log(res4);

var res5 = url.parse('//foo/bar', false,true);
console.log(res5);


var res6 = url.resolve('https://github.com/dengyaolong', '/one');
console.log(res6);

var res7 = url.resolve('/meituan/tne', 'dengyaolong');
console.log(res7);

var format_url = url.format({
  protocol: 'https:',
  hostname: 'github.com',
  port: '',
  pathname: 'dengyaolong/2048python/search',
  query: {q: 'py'}
})
console.log(format_url);
```

运行结果


![](http://7tebxh.com1.z0.glb.clouddn.com/url-res.png)


更详细的请参考[这里](http://nodejs.cn/api/url)
