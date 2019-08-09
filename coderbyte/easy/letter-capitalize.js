function LetterCapitalize(str) {
  let words = str.split(" ");

  for (let i = 0, length = words.length; i < length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  str = words.join(" ");
  return str;
}

LetterCapitalize("i ran there");
// I Ran There
