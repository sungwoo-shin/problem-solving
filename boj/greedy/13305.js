const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const n = Number(input[0]); // 2 ~ 100,000
const distanceList = input[1].split(" ").map(Number);
const costList = input[2].split(" ").map(Number);

(function solution() {
  let minCost = costList[0];
  const sortedCostList = costList.map((cost) => {
    minCost = Math.min(minCost, cost);

    return minCost;
  });

  let result = BigInt(0);
  distanceList.forEach((distance, i) => {
    result += BigInt(distance) * BigInt(sortedCostList[i]);
  });

  log(String(result));
})();
