import React from 'react';

const Rivew = ({ testimonial }) => {
    console.log(testimonial)
    const { name, rivewTitle,rivewDatail, imageURL } = testimonial;
    return (
        <div className="carousel-item">
            <div className="carousel-caption">
                <h2>"{rivewTitle}"</h2>
                <p>"{rivewDatail}"</p>
                <img src={imageURL} alt="" />
                <div id="image-caption">{name}</div>
            </div>
        </div>
    );
};

export default Rivew;