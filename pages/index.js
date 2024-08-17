import { useState } from 'react';
import styles from "../styles/Home.module.css";
import ProductCard from "@/components/ProductCard";
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import Carousel from "@/components/Carousel";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import productsData from "@/public/products";

const Index = () => {
  const { data, status } = useSession();
  const Router = useRouter();
  const productsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (product) => {
    Router.push(`product/${product.id}`);
  };

  const goTo3dShop = () => {
    Router.push('/3d-mall');
  };

  // Get current products based on the current page
  const currentProducts = productsData.slice(0, currentPage * productsPerPage);

  const loadMoreProducts = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Header />
      <div style={{marginBottom: '5em'}}>
        <div className={styles.welcome}>
          {status === 'authenticated' ? <h1>Hi <span className="text-[red]">{data.user.name}</span>!</h1> : null}
          <h1>Welcome to Our Shop</h1>
        </div>

        <button className={styles.btn}
          onClick={() => {
            if (status === 'authenticated') goTo3dShop();
            else signIn();
          }}>
          Enter 3d Shop
        </button>

        <div>
          <Carousel />
        </div>

        <div className={styles.gridContainer}>
          {currentProducts.map((product, index) => (
            <div key={index} onClick={() => handleClick(product)} className="m-9">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {currentProducts.length < productsData.length && (
          <button onClick={loadMoreProducts} className={styles.loadMoreBtn}>
            Load More
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Index;
