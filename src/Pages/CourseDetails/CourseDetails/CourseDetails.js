import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from '../../CourseDetailsCard/CourseDetailsCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFileDownload } from "react-icons/fa"

const CourseDetails = () => {
    const courses =useLoaderData()
    console.log(courses)
    return (
        <div>
           

            <Card  className='mt-3' >
      <Card.Img variant="top" style={{ width: '18rem' }} src={courses.img} />
      <Card.Body>
        <div className='d-flex justify-content-between '>
        <Card.Title>{courses.name}</Card.Title>
        <FaFileDownload className='fs-4'></FaFileDownload>
        </div>
       
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