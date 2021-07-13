/**
 * Given a **sorted** array of integers, write a function called
 * search, that accepts a value and returns the index where the
 * value passed to the function is located. If the value is not
 * found, return -1.
 */
// Linear Search - Time Complexity O(N)
export const aNaiveSolution = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

// Binary search - Time Complexity - Log(N)
export const refactor = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max ) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < num) {
      min = middle + 1;
    } else if (currentElement > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1
}