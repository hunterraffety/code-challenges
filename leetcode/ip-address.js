var defangIPaddr = function(address) {
  let result = "";
  for (let char of address) {
    if (char == ".") {
      result += "[.]";
    } else {
      result += char;
    }
  }

  return result;
};

defangIPaddr("1.1.1.1");
// -> '1[.]1[.]1[.]1'
