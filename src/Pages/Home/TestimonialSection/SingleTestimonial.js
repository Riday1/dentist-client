import React from 'react';

const SingleTestimonial = ({ singleTestimonial }) => {
    const { customer_name, review_text, id, image, address } = singleTestimonial;
    return (
        <div className='p-8 shadow-md rounded-md'>
            <p className='text-lg text-justify'>{review_text}</p>
            <div className='flex items-center mt-5'>
                <div className="avatar">
                    <div className="ring-primary ring-offset-primary-100 w-16 rounded-full ring ring-offset-2">
                        <img src={image} className='' alt="" />
                    </div>
                </div>
                <div className='ml-4'>
                    <h2 className='text-xl font-semibold'>{customer_name}</h2>
                    <p className='font-semibold text-gray-400'>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;