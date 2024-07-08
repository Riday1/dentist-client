import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import SingleInfoCard from './SingleInfoCard';
const Stats = () => {

    const cardInfos = [
        {
            id: 1,
            name: 'Opening Hours',
            info: 'Opening And Closing Time: 1:00PM - 9:00PM',
            bgClass: "bg-gradient-to-r from-primary to-secondary",
            image: clock
        },
        {
            id: 2,
            name: 'Visit Our Office',
            info: 'road-1,Nikujno-2,Khilkhet,Dhaka,Bangladesh ',
            bgClass: "bg-accent",
            image: marker
        },
        {
            id: 3,
            name: 'Contact Us Now',
            info: '+8801518327475',
            bgClass: "bg-gradient-to-r from-primary to-secondary",
            image: phone
        },
    ]
    return (
        <div className=" grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 my-20 ">
            {
                cardInfos.map(cardInfo => <SingleInfoCard key={cardInfo.id} cardInfo={cardInfo}></SingleInfoCard>)
            }
        </div>
    );
};

export default Stats;