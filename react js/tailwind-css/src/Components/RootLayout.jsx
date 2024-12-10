import React from 'react'
import Header from './Header'
import Navbar from './Menu'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
        <Header/>
        <Navbar/>

        <Outlet/>


        {/* <Footer/> */}
    </div>
  )
}
