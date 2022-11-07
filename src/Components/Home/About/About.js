import React from 'react';
import about from '../../../assets/about.jpg'

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-12 p-12 items-center bg-gray-200'>
            <img src={about} alt="" />
            <div>
                <h2 className='text-4xl font-medium mb-5 uppercase'>Who we are</h2>
                <p>The Moments was created by a group of young engineering students of Islamic University of Technology (IUT), lead by ZK Nawaf who chose their passion as their profession and this incident of their life have been pushing them constantly to expand their potentiality. <br /> <br /> 
                Right now The Moments has the highest number of fan following among Bangladeshi wedding photography Facebook pages. Among many other achievements we recognize this as the most important one as it directly indicates how many people are relating with us personally. Their likes and comments inspire us to do better every day. <br /><br />
                In the last 6 years we have covered more than 6800+ events. Our team is now a strong team of 68 Photographers, cinematographers & Editors. All our photographers are highly educated, most of them are engineers. We have two dedicated branch in Dhaka & Chittagong to meet the demand of clients all over bangladesh. Recently we have taken Dream Weaver to an international level by launching our oce in Singapore , Malaysia and Greece specially for the client who want their pre/post wedding abroad. We have started Dream Weaver Youth Academy (DWYA) on 2015.
                </p>
            </div>
        </div>
    );
};

export default About;