import React  from 'react';
import './Rivew.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Rivew from './Rivew';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const testimonialData = [
//     {
//         id:1,
//         title:'Best tour agency, excellent vacations',
//         description:"My testimonial is from a customer or client. They may be an unknown person to the reader, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//         img: carousel_1,
//         client:'Nick Doe'
//     },
//     {
//         id:2,
//         title:'Enjoy my vacations, really fun great agency',
//         description:"My testimonial is from a customer or client. They may be an unknown person to the reader, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//         img: carousel_1,
//         client:'Nick Doe'
//     },
//     {
//         id:3,
//         title:'Wonderfull tour agancy, loved my vacations',
//         description:"My testimonial is from a customer or client. They may be an unknown person to the reader, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//         img: carousel_1,
//         client:'Nick Doe'
//     }
// ]
const Rivews = () => {
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
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <h2>Enjoy my vacations, really fun great agency</h2>
                                <p class="customer-opinion">Start with your super fans. These are your happiest clients and customers. They may have 
                                already offered to be a reference so they won’t mind the request. </p>
                                <img src='https://i.ibb.co/P1LvPdf/persion-2.jpg' alt="" />
                                <div id="image-caption">Nick Doe</div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <h2>Wonderfull tour agancy, loved my vacations</h2>
                                <p class="customer-opinion">An endorsement is typically a well-known influencer giving their public support for a brand. 
                                But a testimonial is from a customer or client. They may be an unknown person to the reader.</p>
                                <img src='https://i.ibb.co/56pJjhv/persion-1.jpg' alt="" />
                                <div id="image-caption">Nick Doe</div>
                            </div>
                        </div>
                    </div> <a className="carousel-control-prev" href="#demo" data-slide="prev"> <FontAwesomeIcon icon={faArrowLeft} /> </a> <a className="carousel-control-next" href="#demo" data-slide="next"> <FontAwesomeIcon icon={faArrowRight} /> </a>
                </div>
            </div>
        </div>
    );
};

export default Rivews;




