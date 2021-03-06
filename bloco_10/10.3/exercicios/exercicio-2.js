// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta.
function stringToUpperCase(string) {
  const newString = string.toUpperCase();
  return newString;
}
// stringToUpperCase('tiozinho');

// A segunda deve também receber uma string e retornar só a primeira letra.
function getFirstLetter(string) {
  return string[0];
}
// getFirstLetter('bola');

// A terceira deve receber duas strings e concatená-las
function getConcatStrings(str1, str2) {
  return str1 + str2;
}
// getConcatStrings('oi', 'Fasanaro');

module.exports = { stringToUpperCase, getFirstLetter, getConcatStrings };