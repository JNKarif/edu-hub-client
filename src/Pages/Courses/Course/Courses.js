import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';


const Courses = ({ course }) => {
useTitle('Courses')
  return (
    <div>

      <Card className="bg-dark text-danger fw-bold  mb-3">
        <Card.Img style={{ height: 420 }} src={course?.img} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className='fs-1 text-white fw-bold'>{course?.name}</Card.Title>
          <Card.Text className='fs-5'>
            {course?.header}
          </Card.Text>
          <Link to={`/courses/${course._id}`}>         
           <Button variant="outline-light" >Details</Button></Link>

        </Card.ImgOverlay>
      </Card>

    </div>
  );
};

export default Courses;