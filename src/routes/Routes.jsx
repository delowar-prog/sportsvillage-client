
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoutes from "./PrivateRoutes";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addtoy',
          element:<PrivateRoutes><AddToy></AddToy></PrivateRoutes>
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'/mytoys',
          element:<MyToys></MyToys>,
        }
      ]
    },
  ]);
export default router