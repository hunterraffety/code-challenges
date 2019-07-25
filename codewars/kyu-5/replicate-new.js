function nouveau(constructorFunc, ...args) {
  let first = Object(constructorFunc.prototype) === constructorFunc.prototype ? constructorFunc.prototype : Object.prototype;
  let plainObject = Object.create(first);
  let result = constructorFunc.call(plainObject, ...args);

  if (Object(result) === result) {
    return result;
  }
  return plainObject;
}

// Number 1 Code Solution on Codewars
function nouveau(Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);
  return result === Object(result) ? result : instance;
}
