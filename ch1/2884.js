const { log } = console;

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split(" ").map(Number);
let [h, m] = input;

if (m < 45) {
  h -= 1;
  m += 15;
  if (h < 0) {
    h = 23;
  }
} else {
  m -= 45;
}

log(`${h} ${m}`);
