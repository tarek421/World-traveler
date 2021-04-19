import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    return (
        <div className="contact-container d-flex align-items-center p-5">
            <div className="container">
                <h2 className='text-center text-white'>Get in Touch With Us</h2>
                <p className='text-center text-white mb-3'>World’s leading non-asset- based supply chain management companies, we design and implement industry-leading. We specialise in intelligent & effective search and believes business.</p>
                <div className="row mt-5">
                    <div className="col-md-7">
                        <div className="text-left">
                            <div className="mt-4">
                                <div className='d-flex text-white'>
                                    <FontAwesomeIcon style={{width:'75px'}} className='contact-icon' icon={faMapMarkerAlt} />
                                    <h4>837 Castle Hill Ave. Bronx NY 33195 <br /> United States</h4>
                                </div>
                                <br />
                                <div className='d-flex text-white'>
                                    <FontAwesomeIcon style={{width:'75px'}} className='contact-icon' icon={faPhoneAlt} />
                                    <div>
                                        <h4>718-825-3320</h4>
                                        <h4>212-632-4120</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <form>
                            <div className="form-group">
                                <input style={{width:'80%'}} placeholder='Name' type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input style={{width:'80%'}} placeholder='Email' type="email" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <textarea placeholder='Message' className="form-control" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;