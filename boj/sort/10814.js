const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const n = Number(input[0]); // (1 ≤ N ≤ 100,000) // O(N log N)
input.shift();

(function solution() {
  const compare = (a, b) => {
    const ageA = Number(a.split(" ")[0]);
    const ageB = Number(b.split(" ")[0]);

    return ageA - ageB;
  };

  input.sort(compare);
  log(input.join("\n"));
})();
