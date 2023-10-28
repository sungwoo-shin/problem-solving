const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const n = Number(input[0]); // 사람의 수
const timeList = input[1].split(" ").map(Number);

(function solution() {
  const { result } = timeList
    .sort((a, b) => a - b)
    .reduce(
      (prev, cur) => {
        const nextTimeTaken = prev.timeTaken + cur;
        const nextResult = prev.result + nextTimeTaken;

        return { timeTaken: nextTimeTaken, result: nextResult };
      },
      { timeTaken: 0, result: 0 },
    );

  log(result);
})();
