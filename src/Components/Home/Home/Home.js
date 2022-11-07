import React from 'react';
import Contact from '../../Contact/Contact';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;