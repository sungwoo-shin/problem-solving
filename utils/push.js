const { default: withArrayCopy } = require("./withArrayCopy");

const push = (array, elem) => {
  return withArrayCopy(array, (copy) => {
    copy.push(elem);
  });
};

export default push;
