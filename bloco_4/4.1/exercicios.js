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

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
let notas = [90,70,40,50,49,102]

for (const key in notas) {
  const nota = notas[key];
  
  if (nota < 0 || nota > 100){
    console.log('Valor incorreto!');
  } else if (nota >= 90) {
    console.log('A');
  } else if (nota >= 80) {
    console.log('B');
  } else if (nota >= 70) {
    console.log('C');
  } else if (nota >= 60) {
    console.log('D');
  } else if (nota >= 50) {
    console.log('E');
  } else if (nota < 50) {
    console.log('F');
  }
}

// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .
let numeros = [3, 1, 2];

for (const key in numeros) {
  const element = numeros[key];
  if ((element % 2) === 0) {
    console.log('Temos um numero par!');
    return true;
    break;
  }
}

// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
let numeros1 = [3, 1, 2];

for (const key in numeros1) {
  const element = numeros1[key];
  if ((element % 2) === 1) {
    console.log('Temos um numero impar!');
    return true;
    break;
  }
}

// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

function produtos(number1, number2) {
  let custoProduto = number1;
  let valorVenda = number2;
  let lucro = 0;
  let valorCustoTotal = 0;
  let impostoSobreProduto = 0;
  let lucroTotal = 0;

  if (custoProduto < 0 && valorVenda < 0) {
    console.log('Valores incorrentos!');
  } else
  impostoSobreProduto = (custoProduto + 20) / 100
  valorCustoTotal = custoProduto + impostoSobreProduto;
  lucro = valorVenda - valorCustoTotal;
  lucroTotal = lucro * 1000;
  console.log('R$:' + lucroTotal.toFixed(2));

}
produtos(20, 40);