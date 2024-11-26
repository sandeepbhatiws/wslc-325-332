import React, { useState } from 'react'

export default function ShowHide() {

    var [type, setType] = useState('password');

    const showPassword = () => {
        if(type == 'password'){
            setType('text')
        } else {
            setType('password')
        }
    }

  return (
    <div className='form'>
      <input type={ type }/>
      <button onClick={ showPassword }>{ (type == 'password') ? 'Show' : 'Hide' }</button>
    </div>
  )
}
