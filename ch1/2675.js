const { log } = console;

const fs = require("fs");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

const t = Number(input[0]);
const result = [];
for (let i = 0; i < t; i += 1) {
  const [r, s] = input[i + 1].split(" ");
  result.push(
    s
      .split("")
      .map((c) => c.repeat(r))
      .join(""),
  );
}
log(result.join("\n"));
