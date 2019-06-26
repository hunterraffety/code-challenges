function dropElements(arr, func) {
  let result = [];
  let start = -1;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      start = i;
      break;
    }
  }

  return start === -1 ? [] : arr.slice(start);
}

dropElements([0, 1, 0, 1], function(n) {
  return n === 1;
});
// [1, 0, 1]
