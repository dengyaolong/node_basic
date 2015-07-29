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



