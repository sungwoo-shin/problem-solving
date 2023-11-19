const groupBy = (array, f) => {
  const ret = {};
  array.forEach((element) => {
    const key = f(element);
    if (ret[key]) {
      ret[key].push(element);
    } else {
      ret[key] = [element];
    }
  });

  return ret;
};

export default groupBy;
