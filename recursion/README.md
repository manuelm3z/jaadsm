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

[**Example**](example)