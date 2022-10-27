import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaFileDownload } from "react-icons/fa"

const CourseDetails = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>

            {/* here we showed the details description of the courses */}

            <div class="card mb-3 mt-4" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={courses?.img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">

                            <div className='d-flex justify-content-between'>
                                <h5 class="card-title">{courses?.name}</h5>
                                <FaFileDownload className='fs-4'></FaFileDownload>
                            </div>


                            <p class="card-text"> {courses?.body}</p>
                            <p class="card-text"> <Link to={`/premium/${courses._id}`}>
                                <Button variant="primary">Get Premium Access</Button></Link></p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default CourseDetails;