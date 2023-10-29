const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// k: 1~10,000
// n: 1~1,000,000
// k <= n
const [, n] = input[0].split(" ").map(Number);
const lengthList = input.slice(1, input.length).map(Number);

(function solution() {
  let start = 1;
  let end = lengthList.reduce((a, b) => Math.max(a, b));

  let result = 0;
  while (start <= end) {
    const mid = parseInt((start + end) / 2, 10);

    let total = 0;
    lengthList.forEach((length) => {
      total += parseInt(length / mid, 10);
    });

    if (total < n) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }

  log(result);
})();
