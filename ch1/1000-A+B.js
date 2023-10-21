const { log } = console;

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().split(" ");

const a = +input[0];
const b = +input[1];

log(a + b);
