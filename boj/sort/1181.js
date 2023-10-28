const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const n = Number(input[0]); // (1 ≤ N ≤ 20,000) // O (N log N)
input.shift();
const wordList = [...new Set(input)];

(function solution() {
  const compare = (a, b) => {
    let ret;
    if (a.length !== b.length) {
      ret = a.length - b.length;
    } else if (a < b) {
      ret = -1;
    } else if (a > b) {
      ret = 1;
    } else {
      ret = 0;
    }

    return ret;
  };

  wordList.sort(compare);
  log(wordList.join("\n"));
})();
