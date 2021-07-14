/**
 * Count Down
 */
export const countDownRecursive = (num) => {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDownRecursive(num);
}

export const countDownIterable = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!")
}

/**
 * Sum range
 */
export const sumRange = (num) => {
  if (num === 1) return num;
  return num + sumRange(num - 1)
}

/**
 * Factorial
 */
export const factorialIterable = (num) => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

export const factorialRecursive = (num) => {
  if (num === 1) return num;
  return num * factorialRecursive(num - 1);
}

/**
 * Helper method recursion example
 */
export const collectOddValues = (arr) => {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1))
  }

  helper(arr);

  return result;
}

/**
 * Recursion whithout helper
 */
export const pureCollectOddValues = (arr) => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(pureCollectOddValues(arr.slice(1)));
  return newArr;
}