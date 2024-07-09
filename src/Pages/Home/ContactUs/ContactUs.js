import React from 'react';
import image from '../../../assets/images/appointment.png';
import './ContactUs.css';



const ContactUs = () => {

    const handleSubmit = (event) => {
        event.preventDefault();


    }
    return (
        <div className="hero banner-background2 my-20">
            <div className="hero-content flex-col py-10">
                <div className="text-center">
                    <p className="py-4 text-primary font-bold">Contact Us </p>
                    <h1 className="text-5xl mb-6 font-semibold text-white">Stay Connect With Us</h1>
                </div>
                <div className="w-full">
                    <form onSubmit={handleSubmit} className="">
                        <div className="form-control mb-4">
                            <input type="email" placeholder="email address" className="input input-bordered py-6 text-lg " required />
                        </div>
                        <div className="form-control mb-4">
                            <input type="password" placeholder="subject" className="input input-bordered py-6 text-lg " required />
                        </div>

                        <div className='form-control mb-4'>
                            <textarea className="textarea textarea-bordered w-full h-36 text-lg py-6" placeholder="your message"></textarea>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="btn border-none text-white text-lg bg-gradient-to-r from-primary to-secondary px-6">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;