var toLowerCase = function(str) {
  return str && str.toLowerCase();
};

var toLowerCase = function(str) {
  const arr = str.split("");
  const length = arr.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    if (arr[i].charCodeAt() > 64 && arr[i].charCodeAt() < 91) {
      let cap = arr[i].charCodeAt() + 32;
      result += String.fromCharCode(cap);
    } else {
      result += arr[i];
    }
  }
  return result;
};

toLowerCase("Hello");
// hello
