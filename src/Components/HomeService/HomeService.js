import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const HomeService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-gray.vercel.app/home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-12'>
            <div className='text-center mb-4'>
                <p className="text-4xl font-bold text-orange-600">My Services</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 mx-12'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/services'>
                    <button className='btn btn-info font-bold'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeService;