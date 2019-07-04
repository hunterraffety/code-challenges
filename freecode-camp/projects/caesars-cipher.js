function rot13(str) {
  // LBH QVQ VG!
  const cipher = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M"
  };
  str = str
    .split("")
    .map(char => {
      if (cipher[char]) {
        return cipher[char];
      } else {
        return char;
      }
    })
    .join("");
  return str;
}
