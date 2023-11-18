import withArrayCopy from "./withArrayCopy";

const dropFirst = (array) => {
  return withArrayCopy(array, (copy) => {
    copy.shift();
  });
};

export default dropFirst;
