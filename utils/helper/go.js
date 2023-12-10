import { reduce } from "../strict/reduce.js";

export const go = (...args) => reduce((a, f) => f(a), args);
