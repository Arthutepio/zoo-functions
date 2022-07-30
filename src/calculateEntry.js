const data = require('../data/zoo_data');

const entrant = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  // seu código aqui.
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.filter((val) => {
    if (val.age < 18) {
      obj.child += 1;
    } else if (val.age >= 18 && val.age < 50) {
      obj.adult += 1;
    } else {
      obj.senior += 1;
    }
  }, {});
  return obj;
}
function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const { adult: aPrice, senior: sPrice, child: cPrice } = countEntrants(entrants);
  return data.prices.adult * aPrice + data.prices.senior * sPrice + data.prices.child * cPrice;
}

countEntrants(entrant);
module.exports = { calculateEntry, countEntrants };
