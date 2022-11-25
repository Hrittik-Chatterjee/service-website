import React, { useEffect, useState } from 'react';
import AllReviewsMap from './AllReviewsMap';

const AllReviews = () => {
    const [allRevews, settAllReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?_id=${allRevews.service}`)
            .then(res => res.json())
            .then(data => settAllReviews(data))
    }, [allRevews.service])
    return (
       
        <div>
           {
                    allRevews.map(reviewList => <AllReviewsMap key={reviewList._id} reviewList={reviewList}></AllReviewsMap>)
                } 
        </div>
    );
};

export default AllReviews;