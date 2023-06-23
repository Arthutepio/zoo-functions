const data = require('../data/zoo_data');

const { species, employees } = data;
function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];

  const residentAnimals = species.find((res) => res.id === animalId).residents;
 
  let count = 0;
  let count2 = 0;
  residentAnimals.forEach((element) => {
    if (element.age > count) {
      count2 = Object.values(element);
      count = element.age;
    }
  });

  return (count2);
}

module.exports = getOldestFromFirstSpecies;
