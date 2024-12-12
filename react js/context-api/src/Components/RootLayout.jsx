import React from 'react'
import Header from './Header'
import Navbar from './Menu'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ShoppingCart from './ShoppingCart'

export default function RootLayout() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <ToastContainer/>
        <Outlet/>


        {/* <Footer/> */}
    </div>
  )
}
