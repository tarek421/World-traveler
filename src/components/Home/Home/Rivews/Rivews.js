import React, {useState, useEffect}  from 'react';
import './Rivew.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Rivew from './Rivew';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Rivews = () => {
    const [rivew, setRivew] = useState([]);
    console.log(rivew)
    useEffect(()=>{
        fetch('https://nameless-headland-26950.herokuapp.com/rivew')
        .then(res => res.json())
        .then(data => setRivew(data))
    },[])
    return (
        <div className="mt-5 pt-5 slider-background">
            <div className="container">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                            <div className="carousel-caption">
                                <h2>Best tour agency, excellent vacations</h2>
                                <p class="customer-opinion">My testimonial is from a customer or client. They may be an unknown person to the reader, you need 
                                to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                <img src='https://i.ibb.co/J7trTS4/persion-3.jpg' alt="" />
                                <div id="image-caption">Nick Doe</div>
                            </div>
                        </div>
                         
                        {
                            rivew.map(testimonial => <Rivew testimonial={testimonial}></Rivew>)
                        }

                    </div> <a className="carousel-control-prev" href="#demo" data-slide="prev"> <FontAwesomeIcon icon={faArrowLeft} /> </a> <a className="carousel-control-next" href="#demo" data-slide="next"> <FontAwesomeIcon icon={faArrowRight} /> </a>
                </div>
            </div>
        </div>
    );
};

export default Rivews;




