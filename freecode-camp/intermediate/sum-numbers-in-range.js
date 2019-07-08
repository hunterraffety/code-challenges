function sumAll(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const sum = [];
  let start = sorted[0];
  let end = sorted[sorted.length - 1];
  while (start <= end) {
    sum.push(start++);
  }

  return sum.reduce((acc, cv) => {
    return acc + cv;
  }, 0);
}
