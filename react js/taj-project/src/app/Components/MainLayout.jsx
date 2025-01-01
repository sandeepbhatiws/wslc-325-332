

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'

export default function MainLayout({ children }) {
  return (
    <>
    <ToastContainer/>
    <Header/>
      { children }
    <Footer/>
    </>
  )
}
