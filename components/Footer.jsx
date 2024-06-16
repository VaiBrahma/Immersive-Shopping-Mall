import styles from '@/styles/footer.module.css';

function footer(){
    return (
      <>
      <div className="fixed bottom-0 bg-black w-full h-8 flex justify-center items-center" >
        <div className={`${styles.shoppingCart}`}> <img src="/icons/shopping-cart.png" alt="shopping-kart" className="hover:scale-[1.1] active:scale-[1.05] relative right-[0.2em] h-8 w-8"/></div>
      </div>
      </>
    )
}
export default footer;