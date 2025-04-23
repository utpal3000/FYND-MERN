# Promise in JS
A Promise in JavaScript is like a placeholder for a value that you expect to receive in the future, usually from an asynchronous operation like fetching data from a server. Promises help you handle asynchronous tasks in a more manageable and readable way, compared to callbacks.

### Key states of a Promise:
1. **Pending**: The initial state; the operation hasn't completed yet.
2. **Fulfilled**: The operation completed successfully, and the Promise has a resulting value.
3. **Rejected**: The operation failed, and the Promise has a reason for failure.

### Syntax:
You create a Promise using the `Promise` constructor, and it takes a function with two arguments: `resolve` (for success) and `reject` (for failure).

### Example 1: Basic Promise
```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("The operation was successful!");
  } else {
    reject("The operation failed.");
  }
});

myPromise
  .then((result) => console.log(result)) // This runs if resolve is called
  .catch((error) => console.error(error)); // This runs if reject is called
```

### Example 2: Fetching Data with Promises
Here’s an example of using Promises with the `fetch` API:

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json(); // Parse the JSON data
  })
  .then((data) => console.log("Data received:", data)) // Process the received data
  .catch((error) => console.error("Error:", error)); // Handle errors
```

### Example 3: Promise Chaining
You can chain multiple `.then()` calls to perform sequential tasks:

```javascript
new Promise((resolve) => {
  resolve(2); // Initial value
})
  .then((value) => value * 2) // Multiply the value by 2
  .then((value) => value + 3) // Add 3 to the value
  .then((finalValue) => console.log("Final result:", finalValue)); // Output: 7
```

### Example 4: Creating a Delay Function
You can create a function that delays execution using Promises:

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("Executed after 2 seconds!"));
```

Promises are a powerful tool to make asynchronous code cleaner and easier to understand. For even better readability, you can use `async/await`, which works on top of Promises. 

# Questions

1. Promise initialised at `Pending`.
2. Promise -> An object that represents the eventual completion or failure of an async operation.
3. `catch()` used to handle rejection in promise.
4. 

