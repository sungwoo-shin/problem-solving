import { withArrayCopy } from "./withArrayCopy";

export const arraySet = (array, idx, value) =>
  withArrayCopy(array, (copy) => {
    copy[idx] = value;
  });
