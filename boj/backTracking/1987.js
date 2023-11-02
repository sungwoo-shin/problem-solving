const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const [r, c] = input[0].split(" ").map(Number);
const matrix = input.splice(1, input.length);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const visitedSet = new Set();

(function solution() {
  let maxDepth = 0;
  const dfs = (depth, x, y) => {
    maxDepth = Math.max(maxDepth, depth);

    let i;
    for (i = 0; i < 4; i += 1) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];
      if (nextX < 0 || nextX >= r || nextY < 0 || nextY >= c) {
        continue;
      }

      const nextCoor = matrix[nextX][nextY];
      if (visitedSet.has(nextCoor)) {
        continue;
      }

      visitedSet.add(nextCoor);
      dfs(depth + 1, nextX, nextY);
      visitedSet.delete(nextCoor);
    }
  };

  visitedSet.add(matrix[0][0]);
  dfs(1, 0, 0);
  log(maxDepth);
})();
