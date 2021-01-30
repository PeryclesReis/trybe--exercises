// // adicao
// function sum(a, b) {
//     return a + b;
//   }

//   // Subtração
//   function sub(a, b) {
//     return a - b;
//   }

//   // Multiplicação
//   function multip(a, b) {
//     return a * b;
//   }

//   // Divisão
//   function div(a, b) {
//     return a / b;
//   }

//   // Módulo
//   function mod(a, b) {
//     return a % b;
//   }
//   console.log(sum(2, 5));
//   console.log(sub(2, 5));
//   console.log(multip(2, 5));
//   console.log(div(2, 5));
//   console.log(mod(2, 5));

function calculator(a, b, operador) {
  switch (operador !== '') {
    case operador === 'adição':
      return a + b;
      break;
    case operador === 'subtração':
      return a - b;
      break;
    case operador === 'multiplicação':
      return a * b;
      break;
    case operador === 'divisão':
      return a / b;
      break;
    case operador === 'modulo':
      return a % b;
      break;

    default:
        'opção inválida!';
        break;
  }
}
console.log(calculator(3, 5, 'subtração'));