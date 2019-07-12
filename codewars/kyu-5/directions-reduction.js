function dirReduc(arr) {
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    let top = stack[stack.length - 1];
    if (
      (top === "NORTH" && arr[i] === "SOUTH") ||
      (top === "SOUTH" && arr[i] === "NORTH") ||
      (top === "EAST" && arr[i] === "WEST") ||
      (top === "WEST" && arr[i] === "EAST")
    ) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  return stack;
}

dirReduc([
  "NORTH",
  "EAST",
  "NORTH",
  "EAST",
  "WEST",
  "WEST",
  "EAST",
  "EAST",
  "WEST",
  "SOUTH"
]);
// -> ["NORTH", "EAST"]
