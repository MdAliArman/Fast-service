import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Componets/AddProduct";
import Blog from "../Componets/Blog";
import Home from "../Componets/Home";
import Login from "../Componets/Login";
import MyReviews from "../Componets/MyReviews";
import Review from "../Componets/Review";
import Services from "../Componets/Services";
import SignIn from "../Componets/SignIn";
import Main from "../layout/Main";
import PrivateRouter from "./PrivateRouter";

const router=createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/service",
                element: <PrivateRouter><Services></Services></PrivateRouter>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element:<SignIn></SignIn>
            },
            {
                path: '/review/:id',
                element: <Review></Review>,
                loader:({params})=>fetch(`http://localhost:5000/allservice/${params.id}`)
            },
            {
                path: '/myreview',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservice',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])
export default router;