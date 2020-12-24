let status = ['Aprovado!', 'Reprovado!', 'Lista!'];

for (let index = 0; index < status.length; index++) {
  const element = status[index];
  
  switch (element) {
    case 'Aprovado!':
      console.log('Parabéns, você foi aprovado!');
      break;
  
    case 'Lista!':
    console.log('Você está na nossa lista de espera!'); 
      break;
  
    case 'Reprovado!':
      console.log('Você foi reprovado!');
      break;
      
    default:
      console.log('não se aplica');
      break;
  }
}
  
