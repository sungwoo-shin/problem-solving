const withArrayCopy = (array, modify) => {
  const copy = array.slice();
  modify(copy);

  return copy;
};

export default withArrayCopy;
