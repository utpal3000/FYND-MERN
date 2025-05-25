import React from 'react'
import { useState } from 'react'

function CounterApp4() {

    let [coins, setCoins] = useState({gold:0, silver:0,bronze:0})
    console.log(coins)

    function incGold(){
        // setCoins({...coins, gold:coins.gold+1})
        // setCoinns({coins.gold++})
        // coins.gold++
        // can not change use state values directly.

        // setCoins({gold:coins.gold+1 , silver:coins.silver, bronze:coins.bronze})

        // what if it had many other values as well??
        setCoins({...coins, gold:coins.gold+1})
        // the ...coins copies the value andd the other part updates the copied values.
    }

  return (
    <div>
        <h3>
            Gold : {coins.gold} | Silver : {coins.silver} | Bronze : {coins.bronze}
        </h3>
        <div>
           <button type="button" onClick={incGold}>Inc Gold</button>
        </div>
    </div>
  )
}

export default CounterApp4