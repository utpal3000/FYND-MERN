let arr = [10,20,30,40,50]

arr.map((value,index)=>console.log(value,"x",index,'=',value*index)); // map function

// value and index are re1. in param. as they are deafult and is being used inside. If u not using them u can exlude them..

superValue = arr.forEach((value)=>
value*value
);
console.log(superValue)
//20 40
// use forEach to perform some operations and map to create new array after applying condition

// Filter()

x = arr.forEach((value,index)=> value%3==0)
console.log(x) // undefined
x = arr.map((value,index)=> value%3==0)
console.log(x) // [flase,false,true,false,false]
x = arr.filter((value,index)=> value%3==0)
console.log(x) // [30]


// find()
// Like filter but returns only the first element of the array when the condition is true.
x = arr.find((value,index)=> value%4==0)
console.log(x) // [30]

// reduce()

// lets get sum of the array

console.log('--- Reduce ---')
// let display = (sum,value,index) =>console.log(sum,value);

// arr.reduce(display,0)

x = arr.reduce((sum,value,index)=>sum+value,0)
console.log(x)
// sum is consideted as prev value use it when need prev. and current value of value being returned.
console.log('---- Revision ---')
// Take a array of string and return the length of each string, then return/print odd lenght, finally find the sum of all odd length.

let strArr = ['samosa', 'pap', 'banana', 'kiwi', 'grape'];

// Step 1: Get the length of each string
let eLength = strArr.map(value => value.length);
console.log("Lengths of strings:", eLength);

// Step 2: Filter out the odd lengths
let eFil = eLength.filter(value => value % 2 !== 0);
console.log("Odd lengths:", eFil);

// Step 3: Sum the odd lengths
let eOdd = eFil.reduce((sum, value) => sum + value, 0);
console.log("Sum of odd lengths:", eOdd);

// We can get the sum of odd length using .

console.log(strArr.map(value=>value.length).filter(value=>value%2!=0).reduce( (sum,value)=>sum+value,0))