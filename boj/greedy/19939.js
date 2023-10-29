const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const [n, k] = input[0].split(" ").map(Number);

(function solution() {
  let summary = 0;
  for (let i = 1; i < k + 1; i += 1) {
    summary += i;
  }

  if (summary > n) {
    log(-1);
  } else {
    const remainder = n - summary;
    if (remainder % k === 0) {
      log(k - 1);
    } else {
      log(k);
    }
  }
})();
