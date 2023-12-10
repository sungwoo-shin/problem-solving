import withArrayCopy from "./withArrayCopy";

const removeItems = (array, idx, count) => {
  return withArrayCopy(array, (copy) => {
    copy.splice(idx, count);
  });
};

export default removeItems;
