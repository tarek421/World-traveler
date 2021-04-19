import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DestinationBook.css';
import { faCartPlus, faEnvelope, faHome, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const Book = (props) => {
    console.log(props._id)
    // const { imageURL, authorName, _id } = props.book;

    const history = useHistory()
    const handleBuyNow = (_id) => {
        history.push(`/book/${_id}`);
    }
    return (
        <div>
            <div class="sidenav">
                <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                <Nav.Link as={Link} to="/book"><FontAwesomeIcon icon={faCartPlus} /> Book</Nav.Link>
                <Nav.Link as={Link} to="/bookingList"><FontAwesomeIcon icon={faListAlt} /> Booking List</Nav.Link>
                <Nav.Link as={Link} to="/review"><FontAwesomeIcon icon={faEnvelope} /> Rivew</Nav.Link>
            </div>
            <div class="main">
                
            </div>
        </div>
    );
};

export default Book;