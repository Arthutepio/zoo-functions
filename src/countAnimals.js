const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  const specie = species.find((element) => element.name === animal.specie);
  if (!animal.sex) {
    return specie.residents.length;
  }
  let count = 0;
  for (let i = 0; i < specie.residents.length; i += 1) {
    if (specie.residents[i].sex === animal.sex) {
      count += 1;
    }
  }
  return count;
}
// console.log(countAnimals());
module.exports = countAnimals;
