console.log('a')

setTimeout(() => {
  console.log('b')
}, 3000)

for(let i = 1; i<=10000000000; i++){
//   console.log(i)
// console.log('running loop')
}

console.log('c');

setTimeout(() => {
  console.log('d')
}, 1000)

console.log('e')