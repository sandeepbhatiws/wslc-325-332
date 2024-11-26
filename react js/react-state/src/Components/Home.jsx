import React, { useState } from 'react'

export default function Home() {

    var [counter, setCounter] = useState(0);

    const minus = () => {
        if(counter > 1){
            counter--;
            setCounter(counter);
            console.log(counter);
        }
    }

    const add = () => {
        counter++;
        setCounter(counter);
        console.log(counter);
    }

  return (
    <div className='row'>
      <button onClick={ minus }>-</button>
      <button>{ counter }</button>
      <button onClick={ add }>+</button>
    </div>
  )
}
