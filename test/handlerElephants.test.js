const handlerElephants = require('../src/handlerElephants');

const { averageAge } = handlerElephants;
console.log(averageAge);
describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    const actual = handlerElephants('names').includes('Jefferson');
    expect(actual).toBeTruthy();
  });
  it('retorna a média de idade dos elefantes', () => {
    const actual = 'averageAge';
    const expected = 10.5;
    expect(handlerElephants(actual)).toBeCloseTo(expected);
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toBeGreaterThanOrEqual(expected);
  });
  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Passando por argumento um objeto vazio ({}) deve retornar a string `Parâmetro inválido, é necessário uma string`', () => {
    expect(handlerElephants({})).toMatch('Parâmetro inválido, é necessário uma string');
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('Qualquer coisa')).toBeNull();
  });
});
