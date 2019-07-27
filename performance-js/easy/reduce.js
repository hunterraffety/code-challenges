const reduce = (arr, cb, initialValue) => {
  let accumulator = (typeof initialValue !== 'undefined') ? initialValue : arr[0];
  if (typeof initialValue !== 'undefined') {
    for (let i = 0; i < arr.length; i++) {
      accumulator = cb(accumulator, arr[i]);
    }
  } else {
    for (let i = 1; i < arr.length; i++) {
      accumulator = cb(accumulator, arr[i]);
    }
  }
  return accumulator;
}


reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
