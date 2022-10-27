import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from '../../CourseDetailsCard/CourseDetailsCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const courses =useLoaderData()
    console.log(courses)
    return (
        <div>
           

            <Card style={{height:350}} >
      <Card.Img variant="top" className='h-50 w-100' src={courses.img} />
      <Card.Body>
        <Card.Title>{courses.name}</Card.Title>
        <Card.Text>
         {courses.body}
        </Card.Text>
        <Button variant="primary">Get Premium Access</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CourseDetails;