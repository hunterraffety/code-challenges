const fib = (num) => {
  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    return fib(num - 1) + fib(num - 2)
  }
}

fib(0)                              // 0
fib(1)                              // 1
fib(10)                             // 55
fib(20)                             // 6765