
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
// let botaoHoliday = document.querySelector('#btn-holiday');

// function fundoFeriadoMudado() {
//   let feriados = document.querySelectorAll('.holiday');

//   for (let index = 0; index < feriados.length; index++) {
//     const elemento = feriados[index];
//     elemento.style.backgroundColor = 'rgb(211, 211, 211)';
//   }
// }

// function fundoFeriadoNormal() {
//   let feriados = document.querySelectorAll('.holiday');

//   for (let index = 0; index < feriados.length; index++) {
//     const elemento = feriados[index];
//     elemento.style.backgroundColor = 'rgb(238,238,238)';
//   }
// }
// botaoHoliday.addEventListener('mousedown', fundoFeriadoMudado);
// botaoHoliday.addEventListener('mouseleave', fundoFeriadoNormal);
function feriadosDias() {
  let botaoHoliday = document.querySelector('#btn-holiday');
  let feriados = document.querySelectorAll('.holiday');
  let corMudaFundo = 'rgb(238, 238, 238)';
  let voltandoCor = 'rgb(211, 211, 211)';

  botaoHoliday.addEventListener('click', function() {
    for (let index = 0; index < feriados.length; index++) {
      const elemento = feriados[index];
      if (elemento.style.backgroundColor === voltandoCor) {
        elemento.style.backgroundColor = corMudaFundo;
      } else {
        elemento.style.backgroundColor = voltandoCor
      }
    }
  })
}
feriadosDias();

// exercicio 04
function botaoSexta(string) {
  let botaoContainer = document.querySelector('.buttons-container');

  let botao = document.createElement('button');
  botao.id = 'btn-friday';
  botao.innerText = string;
  botaoContainer.appendChild(botao);
}
botaoSexta('Sexta-Feira');

// exercicio 05
function friday(diasSextas) {
  let btnFriday = document.querySelector('#btn-friday');
  let botaoSextaFeira = document.querySelectorAll('.friday');
  let novaString = 'Sextou...';

  btnFriday.addEventListener('click', function() {
    for (let index = 0; index < botaoSextaFeira.length; index++) {
      const elemento = botaoSextaFeira[index];
      if (elemento.innerHTML !== novaString) {
        elemento.innerHTML = novaString;
      } else {
        elemento.innerHTML = diasSextas[index];
      }
    }
  });
}
let sextas = [4, 11 ,18 ,25];
friday(sextas);

// exercicio 06
function zoomDias() {
  let dias = document.querySelector('#days');
  let tamanhoFonte = '30px';
  let negrito = '600';

  dias.addEventListener('mouseover', function(event){
      event.target.style.fontSize = tamanhoFonte;
      event.target.style.fontWeight = negrito;
  })
};

function diasSemZoom(){
  let dias = document.querySelector('#days');
  let tamanhoFonte = '20px';
  let negrito = '';
  
  dias.addEventListener('mouseout', function(event){
    event.target.style.fontSize = tamanhoFonte;
    event.target.style.fontWeight = negrito;
  })
}
zoomDias();
diasSemZoom();

// exercicio 07
function textoCompromisso(task){
  let tarefas = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerText = task;
  tarefas.appendChild(taskName);
}
textoCompromisso('Projeto');

// execricio 08
function tarefa(cor) {
  let minhasTarefas = document.querySelector('.my-tasks');
  let novaTarefa = document.createElement('div');

  novaTarefa.className = 'task';
  novaTarefa.style.backgroundColor = cor;
  minhasTarefas.appendChild(novaTarefa);
}
tarefa('green');

// exercicio 09
function selecionaTarefa() {
  let tarefaSelecionada = document.getElementsByClassName('task selected');
  let tarefas = document.querySelector('.task');

  tarefas.addEventListener('click', function(event){
    if(tarefaSelecionada.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};
selecionaTarefa();

// exercicio 10
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};
setDayColor();

//  bonus
function adicionaNovaTarefa() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};
adicionaNovaTarefa();
