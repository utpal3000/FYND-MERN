import React from 'react'

function CounterApp() {

    let count = 0;

    function increase(){
        count=count+1;
        console.log(count)
    }

  return (
    <div>
    <h1>CounterApp</h1>

    <h3>{count}</h3>

    <button type="button" onClick={increase}>Increase</button>
   
   
   
   
   
   
   
    <button type="button">Decrease</button>
    <button type="button">Reset</button>

 

    </div>
  )
}

export default CounterApp