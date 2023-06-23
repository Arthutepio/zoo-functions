const data = require('../data/zoo_data');

function isManager(id) {
  const gerente = data.employees.some((element) => element.managers.includes(id));
  
  return gerente;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  
  const gerente = [];
  data.employees.forEach((name) => {
    if (name.managers.includes(managerId)) {
      gerente.push(`${name.firstName} ${name.lastName}`);
    }
  });

  return gerente;
}

module.exports = { isManager, getRelatedEmployees };
