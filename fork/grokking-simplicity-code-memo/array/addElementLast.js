import withArrayCopy from "./withArrayCopy";

const addElementLast = (array, elem) => {
  return withArrayCopy(array, (copy) => {
    copy.push(elem);
  });
};

export default addElementLast;
