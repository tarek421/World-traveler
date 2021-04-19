import React from 'react';
import logo from '../../../images/logo.png'
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const socialIcon = {color: '#fff', fontSize: '35px', marginRight: '25px'}
    return (
        <div style={{ background: '#2485b0', margin: 'auto', textAlign: 'center' }}>
            <div className='m-5 p-5 m-auto w-50' expand="lg">
                <div href="home">
                    <img style={{ height: '50px' }} src={logo} alt="" />
                    <span className='brand-name'>TRAVEL</span>
                </div>
                <br />
                <div className="text-center d-flex justify-content-center">
                    <Nav.Link className="mr-3 text-white" href="#home">Home</Nav.Link>
                    <Nav.Link className="mr-3 text-white" href="#link">About</Nav.Link>
                    <Nav.Link className="mr-3 text-white" href="#home">Reviews</Nav.Link>
                    <Nav.Link className="mr-3 text-white" href="#home">Blog</Nav.Link>
                    <Nav.Link className="mr-3 text-white" href="#link">Contact Us</Nav.Link>
                </div>

                <div className="text-center mt-4 d-flex justify-content-center">
                    <FontAwesomeIcon href="http://facebook.com" style={socialIcon} icon={faFacebook} />
                    <FontAwesomeIcon style={socialIcon} icon={faGoogle} />
                    <FontAwesomeIcon style={socialIcon} icon={faTwitter} />
                    <FontAwesomeIcon style={socialIcon} icon={faYoutube} />
                    <FontAwesomeIcon style={socialIcon} icon={faLinkedin} />
                </div>
            </div>
        </div>
    );
};

export default Footer;