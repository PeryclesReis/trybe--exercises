let elementOndeEstou = document.querySelector('#elementoOndeVoceEsta');
console.log(elementOndeEstou);

let pai = document.querySelector('#elementoOndeVoceEsta').parentNode.style.backgroundColor = 'blue';

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Eu sou o primeiro filho do filho!';

let primeiroFilho = document.querySelector('#pai').firstElementChild;
console.log(primeiroFilho);

let ondeEstouPrimeirFilho = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
console.log(ondeEstouPrimeirFilho);

console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

console.log(document.querySelectorAll('#pai')[0].lastElementChild.previousElementSibling);

// ----------------------------------------------------------------
// parte2
// Crie um irmão para elementoOndeVoceEsta .
// Crie um filho para elementoOndeVoceEsta .
// Crie um filho para primeiroFilhoDoFilho .
// A partir desse filho criado, acesse terceiroFilho .

let quintoFilho = document.querySelector(`#pai`);
let quintoElementoFilho = document.createElement(`div`);
quintoElementoFilho.innerText = `quintoFilho`;
quintoElementoFilho.id = `quintoFilho`;
quintoFilho.appendChild(quintoElementoFilho); 

let filhoDeElementoOndeEsta = document.createElement(`div`);
filhoDeElementoOndeEsta.innerText = `sou filho do filho!`;
filhoDeElementoOndeEsta.id = `terceiroFilhoDoFilho`;
elementOndeEstou.appendChild(filhoDeElementoOndeEsta);

let filhoDoPrimeiroFilho = document.createElement(`div`);
filhoDoPrimeiroFilho.innerText = `filho do primeiro filho!`;
filhoDoPrimeiroFilho.id = `filhoDoPrimeirofilho`;
primeiroFilho.appendChild(filhoDoPrimeiroFilho);

console.log(document.querySelectorAll(`#filhoDoPrimeirofilho`)[0].parentNode.nextElementSibling.nextElementSibling);

// -----------------------------------------------------
// parte3
// Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
let paiPai = document.querySelector(`#pai`);
let primeirofilho = document.querySelector('#primeirFilho');
paiPai.removeChild(primeiroFilho);

let terceiroFilho = document.querySelector('#terceiroFilho');
paiPai.removeChild(terceiroFilho);

let quartoFilho = document.querySelector('#quartoEUltimoFilho');
paiPai.removeChild(quartoFilho);

let quintoFilhos = document.querySelector('#quintoFilho');
paiPai.removeChild(quintoFilhos);

let text = document.querySelector(`#pai`).childNodes[3];
paiPai.removeChild(text);


let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

let segundoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho');
elementoOndeVoceEsta.removeChild(segundoFilho);

let terceiroFilhos = document.querySelector('#terceiroFilhoDoFilho');
elementoOndeVoceEsta.removeChild(terceiroFilhos);
