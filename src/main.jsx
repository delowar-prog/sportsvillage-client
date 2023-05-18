import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './routes/routes.jsx';
import AuthProviders from './providers/AuthProviders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css'; 
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProviders>
    </React.StrictMode>
  </div>
)
