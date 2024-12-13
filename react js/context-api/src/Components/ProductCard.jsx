import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../ContextAPI/Context';
import { toast } from 'react-toastify';

export default function ProductCard({product}) {

    let { cartItems, setCartItems } = useContext(context);

    const addToCart = (value) => {

        var checkCart = cartItems.filter((v,i) => {
            if(v.id == value.id){
                return v;
            }
        })

        if(checkCart.length == 0){
            var data = {
                id : value.id,
                name : value.name,
                image : value.image,
                price : value.price,
                qty : 1
            }
    
            var input = [data,...cartItems];
            setCartItems(input);
            localStorage.setItem('cartItems',JSON.stringify(input));
            toast.success('Product added to cart Succesfully !!');
        } else {
            var checkCart = cartItems.map((v,i) => {
                if(v.id == value.id){
                    v.qty++;
                    return v;
                } else {
                    return v;
                }
            })

            console.log(checkCart);

            var input = [...checkCart];
            setCartItems(input);
            localStorage.setItem('cartItems',JSON.stringify(input));
            toast.success('Cart update Succesfully !!');
        }

        
    }
  return (
    <div key={product.id} className="group relative">
        <img
            alt={product.name}
            src={product.image}
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
            <div>
            <h3 className="text-sm text-gray-700">
                <Link to={ `/product-details/${product.id}` }>
                {product.name}
                </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category_name}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>

            <button onClick={ () => addToCart(product) } className='pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem]/5 font-semibold text-white hover:bg-indigo-500'>
                Add To Cart
            </button>
        </div>
        </div>
  )
}
