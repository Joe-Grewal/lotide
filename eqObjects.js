const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const keys of Object.keys(object1)) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      return eqArrays(object1[keys], object2[keys]);
    } else if (typeof(object1[keys]) !== typeof(object2[keys])) {
      return false;
    } else if (object1[keys] !== object2[keys]) {
      return false;
    }
  } return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

console.log(eqObjects(ab, ba));

assertEqual(eqObjects(ab, ba), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false