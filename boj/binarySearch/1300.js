// 이진 탐색으로 정답 자체를 mid로 찾는다고 가정
// mid가 K번째 수가 되려면?
// 현재 mid보다 작거나 같은 데이터의 수가 K개 이상이 되는 조건을
// 만족하는 mid 중에서 가장 작은 값을 구하면 된다.

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const n = Number(input[0]);
const k = Number(input[1]);

(function solution() {
  let start = 1;
  let end = 10 ** 10;

  let result = 0;
  while (start <= end) {
    const mid = parseInt((start + end) / 2, 10);
    let total = 0;
    for (let i = 1; i <= n; i += 1) {
      // mid보다 작거나 같은 숫자의 개수 (*)
      total += Math.min(parseInt(mid / i, 10), n);
    }

    if (total >= k) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  log(result);
})();
