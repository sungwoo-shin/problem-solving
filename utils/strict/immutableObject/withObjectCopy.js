export const withObjectCopy = (object, modify) => {
  const copy = { ...object };
  modify(copy);

  return copy;
};
