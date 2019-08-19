var numJewelsInStones = function(J, S) {
  let result = 0;
  for (let i = 0; i < S.length; i++) {
    if (J.includes(S[i])) {
      result++;
    }
  }
  return result;
};

// Alternate method
var numJewelsInStones = function(J, S) {
  let result = 0;
  let arr = S.split("");
  for (let i = 0; i < arr.length; i++) {
    if (J.indexOf(arr[i]) > -1) {
      result++;
    }
  }
  return result;
};

const numJewelsInStones = (J, S) =>
  S.split("").filter(char => J.indexOf(char) !== -1).length;

numJewelsInStones("aA", "aAAbbbb");
// 3
numJewelsInStones("z", "ZZ");
// 0
