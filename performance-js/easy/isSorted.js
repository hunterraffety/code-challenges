const isSorted = (arr) => {
  if (arr.length == 0) {
    return true;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    if (current > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

isSorted([])
// true
isSorted([-Infinity, -5, 0, 3, 9])
// true
isSorted([3, 9, -3, 10])   
// false