import { go } from "../helper/go.js";
import { curry } from "../helper/curry.js";
import { pipe } from "../helper/pipe.js";
import { take } from "./take.js";
import { takeAll } from "./takeAll.js";

export const L = {};

L.range = function* (l) {
  let i = 0;
  while (i < l) {
    yield i;
    i += 1;
  }
};

L.map = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});

L.filter = curry(function* (f, iter) {
  for (const a of iter) {
    if (f(a)) {
      yield a;
    }
  }
});

export const map = curry(pipe(L.map, takeAll));

export const filter = curry(pipe(L.filter, takeAll));

export const head = pipe(take(1), ([h]) => h);

export const find = curry((f, iter) => go(iter, L.filter(f), head));
