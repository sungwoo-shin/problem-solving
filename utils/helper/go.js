import { reduce } from "../array/reduce.js";

export const go = (...args) => reduce((a, f) => f(a), args);
