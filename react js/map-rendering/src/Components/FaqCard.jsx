import React from 'react'

export default function FaqCard({v,faq,faqDefault}) {
  return (
    <div className="faqs">
        <div className="faqquestion" onClick={ () => faq(v.id) }>
            { v.question }
            <span>{ (faqDefault == v.id) ? '-' : '+' }</span>
        </div>
        <div className={ (faqDefault == v.id) ? 'faqanswer' : 'faqanswer display' }>
            { v.answer }
        </div>
    </div>
  )
}
