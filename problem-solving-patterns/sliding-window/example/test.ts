import { aNaiveSoluion, refactor } from './solution';

describe('maxSubarraySum: aNaiveSoluion', () => {
  it('should return 10', () => {
    expect(aNaiveSoluion([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10)
  });
  it('should return 17', () => {
    expect(aNaiveSoluion([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17)
  });
  it('should return 6', () => {
    expect(aNaiveSoluion([4, 2, 1, 6], 1)).toBe(6)
  });
  it('should return 13', () => {
    expect(aNaiveSoluion([4, 2, 1, 6, 2], 4)).toBe(13)
  });
  it('should return null', () => {
    expect(aNaiveSoluion([], 4)).toBe(null)
  });
});

describe('maxSubarraySum: refactor', () => {
  it('should return 10', () => {
    expect(refactor([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10)
  });
  it('should return 17', () => {
    expect(refactor([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17)
  });
  it('should return 6', () => {
    expect(refactor([4, 2, 1, 6], 1)).toBe(6)
  });
  it('should return 13', () => {
    expect(refactor([4, 2, 1, 6, 2], 4)).toBe(13)
  });
  it('should return null', () => {
    expect(refactor([], 4)).toBe(null)
  });
});