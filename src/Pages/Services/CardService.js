import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';


 const CardService = ({ service }) => {
    const { img, price, title, description, _id } = service


   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <figure><PhotoView src={img}><img src={img} alt="Shoes" /></PhotoView></figure>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price} $</p>
                <p>{description.substring(0, 100) + "..."}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CardService;