import styles from './form.module.css';

function SignUp(){
  return (
    <section>
      <div className={styles.intro}>
        <h2>Welcome!</h2>
        <p>Please create an account:</p>
      </div>
      <form>
        <input className={styles.inputUser} placeholder='Username' type='text' size={40} maxLength={240} required />
        <input className={styles.inputEmail} placeholder='Email' type='email' size={40} maxLength={240} required />
        <input className={styles.inputPass} placeholder='Password' type='password' size={40} maxLength={240} required />
        <button className={styles.signBtn} type='button'>Sign Up</button>
      </form>
    </section>
  )
}

export default SignUp;