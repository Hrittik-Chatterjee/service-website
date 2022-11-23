import React from 'react';


const ReviewMap = ({ reviewList }) => {
    const {review,photo,patient,serviceName} =reviewList
 
    return (
        <div className="overflow-x-auto w-full">
        <div className="flex items-center space-x-3">
            <div className="avatar">
                <div className="mask mask-squircle w-12 h-12 my-2">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            <div>
                <div className="font-bold">{patient}</div>
            </div>
        </div>
        <p className='mb-4 text-xs font-bold text-emerald-600'>Service: <small className='mb-4 font-normal text-xs text-orange-900'>{serviceName}</small></p>
        <p>{review}</p>
        <br />
        <button className='btn btn-accent px-4 py-0 my-3 btn-xs '>Edit</button>
        <button className='btn btn-error btn-xs px-4 py-0 my-3 '> Delete </button> 
    </div>
    );
};

export default ReviewMap;