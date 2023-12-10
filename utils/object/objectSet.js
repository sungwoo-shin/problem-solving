import { withObjectCopy } from "./withObjectCopy.js";

export const objectSet = (object, key, value) =>
  withObjectCopy(object, (copy) => {
    copy[key] = value;
  });
