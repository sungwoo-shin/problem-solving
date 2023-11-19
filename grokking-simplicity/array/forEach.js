const forEach = (array, f) => {
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    f(item);
  }
};

export default forEach;
