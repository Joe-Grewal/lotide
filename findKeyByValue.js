const findKeyByValue = (object, value) => {
  const arrayOfKeys = Object.keys(object);
  for (const keys of arrayOfKeys) {
    if (object[keys] === value) {
      return keys;
    }
  }
};

// Test cases:

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;