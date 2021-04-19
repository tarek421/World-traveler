import React from 'react';

const Rivew = ({ rivew }) => {
    const { title, description, img, client } = rivew;
    return (
        <div>
            <div className="carousel-item active">
                <div className="carousel-caption">
                    <h2>{title}</h2>
                    <p class="customer-opinion">{description}</p>
                    <img src={img} alt="" />
                    <div id="image-caption">{client}</div>
                </div>
            </div>
        </div>
    );
};

export default Rivew;