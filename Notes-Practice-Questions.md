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

## WHILE Loops

```javaScript
while (condition){
    // code
}
```

### Q. How to extract no. from left to right ?
Ans :
1204

1
2
0
4

Approch - Think how u can get the first digit
Divide the no. to that of the length * 10
```
1204/1000 = 1 // use math.floor or parseInt()
```
### Q. Take a number and return all the even digits of the number.

Constraints:
0 <= number <= 10000

Input:
A single integer is provided as input.
Output:
Return a list of even digits of the number, each digit in a new line.Return -1 in case there are no even digits

Example:
Input:
1204
Output:
2
0
4

Ans : 
```js
let number = 1204 // get the input 

// Variable to track if we found any even digit
let foundEvenDigit = false;

// Calculate the number of digits in the input number
let originalNumber = number;
let divisor = 1;

// Calculate divisor to extract digits from left to right
while (originalNumber >= 10) {
    originalNumber = parseInt(originalNumber / 10);
    divisor *= 10;
}

// Now loop through the digits from left to right
while (divisor >= 1) {
    let digit = parseInt(number / divisor);  // Extract the most significant digit
    if (digit % 2 === 0) {  // Check if the digit is even
        console.log(digit);  // Print the even digit
        foundEvenDigit = true;
    }
    number = number % divisor;  // Remove the most significant digit
    divisor = parseInt(divisor / 10);  // Move to the next digit
}

// If no even digit is found, print -1
if (!foundEvenDigit) {
    console.log(-1);
}

```

### Q. Take an integer an return 'YES' if the input is a palindrome, or 'NO' if it is not.

Ans :

```JS
  let a = parseInt(input[0])
    
  let newNum = ''
  let oNum = a
  while(a>0){
    newNum += a%10
    a = parseInt(a/10)
  }
 if (newNum == oNum){
   console.log('YES')
 }else{
   console.log('NO')
 }
  ```

### Q5. Take a integer as input and return the number of zeroes in the input.

Ans :

```JS
let a = parseInt(input[0])
  
  let newNum = a;
  let count = 0;
  while (a>0){
    let digit = a%10
    if(digit == 0){
      count++
    }
    a = parseInt(a/10)
  }
 
  console.log(count)```

