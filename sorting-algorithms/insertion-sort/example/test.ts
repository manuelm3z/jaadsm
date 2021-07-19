import { insertionSort } from './solution';

describe('Insertion Sort: my solution', () => {
  it('Should return an organized array', () => {
    expect(insertionSort([4, 3, 6, 2, 1, 9, 7]).toString()).toBe([1, 2, 3, 4, 6, 7, 9].toString())
  })
  it('Should return an organized array', () => {
    expect(insertionSort([4, 100, 52, 3, 40, 6, 21, 2, 1, 9, 56, 90, 7]).toString()).toBe([1,2,3,4,6,7,9,21,40,52,56,90,100].toString())
  })
});
