import React from 'react';
import image1 from '../../../assets/1.jpg';
import image2 from '../../../assets/2.jpg';
import image3 from '../../../assets/3.jpg';
import image4 from '../../../assets/4.jpg';
import image5 from '../../../assets/5.jpg';


const Banner = () => {
    return (
        <div className="relative flex items-center justify-center w-full dark:text-gray-50">
            <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                    <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </button>
            <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                    <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={image1} alt="Image 1" />
                </div>
                <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                    <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={image2} alt="Image 2" />
                </div>
                <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                    <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={image3} alt="Image 3" />
                </div>
                <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                    <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={image4} alt="Image 4" />
                </div>
                <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                    <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={image5} alt="Image 5" />
                </div>
            </div>
            <button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                    <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </button>
        </div>
    );
};

export default Banner;