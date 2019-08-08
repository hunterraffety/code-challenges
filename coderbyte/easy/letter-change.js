function LetterChanges(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const vowels = /[aeiou]/;
    const nonChar = /[^a-zA-Zsd]/;
    if (nonChar.test(str[i])) {
      result += str[i];
    } else {
      transformed = String.fromCharCode(str[i].charCodeAt() + 1);
      result += vowels.test(transformed)
        ? transformed.toUpperCase()
        : transformed;
    }
  }

  return result;
}
