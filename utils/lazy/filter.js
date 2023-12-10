import { curry } from "../helper/curry.js";

export const filter = curry(function* (f, iter) {
  for (const a of iter) {
    if (f(a)) {
      yield a;
    }
  }
});
