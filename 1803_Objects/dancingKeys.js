let obj = {
    'apple' : 20,
    'orange': 40,
    200 : 'Big Saturn',
    false : 'Smoke',
    'mango' : 34,
    10 : 'Ben 10'
}

console.log(obj)
// positions are not in obj coz we access by keys

// number and then the way it is wrote
// Why the number key is string during print?

// array is an object special type having keys fixed.

let myfruits = [10,20,'mango',true]

console.log(myfruits['1'])

for (let t in myfruits){
    console.log(typeof t,myfruits[t])
}

console.log( 'orange' in obj)