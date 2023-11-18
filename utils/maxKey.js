const maxKey = (array, init, f) => {
  return array.reduce((biggestSoFar, element) => {
    if (f(biggestSoFar) > f(element)) {
      return biggestSoFar;
    }

    return element;
  }, init);
};

export default maxKey;
