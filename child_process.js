var child_process = require('child_process');
var free = child_process.spawn('free', ['-m']);
free.stdout.on('data', function(data) {
  console.log('当前内存:\n' + data);


free.stderr.on('data', function(data) {
  console.log('标准错误输出:\n' + data);
})

free.on('exit', function(code, signal) {
  console.log('子进程已经推出，返回码为' + code);
})
});

child_process.exec('ls', function(err, stdout, stderr) {
  if (err) throw err;
  console.log(stdout);
})

