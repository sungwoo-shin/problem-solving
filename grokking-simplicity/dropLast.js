import withArrayCopy from "./withArrayCopy";

const dropLast = (array) => {
  return withArrayCopy(array, (copy) => {
    copy.pop();
  });
};

export default dropLast;
