const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const n = Number(input[0]); // N (1 ≤ N ≤ 100,000) // O(N log N)
input.shift();

(function solution() {
  const compare = (a, b) => {
    const [x1, y1] = a.split(" ").map(Number);
    const [x2, y2] = b.split(" ").map(Number);

    if (x1 !== x2) {
      return x1 - x2;
    }

    return y1 - y2;
  };

  input.sort(compare);
  log(input.join("\n"));
})();
