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


let display = (sum,value,index) =>console.log(sum,value);

arr.reduce(display,0)
