import { useRouter } from 'next/router';
import ModelViewer from '@/components/3d/ModelViewer';
import Link from 'next/link';
import styles from '@/styles/Product.module.css'
import products from '@/public/products';
import Stars from '@/components/Star';
import { useState } from 'react';
const ProductPage = () => {
  const [flag, setFlag] = useState();
  const router = useRouter();
  const { productId } = router.query;
  const product = products.find(product => product.id.toString() === productId) || {reviews: []};

  const modelPath = `/models/${productId}.glb`;

  return (
    <div className={`${styles.bg}`}>
      {flag ? (<div className='absolute top-0 left-0 bg-white h-screen w-screen'>
        <h2 className={`${styles.bgtext}`}><span>{product.title}</span></h2>
        <ModelViewer modelPath={modelPath}/>
        <img src="/icons/minimize.png" alt="<-" onClick={()=>setFlag(!flag)} className={`${styles.expand} left-2 top-2`}/>
        </div>)
        :
        (
          <>
          <Link href='/'>
        <img src="/icons/back.png" alt="sdfadfa" className=' absolute top-2 left-2 w-[1em] invert'/>
      </Link>
      <div className={`${styles.card}`}>

        <div className={`${styles.card1} relative`}>
          <ModelViewer modelPath={modelPath}/>
          <img src='/icons/expand.png' onClick={()=>setFlag(!flag)} className={`${styles.expand}`}/>
        </div>

        <div className={`${styles.card2} text-white`}>
          <div className='text-[2em]'>{product.title}</div>
          <div>₹{product.price}/- Only <span className='text-[0.5em]'> {product.discount}% off <del className='text-[#ff0000a6]'>₹{(product.price * 100 / (100-product.discount)).toFixed(2)}</del></span></div>
          <div className='mt-2'><Stars number={product.stars}/></div>
          <div className={`${styles.buttons}`}>
            <button className={`${styles.btn1}`}>Buy Now</button>
            <button className={`${styles.btn2}`}>Add To Cart</button>
          </div>
          <h2 className='mt-8'>Reviews</h2>
          <div className={`${styles.reviews}`}>
          {
            product.reviews.map(review => (
              <>
              <div className={`${styles.review}`}>
                <p className=''>{review.name} | <span className='text-[black] text-[0.8em]'>{review.date}</span></p>
                <p className='text-[#ffffff89]'>{review.review}</p>
              </div>
              </>
            ))
          }
          </div>
        </div>
      </div>
      </>
        )
        }
    </div>
  ); 
};

export default ProductPage;
