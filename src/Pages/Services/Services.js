import React, { useEffect, useState } from 'react';
import CardService from './CardService';


const Services = () => {
    const [services,settServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => settServices(data))
    })
    return (
        <div>
            <p className="text-5xl font-bolder text-center my-6">Services</p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
                {
                    services.map(service => <CardService key={service._id} service={service}></CardService>)
                }
            </div>
        </div>
    );
};

export default Services;