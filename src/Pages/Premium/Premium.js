import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Premium = () => {
    const premium = useLoaderData()
    useTitle('Premium')
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