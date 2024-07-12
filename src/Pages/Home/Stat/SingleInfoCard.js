import React from 'react';

const SingleInfoCard = ({ cardInfo }) => {
    const { bgClass, id, name, info, image } = cardInfo
    return (
        <div className={`shadow-md flex items-center  p-12  rounded-lg ${bgClass}`}>
            <img src={image} alt="" />
            <div className='ml-4'>
                <h1 className='text-lg mb-4 font-semibold text-white'>{name}</h1>
                <p className='text-sm text-white'>{info}</p>
            </div>
        </div>
    );
};

export default SingleInfoCard;