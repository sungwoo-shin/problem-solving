import withArrayCopy from "./withArrayCopy";

const arraySet = (array, idx, value) =>
  withArrayCopy(array, (copy) => {
    copy[idx] = value;
  });

export default arraySet;
