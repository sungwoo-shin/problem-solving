import { withArrayCopy } from "./withArrayCopy.js";

export const addElementLast = (array, elem) =>
  withArrayCopy(array, (copy) => {
    copy.push(elem);
  });
