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

module.exports = flatten;