import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
  
  export default function BestSellingProducts({ title, type }) {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      var products = await fetch('https://dummyjson.com/products?limit=12');
      var products = await products.json();
      setProducts(products.products);
    }

    useEffect(() => {
      getProducts();
        // axios.get('https://dummyjson.com/products?limit=12').
        // then((success) => {
        //   setProducts(success.data.products);
        // }).
        // catch((error) => {
        //   console.log('Error');
        // })
    },[])

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-2">
          <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">{title}</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (
              <ProductCard product={product} key={index}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
  