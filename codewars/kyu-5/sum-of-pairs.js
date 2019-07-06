var sum_pairs = function(ints, sum) {
  const store = {};
  let arrLength = ints.length;

  for (let i = 0; i < arrLength; i++) {
    let currentValue = ints[i];
    let secondValue = sum - currentValue;
    // Store value of number required to reach sum if it becomes available in array
    let prevIndex = store[secondValue];
    if (prevIndex !== undefined) {
      let pair = [secondValue, currentValue];
      return pair;
    } else if (store[currentValue] === undefined) {
      store[currentValue] = i;
    }
  }
};

sum_pairs([4, 3, 2, 3, 4], 6);
// -> [4, 2]

// 1 Solution Codewars

var sum_pairs = function(ints, s) {
  var seen = {};
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true;
  }
};

// 2 Solution Codewars (using Set)

function sum_pairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) return [s - i, i];
    seen.add(i);
  }
}
