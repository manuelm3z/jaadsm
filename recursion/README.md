## Recursion

**What is recursion?**

A **process** (a function in our case) that **calls itself**

**Why do I need to know this?**

- it's use all the time, methods like JSON.parse and JSON.stringfy are written recursively
- Object traversal
- Searchs in complex data structures.
- Sometimes it's cleaner than other alternatives

[**The Call Stack**](https://en.wikipedia.org/wiki/Call_stack)
- In almost all program languages, there is a built in data structure that manages what happens when functions are invoked, in javascript it's called The Call Stack.
- It's a **stack** data structure
- Any time a function is invoked it is placed(**pushed**) on the top of the stack
- When JavaScript sees the **return** keyword or when then function ends, the compiler will remove(**pop**)

It's important to understand the call stack because, when we write recursive functions, we keep pushing new functions onto the call stack.

**How recursive functions work?**

Invoke the **same** function with a different input until you reach your base case.

**Base case?**

It's the condition when the recursion ends. **This is the most important concept to understand**

**Two essential parts of a recursive function**
- Base case
- Different input(?)

[**Examples**](example):
- Count Down
- Sum Range

Where things go wrong?
- When you don't have a base case, which means it's a infinite loop.
- Forgetting to return or returning the wrong thing!
- Both things lead to a stack overflow.

Helper method recursion
it's a pattern that has a function that it's not recursive which invoke a recursive function. See [examples](example)

Pure recursion
Following the previuos example, in this case the job that the helper does it's replace by the array method `concat`.

To keep in mind;
- When use arrays in pure recursion, use methods like `slice`, `the spread operator`, and `concat` that make copies of arrays so you do not mutate them.
- Strings are immutable so you will need to use methods like `slice`, `substr` or `substring` to make copies of strings
- When are objects you can use `Object.assign` or `the spread operator`