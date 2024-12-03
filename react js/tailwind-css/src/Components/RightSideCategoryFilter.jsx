import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

export default function RightSideCategoryFilter() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php')
    .then((result) => {
      setProducts(result.data.data);
    })
    .catch((error) => {
      
    })
  },[])


  return (
    <div className="lg:col-span-3">
      
      {
        products.map((v,i) => {
          
          return(
            <div className="grid grid-cols-2">
            <ProductCard product={v}/>
            </div>
          )
          
        })
      }
      
    </div>
  )
}
