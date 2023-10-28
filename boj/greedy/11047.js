const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const [, k] = input[0].split(" ").map(Number);
input.shift();
const valueList = input.reverse().map(Number);

(function solution() {
  let cnt = 0;
  let total = k;
  valueList.forEach((v) => {
    cnt += parseInt(total / v, 10);
    total %= v;
  });

  log(cnt);
})();
