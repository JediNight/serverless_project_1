var fs = require('fs');
// var data = fs.readFileSync(__dirname + '/data.txt', 'utf8');
// console.log(data);

// var data2 = fs.readFile(__dirname + '/data.txt', 'utf8', (err, data) =>
//   console.log(data)
// );
var readableStream = fs.createReadStream(__dirname + '/data.txt', {
  encoding: 'utf8'
});

var writeableStream = fs.createWriteStream(__dirname + '/data2.txt');

readableStream.on('data', dataChunk => {
  console.log('dataChunk received');
  writeableStream.write(dataChunk);
});
