import React from 'react'

export default function FaqHeadingNew({ faqTitle, faqTagline, children }) {
  return (
    <div className='heading'>
        <h1>{ faqTitle }</h1>
        <p>{ children }</p>
    </div>
  )
}
