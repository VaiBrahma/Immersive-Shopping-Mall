import styles from '@/styles/productCard.module.css'
import Stars from './Star'
import React from 'react'
import {signIn, useSession} from 'next-auth/react';
import { useRouter } from 'next/router';

const productCard = ({product = {"title": "shirt", "category": "shirt", "price": 3999},}) => {
  
  const {data, status} = useSession();
  const Router = useRouter();

  const handleClick1 = (event, id)=>{
    event.preventDefault();
    event.stopPropagation();

    if(status == 'authenticated') {
      goToPaymentPortal(id);
    }
    else{
      signIn();
    }
  }
  const handleClick2 = (event)=>{
    event.preventDefault();
    event.stopPropagation();

    if(status == 'authenticated') {
      addToCart();
    }
    else{
      signIn();
    }
  }

  const goToPaymentPortal = (id) => {
    Router.push(`/payment/${id}`);
  }
  const addToCart = () => {
    console.log('add to cart');
  }
  return (
    <div className={`${styles.card} bg-white p-[1em] justify-center items-center flex flex-col`}>
        <div className=' w-full text-[#4f4f75] text-[0.9rem] font-bold'><div className='text-left'>{product.category.toUpperCase()}</div></div>
        <div className={`border-2 relative m-2 ${styles.background}`} style={{background: `url('/photos/${product.id}.png') no-repeat center center/cover`}}></div>
        <div className='w-full flex flex-col justify-left items-start'>
          <div className='text-[#000000b3] text-center font-serif text-[0.9em] font-[600]'>{product.title}</div>
          <div className='text-[#000000b3] text-center font-[600] text-[1.4rem]'>₹{product.price}/-</div>
          <div><Stars number={product.stars}/></div>
          <div className='text-[#4f4f75ed] h-[50px] text-[0.7em] text-center font-bold'>discount: {product.discount}% off <del className='text-[#ff0000a6]'>₹{(product.price * 100 / (100-product.discount)).toFixed(2)}</del></div>
        </div>

        <button className={`${styles.btn} bg-[#f6a90f]`} onClick={(e)=>{e.preventDefault(); handleClick1(e, product.id)}}><img src="/icons/buy-now.png" alt="<-"/>Buy Now</button>
        <button className={`${styles.btn} bg-[#10a3f8]`} onClick={(e)=>{e.preventDefault(); handleClick2(e)}}><img src="/icons/add-cart.png" alt="<-"/>Add To Cart</button>
    </div>
  )
}

export default productCard