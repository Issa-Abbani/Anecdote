import Logo from "../components/Login/Logo.jsx";
import styles from '../components/Login/Login.module.css';
import SignIn from "../components/Login/SignIn.jsx";
import SignUp from "../components/Login/SignUp.jsx";
import Recovery from "../components/Login/Recovery.jsx";
import { useState } from "react";
function Login(){

const [isUser, setIsUser] = useState(true) ;
const [forgot, setForgot] = useState(false);

const forgetPassword = ()=>{
  setForgot((prev) => !prev);
}

return (
  <main className={styles.loginCompCont}>
    <Logo />
    {forgot ? (
      <aside className={styles.form}>
        <Recovery onForget = {forgetPassword} />
      </aside>
    ):(
    <aside className={styles.form}>
      <div className={styles.signNav}>
        <button className={`${styles.signBtn} ${(isUser) ? styles.active : ""}`} onClick={() => setIsUser(true)}>Sign In</button>
        <button className={`${styles.signBtn} ${(!isUser) ? styles.active : ""}`} onClick={() => setIsUser(false)}>Sign Up</button>
      </div>
      {isUser ? (
        <SignIn onForget = {forgetPassword} />
      ) : (
        <SignUp />
      )}
    </aside>
    )}
  </main>
)
}

export default Login;