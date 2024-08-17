import styles from '@/styles/Header.module.css';
import {signIn, signOut, useSession} from 'next-auth/react'
const header = () => {
  const {data, status} = useSession();
  return (
    <>
    <div className={`${styles.header}`} >
      <div className={`${styles.title}`}>
        <img src="/icons/bag.png" alt="<-" className={`${styles.icon} hover:scale-[1.1] active:scale-[1.05] w-10`}/>
        <span>Immersive Shopping Mall</span>
      </div>
      <div className={`${styles.avatar}`}>

        {(status=="authenticated")
          ?
          <button className={`${styles.btn}`} onClick={e=>{e.preventDefault(); signOut()}}>Sign Out</button>
          :
          <button className={`${styles.btn}`} onClick={(e)=>{e.preventDefault(); signIn()}}>Sign In</button>}

        <img src={(status=="authenticated")? data.user.image :`/icons/avatar.png`} alt="bags" className="w-10 absolute top-2 right-[-3em] rounded-full"/>
      </div>
    </div>
    </>
  )
}

export default header