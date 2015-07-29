//输出node版本
console.log(process.versions.node);

//输出内存占用情况
console.log(process.memoryUsage());

//设置编码
// process.stdin.setEncoding('ascii');
process.stdin.setEncoding('utf-8');

// process.stdout.write功能与console.log一样
// 其实console.log就是process.stdout.write封装的
process.stdout.write('关于process的一个小demo\n');

//当前目录
var pwd = process.cwd();
process.stdout.write(pwd + '\n');

//更换到上一级
process.chdir('../');
pwd = process.cwd();
process.stdout.write(pwd + '\n');


//求和小程序
process.stdout.write('输入一些数字，以单个空格隔开，程序会输出求和后的结果，输入0为结束\n');

//读入流
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
  }
})

// 注册事件
// process.stdout.on('data', function(data){
//   console.log(data);
// })


