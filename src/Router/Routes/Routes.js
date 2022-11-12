import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Checkout from "../../Pages/ServiceDetails/Checkout";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
        path: '/login',
        element:<Login></Login>
        },
        {
        path: '/signup',
        element:<SignUp></SignUp>
        },
        
        {
        path: '/services',
        element:<Services></Services>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
          },
        {
          path:'/services/:id',
          element:<Checkout></Checkout>,
          loader:({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/checkout',
          element:<Checkout></Checkout>,
        }
      ]
    }
  ])

  export default router