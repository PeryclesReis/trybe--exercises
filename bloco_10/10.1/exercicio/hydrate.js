// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

function hydrate(numBebida) {
  const number = numBebida.split(' ');
  let msg = '';
  let sum = 0;
  const regex = /\d/g;
  const oh = numBebida.match(regex);
  for (let index = 0; index < oh.length; index++) {
    const element = oh[index];
    sum += parseInt(element);
  }

  // for (let index = 0; index < number.length; index += 1) {
  //   const element = number[index];
  //   switch (element) {
  //     case '1':
  //       sum += 1;
  //       break;
  //     case '2':
  //       sum += 2;
  //       break;
  //     case '3':
  //       sum += 3;
  //       break;
  //     case '4':
  //       sum += 4;
  //       break;
  //     case '5':
  //       sum += 5;
  //       break;
  //     case '6':
  //       sum += 6;
  //       break;
  //     case '7':
  //       sum += 7;
  //       break;
  //     case '8':
  //       sum += 8;
  //       break;

  //     default:
  //       break;
  //   }
  // }

  if (sum < 2) {
    msg = `${sum} copo de água`;
    return msg;
  } else {
    msg = `${sum} copos de água`;
    return msg;
  }
}

module.exports = hydrate;