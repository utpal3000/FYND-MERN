obj = {
    'apple' : 20, // apple is key and then value the 20
    'mango': 35,
    'banana': 12,
    200 : 'two hundred',
    'my name': 'utpal',
    'mango':23, // updates prev. key
    10 : 'Earth',
    true : false
}

for (let k in obj){
    // console.log(k,typeof(obj[k]))
}

// keys must be a name, ie it is a string.

let obj1 = {
    a : 'apple', 
    b : 'banana',
    c : 'cat',
    4 : 'legs'
}

console.log(obj1[4]) // numbers or boolean key can be used in string key or as defined variable type key