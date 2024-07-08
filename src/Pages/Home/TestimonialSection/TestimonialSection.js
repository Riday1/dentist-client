import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import SingleTestimonial from './SingleTestimonial';

const TestimonialSection = () => {
    const allTestimonialsData = [
        {
            id: 1,
            review_text: "Excellent care and friendly staff! Highly recommend this dental clinic for all your dental needs.",
            customer_name: 'Shishir',
            image: people1,
            address: 'Dhaka, Bangladesh'
        },
        {
            id: 2,
            review_text: "Painless procedures and professional service. The team is very caring and attentive.",
            customer_name: 'Alex Jonathon',
            image: people2,
            address: 'Dhaka, Bangladesh'
        },
        {
            id: 3,
            review_text: "Best dental experience I've ever had. Quick, efficient, and very gentle with treatments.",
            customer_name: 'Decosta Petros',
            image: people3,
            address: 'Dhaka, Bangladesh'
        },
        {
            id: 4,
            review_text: "Highly recommend! The staff is friendly, and the service is outstanding. Very satisfied!"
            ,
            customer_name: 'Riday Hossain',
            image: people1,
            address: 'Dhaka, Bangladesh'
        },
        {
            id: 5,
            review_text: "Wonderful experience! The team is professional and the environment is comfortable and welcoming."
            ,
            customer_name: 'Nataliya ',
            image: people2,
            address: 'Dhaka, Bangladesh'
        },
        {
            id: 6,
            review_text: "Top-notch care and minimal wait times. Efficient scheduling and excellent dental service!",
            customer_name: 'Anastashiya Zakar ',
            image: people3,
            address: 'Dhaka, Bangladesh'
        },
    ]
    return (
        <div className='p-14 my-20'>
            <div className='my-10 flex justify-between'>
                <div className=''>
                    <h5 className='text-xl text-primary my-4 font-bold'>Testimonial</h5>
                    <h1 className='text-4xl font-semibold my-4'>What Our Patients Says</h1>
                </div>
                <img src={quote} className='w-[192px] h-[156px]' alt="" />

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 my-10 px-8'>
                {
                    allTestimonialsData.map(singleTestimonial => <SingleTestimonial key={singleTestimonial.id} singleTestimonial={singleTestimonial}></SingleTestimonial>)
                }
            </div>
        </div>
    );
};

export default TestimonialSection;