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