import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    // console.log(service);
    const { image, price, name, _id, description } = service;
    return (
        <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">{description.slice(0, 100) + '...'}</p>
                    <p className="dark:text-gray-100">Price : $ {price}</p>
                </div>
                <Link to={`/details/${_id}`}>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-primary">
                        Read more
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;