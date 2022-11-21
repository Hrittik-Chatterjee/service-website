import React from 'react';
import { Link } from 'react-router-dom';

const AddCardServices = ({ service }) => {
    const { img, price, title, description, _id } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price} $</p>
                <p>{description.substring(0, 100) + "..."}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    <Link to={'/'}><button className='btn btn-success'>Add Service</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AddCardServices;