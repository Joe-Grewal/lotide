const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;