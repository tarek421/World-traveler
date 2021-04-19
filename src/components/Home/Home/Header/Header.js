import React from 'react';
import HeaderMain from './HeaderMain';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
    return (
        <div className='header-style'>
            <Navigation/>
            <HeaderMain/>
        </div>
    );
};

export default Header;