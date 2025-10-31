import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import App from './App.jsx'
import Courses from './pages/Courses.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { 
        element: <Home />, 
        children:[
        {path: "/courses", element: <Courses />},
      ] }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
