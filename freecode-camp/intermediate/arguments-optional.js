function addTogether() {
  if (arguments.length === 1 && typeof arguments[0] == "number") {
    let first = arguments[0];
    return function() {
      let second = arguments[0];
      if (typeof second === "number") {
        return first + second;
      }
    };
  } else if (
    arguments.length == 2 &&
    typeof arguments[0] == "number" &&
    typeof arguments[1] == "number"
  ) {
    return arguments[0] + arguments[1];
  } else {
    return undefined;
  }
}

addTogether(2, 3);
// 5
addTogether(2)(3);
// 5
