import React from 'react';
import treatment from '../../../assets/images/treatment.png'
const Banner2 = () => {
    return (
        <div className=" my-20 py-20">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="lg:text-left w-full lg:w-1/2 text-center">
                    <img src={treatment} className='rounded-lg shadow-md w-[470px] h-[600px] mx-auto' alt="" />
                </div>
                <div className="w-full lg:w-1/2  space-y-10">
                    <h1 className='text-5xl font-bold '>Exceptional Dental Care, on Your Terms</h1>
                    <p className='text-md'>At our dental clinic, your comfort and care are our top priorities. Our compassionate team is dedicated to providing personalized, gentle treatments in a warm and welcoming environment. We take pride in ensuring every visit is a positive, stress-free experience, reflecting our commitment to your dental health and well-being</p>
                    <button className='btn border-none text-white  bg-gradient-to-r from-primary to-secondary px-6'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner2;