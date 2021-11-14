const without = function(sourceArray, itemsToRemove) {
  const finalArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemove.includes(sourceArray[i])) {
      finalArray.push(sourceArray[i]);
    }
  } return finalArray;
};

// Test cases:

// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;