function LongestWord(sen) {
  let sentence = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  sentence = sentence.split(" ");

  let length = 0;
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length > length) {
      word = sentence[i];
      length = sentence[i].length;
    }
  }
  return word;
}
