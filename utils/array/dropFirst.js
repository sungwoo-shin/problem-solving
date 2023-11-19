import withArrayCopy from "./withArrayCopy";

const dropFirst = (array) =>
  withArrayCopy(array, (copy) => {
    copy.shift();
  });

export default dropFirst;
