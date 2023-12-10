import { curry } from "../helper/curry.js";

export const map = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});
