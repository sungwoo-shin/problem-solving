export function* keys(obj) {
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      yield k;
    }
  }
}
