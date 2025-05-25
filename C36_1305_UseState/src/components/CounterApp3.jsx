import React, { useState } from "react";

// useState is named export.
console.log("I am out. Loads only at page reload");

function CounterApp3() {
  const [a, fun] = useState(10);

    let b = 20

    function incA(){
        fun(a+1)
    }

    function decA(){
        fun(a-1)
    }

    function resA(){
        fun(0)
    }


    function incB(){
        b = b + 1;
        console.log('Line 17',b)
    }




  return (
    <div>
      <h1>CounterApp 3 </h1>

      <h3>{a}</h3>

      <button type="button" onClick={incA}>
        Increase A
      </button>
      <button type="button" onClick={decA}>
        Decrease A
      </button>
      <button type="button" onClick={resA}>
        Reset A
      </button>


      <h3>{b}</h3>

      <button type="button" onClick={incB}>
        Increase B
      </button>

    </div>
  );
}

export default CounterApp3;
