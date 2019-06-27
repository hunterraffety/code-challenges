function steamrollArray(arr) {
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray = flattenedArray.concat(steamrollArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
// [1, 2, 3, 4]
