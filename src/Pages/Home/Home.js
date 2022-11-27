import React from 'react';
import About from '../About/About';
import ConfirmServiceShow from '../Services/ConfirmServiceShow';
import LimitedServices from '../Services/LimitedServices';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <LimitedServices></LimitedServices>
            <ConfirmServiceShow></ConfirmServiceShow>
        </div>
    );
};

export default Home;