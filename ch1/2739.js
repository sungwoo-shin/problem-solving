const fs = require("fs");

const { log } = console;

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = +fs.readFileSync(path).toString();

// const summary = [];
// for (let i = 1; i < 10; i += 1) {
//   summary.push(`${n} * ${i} = ${n * i}`);
// }
// log(summary.join("\n"));

// fp
const getLine = (nbr) => (_, i) => `${nbr} * ${i + 1} = ${nbr * (i + 1)}`;
const getSummary = (nbr) => Array.from({ length: 9 }, getLine(nbr));
log(getSummary(n).join("\n"));
