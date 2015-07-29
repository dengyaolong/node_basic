var querystring = require('querystring');

var res = querystring.stringify({foo: 'bar', cool:['max', 'drink'] });
console.log(res);

var res_json = querystring.parse(res);
console.log(res_json);

var res2 = querystring.stringify({foo: 'bar', cool:['max', 'drink'] }, '|', ':');
console.log(res2);

var res_json2 = querystring.parse(res2, '|', ':');
console.log(res_json2);
