# Notes | Practice Questions and Assignments 

## Basic

```
let, const, parseInt(), parseFloat(), console.log(), &&, ||
```

Class Document - [Here](  https://docs.google.com/document/d/1bRs3PtoXoWL0t2S_sORu9iiKuBUIY-T6GDKKOj1MjUw/edit?tab=t.0)

## Arithmetic operations

Assginment 1 - [Basic-arithmatic-operations](https://onecompiler.com/challenges/3xv4whax2/basic-arithmetic-operations)

```
+add, -sub, *multiply, /divide, %modulus(gives reminder), **power
```

### Q. Swap value of two numerical variables without third variable.

Ans : Perform addition and subtraction to one another to solve this problem.

## Conditionals 

Assignment 2 - [If-else-set-1-reactgram](https://onecompiler.com/challenges/42g4y9apv/if-else-set-1-reactgram)

```js
if (condition1) {
    // executed if condition1 is true
} else if (condition2) {
    // executed if the condition1 is false and condition2 is true
} else {
    // executed if both condition1 and condition2 are false
}
```

### Q. Return absolute value of an integer
> remove the negativity thats it!

### Q. Take 3 distinct integers a,b,c and return the integer of largest value.
> Check if one is greater than all if not check other var.

### Q. Take 3 distinct integers a,b,c as input and return the second smallest among the input.
> Think about how you can compare each number to determine if it falls between the other two numbers. For instance, consider if a is the second smallest by checking if it is greater than one number and less than the other.
Use then || for second sequence!


### Q. Vaid triangle
> Sum of all angles must be 180. 

| Type             | Side Lengths            | Angles                     |
|------------------|-------------------------|----------------------------|
| Equilateral      | All sides are equal     | All angles are 60°         |
| Isosceles        | Two sides are equal     | Two angles are equal       |
| Scalene          | All sides are different | All angles are different   |
| Acute            | -                       | All angles < 90°           |
| Right            | -                       | One angle = 90°            |
| Obtuse           | -                       | One angle > 90°            |

### Q. Enter number of electricity units consumed and calculate amount to pay, based on the rules below
For first 50 units, Rs: 1/unit
For next 100 units, Rs.2/unit
For next 100 units, Rs. 3/ units
For units above 250, Rs.4/units
For all bills above 150 rupees additional surcharge of 20% of total bill amount is added.

Constraints:
0 <= number of units <= 1000

Input:
An integer/float denoting the number of electrical units consumed
Output:
An integer/ float denoting the electrical charge.

Example:
Input:
120

Output:
228

Explanation :
Total number of units = 120
First 50 units bill = 501 = 50
Next 70 units bill = 702 = 140 (Rs. 2 will be charged for units 51-150)
Total bill without additional charge = 140 + 50 = 190
Additional 20% charge = 38
Total bill with additional charge = 228

Ans : 
To solve this problem in JavaScript, you can follow these steps:

1. **Define the rates and thresholds** for the different units.
2. **Calculate the bill** based on the units consumed.
3. **Apply the surcharge** if the bill exceeds Rs. 150.
4. **Return the total bill**.

Here’s the JavaScript code to achieve this:

```javascript
function calculateElectricityBill(units) {
    let totalBill = 0;

    // Calculate the bill based on the units consumed
    if (units <= 50) {
        totalBill = units * 1;
    } else if (units <= 150) {
        totalBill = 50 * 1 + (units - 50) * 2;
    } else if (units <= 250) {
        totalBill = 50 * 1 + 100 * 2 + (units - 150) * 3;
    } else {
        totalBill = 50 * 1 + 100 * 2 + 100 * 3 + (units - 250) * 4;
    }

    // Apply 20% surcharge if the bill is above Rs. 150
    if (totalBill > 150) {
        const surcharge = totalBill * 0.2;
        totalBill += surcharge;
    }

    return totalBill;
}

// Example usage:
const unitsConsumed = 120;
const billAmount = calculateElectricityBill(unitsConsumed);
console.log(billAmount); // Output: 228
```

### Explanation:

1. **Rate Calculation**:
   - The first 50 units are charged at Rs. 1 per unit.
   - The next 100 units (51-150) are charged at Rs. 2 per unit.
   - The next 100 units (151-250) are charged at Rs. 3 per unit.
   - Any units above 250 are charged at Rs. 4 per unit.

2. **Surcharge Calculation**:
   - If the total bill exceeds Rs. 150, a 20% surcharge is added to the total bill.

3. **Example**:
   - For 120 units:
     - First 50 units: 50 * 1 = 50
     - Next 70 units: 70 * 2 = 140
     - Total without surcharge: 50 + 140 = 190
     - Surcharge: 190 * 0.2 = 38
     - Total with surcharge: 190 + 38 = 228

### Constraints:
- The input `units` should be between 0 and 1000 (inclusive).

This code will correctly calculate the electricity bill based on the given rules and constraints.

## Loops

### Q. Formula of factorial
Ans : 
```js
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // Output: 120
```

### Q. Take 10 integers as input and print their product.

Constraints:
1 <= T <= 100

Input:
Ten lines of input containing ten integers each.
Output:
Print the product of all the ten integers.

Example:
Input:
1
2
3
4
5
6
7
8
9
10
Output:
3628800

Ans :
1. **Array Indexing**: In JavaScript, arrays are zero-indexed. This means the first element of an array is at `index 0`. In your `for` loop, you're starting from `i = 1` and going up to `i <= 10`. This will lead to an `undefined` value for `input[10]` (since the indices range from 0 to 9 for 10 elements).

   Fix: Change the loop to start at `i = 0` and end at `i < 10`.

   ```javascript
   for (let i = 0; i < 10; i++) {
   ```

2. **Multiplying `a[i]`**: In your loop, you are trying to multiply `a[i]`, but `a` is just a single integer, not an array. You should directly multiply `sum` by `a` (which is `parseInt(input[i])`).

   Fix: Remove `[i]` after `a`.

   ```javascript
   sum *= a;
   ```

3. **Unnecessary Assignment to `input`**: You assigned `userInput` to `input`, but this step is unnecessary unless you're planning to modify `userInput`.

   Fix: You can skip the assignment and directly work with `userInput` in your loop.

### Corrected Code:
```javascript
const readline = require("readline");
const code = readline.createInterface({
  input: process.stdin
});
const userInput = [];
code.on("line", (data) => {
  userInput.push(data);
});

code.on("close", () => {
  let sum = 1; // Initialize product to 1
  for (let i = 0; i < 10; i++) { // Iterate through the 10 inputs
    let a = parseInt(userInput[i]); // Parse each input to an integer
    sum *= a; // Multiply the parsed value with `sum`
  }
  console.log(sum); // Print the final product
});
```

### Key Changes:
1. The loop now iterates from `i = 0` to `i < 10`.
2. Directly multiply `sum` by `a` without the unnecessary `[i]`.
3. Worked directly with `userInput` to simplify the code.

### Q. How to get last second digigt?
Ans : `parseInt(Num/10)%10`

## Loops 2 (Whilel loops)
```js
while(conditon){
    // code to run
}
```

### HCF and LCM
Ans :

```javascript
const readline = require("readline");
const code = readline.createInterface({
  input: process.stdin
});
const userInput = [];
code.on("line", (data) => {
  userInput.push(data);
});

// ignore code above It
code.on("close", () => {
  let input = userInput;
  let a = parseInt(input[0]);
  let b = parseInt(input[1]);

  let originalA = a; // Store original values of a and b
  let originalB = b;

  // Calculate HCF using the Euclidean algorithm
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  let hcf = a; // When b becomes 0, a is the HCF

  // Calculate LCM using the formula LCM(a, b) = (originalA * originalB) / HCF
  let lcm = (originalA * originalB) / hcf;

  console.log(hcf); // Print HCF
  console.log(lcm); // Print LCM
});
```

---

### Key Changes and Fixes:
1. **Corrected the Euclidean Algorithm**:
   - Swapped `a` and `b` iteratively until `b` became 0. This ensures the calculation of HCF is accurate.

2. **Preserved Original Values**:
   - Stored the original values of `a` and `b` (`originalA` and `originalB`) before modifying them in the loop, ensuring accurate LCM computation.

3. **Calculated LCM Correctly**:
   - Used the formula \(\text{LCM}(a, b) = \frac{\text{OriginalA} \times \text{OriginalB}}{\text{HCF}}\).

---

### Example Run:
#### Input:
```
12
18
```
#### Output:
```
6
36
```

#### Explanation:
- HCF of 12 and 18 is **6**.
- LCM of 12 and 18 is \((12 \times 18) / 6 = 36\).

Certainly! Let's break down the problem and solve it step by step.

### Q. Take a number as input and return the sum of all of its digits.

Ans : 

```js
num % 10 // gives last digit
num / 10 // cuts the last digit with parseInt()
```

### Problem Explanation:
1. You are given a single number (`num`) as input. The number will be between 0 and 100,000 (inclusive).
2. The goal is to compute the **sum of all the digits** in the number. For example:
   - If the input is `100`, the sum of its digits is \(1 + 0 + 0 = 1\).
   - If the input is `456`, the sum is \(4 + 5 + 6 = 15\).
3. The output will be the computed sum.

---

### Steps to Solve:
1. Take the input number as a string or integer.
2. Extract each digit from the number.
3. Add all the digits together to compute the sum.
4. Print the result.

---

### Example Solution in JavaScript:
Here’s how you can implement this:

```javascript
const readline = require("readline");
const code = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

code.on("line", (data) => {
  let num = parseInt(data); // Convert input to an integer
  let sum = 0;

  while (num > 0) {
    let digit = num % 10; // Get the last digit
    sum += digit; // Add it to the sum
    num = Math.floor(num / 10); // Remove the last digit
  }

  console.log(sum); // Print the sum of digits
  code.close();
});
```

---

### Explanation of the Code:
1. **Extract Digits**:
   - Use the modulo operator (`num % 10`) to get the last digit of the number.
   - Use integer division (`Math.floor(num / 10)`) to remove the last digit.
2. **Add Digits**:
   - Keep a running total (`sum`) to store the sum of all digits.
3. **Loop Until Done**:
   - Continue the process until the number becomes `0`.

---

### Example Run:
#### Input:
```
100
```
#### Output:
```
1
```

Here’s how it works:
- First iteration: `digit = 100 % 10 = 0`, sum = `0 + 0 = 0`, `num = 100 / 10 = 10`.
- Second iteration: `digit = 10 % 10 = 0`, sum = `0 + 0 = 0`, `num = 10 / 10 = 1`.
- Third iteration: `digit = 1 % 10 = 1`, sum = `0 + 1 = 1`, `num = 1 / 10 = 0`.

Once `num` becomes `0`, the loop ends, and the result `1` is printed.

---

### Q. Take an integer and print 'YES' if the input integer is an armstrong number, otherwise print 'NO'.

Ans : 
Get length using for loop and then get digits using `mod` 

```js
 let a = parseInt(input[0])
  
  let sum = 0
  let length = 0
  let number = a;
  let orignal = a
  while(a>0){
    a = parseInt(a/10);
    length++
  }
  let i = 0
  while(i<length){
    let digit = number%10
    sum += digit**length
    number= parseInt(number/10);
    i++
  }
 console.log(sum == orignal ? 'YES' : 'NO')
  ```

  ### Q. Take an integer as input and print 'YES' if the number is a special number. Otherwise, print 'NO'.

  Ans : Same approch as above
  ```js
   let a = parseInt(input[0])
  
  let sum = 0
  let length = 0
  let number = a;
  let orignal = a
  while(a>0){
    a = parseInt(a/10);
    length++
  }
  let i = 0
  while(i<length){
    let digit = number%10
    // sum += digit**length
    // number= parseInt(number/10);
    // i++
    let fsum=0
    for (let i = 1; i <=4;i++){
      fsum += digit*i
    }
    sum += fsum
    i++ // no not run infinte loop!
  }
 console.log(sum == orignal ? 'YES' : 'NO')
 ```

 ### Q. For number from 1 to 100 if number is divisible by 3 print 'Hello' if divisible by 5 print 'World', if divisible by 15 print 'HelloWorld' else print the number itself.

 Ans : Use simple `while loop` and if else
 ```js
 let number = 1;

while(number <=100){
  if(number%15==0){
    console.log('HelloWorld')
  }else if (number%5==0){
    console.log('World')
  }else if (number%3==0){
    console.log('Hello')
  }else{
    console.log(number)
  }
  
  number++
}
 ```

 ### Q. Take an integer input and print 'YES' if the integer is a mars number, else print 'NO'.

 Ans : Use length to determine it.
 ```js
  let a = parseInt(input[0])
    // let sum = 0
  let length = 0
  // let number = a;
  // let orignal = a
  while(a>0){
    a = parseInt(a/10);
    length++
  }
console.log(length%2==0 ? 'YES' : 'NO')
  
  ```

## Strings
`let myFruit = new String()`
### Q6. Read a string input and return it with inverted cases, that is, uppercased characters are converted into lower case and vice-versa.
Ans : 
1. Read the question twice and properly.
2. Read it again!
```JS
 let inputString = input[0]
// let count = 0
 let invertedString = ""; // Initialize an empty string to store the result
  
  for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char === char.toUpperCase()) {
            invertedString += char.toLowerCase();
        } else {
            invertedString += char.toUpperCase();
        }
    }
  
    console.log(invertedString); // Print the result
```

### Q8. Check if “ram” is present in string.
Ans :
Use `includes` 
```JS
if (a.includes("ram")) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  ```

## Array 
` const myArray = new Array()`
### Q2. Take 10 elements in an array (arr) and find the second biggest number.

Constraints:
0 <= arr[i] <= 1000 ; 0<=i<=9

Input:
An array of 10 integers, each in a new line.
Output:
A single integer which is the second maximum number among the array elements

Example:
Input:
1
2
1
3
4
5
2
11
12
2
Output:
11

Ans : 

1. Get the input ie numbers in integer form.
2. Sort it using `array.sort((a,b)=>a-b);`
3. Use the `length` of the array to get the second last digit.
```JS
const readline = require("readline");
const code = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = [];

code.on("line", (data) => {
  userInput.push(parseInt(data)); // Push each line into the array
});

code.on("close", () => {
  let input = userInput; // Assign the entire input array to 'input'
  
  // console.log(input)
  let last=0;
  let mid = 0;
let inputNew = input.sort((a, b) => a - b);

  console.log(inputNew[inputNew.length-2])
});
```

### Q9. Take 3 integers a,b,c, insert them at the start of an array and return the array.

Ans :
1. Use spread operator to contact the two array
2. Use `for of` loop to print the new array.

```JS
const readline = require("readline");

// Setting up input interface
const code = readline.createInterface({
  input: process.stdin
});

const userInput = [];
code.on("line", (data) => {
  userInput.push(data); // Reading input
});

code.on("close", () => {
  const a = parseInt(userInput[0]);
  const b = parseInt(userInput[1]);
  const c = parseInt(userInput[2]);
  // Integer to be inserted
  const len = parseInt(userInput[3]); // Length of the array
  const array = userInput.slice(4).map(Number); // Extract and parse array elements

  // console.log(a,b,c,len,array)
  let newArray = [a,b,c,...array]
  for (e of newArray){
    console.log(e)
  }
  

});

```