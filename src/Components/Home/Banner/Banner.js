import React from 'react';
import image1 from '../../../assets/1.jpg';

const Banner = () => {
    return (
        <div className='lg:h-screen bg-center bg-no-repeat bg-cover flex items-center justify-center' style={{ 
            backgroundImage: `url(${image1})` 
          }}>
            <div className='text-center text-white p-16'>
                <h2 className='text-4xl mb-5 font-semibold'>Ready to take you beyond your imagination</h2>
                <p>With the uniqueness of my concepts and hard working quality, I am always a step ahead from others. <br />
                    I take photos so perfectly that you will feel the same that you had felt in that very special day <br /> with your very special one.
                </p>
            </div>
        </div>
    );
};

export default Banner;