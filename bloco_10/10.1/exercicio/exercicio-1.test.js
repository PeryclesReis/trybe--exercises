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
// --------------------------------------testes----------------------------------------------
// assert.strictEqual(typeof sum, 'function');
describe('seção de teste para sum', () => {
  test('verifica tipo de sum', () => {
    expect(typeof sum).toBe('function');
  });

  test('Teste se o retorno de sum(4, 5) é 9', () => {
    const soma = sum(4, 5);
    expect(soma).toBe(9);
  });

  test('Teste se o retorno de sum(0, 0) é 0', () => {
    const soma2 = sum(0, 0);
    expect(soma2).toBe(0);
  });

  test('Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
    expect(() => {sum()}).toThrow();
  });

  test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
  });

});
// ---------------------------------------------testes2-------------------------------------------------

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
assert.strictEqual(typeof myRemove, 'function');

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.ok(myRemove([1, 2, 3, 4], 3) !== [1, 2, 3, 4]);

// Verifique se o array passado por parâmetro não sofreu alterações
assert.deepStrictEqual(myRemove([1, 2, 3, 4]), [1, 2, 3, 4]);

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// ----------------------------------------------testes3--------------------------------------------------
// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}
assert.strictEqual(typeof myRemoveWithoutCopy, 'function');

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4]), [1, 2, 3, 4]);

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// ------------------------------------------------teste4---------------------------------------------------------
// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
assert.strictEqual(typeof myFizzBuzz, 'function');

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado


// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(9), 'fizz');

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(10), 'buzz');
assert.strictEqual(myFizzBuzz(20), 'buzz');

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(8), 8);
assert.strictEqual(myFizzBuzz('8'), false);
assert.strictEqual(myFizzBuzz('8oi'), false);
assert.strictEqual(myFizzBuzz('oito'), false);

// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz('10'), false);

// ------------------------------------------------teste5---------------------------------------------------------
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