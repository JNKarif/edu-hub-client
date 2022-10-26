import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../../Courses/Course/Courses';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h3>Total {courses.length}</h3>
            {
                courses.map(course => <Courses
                    key={course._id}
                    course={course}

                ></Courses>)
            }
        </div>
    );
};

export default Home;