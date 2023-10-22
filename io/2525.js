const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const c = +input[1];

const totalMinute = (a * 60 + b + c) % 1440;
const hour = parseInt(totalMinute / 60, 10);
const minute = totalMinute % 60;

log(`${hour} ${minute}`);
