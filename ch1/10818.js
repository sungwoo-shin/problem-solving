const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");
// let [, numberList] = input;
// numberList = numberList.split(" ").map(Number);

// let min = 1000001;
// let max = -1000001;
// numberList.forEach((v) => {
//   if (v < min) {
//     min = v;
//   }
//   if (v > max) {
//     max = v;
//   }
// });
// log(min, max);

const numberList = input[1].split(" ").map(Number);

const min = numberList.reduce((a, b) => Math.min(a, b));
const max = numberList.reduce((a, b) => Math.max(a, b));

log(min, max);
