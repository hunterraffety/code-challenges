function SimpleSymbols(str) {
  const regex = /[a-z]/gi;
  for (let i = 0, n = str.length; i < n; i++) {
    if (regex.test(str[i])) {
      if (str[i - 1] !== "+" || str[i + 1] !== "+") {
        return false;
      }
    }
  }
  return true;
}
SimpleSymbols("+d+=3=+s+");
// true
SimpleSymbols("f++d+");
// false
