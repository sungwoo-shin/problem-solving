const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");
const [t] = input;

const result = [];
for (let i = 0; i < +t; i += 1) {
  const [a, b] = input[i + 1].split(" ");
  result.push(+a + +b);
}
log(result.join("\n"));
