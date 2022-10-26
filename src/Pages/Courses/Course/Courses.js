import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Courses = ({ course }) => {

    return (
        <div>
           
                {/* <Row>
                    
                    <Col lg="6">
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course.img} />
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
       
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
                    </Col>
                   
                    <Col lg="6">
                  
                    </Col>

                </Row> */}

<Card className="bg-dark text-white  mb-3">
      <Card.Img style={{height:400}} src={course.img} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='fs-2'>{course.name}</Card.Title>
        <Card.Text className='fs-5'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Button variant="outline-light" className='w-40'>Details</Button>
      </Card.ImgOverlay>
    </Card>
          
        </div>
    );
};

export default Courses;