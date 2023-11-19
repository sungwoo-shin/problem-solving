import withArrayCopy from "./withArrayCopy";

const push = (array, elem) =>
  withArrayCopy(array, (copy) => {
    copy.push(elem);
  });

export default push;
