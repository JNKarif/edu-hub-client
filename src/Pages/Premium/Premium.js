import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const premium =useLoaderData()
    return (
        <div>
            <Card className='bg-dark text-light mt-4' >
      <Card.Header className='fs-2'>{premium.name}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
           {premium.header}
          </p>
          <footer className="">
          <Button variant="outline-light" ><p>Buy this course only at <span> $</span>{premium.price}</p></Button>
           
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
            
        </div>
    );
};

export default Premium;