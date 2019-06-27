function convertToDecimal(str) {
  let result = 0;
  let position;
  for (let i = str.length; i >= 0; i--) {
    position = Math.abs(i - (str.length - 1));
    if (str[i] == "1") {
      result += Math.pow(2, position);
    }
  }
  return result;
}

function binaryAgent(str) {
  const arr = str.split(" ");
  return arr
    .map(item => convertToDecimal(item))
    .map(num => String.fromCharCode(num))
    .join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
// Aren't bonfires fun!?"
