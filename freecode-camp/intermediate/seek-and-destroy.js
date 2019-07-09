function destroyer(arr) {
  // Spread in arguments
  const values = [...arguments];
  // Remove first argument (array to be checked)
  values.shift();
  return arr.filter(item => !values.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// -> [1, 1]
