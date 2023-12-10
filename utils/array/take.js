import { curry } from "../helper/curry.js";

export const take = curry((l, iter) => {
  const res = [];
  iter = iter[Symbol.iterator]();

  let cur = iter.next();
  while (!cur.done) {
    const a = cur.value;
    res.push(a);
    if (res.length === l) {
      return res;
    }
    cur = iter.next();
  }

  return res;
});
