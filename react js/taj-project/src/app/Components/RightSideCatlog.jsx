"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ProductCard from './ProductCard'
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from './Loading';

export default function RightSideCatlog() {

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php',{
            params: {
                limit: 12
            }
        }
        ).then((succcess) => {
            setProducts(succcess.data.data);
            setLoading(false);
        }).catch((error) => {
            toast.error('Something went wrong');
        })
    },[]);

  return (
    <section
        class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3"
    >

        { 
            (isLoading) 
            ?
                <>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                </>
            :
                
                products.map((v,i) => {
                    return (
                        <ProductCard key={ i } product={v} cartItems={cartItems} setCartItems={setCartItems}/>
                    );
                })
            
        }
        



        {/*  */}

    </section>
  )
}
