const commonElements = (arr1, arr2) => {
  const merged = arr1.concat(arr2);
  const result = [];
  for (let i = 0; i < merged.length; i++) {
    if (
      arr1.includes(merged[i]) &&
      arr2.includes(merged[i]) &&
      !result.includes(merged[i])
    ) {
      result.push(merged[i]);
    }
  }
  return result;
};

// commonElements([1, 2, 3, 4], [3, 4, 5, 6]);
// -> [3, 4];
// commonElements([1, 2], [5, 6]);
// -> []
