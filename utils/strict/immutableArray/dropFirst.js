import { withArrayCopy } from "./withArrayCopy.js";

export const dropFirst = (array) =>
  withArrayCopy(array, (copy) => {
    copy.shift();
  });
