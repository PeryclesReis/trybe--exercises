var paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

// Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.getElementById('page-title').innerText = 'Homem-Aranha';
// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

document.getElementById('paragraph').innerText = 'Mude minha cor se puder!';
paragraph.style.backgroundColor = 'yellow';

// Por fim, recupere o subtítulo e altere-o também.
document.getElementById('subtitle').innerText = 'De volta para casa!';

// Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
let primeiroElem = document.getElementsByClassName('paragrafo')[0];

// Altere algum estilo do primeiro deles.
primeiroElem.style.color = 'green';

// Recupere o subtítulo pela tag.
document.getElementsByTagName('p')[1];