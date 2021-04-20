import React, { useEffect, useState } from 'react';
import Destination from './Destination';
import './Destination.css';

const MainDestinations = () => {
    const [destinationData, setDestinationData] = useState([]);
    useEffect(() => {
        fetch('https://nameless-headland-26950.herokuapp.com/services')
            .then(response => response.json())
            .then(data => setDestinationData(data))
    }, [])
    return (
        <div className=''>
            <div className="container text-center mt-5">
                <h2 className='destination-title'>Main Destinations</h2>
                <p className='w-50 m-auto'>Search our website for the best destinations in the world, where you can enjoy the best vacations.</p>
                <div className="row mt-5">
                    {
                        destinationData.map(destination => <Destination destination={destination} key={destination.id}></Destination>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainDestinations;