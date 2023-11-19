import withArrayCopy from "./withArrayCopy";

const dropLast = (array) =>
  withArrayCopy(array, (copy) => {
    copy.pop();
  });

export default dropLast;
