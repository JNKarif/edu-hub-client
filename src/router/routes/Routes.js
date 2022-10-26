import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AllCourses from "../../Pages/AllCourse/AllCourses/AllCourses";
import Category from "../../Pages/Category/category/Category";
import Courses from "../../Pages/Courses/Course/Courses";
import Home from "../../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
        element:<Home></Home>, 
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
        element:<Courses></Courses>, 
            },
        ]
    }
])