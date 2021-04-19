import React from 'react';
import logo from '../../../../images/logo.png'
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="d-flex justify-content-center">
            <Navbar className='w-75 navbar mt-3' expand="lg">
            <Navbar.Brand as={Link} to="/">
                <img style={{height:'50px'}} src={logo} alt="" />
                <span className='brand-name'>TRAVEL</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} className="mr-3 text-white" to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} className="mr-3 text-white" to="/admin">Admin</Nav.Link>
                    <Nav.Link as={Link} className="mr-3 text-white" to="/reviews">Reviews</Nav.Link>
                    <Nav.Link as={Link} className="mr-3 text-white" to="login">Login</Nav.Link>
                    <Nav.Link as={Link} className="mr-3 text-white" to="contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default Navigation;