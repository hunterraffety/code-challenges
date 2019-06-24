function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return n;
}

function sumPrimes(num) {
  const sum = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum.push(i);
    }
  }
  return sum.reduce((acc, cv) => acc + cv);
}

sumPrimes(10);
// 17 -> 2 + 3 + 5 + 7
