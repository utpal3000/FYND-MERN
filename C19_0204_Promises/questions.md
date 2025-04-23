 # Questions
 ## What is the initial state of a promise in JavaScript?
A. Fulfilled
 B. Rejected
 **C.Pending**
 D. Settled
 ## What is a Promise in JavaScript?
 A. A function that returns a value immediately
` B. An object that represents the eventual completion or failure of an asynchronous operation`
 C. A method to perform synchronous operations
 D. A type of loop in JavaScript
 ## Which method is used to handle promise rejection?
 A. 
then()
 B. 
finally()
 C. 
reject()
 D. 
`catch()`
 ## What will the following code output?
```js
 Promise.resolve(10).then(result => result * 2)
 .then(result => console.log(result)); 
```
A. 10
 `B. 20`
 C. Undefined
 D. Error
 ## Which of the following is true about .then() in promise chaining?
 A. It can only return another promise.
 B. It waits for the previous .then() to return a promise before executing.
 `C. It can return a value or a promise, and if it returns a value, it's wrapped in a resolved
 promise.`
 D. It immediately executes without waiting for the previous promise.
 ## What happens if you return a value from a 
.then()
 handler?
 A. It creates a new rejected promise.
 B. It stops the promise chain.
 `C. The value is passed to the next 
.then()`
 in the chain.
 D. It triggers a 
catch()
 block.
 ## What will the following code output?
 ```js
 new Promise((resolve, reject) => { 
  reject("Error occurred"); 
}) 
.then(result => console.log(result)) 
.catch(error => console.log(error)); 
```
`A. Error occurred`
 B. Undefined
 C. Error
 D. No output
 ## 8. What will the following code output?
 ```JS
 new Promise((resolve, reject) => { 
  resolve(1); 
}) 
.then(result => { 
console.log(result); 
return result * 2; 
}) 
.then(result => { 
console.log(result); 
return result * 2; 
}) 
.then(result => console.log(result)); 
```
`A. 1, 2, 4`
 B. 1, 1, 1
 C. 2, 4, 8
 D. 1, 4, 8
 ## What will the following code output?
 ```JS
 Promise.reject("Oops!") 
  .then(result => console.log(result)) 
  .catch(error => { 
console.log("Caught: " + error); 
return "Recovered"; 
  }) 
  .then(result => console.log(result)); 
  ```
A. Oops!, Recovered
 `B. Caught: Oops!, Recovered`
 C. Recovered, Oops!
 D. No output


 ## 9. Which of the following will immediately resolve a promise?
 A. 
Promise.reject()
` B. 
Promise.then()`
 C. 
Promise.resolve()
 D. 
Promise.finally()
 ## 10. What will the following code output?
 ```JS
 new Promise((resolve, reject) => { 
  setTimeout(() => resolve("Done!"), 2000); 
}) 
.then(result => console.log(result)); 
```
`A. Done! (after 2 seconds)`
 B. Done! (immediately)
 C. Undefined
 D. Error
 ## 11. What does the 
finally()
 method do in a promise chain?
 A. Executes when the promise is fulfilled
 B. Executes when the promise is rejected
 `C. Executes after the promise is settled, regardless of outcome`
 D. Cancels the promise chain
 ## 12. Predict the output of the following code:
 ```JS
 let promise = new Promise((resolve, reject) => { 
  setTimeout(() => resolve(1), 1000); 
}); 
promise.then((result) => { 
console.log(result); // 1 
return result + 2; 
}).then((result) => { 
console.log(result); // ? 
return new Promise((resolve, reject) => { 
    setTimeout(() => resolve(result + 2), 1000); 
  }); 
}).then((result) => { 
console.log(result); // ? 
}); 
```
a) 1, 2, 4
` b) 1, 3, 5`
 c) 1, 3, 4
 d) 1, 2, 3

 ## 13. What will be the output of the following code?
 ```js
 let promise = new Promise((resolve, reject) => { 
  resolve("Initial value"); 
}); 
promise 
  .then((result) => { 
console.log(result); // "Initial value" 
return Promise.reject("Error occurred in first .then()"); 
  }) 
  .then((result) => { 
console.log(result); // This will be skipped 
  }) 
  .catch((error) => { 
console.log(error); 
  }); 
  ```
`a) "Initial value", "Error occurred in first .then()"`
 b) "Initial value", undefined
 c) "Error occurred in first .then()", undefined
 d) "Initial value", "Skipped .then()", "Error occurred in first .then()"


# Answers 

---

### 1. **Initial state of a promise in JavaScript**
- **Correct Answer:** Pending ✅

### 2. **What is a Promise in JavaScript?**
- **Correct Answer:** An object that represents the eventual completion or failure of an asynchronous operation ✅

### 3. **Which method is used to handle promise rejection?**
- **Correct Answer:** `catch()` ✅

### 4. **Code output for `Promise.resolve(10)...`**
- **Correct Answer:** 20 ✅

### 5. **True about `.then()` in promise chaining**
- **Correct Answer:** It can return a value or a promise, and if it returns a value, it's wrapped in a resolved promise ✅

### 6. **Return a value from `.then()` handler**
- **Correct Answer:** The value is passed to the next `.then()` in the chain ✅

### 7. **Code output for `reject("Error occurred")...`**
- **Correct Answer:** Error occurred ✅

### 8. **Output for promise chaining**
- **Correct Answer:** 1, 2, 4 ✅

### 9. **Code output for `.reject("Oops!")...`**
- **Correct Answer:** Caught: Oops!, Recovered ✅

### 10. **Immediately resolve a promise**
- **Correct Answer:** Promise.resolve() ❌  
You marked `Promise.then()`, but the correct option is `Promise.resolve()`.

### 11. **Code output after 2 seconds**
- **Correct Answer:** Done! (after 2 seconds) ✅

### 12. **What does `.finally()` do?**
- **Correct Answer:** Executes after the promise is settled, regardless of outcome ✅

### 13. **Predict the output of the chaining code**
- **Correct Answer:** 1, 3, 5 ✅

### 14. **Output of `.then()` rejection code**
- **Correct Answer:** "Initial value", "Error occurred in first .then()" ✅

---

### Summary
You got **12/13 answers correct!** Excellent work overall. Fix the answer for Question 9, and you'll have everything perfect. Keep up the great progress! 🎉 Let me know if you need help understanding any concept.