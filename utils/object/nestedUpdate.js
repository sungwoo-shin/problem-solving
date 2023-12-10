import { dropFirst } from "../array/dropFirst.js";
import { update } from "./update.js";

export const nestedUpdate = (object, keys, modify) => {
  if (keys.length === 0) {
    return modify(object);
  }

  const key1 = keys[0];
  const restOfKeys = dropFirst(keys);

  return update(object, key1, (value1) =>
    nestedUpdate(value1, restOfKeys, modify),
  );
};
