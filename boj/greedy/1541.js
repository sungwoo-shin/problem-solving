const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const statement = input[0];

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

(function solution() {
  const groupList = statement.split("-");
  const result = groupList
    .map((group) => group.split("+").map(Number).reduce(add))
    .reduce(sub);

  log(result);
})();
