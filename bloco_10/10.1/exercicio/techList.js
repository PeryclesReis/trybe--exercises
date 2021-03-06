const listTecnologies = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
const name = 'Perycles';

const techList = (arrayTecnologies, name) => {
  if (arrayTecnologies.length === 0) return 'Vazio!';

  const listTecnologies = arrayTecnologies
    .sort()
    .map((tecnology) =>
  ({
    tech: tecnology,
    name,
  }));

  return listTecnologies;
};

techList([], name);

module.exports = techList;
