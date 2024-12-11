import React, { createContext, useState } from 'react'

const context = createContext();

export default function Context({children}) {

    let [cartItems, setCartItems] = useState([]);
    let [wishListItems, setWishlistItems] = useState([]);

    const data = { cartItems, setCartItems, wishListItems, setWishlistItems }

  return (
    <context.Provider value={ data }>
        {children}
    </context.Provider>
  )
}

export {context};