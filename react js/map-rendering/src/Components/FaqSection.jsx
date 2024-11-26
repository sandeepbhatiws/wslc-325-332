import React, { useState } from 'react'
import faqData from '../data/faqjson.js'
import FaqHeading from './FaqHeading.jsx';
import FaqHeadingNew from './FaqHeadingNew.jsx';
import FaqCard from './FaqCard.jsx';

export default function FaqSection() {

    var [faqDefault, setFaqDefault] = useState(faqData[0]['id']);

    var title = 'Frequently Asked Questions';
    var tagline = 'Engage and excel with our diverse collection of free learning resources, from quizzes to e-books and interactive challenges- designed to lift your career at zero cost!';

    const faq = (id) => {
        setFaqDefault(id);
    }

  return (
    <>
        {/* <FaqHeading faqTitle={ title } faqTagline={ tagline }/> */}
        {/* <FaqHeading faqTitle={ title }>
            { tagline }
        </FaqHeading> */}

        {/* <FaqHeadingNew faqTitle={ title } faqTagline={ tagline }/> */}

        <FaqHeadingNew faqTitle={ title } faqTagline={ tagline }>
            { tagline }
        </FaqHeadingNew>


        <div className="outer">
            {
                faqData.map((v,i) => {
                    return(
                        <FaqCard v={v} faq={faq} faqData={faqData} faqDefault= {faqDefault} key={ i }/>
                    );
                })
            }
        </div>
    </>
  )
}
