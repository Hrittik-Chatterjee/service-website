import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllReviews from '../AllReviews/AllReviews';

const Checkout = () => {
    const { title, img, description, side_effects, _id } = useLoaderData()
    const { user } = useContext(AuthContext)


    const handlePlaceReview = event => {
        event.preventDefault()
        const form = event.target
        const name = user?.displayName
        const photo = user?.photoURL
        const review = form.review.value
        const email = user?.email


        const reviewList = {
            service: _id,
            serviceName: title,
            patient: name,
            email: email,
            photo: photo,
            review: review

        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged)
                    alert('Review added')
                form.reset()
            })
            .catch(er => console.log(er))
    }

    return (
        <div>
            <div>
                <p className='text-center text-6xl font-extrabold text-cyan-700'>{title}</p>

                <img className='mx-auto w-3/4 h-96 my-12' src={img} alt="" />
                <div className='mx-auto my-10'>
                    <h1 className='text-3xl'> <span className='font-bold text-lime-700'>About</span> {title} :</h1>
                    <p>{description}</p>
                    <h1 className='text-3xl mt-2'><span className='font-bold text-red-900'>Side effects of</span> {title} :</h1>
                    <p>{side_effects}</p>
                </div>

            </div>
            <div><h1 className=' text-3xl text-yellow-700 font-bold font-sans'>Reviews:</h1></div>
            <AllReviews></AllReviews>
            {
                user && user?.uid ?
                    <div>
                        <form onSubmit={handlePlaceReview}>
                            <div className="overflow-x-auto w-full">
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12 my-4">
                                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user?.displayName}</div>
                                    </div>
                                </div>
                                <input type="text" placeholder="Your Review Here" name='review' className="input input-bordered input-info w-full max-w-xs" required />
                                <br />
                                <button className='btn btn-primary px-4 py-0 my-3 '> Add</button>
                            </div>
                        </form>
                    </div>
                    :
                    <div> <p className=' text-blue-700 text-center text-3xl my-4'>Please Log in to add a Review</p></div>
            }
        </div>
    );
};

export default Checkout;
