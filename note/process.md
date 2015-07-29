###Node.js学习——Process

![](http://7tebxh.com1.z0.glb.clouddn.com/nodejs.png)

**1. process介绍**
   
process是一个全局变量对象，在代码中的任何位置都能访问，代表我们的node.js代码宿主的操作系统进程对象。
   使用process对象可以实现进程相关功能，比如获取进程的当前目录，环境变量，内存占用信息，还可以执行进程退出、工作目录切换等操作。
    
**2. 常用方法**
  
| 函数名 | 作用 |
|:----- |:-------------|
|process.cwd()|获取当前进程所在目录|
|process.chdir(dir)|更改至dir路径|
|process.stdin|读入流|
|process.stdout|输出流|
|process.stderr|错误输出流|
|process.env|进程环境对象|
|process.memoryUsage|返回内存占用情况，属性值以Bytes单位展示|
|process.versions|node版本和相关依赖|

**3. demo**
下面是一个使用process的demo, 从单独地调用，到实现一个求和程序。

```
console.log(process.versions.node);
console.log(process.memoryUsage());
// process.stdin.setEncoding('ascii');
process.stdin.setEncoding('utf-8');

process.stdout.write('关于process的一个小demo\n');

var pwd = process.cwd();
process.stdout.write(pwd + '\n');

process.chdir('../');
pwd = process.cwd();
process.stdout.write(pwd + '\n');

process.stdout.write('输入一些数字，以单个空格隔开，程序会输出求和后的结果，输入0为结束\n');

process.stdin.on('readable',function(){
  var chunk = process.stdin.read();
  if (chunk !== null) {
    var nums = chunk.trim().split(' ');
    if (nums == '0') {
      process.exit(0);
    }
    var res = 0;
    for(var i = 0; i < nums.length; ++i){
      res += parseFloat(nums[i]);
    }

    if(isNaN(res)){
      process.stdout.write('请输入数字\n');
    } else {
      process.stdout.write(res + '\n');
    }
    // process.stdout.write('data: ' + chunk);
  }
})

// 注册事件
// process.stdout.on('data', function(data){
//   console.log(data);
// })
```
运行结果如下

![](http://7tebxh.com1.z0.glb.clouddn.com/process.png)

** 4. demo中与process无关的 **

1. trim

  在demo中，我们实现了一个求和的功能，这应该是所有OJ（online judge）的第一道题A+B。
因为我们以流读入回来，得到的是一个字符串，同时，字符串尾端会读进换行符'\n'。
所以我们使用了trim()函数，其作用就是得到一个过滤首位的空格和换行符的字符串（并不修改原来的字符串）

2. parseFloat
 
  我们得到的是字符串，如果不进行字符串转数字，那么加出来的效果就是字符串的拼接，值得一提的是，**如果字符串与数字间进行减号，则会转换成数字**。我们在demo中使用的是parseFloat, 作用为转为float(其实javascript并没有int型)其会找到第一个非空字符，如果非空字符不是数字，那么结果就会返回NaN。同样的还有parseInt。还有Number()强转。

3. isNaN

  判断是否为nan,返回true or false
  
**5. 一些奇技淫巧**

Float转int:

1. number | 0
2. ~~number
3. number >> 0
4. Math.floor(number) #这个最正常了
5. parseInt(number, 10)

数字转字符串:

1. '' + num
2. num.toString()

字符串转数字:

1. str - '';
2. parseFloat(str);
3. Number(str);





###Node.js学习——Process

![](http://7tebxh.com1.z0.glb.clouddn.com/nodejs.png)

**1. process介绍**
   
process是一个全局变量对象，在代码中的任何位置都能访问，代表我们的node.js代码宿主的操作系统进程对象。
   使用process对象可以实现进程相关功能，比如获取进程的当前目录，环境变量，内存占用信息，还可以执行进程退出、工作目录切换等操作。
    
**2. 常用方法**
  
| 函数名 | 作用 |
|:----- |:-------------|
|process.cwd()|获取当前进程所在目录|
|process.chdir(dir)|更改至dir路径|
|process.stdin|读入流|
|process.stdout|输出流|
|process.stderr|错误输出流|
|process.env|进程环境对象|
|process.memoryUsage|返回内存占用情况，属性值以Bytes单位展示|
|process.versions|node版本和相关依赖|

**3. demo**
下面是一个使用process的demo, 从单独地调用，到实现一个求和程序。

```
console.log(process.versions.node);
console.log(process.memoryUsage());
// process.stdin.setEncoding('ascii');
process.stdin.setEncoding('utf-8');

process.stdout.write('关于process的一个小demo\n');

var pwd = process.cwd();
process.stdout.write(pwd + '\n');

process.chdir('../');
pwd = process.cwd();
process.stdout.write(pwd + '\n');

process.stdout.write('输入一些数字，以单个空格隔开，程序会输出求和后的结果，输入0为结束\n');

process.stdin.on('readable',function(){
  var chunk = process.stdin.read();
  if (chunk !== null) {
    var nums = chunk.trim().split(' ');
    if (nums == '0') {
      process.exit(0);
    }
    var res = 0;
    for(var i = 0; i < nums.length; ++i){
      res += parseFloat(nums[i]);
    }

    if(isNaN(res)){
      process.stdout.write('请输入数字\n');
    } else {
      process.stdout.write(res + '\n');
    }
    // process.stdout.write('data: ' + chunk);
  }
})

// 注册事件
// process.stdout.on('data', function(data){
//   console.log(data);
// })
```
运行结果如下

![](http://7tebxh.com1.z0.glb.clouddn.com/process.png)

** 4. demo中与process无关的 **

1. trim

  在demo中，我们实现了一个求和的功能，这应该是所有OJ（online judge）的第一道题A+B。
因为我们以流读入回来，得到的是一个字符串，同时，字符串尾端会读进换行符'\n'。
所以我们使用了trim()函数，其作用就是得到一个过滤首位的空格和换行符的字符串（并不修改原来的字符串）

2. parseFloat
 
  我们得到的是字符串，如果不进行字符串转数字，那么加出来的效果就是字符串的拼接，值得一提的是，**如果字符串与数字间进行减号，则会转换成数字**。我们在demo中使用的是parseFloat, 作用为转为float(其实javascript并没有int型)其会找到第一个非空字符，如果非空字符不是数字，那么结果就会返回NaN。同样的还有parseInt。还有Number()强转。

3. isNaN

  判断是否为nan,返回true or false
  
**5. 一些奇技淫巧**

Float转int:

1. number | 0
2. ~~number
3. number >> 0
4. Math.floor(number) #这个最正常了
5. parseInt(number, 10)

数字转字符串:

1. '' + num
2. num.toString()

字符串转数字:

1. str - '';
2. parseFloat(str);
3. Number(str);






