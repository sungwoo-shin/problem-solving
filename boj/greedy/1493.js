const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const [length, width, height] = input[0].split(" ").map(Number);
const n = Number(input[1]);

const getNearestSquare = (x) => {
  let i = 1;
  while (2 ** i <= x) {
    i += 1;
  }

  return i - 1;
};

(function solution() {
  const cubeList = Array(20).fill(0);
  for (let i = 2; i <= n + 1; i += 1) {
    const [a, b] = input[i].split(" ").map(Number);
    cubeList[a] = b;
  }

  let size = 19;
  size = getNearestSquare(length);
  size = Math.min(size, getNearestSquare(width));
  size = Math.min(size, getNearestSquare(height));

  let result = 0; // 필요한 큐브의 개수의 최소값
  let used = 0;
  for (let i = size; i >= 0; i -= 1) {
    used *= 8;
    const cur = 2 ** i;

    const required =
      parseInt(length / cur, 10) *
        parseInt(width / cur, 10) *
        parseInt(height / cur, 10) -
      used;

    const usage = Math.min(required, cubeList[i]);
    result += usage;
    used += usage;
  }

  if (used === length * width * height) {
    log(result);
  } else {
    log(-1);
  }
})();
