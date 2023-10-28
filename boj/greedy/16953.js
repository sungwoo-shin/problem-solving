const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);

(function solution() {
  let flag = false;
  let result = 1;

  while (a <= b) {
    if (a === b) {
      flag = true;
      break;
    }

    if (b % 2 === 0) {
      b = parseInt(b / 2, 10);
    } else if (b % 10 === 1) {
      b = parseInt(b / 10, 10);
    } else {
      break;
    }
    result += 1;
  }

  log(flag ? result : -1);
})();
