import React, { useState, useEffect } from 'react';
import styles from '@/styles/Carousel.module.css';

const pages = Array.from({ length: 7 }, (_, index) => `/carousel/page${index + 1}.jpeg`);

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage((prevPage) => (prevPage + 1/2) % pages.length);
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    }, 3000); // Change page every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const getPageClass = (index) => {
    if (index === currentPage) {
      return styles.current;
    } else if (index === (currentPage + 1) % pages.length) {
      return styles.next;
    } else if (index === (currentPage - 1 + pages.length) % pages.length) {
      return styles.prev;
    } else {
      return styles.hidden;
    }
  };

  const handleDotClick = (index) =>{
    let value = currentPage;
    const interval = setInterval(() => {
      if(value===index){
        clearInterval(interval);
        return;
      }
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      value = (value+1) % pages.length;
    }, 190);
    return () => clearInterval(interval);
  }
  return (
    <div className={`${styles.carousel}`}>
      <div className={styles.pages}>
        {pages.map((page, index) => (
          <img key={index} className={`${styles.page} ${getPageClass(index)}`} src={`${page}`} onClick={()=>setCurrentPage(index)}>
            {/* {page} */}
          </img>
        ))}
      </div>
      <div className={styles.dots}>
        {pages.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentPage ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
