import React from 'react';

const Card = ({ image, title, text, link }) => {
    return (
        <div className="card" style={{ width: "18rem"}}>
            <img className="card-img-top" src={image} alt={title} style={{height:'11rem'}}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text" style={{ fontSize: "0.875rem" }}>
                    {text}
                </p>
                <a href={link} className="btn btn-primary">Learn More</a>
            </div>
        </div>
    );
};

export default Card;
