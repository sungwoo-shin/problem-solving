import { withArrayCopy } from "./withArrayCopy.js";

export const removeItems = (array, idx, count) =>
  withArrayCopy(array, (copy) => {
    copy.splice(idx, count);
  });
