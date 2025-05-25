import React, {useState} from 'react'

// useState is named export.
console.log('I am out. Loads only at page reload')

function CounterApp2() {

    console.log('Hello!')
 let [a,fun] = useState(100); // returns [100,f]
 function Increase(){
    fun(a+1);
 }
console.log('Byeeeee')
  return (
    <div>
    <h1>CounterApp 2 </h1>

    <h3>{a}</h3>

    <button type="button" onClick={Increase}>Increase</button>
   
   
   
   
   
   
   
    <button type="button">Decrease</button>
    <button type="button">Reset</button>

 

    </div>
  )
}

export default CounterApp2