// Call stack takes up O(n) space - tied to function calls

// Recursive
function product1ToN(n) {
  // We assume n >= 1
  return n > 1 ? n * product1ToN(n - 1) : 1;
}

// Iterative
// Call stack takes up constant space because only local variables are changed. No functions are called
function product1ToN(n) {
  // We assume n >= 1

  let result = 1;
  for (let num = 1; num <= n; num++) {
    result *= num;
  }

  return result;
}

// In place vs. out of place

function squareArrayInPlace(intArray) {
  intArray.forEach((int, index) => {
    intArray[index] *= int;
  });

  // NOTE: no need to return anything - we modified
  // intArray in place
}

function squareArrayOutOfPlace(intArray) {
  // We allocate a new array that we'll fill in with the new values
  const squaredArray = [];

  intArray.forEach((int, index) => {
    squaredArray[index] = Math.pow(int, 2);
  });

  return squaredArray;
}
