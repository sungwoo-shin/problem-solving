const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const n = Number(input[0]);
input.shift();
const timeList = input.map((a) => a.split(" ").map(Number));

(function solution() {
  timeList.sort((a, b) => {
    let result;
    if (a[1] !== b[1]) {
      result = a[1] - b[1];
    } else {
      result = a[0] - b[0];
    }

    return result;
  });

  let cnt = 1;
  let cur = 0;
  for (let i = 1; i < n; i += 1) {
    if (timeList[cur][1] <= timeList[i][0]) {
      cur = i;
      cnt += 1;
    }
  }

  log(cnt);
})();
