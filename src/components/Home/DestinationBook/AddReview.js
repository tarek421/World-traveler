import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faEnvelope, faHome, faListAlt, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DestinationBook.css';

const AddReview = () => {

    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            rivewTitle:data.rivewTitle,
            rivewDatail: data.rivewDatail,
            name: data.name,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/Addrivew`;
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'bceb6fc7400cf49b9247539f272f4343');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
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
                <form className="container" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row formStyle">
                        <div className="col-md-6">
                            <h5>Rivew</h5>
                            <input defaultValue="" placeholder='Add your rivew Title' {...register("rivewTitle")} />
                            <textarea defaultValue="" placeholder='Add your rivew Detail' {...register("rivewDatail")} />
                        </div>

                        <div className="col-md-6">
                            <h5>Add your photo</h5>
                            <link href="https://cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/css/ratchet.css" rel="stylesheet" />
                            <label style={{ width: '200px', padding: '10px', fontSize: '18px', borderRadius: '15px' }} for="imageUpload" class="btn"><FontAwesomeIcon icon={faCloudUploadAlt} /> Uploade image</label>
                            <input id="imageUpload" accept="image/*" style={{ display: 'none' }} type="file" name="exampleRequired" onChange={handleImageUpload} />
                        </div>

                        <div className="col-md-6">
                            <h5>Name</h5>
                            <input placeholder='Enter your full Name' {...register("name")}></input>
                        </div>

                        <div className="col-md-6 mt-5 pt-3">
                            <input className='s-btn' type="submit" />
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddReview;