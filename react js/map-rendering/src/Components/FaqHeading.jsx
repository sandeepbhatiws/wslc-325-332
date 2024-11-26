import React from 'react'

export default function FaqHeading(data) {

  console.log(data);
  return (
    <div className='heading'>
        <h1>{ data.faqTitle }</h1>
        <p>{ data.children }</p>
    </div>
  )
}
