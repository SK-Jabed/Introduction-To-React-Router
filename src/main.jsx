import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        patch: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        patch: "/user/:userId",
        element: <UserDetails></UserDetails>
      }
    ]
  }  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
