import { faHome, faListAlt, faPlus, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Nav, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderTable from './OrderTable';

const OrderList = () => {
    const [order, setOrder] = useState([]);
    console.log(order)
    useEffect(() => {
        fetch('https://nameless-headland-26950.herokuapp.com/order')
            .then(response => response.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div>
            <div class="sidenav">
                <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                <Nav.Link as={Link} to="/orderList"><FontAwesomeIcon icon={faListAlt} /> Order List</Nav.Link>
                <Nav.Link as={Link} to="/addServices"><FontAwesomeIcon icon={faPlus} /> Add Services</Nav.Link>
                <Nav.Link as={Link} to="/makeAdmin"><FontAwesomeIcon icon={faUser} /> Make Admin</Nav.Link>
                <Nav.Link as={Link} to="/manageServices"><FontAwesomeIcon icon={faTasks} /> Manage Services</Nav.Link>
            </div>
            <div style={{marginLeft:'215px'}} class="main">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#Order Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Destination</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            order.map(order => <OrderTable order={order}></OrderTable>)
                        }
                    </tbody>

                       
                </Table>
            </div>
        </div>
    );
};

export default OrderList;