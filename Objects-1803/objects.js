// # Objects in JS
let my_arr = [10,20,30];

let obj = new Object()

obj = {
    'apple' : 20, // apple is key and then value the 20
    'mango': 35,
    'banana': 12,
    200 : 'two hundred',
    'my name': 'utpal',
    'mango':23 // updates prev. key
}

console.log(obj.apple)
console.log(obj)

// dot syntax to access objects keys

// Object keys should be string to access via dot syntx
// wont use no. or space key or variable keys 
// keys must be variable name to be accessed by dot syntax

// can use [] => bracket notation

console.log(obj[200])
console.log(obj['my name'])
