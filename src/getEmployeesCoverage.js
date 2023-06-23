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

function getEmployeesCoverage(object) {
  if (!object) {
    return returnInfo();
  }

  return checkId(object);
}

module.exports = getEmployeesCoverage;
