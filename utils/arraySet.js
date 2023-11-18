const { default: withArrayCopy } = require("./withArrayCopy");

const arraySet = (array, idx, value) => {
  return withArrayCopy(array, (copy) => {
    copy[idx] = value;
  });
};

export default arraySet;
