const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  const results = {};
  const newSentence = sentence.replaceAll(" ", "");
  for (const letter of newSentence) {
    if (!results[letter]) {
      results[letter] = 1;
    } else {
      results[letter] += 1;
    }
  } return results;
};

const words = countLetters("Joe is smart");

assertEqual(words["s"], 2);

console.log(countLetters('Lighthouse Labs'));