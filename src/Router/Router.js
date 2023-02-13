import { createBrowserRouter } from "react-router-dom";
import Home from "../Componets/Home";
import Login from "../Componets/Login";
import Services from "../Componets/Services";
import SignIn from "../Componets/SignIn";
import Main from "../layout/Main";

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
                element: <Services> </Services>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element:<SignIn></SignIn>
            },
        ]
    }
])
export default router;