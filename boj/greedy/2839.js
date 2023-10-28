const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// max y such that 3x + 5y = N
let n = Number(input[0]);

(function solution() {
  let cnt = 0;
  let flag = false;
  while (n >= 0) {
    if (n === 0 || n % 5 === 0) {
      cnt += n / 5;
      flag = true;
      log(cnt);
      break;
    }

    n -= 3;
    cnt += 1;
  }

  if (flag === false) {
    log(-1);
  }
})();
