// First Attempt
const missing = arr => {
  const sorted = arr.sort();
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[0] != 1) {
      return 1;
    } else if (sorted[i] + 1 != sorted[i + 1]) {
      return sorted[i] + 1;
    }
  }
  return undefined;
};

// Using sum

const missing = arr => {
  if (arr.length > 0) {
    const sorted = arr.sort();
    const result =
      (sorted[sorted.length - 1] + 1) * (sorted[sorted.length - 1] / 2);
    const missingNum = result - sorted.reduce((acc, cv) => acc + cv);
    return missingNum > 0 ? missingNum : undefined;
  }
  return undefined;
};

missing([]); // undefined
missing([1, 4, 3]); // 2
missing([2, 3, 4]); // 1
missing([5, 1, 4, 2]); // 3
missing([1, 2, 3, 4]); // undefined
