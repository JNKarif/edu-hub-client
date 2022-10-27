import React from 'react';

const CourseDetailsCard = ({course}) => {
    console.log(course)
    return (
        <div>
         <h2>{course.header}</h2>   
        </div>
    );
};

export default CourseDetailsCard;