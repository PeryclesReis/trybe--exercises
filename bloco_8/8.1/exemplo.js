const emailListInData = [
    "roberta@email.com",
    "paulo@email.com",
    "anaroberta@email.com",
    "fabiano@email.com"
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  }
  
  // Use o método forEach chamando a callback showEmailList para apresentar os emails.
// emailListInData.forEach(showEmailList);

// showEmailList();

const names = ["Bianca", "Camila", "Fernando", "Ana Roberta"];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
}
// percorre cada item do array
names.forEach(convertToUpperCase);
console.log(names);