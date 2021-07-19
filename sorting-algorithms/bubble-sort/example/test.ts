import { myBubbleSort, bubbleSort, bubbleSortOptimized } from './solution';

describe('BubbleSort: my solution', () => {
  it('Should return an organized array', () => {
    expect(myBubbleSort([4, 3, 6, 2, 1, 9, 7]).toString()).toBe([1, 2, 3, 4, 6, 7, 9].toString())
  })
})
describe('BubbleSort', () => {
  it('Should return an organized array', () => {
    expect(bubbleSort([4, 3, 6, 2, 1, 9, 7]).toString()).toBe([1, 2, 3, 4, 6, 7, 9].toString())
  })
})
describe('BubbleSort: optimized', () => {
  it('Should return an organized array', () => {
    expect(bubbleSortOptimized([4, 3, 6, 2, 1, 9, 7]).toString()).toBe([1, 2, 3, 4, 6, 7, 9].toString())
  })
})