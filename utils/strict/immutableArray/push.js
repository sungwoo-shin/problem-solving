import { withArrayCopy } from "./withArrayCopy.js";

export const push = (array, elem) =>
  withArrayCopy(array, (copy) => {
    copy.push(elem);
  });
