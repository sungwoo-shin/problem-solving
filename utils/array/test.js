import { go } from "../helper/go.js";

const arr = [1, 2, 3, 4, 5];

const b = go(arr, (arr2) => arr2.map((a) => a * a));

console.log(b);
