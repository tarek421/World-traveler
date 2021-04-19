import { faHome, faListAlt, faPlus, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderList from './OrderList';

const Admin = () => {
    return (
        <div>
            <div class="sidenav">
                <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                <Nav.Link as={Link} to="/orderList"><FontAwesomeIcon icon={faListAlt} /> Order List</Nav.Link>
                <Nav.Link as={Link} to="/addServices"><FontAwesomeIcon icon={faPlus} /> Add Services</Nav.Link>
                <Nav.Link as={Link} to="/makeAdmin"><FontAwesomeIcon icon={faUser} /> Make Admin</Nav.Link>
                <Nav.Link as={Link} to="/manageServices"><FontAwesomeIcon icon={faTasks} /> Manage Services</Nav.Link>
            </div>
            <div class="main">
                <OrderList/>
            </div>
        </div>
    );
};

export default Admin;