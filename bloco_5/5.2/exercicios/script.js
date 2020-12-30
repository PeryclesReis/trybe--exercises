let body = document.querySelector('body');

let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

let div = document.createElement('div');
div.className = 'main-content';
body.appendChild(div);

let mainContent = document.querySelector('.main-content');

let divDoFilho = document.createElement('div');
divDoFilho.className = 'center-content';
mainContent.appendChild(divDoFilho);

let centerContent = document.querySelector('.center-content');
let filhoDoCenter = document.createElement('p');
filhoDoCenter.innerText = 'Qualquer coisa!';
centerContent.appendChild(filhoDoCenter);

let leftContent = document.createElement('div');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

let smallImage = document.querySelector('.small-image');
let img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
leftContent.appendChild(img);

let rightContent = document.createElement('div');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

let listaNumeros = ['zero','um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];

for (let index = 0; index < listaNumeros.length; index++) {
  let elemento = listaNumeros[index];
  let numero = document.createElement('ol');
  numero.innerText = elemento;
  rightContent.appendChild(numero);
}

let listaH3 = ['Primeiro h3', 'Segundo h3', 'Terceiro h3'];

for (let index = 0; index < listaH3.length; index++) {
  const elemento = listaH3[index];
  let h3 = document.createElement('h3');
  h3.innerText = elemento;
  mainContent.appendChild(h3);
}

// ------------------------------------------------------------------------------------
// parte2
h1.className = 'title';
h1.append();

let h3Title = document.querySelectorAll('h3');

for (let index = 0; index < h3Title.length; index++) {
  const elemento = h3Title[index];
  elemento.className = 'derscription';
  elemento.append();
}

let paiDeLeft = document.querySelector('.main-content');
let removeLeft = document.querySelector('.left-content');
paiDeLeft.removeChild(removeLeft);

let rightContentMarg = document.querySelector('.right-content');
rightContentMarg.style.marginRight = 'auto';

let mainContentBackground = document.querySelector('.center-content').parentNode;
mainContentBackground.style.background = '#59b16a';

let rightContentItens = document.querySelectorAll('.right-content')[0];
let olFilho1 = document.querySelectorAll('.right-content')[0].childNodes[10];
rightContentItens.removeChild(olFilho1);

let olFilho2 = document.querySelectorAll('.right-content')[0].childNodes[9];
rightContentItens.removeChild(olFilho2);