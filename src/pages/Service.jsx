import React from 'react';
import service from '../images/service/service.jpeg';
import Hero from '../components/shareComponent/Hero';
import Testimonial from '../components/shareComponent/Testimonial';


const Service = () => {
    return (
        <section>
            <Hero hero={service} headline={'TEXTILIA SERVICES'} sologan={"More Than a Service, It's an Experience"} />
            <Testimonial />
        </section>
    );
};

export default Service;