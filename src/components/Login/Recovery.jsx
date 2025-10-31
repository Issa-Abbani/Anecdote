import styles from './form.module.css';

function Recovery(props){
  return (
    <section>
      <div className={styles.intro}>
        <h2>Recover Your Password!</h2>
        <p>Please enter your account's email:</p>
      </div>
      <form>
        <input className={styles.inputEmail} placeholder='Email' type='email' size={40} maxLength={240} required />
        <button className={styles.signBtn} type='button'>Submit</button>
        <button className={styles.forgotP}   onClick={(e) => {e.preventDefault();props.onForget();}} type='button'>Back To Sign In</button>
      </form>
    </section>
  )
}

export default Recovery;