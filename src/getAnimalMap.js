const data = require('../data/zoo_data');

const { species } = data;
const semParametro = () => {
  const localizacao = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  species.map((element) => localizacao[element.location].push(element.name));
  
  return localizacao;
};

const filtraPorNome = (options) => {
  const localizacao = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  species.map((specie) => {
    const object = {};
    object[specie.name] = specie.residents.map((element) => element.name);
    console.log(object);

    if (options.includeNames && options.sorted) {
      object[specie.name].sort();
    }

    return localizacao[specie.location].push(object);
  });

  return localizacao;
};

const filtraPorSexo = (options) => {
  const localizacao = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  species.map((specie) => {
    const animal = specie.residents
      .map((resident) => (resident.sex === options.sex ? resident.name : undefined));
    const objSexo = {};
    
    objSexo[specie.name] = animal.filter((sexo) => sexo !== undefined);
    
    if (options.sorted) {
      objSexo[specie.name].sort();
    }

    return localizacao[specie.location].push(objSexo);
  });

  return localizacao;
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return semParametro();
  }

  if (options.sex) filtraPorSexo(options);

  return filtraPorNome(options);
}


module.exports = getAnimalMap;
