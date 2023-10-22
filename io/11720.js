const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

const string = input[1];
const result = string
  .split("")
  .map(Number)
  .reduce((a, b) => a + b);
log(result);
