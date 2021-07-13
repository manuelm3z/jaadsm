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