import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png';
import Cavity from '../../../assets/images/cavity.png';
import Whitening from '../../../assets/images/whitening.png'
import SingleServiceCard from './SingleServiceCard';
const Services = () => {
    const allServices = [
        {
            id: 1,
            name: "Fluoride Treatment",
            text: "We have a professional dentist who is master in fluoride treatment.This is a very easy and simple procedure.",
            image: Fluoride
        },
        {
            id: 2,
            name: "Cavity Filling",
            text: "Our dentist are specialized in filing cavity whole. During this procedure we won't get any pain ",
            image: Fluoride
        },
        {
            id: 3,
            name: "Teeth Whitening",
            text: "My polishing your teeth it becomes more whiter ever before",
            image: Fluoride
        }
    ]
    return (
        <div className='my-20 '>
            <p className='text-xl text-primary text-center font-bold'>Our Services</p>
            <h1 className='text-5xl font-semibold text-center mt-5'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-10 my-20 '>
                {
                    allServices.map(singleService => <SingleServiceCard key={singleService.id} singleService={singleService}></SingleServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;