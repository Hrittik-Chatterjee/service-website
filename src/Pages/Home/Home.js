import React from 'react';
import About from '../About/About';
import LimitedServices from '../Services/LimitedServices';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <LimitedServices></LimitedServices>
        </div>
    );
};

export default Home;