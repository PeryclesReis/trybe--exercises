let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrent: "sim",
};

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
// Valor esperado no console: Bem-vinda, Margarida

console.log(`Bem vinda, ${info.personagem}!`);

const {personagem} = info;
console.log('Bem vinda, ' + personagem + '!');

// Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
info[`recorrent`] = "sim";
console.table(info);

// Faça um for/in que mostre todas as chaves do objeto.
for (const key in info) {  
  const element = info[key];
  console.log(key);
}   

// Faça um for/in que mostre todas as chaves do objeto.
for (const key in info) {  
  const element = info[key];
  console.log(element);
}

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
for(let key in info){
  for(let key2 in info2){ 
    if (info[key] === info2[key2]) {
      
      console.log('Ambos recorrente');

    }
  }
  console.log(info[key] + ' e ' + info2[key]);
}
