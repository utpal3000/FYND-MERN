function sum(a,...b){
    // rest operator used above
    console.log(a,b)
}

// a function to receive multiple arguments

// diff between rest operator and spread operator

function hello(a,b,c,d,e){
    console.log(a,b,c,d,e)
}

// let x1 = 10
// let x2 = true
// let x3 = "ramesh"
// let x4 =[10,20,30]
// let x5 = {a:10,b:20}
// hello(x1, x2, x3, x4, x5)

// can we pass a function in a function
// any thing which is value can be pass in function

// value in js

// value and ref.

// no, bool, string are call by value

// objects are pass by ref. / address

function hello(x2){
    x2[0]=100
};
let x1 = [10,20,30];
hello(x1)

// console.log(x2)
console.log(x1)

// Be serious and work Hard

function greet(a){
    a=100
    console.log('inner',a)
}
let b = 20;
great(b)