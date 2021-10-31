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

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const middle = function(array) {
  const finalArray = [];
  const numOfElements = array.length;
  if (numOfElements <= 2) {
    return finalArray;
  } else if (numOfElements % 2 !== 0) {
    let index = Math.floor(numOfElements / 2);
    finalArray.push(array[index]);
  } else {
    let index1 = (numOfElements / 2);
    let index2 = index1 - 1;
    finalArray.push(array[index2], array[index1]);
  } return finalArray;
};

console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4, 5])); // => []

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);