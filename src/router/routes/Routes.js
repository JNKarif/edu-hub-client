import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AllCourses from "../../Pages/AllCourse/AllCourses/AllCourses";
import Blog from "../../Pages/Blog/Blog/Blog";
import Category from "../../Pages/Category/category/Category";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Course/Courses";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Premium from "../../Pages/Premium/Premium";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
        element:<Home></Home>,
       loader:()=>fetch('http://localhost:5000/courses')
            },
            {
                path:'/allcourses',
        element:<AllCourses></AllCourses>, 
            },
            {
                path:'/category/:id',
        element:<Category></Category>, 
            },
            {
                path:'/courses/:id',
        element:<CourseDetails></CourseDetails>,
        loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
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
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/courses/:id',
                element:<Premium></Premium>,
                loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path:'*',
                element:<PageNotFound></PageNotFound>
            }
        ]
    }
])