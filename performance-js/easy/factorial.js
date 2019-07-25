const factorial = num => {
  if (num >= 0 && num < 2) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }
}

console.log(factorial(0))                        // 1
console.log(factorial(1))                        // 1
console.log(factorial(6))                        // 720