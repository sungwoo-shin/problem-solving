export function* entries(obj) {
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      yield [k, obj[k]];
    }
  }
}
