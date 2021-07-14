import { sumRange, factorialIterable, factorialRecursive, collectOddValues, pureCollectOddValues } from './solution';

describe('Sum Range', () => {
  it('Shoud return 6', () => {
    expect(sumRange(3)).toBe(6)
  });
  it('Shoud return 9', () => {
    expect(sumRange(7)).toBe(28)
  });
});

describe('Factorial: iterable', () => {
  it('Should return 24', () => {
    expect(factorialIterable(4)).toBe(24);
  });
});

describe('Factorial: iterable', () => {
  it('Should return 24', () => {
    expect(factorialRecursive(4)).toBe(24);
  });
});

describe('Helper method recursion: collectOddValues', () => {
  it('Should return only odds', () => {
    expect(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]).toString()).toBe([1,3,5,7,9].toString());
  });
});

describe('pure method recursion: pureCollectOddValues', () => {
  it('Should return only odds', () => {
    expect(pureCollectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]).toString()).toBe([1,3,5,7,9].toString());
  });
});