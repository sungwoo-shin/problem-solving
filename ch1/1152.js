const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

const wordList = input[0].trim().split(" ");

if (wordList === "") {
  log(0);
} else {
  log(wordList.length);
}
