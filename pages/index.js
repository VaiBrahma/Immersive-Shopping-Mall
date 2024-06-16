import styles from "../styles/home.module.css"
import ProductCard from "@/components/ProductCard"
import {useRouter} from 'next/router'

const index = ({products= []}) => {
  const Router = useRouter();
  const handleClick = (product) => {
    Router.push(`product/${product.id}`)
  }
  return (
    <div className = {`${styles.gridContainer}`}>
      {products.map(product => (
        <div onClick={()=>handleClick(product)} className="m-9" key = {product.id}>
          <ProductCard product={product}/>
        </div>
      ))}
    </div>
  )
}

export default index;

export async function getStaticProps(){
  const response = await fetch('http://localhost:3000/products.json');
  const data = await response.json();

  return {
    props: {
      products: data,
    }
  }
}