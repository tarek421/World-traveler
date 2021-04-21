import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './DestinationBook.css';
import { faCartPlus, faEnvelope, faHome, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OrderForm from './OrderForm';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
    },
    media: {
        height: 300,
    },
});

const DestinationBook = () => {
    const classes = useStyles();
    let { destinationId } = useParams();

    const [booking, setBooking] = useState({});
    const { _id, destinationName, description, imageURL } = booking;
    console.log(_id, destinationName, description, imageURL)
    useEffect(() => {
        fetch('https://nameless-headland-26950.herokuapp.com/services/' + destinationId)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [destinationId])

    return (
        <div>
            <div class="sidenav">
                <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                <Nav.Link as={Link} to="/book"><FontAwesomeIcon icon={faCartPlus} /> Book</Nav.Link>
                <Nav.Link as={Link} to="/bookingList"><FontAwesomeIcon icon={faListAlt} /> Booking List</Nav.Link>
                <Nav.Link as={Link} to="/review"><FontAwesomeIcon icon={faEnvelope} /> Rivew</Nav.Link>
            </div>
            <div class="main">
                <Card className={classes.root}>
                    <div className="row">

                        <div className="col-6">
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={imageURL}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {destinationName}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </div>

                        <div className="col-6 mt-5">
                            <ProcessPayment></ProcessPayment>
                                <OrderForm destinationName={destinationName}></OrderForm>
                        </div>

                    </div>
                    <CardActions>
                        <Button size="small" color="primary">
                            Book Now
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default DestinationBook;