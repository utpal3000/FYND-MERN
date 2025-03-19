// Q2 check if obj has ramesh in it

let friends = {
    golu : '10',
    name : 'ramesh'
}

// use loop 

function checkRamesh(){
    for(let t in friends){
        if(friends[t] == 'ramesh')
        return 'Found'
    }
    return 'NOT Found'
}

console.log(checkRamesh())
// q3 combine two objects

let fruits = {
    apple : 10,
    banana : 20
}

// let friendsFruits = {fruits, friends}

let friendsFruits = {...friends,...fruits}; // use spread operator


// for (let t in fruits){
//     friendsFruits[t] = fruits[t]
// }
// for (let t in friends){
//     friendsFruits[t] = friends[t]
// }

// can use assign 

let marks = {
    100 : 'hundred'
}

Object.assign(friends, marks)

console.log(friendsFruits, friends)

// q4 replace key apple with pineapple

// q5 print values which are numebrs