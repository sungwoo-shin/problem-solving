import { go } from "./go";

export const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);
