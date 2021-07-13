## Sliding Window

This pattern involves creating a **window** which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes(and a new window is created).

Very useful for keeping track of a subject of data in an array/string etc.

[**Example**](example): Write a function called **maxSubarraySum** which accepts an array of integers and a number called **n**. The function should calculate the maximum sum of **n** consecutive elements in the array.

Explanation: Instead of do the sum for every single number in the array, create a temp variable that storage the current set of items. so add the new item and substract the previuos one and check with the maximum sum so far, something that you would do with your hands.