const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const n = Number(input[0]); // 지방의 수 3~10,000
const requestList = input[1].split(" ").map(Number); // 1~100,000
const m = Number(input[2]); // 총 예산 n~1,000,000,000

(function solution() {
  let start = 1;
  let end = requestList.reduce((a, b) => Math.max(a, b));

  let result = 0;
  while (start <= end) {
    const mid = parseInt((start + end) / 2, 10);
    let total = 0;
    requestList.forEach((request) => {
      total += Math.min(request, mid);
    });

    if (total <= m) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  log(result);
})();
