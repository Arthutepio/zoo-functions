const data = require('../data/zoo_data');

const { species, employees } = data;
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  console.log('id', animalId);// check no id e encontra a pimeira espécie que o id é responsável
  const residentAnimals = species.find((res) => res.id === animalId).residents;
  // console.log(residentAnimals);// retorna um array com todos aimais da especie
  let count = 0;
  let count2 = 0;
  residentAnimals.forEach((element) => {
    if (element.age > count) {
      count2 = Object.values(element);
      // console.log('val', count2);
      count = element.age;
    }
  });
  return (count2);
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = getOldestFromFirstSpecies;
