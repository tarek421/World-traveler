import React from 'react';
import './Header.css'

const HeaderMain = () => {
    return (
        <main className='d-flex justify-content-center' style={{ height: '100vh' }}>
            <div className='header-caption'>
                <div className='text-center'>
                    <h5>EXPLORE THE WORLD</h5>
                    <h1>A MORE REWARDING <br /> WAY TO TRAVEL</h1>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;