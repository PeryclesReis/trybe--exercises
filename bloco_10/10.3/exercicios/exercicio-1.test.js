const exercicio1 = require('./exercicio-1');

beforeEach(() => {
  exercicio1.numerosAleatorios.mockReset();
});

// defina o retorno padrão como 10
it('teste deve retornar um valor padrão', () => {
  exercicio1.numerosAleatorios = jest.fn().mockReturnValue(10);

  expect(exercicio1.numerosAleatorios()).toBe(10);
  exercicio1.numerosAleatorios();
  expect(exercicio1.numerosAleatorios).toHaveBeenCalled();
  expect(exercicio1.numerosAleatorios).toHaveBeenCalledTimes(2);
});

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

jest.mock('./exercicio-1');

it('teste deve crie uma nova implementação, que retorne a divisao entre dois parametros', () => {
  exercicio1.numerosAleatorios.mockImplementation((a, b) => a / b);

  expect(exercicio1.numerosAleatorios(4, 2)).toBe(2);
  expect(exercicio1.numerosAleatorios(4, 2)).not.toBe(3);
  expect(exercicio1.numerosAleatorios).toHaveBeenCalled();
  expect(exercicio1.numerosAleatorios).toHaveBeenCalledTimes(2);
});

// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
it('teste deve criar um novo comportamento, que receba tres parametros retorne sua multiplicacao e depois resete e retorne o dobro com uma nova implementacao', () => {
  exercicio1.numerosAleatorios.mockImplementation((a, b, c) => a * b * c);

  expect(exercicio1.numerosAleatorios(2, 2, 2)).toBe(8);
  expect(exercicio1.numerosAleatorios).toHaveBeenCalledWith(2, 2, 2);

  exercicio1.numerosAleatorios.mockReset();
  expect(exercicio1.numerosAleatorios).not.toHaveBeenCalled();

  exercicio1.numerosAleatorios.mockImplementation((a) => a * 2);

  expect(exercicio1.numerosAleatorios(4)).toBe(8);
  expect(exercicio1.numerosAleatorios).toHaveBeenCalledTimes(1);
  expect(exercicio1.numerosAleatorios).toHaveBeenCalledWith(4);
});