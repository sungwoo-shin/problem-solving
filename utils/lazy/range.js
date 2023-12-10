export function* range(l) {
  let i = 0;
  while (i < l) {
    yield i;
    i += 1;
  }
}
