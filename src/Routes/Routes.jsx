import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Footer from "../components/Footer";
import Home from "../Pages/Home/Home";
import Login from "../components/Login";
import Signup from "../components/SignUp";
import Man from "../components/Man";
import Woman from "../components/Woman";
import Other from "../components/Other";
import CardDetails from "../components/CardDetails";
// import CardDetails from "../components/CardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/man',
        element: <Man></Man>
      },
      {
        path: '/woman',
        element: <Woman></Woman>
      },
      {
        path: '/other',
        element: <Other></Other>
      },
      {
        path: '/details/:id',
        element: <CardDetails />,
        loader: (params)=>fetch(`https://mostafiz1257.github.io/mockjson/fakeData.json/${params.id}`)
    }
    ,
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },


      {

        path: '/footer',
        element: <Footer></Footer>
      }
    ]
  },
]);