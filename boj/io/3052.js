const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

const numberList = input.map(Number);
const remainderSet = new Set();

// numberList.forEach((v) => {
//   remainderSet.add(v % 42);
// });
for (let i = 0; i < 10; i += 1) {
  remainderSet.add(numberList[i] % 42);
}
log(remainderSet.size);
