import styles from '../../styles/form.module.css';

function SignIn(props){
return (
  <section>
    <div className={styles.intro}>
      <h2>Welcome Back!</h2>
      <p>Please sign in to your account:</p>
    </div>
    <form>
      <input className={styles.inputEmail} placeholder='Email' type='email' size={40} maxLength={240} required />
      <input className={styles.inputPass} placeholder='Password' type='password' size={40} maxLength={240} required />
      <button className={styles.signBtn} type='button'>Sign In</button>
      <button className={styles.forgotP}   onClick={(e) => {e.preventDefault();props.onForget();}} type='button'>Forgot Password</button>
    </form>
  </section>
)
}

export default SignIn