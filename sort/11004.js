const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const [n, k] = input[0].split(" ").map(Number); // N(1 ≤ N ≤ 5,000,000) // O(N log N)
const numberList = input[1].split(" ").map(Number);

(function solution() {
  numberList.sort((a, b) => a - b);
  log(numberList[k - 1]);
})();
