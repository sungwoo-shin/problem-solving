const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const n = Number(input[0]); // 1~8

(function solution() {
  const arr = Array(n)
    .fill(0)
    .map((_, i) => i + 1);
  const visitedList = Array(n).fill(false);
  const selectedList = [];

  let answer = "";
  const dfs = (nbrList, depth) => {
    if (depth === n) {
      const result = [];
      selectedList.forEach((selected) => result.push(nbrList[selected]));
      answer += `${result.join(" ")}\n`;

      return;
    }

    let i;
    for (i = 0; i < nbrList.length; i += 1) {
      if (visitedList[i]) {
        continue;
      }

      selectedList.push(i);
      visitedList[i] = true;
      dfs(nbrList, depth + 1);
      selectedList.pop();
      visitedList[i] = false;
    }
  };

  dfs(arr, 0);
  log(answer.trim());
})();

// nbrList
// visitedList
// selectedList
// answer
