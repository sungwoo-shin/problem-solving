import { withArrayCopy } from "./withArrayCopy";

export const dropLast = (array) =>
  withArrayCopy(array, (copy) => {
    copy.pop();
  });
