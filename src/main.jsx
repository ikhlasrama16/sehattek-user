import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/Home.jsx';
import LoginPage from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/aboutus",
    element: <div>about us</div>
  },
  {
    path: "/perusahaan",
    element: <div>perusahaan</div>
  },
  {
    path: "/artikel",
    element: <div>artikel</div>
  },
  {
    path: "/mitra",
    element: <div>mitra</div>
  },
  {
    path: "/login",
    element: <LoginPage />
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
