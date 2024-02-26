import React from 'react';
import hero from '../images/about/sewing.jpg';
import Hero from '../components/shareComponent/Hero';
import Signatura from '../components/shareComponent/Signatura';
import OurJourney from '../components/shareComponent/OurJourny';

const About = () => {
    return (
        <div>
            <Hero hero={hero} headline={'Embrace Every Thread Embody Every Style'} sologan={'ABOUT TEXTILIA'} />
            <Signatura />
            <OurJourney />
        </div>
    );
};

export default About;