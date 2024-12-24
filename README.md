# Silent Failure in Division by Zero in Javascript

This repository demonstrates a common, yet subtle, bug in JavaScript related to division by zero.  The issue stems from JavaScript's loose comparison (`===`) and how it handles zero values in division.  Instead of throwing an error for division by zero, the function silently returns 0, making debugging difficult.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description:
The function `foo` is intended to divide `a` by `b`. However, due to loose comparison, if either `a` or `b` is 0, it returns 0 instead of raising an error, masking a potential problem.