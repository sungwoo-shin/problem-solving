import { withArrayCopy } from "./withArrayCopy.js";

export const dropLast = (array) =>
  withArrayCopy(array, (copy) => {
    copy.pop();
  });
