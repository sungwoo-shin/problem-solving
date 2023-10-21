const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(path).toString();

let ret = "F";
if (90 <= input && input <= 100) {
  ret = "A";
} else if (80 <= input && input <= 89) {
  ret = "B";
} else if (70 <= input && input <= 79) {
  ret = "C";
} else if (60 <= input && input <= 69) {
  ret = "D";
}

log(ret);
