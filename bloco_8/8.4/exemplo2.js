// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Uva', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Paçoca', 'Cobertura'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));