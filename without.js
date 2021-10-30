const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const eqArrays = function(array1, array2) {
  let stringOfFirst = "";
  let stringOfSecond = "";
  for (let index1 = 0; index1 < array1.length; index1++) {
    if (typeof array1[index1] === "string") {
      stringOfFirst += array1[index1];
    } else if (typeof array1[index1] !== "string") {
      array1[index1].toString();
      stringOfFirst += array1[index1];
    }
  }
  for (let index2 = 0; index2 < array2.length; index2++) {
    if (typeof array2[index2] === "string") {
      stringOfSecond += array2[index2];
    } else if (typeof array2[index2] !== "string") {
      array2[index2].toString();
      stringOfSecond += array2[index2];
    }
  } if (stringOfFirst === stringOfSecond) {
    return true;
  } else {
    return false;
  }
};

const without = function(sourceArray, itemsToRemove) {
  const finalArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemove.includes(sourceArray[i])) {
      finalArray.push(sourceArray[i]);
    }
  } return finalArray;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);