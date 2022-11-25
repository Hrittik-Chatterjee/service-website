import React from 'react';

const AllReviewsMap = ({ reviewList }) => {
    const { review, photo, patient, serviceName } = reviewList
    return (
        <div className="overflow-x-auto  border border-zinc-400 rounded mb-3 w-80 bg-orange-200">
            <div className='p-3 '>
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
            </div>
        </div>
    );
};

export default AllReviewsMap;