let date = new Date()
console.log(date,typeof date)

console.log(date.getHours())
// same for min, sec

// a simple loop executes code many times in a second

setInterval(() => {
    console.log(date)
}, 2000);