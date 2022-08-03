const data = require('../data/zoo_data');

const { employees, species } = data;

function checkId(object) {
  const employee = employees.find((element) => element.firstName === object.name
  || element.lastName === object.name || element.id === object.id);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  const checkInfoSpecie = species.filter((element) => employee.responsibleFor.includes(element.id));
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: checkInfoSpecie.map((element) => element.name),
    locations: checkInfoSpecie.map((element) => element.location),
  };
}
// console.log(checkId({ name: 'Burl' }));// me retorna um objeto exatamente como proposto no exercicio
// {
//   id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
//   fullName: 'Burl Bethea',
//   species: [ 'lions', 'tigers', 'bears', 'penguins' ],
//   locations: [ 'NE', 'NW', 'NW', 'SE' ]
// }

function returnInfo() {
  return employees.map((element) => {
    const infoSpecies = species.filter((specie) => element.responsibleFor.includes(specie.id));
    return {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: infoSpecies.map((specie) => specie.name),
      locations: infoSpecies.map((specie) => specie.location),
    };
  });
}
// A função getEmployeesCoverage retorna uma das funções atendendo as condições passados por parametro
function getEmployeesCoverage(object) {
//   // seu código aqui
  if (!object) {
    return returnInfo();
  }
  return checkId(object);
}
console.log(getEmployeesCoverage({ name: 'Burl' }));
// getEmployeesCoverage({ name: 'Burl' });
module.exports = getEmployeesCoverage;
