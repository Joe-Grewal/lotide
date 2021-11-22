const without = function(sourceArray, itemsToRemove) {
  const finalArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemove.includes(sourceArray[i])) {
      finalArray.push(sourceArray[i]);
    }
  } return finalArray;
};

module.exports = without;