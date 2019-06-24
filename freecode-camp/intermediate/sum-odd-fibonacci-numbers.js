function sumFibs(num) {
  const fibonacciNumbers = [1, 1];
  let first = 0;
  let second = 1;
  while (fibonacciNumbers[first] + fibonacciNumbers[second] <= num) {
    fibonacciNumbers.push(fibonacciNumbers[first] + fibonacciNumbers[second]);
    first++;
    second++;
  }
  return fibonacciNumbers
    .filter(num => num % 2 === 1)
    .reduce((acc, cv) => acc + cv);
}

sumFibs(4);
// -> 5, 1 + 1 + 3 = 5
