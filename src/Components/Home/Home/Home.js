import React from 'react';
import Contact from '../../Contact/Contact';
import HomeService from '../../HomeService/HomeService';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HomeService></HomeService>
            <Contact></Contact>
        </div>
    );
};

export default Home;