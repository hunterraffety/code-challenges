const reverseNumber = num => {
  let strNum = String(num);
  let reversed = "";
  for (let i = strNum.length - 1; i >= 0; i--) {
    reversed += strNum[i];
  }

  return Number(reversed);
};

reverseNumber(12345);
// -> 54321
