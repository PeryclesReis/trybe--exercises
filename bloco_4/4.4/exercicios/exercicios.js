// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// let a = 2;
// let b = 5;
// let c = 10;
// Adição
function sum(a, b) {
  return a + b;
}

// Subtração
function sub(a, b) {
  return a - b;
}

// Multiplicação
function multip(a, b) {
  return a * b;
}

// Divisão
function div(a, b) {
  return a / b;
}

// Módulo
function mod(a, b) {
  return a % b;
}
console.log(sum(2, 5));
console.log(sub(2, 5));
console.log(multip(2, 5));
console.log(div(2, 5));
console.log(mod(2, 5));

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
function biggerNumber(a, b) {
  if (a > b) {
    console.log('A é maior que B! ' + a);
  } else console.log('B é maior que A! ' + b);
}
numberBigger(2, 5);

// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
function smallNumbe(a, b, c) {
  if (a > b && a > c) {
    console.log('A é maior que B e C! ' + a);
  } else if (b > c) {
    console.log('B é maior que A e C! ' + b);
  } else
  console.log('C é maior que B e A! ' + c);
}
smallNumbe(2, 5, 8);

// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function valueNumber(value) {
  if (value > 0) {
    console.log('positive');
  } else if (value < 0) {
    console.log('negative');
  } else console.log('zero');
}
valueNumber(0);

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

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

  // INSS
  // Salário bruto até R$ 1.556,94: alíquota de 8%
  // Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
  // Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
  // Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

  // IR
  // Até R$ 1.903,98: isento de imposto de renda
  // De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
  // De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
  // De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
  // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
  // O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
  // Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
  // Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
    // R$ 2.670,00: salário com INSS já deduzido;
    // 7.5%: alíquota de imposto de renda;
    // R$ 142,00 parcela a se deduzir do imposto.
  // Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
  // O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
let salarioBruto = 0;
let salarioLiquido = 0;

