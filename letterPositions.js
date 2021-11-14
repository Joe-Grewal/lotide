const letterPositions = function(sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index++) {
    if (!results[(sentence[index])]) {
      results[(sentence[index])] = [];
      results[(sentence[index])].push(index);
    } else {
      results[(sentence[index])].push(index);
    }
  }
  delete results[" "];
  return results;
};

// Test cases:

// console.log(letterPositions("Lighthouse Labs"));

// const test = letterPositions("hello");

// assertArraysEqual(test["e"], [1]);

module.exports = letterPositions;