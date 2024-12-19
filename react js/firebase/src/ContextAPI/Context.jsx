import React, { createContext, useState } from 'react'

const context = createContext();

export default function Context({children}) {

  var checkLogin = JSON.parse(localStorage.getItem('firebaseUser'));
  var checkLogin = checkLogin ? true : false;

  const [isLogin, setLogin] = useState(checkLogin);

  const data = { isLogin, setLogin }

  return (
    <context.Provider value={ data }>
        {children}
    </context.Provider>
  )
}

export {context};