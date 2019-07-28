const indexOf = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// indexOf([1, 2, 3], 1)               // 0
indexOf([1, 2, 3], 4)               // -1