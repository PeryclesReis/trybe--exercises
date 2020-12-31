
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// exercicio 01
function addDias(array) {
  let dias = document.querySelector('#days');

  for (let index = 0; index < array.length; index += 1) {
    let diasMes = array[index];

    let diasList = document.createElement('li');
    diasList.innerText = diasMes;
    diasList.className = 'day';

    if (diasMes === 24 || diasMes === 31) {
      diasList.className = 'day holiday';
    } else if (diasMes === 4 || diasMes === 11 || diasMes === 18) {
      diasList.className = 'day friday';
    } else if(diasMes === 25){
      diasList.className = 'day holiday friday';
    }

    dias.appendChild(diasList);
  }
}
addDias(dezDaysList);

// exercicio 02
function botaoFeriado() {
  let buttonsContainer = document.querySelector('.buttons-container');

  let botao = document.createElement('button');
  botao.id = 'btn-holiday';
  botao.innerText = 'Feriados';
  buttonsContainer.appendChild(botao);
}
botaoFeriado();

// exercicio 03 'rgb(211, 211, 211)' normal rgb(238,238,238)
let botaoHoliday = document.querySelector('#btn-holiday');

function fundoFeriadoMudado() {
  let feriados = document.querySelectorAll('.holiday');

  for (let index = 0; index < feriados.length; index++) {
    const elemento = feriados[index];
    elemento.style.backgroundColor = 'rgb(211, 211, 211)';
  }
}

function fundoFeriadoNormal(params) {
  let feriados = document.querySelectorAll('.holiday');

  for (let index = 0; index < feriados.length; index++) {
    const elemento = feriados[index];
    elemento.style.backgroundColor = 'rgb(238,238,238)';
  }
}

botaoHoliday.addEventListener('mousedown', fundoFeriadoMudado);
botaoHoliday.addEventListener('mouseleave', fundoFeriadoNormal);
