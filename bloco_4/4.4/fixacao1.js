let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

console.log(`A jogadora ${name} ${lastName} tem ${age} anos de idade.`);

const player = {};

player['nome'] = name;
player['sobrenome'] = lastName;
player['idade'] = age;
player['medalhas'] = medals;

console.log(player);

let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

player.bestInTheWorld = bestInTheWorld;

console.log(`A jogadora ${player.nome} ${player.sobrenome} foi eleita a melhor jogadora ${player.bestInTheWorld.length} vezes.`);

console.log(`A jogadora ${player.nome} ${player.sobrenome} possui ${player.medalhas.golden} medalhas de ouro e ${player.medalhas.silver} medalhas de prata.`);

let nomeDaPropriedade = "fabricacao";
player[nomeDaPropriedade] = "Ford"

console.log(player);