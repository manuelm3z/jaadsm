export const mySelectionSort = (arr: Array<number>): Array<number> => {
  let smallestKey = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[smallestKey]) {
        smallestKey = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallestKey];
    arr[smallestKey] = temp;
    smallestKey = i + 1
  }
  return arr;
}

export const selectionSort = (arr: Array<number>): Array<number> => {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

  for (let i = 0; i < arr.length; i++) {
    let lowest = i; 
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest)
  }

  return arr
}