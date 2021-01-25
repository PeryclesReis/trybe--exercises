
const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];


function flatten() {
  return arrays.reduce((previusArray, currentArray) => {
    return previusArray.concat(currentArray);
    // console.log(previusArray);
    // console.log(currentArray);
    //  currentArray.forEach((item) => {
    //   previusArray.push(item);
    //  });
  });
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
console.log(flatten());