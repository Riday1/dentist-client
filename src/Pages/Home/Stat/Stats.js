import React from 'react';
import clockLogo from '../../../assets/icons/clock.svg'
import markerLogo from '../../../assets/icons/marker.svg'
import phoneLogo from '../../../assets/icons/phone.svg'
const Stats = () => {
    return (
        <div className=" grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 my-20 ">
            <div className='shadow-md flex items-center justify-between p-9 bg-gradient-to-r from-primary to-secondary rounded-lg '>
                <img src={clockLogo} alt="" />
                <div className='ml-4'>
                    <h1 className='text-lg mb-4 font-semibold text-white'>Opening Hours</h1>
                    <p className='text-sm text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className='shadow-md flex items-center justify-between p-9 bg-accent rounded-lg '>
                <img src={markerLogo} alt="" />
                <div className='ml-4'>
                    <h1 className='text-lg mb-4 font-semibold text-white'>Opening Hours</h1>
                    <p className='text-sm text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className='shadow-md flex items-center justify-between p-9 bg-gradient-to-r from-primary to-secondary rounded-lg '>
                <img src={phoneLogo} alt="" />
                <div className='ml-4'>
                    <h1 className='text-lg mb-4 font-semibold text-white'>Opening Hours</h1>
                    <p className='text-sm text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;