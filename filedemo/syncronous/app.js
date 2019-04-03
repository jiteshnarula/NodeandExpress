const fs = require('fs');

try {
    fs.writeFileSync('sync.txt', 'anni');
  } catch(err) {
    // An error occurred
    console.error(err);
  }


  var data  = fs.readFileSync('sync.txt',{encoding:"utf8"});
  console.log(data)