export const withArrayCopy = (array, modify) => {
  const copy = array.slice();
  modify(copy);

  return copy;
};
