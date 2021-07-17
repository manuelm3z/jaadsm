## How do we search?

Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want. There are many different search methods on arrays in JavaScript:
- `indexOf`
- `includes`
- `find`
- `findIndex`
 
All of those are called **Linear Search**

## Linear Search Pseudocode

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- if it is, return the index at which the element is found
- If the value is never found, return -1

[Example](example)

Linear Search Big O

- Best: O(1)
- Average: O(n)
- Worst: O(n)

## Binary Search

- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
- Binary search only works on sorted arrays!

## Binary Search Pseudocode

- This function accepts a sorted array and value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
  - Create a pointer in the middle
  - If you find the value you want, return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the right pointer down
- If you never find the value, return -1

## Binary Search Big O
- Worst and Average Case: O(log n)
- Best case: O(1)

Has a detail about that only works with sorted arrays

## Naive String Search: Pseudocode
- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count