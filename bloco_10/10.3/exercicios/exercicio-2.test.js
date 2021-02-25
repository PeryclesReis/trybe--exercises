const exercicio2 = require('./exercicio-2');

// Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.
// toLowserCase()
it('teste deve transformar o comportamento da funcao para que retorne uma string em caixa baixa', () => {
  exercicio2.stringToUpperCase = jest.spyOn(exercicio2, 'stringToUpperCase')
    .mockImplementation((string) => string.toLowerCase());

  expect(exercicio2.stringToUpperCase('BOLA')).toBe('bola');
});

// Para a segunda função, uma nova implementação deve retornar a última letra de uma string.
it('teste deve transformar o comportamento da funcao para que retorne a ultima letra de uma string', () => {
  exercicio2.getFirstLetter = jest.fn((string) => string[string.length - 1]);

  expect(exercicio2.getFirstLetter('pai')).toBe('i');
});

// A terceira deve receber três strings e concatená-las.
it('teste deve transformar o comportamento da funcao para que retorne tres strings concatenadas', () => {
  exercicio2.getConcatStrings = jest.fn((...strings) => {
    // return strings.reduce((newString, string) => newString += ` ${string}`, '');
    return strings.join('');
  });

  expect(exercicio2.getConcatStrings('Boa', 'noite', 'galera')).toBe('Boanoitegalera');
});

// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
it('teste deve retornar a funcao ao seu comportamento original', () => {
  exercicio2.stringToUpperCase = jest.spyOn(exercicio2, 'stringToUpperCase')
    .mockImplementation((string) => string.toLowerCase());

  expect(exercicio2.stringToUpperCase('TOTAL')).toBe('total');

  exercicio2.stringToUpperCase.mockRestore();

  expect(exercicio2.stringToUpperCase('total')).toEqual('TOTAL');
});