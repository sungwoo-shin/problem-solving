const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// 적어도 하나가 다른 지원자보다 떨어지지 않는 자만 선발
const testCase = Number(input[0]);
let nIdx = 1;

(function solution() {
  for (let i = 0; i < testCase; i += 1) {
    const n = Number(input[nIdx]);

    const scoreList = [];
    for (let j = nIdx + 1; j <= nIdx + n; j += 1) {
      const data = input[j].split(" ").map(Number);
      scoreList.push(data);
    }

    scoreList.sort((a, b) => a[0] - b[0]);

    let cnt = 0;
    let minValue = 1000001;
    scoreList.forEach(([, y]) => {
      if (y < minValue) {
        minValue = y;
        cnt += 1;
      }
    });

    log(cnt);
    nIdx += n + 1;
  }
})();
