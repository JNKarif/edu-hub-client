import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const AsideNav = () => {
    const [category, setCategory] = useState([])
    
// we used vercel to load the api
    useEffect(() => {
        fetch('https://edu-hub-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className='mt-4 me-3'>


            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Title>Our Courses</Card.Title>

                    <Card.Text>
                        {
                            category.map(course => <p key={course.id}>
                                <Link className='text-decoration-none' to={`/courses/${course.id}`}>{course.name}</Link>
                            </p>)
                        }
                    </Card.Text>

                </Card.Body>
            </Card>



        </div>
    );
};

export default AsideNav;