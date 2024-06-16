import styles from '@/styles/productCard.module.css'
import Stars from './Star'
import React from 'react'

const productCard = ({product = {"title": "shirt", "category": "shirt", "price": 3999},}) => {

  const handleClick1 = (event)=>{
    event.stopPropagation();
    console.log('clicked');
  }
  const handleClick2 = (event)=>{
    event.stopPropagation();
    console.log('clicked');
  }
  return (
    <div className={`${styles.card} bg-white p-[1em] justify-center items-center flex flex-col`}>
        <div className=' w-full text-[#4f4f75] text-[0.9rem] font-bold'><div className='text-left'>{product.category.toUpperCase()}</div></div>
        <div className={`border-2 relative m-2 ${styles.background}`}>
          <img className={`${styles.fancyShadow}`} src="" alt="" />
          <img className='border-2 front relative' src="" alt="" />
        </div>
        <div className='w-full flex flex-col justify-left items-start'>
          <div className='text-[#000000b3] text-center font-serif text-[0.9em] font-[600]'>{product.title}</div>
          <div className='text-[#000000b3] text-center font-[600] text-[1.4rem]'>₹{product.price}/-</div>
          <div><Stars number={product.stars}/></div>
          <div className='text-[#4f4f75ed] h-[50px] text-[0.7em] text-center font-bold'>discount: {product.discount}% off <del className='text-[#ff0000a6]'>₹{product.price * 100 / (100-product.discount)}</del></div>
        </div>

        <button className={`${styles.btn} bg-[#f6a90f]`} onClick={(e)=>handleClick1(e)}><img src="/icons/buy-now.png" alt="<-"/>Buy Now</button>
        <button className={`${styles.btn} bg-[#10a3f8]`} onClick={(e)=>handleClick1(e)}><img src="/icons/add-cart.png" alt="<-"/>Add To Kart</button>
    </div>
  )
}

export default productCard