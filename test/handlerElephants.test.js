const handlerElephants = require('../src/handlerElephants');

const { averageAge } = handlerElephants;
console.log(averageAge);
describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
//   it('', () => {
//     expect(handlerElephants()).to();
//   });
//   it('', () => {
//     expect(handlerElephants()).to();
//   });
//   it('', () => {
//     expect(handlerElephants()).to();
//   });
});
