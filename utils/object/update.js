import { objectSet } from "./objectSet.js";

export const update = (object, key, modify) => {
  const value = object[key];
  const newValue = modify(value);
  const newObject = objectSet(object, key, newValue);

  return newObject;
};
