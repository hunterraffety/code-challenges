function solve(a, b) {
  let result = "";
  let currentNumber = 2;

  while (result.length < a + b) {
    if (isPrime(currentNumber)) {
      result += currentNumber.toString();
    }

    currentNumber++;
  }

  return result.slice(a, a + b);
}

function isPrime(num) {
  const squareRoot = Math.sqrt(num);
  for (let i = 2; i <= squareRoot; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

solve(2, 2);
// 57

solve(10, 3);
// 192
