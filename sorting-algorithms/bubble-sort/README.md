## What is sorting?

Sorting is the process of rearranging the items in a collection(e.g. an array) so that the items are in some kind of order.

Examples:
- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

## Why do we need to learn this?
- Sorting is an incredibly common task, so it's good to know how it works
- There are many different techniques have their own advantages and disadvantages

## Telling JavaScript how to sort
- The built-in sort method accepts an optional comparator function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
  - If it returns a negative number, a should come before b
  - If it returns a positive number, a should come after b
  -  If it returns 0, a and b are the same as far as the sort is concerned

## Bubble Sort

A sorting algorithm where the largest values bubble up to the top!

## Bubble sort pseudocode
- Start looping from a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j + 1], swap those two values!
- Return the sorted array

[**Example**](example)