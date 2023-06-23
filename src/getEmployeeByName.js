const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const result = data.employees.find((nomes) => nomes.firstName === employeeName
  || nomes.lastName === employeeName);

  return result
}

module.exports = getEmployeeByName;
