import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    useTitle('Services')
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 m-12'>
            {
                services.map(service=> <ServiceCard 
                    service={service}
                    key={service._id}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Services;