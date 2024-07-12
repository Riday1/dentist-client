import React, { useState } from 'react';
import chairImage from '../../../assets/images/chair.png';
import bgImage from '../../../assets/images/bg.png'
import { DayPicker } from "react-day-picker";
import { format } from 'date-fns';
const AppointmentPageBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <section style={{ backgroundImage: `url(${bgImage})` }} className="hero py-20 px-5" >
            <div className="hero-content flex-col-reverse lg:flex-row">
                <div className="w-full lg:w-1/2 flex justify-center items-center flex-col lg:text-left ">
                    <DayPicker mode='single' selected={selectedDate} onSelect={setSelectedDate} />
                </div>
                <div className="w-full lg:w-1/2 shrink-0 shadow-2xl ">
                    <img src={chairImage} className='w-full' alt="" />
                </div>
            </div>
        </section>
    );
};

export default AppointmentPageBanner;