const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2, 10);
    if (arr[mid] >= target) {
      end = mid;
    }
  }

  return end;
};

const upperBound = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2, 10);
    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
};

const countByRange = (arr, leftValue, rightValue) => {
  const rightIdx = upperBound(arr, rightValue, 0, arr.length);
  const leftIdx = lowerBound(arr, leftValue, 0, arr.length);

  return rightIdx - leftIdx;
};

module.exports = { lowerBound, upperBound, countByRange };
