import React from 'react';
import image from '../../../assets/images/chair.png';
import './Banner.css';


const Banner = () => {
    return (
        <div className="hero  min-h-screen banner-background px-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 text-center lg:text-left ">
                    <h1 className="text-5xl font-bold my-4">Your New Smile <br /> Starts Here</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className='btn border-none text-white  bg-gradient-to-r from-primary to-secondary px-6'>Get Started</button>
                </div>
                <div className="w-full lg:w-1/2 shrink-0 shadow-2xl ">
                    <img src={image} className='w-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;