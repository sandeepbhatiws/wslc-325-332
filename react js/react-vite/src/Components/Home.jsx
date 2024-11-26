import React from 'react'
import Header from './Header'

export default function Home() {

  var text = 'Home page';
  console.log(text);

  var status = 0;

  return (
    <div>
      {  
        (status == 1)
        ?
        <Header/>
        :
        ''
      }
      <div style={{ display: `${ status ? 'none' : '' }` }}>
      { text }
      </div>

      <div class='header'>
      { text }
      </div>
        
    </div>
  )

}
