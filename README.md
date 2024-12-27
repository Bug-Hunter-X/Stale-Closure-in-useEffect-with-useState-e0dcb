# Stale Closure Bug in React 19 useEffect Hook

This repository demonstrates a subtle bug that can occur when using the `useEffect` hook in React 19 with `setTimeout` or similar asynchronous operations.  The problem stems from closures capturing a stale value of a state variable.

## Bug Description
The `bug.js` file contains a React component that attempts to increment a state variable using `setTimeout` within a `useEffect` hook. However, due to the closure over the `count` variable, the `setTimeout` callback uses the initial value of `count`, leading to unexpected behavior. The count may not increment or increment erratically.

## Solution
The `bugSolution.js` file demonstrates how to fix this by using a functional update with `setCount`:

```javascript
setCount(prevCount => prevCount + 1);
```
This ensures that the latest value of `count` is used, correctly updating the state. This is the recommended pattern for updating state based on previous values within asynchronous operations or closures.

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the inconsistent incrementing of the counter in `bug.js` and correct behavior in `bugSolution.js`.