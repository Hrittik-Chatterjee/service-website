import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardService from './CardService';

const LimitedServices = () => {
    const [services,settServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/limited')
        .then(res =>res.json())
        .then(data => settServices(data))
    })
    return (
        <div>
            <p className="text-5xl font-bolder text-center my-6">My Services</p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
                {
                    services.map(service => <CardService key={service._id} service={service}></CardService>)
                }
            </div>
            <Link to={'/services'}><button className='btn my-8 mx-auto flex'>Show More Services</button></Link>
        </div>
    );
};

export default LimitedServices;





