import { go } from "../helper/go.js";
import { L, head } from "./lazy.js";
// import { take } from "./take.js";'

const arr = [1, 2, 3, 4, 5];

const b = go(
  arr,
  L.map((a) => a * a),
  L.filter((a) => a % 2),
  // take(1),
  head,
);

console.log(b);
