import React from 'react';
import service from '../images/service/service.jpg';
import Hero from '../components/shareComponent/Hero';
import Testimonial from '../components/shareComponent/Testimonial';
import OurProcess from '../components/shareComponent/OurProcess';
import OurService from '../components/shareComponent/OurService';


const Service = () => {
    return (
        <section>
            <Hero hero={service} headline={'TEXTILIA SERVICES'} sologan={"More Than a Service, It's an Experience"} />
            <OurService />
            <Testimonial />
            <OurProcess />
        </section>
    );
};

export default Service;