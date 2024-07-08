import React from 'react';
import image from '../../../assets/images/appointment.png';
import './ContactUs.css';



const ContactUs = () => {
    return (
        <div className="hero banner-background2">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <p className="py-6 text-primary font-bold">Contact Us </p>
                    <h1 className="text-5xl mb-6 font-semibold text-white">Stay Connect With Us</h1>
                </div>
                <div className="w-full">
                    <form className="">
                        <div className="form-control mb-4">
                            <input type="email" placeholder="email address" className="input input-bordered py-5 text-lg" required />
                        </div>
                        <div className="form-control mb-4">
                            <input type="password" placeholder="subject" className="input input-bordered py-5 text-lg" required />
                        </div>

                        <div className='form-control mb-4'>
                            <textarea className="textarea textarea-bordered w-full h-36 text-lg" placeholder="your message"></textarea>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="btn btn-primary w-24 inline-block text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;