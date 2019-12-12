import { expect } from 'chai';
import 'mocha';
import { curryMe,
         curryFunction,
         doMath,
         doMathFunction,
         ninjaBeltFunction, 
         ninjasOne, 
         ninjasTwo,
         ninjaMapFunction } from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    expect(curryFunction('One')('Two')('Three')).to.be.eql(curryMe('One','Two','Three'));
  });

  it('#2 should output the same result as the original function', () => {
    expect(doMathFunction(1)(2)(3)).to.be.eql(doMath(1)(2)(3));
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    let temp: Array<any> = ninjaBeltFunction(ninjasOne)(ninjasTwo)('black');
    expect(temp).to.be.an('array');
    temp.forEach(ninja => {
      expect(ninja.belt == 'black');
    })
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    let temp: Array<any> = ninjaMapFunction(ninjasTwo);
    expect(temp).to.be.an('array');
    temp.forEach(ninja => {
      expect(ninja).to.haveOwnProperty('status');
    })
  });
});
