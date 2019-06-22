function pairElement(str) {
  str = str.split("");
  const pairings = str.map(char => {
    switch (char) {
      case "G":
        return ["G", "C"];
      case "C":
        return ["C", "G"];
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      default:
        return "";
    }
  });

  return pairings;
}

pairElement("GCG");
// ["G", "C"], ["C","G"],["G", "C"]]
