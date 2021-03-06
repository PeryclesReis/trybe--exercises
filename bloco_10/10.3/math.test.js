const math = require('./math');
jest.mock("./math");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

test('testando funcionalidade chamada apenas uma vez', () => {
  math.somar.mockReset();
  math.somar
    .mockImplementationOnce((a, b) => a + b)
    .mockImplementationOnce((a, b) => a - b)
    .mockImplementationOnce((a, b) => a * b);

    const chamada1 = math.somar(2, 2);
    const chamada2 = math.somar(2, 2);
    const chamada3 = math.somar(2, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(chamada1).toBe(4);
  expect(chamada2).toBe(0);
  expect(chamada3).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(3);
  expect(math.somar).toHaveBeenCalledWith(2, 2);

  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined);
});

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original
  math.somar.mockReset();
  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  // expect(math.somar(1, 2)).resolves.toBe(3);
});

test('testando chamada da funcao subtracao', () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(3, 2);

  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
});

test('testando chamada e retorno padrao da funcao multiplicacao', () => {
  // retorno forcado como padrao
  math.multiplicar = jest.fn().mockReturnValue(10);
  math.multiplicar();

  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});

test('testando chamada, retorno padrao, parametros e quantas vezes foi chamada a funcao divisao', () => {
  // retorno forcado como padrao
  math.dividir = jest.fn().mockReturnValue(15)
    .mockReturnValueOnce('2')
    .mockReturnValueOnce('5');

  expect(math.dividir()).toBe('2');
  expect(math.dividir).toHaveBeenCalledTimes(1);


  expect(math.dividir()).toBe('5');
  expect(math.dividir).toHaveBeenCalledTimes(2);

  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(3);

  math.dividir(2, 4);
  expect(math.dividir).toHaveBeenLastCalledWith(2, 4);
  expect(math.dividir).toHaveBeenCalledTimes(4);
});