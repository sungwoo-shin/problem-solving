const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(path).toString();

let ret = "F";
if (input >= 90 && input <= 100) {
  ret = "A";
} else if (input >= 80 && input <= 89) {
  ret = "B";
} else if (input >= 70 && input <= 79) {
  ret = "C";
} else if (input >= 60 && input <= 69) {
  ret = "D";
}

log(ret);
