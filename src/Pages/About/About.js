import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2 pl-40'>
                    <img alt='' src="https://i.ibb.co/FxmP1bC/doctormain.jpg" className="max-w-sm rounded-lg shadow-2xl " />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">About Dr Alexa Maria</h1>
                    <p className="py-6">Prof. Dr. Alexa Maria is a Dental Doctor in New York. Her qualification is BDS, DCD (USA), FADI (USA). He is a Professor & Head in the Department of Dental at New York Medical University Hospital. She regularly provides treatment to her patients at Green Life Hospital, New York. Please contact us for visiting hours</p>
                    
                </div>
            </div>
        </div>
    );
};

export default About;