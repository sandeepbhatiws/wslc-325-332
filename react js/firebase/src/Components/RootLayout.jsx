import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

export default function RootLayout() {
  return (
    <>
      <ToastContainer/>
        <Header/>

        <Outlet/>

        <Footer/>
    </>
  )
}
