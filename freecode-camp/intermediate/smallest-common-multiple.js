function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function smallestCommons(arr) {
  const sorted = arr.sort((a, b) => a - b);
  let min = sorted[0];
  let max = sorted[sorted.length - 1];

  let range = [];
  while (min <= max) {
    range.push(min);
    min++;
  }

  let result = range[0];
  for (let i = 1; i < range.length; i++) {
    result = lcm(result, range[i]);
  }
  return result;
}

// smallestCommons([1,3]);
// -> 6
// smallestCommons([1,5]);
//  -> 60
smallestCommons([2, 10]);
// 2520
