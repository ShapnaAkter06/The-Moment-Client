import React from 'react';
import about from '../../../assets/about.jpg'

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-12 p-12 items-center bg-gray-200'>
            <img src={about} alt="" />
            <div>
                <h2 className='text-4xl font-medium mb-5 uppercase'>About Me</h2>
                <p>
                    Photography has always been one of my favorite hobbies. When I take pictures, it's like seeing things in a new perspective literally and figuratively. you can go up to a flower and see the texture of the petal or put a caterpillar on your finger and see the little hairlike things on it's body. Thing about the camera and the lens is that it lets you see people, places, etc. in a whole new perspective and it helps to see things from a different view. From photography, I realized that getting a different view of things means you have a more open mind to the world. Which is why itss always been my favorite hobby.
                </p>
            </div>
        </div>
    );
};

export default About;