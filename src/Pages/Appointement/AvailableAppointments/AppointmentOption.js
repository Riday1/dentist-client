import React from 'react';

const AppointmentOption = ({ appointmentOption, handleModal }) => {
    const { _id, name, slots } = appointmentOption;


    return (
        <div className="card  text-neutral-content w-96 shadow-md">
            <div className="card-body items-center text-center text-secondary">
                <h2 className="card-title">{name}</h2>
                <p>Available Slot : {slots.length > 0 ? slots[0] : 'Try on another day'}</p>
                <p className='text-black'>{slots.length > 0 ? slots.length + ' spaces available' : 'No Space Available For Today'}</p>
                <div className="card-actions justify-end">

                    <label onClick={() => handleModal(appointmentOption)} disabled={slots.length === 0} htmlFor='booking-modal' className='btn'>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;