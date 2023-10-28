const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const n = Number(input[0]); // 1 ≤ N ≤ 1,000,000 // O(N log N)
const numberList = input[1].split(" ").map(Number);
const uniqueNumberList = [...new Set(numberList)];

(function solution() {
  uniqueNumberList.sort((a, b) => a - b);

  const numberMap = new Map();
  uniqueNumberList.forEach((v, i) => {
    numberMap.set(v, i);
  });

  let summary = "";
  for (const x of numberList) {
    summary += `${numberMap.get(x)} `;
  }
  log(summary.trim());
})();
