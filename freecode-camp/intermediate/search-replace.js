function myReplace(str, before, after) {
  const resultingStr = [];
  const strArr = str.split(" ");

  // Match case of after argument to before argument
  let matchedCase = "";
  for (let j = 0; j < after.length; j++) {
    if (before[j] && before[j] === before[j].toUpperCase()) {
      matchedCase += after[j].toUpperCase();
    } else {
      matchedCase += after[j];
    }
  }

  // Loop through the array
  for (let i = 0; i < strArr.length; i++) {
    // Replace the string in the array that matches the word to be replaced
    if (strArr[i] === before) {
      strArr[i] = matchedCase;
      resultingStr.push(strArr[i]);
    } else {
      resultingStr.push(strArr[i]);
    }
  }
  return resultingStr.join(" ");
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");
// Let us get back to more Algorithms
