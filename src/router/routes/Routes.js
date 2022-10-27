import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AllCourses from "../../Pages/AllCourse/AllCourses/AllCourses";
import Category from "../../Pages/Category/category/Category";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
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
        ]
    }
])