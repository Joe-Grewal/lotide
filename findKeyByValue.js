const findKeyByValue = (object, value) => {
  const arrayOfKeys = Object.keys(object);
  for (const keys of arrayOfKeys) {
    if (object[keys] === value) {
      return keys;
    }
  }
};

module.exports = findKeyByValue;