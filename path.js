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
