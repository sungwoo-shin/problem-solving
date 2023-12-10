import { withObjectCopy } from "./withObjectCopy";

export const objectDelete = (object, key) =>
  withObjectCopy(object, (copy) => {
    delete copy[key];
  });
