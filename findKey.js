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

const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

assertArraysEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), ['noma']);