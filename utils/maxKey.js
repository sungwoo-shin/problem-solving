/** 배열에서 가장 큰 값을 찾습니다. */
const maxKey = (array, init, f) => {
  return array.reduce((biggestSoFar, element) => {
    if (f(biggestSoFar) > f(element)) {
      return biggestSoFar;
    }

    return element;
  }, init);
};

export default maxKey;
