const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const n = Number(input[0]); // 1 ~ 1000000 // O(N log N);
input.shift();
const numberList = input.map(Number);

(function solution() {
  numberList.sort((a, b) => a - b);
  log(numberList.join("\n"));
})();
