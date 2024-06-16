import styles from '@/styles/header.module.css';
const header = () => {
  return (
    <>
    <div className={`${styles.header}`} >
      <div className={`${styles.title}`}>
        <img src="/icons/bag.png" alt="bags" className={`${styles.icon} hover:scale-[1.1] active:scale-[1.05] z-[9999] w-10 fixed top-2 left-2`}/>
        <span>ISM</span>
      </div>
      <div className={`${styles.avatar}`}>
        <span>Vaibhav Singh</span>
        <img src="/icons/avatar.png" alt="bags" className="w-10 absolute top-2 right-[-3em]"/>
      </div>
    </div>
    </>
  )
}

export default header