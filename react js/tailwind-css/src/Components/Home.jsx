import React, { useState } from 'react'
import Header from './Header'
import Menu from './Menu'
import Banner from './Banner'
import BestSellingProducts from './BestSellingProducts'

export default function Home() {

  return (
    <>
        <Header/>
        <Menu/>
        <Banner/>
        <BestSellingProducts title="Best Selling Products" type="1"/>
        <BestSellingProducts title="Top Rated Products" type="2"/>
    </>
  )
}
