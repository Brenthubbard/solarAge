import SolarAge from './../src/js/solarAge.js';
// import solarAge from '../src/solarAge.js';
// import solarAge from '../src/main.js';

describe('SolarAge', () => {
  
  let age = new SolarAge();

  beforeEach(() => {
  });

  test('create a age object using the solarAge constructor', () => {
    expect(age);
  });
  test('create objects using the constructor', () => {
    expect(age.name).toEqual();
    expect(age.userLifeEx).toEqual();
    expect(age.userAge).toEqual();
    //   expect(age.ageOnPlanet).toEqual([]);
  })
    
  test('create a function to run age calculation', () => {
    expect(age.yearsLeft());
  })
    
  test('build life span object ', () => {
    expect(age.mercuryLifeSpan());
    expect(age.venusLifeSpan());
    expect(age.marsLifeSpan());
    expect(age.jupiterLifeSpan());
  })
  test('life span for user on planet', () => {
    expect(age.mercuryYearsLeft());
  })
  test('life span for user on planet', () => {
    expect(age.venusYearsLeft());
  })
  test('life span for user on planet', () => {
    expect(age.marsYearsLeft());
  })
  test('life span for user on planet', () => {
    expect(age.jupiterYearsLeft());
  })

});
