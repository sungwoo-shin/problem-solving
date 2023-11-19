const concat = (arrays) => {
  const ret = [];
  arrays.forEach((array) => {
    array.forEach((element) => {
      ret.push(element);
    });
  });

  return ret;
};

export default concat;
