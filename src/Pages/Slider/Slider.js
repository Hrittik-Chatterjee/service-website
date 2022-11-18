import React from 'react';


const Slider = () => {
    return (
        <div className="carousel w-full h-96 pb-12 mt-12">
            <div id="slide1" className="carousel-item relative w-full">
               
                    <img className='w-full rounded-2xl' alt='image1' src="https://i.ibb.co/yP8Dq67/slider1.jpg" />
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 pl-28 text-white text-2xl right-5 top-1/2">
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt='image2' src="https://i.ibb.co/HPDprdG/slider2.jpg" className='w-full rounded-2xl' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='image3' src="https://i.ibb.co/XjKV8Qx/slider3.jpg" className='w-full rounded-2xl' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img alt='image4' src="https://i.ibb.co/KmXrFR6/slider4.jpg" className='w-full rounded-2xl' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img alt='image5' src="https://i.ibb.co/7k7xWKJ/slider5.jpg" className='w-full rounded-2xl' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img alt='image6' src="https://i.ibb.co/rmh8z6t/slider6.jpg" className='w-full rounded-2xl' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;