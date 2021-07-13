/**
 * Implement a function called **countUniqueValues**,
 * which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 */

type ArrayParam = Array<number> | undefined;

export const myFirstSolution = (arr: ArrayParam = []) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  let left = 0;
  let right = arr.length;
  const uniqueValues = {};
  while (left < right) {
    if (typeof arr[left] !== 'undefined') {
      let leftValue = arr[left]
      if (uniqueValues[leftValue]) {
        uniqueValues[leftValue]++
      } else {
        uniqueValues[leftValue] = 1
      }
    }
    if (typeof arr[right] !== 'undefined') {
      let rightValue = arr[right]
      if (uniqueValues[rightValue]) {
        uniqueValues[rightValue]++
      } else {
        uniqueValues[rightValue] = 1
      }
    }
    left++
    right--
  }
  let result = 0;
  for (let key in uniqueValues) {
    if (uniqueValues[key]) {
      result++
    }
  }
  return result
}

export const mySecondSolution = (arr: ArrayParam = []) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  let first = 0;
  let second = 0;
  let jumps = 0;
  const length = arr.length;
  while (second <= length) {
    if (arr[first] == arr[second]) {
      second++
    } else {
      jumps++
      first = second
    }
  }
  return jumps
}
// This is the solution presented by the course
export const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = i; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1;
}