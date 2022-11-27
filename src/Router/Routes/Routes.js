import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Checkout from "../../Pages/ServiceDetails/Checkout";
import AddService from "../../Pages/Services/AddService";
import AddServiceConfirm from "../../Pages/Services/AddServiceConfirm";
import ConfirmServiceShow from "../../Pages/Services/ConfirmServiceShow";
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
        },
        {
          path:'/addservices',
          element:<AddService></AddService>
        },
        {
          path:'/myreviews',
          element:<MyReviews></MyReviews>
        },
        {
          path:'/addserviceconfirm/:id',
          element:<AddServiceConfirm></AddServiceConfirm>,
          loader:({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'orders',
          element:<ConfirmServiceShow></ConfirmServiceShow>
        }
        
      ]
    }
  ])

  export default router