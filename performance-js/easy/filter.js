const filter = (arr, cb) => {
  const store = [];
  for (let item of arr) {
    if (cb(item)) store.push(item);
  }
  return store;
}

filter([1, 2, 3, 4], n => n < 3);
// [1, 2]