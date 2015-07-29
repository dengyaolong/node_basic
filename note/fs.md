###Node.js学习——fs

![](http://7tebxh.com1.z0.glb.clouddn.com/node_js2.png)

**1. fs介绍**

fs(file system)是封装了POSIX(Portable Operating System Interface of Unix可移植操作系统接口)，可以非常方便地执行文件相关的操作，比如读写删改。只需要require("fs")即可。

**2. 常用方法**

|函数名|作用|
|:----|:-------|
|fs.readFile(file,function(err, data){...})|读取file, 之后在callback中处理err,data(文件<br>内容)|
|fs.writeFile(file,contents,function(err){...})|把contents写入到file, 在callback中处理err，<br>如果file已经存在，则会被覆盖|
|fs.appendFile(file,contents,function(err){...})|与writeFile基本一致，不过对于已有文件，<br>appendFile只是追加，并不会覆盖|
|fs.rename(old_file, new_file, function(err){...})|将old_file重命名为new_file,跟shell的mv一个道理|
|fs.unlink(file,function(err){...})|删除file|
|fs.exists(file, function(exists){...})|判断file是否存在，如果存在，callback的<br>exists会是true,否则false|
|fs.mkdir(file,function(err){...})|创建一个目录，如果存在出错|
|fs.rmdir(file,function(err){...})|移除目录|
|fs.readdir(file,function(err,files){})|读取file下的所有文件，在Callback中files<br>就是这些文件.|

**3. demo**
下面是一个fs相关的demo,值得一提的是所有的IO都是异步过程。

```  
var fs = require("fs")

fs.writeFile('test.txt', 'Hello Node\n', function(err){
  if (err) throw err;
  console.log('saved successfully');
  fs.appendFile('test.txt', '我是后来加进去的文字\n', function(err){
    if (err) throw err;
    console.log('the data was appended to file!');
    fs.exists('test.txt', function(exists){
      if (exists) {
        console.log('file is exists');
        fs.rename('test.txt', 'new_test.txt', function(err){
          if (err) throw err;
          fs.readFile('new_test.txt', function(err, data){
            if (err) throw err;
            console.log('读入的内容为：' + data);
            fs.unlink('new_test.txt', function(err){
             if (err) throw err;
             console.log('successfully deleted');
            })
          })
        })
      } else {
        console.log('file not exists');
      }
    })
  })
})

console.log('fs是一个一步操作');

fs.readdir('.', function(err,files){
  if (err) throw err;
  console.log(files);
})

console.log('异步的IO');

fs.mkdir('test_dir',  function(err){
  if (err) throw err;
  console.log('successfully make dir');
  fs.rmdir('test_dir', function(err){
    if (err) throw err;
    console.log('successfully delete dir');
  })
});

console.log('结束所有的IO');
```

运行结果
![](http://7tebxh.com1.z0.glb.clouddn.com/fs_res.png)



**更详细的可以参考[这里](http://nodejs.cn/api/fs)**
