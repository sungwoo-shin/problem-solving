import { withArrayCopy } from "./withArrayCopy";

export const addElementLast = (array, elem) =>
  withArrayCopy(array, (copy) => {
    copy.push(elem);
  });
