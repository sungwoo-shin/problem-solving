const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const { log } = console;

const t = Number(input[0]);

const isPalindrome = (word) => word === word.split("").reverse().join("");

(function solution() {
  for (let tc = 1; tc <= t; tc += 1) {
    const word = input[tc];
    if (isPalindrome(word)) {
      log(0);
    } else {
      let isPseudoPalindrome = false;
      const wordLength = word.length;
      for (let i = 0; i < parseInt(wordLength / 2, 10); i += 1) {
        if (word[i] !== word[wordLength - i - 1]) {
          const isPalindromeIfDeleteFront = isPalindrome(
            word.slice(0, i) + word.slice(i + 1, wordLength),
          );
          const isPalindromeIfDeleteBack = isPalindrome(
            word.slice(0, wordLength - i - 1) +
              word.slice(wordLength - i, wordLength),
          );
          if (isPalindromeIfDeleteFront || isPalindromeIfDeleteBack) {
            isPseudoPalindrome = true;
          }
          break;
        }
      }

      if (isPseudoPalindrome) {
        log(1);
      } else {
        log(2);
      }
    }
  }
})();
