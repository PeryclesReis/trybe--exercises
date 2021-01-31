const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };

  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };

  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function changeObjLesson2(obj, objKey, objValue) {
  obj[objKey] = objValue;

  return obj;
}
// console.log(changeObjLesson2(lesson2, Object.keys(lesson1)[3],lesson1.turno));

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function listKey(obj) {
  return Object.keys(obj);
}
// console.log(listKey(lesson2));

// Crie uma função para mostrar o tamanho de um objeto.
function objSize(obj) {
  return Object.entries(obj).length;
}
// console.log(objSize(lesson3));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValues(obj) {
  return Object.values(obj);
}
// console.log(listValues(lesson3));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = (obj1, obj2, obj3) => Object.assign({}, {obj1, obj2, obj3});
console.log(allLessons(lesson1, lesson2, lesson3));

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function studentsTotal(...rest) {
  let qtdAlunos = 0;
  rest.forEach((lesson) => {
    const keys = lesson.numeroEstudantes;
    qtdAlunos += keys;
  });
  return `Total de alunos: ${qtdAlunos}`;
}
// console.log(studentsTotal(lesson1, lesson2, lesson3));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
const getValueByNumber = (obj,number) => Object.values(obj)[number];
// console.log(getValueByNumber(lesson1, 1));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false
const verifyPair = (obj, key, value) => Object.entries(obj)
.some((entrie) => entrie[0] === key && entrie[1] === value);
// console.log(verifyPair(lesson1, 'turno','manhã'));