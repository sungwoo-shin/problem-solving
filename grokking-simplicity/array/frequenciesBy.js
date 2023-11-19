const frequenciesBy = (array, f) => {
  const ret = {};
  array.forEach((element) => {
    const key = f(element);
    if (ret[key]) {
      ret[key] += 1;
    } else {
      ret[key] = 1;
    }
  });

  return ret;
};

export default frequenciesBy;
