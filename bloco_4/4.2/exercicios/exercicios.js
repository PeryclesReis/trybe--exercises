let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaElements = 0;
let maiorValorDoArray = 0;
let contadorNumeroImpar = 0;
let menorValorDoArray = numbers[0];
let arrayVazio = [];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
  
  somaElements += element;

  if (maiorValorDoArray < element) {
    maiorValorDoArray = element;
  }
  if (element < menorValorDoArray) {
    menorValorDoArray = element;
  }
}

// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
console.log('A soma de todos os elementos: ' + somaElements);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//    A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let mediaAritmeticaDosElements = somaElements / numbers.length;
console.log('A média atitimética de todos os elementos:' + mediaAritmeticaDosElements);

// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (mediaAritmeticaDosElements > 20) {
  console.log('Valor maior que 20!');
} else {
  console.log('Valor menor ou igual a 20!');
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
console.log(maiorValorDoArray);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
for (let i = 0; i < numbers.length; i++) {
  const eImpar = numbers[i];
  if (eImpar % 2 === 1) {
    contadorNumeroImpar ++;
  } {
    console.log('Valor par!');
  }
}
console.log(contadorNumeroImpar);

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
console.log('O menor valor do array: ' + menorValorDoArray);

// Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
let contador = 0;
for (let index = 0; index < 25; index += 1) {
  contador = contador + 1;
  arrayVazio.push(contador);
}
console.log(arrayVazio);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let index = 0; index < arrayVazio.length; index++) {
  const element = arrayVazio[index];
  let divisaoDosElementosDoArrayVaio = 0;
  divisaoDosElementosDoArrayVaio = element / 2;
  console.log(divisaoDosElementosDoArrayVaio);
}

// Rodada Bonus
let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

// Ordene o array numbers em ordem crescente e imprima seus valores;
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let position = array[i];

      array[i] = array[j];
      array[j] = position;
    }
  }
}
console.log(array);

// Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] > array[j]) {
      let position = array[i];

      array[i] = array[j];
      array[j] = position;
    }
  }
}
console.log(array);

// Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
let multiplicandoValores = 0;
let newArray = [];
let j = 0;

for (let i = 0; i < numbers.length; i += 1) {
  let elementI = numbers[i];
  j = j+1;
  for ( j ; j <= numbers.length; j += 1) {
    let elementJ = numbers[j];
    if (elementJ == undefined) {
      elementJ = 2;
    }
    newArray.push(elementI * elementJ);
    break;
  }
}
console.log(newArray);
