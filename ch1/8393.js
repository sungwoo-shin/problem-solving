import fs from "fs";

const { log } = console;

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(path).toString();

let summary = 0;
for (let i = 1; i <= input; i += 1) {
  summary += i;
}

log(summary);

// log((input * (input + 1)) / 2);

// fp
const range = (n) => Array.from({ length: n }, (_, i) => i + 1);
const add = (a, b) => a + b;

const clacSummary = (n) => range(n).reduce(add);
log(clacSummary(input));
