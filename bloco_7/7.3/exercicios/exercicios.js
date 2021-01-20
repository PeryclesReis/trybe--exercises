const assert = require('assert');

function division(x, y) {
  return x / y;
}
// const expected = division(9, 3);

function add(a, b) {
  return a + b;
}
// const expected = add(1, 2);

function sum(a, b) {
    if (typeof b !== 'number') throw new Error('nao pode ser String!');
    console.log(typeof b);
    return a + b;
}
const soma = sum(4, 5);
assert.strictEqual(soma, 9);
const soma2 = sum(0, 0);
assert.strictEqual(soma2, 0);
assert.throws(() => { sum(4, '5'); }, 'Error: nao pode ser String!');
