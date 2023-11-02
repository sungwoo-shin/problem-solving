const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const [n, m] = input[0].split(" ").map(Number);

(function solution() {
  const arr = Array(n)
    .fill(0)
    .map((_, i) => i + 1);
  const selectedList = [];

  let answer = "";
  const dfs = (nbrList, depth, start) => {
    if (depth === m) {
      const result = [];
      selectedList.forEach((i) => {
        result.push(nbrList[i]);
      });

      answer += `${result.join(" ")}\n`;

      return;
    }

    let i;
    for (i = start; i < nbrList.length; i += 1) {
      selectedList.push(i);
      dfs(nbrList, depth + 1, i);
      selectedList.pop();
    }
  };

  dfs(arr, 0, 0);
  log(answer.trim());
})();
