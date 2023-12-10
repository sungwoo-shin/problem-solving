import { withObjectCopy } from "./withObjectCopy";

export const objectSet = (object, key, value) =>
  withObjectCopy(object, (copy) => {
    copy[key] = value;
  });
