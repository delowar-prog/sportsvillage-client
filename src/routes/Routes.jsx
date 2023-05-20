
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoutes from "./PrivateRoutes";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Blgos from "../pages/Blogs/Blgos";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage />,
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
          path:'details/:id',
          element:<PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path:'/mytoys',
          element:<MyToys></MyToys>,
        },
        {
          path:'updateToy/:id',
          element:<UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path:'/blogs',
          element:<Blgos></Blgos>
        }
      ]
    },
  ]);
export default router