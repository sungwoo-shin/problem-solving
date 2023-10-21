const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split(" ");

const a = input[0];
const b = input[1];

const newA = a[2] + a[1] + a[0];
const newB = b[2] + b[1] + b[0];

log(Math.max(Number(newA), Number(newB)));
