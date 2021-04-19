import React from 'react';
import MainDestinations from './Destination/MainDestinations';
import Header from './Header/Header';
import Rivews from './Rivews/Rivews';
import Footer from '../Footer/Footer';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header/>
            <MainDestinations/>
            <Rivews/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;