const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

const n = Number(input[0]);

const check = (string) => {
  const charSet = new Set(string[0]);
  for (let i = 0; i < string.length - 1; i += 1) {
    if (string[i] !== string[i + 1]) {
      if (charSet.has(string[i + 1])) {
        return false;
      }
      charSet.add(string[i + 1]);
    }
  }

  return true;
};

let result = 0;
for (let i = 1; i <= n; i += 1) {
  const string = input[i];
  if (check(string)) {
    result += 1;
  }
}
log(result);
