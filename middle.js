const middle = function(array) {
  const finalArray = [];
  const numOfElements = array.length;
  if (numOfElements <= 2) {
    return finalArray;
  } else if (numOfElements % 2 !== 0) {
    let index = Math.floor(numOfElements / 2);
    finalArray.push(array[index]);
  } else {
    let index1 = (numOfElements / 2);
    let index2 = index1 - 1;
    finalArray.push(array[index2], array[index1]);
  } return finalArray;
};

module.exports = middle;