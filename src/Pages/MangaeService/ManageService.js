import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genius-car-serve.herokuapp.com/services")
      .then((res) => res.json())
      .then((res) => {
        setServices(res);
        // console.log(res);
      });
  }, []);
  //console.log(services);
  const handleDelete = (id) => {
    axios
      .delete(`https://genius-car-serve.herokuapp.com/services/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          const remainingService = services.filter(
            (service) => id !== service._id
          );
          setServices(remainingService);
        }
      });
  };
  return (
    <div>
      <h1>hello</h1>
      {services.map((service) => (
        <div>
          <li>{service.data.name}</li>
          <button onClick={() => handleDelete(service._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
