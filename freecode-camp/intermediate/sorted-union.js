function uniteUnique(arr) {
  const unique = [];
  const flattenedArr = [...arguments].reduce((acc, cv) => {
    return acc.concat(cv);
  }, []);

  for (let i = 0; i < flattenedArr.length; i++) {
    if (!unique.includes(flattenedArr[i])) {
      unique.push(flattenedArr[i]);
    }
  }

  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// [1, 3, 2, 5, 4]
