const assert = require('assert');
// escreva a função addOne aqui

// Escreva a função addOne para passar nos testes já implementados.
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const addOne = (myArray,aumento) => {
  let output = [];
  if (aumento){
    for (const key in myArray) {
      const element = myArray[key];
      let somador = element + aumento;
      output.push(somador);
    }
    return output;
  } else

  return myArray;
}
// console.log(addOne(myArray));

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(addOne(myArray, 1), expected);
assert.deepStrictEqual(addOne(myArray), unchanged);