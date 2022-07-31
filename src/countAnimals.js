const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  let obj = {};
  if (animal === undefined) {
    data.species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  if (animal.specie && !animal.sex) {
    obj = data.species.find((specie) => specie.name === animal.specie).residents.length;
  } else {
    obj = data.species.find((specie) => specie.name === animal.specie).residents
      .filter(({ sex }) => sex === animal.sex).length;
  }
  return obj;
}
console.log(countAnimals());
module.exports = countAnimals;
