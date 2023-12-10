import { reduce } from "../array/reduce";

export const go = (...args) => reduce((a, f) => f(a), args);
