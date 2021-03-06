import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genius-car-serve.herokuapp.com/services")
      .then((res) => res.json())
      .then((res) => {
        setServices(res);
        console.log(res);
      });
  }, []);
  // console.log(services);

  return (
    <div id="services">
      <h2 className="text-primary mt-5">Our services</h2>
      <div className="service-container">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service.data}
            id={service._id}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
