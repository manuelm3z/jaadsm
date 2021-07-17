export const myLinearSearch = (arr, value) => {
  for (let index = 0; index <= arr.length; index++) {
    if (arr[index] === value) return index
  }
  return -1
}

export const myLinearSearchRecursive = (arr, val) => {
  const helper = (arr, val, index) => {
    if (arr.length > 0) {
      if (arr[0] === val) {
        return index
      } else {
        return helper(arr.slice(1), val, index + 1)
      }
    } else {
      return -1
    }

  }
  return helper(arr, val, 0)
}

export const myBinarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    let currentValue = arr[middle]
    if (currentValue < val) {
      left = middle + 1
    } else if (currentValue > val) {
      right = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

export const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

export const myNaiveStringSearch = (long, short) => {
  let count = 0;
  let i = 0;
  while (i < long.length) {
    let j = 0;
    while (j < short.length) {
      if (long[i] === short[j]) {
        if (j === short.length - 1) {
          count++;
        }
        i++;
      } else {
        break;
      }
      j++;
    }
    i++;
  }
  return count;
}

export const naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}