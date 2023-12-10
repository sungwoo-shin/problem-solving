import { reduce } from "../array/reduce.js";

export const L = {};

L.entries = function* (obj) {
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      yield [k, obj[k]];
    }
  }
};

L.keys = function* (obj) {
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      yield k;
    }
  }
};

L.values = function* (obj) {
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      yield obj[k];
    }
  }
};

export const object = (entries) =>
  reduce(
    (obj, [k, v]) => {
      obj[k] = v;

      return obj;
    },
    {},
    entries,
  );
