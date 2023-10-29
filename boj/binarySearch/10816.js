const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const n = Number(input[0]); // 1~500,000
const cardList = input[1].split(" ").map(Number); // -10,000,000~10,000,000
// const m = Number(input[2]); // 1~500,000
const queryList = input[3].split(" ").map(Number);

// O(N^2) 불가
// O(N log N) 각 쿼리에 대해 이미 정렬된 상태로 조회 -> O(M log N)

const getLowerBound = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2, 10);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
};

const getUpperBound = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2, 10);
    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
};

const getCntByRange = (arr, left, right) => {
  const rightIdx = getUpperBound(arr, right, 0, arr.length);
  const leftIdx = getLowerBound(arr, left, 0, arr.length);

  return rightIdx - leftIdx;
};

(function solution() {
  cardList.sort((a, b) => a - b);

  let result = "";
  queryList.forEach((query) => {
    const cnt = getCntByRange(cardList, query, query);
    result += `${cnt} `;
  });

  log(result.trim());
})();
