import React from 'react'
import styles from "./home.module.css"
import image1 from "../Images/assignment_img.png"
const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.box1}>
            <img src={image1}/>
        </div>
        <div className={styles.box2}>
            <div>
                <div className={styles.box2_header}>
                    <p style={{color:"#ffba33"}}>Already Member</p>
                    <p style={{color:"#d9dcde"}}>Need help</p>
                    
                </div>
                <div style={{marginTop:"1rem"}}>
                    <form>
                    <input className={styles.inputBox} type='text' />
                    <input className={styles.inputBox} type='password'/>
                     <div>
                        <button className={styles.btn}>Signin</button>
                     </div>
                </form>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home