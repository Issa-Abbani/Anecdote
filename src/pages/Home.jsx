import Sidebar from "../components/Home/Sidebar.jsx";
import styles from "./Home.module.css";
import Courses from "./Courses.jsx";

function Home(){
  return(
    <main className={styles.mainCont}>
      <Sidebar />
      <Courses />
    </main>
  )
}

export default Home;