import React from 'react';

const SingleServiceCard = ({ singleService }) => {
    const { id, name, text, image } = singleService;
    return (
        <div className='p-8 shadow-lg text-center hover:scale-105 duration-200'>
            <img src={image} className='inline-block mb-4' alt="" />
            <div className='info text-center'>
                <h1 className='text-2xl font-semibold mb-4'>{name}</h1>
                <p className='text-md'>{text}</p>
            </div>
        </div >
    );
};

export default SingleServiceCard;