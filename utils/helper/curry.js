export const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (...__) => f(a, ...__);
