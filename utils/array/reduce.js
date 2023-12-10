import { curry } from "../helper/curry.js";

export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }

  let cur = iter.next();
  while (!cur.done) {
    acc = f(acc, cur.value);
    cur = iter.next();
  }

  return acc;
});
