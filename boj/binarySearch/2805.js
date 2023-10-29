const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const [, m] = input[0].split(" ").map(Number); // n: 1~1,000,000, m: 1~2,000,000,000
const heightList = input[1].split(" ").map(Number); // height: 0~1,000,000,000

(function solution() {
  let start = 0;
  let end = heightList.reduce((a, b) => Math.max(a, b));
  let result = 0;

  while (start <= end) {
    const mid = parseInt((start + end) / 2, 10);

    let total = 0;
    heightList.forEach((height) => {
      if (height > mid) {
        total += height - mid;
      }
    });

    if (total < m) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }

  log(result);
})();
