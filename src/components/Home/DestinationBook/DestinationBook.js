import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Book from './Book';
import './DestinationBook.css';
import { faCartPlus, faEnvelope, faHome, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';

const DestinationBook = () => {
    let { destinationId } = useParams();

    const [booking, setBooking] = useState({});
    const { _id, destinationName, description, imageURL } = booking;
    console.log( _id, destinationName, description, imageURL )
    useEffect(() => {
        fetch('https://nameless-headland-26950.herokuapp.com/services/'+destinationId)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[destinationId])

    return (
        <div>
            <div class="sidenav">
                <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                <Nav.Link as={Link} to="/book"><FontAwesomeIcon icon={faCartPlus} /> Book</Nav.Link>
                <Nav.Link as={Link} to="/bookingList"><FontAwesomeIcon icon={faListAlt} /> Booking List</Nav.Link>
                <Nav.Link as={Link} to="/review"><FontAwesomeIcon icon={faEnvelope} /> Rivew</Nav.Link>
            </div>
            <div class="main">
                <Book />
            </div>
        </div>
    );
};

export default DestinationBook;