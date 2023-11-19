const range = (start, end) => {
  const ret = [];
  let i;
  for (i = start; i < end; i += 1) {
    ret.push(i);
  }

  return ret;
};

export default range;
