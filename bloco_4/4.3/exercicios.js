// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
let variavel = 5;
for (let index = 0; index < variavel; index++) {
  console.log('*****');
}

// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
let array = [];
let baseTriangulo = 5;

for (let index = 0; index < baseTriangulo; index++) {
  array.push('*')
  console.log(array);
  
}

// Agora inverta o lado do triângulo. Por exemplo:
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
let arrayTriangulo = [];
let controleArray = 5;

for (let index = 0; index < controleArray; index++) {
  arrayTriangulo.push(' ');
}

arrayTriangulo.slice(arrayTriangulo[2] = '*');
console.log(arrayTriangulo);
arrayTriangulo.slice(arrayTriangulo[1] = '*');
arrayTriangulo.slice(arrayTriangulo[3] = '*');
console.log(arrayTriangulo);
arrayTriangulo.slice(arrayTriangulo[0] = '*');
arrayTriangulo.slice(arrayTriangulo[4] = '*');
console.log(arrayTriangulo);
