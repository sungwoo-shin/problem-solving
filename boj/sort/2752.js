const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

const solution = (inputList) => {
  const nbrList = inputList[0].split(" ").map(Number);
  // numberList.sort((a, b) => a - b);

  const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j += 1) {
        if (arr[minIdx] > arr[j]) {
          minIdx = j;
        }
      }
      const temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  };
  selectionSort(nbrList);

  log(nbrList.join(" "));
};

solution(input);
