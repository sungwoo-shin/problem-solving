const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split(" ");

const a = +input[0];
const b = +input[1];

const sum = a + b;
const sub = a - b;
const mul = a * b;
const div = parseInt(a / b, 10);
const mod = a % b;

log([sum, sub, mul, div, mod].join("\n"));
