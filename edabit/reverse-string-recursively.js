function length(str) {
  if (str.length == 0) {
    return 0;
  }
  if (str.length == 1) return str[0].length;
  return str[0].length + length(str.substring(1));
}

const length = str => (str == "" ? 0 : length(str.substring(1)) + 1);

const length = str => {
  return str == "" ? 0 : length(str.substring(1)) + 1;
};

length("eh");
// 2
