const { default: concat } = require("./concat");

const concatMap = (array, f) => {
  return concat(array.map(f));
};

export default concatMap;
