const takeUntil = function(array, callback) {
  const newArray = [];
  for (let item of array) {
    if (!callback(item)) {
      newArray.push(item);
    } else {
      return newArray;
    }
  } return newArray;
};

module.exports = takeUntil;