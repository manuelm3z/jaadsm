import { myFirstSolution, mySecondSolution, countUniqueValues } from './solution';

describe('countUniqueValues: myFirstSolution', () => {
  it('Should return 2', () => {
    expect(myFirstSolution([1,1,1,1,1,2])).toBe(2)
  })
  it('Should return 7', () => {
    expect(myFirstSolution([1,2,3,4,4,4,7,7,12,12,13])).toBe(7)
  })
  it("Should return 0 when the array it's empty", () => {
    expect(myFirstSolution([])).toBe(0)
  })
  it("Should return 0 when there's no array", () => {
    expect(myFirstSolution()).toBe(0)
  })
  it('Should handle negative values', () => {
    expect(myFirstSolution([-2,-1,-1,0,1])).toBe(4)
  })
})

describe('countUniqueValues: mySecondSolution', () => {
  it('Should return 2', () => {
    expect(mySecondSolution([1,1,1,1,1,2])).toBe(2)
  })
  it('Should return 7', () => {
    expect(mySecondSolution([1,2,3,4,4,4,7,7,12,12,13])).toBe(7)
  })
  it("Should return 0 when the array it's empty", () => {
    expect(mySecondSolution([])).toBe(0)
  })
  it("Should return 0 when there's no array", () => {
    expect(mySecondSolution()).toBe(0)
  })
  it('Should handle negative values', () => {
    expect(mySecondSolution([-2,-1,-1,0,1])).toBe(4)
  })
})

describe('countUniqueValues', () => {
  it('Should return 2', () => {
    expect(countUniqueValues([1,1,1,1,1,2])).toBe(2)
  })
  it('Should return 7', () => {
    expect(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toBe(7)
  })
  it("Should return 0 when the array it's empty", () => {
    expect(countUniqueValues([])).toBe(0)
  })
  it('Should handle negative values', () => {
    expect(countUniqueValues([-2,-1,-1,0,1])).toBe(4)
  })
})