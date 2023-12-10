import { curry } from "../helper/curry.js";

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

L.entries = function* (obj) {
  for (const k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      yield [k, obj[k]];
    }
  }
};
