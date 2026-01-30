const fs = require('fs');

// fs.writeFile('example.txt', 'Hi there', function(err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('File created successfully');
// });

// let readstream = fs.createReadStream("example.txt");

// let content=[];
// readstream.on('data', function(buffer) {
//     content.push(buffer);
// });

// readstream.on('end', function() {
//     let finaldata = Buffer.concat(content);
//     console.log(finaldata.toString());
// });
const readstream= fs.createReadStream("example.txt");
const writeStream= fs.createWriteStream("output.txt");

readstream.on('data',function(buffer){
    writeStream.write(buffer)
});
