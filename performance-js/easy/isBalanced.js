const isBalanced = str => {
  const stack = [];

  for (let char of str) {
    if (char == "{" || (stack.length == 0 && char == "}")) {
      stack.push(char);
    } else if (char == "}") {
      stack.pop();
    }
  }
  return stack.length == 0 ? true : false;
};

isBalanced("}{"); // false
isBalanced("{{}"); // false
isBalanced("{}{}"); // true
isBalanced("foo { bar { baz } boo }"); // true
isBalanced("foo { bar { baz }"); // false
isBalanced("foo { bar } }"); // false
