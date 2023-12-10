import { withArrayCopy } from "./withArrayCopy.js";

export const arraySet = (array, idx, value) =>
  withArrayCopy(array, (copy) => {
    copy[idx] = value;
  });
