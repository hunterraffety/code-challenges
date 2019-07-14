function longestConsecutive(arr, k) {
  let longest = "";

  if (arr.length === 0 || k > arr.length || k <= 0) {
    return "";
  }
  for (let i = 0; i < arr.length; i++) {
    let temp = arr.slice(i, i + k);
    if (temp.join("").length > longest.length) {
      longest = temp.join("");
    }
  }
  return longest;
}

longestConsecutive(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3);
// -> ixoyx3452zzzzzzzzzzzz
