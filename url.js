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

