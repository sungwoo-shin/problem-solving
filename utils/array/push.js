import { withArrayCopy } from "./withArrayCopy";

export const push = (array, elem) =>
  withArrayCopy(array, (copy) => {
    copy.push(elem);
  });
