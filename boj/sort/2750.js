const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

// const n = Number(input[0]); // 1 <= N <= 1000 // O(N^2)
input.shift();
const numberList = input.map(Number);

// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     let minIdx = i;
//     for (let j = i; j < arr.length; j += 1) {
//       if (arr[minIdx] > arr[j]) {
//         minIdx = j;
//       }
//     }
//     const temp = arr[i];
//     arr[i] = arr[minIdx];
//     arr[minIdx] = temp;
//   }
// };

(function solution() {
  numberList.sort((a, b) => a - b);
  //   selectionSort(numberList);
  log(numberList.join("\n"));
})();
