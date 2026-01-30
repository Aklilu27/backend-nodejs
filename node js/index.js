// // console.log(window);

// ///////global function
// // setTimeout(() => {
// //   console.log("Hello from index.js");
// // }, 2000);


// // console.log(global);

// let func1=require('./first.js')
// // console.log("Value of age in index.js:", age);
// func1();
let data = require('./first.js');

console.log("Value of age in index.js:", data.age);

data.func1();
