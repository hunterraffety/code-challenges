function nouveau(constructorFunc, ...args) {
  let first = Object(constructorFunc.prototype) === constructorFunc.prototype ? constructorFunc.prototype : Object.prototype;
  let plainObject = Object.create(first);
  let result = constructorFunc.call(plainObject, ...args);

  if (Object(result) === result) {
    return result;
  }
  return plainObject;
}