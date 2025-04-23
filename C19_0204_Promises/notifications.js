// step 1: Give a call to Dominos  => 2sec
// step 2: Order Placed  => 1 sec
// step 3: Cook started Preparing Pizza base  => 5 sec
// Step 4: Cheese Crusut is created  => 2sec
// Step 5: Pizza is out for delivery  => 3 sec
// Step 6: Pizza is delivered to the customer => 7sec
// Step 7: We ate the Pizza => 1 sec



function cookPizza(work, time){

    return  new Promise((resolve, reject)=>{
            setTimeout(()=>{resolve(work)}, time)
     })
  
  }
  
  // let p1 = cookPizza("Give a call to Dominos", 2000)
  // p1.then(value => console.log(value))
  
  console.log(cookPizza("Give a call to Dominos", 2000))
  .then(value => {
      console.log(value)
      return cookPizza("Order Placed", 1000)
  })
  .then(value => {
      console.log(value)
      return cookPizza("Cook started Preparing Pizza base", 5000)
  })
  // .then(value => {
  //     console.log(value)
  //     return cookPizza("Cheese Crusut is created", 2000)
  
  // })
  // .then(value => {
  //     console.log(value)
  //     return cookPizza("Pizza is out for delivery", 3000)
  // })
  // .then(value => {
  //     console.log(value)
  //     return cookPizza("Pizza is delivered to the customer", 7000)
  // })
  // .then(value => {
  //     console.log(value)
  //     return cookPizza("We ate the Pizza", 1000)
  // })
  