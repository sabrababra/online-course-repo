import AllCourse from "../components/AllCourse/AllCourse";
import NotFound from "../components/NotFound/NotFound";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import CheckOut from "../pages/CheckOut/CheckOut";
import Course from "../pages/Course/Course";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/course',
                element:<Course></Course>,
                children:[
                    {
                        index:true,
                        element:<AllCourse></AllCourse>
                    },
                    {
                        path:':id',
                        element:<SingleCourse></SingleCourse>
                        
                    }
                ]
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
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
                path:'/checkout/:id',
                element:<PrivateRoute>
                    <CheckOut></CheckOut>
                </PrivateRoute>
            },
            
            
        ]
    } ,
    {path:'*',element:<NotFound></NotFound>}   
])