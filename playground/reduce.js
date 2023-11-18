const reduce = (array, init, f) => {
  let accum = init;
  array.forEach((element) => {
    accum = f(accum, element);
  });

  return accum;
};

export default reduce;
