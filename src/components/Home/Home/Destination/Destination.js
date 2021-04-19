import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';

const useStyles = makeStyles({
    root: {
        maxWidth: 320,
        height: 300,
    },
    media: {
        height: 300,
    },
});

const Destination = ({ destination }) => {
    const classes = useStyles();
    console.log(destination.name)
    const {_id, destinationName, description, imageURL } = destination;


    let history = useHistory();
    const handleClick = (_id) => {
        history.push(`/destinationBook/${_id}`);
    }
    

    return (
        <div className="col-md-4">
            <div className="m-3">
                <Card onClick={()=>handleClick(_id)} className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={imageURL}
                            title="Contemplative Reptile"
                        />
                        <div className="overlay">
                            <div className="text">
                                <h5>{destinationName}</h5>
                                <Button>Book Now</Button>
                            </div>
                        </div>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default Destination;