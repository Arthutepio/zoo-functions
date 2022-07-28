const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((idInfo) => (data.species.find(({ id }) => id === idInfo)));
}

module.exports = getSpeciesByIds;
