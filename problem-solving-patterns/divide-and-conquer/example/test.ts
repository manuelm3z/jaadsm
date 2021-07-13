import { aNaiveSolution, refactor } from './solution';

describe('Search: a naive solution', () => {
  it('Should return 3', () => {
    expect(aNaiveSolution([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  });
  it('Should return 5', () => {
    expect(aNaiveSolution([1, 2, 3, 4, 5, 6], 6)).toBe(5);
  });
  it('Should return 3', () => {
    expect(aNaiveSolution([1, 2, 3, 4, 5, 6], 11)).toBe(-1);
  });
});

describe('Search: refactor', () => {
  it('Should return 3', () => {
    expect(refactor([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  });
  it('Should return 5', () => {
    expect(refactor([1, 2, 3, 4, 5, 6], 6)).toBe(5);
  });
  it('Should return 3', () => {
    expect(refactor([1, 2, 3, 4, 5, 6], 11)).toBe(-1);
  });
});