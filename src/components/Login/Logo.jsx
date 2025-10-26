import Background from '../../assets/Bg.png';
import circles from '../../assets/Group 2.png'
import styles from '../../styles/Login.module.css';

function Logo(){
  return(
    <section className={styles.logoSec}>
        <img src={Background} alt='Error' className={styles.login_bg}></img>
        <img src={circles} alt='error' className={styles.circles}></img>
      <h1>Logo</h1>
    </section>
  )
}

export default Logo;