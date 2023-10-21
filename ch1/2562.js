const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

// let maxVal = 0;
// let maxIdx = 0;
// for (let i = 0; i < 9; i += 1) {
//   const cur = Number(input[i]);
//   if (cur > maxVal) {
//     maxVal = cur;
//     maxIdx = i;
//   }
// }
// log(maxVal);
// log(maxIdx + 1);

const numberList = input.map(Number);
const max = Math.max(...numberList);

log(max);
log(numberList.indexOf(max) + 1);
