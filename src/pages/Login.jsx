import Logo from "../components/Login/Logo.jsx";
import styles from '../styles/Login.module.css';
import SignIn from "../components/Login/SignIn.jsx";
import SignUp from "../components/Login/SignUp.jsx";
import { useState } from "react";
function Login(){

const [isUser, setIsUser] = useState(true) ;
// const [forgot, isForgot] = useState(false);



return (
  <main>
    <Logo />
    <aside className={styles.form}>
      <div className={styles.signNav}>
        <button className={styles.signBtn} onClick={() => setIsUser(true)}>Sign In</button>
        <button className={styles.signBtn} onClick={() => setIsUser(false)}>Sign Up</button>
      </div>
      {isUser ? (
        <SignIn />
      ) : (
        <SignUp />
      )}
    </aside>
  </main>
)
}

export default Login;