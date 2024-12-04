import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

export default function RightSideCategoryFilter({sorting, filterCategories}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php', {
      params: {
        limit : 15,
        sorting : sorting,
        categories : filterCategories.toString()
      }
    })
    .then((result) => {
      setProducts(result.data.data);
    })
    .catch((error) => {
      
    })
  },[sorting, filterCategories])


  return (
    <div className="grid grid-cols-3 gap-5 lg:col-span-3">
      
      {
        products.map((v,i) => {
          
          return(
            <ProductCard product={v}/>
          )
          
        })
      }
      
    </div>
  )
}
