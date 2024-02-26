import React from 'react';
import hero from '../images/about_image/sewing.jpg';
import Hero from '../components/shareComponent/Hero';
import Signatura from '../components/shareComponent/Signatura';

const About = () => {
    return (
        <div>
            <Hero hero={hero} headline={'Embrace Every Thread Embody Every Style'} sologan={'ABOUT TEXTILIA'} />
            <Signatura />
        </div>
    );
};

export default About;