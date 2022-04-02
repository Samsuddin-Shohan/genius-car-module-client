import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service,id }) => {
    // const {service} = props;
    const {  name, price, description, img } = service;
    //console.log(service);
    //console.log(_id);
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;