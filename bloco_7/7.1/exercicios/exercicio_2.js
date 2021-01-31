// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha.

const fatorial = (n) => {
	if (n === 0 || n === 1) {
		return 1;
	} else {
	var acumula = 1;
		for(x = n; x > 1; x -=1) {
			acumula = acumula * x;
		}
		return acumula;
	}
}

 const fatorial2 = (n) => {
  let numero = n;
  let resultado = 1;
  let count = 1;

  while(count <= numero) {
   resultado *= count;
   count ++;
	}
	return resultado;
}

const fatorial3 = (n) => n === 0 || n == 1 ? 1 : n * fatorial3(n - 1);

// console.log(fatorial(5));
// console.log(fatorial2(5));
// console.log(fatorial3(5));
// ---------------------------------------------------------------------------------
// Crie uma função que receba uma frase e retorne qual a maior palavra.

function WordBiggest(phrase) {
  let contador = 0;
  let maiorPalavra = '';
  const array = phrase.split(' ');
  array.forEach(element => {
    if (element.length > contador) {
      contador = element.length;
      maiorPalavra = element;
      return element;
    }
  });
  console.log(maiorPalavra);
  return maiorPalavra;
}

// WordBiggest('Antônio foi no banheiro e não sabemos o que aconteceu');
// ------------------------------------------------------------------------------------
// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
const acaoDeClickes = () => {
  const buttonClick = document.querySelector('#button-click');
  const countClick = document.querySelector('#count-cLick');
  const li = document.querySelector('li');
  let clickCount = 0;

  buttonClick.addEventListener('click', function() {
    clickCount += 1;
    li.innerText = `Quantidade de clickes: ${clickCount}`;
  });
}

// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
  // Exemplo:
  // String determinada: "Tryber x aqui!"
  // Parâmetro: "Bebeto"
  // Retorno: "Tryber Bebeto aqui!"
let hardSkill = ['css', 'html', 'JS', 'git', 'gitHub'];
hardSkill = hardSkill.sort();
function trocandoX(string) {
  let stringEscolhida = `Tryber x aqui!`;
  stringEscolhida = stringEscolhida.replace('x', string);

  return addHardSkills(stringEscolhida);
}
console.log(trocandoX('Tiãooo'));
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".
function addHardSkills(string) {
  const [css, html, js, git, gitHub] = hardSkill;
  let phrase = `${string} Minhas cinco principais habilidades são: ${css}, ${html}, ${js}, ${git}, ${gitHub}.`;

  return phrase;
}