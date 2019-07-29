const isPalindrome = word => {
  let lower = word
    .toLowerCase()
    .split(" ")
    .join("");
  let reversed = "";
  for (let i = lower.length - 1; i >= 0; i--) {
    reversed += lower[i];
  }
  return lower === reversed;
};
isPalindrome(""); // true
isPalindrome("abcdcba"); // true
isPalindrome("abcd"); // false
isPalindrome("A man a plan a canal Panama");
