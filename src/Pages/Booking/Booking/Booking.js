import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service,setService]= useState({});
    useEffect(()=>{
        axios.get(`http://localhost:5000/service/${serviceId}`)
        .then(res =>setService(res.data.data))
    },[])
    return (
        <div>
            
            <h3>Service Name: {service.name}</h3>
            <h3>Service Price: {service.price}</h3>
            <img src={service.img} alt="" />
            <p>{service.description}</p>
        </div>
    );
};

export default Booking;