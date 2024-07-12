import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([])

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    const [treatment, setTreatment] = useState(null)
    const handleModal = (data) => {
        setTreatment(data) // appointment data 
    }

    return (
        <section className='my-20'>
            <p className='text-lg font-semibold text-secondary text-center'>Available Services on {format(selectedDate, "PP")}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-10 mt-10'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption appointmentOption={appointmentOption} key={appointmentOption._id} handleModal={handleModal}></AppointmentOption>)
                }
            </div>

            {/* modal code  */}
            {
                treatment && <BookingModal selectedDate={selectedDate} treatment={treatment} setTreatment={setTreatment}></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;