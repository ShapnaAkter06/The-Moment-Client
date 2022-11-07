import React from 'react';

const ServiceCard = ({ service }) => {
    console.log(service);
    const { image, price, name, _id, description } = service;
    return (
        <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">{description}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
            </div>
        </div>
    );
};

export default ServiceCard;