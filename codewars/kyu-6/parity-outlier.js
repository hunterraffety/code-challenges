function findOutlier(integers) {
  let currentEven, currentOdd;
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < integers.length; i++) {
    let num = integers[i];
    if (Math.abs(num % 2) === 0 && oddCount > 1) {
      return num;
    } else if (Math.abs(num % 2) === 1 && evenCount > 1) {
      return num;
    } else if (Math.abs(num % 2) === 0) {
      currentEven = num;
      evenCount++;
    } else if (Math.abs(num % 2) === 1) {
      currentOdd = num;
      oddCount++;
    }
  }
  return evenCount === 1 ? currentEven : currentOdd;
}

// 1 Solution Codewars
function findOutlier(int) {
  var even = int.filter(a => a % 2 == 0);
  var odd = int.filter(a => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

// 2 Solution

function findOutlier(integers) {
  return integers.slice(0, 3).filter(even).length >= 2
    ? integers.find(odd)
    : integers.find(even);
}
function even(num) {
  return num % 2 == 0;
}
function odd(num) {
  return !even(num);
}
