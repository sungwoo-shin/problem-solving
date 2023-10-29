// 특정한 수열에서 가장 긴 증가하는 부분 수열
// Longest Increasing Subsequence (LIS)

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const n = Number(input[0]); // 1~2,000
const forceList = input[1].split(" ").map(Number); // 1~10,000,000

const getLowerBound = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2, 10);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
};

(function solution() {
  forceList.reverse();

  const d = [0];
  forceList.forEach((force) => {
    if (d[d.length - 1] < force) {
      d.push(force);
    } else {
      const idx = getLowerBound(d, force, 0, d.length);
      d[idx] = force;
    }
  });

  log(n - (d.length - 1));
})();
