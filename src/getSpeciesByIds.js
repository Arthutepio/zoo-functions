const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {

  return ids.map((idInformado) => data.species.find((id) => id.id === idInformado));
}

module.exports = getSpeciesByIds;
