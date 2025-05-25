import React from 'react'
import { useState } from 'react'

function CounterApp5() {
    let [count, setCount] = useState(0)

    function inc(){
        setCount(count+1)
    }

    function dec(){
        setCount(count-1)
    }

  return (
    <div>
        <h1>Counter App 5</h1>
        <h3>{count}</h3>
        <button type="button" onClick={inc}>Inc</button>
        <button type="button" onClick={dec}>Dec</button>
        <button type="button" onClick={()=>setCount(0)}>Res</button>
    </div>
  )
}

export default CounterApp5