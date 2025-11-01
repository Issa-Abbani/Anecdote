import Sidebar from "../components/Home/Sidebar.jsx";
import { Outlet } from "react-router-dom";
function Home(){
  return(
    <main>
      <Sidebar />
      <aside>
        <Outlet />
      </aside>
    </main>
  )
}

export default Home;