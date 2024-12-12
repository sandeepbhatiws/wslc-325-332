import React, { createContext, useState } from 'react'

const context = createContext();

export default function Context({children}) {

    var locaStorage = localStorage.getItem('cartItems');
    locaStorage = JSON.parse(locaStorage);

    let [cartItems, setCartItems] = useState(locaStorage ? locaStorage : []);
    let [wishListItems, setWishlistItems] = useState([]);

    const data = { cartItems, setCartItems, wishListItems, setWishlistItems }

  return (
    <context.Provider value={ data }>
        {children}
    </context.Provider>
  )
}

export {context};