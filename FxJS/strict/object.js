import { reduce } from "./reduce.js";

export const object = (entries) =>
  reduce(
    (obj, [k, v]) => {
      obj[k] = v;

      return obj;
    },
    {},
    entries,
  );
