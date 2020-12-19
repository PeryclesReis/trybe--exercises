// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
let a = 2;
let b = 5;
let c = 10;
// Adição
console.log(a + b);
// Subtração
console.log(a - b);
// Multiplicação
console.log(a * b);
// Divisão
console.log(a / b);
// Módulo
console.log(a % b);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
if (a > b) {
  console.log('A é maior que B! ' + a);
} else console.log('B é maior que A! ' + b);

// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
if (a > b && a > c) {
  return console.log('A é maior que B e C! ' + a);
} else if (b > c) {
  return console.log('B é maior que A e C! ' + b);
} else 
return console.log('C é maior que B e A! ' + c);

// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let valor = 1;
if (valor > 0) {
  console.log('positive');
} else if (valor < 0) {
  console.log('negative');
} else console.log('zero');

// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
let ladoA = 0;
let ladoB = 0;
let ladoc = 0;

if ((ladoA + ladoB + ladoc) === 180) {
  return true;
} else {
  return false;
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let peca = ['Queen', 'King', 'Horse'];

for (const key in peca) {
  const element = peca[key];
  let pec = element.toLowerCase();
  switch (pec) {
    case 'queen':
      console.log('Movimentos em: linha, coluna ou diagonal.');
      break;
    case 'king':
      console.log('Uma casa para qualquer lado!');
      break;
    case 'horse':
      console.log('Mova-se em formato de L.');
      break;
    default:
      console.log('Não escolheu peça ainda!');
      break;
  }
}
