import Sidebar from "../components/Home/Sidebar.jsx";
import styles from "./Home.module.css";
import { Outlet } from "react-router-dom";
function Home(){
  return(
    <main className={styles.mainCont}>
      <Sidebar />
      <Outlet />
    </main>
  )
}

export default Home;