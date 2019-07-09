function diffArray(arr1, arr2) {
  const merged = [...arr1, ...arr2];

  return merged.filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// -> [4]
