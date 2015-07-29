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
