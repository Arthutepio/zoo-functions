const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
