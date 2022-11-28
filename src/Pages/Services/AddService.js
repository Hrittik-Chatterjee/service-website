import React, { useEffect, useState } from 'react';
import AddCardServices from './AddCardServices';

const AddService = () => {

    const [services, settServices] = useState([])
    useEffect(() => {
        fetch('https://service-server-rnwu6n1kt-hrittik-chatterjee.vercel.app/services')
            .then(res => res.json())
            .then(data => settServices(data))
    })

    return (

        <div>
            <p className="text-5xl font-bolder text-center my-6">Services</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    services.map(service => <AddCardServices key={service._id} service={service}></AddCardServices>)
                }

            </div>
        </div>
    );
};

export default AddService;