import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewMap from './ReviewMap';

const MyReviews = () => {
    const { user } = useContext(AuthContext)


    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    return (
            <div>
                {
                    reviews.map(reviewList => <ReviewMap key={reviewList._id} reviewList={reviewList}></ReviewMap>)
                }
            </div>
    );
};

export default MyReviews;