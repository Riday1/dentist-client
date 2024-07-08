import React from 'react';
import Banner from '../Banner/Banner';
import Stats from '../Stat/Stats';
import Services from '../Services/Services';
import Banner2 from '../Banner2/Banner2';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Stats></Stats>
            <Services></Services>
            <Banner2></Banner2>
            <AppointmentBanner></AppointmentBanner>

        </div>
    );
};

export default Home;