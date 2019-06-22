function fearNotLetter(str) {
  const letters = [
    "",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let count = [];
  for (let i = 0; i < str.length; i++) {
    letters.find((char, index) => {
      if (str[i] == char) {
        count.push(index);
      }
    });
  }

  let missingLetter;
  for (let j = 0; j < count.length; j++) {
    if (j > 0 && count[j] !== count[j - 1] + 1) {
      missingLetter = count[j - 1] + 1;
    }
  }
  return letters[missingLetter];
}

fearNotLetter("abce");
// d
