import React from 'react';
import Banner from '../Banner/Banner';
import Stats from '../Stat/Stats';
import Services from '../Services/Services';
import Banner2 from '../Banner2/Banner2';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import TestimonialSection from '../TestimonialSection/TestimonialSection';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Stats></Stats>
            <Services></Services>
            <Banner2></Banner2>
            <AppointmentBanner></AppointmentBanner>
            <TestimonialSection></TestimonialSection>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;