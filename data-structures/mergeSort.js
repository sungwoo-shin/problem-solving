const merge = (arr, left, mid, right) => {
  let i = left;
  let j = mid + 1;
  let k = left;
  const sorted = [];
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      sorted[k] = arr[i];
      i += 1;
    } else {
      sorted[k] = arr[j];
      j += 1;
    }
    k += 1;
  }

  if (i > mid) {
    // 왼쪽 배열에 대한 처리가 다 끝난 경우
    for (; j <= right; j += 1) {
      sorted[k] = arr[j];
      k += 1;
    }
  } else {
    // 오른쪽 배열에 대한 처리가 다 끝난 경우
    for (; i <= mid; i += 1) {
      sorted[k] = arr[i];
      k += 1;
    }
  }

  for (let x = left; x <= right; x += 1) {
    arr[x] = sorted[x];
  }
};

const mergeSort = (arr, left, right) => {
  if (left < right) {
    const mid = parseInt((left + right) / 2, 10);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
};

module.exports = { mergeSort };
