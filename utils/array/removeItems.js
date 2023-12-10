import { withArrayCopy } from "./withArrayCopy";

export const removeItems = (array, idx, count) =>
  withArrayCopy(array, (copy) => {
    copy.splice(idx, count);
  });
