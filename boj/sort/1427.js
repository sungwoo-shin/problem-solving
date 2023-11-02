/* eslint-disable no-restricted-syntax */
const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const n = input[0]; // N은 1,000,000,000보다 작거나 같은 자연수

// 빈도 수 출력
(function solution() {
  const frequencyList = new Array(10).fill(0);
  for (const digit of n) {
    frequencyList[Number(digit)] += 1;
  }

  let summary = "";
  for (let i = 9; i >= 0; i -= 1) {
    for (let j = 0; j < frequencyList[i]; j += 1) {
      summary += `${i}`;
    }
  }

  log(summary);
})();
