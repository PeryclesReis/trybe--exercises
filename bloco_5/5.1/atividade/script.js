  // Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
  // - document.getElementById()
  // - document.getElementsByClassName()
  // - document.getElementsByTagName()

  // 1 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
  function mundandoTag(tag) {
    document.querySelectorAll('.center-content p')[1].innerText = tag
  }
  mundandoTag('Me vejo, casado, trabalhando bem empregado, planejando fazer filho e curtindo com minha mulher!');

  // 2 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
  function mudarCor(cor) {
    document.querySelector('.main-content').style.backgroundColor = cor;
  }
  mudarCor('rgb(76,164,109)');

  // 3 Crie uma função que mude a cor do quadrado vermelho para branco.
  function mudarCorQuadradoDoMeio(cor) {
  document.querySelector('.center-content').style.backgroundColor = cor;
  }
  mudarCorQuadradoDoMeio('rgb(255,255,255)');

  // 4 Crie uma função que corrija o texto da tag <h1>.
  function corrigindoString(novaString) {
    document.querySelector('h1').innerText = novaString;
  }
  corrigindoString('Exercicio  5.1 - JavaScript');

  // 5 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
  function mudandoParaMaiusculos() {
    let pMudado = document.querySelectorAll('p');
    let novaString = '';

    for (let frases = 0; frases < pMudado.length; frases++) {
      novaString = pMudado[frases].innerText.toUpperCase();
      document.querySelectorAll('p')[frases].innerText = novaString;
    }
  }
  mudandoParaMaiusculos();

  // 6 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
  function exibindoParagrafos() {
    let paragrafo = document.querySelectorAll('p');
    for (let frase = 0; frase < paragrafo.length; frase++) {
      const p = paragrafo[frase];
      console.log(document.querySelectorAll('p')[frase].innerText);
    }
  }
  exibindoParagrafos();
