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