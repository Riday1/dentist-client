import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <div className='f-background'>
            <footer className="footer  text-gray-900  p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            <div>
                <p className='text-gray-500 text-center py-6'>Copyright © ${new Date().getFullYear()} - All right reserved Riday Hossain</p>
            </div>
        </div>
    );
};

export default Footer;