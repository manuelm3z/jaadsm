import {
  myLinearSearch,
  myLinearSearchRecursive,
  myBinarySearch,
  binarySearch,
  myNaiveStringSearch,
  naiveSearch
} from './solution';

describe('Linear Search: My solution', () => {
  it('Should return 4', () => {
    expect(myLinearSearch([1, 2, 3, 4, 5], 5)).toBe(4)
  })
  it('Should return -1', () => {
    expect(myLinearSearch([1, 2, 3, 4, 5], 7)).toBe(-1)
  })
});

describe('Linear Search: My solution recursive', () => {
  it('Should return 4', () => {
    expect(myLinearSearchRecursive([1, 2, 3, 4, 5], 5)).toBe(4)
  })
  it('Should return -1', () => {
    expect(myLinearSearchRecursive([1, 2, 3, 4, 5], 7)).toBe(-1)
  })
});

describe('Binary Search: My solution', () => {
  it('Should find the first item', () => {
    expect(myBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1)).toBe(0)
  })
  it('Should find the middle item', () => {
    expect(myBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 11)).toBe(10)
  })
  it('Should find the last item', () => {
    expect(myBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20)).toBe(19)
  })
  it('Should return -1', () => {
    expect(myBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 55)).toBe(-1)
  })
});

describe('Binary Search', () => {
  it('Should find the first item', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1)).toBe(0)
  })
  it('Should find the middle item', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 11)).toBe(10)
  })
  it('Should find the last item', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20)).toBe(19)
  })
  it('Should return -1', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 55)).toBe(-1)
  })
});

describe('Naive String Search: My Solution', () => {
  it('Should return 2', () => {
    expect(myNaiveStringSearch('asjhsdkjahsdkja', 'hsd')).toBe(2)
  });
  it('Should return 3', () => {
    expect(myNaiveStringSearch('asomgjhsdkomgjahsdkjaomg', 'omg')).toBe(3)
  });
  it('Should find with 4 characters', () => {
    expect(myNaiveStringSearch('asofuckmgjhsdfuckkomgjahsdkfuckjaomg', 'fuck')).toBe(3)
  });
});

describe('Naive String Search: naiveSearch', () => {
  it('Should return 2', () => {
    expect(naiveSearch('asjhsdkjahsdkja', 'hsd')).toBe(2)
  });
  it('Should return 3', () => {
    expect(naiveSearch('asomgjhsdkomgjahsdkjaomg', 'omg')).toBe(3)
  });
  it('Should find with 4 characters', () => {
    expect(naiveSearch('asofuckmgjhsdfuckkomgjahsdkfuckjaomg', 'fuck')).toBe(3)
  });
});