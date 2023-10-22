const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

const n = Number(input[0]);
const scoreList = input[1].split(" ").map(Number);
const maxValue = scoreList.reduce((a, b) => Math.max(a, b));

const updated = [];
for (let i = 0; i < n; i += 1) {
  updated.push((scoreList[i] / maxValue) * 100);
}
log(updated.reduce((a, b) => a + b) / n);
