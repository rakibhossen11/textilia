import React from 'react';
import Hero from '../components/shareComponent/Hero';
import location from '../images/contact/location.png';
import Headline from '../components/HomeComponents/Headline';
import Sologan from '../components/HomeComponents/Sologan';
import PTag from '../shared/footerComponents/PTag';

const Contact = () => {
    return (
        <section>
            <Hero headline={"GET CLOSER WITH US"} sologan={"From Click to Call Your Direct Line to Us"} hero={location} />
            <div className='flex flex-col items-center'>
                <Headline text={"GET IN TOUCH"} />
                <Sologan text={"Don't Hesitate to Contact Us"} />
                <PTag text={"Lorem ipsum dolor sit amet, consecte adipiscing elit seddo eiusmod tempor dolore magna aliqua inventore veritatis et quasi."} />
            </div>
        </section>
    );
};

export default Contact;