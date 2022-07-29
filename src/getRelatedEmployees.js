const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const gerente = data.employees.some((element) => element.managers.includes(id));
  return gerente;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const gerente = [];
  data.employees.forEach((name) => {
    if (name.managers.includes(managerId)) {
      gerente.push(`${name.firstName} ${name.lastName}`);
    }
  });
  return gerente;// tive a colaboração da mente iluminda de Arthur Debiasi.
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
