import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewMap from './ReviewMap';

const MyReviews = () => {
    const { user } = useContext(AuthContext)


    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`https://service-server-rnwu6n1kt-hrittik-chatterjee.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    return (
        <div>
            {
                reviews.length !== 0 ? <div>
                    {
                        reviews.map(reviewList => <ReviewMap key={reviewList._id} reviewList={reviewList}></ReviewMap>)
                    }
                </div>
                    : <div><h2 className='my-36 text-center text-4xl font-bold'>No Reviews Added</h2></div>
            }
        </div>
    );
};

export default MyReviews;