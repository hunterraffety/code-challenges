const quickSort = nums => {
  if (nums.length <= 1) {
    return nums;
  }
  let pivot = nums.pop();

  let left = [];
  let right = [];

  while (nums.length) {
    if (nums[0] < pivot) {
      left.push(nums.shift());
    } else {
      right.push(nums.shift());
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
  // return [].concat(quickSort(left), pivot, quickSort(right));
};
