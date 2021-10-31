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

const flatten = function(nestedArray) {
  const flatArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      let innerArray = nestedArray[i];
      for (let f = 0; f < innerArray.length; f++) {
        flatArray.push(innerArray[f]);
      }
    } else {
      flatArray.push(nestedArray[i]);
    }
  } return flatArray;
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]