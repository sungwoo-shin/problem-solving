/* eslint-disable no-restricted-syntax */
const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const n = Number(input[0]);
const heightList = input[1].split(" ").map(Number);

(function solution() {
  const arrowList = Array.from({ length: 1000001 }, () => 0);

  let result = 0;
  for (const height of heightList) {
    if (arrowList[height] > 0) {
      arrowList[height] -= 1;
      arrowList[height - 1] += 1;
    } else {
      arrowList[height - 1] += 1;
      result += 1;
    }
  }

  log(result);
})();
