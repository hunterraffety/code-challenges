function palindrome(str) {
  str = str
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
  let reversed = str
    .split("")
    .reverse()
    .join("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");
