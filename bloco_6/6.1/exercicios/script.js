const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espirito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso do Sul",
  "Mato Grosso",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];
const ufs = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MS",
  "MT",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];
const elementoEstados = document.querySelector('#input-estados');
const elementoUfs = document.querySelector('#input-uf');
const dateControl = document.querySelector('input[type="date"]');

const forms = document.querySelector('.dados-inputs');
const todosOsDados = document.querySelectorAll('input');
const selecaoEstado = document.querySelectorAll('select');
const btnEnviar = document.querySelector('#botao-enviar');
const areaTexto = document.querySelectorAll('textarea');

function addEstados(estados) {
  
  for (let index = 0; index < estados.length; index++) {
    const elementoEstado = estados[index];
    const estado = document.createElement('option');
    estado.value = elementoEstado;
    estado.innerText = elementoEstado;
    elementoEstados.appendChild(estado);
  }
}
addEstados(estados);

function addUfs(ufs) {
  for (let index = 0; index < ufs.length; index++) {
    const elementoUf = ufs[index];
    const uf = document.createElement('option');
    uf.value = elementoUf;
    uf.innerText = elementoUf;
    elementoUfs.appendChild(uf);
  }
}
addUfs(ufs);

function imprimirDados(event) {
  event.preventDefault(event);
  for (let index = 0; index < todosOsDados.length; index++) {
    const elementoDado = todosOsDados[index];
    if (elementoDado.value !== '') {
      const dados = document.createElement('p');
      elementoDado.parentNode.innerText;
      dados.innerText = elementoDado.value;
      // dados.parentNode.nodeName;
      forms.appendChild(dados);
    }
  }
  imprimirEstadoEUf();
  imprimirDadosTexto();
}
btnEnviar.addEventListener('click', imprimirDados);

function imprimirEstadoEUf() {
  for (let index = 0; index < selecaoEstado.length; index++) {
    const elementosEstado = selecaoEstado[index];
    if (elementosEstado.value !== '') {
      const dados = document.createElement('p');
      dados.innerText = elementosEstado.value;
      forms.appendChild(dados);
    }
  }
}

function imprimirDadosTexto() {
  for (let index = 0; index < areaTexto.length; index++) {
    const elementoTexto = areaTexto[index];
    if (elementoTexto.value !== '') {
      const dados = document.createElement('p');
      dados.innerText = elementoTexto.value;
      forms.appendChild(dados);
    }
  }
}

