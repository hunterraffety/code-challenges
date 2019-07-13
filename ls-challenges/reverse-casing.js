const example = "HELLO world!";
const reverseCase = str => {
  let reverseCasing = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === str[i]) {
      reverseCasing += str[i].toUpperCase();
    } else {
      reverseCasing += str[i].toLowerCase();
    }
  }

  return reverseCasing;
};

reverseCase(example);
// <--- hello WORLD!
