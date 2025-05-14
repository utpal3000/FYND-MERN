import React from 'react'

function Section(paras) {
  return (
    <div className='Section'>
        <h1 className='heading'>{paras.heading}</h1>
        <p className='' >{paras.content}</p>
        <hr/>
    </div>
  )
}

export default Section