import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import HomeService from '../../HomeService/HomeService';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

const Home = () => {
    useTitle('Home')
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