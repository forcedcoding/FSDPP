// const fs = require('fs');

// fs.writeFileSync('./test.txt', 'Hello World!');

const sum = require('./sum.js');

const ans1 = sum(1, 2, 3, 4, 5);
const ans2 = sum(10, 20, 30);
const ans3 = sum(100, 200, 300, 400);

console.log(ans1);
console.log(ans2);
console.log(ans3);

