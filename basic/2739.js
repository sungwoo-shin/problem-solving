const fs = require("fs");

const { log } = console;

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = +fs.readFileSync(path).toString();

const summary = [];
for (let i = 1; i < 10; i += 1) {
  summary.push(`${n} * ${i} = ${n * i}`);
}
log(summary.join("\n"));
