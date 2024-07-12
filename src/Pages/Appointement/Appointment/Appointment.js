import React, { useState } from 'react';
import AppointmentPageBanner from '../AppointmentPageBanner/AppointmentPageBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentPageBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentPageBanner>
            <AvailableAppointments selectedDate={selectedDate}></AvailableAppointments>
        </div>
    );
};

export default Appointment;