// Dados
const professionalBoard = [
  {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
  },
  {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
  },
  {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
  },
];

  // Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  if (!(professionalBoard.id || professionalBoard.firstName || professionalBoard.lastName || professionalBoard.specialities)) {
    return 'Informação indisponível';
  }
  try {
    const employ = professionalBoard.find((employ) => id === employ.id);
    throw(employ === null);
  } catch (error) {
    return 'ID não identificada';
  }
};

console.log(searchEmployee('9852-2'));

module.exports = searchEmployee;