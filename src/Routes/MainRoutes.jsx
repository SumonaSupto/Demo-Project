import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import NotFound from "../pages/static/NotFound";
import AllProducts from "../pages/products/AllProducts";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";



const MainRoutes = createBrowserRouter([
{
      path :"/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element:<Homepage></Homepage>

        },
        {
          path:"/products/all",
          element:<AllProducts></AllProducts>
        }
      ]
},
{
  path:"*",
  element:<NotFound></NotFound>
},
{
  path:"/signup",
  element:<SignUp></SignUp>
},
{
  path:"/login",
  element:<Login></Login>
}

])

export default MainRoutes