const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < i; j += 1) {
      // 내림 차순
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

module.exports = { bubbleSort };
