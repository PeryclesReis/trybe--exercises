 // Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// primeira opcao
 function verificaPalindromo(palindromo) {
  let letra = palindromo.length;

  if (letra === 0 || letra === 1) {
    return true;
  } else if (palindromo[0] === palindromo[letra - 1]) {
    // o metodo slice pega posicoes do array ou string e retorna a nova string, ou neste caso retorna a string letra sem as posicoes selecionada pelo slice.
    return verificaPalindromo(palindromo.slice(1, letra - 1));
  }
  return false;
}

console.log(verificaPalindromo('arara')) ;
console.log(verificaPalindromo('reviver'));
console.log(verificaPalindromo('manha'));

// segunda opcao
function verificaPalindromo2(palindromo) {
  let element = '';
  for (let index = palindromo.length -1; index >= 0; index -= 1) {
    element += palindromo[index];
  }
  if (palindromo === element) {
    console.log(element);
    return 'E um palindromo!' + true;
  } else {
    console.log(element);
    return 'Nao e um palindromo!' + false;
  }
}

console.log(verificaPalindromo2('saias'));
console.log(verificaPalindromo2('desenvolvimento'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let numeros = [2, 3, 6, 7, 10, 1];
function maiorValor(valor) {
  let valorcompara = 0;

  for (let index = 0; index < valor.length; index += 1) {
    if (valor[index] > (valor[index - 1])) {
      valorcompara = index;
    }
  }
  return valorcompara;
}
console.log(maiorValor(numeros));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let numeros2 = [2, 4, 6, 7, 10, 0, -3];
function menorValor(valor) {
  let valorcompara = 0;

  for (let index = 0; index < valor.length; index++) {
    if (valor[index] < valor[index - 1]) {
      valorcompara = index;
    }
  }
  return valorcompara;
}
console.log(menorValor(numeros2));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let listaNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function nomeComMaiorQtdDeCaracteres(listaNomes) {
  let contador = 0;
  let nomeMaior = '';
  for (let index = 0; index < listaNomes.length; index += 1) {
    const nome = listaNomes[index];
    if (nome.length > contador) {
      contador = nome.length;
      nomeMaior = nome;
    }
  }
  return nomeMaior;
}
console.log(nomeComMaiorQtdDeCaracteres(listaNomes));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let numeros3 = [2, 3, 2, 5, 8, 2, 3];
function interoMaisRepetido(numeros) {
  let contador = 0;
  let numeroRepetido = numeros3[0];

  for (let index = 1; index < numeros.length; index += 1) {
    if (numeros[index] === numeroRepetido) {
      contador += 1;
      numeroRepetido = numeros[index];
    }
  }
  return numeroRepetido;
}
console.log(interoMaisRepetido(numeros3));

// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function somandoInteiros(qtdElementos) {
  let somadorNumeros = 0;
  let listaInteiros = [];
  let somaDosElementos = 0;
  for (let i = 0; i < qtdElementos; i++) {
    somadorNumeros = somadorNumeros + 1;
    // metodo para adicionar elementos em uma array
    listaInteiros.push(somadorNumeros);
  }
  for (let index = 0; index < listaInteiros.length; index++) {
    const element = listaInteiros[index];
    somaDosElementos = somaDosElementos + element
  }
  return somaDosElementos;
}
console.log(somandoInteiros(5));

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.
function comparadorDeString(word, ending) {
 let primeiroLetra = word[word.length-1];
 let segundaLetra = word[word.length-2];
 
 if ((segundaLetra + primeiroLetra) === ending) {
   return true;
 }else 
 return false;
}
console.log(comparadorDeString('trybe', 'be'));

// segunda opcao
function compararStrings(word, ending) {
  let inversoPalavra = word.split('').reverse('').join('');
  let inversoFimPalavra = ending.split('').reverse('').join('');

  for (let letra = 0; letra < inversoFimPalavra.length; letra += 1) {
    if (inversoPalavra[letra] != inversoFimPalavra[letra]) {
      return false;
    }else
    return true;
  }
}
console.log(compararStrings('trybe', 'be'));