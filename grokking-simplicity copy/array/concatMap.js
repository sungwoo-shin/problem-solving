const { default: concat } = require("./concat");

const concatMap = (array, f) => concat(array.map(f));

export default concatMap;
