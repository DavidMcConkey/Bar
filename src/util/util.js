export function arrayContainsArray(superset, subset) {
  return subset.every(function (value) {
    return superset.indexOf(value) >= 0;
  });
}

export function removeOrAddItemFromArray(item, array) {
  if (array.includes(item)) {
    return array.filter((i) => i !== item);
  } else {
    return [...new Set([...array, item])];
  }
}
