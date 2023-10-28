const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = +fs.readFileSync(path).toString();

let result = "";
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j <= i; j += 1) {
    result += "*";
  }

  if (i === n - 1) {
    break;
  }
  result += "\n";
}

log(result);
