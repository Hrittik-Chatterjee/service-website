import React from 'react';

const CardService = ({service}) => {
    const {img,price,title,description} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price} $</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Service</button>
                </div>
            </div>
        </div>
    );
};

export default CardService;