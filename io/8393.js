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
