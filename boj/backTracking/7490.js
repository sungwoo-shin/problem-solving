const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const t = Number(input[0]); // < 10
const testCaseList = input.slice(1, input.length).map(Number);

(function solution() {
  const symbolList = [" ", "+", "-"];

  let answer = "";
  testCaseList.forEach((n) => {
    const arr = Array(n)
      .fill(0)
      .map((_, i) => i + 1);
    const selectedList = [];

    const dfs = (nbrList, depth) => {
      if (depth === n - 1) {
        let statement = "";
        selectedList.forEach((selected, i) => {
          statement += arr[i] + symbolList[selected];
        });
        statement += arr[selectedList.length];

        // eslint-disable-next-line no-eval
        const result = eval(statement.split(" ").join(""));
        if (result === 0) {
          answer += `${statement}\n`;
        }

        return;
      }

      let i;
      for (i = 0; i < symbolList.length; i += 1) {
        selectedList.push(i);
        dfs(nbrList, depth + 1);
        selectedList.pop();
      }
    };

    dfs(arr, 0);
    answer += "\n";
  });

  log(answer.trim());
})();
