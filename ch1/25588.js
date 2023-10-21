const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

const [a, b] = input;
const [hundreds, tens, units] = b;

const unitsRes = +a * +units;
const tensRes = +a * +tens;
const hundredsRes = +a * +hundreds;
const res = +a * +b;
log([unitsRes, tensRes, hundredsRes, res].join("\n"));
