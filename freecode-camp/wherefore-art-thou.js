function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(item => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (!item.hasOwnProperty(sourceKeys[i])) {
        return false;
      } else if (item[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return item;
  });
}
