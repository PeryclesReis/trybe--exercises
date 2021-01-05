let botao1 = document.querySelector('.botao1');
let botao2 = document.querySelector('.botao2');
let caixaUm = document.querySelector('.caixa1');
let caixaDois = document.querySelector('.caixa2');
let caixaTexto = document.querySelector('.caixa-texto');

function mudaCorCaixa1() {
  caixaUm.style.backgroundColor = 'green';
}

function mudaTexto() {
  caixaUm.innerText = 'green';
}

function alerta() {
  alert('Go Trybe!');
}

function caixa1() {
  caixaUm.innerText = caixaTexto.value;
}

function caixa2() {
  caixaDois.innerText = caixaTexto.value;
}

botao1.addEventListener('mouseover', mudaCorCaixa1);
botao2.addEventListener('click', caixa2);
caixaTexto.addEventListener('keypress',alerta);