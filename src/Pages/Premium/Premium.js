import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const premium =useLoaderData()
    return (
        <div>
            <h2>this is premium {premium.name}</h2>
        </div>
    );
};

export default Premium;