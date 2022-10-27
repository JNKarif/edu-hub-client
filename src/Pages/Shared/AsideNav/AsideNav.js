import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AsideNav = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className='mt-4'>
            
{
    category.map(course=><p key={course.id}>
        <Link className='text-decoration-none' to={`/courses/${course.id}`}>{course.name}</Link> 
    </p>)
}
           
        </div>
    );
};

export default AsideNav;