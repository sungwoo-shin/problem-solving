const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split(" ").map(Number);
const [a, b, c] = input;

if (a === b && b === c) {
  log(10000 + a * 1000);
} else if (a === b) {
  log(1000 + a * 100);
} else if (a === c) {
  log(1000 + a * 100);
} else if (b === c) {
  log(1000 + b * 100);
} else {
  log(Math.max(a, b, c) * 100);
}
