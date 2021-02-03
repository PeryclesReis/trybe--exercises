const assert = require('assert');

function division(x, y) {
  return x / y;
}
// const expected = division(9, 3);

function add(a, b) {
  return a + b;
}
// const expected = add(1, 2);

// A função sum(a, b) retorna a soma do parâmetro a com o b
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
assert.strictEqual(typeof sum, 'function');
// Teste se o retorno de sum(4, 5) é 9
const soma = sum(4, 5);
assert.strictEqual(soma, 9);

// Teste se o retorno de sum(0, 0) é 0
const soma2 = sum(0, 0);
assert.strictEqual(soma2, 0);

// Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
assert.throws(() => sum(4, '5'), 'Error: nao pode ser String!');

// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => sum(4, '5') , /^Error: parameters must be numbers$/);
