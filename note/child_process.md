###Node.js学习——child_process

![](http://7tebxh.com1.z0.glb.clouddn.com/node_childprocess.jpg)

**1. child_process介绍**
Node是基于单线程模型架构的，意在榨干CPU，但是无法利用多个核，为此，Node.js提供了child_process模块，通过多进程来实现对多核CPU的利用。主要有spawn, exec, execFile以及fork。

**2. 常用方法**

|函数名|作用|
|:----|:-------|
|child_process.spawn(command[, args][, options])|创建一个子进程,其选项在[,args]中|
|child_process.exec(command[, options], callback)|创建一个子进程执行command，<br>之后callback中有三个参数err, <br> stdout,stderr,分别是错误，标准<br>输出，错误输出|
|child_process.execFile(file[, options], callback)|和exec基本一致，不过执行的是文件|
|child_process.fork(modulePath)|可以指定模块尽心该操作，用于派生Node进程|

**3. demo**

下面这个demo主要是执行了两条命令，一个是查看内存情况，free -m 
另外一个是最简单最常用的ls.

```
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
```

运行结果

![](http://7tebxh.com1.z0.glb.clouddn.com/res_child_process.png)

**更多的参考[这里](https://nodejs.org/api/child_process.html)**


