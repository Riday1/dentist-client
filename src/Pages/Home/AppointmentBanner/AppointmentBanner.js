import React from 'react';
import './AppointmentBanner.css';


import doctor from '../../../assets/images/doctor-small.png'
const AppointmentBanner = () => {
    return (
        <div className="hero  my-20 px-5 banner-background1 py-20">
            <div className="hero-content flex-col justify-between lg:flex-row-reverse ">
                <div className="w-full lg:w-1/2  lg:text-left px-4 text-justify">
                    <p className='text-bold text-primary'>Appointment</p>
                    <h1 className="text-5xl font-bold my-4 text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">
                        Scheduling an appointment at our dental clinic is easy and convenient. Our friendly staff is always ready to assist you in finding a time that fits your schedule. We prioritize punctuality and efficiency, ensuring minimal wait times while maintaining our commitment to providing exceptional dental care for every patient.
                    </p>
                    <button className='btn border-none text-white  bg-gradient-to-r from-primary to-secondary px-6'>Get Started</button>
                </div>
                <img src={doctor} className='absolute hidden lg:block lg:w-1/2  h-[636px] left-0 bottom-0' alt="" />
            </div>
        </div>
    );
};

export default AppointmentBanner;