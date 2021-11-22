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

module.exports = countLetters;