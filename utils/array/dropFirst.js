import { withArrayCopy } from "./withArrayCopy";

export const dropFirst = (array) =>
  withArrayCopy(array, (copy) => {
    copy.shift();
  });
