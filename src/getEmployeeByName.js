const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find((nomes) => nomes.firstName === employeeName
  || nomes.lastName === employeeName);
}

module.exports = getEmployeeByName;
