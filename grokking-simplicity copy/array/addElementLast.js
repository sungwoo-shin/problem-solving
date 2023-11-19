import withArrayCopy from "./withArrayCopy";

const addElementLast = (array, elem) =>
  withArrayCopy(array, (copy) => {
    copy.push(elem);
  });

export default addElementLast;
