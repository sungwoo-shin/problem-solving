const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const s = Number(input[0]);

(function solution() {
  let cur = 0;
  let sum = 0;
  while (sum <= s) {
    cur += 1;
    sum += cur;
  }

  log(cur - 1);
})();
