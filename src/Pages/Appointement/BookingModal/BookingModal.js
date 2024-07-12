import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { id, name, slots } = treatment;
    const date = format(selectedDate, "PP")


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const slot = form.slot.value;


        const appointment = {
            patient_name: patientName,
            disease_name: name,
            phone,
            email,
            slot
        }
        console.log(appointment)

        setTreatment(null)



    }

    return (
        <>
            <input type='checkbox' id='booking-modal' className='modal-toggle'></input>
            <div className='modal'>
                <div className='modal-box relative'>
                    <label htmlFor='booking-modal' className='btn btn-sm btn-circle absolute right-2 btn-accent top-2'>X</label>
                    <h3 className='text-lg font-bold'>{name}</h3>
                    <p className='py-4'>hello</p>
                    <form onSubmit={handleSubmit} className='my-3'>
                        <input type="text" value={date} readOnly className="input input-bordered w-full mb-4" />
                        <select name='slot' className="select select-bordered w-full mb-2">
                            <option disabled selected>Select Appointment Time</option>
                            {
                                slots?.map((slot, idx) => <option key={idx}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="full name" className="input input-bordered w-full mb-4" />
                        <input name='email' type="email" placeholder="email" className="input input-bordered w-full mb-4" />
                        <input name='phone' type="text" placeholder="phone" className="input input-bordered w-full mb-4" />
                        <div>
                            <input type="submit" value="Book Appointment" className='btn btn-accent w-full text-white' />
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default BookingModal;