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
        <div>
            <h2>Course List{category.length}</h2>
            <div>
{
    category.map(course=><p key={course.id}>
        <Link to={`/category/${course.id}`}>{course.name}</Link> 
    </p>)
}
            </div>
        </div>
    );
};

export default AsideNav;