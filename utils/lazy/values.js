export function* values(obj) {
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      yield obj[k];
    }
  }
}
