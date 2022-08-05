const data = require('../data/zoo_data');

const { species } = data;
// {
//   NE: [ /* dados aqui */],
//   NW: [/* dados aqui */],
//   SE: [/* dados aqui */],
//   SW: [/* dados aqui */],
// }
// 1 - caso a função não receba nenhum parametro, receba apenas o parâmetro {sex: female}, receba apenas o parâmetro {sex: female, sorted: true}
const semParametro = () => {
  const localizacao = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.map((element) => localizacao[element.location].push(element.name));
  // console.log('dentro', localizacao); // Retorna a espécie de todos os animais categorizados por localização
  return localizacao;
};

const buscaPorNome = (options) => {
  const localizacao = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.map((specie) => {
    const object = {};
    object[specie.name] = specie.residents.map((nome) => nome.name);
    console.log(object); // Até aqui ok, retorna o esperado
    if (options.includeNames && options.sorted) {
      object[specie.name].sort();
    }
    return localizacao[specie.location].push(object);
  });
  console.log(localizacao);
  return localizacao;
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) {
    return semParametro();
  }
  return buscaPorNome(options);
}
getAnimalMap({ includeNames: true });
// buscaPorNome();
// semParametro();
// console.log(semParametro());
module.exports = getAnimalMap;
