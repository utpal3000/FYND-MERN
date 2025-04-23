let p1 = new Promise((res,rej)=>res(2))

p1.then(v=>{console.log(v); return v*2})
p1.then(v=>{console.log(v); return v*2})
p1.then(v=>{console.log(v); return v*2})


