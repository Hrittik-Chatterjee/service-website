import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { title, img, description, side_effects } = useLoaderData()

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
            <div>
                <form action="">
                    <h1 className='text-red-700 font-semibold text-xl mb-4 mt-12'>Add Your Review Bellow</h1>
                    <input className='bg-gray-500 rounded h-14' type="text" name='review' />
                    <br />
                    <button className='btn btn-primary px-4 py-0 my-3 '> Add</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;