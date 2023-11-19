const pluck = (array, field) => {
  return array.map((object) => object[field]);
};

export default pluck;
