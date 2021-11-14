const eqArrays = require('./assertEqual');

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

// Test cases:
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// const abc = { a: "1", b: "2", c: "3" };

// console.log(eqObjects(ab, ba));

// assertEqual(eqObjects(ab, ba), true);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;