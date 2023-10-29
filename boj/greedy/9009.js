const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const t = Number(input[0]);
input.shift();
const testCaseList = input.map(Number);

const piboList = [0, 1];
while (piboList[piboList.length - 1] <= 1e9) {
  piboList.push(piboList[piboList.length - 2] + piboList[piboList.length - 1]);
}

(function solution() {
  let summary = "";

  for (let tc = 0; tc < t; tc += 1) {
    let n = testCaseList[tc];

    const resultList = [];
    let i = piboList.length - 1;
    while (n > 0) {
      if (n >= piboList[i]) {
        n -= piboList[i];
        resultList.push(piboList[i]);
      }
      i -= 1;
    }

    summary += resultList.reverse().join(" ");
    summary += "\n";
  }

  log(summary.trim());
})();
