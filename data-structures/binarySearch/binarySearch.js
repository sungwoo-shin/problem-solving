const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    const mid = parseInt((start, end) / 2, 10);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

// const binarySearch = (arr, target, start, end) => {
//   if (start > end) {
//     return -1;
//   }

//   const mid = parseInt((start, end) / 2, 10);

//   let ret;
//   if (arr[mid] === target) {
//     ret = mid;
//   } else if (arr[mid] > target) {
//     ret = binarySearch(arr, target, start, mid - 1);
//   } else {
//     ret = binarySearch(arr, target, mid + 1, end);
//   }

//   return ret;
// };

module.exports = { binarySearch };
