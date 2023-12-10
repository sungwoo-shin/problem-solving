import { withObjectCopy } from "./withObjectCopy.js";

export const objectDelete = (object, key) =>
  withObjectCopy(object, (copy) => {
    delete copy[key];
  });
