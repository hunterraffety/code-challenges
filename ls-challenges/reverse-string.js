// Method Chaining
const reverseString = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

reverseString("hello world");
// ->'dlrow olleh'

// Using a for loop
const reverseString = str => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};

reverseString("hello world");
