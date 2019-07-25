const isPrime = (num) => {
  if (num < 2) return false;
  let squareRoot = Math.sqrt(num);
  for (let i = 2; i <= squareRoot; i++) {
    if (squareRoot % i === 0) return false;
  }
  return true;
}

console.log(isPrime(0));                          // false
console.log(isPrime(1));                          // false
console.log(isPrime(17));                         // true
console.log(isPrime(10000000000000));             // false