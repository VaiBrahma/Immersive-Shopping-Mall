import styles from '@/styles/footer.module.css';

function footer(){
    return (
      <>
      <div className="fixed bottom-0 bg-black w-full h-8 flex justify-center items-center z-[999]" >
        <div className={`${styles.shoppingCart}`}> <img src="/icons/shopping-cart.png" alt="shopping-kart"/></div>
      </div>
      </>
    )
}
export default footer;