import './App.css'
import { Outlet } from "react-router-dom";
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
